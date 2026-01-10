<script lang="ts">
	import { getRoomImg } from '../functions';
	import type { DirRoom, draftType, RoomData } from '../types';

	type Args = {
		room: DirRoom;
		draft: draftType;
		draftDone: (room: RoomData) => void;
		draftTemporary: (room: RoomData | null) => void;
	};
	let { room, draft, draftDone, draftTemporary }: Args = $props();

	function selected() {
		if (!draft.active || !room.enabled) return;
		draftDone(room.room);
	}
	function hovered() {
		if (!draft.active || !room.enabled || draft.outer) return;
		draftTemporary(room.room);
	}
	function exited() {
		if (!draft.active || !room.enabled || draft.outer) return;
		draftTemporary(null);
	}
</script>

<button onclick={selected} onmouseenter={hovered} onmouseleave={exited}>
	{#if draft.active}
		<img src={getRoomImg(room.room, room.direction)} alt={room.room.name} title={room.room.name} class={room.enabled ? 'active' : 'disabled'} />
	{:else}
		<img src={getRoomImg(room.room, 'n')} alt={room.room.name} title={room.room.name} />
	{/if}
</button>

<style>
	button {
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
