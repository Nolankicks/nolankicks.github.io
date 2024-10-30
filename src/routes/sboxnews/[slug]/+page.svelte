<script lang="ts">
	import { page } from '$app/stores';
	import DiscordEmbed from '$lib/components/DiscordEmbed.svelte';
	export let data;

	function removeTag(string: string) {
		return string.replace('</del>', '</a>');
	}
</script>

<svelte:head>
	<title>Kicks-{data.post?.Title}</title>
</svelte:head>

<base target="_blank" />

<div class="flex flex-col font-poppins w-full mx-auto 2xl:w-[75%] p-4 sm:p-8">
	<div class="mb-10 text-white text-shadow flex flex-col self-center">
		<p class="text-white mb-5 text-5xl md:text-7xl sm:text-5xl font-bold sm:px-0 text-center">
			{data.post?.Title}
		</p>
        <p class="date mb-5 md:text-4xl sm:text-3xl text-2xl text-center">
			{data.post?.Created ? new Date(data.post.Created).toLocaleString('en-us', {
				month: 'short',
				day: 'numeric',
				year: 'numeric'
			}) : ''}
        </p>

		<hr class="border-t-2 mb-10" />

		<div
			class="bg-transparentblue rounded-md pt-5 pb-5 font-poppins backdrop-blur-3xl shadow-2xl justify-center flex animate-fadein">
			<div
				class="prose text-white prose-headings:font-bold prose-headings:text-white prose-headings:font-poppins prose-a:underline prose-a:text-white hover:prose-a:text-altblue hover:prose-a:transition-all">
				{#each data.post?.Sections ?? [] as content}
					<div class="flex flex-col items-start mb-5 last:mb-0 mt-1 first:mt-0">
						<Header title={content.Title} />
						<div
							class="prose text-white prose-headings:font-bold prose-headings:text-white prose-headings:font-poppins prose-a:underline prose-a:text-white hover:prose-a:text-altblue hover:prose-a:transition-all">
							{@html removeTag(content.Contents)}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<DiscordEmbed title={data.post?.Title ?? ""} description={data.post?.Summary} />
