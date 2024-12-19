<script lang="ts">
	export let project;

	let slug = project.redirect ? project.redirect : `projects/${project.slug}`;

	let isHovered: boolean;
</script>

<a
	class="flex flex-shrink-0 flex-row text-white min-h-24 font-poppins relative gap-2"
	href={slug}
    onmouseenter={() => (isHovered = true)}
	onmouseleave={() => (isHovered = false)}
>
	{#if project.image}
		<img src={project.image} class="h-32 w-32 rounded-md flex-shrink-0 flex" alt={project.title} />
	{/if}

	<div class="flex flex-shrink items-start justify-center flex-col w-full">
		<p class="text-xl font-bold">{project.title}</p>
		<p>{project.description}</p>
	</div>

    <p class="absolute -bottom-2 w-full bg-white h-1 flex {isHovered ? "opacity-100" : "opacity-0"} transition-all"></p>
</a>
