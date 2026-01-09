<script lang="ts">
	import { rotateDoors } from '../functions';
	import type { Direction, draftType, PlacedRoom } from '../types';
	import RoomPlaced from './RoomPlaced.svelte';

	let { house, draft, draftStart }: { house: PlacedRoom[][]; draft: draftType; draftStart: (coords: number[], direction: Direction) => void } = $props();

	function getDraftables(room: PlacedRoom) {
		let realDoors = rotateDoors(room.room, room.direction);
		for (let z = 0; z < realDoors.length; z++) {
			let coords: number[] = [];
			if (realDoors[z] === 'e') coords = [room.coords[0], room.coords[1] + 1];
			else if (realDoors[z] === 'w') coords = [room.coords[0], room.coords[1] - 1];
			else if (realDoors[z] === 'n') coords = [room.coords[0] - 1, room.coords[1]];
			else if (realDoors[z] === 's') coords = [room.coords[0] + 1, room.coords[1]];
			if (coords[0] < 0 || coords[0] > 8 || coords[1] < 0 || coords[1] > 4) {
				realDoors.splice(z, 1);
				continue;
			}
			if (house[coords[0]][coords[1]] != null) {
				realDoors.splice(z, 1);
				continue;
			}
		}
		return realDoors;
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
