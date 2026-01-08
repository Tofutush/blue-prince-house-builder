<script lang="ts">
	import Room from '../classes/Room';
	import roomImgs from '../images';

	let { house }: { house: Room[][] } = $props();
</script>

<section id="house">
	{#each house as rank}
		{#each rank as room}
			<div class="room">
				{#if room.name}
					<img alt={room.name} src={roomImgs[room.getImgName()] as string} />
				{/if}
			</div>
		{/each}
	{/each}
</section>
