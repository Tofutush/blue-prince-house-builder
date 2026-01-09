<script lang="ts">
	import { draft } from '../draft.svelte';
	import { getRoomImg } from '../functions';
	import type { DirRoom } from '../types';

	let { room }: { room: DirRoom } = $props();
</script>

<img src={getRoomImg(room.room, room.direction)} alt={room.room.name} class={room.enabled ? '' : 'disabled'} onclick={draft.active && room.enabled?} />

<style>
	img {
		width: 100%;
		height: 100%;
		&.disabled {
			filter: grayscale(1);
		}
	}
</style>
