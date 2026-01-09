<script lang="ts">
	import { getRoom, getRoomImg } from '../functions';
	import type { PlacedRoom } from '../types';

	let house: PlacedRoom[][] = Array.from({ length: 9 }, () =>
		Array(5).fill({
			room: null,
			direction: null,
		}),
	);

	function placeRoom(coords: number[], room: PlacedRoom) {
		house[coords[0]][coords[1]] = room;
	}

	placeRoom([8, 2], { room: getRoom('Entrance Hall'), direction: 'n' });
</script>

<section id="house">
	{#each house as row}
		{#each row as room}
			<div class="room">
				{#if room.room}
					<img src={getRoomImg(room.room, room.direction || 'n')} alt={room.room.name} />
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

			& > img {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
