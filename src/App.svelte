<script lang="ts">
	import Room from './classes/Room';
	const roomImgs = import.meta.glob('./assets/rooms/*.png', {
		eager: true,
		import: 'default',
	});
	let house: Room[][] = [];
	for (let z = 0; z < 9; z++) {
		house[z] = [new Room(), new Room(), new Room(), new Room(), new Room()];
	}
	house[0][2] = new Room({
		name: 'Antechamber',
		color: ['none'],
		filename: 'antechamber',
		doors: ['e', 'n', 's', 'w'],
		direction: 'n',
	});
</script>

<main>
	<section id="house">
		{#each house as rank}
			{#each rank as room}
				<div class="room">
					{#if room.name}
						<img alt={room.name} src={roomImgs['./assets/rooms/' + room.getImgName()] as string} />
					{/if}
				</div>
			{/each}
		{/each}
	</section>
	<section id="outer"></section>
	<section id="directory"></section>
</main>
