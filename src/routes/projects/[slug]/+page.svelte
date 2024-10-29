<script lang="ts">
    import type { PageData } from './$types';
    import DiscordEmbed from '$lib/components/DiscordEmbed.svelte';
    export let data: PageData;
</script>

<svelte:head>
    <title>Kicks-{data.project.title}</title>
</svelte:head>

<base target="_blank" />

<div class="flex flex-col font-poppins w-full mx-auto 2xl:w-[75%] p-4 sm:p-8">
    <div class="mb-10 text-white text-shadow flex flex-col self-center">
        <p class="mb-5 text-5xl md:text-7xl sm:text-5xl font-bold sm:px-0 text-center flex justify-center items-center">
            {data.project.title}
        </p>
        <p class="date mb-5 md:text-4xl sm:text-3xl text-2xl text-center">
            {new Date(data.project.date).toLocaleString('en-us', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            })}
        </p>

        <hr class="border-t-2 mb-10" />
        <div class="bg-transparentblue rounded-md p-5 font-poppins bg-blackalpha backdrop-blur-3xl shadow-2xl justify-center flex animate-fadein">
            <div class="prose text-white prose-headings:font-normal prose-a:underline prose-a:text-white hover:prose-a:text-altblue hover:prose-a:transition-all">
                {#if data.project.sbox || data.project.github}
                    <div class="flex w-full h-12 mb-4 gap-4">
                        {#if data.project.sbox}
                            <a href={data.project.sbox} class="flex items-center justify-center">
                                <img src="../sbox.png" alt="An icon for a link" class="rounded-md bg-cover h-12 w-12 hover:scale-105 active:scale-95 transition-all" />
                            </a>
                        {/if}

                        {#if data.project.github}
                            <a href={data.project.github} class="flex items-center justify-center">
                                <img src="../github-mark.png" alt="An icon for a link" class="bg-cover h-12 w-12 hover:scale-105 active:scale-95 transition-all" />
                            </a>
                        {/if}
                    </div>
                {/if}
                <svelte:component this={data.content} />

                {#if data.project.image}
                    <div class="flex w-full items-center justify-center">
                        <img src={'../' + data.project.image} alt={data.project.title} class="bg-cover rounded-md h-80 w-80 flex justify-center items-center transition-all" />
                    </div>
                {/if}
            </div>
        </div>
    </div>

    <DiscordEmbed title={data.project.title} description={data.project.description} />
</div>