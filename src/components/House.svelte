<script lang="ts">
	import { rotateDoors } from '../functions';
	import type { Direction, draftType, PlacedRoom } from '../types';
	import RoomPlaced from './RoomPlaced.svelte';

	let { house, draft, draftStart }: { house: (PlacedRoom | null)[][]; draft: draftType; draftStart: (coords: number[], direction: Direction) => void } = $props();

	function getDraftables(room: PlacedRoom) {
		let realDoors = rotateDoors(room.room, room.direction);
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
					<RoomPlaced {draftStart} {draft} {room} draftables={getDraftables(room)} />
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
		margin: 1em;

		& > .room {
			aspect-ratio: 1;
			background-color: #40649c;
			min-width: 0;
			min-height: 0;
			box-shadow: inset 0 0 0 2px #617694;
		}
	}
</style>
