<script lang="ts">
	import { rotateDoors } from '../functions';
	import type { Direction, draftType, PlacedRoom } from '../types';
	import RoomPlaced from './RoomPlaced.svelte';

	type Args = {
		house: (PlacedRoom | null)[][];
		draft: draftType;
		draftStart: (coords: number[], direction: Direction) => void;
		deleteRoom: (coords: number[]) => void;
	};
	let { house, draft, draftStart, deleteRoom }: Args = $props();

	function getDraftables(room: PlacedRoom) {
		let realDoors: Direction[];
		if (draft.strict) realDoors = rotateDoors(room.room, room.direction);
		else realDoors = ['n', 's', 'e', 'w'];
		return realDoors.filter((d) => {
			let coords: number[] = [];
			if (d === 'e') coords = [room.coords[0], room.coords[1] + 1];
			else if (d === 'w') coords = [room.coords[0], room.coords[1] - 1];
			else if (d === 'n') coords = [room.coords[0] - 1, room.coords[1]];
			else if (d === 's') coords = [room.coords[0] + 1, room.coords[1]];
			if (coords[0] < 0 || coords[0] > 8 || coords[1] < 0 || coords[1] > 4) return false;
			if (house[coords[0]][coords[1]] != null) return false;
			return true;
		});
	}
</script>

<section id="house">
	{#each house as row}
		{#each row as room}
			<div class="room">
				{#if room?.room}
					<RoomPlaced {draftStart} {deleteRoom} {draft} {room} draftables={getDraftables(room)} />
				{/if}
			</div>
		{/each}
	{/each}
</section>

<style>
	#house {
		display: grid;
		grid-template: repeat(9, 1fr) / repeat(5, 1fr);
		background-color: #617694;
		width: fit-content;
		padding: 2px;
		height: 100%;

		& > .room {
			aspect-ratio: 1;
			background-color: #40649c;
			height: 100%;
			width: 100%;
			min-width: 0;
			min-height: 0;
			box-shadow: inset 0 0 0 2px #617694;
		}
	}
</style>
