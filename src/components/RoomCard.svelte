<script lang="ts">
	import Room from '../classes/Room';
	import type { Direction, RoomProps } from '../types';
	import roomImgs from '../images';

	type componentProps = { room: RoomProps; direction: Direction; enabled: boolean };
	let { room, direction, enabled = true }: componentProps = $props();

	let roomInstance = $derived(new Room(room));

	function magicButton() {
		enabled = !enabled;
	}
	function turn() {
		direction = 'e';
	}
</script>

<div class="room">
	<button onclick={magicButton}>toggle</button>
	<button onclick={turn}>Turn</button>
	<img alt={roomInstance.name} src={roomImgs[roomInstance.getImgName()]} class="{enabled ? '' : 'disabled'} dir-{direction}" />
</div>
