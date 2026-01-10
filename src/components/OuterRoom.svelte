<script lang="ts">
	import { getRoomImg } from '../functions';
	import type { draftType, RoomData } from '../types';

	type Args = {
		room: RoomData | null;
		draft: draftType;
		draftStart: () => void;
	};
	let { room, draft, draftStart }: Args = $props();

	function buttonClick() {
		if (draft.active || room) return;
		draftStart();
	}
</script>

<div id="outer-room">
	<p>Outer room:</p>
	<button onclick={buttonClick}>
		{#if room}
			<img src={getRoomImg(room, 'n')} alt={room.name} />
		{/if}
	</button>
</div>

<style>
	#outer-room {
		width: 8em;

		& button,
		img {
			all: unset;
			width: 8em;
			height: 8em;
			background-color: #0005;
			display: block;
		}
		& button:not(:has(img)) {
			cursor: pointer;
		}
	}
</style>
