<script lang="ts">
    export let project;
</script>

<a
    href={project.redirect ? project.redirect : `projects/${project.slug}`}
    class="flex flex-row {project.image ? 'h-auto' : 'h-40'} p-4 bg-secondary rounded-md shadow-2xl font-poppins mb-4 lg:h-40 w-full max-w-xl items-center hover:scale-[1.01] active:scale-[0.99] transition-all"
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