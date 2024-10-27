<!-- Blog list page -->
<script lang="ts">
    import { page } from '$app/stores';
    export let data;

    import DiscordEmbed from '$lib/components/DiscordEmbed.svelte';
    import Header from '$lib/components/Header.svelte';
</script>

<div class="md:px-18 container mx-auto flex flex-col gap-4 px-2 pt-6 font-poppins sm:px-4 lg:px-32 xl:px-40 text-white">
    <Header title="Blogs" />
</div>

<div class="md:px-18 container mx-auto flex flex-col gap-4 px-2 pt-6 font-poppins sm:px-4 lg:px-32 xl:px-40 animate-fadein">
    {#each data.posts as blogPost}
        <a href={`blog/${blogPost.slug}`} class="block p-4 bg-transparentblue rounded-md shadow-2xl mb-4 hover:scale-105 active:scale-95 transition-all w-full">
            <h2 class="text-2xl font-bold text-white">{blogPost.title}</h2>
            <p class="text-white font-semibold">{blogPost.description}</p>
            <p class="text-gray-400 text-white">{blogPost.date}</p>
        </a>
    {/each}
</div>

<DiscordEmbed title="kicks" description="My blogs" />