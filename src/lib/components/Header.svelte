<script lang="ts">
	export let title: string;
	export let author: string | undefined;
	export let authorLink: string | undefined;
</script>

<svelte:element this="h" id={title}>
	<div>
		<a href={`#${title}`} target="_self" style="text-decoration: none;">
			<p
				class="font-poppins font-bold text-5xl mb-0 mt-0 text-kindagrey hover:text-orange transition-all"
			>
				{title}
			</p>
		</a>
		<hr class="mt-3 {authorLink ? 'mb-4' : 'mb-4'}" />

		{#if author}
			{#if authorLink}
				<p class="text-2xl font-poppins">
					By <a href={authorLink} style="text-decoration: none;">{author}</a>
				</p>
			{/if}

			{#if !authorLink}
				<p class="text-2xl font-poppins mt-2">By {author}</p>
			{/if}
		{/if}
	</div>
</svelte:element>
