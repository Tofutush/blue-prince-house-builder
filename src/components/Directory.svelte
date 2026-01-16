<script lang="ts">
	import { roomList } from '../functions';
	import type { DirRoom, draftType, RoomData, Direction } from '../types';
	import RoomDir from './RoomDir.svelte';

	type Args = {
		draft: draftType;
		draftDone: (room: RoomData, direction: Direction) => void;
		draftTemporary: (room: RoomData | null, direction: Direction) => void;
		getDraftingRoom: (room: DirRoom) => DirRoom;
		getEnabled: (room: DirRoom, direction: Direction) => boolean;
	};
	let { draft, draftDone, draftTemporary, getDraftingRoom, getEnabled }: Args = $props();
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
		<div class="dir-rooms">
			{#each roomList.slice(0, 12) as room}
				<RoomDir {draft} {draftDone} {draftTemporary} {getEnabled} {room} />
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
		}
	}
</style>
