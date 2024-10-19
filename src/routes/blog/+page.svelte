<!-- Blog list page -->
<script lang="ts">
    import { page } from '$app/stores';
    export let data;
</script>

<div class="container mx-auto p-4 font-poppins">
    {#each data.posts as blogPost}
        <a href={`blog/${blogPost.slug}`} class="block p-4 bg-transparentblue rounded-md shadow-lg mb-4 hover:scale-105 active:scale-95 transition-all">
            <h2 class="text-2xl font-bold text-white">{blogPost.title}</h2>
            <p class="text-white font-semibold">{blogPost.description}</p>
            <p class="text-gray-400 text-white">{blogPost.date}</p>
        </a>
    {/each}
</div>