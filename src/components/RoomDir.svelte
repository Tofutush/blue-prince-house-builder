<script lang="ts">
	import { draft } from '../draft.svelte';
	import { getRoomImg } from '../functions';
	import type { DirRoom, RoomData } from '../types';

	let { room, draftDone }: { room: DirRoom; draftDone: (room: RoomData) => void } = $props();

	function selected() {
		if (!draft.active) return;
		draftDone(room.room);
	}
</script>

<button onclick={selected}>
	<img src={getRoomImg(room.room, room.direction)} alt={room.room.name} class={room.enabled ? (draft.active ? ' active' : '') : 'disabled'} />
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
