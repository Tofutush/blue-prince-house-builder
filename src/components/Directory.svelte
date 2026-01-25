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

	let details = document.getElementsByClassName('dir-section') as HTMLCollectionOf<HTMLDetailsElement>;
	function expand() {
		for (let z = 0; z < details.length; z++) {
			console.log(details);
			details[z].open = true;
		}
	}
	function collapse() {
		for (let z = 0; z < details.length; z++) details[z].open = false;
	}
</script>

<section id="directory">
	<button onclick={expand}>Expand all</button>
	<button onclick={collapse}>Collapse all</button>
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
		<details class="dir-section">
			<summary>Storeroom</summary>
			<div class="dir-rooms">
				{#each roomList.slice(133, 136) as room}
					<RoomDir {draft} {draftDone} {draftTemporary} {getEnabled} {room} />
				{/each}
			</div>
		</details>
		<details class="dir-section">
			<summary>Nook</summary>
			<div class="dir-rooms">
				{#each roomList.slice(136, 139) as room}
					<RoomDir {draft} {draftDone} {draftTemporary} {getEnabled} {room} />
				{/each}
			</div>
		</details>
		<details class="dir-section">
			<summary>Mail Room</summary>
			<div class="dir-rooms">
				{#each roomList.slice(139, 142) as room}
					<RoomDir {draft} {draftDone} {draftTemporary} {getEnabled} {room} />
				{/each}
			</div>
		</details>
		<details class="dir-section">
			<summary>Aquarium</summary>
			<div class="dir-rooms">
				{#each roomList.slice(142, 145) as room}
					<RoomDir {draft} {draftDone} {draftTemporary} {getEnabled} {room} />
				{/each}
			</div>
		</details>
		<details class="dir-section">
			<summary>Boudoir</summary>
			<div class="dir-rooms">
				{#each roomList.slice(145, 148) as room}
					<RoomDir {draft} {draftDone} {draftTemporary} {getEnabled} {room} />
				{/each}
			</div>
		</details>
		<details class="dir-section">
			<summary>Guest Bedroom</summary>
			<div class="dir-rooms">
				{#each roomList.slice(148, 151) as room}
					<RoomDir {draft} {draftDone} {draftTemporary} {getEnabled} {room} />
				{/each}
			</div>
		</details>
		<details class="dir-section">
			<summary>Nursery</summary>
			<div class="dir-rooms">
				{#each roomList.slice(151, 154) as room}
					<RoomDir {draft} {draftDone} {draftTemporary} {getEnabled} {room} />
				{/each}
			</div>
		</details>
		<details class="dir-section">
			<summary>Bunk Room</summary>
			<div class="dir-rooms">
				{#each roomList.slice(154, 157) as room}
					<RoomDir {draft} {draftDone} {draftTemporary} {getEnabled} {room} />
				{/each}
			</div>
		</details>
		<details class="dir-section">
			<summary>Hallway</summary>
			<div class="dir-rooms">
				{#each roomList.slice(157, 160) as room}
					<RoomDir {draft} {draftDone} {draftTemporary} {getEnabled} {room} />
				{/each}
			</div>
		</details>
		<details class="dir-section">
			<summary>Courtyard</summary>
			<div class="dir-rooms">
				{#each roomList.slice(160, 163) as room}
					<RoomDir {draft} {draftDone} {draftTemporary} {getEnabled} {room} />
				{/each}
			</div>
		</details>
		<details class="dir-section">
			<summary>Cloister</summary>
			<div class="dir-rooms">
				{#each roomList.slice(163, 171) as room}
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
