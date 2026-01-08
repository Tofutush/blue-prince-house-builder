<script lang="ts">
    import Room from '../classes/Room';
    let { house }: { house: Room[][] } = $props();
    const roomImgs = import.meta.glob('../assets/rooms/*.png', {
        eager: true,
        import: 'default',
    });
</script>

<section id="house">
    {#each house as rank}
        {#each rank as room}
            <div class="room">
                {#if room.name}
                    <img alt={room.name} src={roomImgs['../assets/rooms/' + room.getImgName()] as string} />
                {/if}
            </div>
        {/each}
    {/each}
</section>
