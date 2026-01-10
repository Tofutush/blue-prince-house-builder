<script lang="ts">
	type Args = {
		proceed: () => void;
	};
	let { proceed }: Args = $props();
</script>

<section id="info">
	<p>Hello! Welcome to the <a href="https://www.blueprincegame.com/">Blue Prince</a> House Builder where you can just. Put these pretty little room thumbnails where they belong.</p>
	<p>Not affiliated with the devs or publisher or anyone. Made for educational purposes.</p>
	<p><strong>Spoilers for Blue Prince will be present, as I've listed every single room, found floorplan, studio addition, and upgrade in here!</strong></p>
	<p>You can try not clicking into these categories though.</p>
	<p>This is not very mobile-friendly. I recommend browsing on PC.</p>
	<p>If you're ready to proceed, click the button below.</p>
	<button onclick={proceed}>Proceed</button>
</section>

<style>
	#info {
		padding: 1em;
	}
</style>
