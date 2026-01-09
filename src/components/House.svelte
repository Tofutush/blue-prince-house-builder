<script lang="ts">
	import { getRoomImgName, getRoomList } from '../functions';
	import roomImgs from '../images';
	import type { PlacedRoom } from '../types';

	let house: PlacedRoom[][] = Array.from({ length: 9 }, () =>
		Array(5).fill({
			room: null,
			direction: null,
		}),
	);

	let roomList = getRoomList();
	house[8][2] = { room: roomList[1], direction: 'n' };
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
