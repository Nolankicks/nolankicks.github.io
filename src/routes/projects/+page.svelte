<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	import DiscordEmbed from '$lib/components/DiscordEmbed.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
    <title>Kicks-Projects</title>
</svelte:head>

<div class="md:px-18 container mx-auto flex flex-col gap-4 px-2 pt-6 font-poppins sm:px-4 lg:px-32 xl:px-40 text-white">
    <Header title="Projects" HyperLink={false} />
</div>
<!--Change items start to center when more projects are added-->
<div
	class="md:px-18 container mx-auto flex flex-col gap-4 px-2 pt-6 font-poppins sm:px-4 lg:px-32 xl:px-40 animate-fadein"
>
	{#each data.posts as project}
    <a
    href={project.redirect ? project.redirect : `projects/${project.slug}`}
    class="flex flex-row {project.image ? 'h-auto' : 'h-40'} p-4 bg-secondary rounded-md shadow-2xl mb-4 lg:h-40 w-full items-center hover:scale-[1.01] active:scale-[0.99] transition-all"
>
    {#if project.image}
        <img
            src={project.image}
            alt={project.title}
            class="bg-cover rounded-md h-32 w-32 flex-shrink-0 mr-4 transition-all"
        />
    {/if}
    <div class="flex flex-col w-full {project.image ? 'items-start' : 'sm:items-start items-center'}">
        <h2 class="font-bold text-white text-3xl">{project.title}</h2>
        <p class="text-white font-semibold {project.image ? 'text-sm lg:text-base' : 'text-xl'}">{project.description}</p>
        {#if project.lang}
            <p class="text-white {project.image ? 'text-xs lg:text-sm' : 'text-lg md:text-xl'}">{project.lang}</p>
        {/if}
        <p class="text-white {project.image ? 'text-xs lg:text-sm' : 'text-xl'}">{project.date}</p>
    </div>
</a>
	{/each}
</div>

<DiscordEmbed title="kicks" description="Some of the projects I've worked on" />
