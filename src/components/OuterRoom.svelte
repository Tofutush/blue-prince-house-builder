<script lang="ts">
	import type { RoomData } from '../types';
	import { getRoomImg } from '../functions';

	let { room }: { room?: RoomData } = $props();
</script>

<div id="outer-room">
	{#if room}
		<img src={getRoomImg(room, 'n')} alt={room.name} />
	{/if}
</div>
