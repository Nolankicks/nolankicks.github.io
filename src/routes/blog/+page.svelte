<!-- Blog list page -->
<script lang="ts">
    import { page } from '$app/stores';
    export let data;
</script>

<svelte:head>
    <title>Kicks-Blogs</title>
</svelte:head>

<div class="md:px-18 container mx-auto flex flex-col gap-4 px-2 pt-6 font-poppins sm:px-4 lg:px-32 xl:px-40 text-white">
    <Header title="Blogs" HyperLink={false} />
</div>

<div class="md:px-18 container mx-auto flex flex-col gap-4 px-2 pt-6 font-poppins sm:px-4 lg:px-32 xl:px-40 animate-fadein">
    {#each data?.posts ?? [] as blogPost}
        <a href={`${blogPost.IsNews ? "sboxnews/" : "blog/"}${blogPost.slug}`} class="block p-4 bg-transparentblue rounded-md shadow-2xl mb-4 hover:scale-105 active:scale-95 transition-all w-full">
            <h2 class="text-2xl font-bold text-white">{blogPost.title}</h2>

            {#if blogPost.description}
                <p class="text-white font-semibold">{blogPost.description}</p>
            {/if}
            <p class="text-gray-400 text-white">
                {new Date(blogPost.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                })}
            </p>

            <p class="text-gray-400 text-white">{blogPost.IsNews ? "S&box Blog" : "Kicks Blog"}</p>
        </a>
    {/each}
</div>

<DiscordEmbed title="kicks" description="My blogs" />