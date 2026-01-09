<script lang="ts">
	import type { RoomData } from '../types';
	import { getRoomImg } from '../functions';

	let { room }: { room?: RoomData } = $props();
</script>

<div id="outer-room">
	<p>Outer room:</p>
	<div>
		{#if room}
			<img src={getRoomImg(room, 'n')} alt={room.name} />
		{/if}
	</div>
</div>
