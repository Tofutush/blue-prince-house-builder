<script lang="ts">
	import { getRoomImg } from '../functions';
	import type { DirRoom, draftType, RoomData } from '../types';

	let { room, draft, draftDone }: { room: DirRoom; draft: draftType; draftDone: (room: RoomData) => void } = $props();

	function selected() {
		if (!draft.active || !room.enabled) return;
		draftDone(room.room);
	}
</script>

<button onclick={selected}>
	{#if draft.active}
		<img src={getRoomImg(room.room, room.direction)} alt={room.room.name} class={room.enabled ? 'active' : 'disabled'} />
	{:else}
		<img src={getRoomImg(room.room, 'n')} alt={room.room.name} />
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
