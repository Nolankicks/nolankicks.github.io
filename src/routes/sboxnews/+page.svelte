<script lang="ts">
    import { page } from '$app/stores';
    export let data;

    console.log( data.unsortedPosts );
</script>

<div class="mx-auto min-h-screen flex items-start p-6 gap-9 flex-col text-white font-poppins">
{#each data.unsortedPosts as post}
    <a href="sboxnews/{post.Title}">
        <div class="flex mt-5 mb-5 flex-col bg-blue p-5 rounded-md">
            <h1 class="font-bold">{post.Title}</h1>
            <p class="text-sm">{post.Summary}</p>
        </div>
    </a>
{/each}
</div>