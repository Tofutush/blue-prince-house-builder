<script lang="ts">
	import html2canvas from 'html2canvas';
	import Directory from './components/Directory.svelte';
	import House from './components/House.svelte';
	import OuterRoom from './components/OuterRoom.svelte';
	import { getRoom, roomList, rotateDoors } from './functions';
	import type { Direction, DirRoom, draftType, PlacedRoom, RoomData } from './types';
	import Info from './components/Info.svelte';
	import { direction } from 'html2canvas/dist/types/css/property-descriptors/direction';

	let draft: draftType = $state({
		active: false,
		coords: [0, 0],
		direction: null as Direction | null,
		monk: false,
	});

	let outerRoom: RoomData | null = $state(null);
	let house: (PlacedRoom | null)[][] = $state(Array.from({ length: 9 }, () => Array(5).fill(null)));
	let infoShown = $state(true);

	function placeRoom(room: PlacedRoom) {
		house[room.coords[0]][room.coords[1]] = room;
	}

	placeRoom({ room: getRoom('Entrance Hall'), coords: [8, 2], direction: 'n' });
	placeRoom({ room: getRoom('Antechamber'), coords: [0, 2], direction: 'n' });

	function initiateDraft(coords: number[], direction: Direction) {
		if (draft.active) throw new Error('drafting in progress, how could you start another you dumbfuck!');
		draft.active = true;
		draft.coords = coords;
		draft.direction = direction;
	}
	function initiateDraftOuter() {
		if (draft.active) throw new Error('drafting in progress, dare you make an outer draft??');
		draft.active = true;
		draft.outer = true;
	}
	function draftRoom(room: RoomData) {
		if (draft.outer) outerRoom = room;
		else placeRoom({ room: room, direction: draft.direction as Direction, coords: [draft.coords[0], draft.coords[1]] });
		stopDrafting();
	}
	function draftTemporary(room: RoomData | null) {
		if (room == null) {
			house[draft.coords[0]][draft.coords[1]] = null;
			return;
		}
		placeRoom({ room: room, direction: draft.direction as Direction, coords: [draft.coords[0], draft.coords[1]], temporary: true });
	}
	function stopDrafting() {
		draft.active = false;
		draft.coords = [0, 0];
		draft.direction = null;
		draft.outer = false;
	}
	function selectRandom() {
		if (!draft.active) return;
		let filteredRoomList = roomList.filter((r) => getDraftingRoom({ room: r, direction: draft.direction as Direction, enabled: true }).enabled);
		draftRoom(filteredRoomList[Math.floor(Math.random() * filteredRoomList.length)]);
	}
	function deleteRoom(coords: number[]) {
		house[coords[0]][coords[1]] = null;
	}

	// used by directory to rotate rooms and disable rooms while drafting
	function getDraftingRoom(room: DirRoom) {
		if (!draft.active) throw new Error('drafting not in progress!');
		if (draft.outer) {
			room.direction = 'n';
			if (draft.monk) {
				room.enabled = true;
				return room;
			}
			if (room.room.outer) room.enabled = true;
			else room.enabled = false;
			return room;
		}
		if (!(draft.coords && draft.direction)) throw new Error('missing draft args!!');
		// special case: veranda
		if (room.room.name === 'Veranda') {
			if (draft.direction === 'e' || draft.direction === 'w') {
				room.enabled = false;
				return room;
			}
		}
		let realDoors = rotateDoors(room.room, draft.direction);
		// if any one door leads out of bounds, disable
		let enabled = true;
		if (room.room.name === 'Entrance Hall' || room.room.name === 'The Antechamber' || room.room.name === 'Room 46') enabled = false;
		else {
			for (let z = 0; z < realDoors.length; z++) {
				let coords: number[] = [];
				if (realDoors[z] === 'e') coords = [draft.coords[0], draft.coords[1] + 1];
				else if (realDoors[z] === 'w') coords = [draft.coords[0], draft.coords[1] - 1];
				else if (realDoors[z] === 'n') coords = [draft.coords[0] - 1, draft.coords[1]];
				else if (realDoors[z] === 's') coords = [draft.coords[0] + 1, draft.coords[1]];
				if (coords[0] < 0 || coords[0] > 8 || coords[1] < 0 || coords[1] > 4) enabled = false;
			}
		}
		room.direction = draft.direction;
		room.enabled = enabled;
		return room;
	}

	function exportJSON() {
		var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(house));
		var downloadAnchorNode = document.createElement('a');
		downloadAnchorNode.setAttribute('href', dataStr);
		downloadAnchorNode.setAttribute('download', 'house' + '.json');
		document.body.appendChild(downloadAnchorNode); // required for firefox
		downloadAnchorNode.click();
		downloadAnchorNode.remove();
	}
	function importJSON() {
		let files = (document.getElementById('import') as HTMLInputElement).files;
		if (!files || files.length === 0) {
			alert('please upload a file first!');
			return;
		}
		let file = files[0];
		var fr = new FileReader();
		fr.onload = () => {
			if (typeof fr.result !== 'string') return;
			let data = JSON.parse(fr.result);
			house = data as (PlacedRoom | null)[][];
		};
		fr.readAsText(file);
	}
	async function exportPNG() {
		let houseEl = document.getElementById('house');
		let outerEl = document.getElementById('outer-room');
		if (!houseEl || !outerEl) return;

		let exportWrap = document.createElement('div');
		exportWrap.id = 'export-wrap';
		exportWrap.style.position = 'fixed';
		exportWrap.style.padding = '1em';
		exportWrap.style.paddingBottom = '0';
		exportWrap.style.left = '-99999px';
		exportWrap.style.background = '#fff';

		let side = document.createElement('div');
		side.style.display = 'flex';
		side.append(houseEl, outerEl);

		houseEl.style.width = '400px';
		houseEl.style.margin = '0';
		outerEl.style.alignSelf = 'end';
		outerEl.style.marginLeft = '1em';

		let credit = document.createElement('p');
		credit.innerHTML = 'Made with Blue Prince House Builder by Tofutush<br/>https://tofutush.github.io/blue-prince-house-builder/';
		exportWrap.append(side, credit);

		document.body.appendChild(exportWrap);
		let canvas = await html2canvas(exportWrap, { scale: 4 });

		// restore DOM
		document.querySelector('main')?.prepend(houseEl);
		document.getElementById('middle')?.appendChild(outerEl);

		houseEl.style.width = 'fit-content';
		houseEl.style.margin = '1em';
		outerEl.style.alignSelf = '';
		outerEl.style.marginLeft = '';

		exportWrap.remove();

		let link = document.createElement('a');
		link.download = 'house.png';
		link.href = canvas.toDataURL('image/png');
		link.click();
	}

	function closeInfo() {
		infoShown = false;
	}
</script>

<main>
	{#if infoShown}
		<Info proceed={closeInfo} />
	{:else}
		<House {house} {draft} draftStart={initiateDraft} {deleteRoom} />
		<section id="middle">
			<section id="buttons">
				{#if draft.active}
					{#if draft.outer}
						<p>You're currently drafting the Outer Room!</p>
					{:else}
						<p>You're currently drafting towards direction {draft.direction?.toUpperCase()} into Rank {9 - draft.coords[0]} Column {draft.coords[1] + 1}!</p>
					{/if}
					<button onclick={stopDrafting}>Cancel Drafting</button>
					<hr />
					<button onclick={selectRandom}>Use Blessing of the Berry Picker</button>
					<p>(Selects a draftable room at random.)</p>
				{:else}
					<button onclick={() => (infoShown = true)}>Show info</button>
					<label><input type="checkbox" bind:checked={draft.monk} />Blessing of the Monk (draft any room as the Outer Room)</label>
					<button onclick={exportPNG}>Generate PNG</button>
					<button onclick={exportJSON}>Export JSON</button>
					<input type="file" accept="application/json" multiple={false} id="import" />
					<button onclick={importJSON}>Import JSON</button>
				{/if}
			</section>
			<OuterRoom room={outerRoom} {draft} draftStart={initiateDraftOuter} />
		</section>
		<Directory {draft} draftDone={draftRoom} {draftTemporary} {getDraftingRoom} />
	{/if}
</main>

<style>
	main {
		display: flex;
		align-items: stretch;
	}
	#middle {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 1em 0;
		width: 14em;
	}
	#buttons button {
		cursor: pointer;
		display: block;
		margin: 0.5em 0;
	}
	hr {
		margin: 1em 0;
	}
	@media screen and (max-width: 870px) {
		main {
			display: block;
		}
	}
</style>
