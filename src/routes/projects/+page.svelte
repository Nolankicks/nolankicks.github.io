<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	import DiscordEmbed from '$lib/components/DiscordEmbed.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
    <title>Kicks-Projects</title>
</svelte:head>

<div class="w-full flex items-center justify-center animate-fadein">
    <div class="max-w-xl w-full my-5 mx-auto flex flex-col gap-4 pt-6 font-poppins px-5 text-white sm:px-0">
        <Header title="Projects" HyperLink={false} />
    </div>
</div>

<div class="w-full flex items-center flex-col px-5 animate-fadein">
    {#each data.posts as project}
        <Project project={project} />
    {/each}
</div>

<DiscordEmbed title="kicks" description="Some of the projects I've worked on" />
