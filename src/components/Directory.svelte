<script lang="ts">
	import { getRoomImg, roomList } from '../functions';
	import type { RoomDir } from '../types';

	let directory: RoomDir[] = roomList.map((r) => {
		return { room: r, direction: 'n', enabled: true };
	});
</script>

<section id="directory">
	<details class="dir-section">
		<summary>Rooms 1 - 12</summary>
		<div class="dir-rooms">
			{#each directory.slice(0, 12) as room}
				<img src={getRoomImg(room.room, 'n')} alt={room.room.name} />
			{/each}
		</div>
	</details>
</section>
