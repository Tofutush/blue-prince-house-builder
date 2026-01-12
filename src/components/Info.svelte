<script lang="ts">
	type Args = {
		proceed: () => void;
	};
	let { proceed }: Args = $props();
</script>

<section id="info">
	<p>Hello! Welcome to the <a target="_blank" href="https://www.blueprincegame.com/">Blue Prince</a> House Builder where you can just. Put these pretty little room thumbnails where they belong.</p>
	<p>Not affiliated with the devs or publisher or anyone. Made for educational purposes.</p>
	<p><strong>Spoilers for Blue Prince will be present, as I've listed every single room, found floorplan, studio addition, and upgrade in here!</strong></p>
	<p>You can try not clicking into these categories though.</p>
	<p>This is <string>not very mobile-friendly</string>. Though it's not unusable on mobile, I still recommend browsing on PC.</p>
	<p>Images may take a while to load.</p>
	<p>And… yes, you can delete the Antechamber and Entrance Hall. Rooms also have no drafting constraints other than no path going outside the house. So go wild. If you're stuck, <strong>refreshing will completely erase your progress</strong>.</p>
	<p>There might be direction problems, because as far as I've noticed you get east and west facing doors randomly when drafting horizontally, but I didn't do none of that here. You also can't rotate floorplans. You can draft Tunnel as long as you're going north because I got tired of writing all the code.</p>
	<p>If you're ready to proceed, click the button below.</p>
	<button onclick={proceed}>Proceed</button>
</section>

<style>
	#info {
		padding: 1em;
	}
</style>
