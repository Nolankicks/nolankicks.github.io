<!-- Blog list page -->
<script lang="ts">
    import { page } from '$app/stores';
    export let data;

    import DiscordEmbed from '$lib/components/DiscordEmbed.svelte';
</script>

<div class="container mx-auto font-poppins flex text-white p-5 text-3xl font-bold justify-start items-center">My blogs</div>

<div class="container mx-auto pt-0 pr-5 pb-5 pl-5 font-poppins animate-fadein">
    {#each data.posts as blogPost}
        <a href={`blog/${blogPost.slug}`} class="block p-4 bg-transparentblue rounded-md shadow-2xl mb-4 hover:scale-105 active:scale-95 transition-all">
            <h2 class="text-2xl font-bold text-white">{blogPost.title}</h2>
            <p class="text-white font-semibold">{blogPost.description}</p>
            <p class="text-gray-400 text-white">{blogPost.date}</p>
        </a>
    {/each}
</div>

<DiscordEmbed title="kicks" description="My blogs" />