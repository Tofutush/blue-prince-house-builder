<script lang="ts">
    let house = [];
    for (let z = 0; z < 9; z++) {
        house[z] = [{}, {}, {}, {}, {}];
    }
</script>

<main>
    <section id="house">
        {#each house as rank}
            {#each rank as room}
                <div class="room"></div>
            {/each}
        {/each}
    </section>
    <section id="outer"></section>
    <section id="directory"></section>
</main>
