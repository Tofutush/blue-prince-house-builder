<script lang="ts">
	import { getRoomImg, roomList } from '../functions';
</script>

<section id="directory">
	<details class="dir-section">
		<summary>Rooms 1 - 12</summary>
		<div class="dir-rooms">
			{#each roomList.slice(0, 12) as room}
				<img src={getRoomImg(room, 'n')} alt={room.name} />
			{/each}
		</div>
	</details>
</section>
