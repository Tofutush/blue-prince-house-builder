<script lang="ts">
	import { draft } from '../draft.svelte';
	import { getRoomImg } from '../functions';
	import type { DirRoom } from '../types';

	let { room }: { room: DirRoom } = $props();
</script>

<img src={getRoomImg(room.room, 'n')} alt={room.room.name} class={draft.active ? '' : 'disabled'} />

<style>
	img {
		width: 100%;
		height: 100%;
	}
</style>
