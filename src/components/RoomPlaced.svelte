<script lang="ts">
	import { getRoomImg } from '../functions';
	import type { Direction, draftType, PlacedRoom } from '../types';

	let { room, draftables, draft, draftStart }: { room: PlacedRoom; draftables: Direction[]; draft: draftType; draftStart: (coords: number[], direction: Direction) => void } = $props();

	function getDraftCoords(direction: Direction) {
		let coords: number[] = [];
		if (direction === 'e') coords = [room.coords[0], room.coords[1] + 1];
		else if (direction === 'w') coords = [room.coords[0], room.coords[1] - 1];
		else if (direction === 'n') coords = [room.coords[0] - 1, room.coords[1]];
		else if (direction === 's') coords = [room.coords[0] + 1, room.coords[1]];
		if (coords[0] < 0 || coords[0] > 8 || coords[1] < 0 || coords[1] > 4) {
			throw new Error(`drafting target coords (${coords[0]}, ${coords[1]}) out of bounds you dumbfuck`);
		}
		return coords;
	}
</script>

<div class="placed-room">
	<img class={room.temporary ? 'temp' : ''} src={getRoomImg(room.room, room.direction || 'n')} alt={room.room.name} />
	{#if !draft.active}
		{#each draftables as door}
			<button aria-label="draft {door}" class="arrow arrow-{door}" onclick={() => draftStart(getDraftCoords(door), door)}></button>
		{/each}
	{/if}
</div>

<style>
	.placed-room {
		position: relative;
	}
	img {
		width: 100%;
		height: 100%;
		&.temp {
			opacity: 0.5;
		}
	}
	.arrow {
		all: unset;
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
