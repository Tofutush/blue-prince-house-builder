<script lang="ts">
	import Directory from './components/Directory.svelte';
	import House from './components/House.svelte';
	import OuterRoom from './components/OuterRoom.svelte';
	import { getRoom } from './functions';
	import type { Direction, draftType, PlacedRoom, RoomData } from './types';

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
	function selectRandom() {}
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
				<button onclick={selectRandom}>Blessing of the Cherry Picker</button>
				<p>(Selects a draftable room at random.)</p>
			{/if}
		</section>
		<OuterRoom room={outerRoom} {draft} draftStart={initiateDraftOuter} />
	</section>
	<Directory {draft} draftDone={draftRoom} {draftTemporary} />
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
