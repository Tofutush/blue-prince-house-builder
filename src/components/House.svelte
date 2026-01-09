<script lang="ts">
	import { getRoom } from '../functions';
	import type { PlacedRoom } from '../types';
	import RoomPlaced from './RoomPlaced.svelte';

	let house: PlacedRoom[][] = Array.from({ length: 9 }, () => Array(5).fill(null));

	function placeRoom(room: PlacedRoom) {
		house[room.coords[0]][room.coords[1]] = room;
	}

	placeRoom({ room: getRoom('Entrance Hall'), coords: [8, 2], direction: 'n' });
	placeRoom({ room: getRoom('The Foundation'), coords: [4, 2], direction: 'e' });
</script>

<section id="house">
	{#each house as row}
		{#each row as room}
			<div class="room">
				{#if room?.room}
					<RoomPlaced {room} />
				{/if}
			</div>
		{/each}
	{/each}
</section>

<style>
	#house {
		display: grid;
		grid-template: repeat(9, 1fr) / repeat(5, 1fr);
		gap: 4px;
		background-color: #617694;
		width: fit-content;
		padding: 4px;
		margin: 1em;

		& > .room {
			aspect-ratio: 1;
			background-color: #40649c;
			min-width: 0;
			min-height: 0;
		}
	}
</style>
