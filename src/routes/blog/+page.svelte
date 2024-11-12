<!-- Blog list page -->
<script lang="ts">
    import { page } from '$app/stores';
    export let data;
</script>

<svelte:head>
    <title>Kicks-Blogs</title>
</svelte:head>

<div class="w-full flex items-center justify-center">
    <div class="max-w-xl w-full my-5 mx-auto flex flex-col gap-4 pt-6 font-poppins sm:px-4 text-white px-5">
        <Header title="Blogs" HyperLink={false} />
    </div>
</div>

<div class="w-full flex items-center flex-col px-5">
    {#each data?.posts ?? [] as blogPost}
        <Blog blogPost={blogPost} />
    {/each}
</div>

<DiscordEmbed title="kicks" description="My blogs" />