<script lang="ts">
	import { getRoom, getRoomImgName } from '../functions';
	import roomImgs from '../images';
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
					<img src={roomImgs[getRoomImgName(room.room, room.direction || 'n')]} alt={room.room.name} />
				{/if}
			</div>
		{/each}
	{/each}
</section>
