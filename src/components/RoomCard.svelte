<script lang="ts">
	import Room from '../classes/Room';
	import type { Direction, RoomProps } from '../types';
	import roomImgs from '../images';

	type componentProps = { room: RoomProps; direction: Direction; enabled: boolean };
	let { room, direction, enabled = true }: componentProps = $props();

	let roomInstance = $derived(new Room(room));
	if (direction) roomInstance.direction = direction;

	let style = $state('');
	if (!enabled) style += 'filter: grayscale(1);';
	if (roomInstance.direction === 'e') style += 'transform: rotate(90deg);';
	else if (roomInstance.direction === 's') style += 'transform: rotate(180deg);';
	else if (roomInstance.direction === 'w') style += 'transform: rotate(270deg);';
</script>

<div class="room">
	<img alt={roomInstance.name} src={roomImgs[roomInstance.getImgName()]} style={enabled ? '' : 'filter: grayscale(1)'} />
</div>
