<script lang="ts">
    import { onMount } from 'svelte';
    import DiscordEmbed from '$lib/components/DiscordEmbed.svelte';

    let videoId = 'dQw4w9WgXcQ'; // YouTube video ID

    onMount(() => {
        // Any additional logic can go here
    });
</script>

<div class="flex h-screen flex-col items-center justify-center p-4 font-poppins text-white bg-gradient-to-r from-blue-900 via-gray-900 to-black">
    <div class="flex flex-col items-center justify-center gap-4 p-6 w-full max-w-xl bg-gray-800 rounded-md">
        <iframe
            class="w-full h-64 md:h-96 rounded-md"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    </div>
</div>

<DiscordEmbed title="My side of the story..."/>