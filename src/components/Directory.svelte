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
				<img src={getRoomImg(room.room, 'n')} alt={room.room.name} class={room.enabled ? '' : 'disabled'} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Rooms 13 - 24</summary>
		<div class="dir-rooms">
			{#each directory.slice(12, 24) as room}
				<img src={getRoomImg(room.room, 'n')} alt={room.room.name} class={room.enabled ? '' : 'disabled'} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Rooms 25 - 36</summary>
		<div class="dir-rooms">
			{#each directory.slice(24, 36) as room}
				<img src={getRoomImg(room.room, 'n')} alt={room.room.name} class={room.enabled ? '' : 'disabled'} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Rooms 37 - 46</summary>
		<div class="dir-rooms">
			{#each directory.slice(36, 46) as room}
				<img src={getRoomImg(room.room, 'n')} alt={room.room.name} class={room.enabled ? '' : 'disabled'} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Bedrooms</summary>
		<div class="dir-rooms">
			{#each directory.slice(46, 54) as room}
				<img src={getRoomImg(room.room, 'n')} alt={room.room.name} class={room.enabled ? '' : 'disabled'} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Hallways</summary>
		<div class="dir-rooms">
			{#each directory.slice(54, 62) as room}
				<img src={getRoomImg(room.room, 'n')} alt={room.room.name} class={room.enabled ? '' : 'disabled'} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Green Rooms</summary>
		<div class="dir-rooms">
			{#each directory.slice(62, 70) as room}
				<img src={getRoomImg(room.room, 'n')} alt={room.room.name} class={room.enabled ? '' : 'disabled'} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Shops</summary>
		<div class="dir-rooms">
			{#each directory.slice(70, 78) as room}
				<img src={getRoomImg(room.room, 'n')} alt={room.room.name} class={room.enabled ? '' : 'disabled'} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Red Rooms</summary>
		<div class="dir-rooms">
			{#each directory.slice(78, 86) as room}
				<img src={getRoomImg(room.room, 'n')} alt={room.room.name} class={room.enabled ? '' : 'disabled'} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Studio Additions</summary>
		<div class="dir-rooms">
			{#each directory.slice(86, 94) as room}
				<img src={getRoomImg(room.room, 'n')} alt={room.room.name} class={room.enabled ? '' : 'disabled'} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Found Floorplans</summary>
		<div class="dir-rooms">
			{#each directory.slice(94, 102) as room}
				<img src={getRoomImg(room.room, 'n')} alt={room.room.name} class={room.enabled ? '' : 'disabled'} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Outer Rooms</summary>
		<div class="dir-rooms">
			{#each directory.slice(102, 110) as room}
				<img src={getRoomImg(room.room, 'n')} alt={room.room.name} class={room.enabled ? '' : 'disabled'} />
			{/each}
		</div>
	</details>

	<details class="dir-section">
		<summary>Upgraded Rooms</summary>
		<div class="dir-rooms">
			{#each directory.slice(0, 12) as room}
				<img src={getRoomImg(room.room, 'n')} alt={room.room.name} class={room.enabled ? '' : 'disabled'} />
			{/each}
		</div>
	</details>
</section>

<style>
	#directory {
		margin: 1em;
		flex: 1;
		overflow-y: scroll;
	}
	details {
		margin: 1em 0;
		&:first-child {
			margin-top: 0;
		}
		&:last-child {
			margin-bottom: 0;
		}
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
