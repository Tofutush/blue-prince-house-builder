<script lang="ts">
	type Args = {
		proceed: () => void;
	};
	let { proceed }: Args = $props();
</script>

<section id="info">
	<p>Hello! Welcome to the <a target="_blank" href="https://www.blueprincegame.com/">Blue Prince</a> House Builder where you can just. Put these pretty little room thumbnails where they belong.</p>
	<p>Not affiliated with the devs or publisher or anyone. Made for educational purposes.</p>
	<p>Credit to the <a target="_blank" href="https://blueprince.wiki.gg/">Blue Prince wiki</a> for the room directory and upgrades. I ain't smart enough to play through the entire game.</p>
	<p><strong>Spoilers for Blue Prince will be present, as I've listed every single room, found floorplan, studio addition, and upgrade in here!</strong> You can try not clicking into these categories though.</p>
	<p>This is <string>not mobile-friendly</string>. I tried, a bit, but it's still meant to be browsed on PC.</p>
	<p>Images may take a while to load.</p>
	<p>Strict rules won't let you draft rooms with no doors connecting to the room you're drafting from, and no path can lead outside the house, and you can't draft the Antechamber, Room 46, or Entrance Hall. Disabling it can let you do all that, as well as draft from walls that don't have doors.</p>
	<p><strong>Refreshing will completely erase your progress</strong>.</p>
	<p>If you're ready to proceed, click the button below.</p>
	<p><a href="https://tofutush.leprd.space/guestbook/">Message me about bugs!</a> Paste a Filegarden (or whatever image host that's not Discord) link in there for screenshots if needed.</p>
	<button onclick={proceed}>Proceed</button>
</section>

<style>
	#info {
		padding: 1em;
	}
</style>
