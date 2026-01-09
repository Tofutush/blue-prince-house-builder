<script lang="ts">
	import type { RoomData } from '../types';
	import roomImgs from '../images';
	import { getRoomImgName } from '../functions';

	let { room }: { room?: RoomData } = $props();
</script>

<div id="outer-room">
	{#if room}
		<img src={roomImgs[getRoomImgName(room, 'n')]} alt={room.name} />
	{/if}
</div>
