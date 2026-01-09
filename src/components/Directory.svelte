<script lang="ts">
	import { draft } from '../draft.svelte';
	import { roomList, rotateDoors } from '../functions';
	import type { DirRoom, RoomData } from '../types';
	import RoomDir from './RoomDir.svelte';

	let { draftDone }: { draftDone: (room: RoomData) => void } = $props();

	let directory: DirRoom[] = roomList.map((r) => {
		return { room: r, direction: 'n', enabled: true };
	});

	function getDraftingRoom(room: DirRoom) {
		if (!(draft.active && draft.coords && draft.direction)) throw new Error('drafting not in progress!');
		let realDoors = rotateDoors(room.room, draft.direction);
		// if any one door leads out of bounds, disable
		let enabled = true;
		if (room.room.name === 'Entrance Hall' || room.room.name === 'The Antechamber' || room.room.name === 'Room 46') enabled = false;
		else {
			for (let z = 0; z < realDoors.length; z++) {
				let coords: number[] = [];
				if (realDoors[z] === 'e') coords = [draft.coords[0], draft.coords[1] + 1];
				else if (realDoors[z] === 'w') coords = [draft.coords[0], draft.coords[1] - 1];
				else if (realDoors[z] === 'n') coords = [draft.coords[0] - 1, draft.coords[1]];
				else if (realDoors[z] === 's') coords = [draft.coords[0] + 1, draft.coords[1]];
				if (coords[0] < 0 || coords[0] > 8 || coords[1] < 0 || coords[1] > 4) enabled = false;
			}
		}
		room.direction = draft.direction;
		room.enabled = enabled;
		return room;
	}
</script>

<section id="directory">
	<details class="dir-section">
		<summary>Rooms 1 - 12</summary>
		<div class="dir-rooms">
			{#each directory.slice(0, 12) as room}
				<RoomDir {draftDone} room={draft.active ? getDraftingRoom(room) : room} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Rooms 13 - 24</summary>
		<div class="dir-rooms">
			{#each directory.slice(12, 24) as room}
				<RoomDir {draftDone} room={draft.active ? getDraftingRoom(room) : room} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Rooms 25 - 36</summary>
		<div class="dir-rooms">
			{#each directory.slice(24, 36) as room}
				<RoomDir {draftDone} room={draft.active ? getDraftingRoom(room) : room} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Rooms 37 - 46</summary>
		<div class="dir-rooms">
			{#each directory.slice(36, 46) as room}
				<RoomDir {draftDone} room={draft.active ? getDraftingRoom(room) : room} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Bedrooms</summary>
		<div class="dir-rooms">
			{#each directory.slice(46, 54) as room}
				<RoomDir {draftDone} room={draft.active ? getDraftingRoom(room) : room} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Hallways</summary>
		<div class="dir-rooms">
			{#each directory.slice(54, 62) as room}
				<RoomDir {draftDone} room={draft.active ? getDraftingRoom(room) : room} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Green Rooms</summary>
		<div class="dir-rooms">
			{#each directory.slice(62, 70) as room}
				<RoomDir {draftDone} room={draft.active ? getDraftingRoom(room) : room} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Shops</summary>
		<div class="dir-rooms">
			{#each directory.slice(70, 78) as room}
				<RoomDir {draftDone} room={draft.active ? getDraftingRoom(room) : room} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Red Rooms</summary>
		<div class="dir-rooms">
			{#each directory.slice(78, 86) as room}
				<RoomDir {draftDone} room={draft.active ? getDraftingRoom(room) : room} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Studio Additions</summary>
		<div class="dir-rooms">
			{#each directory.slice(86, 94) as room}
				<RoomDir {draftDone} room={draft.active ? getDraftingRoom(room) : room} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Found Floorplans</summary>
		<div class="dir-rooms">
			{#each directory.slice(94, 102) as room}
				<RoomDir {draftDone} room={draft.active ? getDraftingRoom(room) : room} />
			{/each}
		</div>
	</details>
	<details class="dir-section">
		<summary>Outer Rooms</summary>
		<div class="dir-rooms">
			{#each directory.slice(102, 110) as room}
				<RoomDir {draftDone} room={draft.active ? getDraftingRoom(room) : room} />
			{/each}
		</div>
	</details>

	<details class="dir-section">
		<summary>Upgraded Rooms</summary>
		<div class="dir-rooms">
			{#each directory.slice(0, 12) as room}
				<RoomDir {draftDone} room={draft.active ? getDraftingRoom(room) : room} />
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
