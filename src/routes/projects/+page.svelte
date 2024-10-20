<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import DiscordEmbed from '$lib/components/DiscordEmbed.svelte';
</script>

<div class="min-h-screen flex items-center justify-center font-poppins text-white p-4">
	<div
		class="font-bold w-full max-w-lg h-auto bg-transparentblue p-6 rounded-md flex flex-col pointer-events-auto shadow-2xl gap-7 animate-fadein"
	>
		<div class="max-w-lg text-lg font-bold">
			I work on some projects in my spare time, here's a few of them
		</div>
		{#each data.posts as project}
			<a
				href={`projects/${project.slug}`}
				class="text-1xl text-center sm:text-start md:text-1xl font-normal mb-2 flex flex-col sm:flex-row items-center bg-transparentblack0 p-4 rounded-md hover:scale-105 transition-all cursor-pointer active:scale-95 gap-6"
			>
				<div class="font-bold text-xl text-nowrap flex flex-shrink-0">{project.title}</div>
				<div class="w-full flex">{project.description}</div>
				{#if project.image}
                    <img
						src={project.image}
						alt={project.title}
						class="bg-cover rounded-md h-20 w-20 transition-all"
					/>
				{/if}
			</a>
		{/each}
	</div>
</div>

<DiscordEmbed title="kicks" description="Some of the projects I've worked on" />
