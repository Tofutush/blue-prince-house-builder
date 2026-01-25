<script lang="ts">
	import { roomList } from '../functions';
	import type { Direction, draftType, RoomData } from '../types';
	import RoomDir from './RoomDir.svelte';

	type Args = {
		draft: draftType;
		draftDone: (room: RoomData, direction: Direction) => void;
		draftTemporary: (room: RoomData | null, direction: Direction) => void;
		getEnabled: (room: RoomData, direction: Direction) => boolean;
	};
	let { draft, draftDone, draftTemporary, getEnabled }: Args = $props();
</script>

<section id="directory">
	<details class="dir-section">
		<summary>Rooms 1 - 12</summary>
		<div class="dir-rooms">
			{#each roomList.slice(0, 12) as room}
				<RoomDir {draft} {draftDone} {draftTemporary} {getEnabled} {room} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Rooms 13 - 24</summary>
		<div class="dir-rooms">
			{#each roomList.slice(12, 24) as room}
				<RoomDir {draft} {draftDone} {draftTemporary} {getEnabled} {room} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Rooms 25 - 36</summary>
		<div class="dir-rooms">
			{#each roomList.slice(24, 36) as room}
				<RoomDir {draft} {draftDone} {draftTemporary} {getEnabled} {room} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Rooms 37 - 46</summary>
		<div class="dir-rooms">
			{#each roomList.slice(36, 46) as room}
				<RoomDir {draft} {draftDone} {draftTemporary} {getEnabled} {room} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Bedrooms</summary>
		<div class="dir-rooms">
			{#each roomList.slice(46, 54) as room}
				<RoomDir {draft} {draftDone} {draftTemporary} {getEnabled} {room} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Hallways</summary>
		<div class="dir-rooms">
			{#each roomList.slice(54, 62) as room}
				<RoomDir {draft} {draftDone} {draftTemporary} {getEnabled} {room} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Green Rooms</summary>
		<div class="dir-rooms">
			{#each roomList.slice(62, 70) as room}
				<RoomDir {draft} {draftDone} {draftTemporary} {getEnabled} {room} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Shops</summary>
		<div class="dir-rooms">
			{#each roomList.slice(70, 78) as room}
				<RoomDir {draft} {draftDone} {draftTemporary} {getEnabled} {room} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Red Rooms</summary>
		<div class="dir-rooms">
			{#each roomList.slice(78, 86) as room}
				<RoomDir {draft} {draftDone} {draftTemporary} {getEnabled} {room} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Studio Additions</summary>
		<div class="dir-rooms">
			{#each roomList.slice(86, 94) as room}
				<RoomDir {draft} {draftDone} {draftTemporary} {getEnabled} {room} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Found Floorplans</summary>
		<div class="dir-rooms">
			{#each roomList.slice(94, 102) as room}
				<RoomDir {draft} {draftDone} {draftTemporary} {getEnabled} {room} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Outer Rooms</summary>
		<div class="dir-rooms">
			{#each roomList.slice(102, 110) as room}
				<RoomDir {draft} {draftDone} {draftTemporary} {getEnabled} {room} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Upgraded Rooms</summary>
		<details class="dir-section">
			<summary>Spare Room</summary>
			<div class="dir-rooms">
				{#each roomList.slice(110, 122) as room}
					<RoomDir {draft} {draftDone} {draftTemporary} {getEnabled} {room} />
				{/each}
			</div>
		</details>
		<details class="dir-section">
			<summary>Parlor</summary>
			<div class="dir-rooms">
				{#each roomList.slice(122, 125) as room}
					<RoomDir {draft} {draftDone} {draftTemporary} {getEnabled} {room} />
				{/each}
			</div>
		</details>
		<details class="dir-section">
			<summary>Billiard Room</summary>
			<div class="dir-rooms">
				{#each roomList.slice(125, 130) as room}
					<RoomDir {draft} {draftDone} {draftTemporary} {getEnabled} {room} />
				{/each}
			</div>
		</details>
		<details class="dir-section">
			<summary>Closet</summary>
			<div class="dir-rooms">
				{#each roomList.slice(130, 133) as room}
					<RoomDir {draft} {draftDone} {draftTemporary} {getEnabled} {room} />
				{/each}
			</div>
		</details>
	</details>
</section>

<style>
	#directory {
		margin: 1em;
		flex: 1;
		overflow-y: scroll;
	}
	details {
		margin: 1em;
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
		}
	}
</style>
