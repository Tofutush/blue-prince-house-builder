<script lang="ts">
	import list from '../rooms.json';
	import type { RoomProps } from '../types';
	import RoomCard from './RoomCard.svelte';
	// let list = {
	// 	'1-12': [],
	// 	'13-24': [],
	// 	'25-36': [],
	// 	'37-46': [],
	// 	bedrooms: [],
	// };
	let directory: RoomProps[][] = [];
	// 1 - 12
	directory[0] = [];
	for (let z = 0; z < 12; z++) directory[0].push(list[z] as RoomProps);
	// 13 - 24
	directory[1] = [];
	for (let z = 12; z < 24; z++) directory[1].push(list[z] as RoomProps);
	// 25 - 36
	directory[2] = [];
	for (let z = 24; z < 36; z++) directory[2].push(list[z] as RoomProps);
	// 37 - 46
	directory[3] = [];
	for (let z = 36; z < 46; z++) directory[3].push(list[z] as RoomProps);

	// test
	directory[0] = [list[0] as RoomProps, list[1] as RoomProps];
</script>

<section id="room-directory">
	<details class="directory">
		<summary>Rooms 1 - 12</summary>
		<div class="rooms-list">
			{#each directory[0] as room}
				<RoomCard {room} direction="n" enabled />
			{/each}
		</div>
	</details>
</section>
