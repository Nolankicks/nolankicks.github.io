<script lang="ts">
	import { page } from '$app/stores';
	export let data;

	console.log(data.post);
</script>

<div class="flex flex-col font-poppins w-full mx-auto 2xl:w-[75%] p-4 sm:p-8">
	<div class="mb-10 text-white text-shadow flex flex-col self-center">
		<p
			class="text-[pictonblue] mb-5 text-5xl md:text-7xl sm:text-5xl font-bold sm:px-0 text-center"
		>
			{data.post?.Title}
		</p>

		<hr class="border-t-2 mb-10" />
		<div
			class="bg-transparentblue rounded-md p-6 flex-col font-poppins bg-blackalpha backdrop-blur-3xl shadow-2xl justify-center flex animate-fadein"
		>
			{#each data.post?.Sections ?? [] as content}
				<div class="flex flex-col items-start mb-5">
					<Header title={content.Title} />
					<div>{content.Contents}</div>
				</div>
			{/each}
		</div>
		<div
			class="prose text-white prose-headings:font-bold prose-headings:text-white prose-headings:font-poppins prose-a:underline prose-a:text-white hover:prose-a:text-altblue hover:prose-a:transition-all"
		></div>
	</div>
</div>
