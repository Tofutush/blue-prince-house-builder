<script lang="ts">
	import Directory from './components/Directory.svelte';
	import House from './components/House.svelte';
	import OuterRoom from './components/OuterRoom.svelte';
	import { getRoom, roomList, rotateDoors } from './functions';
	import type { Direction, DirRoom, draftType, PlacedRoom, RoomData } from './types';

	let draft: draftType = $state({
		active: false,
		coords: [0, 0],
		direction: null as Direction | null,
	});

	let outerRoom: RoomData | null = $state(null);
	let house: (PlacedRoom | null)[][] = $state(Array.from({ length: 9 }, () => Array(5).fill(null)));

	function placeRoom(room: PlacedRoom) {
		house[room.coords[0]][room.coords[1]] = room;
	}

	placeRoom({ room: getRoom('Entrance Hall'), coords: [8, 2], direction: 'n' });
	placeRoom({ room: getRoom('The Foundation'), coords: [7, 2], direction: 'w' });
	placeRoom({ room: getRoom('The Foundation'), coords: [4, 2], direction: 'e' });

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
		draft = {
			active: false,
			coords: [0, 0],
			direction: null as Direction | null,
			outer: false,
		};
	}
	function selectRandom() {
		if (draft.active && draft.direction && !draft.outer) {
			let filteredRoomList = roomList.filter((r) => getDraftingRoom({ room: r, direction: draft.direction as Direction, enabled: true }).enabled);
			console.log(filteredRoomList);
		}
	}

	// used by directory to rotate rooms and disable rooms while drafting
	function getDraftingRoom(room: DirRoom) {
		if (!draft.active) throw new Error('drafting not in progress!');
		if (draft.outer) {
			if (room.room.outer) room.enabled = true;
			else room.enabled = false;
			room.direction = 'n';
			return room;
		}
		if (!(draft.coords && draft.direction)) throw new Error('missing draft args!!');
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
</script>

<main>
	<House {house} {draft} draftStart={initiateDraft} />
	<section id="middle">
		<section id="buttons">
			{#if draft.active}
				{#if draft.outer}
					<p>You're currently drafting the Outer Room!</p>
				{:else}
					<p>You're currently drafting towards direction {draft.direction?.toUpperCase()} into Rank {9 - draft.coords[0]} Column {draft.coords[1] + 1}!</p>
				{/if}
				<button onclick={stopDrafting}>Cancel</button>
				<button onclick={selectRandom}>Use Blessing of the Berry Picker</button>
				<p>(Selects a draftable room at random.)</p>
			{/if}
		</section>
		<OuterRoom room={outerRoom} {draft} draftStart={initiateDraftOuter} />
	</section>
	<Directory {draft} draftDone={draftRoom} {draftTemporary} {getDraftingRoom} />
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
		width: 10em;
	}
</style>
