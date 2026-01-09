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

<style>
	#directory {
		margin: 0 1em;
		flex: 1;
		overflow-y: scroll;
	}
	details {
		margin: 1em 0;
		& summary {
			background-color: #0003;
			padding: 0.5em 1em;
			border-radius: 0.3em;
			cursor: pointer;
		}
		& .dir-rooms {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			gap: 1em;
			margin: 1em;
			& img {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
