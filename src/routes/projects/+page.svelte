<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
    import DiscordEmbed from '$lib/components/DiscordEmbed.svelte';
</script>

<div class="min-h-screen flex items-center justify-center font-poppins text-white p- from-blue-900 via-gray-900 to-black">
    <div class="w-full max-w-3xl bg-gray-800 p-6 rounded-lg bg-transparentblue shadow-lg flex flex-col gap-6 mx-5 animate-fadein">
        <div class="text-2xl font-bold mb-4 text-center">
            I work on some projects in my spare time, here's a few of them
        </div>
        {#each data.posts as project}
            <a
                href={`projects/${project.slug}`}
                class="flex flex-col sm:flex-row items-center p-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer active:scale-95 gap-4 bg-transparentblack0"
            >
                {#if project.image}
                    <img
                        src={project.image}
                        alt={project.title}
                        class="w-20 h-20 rounded-lg object-cover"
                    />
                {/if}
                    <div class="flex text-xl flex-shrink-0 font-bold text-center sm:text-left">{project.title}</div>
                    <div class="flex text-center h-full justify-center sm:text-left w-full">{project.description}</div>
            </a>
        {/each}
    </div>
</div>

<DiscordEmbed title="kicks" description="Some of the projects I've worked on" />