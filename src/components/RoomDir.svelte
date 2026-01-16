<script lang="ts">
	import { getRoomImg } from '../functions';
	import type { Direction, DirRoom, draftType, RoomData } from '../types';

	type Args = {
		room: RoomData;
		draft: draftType;
		draftDone: (room: DirRoom) => void;
		draftTemporary: (room: DirRoom | null) => void;
		getEnabled: (room: DirRoom) => boolean;
		draftDirection: Direction | null;
	};
	let { room, draft, draftDone, draftTemporary, getEnabled, draftDirection }: Args = $props();

	let direction: Direction = $state(draftDirection || 'n');
	let dirRoom: DirRoom = $state({ room: room, direction: direction, enabled: true });

	function selected() {
		if (!draft.active || !getEnabled(dirRoom)) return;
		draftDone(dirRoom);
	}
	function hovered() {
		if (!draft.active || !getEnabled(dirRoom) || draft.outer) return;
		draftTemporary(dirRoom);
	}
	function exited() {
		if (!draft.active || !getEnabled(dirRoom) || draft.outer) return;
		draftTemporary(null);
	}
	function rotate() {
		const order: Direction[] = ['n', 'e', 's', 'w'];
		dirRoom.direction = order[(order.indexOf(dirRoom.direction) + 1) % 4];
		console.log(dirRoom);
	}
</script>

<div>
	{#if draft.active && !draft.outer}
		<button class="rotate" onclick={rotate}>Rotate</button>
	{/if}
	<button class="draft" onclick={selected} onmouseenter={hovered} onmouseleave={exited}>
		{#if draft.active}
			<img src={getRoomImg(dirRoom.room, dirRoom.direction)} alt={dirRoom.room.name} title={dirRoom.room.name} class={getEnabled(dirRoom) ? 'active' : 'disabled'} />
		{:else}
			<img src={getRoomImg(dirRoom.room, 'n')} alt={dirRoom.room.name} title={dirRoom.room.name} />
		{/if}
	</button>
</div>

<style>
	.draft {
		all: unset;
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
