<script lang="ts">
	import { getRoomImg } from '../functions';
	import type { PlacedRoom } from '../types';

	let { room }: { room: PlacedRoom } = $props();
</script>

<div class="placed-room">
	<img src={getRoomImg(room.room, room.direction || 'n')} alt={room.room.name} />
	{#each room.room.doors as door}
		<div class="arrow arrow-{door}"></div>
	{/each}
</div>

<style>
	.placed-room {
		position: relative;
	}
	img {
		width: 100%;
		height: 100%;
	}
	.arrow {
		position: absolute;
		background-color: red;
		cursor: pointer;
		display: none;
	}

	.placed-room:hover .arrow {
		display: block;
	}

	.arrow-n {
		top: -0.5em;
		left: calc(50% - 0.7em);
		width: 1.4em;
		height: 1em;
		clip-path: polygon(0 100%, 50% 0, 100% 100%);
	}

	.arrow-s {
		bottom: -0.5em;
		left: calc(50% - 0.7em);
		width: 1.4em;
		height: 1em;
		clip-path: polygon(0 0, 100% 0, 50% 100%);
	}

	.arrow-w {
		top: calc(50% - 0.7em);
		left: -0.5em;
		width: 1em;
		height: 1.4em;
		clip-path: polygon(0 50%, 100% 100%, 100% 0);
	}

	.arrow-e {
		top: calc(50% - 0.7em);
		right: -0.5em;
		width: 1em;
		height: 1.4em;
		clip-path: polygon(0 0, 100% 50%, 0 100%);
	}
</style>
