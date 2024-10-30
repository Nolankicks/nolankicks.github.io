<script lang="ts">
    import { page } from '$app/stores';
	import DiscordEmbed from '$lib/components/DiscordEmbed.svelte';
    export let data;
</script>

<div class="md:px-18 container mx-auto flex flex-col gap-4 px-2 pt-6 font-poppins sm:px-4 lg:px-32 xl:px-40 text-white">
    <Header title="Sbox.game" HyperLink={false} />
</div>

<div class="md:px-18 container mx-auto flex flex-col gap-4 px-2 pt-6 font-poppins sm:px-4 lg:px-32 xl:px-40 animate-fadein">
    {#each data.unsortedPosts as blogPost}
        <a href={`sboxnews/${blogPost.Title}`} class="block p-4 bg-transparentblue rounded-md shadow-2xl mb-4 hover:scale-105 active:scale-95 transition-all w-full">
            <h2 class="text-2xl font-bold text-white">{blogPost.Title}</h2>

            {#if blogPost.Summary}
                <p class="text-white font-semibold">{blogPost.Summary}</p>
            {/if}
            
            <p class="text-gray-400 text-white">
                {new Date(blogPost.Created).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}
            </p>
        </a>
    {/each}
</div>

<DiscordEmbed title="kicks" description="Sbox.game blogs" />
