<script lang="ts">
	import { getRoomImg } from '../functions';
	import type { draftType, RoomData } from '../types';

	type Args = {
		room: RoomData | null;
		draft: draftType;
		draftStart: () => void;
		deleteRoom: () => void;
	};
	let { room, draft, draftStart, deleteRoom }: Args = $props();

	function buttonClick() {
		if (draft.active || room) return;
		draftStart();
	}
</script>

<div id="outer-room">
	<p>Outer room:</p>
	{#if room}
		<div>
			<img src={getRoomImg(room, 'n')} alt={room.name} />
			<button aria-label="delete room" title="Delete this room" class="delete" onclick={deleteRoom}></button>
		</div>
	{:else}
		<button class="draft" aria-label="draft-room" onclick={buttonClick}> </button>
	{/if}
</div>

<style>
	#outer-room {
		width: 8em;

		& .draft,
		img {
			all: unset;
			width: 8em;
			height: 8em;
			background-color: #0005;
			display: block;
		}
		& .draft {
			cursor: pointer;
		}
		& div {
			position: relative;
			&:hover .delete {
				display: block;
			}
			& .delete {
				all: unset;
				position: absolute;
				width: 2em;
				height: 2em;
				top: calc(50% - 1em);
				left: calc(50% - 1em);
				display: none;
				background-color: #ef9c0d;
				clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
				cursor: pointer;
			}
		}
	}
</style>
