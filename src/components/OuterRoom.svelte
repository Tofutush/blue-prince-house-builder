<script lang="ts">
	import { getRoomImg } from '../functions';
	import type { RoomData } from '../types';

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

<style>
	#outer-room {
		align-self: end;
		width: 8em;
		margin: 1em 0;

		& div,
		img {
			width: 8em;
			height: 8em;
			background-color: #0005;
		}
	}
</style>
