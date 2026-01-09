<script lang="ts">
	import Directory from './components/Directory.svelte';
	import House from './components/House.svelte';
	import OuterRoom from './components/OuterRoom.svelte';
	import { getRoom } from './functions';

	let outerRoom = getRoom('The Foundation');
</script>

<main>
	<House />
	<OuterRoom />
	<Directory />
</main>
