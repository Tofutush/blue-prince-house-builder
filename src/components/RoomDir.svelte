<script lang="ts">
	import { getRoomImg } from '../functions';
	import type { Direction, draftType, RoomData } from '../types';

	type Args = {
		room: RoomData;
		draft: draftType;
		draftDone: (room: RoomData, direction: Direction) => void;
		draftTemporary: (room: RoomData | null, direction: Direction) => void;
		getEnabled: (room: RoomData, direction: Direction) => boolean;
	};
	let { room, draft, draftDone, draftTemporary, getEnabled }: Args = $props();

	function getDirection(): Direction {
		if (!draft.active) return 'n';
		console.log('1');

		if (direction !== null) return direction;
		console.log('2');

		return draft.direction ?? 'n';
	}
	let direction: Direction | null = $state(null);

	function selected() {
		if (!draft.active || !getEnabled(room, getDirection())) return;
		draftDone(room, getDirection());
		direction = null;
	}
	function hovered() {
		if (!draft.active || !getEnabled(room, getDirection()) || draft.outer) return;
		draftTemporary(room, getDirection());
	}
	function exited() {
		if (!draft.active || !getEnabled(room, getDirection()) || draft.outer) return;
		draftTemporary(null, 'n');
	}
	function rotate() {
		const order: Direction[] = ['n', 'e', 's', 'w'];
		let dir = getDirection();
		// special cases
		if (room.name === 'Greenhouse' || room.name === 'Veranda') {
			if (dir === 'w' || dir === 'e') return;
			else if (dir === 's') direction = 'n';
			else if (dir === 'n') direction = 's';
			return;
		}
		direction = order[(order.indexOf(dir) + 1) % 4];
	}
</script>

<div class="room">
	{#if draft.active && !draft.outer}
		<button class="rotate" onclick={rotate}>Rotate</button>
	{/if}
	<button class="draft" onclick={selected} onmouseenter={hovered} onmouseleave={exited}>
		{#if draft.active}
			<img aria-label={getDirection()} src={getRoomImg(room, getDirection())} alt={room.name} title={room.name} class={getEnabled(room, getDirection()) ? 'active' : 'disabled'} />
		{:else}
			<img src={getRoomImg(room, 'n')} alt={room.name} title={room.name} />
		{/if}
	</button>
</div>

<style>
	.room {
		position: relative;
	}
	.draft {
		all: unset;
	}
	.rotate {
		position: absolute;
		top: 4px;
		left: 4px;
		cursor: pointer;
		z-index: 999;
	}
	img {
		width: 100%;
		height: 100%;
		&.disabled {
			filter: grayscale(1);
		}
		&.active {
			cursor: pointer;
		}
	}
</style>
