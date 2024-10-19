<!-- Blog list page -->
<script lang="ts">
    import { page } from '$app/stores';
    export let data;
</script>

<div class="container mx-auto p-4 font-poppins">
    {#each data.posts as blogPost}
        <a href={`blog/${blogPost.slug}`} class="block p-4 bg-transparentblue rounded-md shadow-lg mb-4">
            <h2 class="text-2xl font-bold text-white">{blogPost.title}</h2>
            <p class="text-gray-400">{blogPost.date}</p>
        </a>
    {/each}
</div>