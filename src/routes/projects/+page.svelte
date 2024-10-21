<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
    import DiscordEmbed from '$lib/components/DiscordEmbed.svelte';
    import Header from '$lib/components/Header.svelte';
</script>

<div class="container mx-auto font-poppins flex text-white p-5 text-3xl font-bold justify-center sm:justify-start items-center">
    <Header title="Projects" />
</div>
<!--Change items start to center when more projects are added-->
<div class="container mx-auto pt-0 pr-5 pb-5 pl-5 font-poppins animate-fadein flex flex-wrap flex-col gap-5 h-screen items-start">
    {#each data.posts as project}
        <a href={`projects/${project.slug}`} class="flex flex-row p-4 bg-transparentblue rounded-md shadow-2xl mb-4 h-auto lg:h-40 w-full lg:w-80 items-center hover:scale-105 active:scale-95 transition-all">
            {#if project.image}
                <img src={project.image} alt={project.title} class="bg-cover rounded-md h-32 w-32 flex-shrink-0 mr-4 transition-all" />
            {/if}
            <div class="flex flex-col w-full items-start">
                <h2 class="text-xl lg:text-2xl font-bold text-white">{project.title}</h2>
                <p class="text-sm lg:text-base text-white font-semibold">{project.description}</p>
                <p class="text-xs lg:text-sm text-white">{project.date}</p>
            </div>
        </a>
    {/each}
</div>

<DiscordEmbed title="kicks" description="Some of the projects I've worked on" />