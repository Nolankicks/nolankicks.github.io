<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<div class="min-h-screen flex items-center justify-center font-poppins text-white p-4">
    <div class="font-bold w-full max-w-md h-auto bg-transparentblue p-6 rounded-md flex flex-col pointer-events-auto shadow-2xl gap-7">
        <div class="max-w-md">I make projects in my spare time, here's a few of them</div>
            {#each data.projects as project}
            <div class="text:1xl md:text-1xl font-normal mb-2 bg-transparentblack0 p-4 rounded-md hover:scale-105 transition-all cursor-pointer active:scale-95">
                <a href={project.link}>
                    <div class="font-bold">{project.title}</div>
                    <div>{project.description}</div>
                </a>
            </div>
            {/each}
            
    </div>
</div>