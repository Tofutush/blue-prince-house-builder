<script lang="ts">
	import House from './components/House.svelte';
	import OuterRoom from './components/OuterRoom.svelte';
	import { getRoom } from './functions';

	let outerRoom = getRoom('The Foundation');
</script>

<main>
	<House />
	<OuterRoom room={outerRoom} />
</main>
