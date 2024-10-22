<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	import DiscordEmbed from '$lib/components/DiscordEmbed.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<div
	class="container mx-auto font-poppins flex text-white p-5 text-3xl font-bold justify-center sm:justify-start items-center"
>
	<Header title="Projects" />
</div>
<!--Change items start to center when more projects are added-->
<div
	class="container mx-auto pt-0 pr-5 pb-5 pl-5 font-poppins animate-fadein flex flex-wrap flex-col gap-5 h-screen items-start"
>
	{#each data.posts as project}
    <a
    href={project.redirect ? project.redirect : `projects/${project.slug}`}
    class="flex flex-row {project.image ? 'h-auto' : 'h-40'} p-4 bg-transparentblue rounded-md shadow-2xl mb-4 lg:h-40 w-full items-center hover:scale-105 active:scale-95 transition-all"
>
    {#if project.image}
        <img
            src={project.image}
            alt={project.title}
            class="bg-cover rounded-md h-32 w-32 flex-shrink-0 mr-4 transition-all"
        />
    {/if}
    <div class="flex flex-col w-full {project.image ? 'items-start' : 'md:items-start items-center'}">
        <h2 class="font-bold text-white {project.image ? 'text-xl lg:text-2xl' : 'text-3xl'}">{project.title}</h2>
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
