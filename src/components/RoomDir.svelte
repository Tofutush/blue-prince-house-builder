<script lang="ts">
	import { getRoomImg } from '../functions';
	import type { Direction, DirRoom, draftType, RoomData } from '../types';

	type Args = {
		room: RoomData;
		draft: draftType;
		draftDone: (room: RoomData, direction: Direction) => void;
		draftTemporary: (room: RoomData | null, direction: Direction) => void;
		getEnabled: (room: DirRoom, direction: Direction) => boolean;
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
	let dirRoom: DirRoom = $state({ room: room, direction: 'n', enabled: true });

	function selected() {
		if (!draft.active || !getEnabled(dirRoom, getDirection())) return;
		draftDone(room, getDirection());
		direction = null;
	}
	function hovered() {
		if (!draft.active || !getEnabled(dirRoom, getDirection()) || draft.outer) return;
		draftTemporary(room, getDirection());
	}
	function exited() {
		if (!draft.active || !getEnabled(dirRoom, getDirection()) || draft.outer) return;
		draftTemporary(null, 'n');
	}
	function rotate() {
		const order: Direction[] = ['n', 'e', 's', 'w'];
		direction = order[(order.indexOf(getDirection()) + 1) % 4];
		dirRoom.direction = direction;
	}
</script>

<div class="room">
	{#if draft.active && !draft.outer}
		<button class="rotate" onclick={rotate}>Rotate</button>
	{/if}
	<button class="draft" onclick={selected} onmouseenter={hovered} onmouseleave={exited}>
		{#if draft.active}
			<img aria-label={getDirection()} src={getRoomImg(dirRoom.room, getDirection())} alt={dirRoom.room.name} title={dirRoom.room.name} class={getEnabled(dirRoom, getDirection()) ? 'active' : 'disabled'} />
		{:else}
			<img src={getRoomImg(dirRoom.room, 'n')} alt={dirRoom.room.name} title={dirRoom.room.name} />
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
