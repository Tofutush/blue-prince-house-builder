<script lang="ts">
	import Room from './classes/Room';
	import House from './components/House.svelte';
	import RoomDirectory from './components/RoomDirectory.svelte';
	let house: Room[][] = [];
	for (let z = 0; z < 9; z++) {
		house[z] = [new Room(), new Room(), new Room(), new Room(), new Room()];
	}
	house[0][2] = new Room({
		name: 'Antechamber',
		color: ['none'],
		filename: 'antechamber',
		doors: ['e', 'n', 's', 'w'],
	});
	house[8][2] = new Room({
		name: 'Entrance Hall',
		color: ['blue'],
		filename: 'entrancehall',
		doors: ['e', 'n', 'w'],
	});
</script>

<main>
	<House {house} />
	<section id="outer"></section>
	<RoomDirectory />
</main>
