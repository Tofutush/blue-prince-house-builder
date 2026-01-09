<script lang="ts">
	import { getRoomImgName, getRoomList } from '../functions';
	import roomImgs from '../images';
	import type { Direction, RoomData } from '../types';

	let house: { room: RoomData | null; direction: Direction | null }[][] = Array.from({ length: 9 }, () =>
		Array(5).fill({
			room: null,
			direction: null,
		}),
	);

	let roomList = getRoomList();
	house[3][3] = { room: roomList[0], direction: 'e' };
	house[6][1] = { room: roomList[1], direction: 'n' };
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
