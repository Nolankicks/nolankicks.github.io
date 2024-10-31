<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;

    function removeTag(string: string) {
		return string.replace('</del>', '</a>');
	}
</script>

<svelte:head>
    <title>Kicks-{data.post?.Title}</title>
</svelte:head>

<base target="_blank" />

<div class="flex flex-col font-poppins w-full mx-auto p-4 sm:p-8 items-center justify-center">
    <div class="text-white text-shadow flex flex-col items-center justify-center">
        <p class="text-white mb-5 text-5xl md:text-7xl sm:text-5xl font-bold sm:px-0 text-center font-poppins">
            {data.post?.Title}
        </p>
        
        <p class="date md:text-4xl sm:text-3xl text-1xl text-center font-poppins text-white">
            {new Date(data.post?.Created ?? "").toLocaleString('en-us', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            })}
        </p>
    </div>
</div>

<article class="flex flex-col font-poppins w-full mx-auto 2xl:w-[75%]">
        <div class="mb-10 text-white text-shadow flex flex-col self-center">
        <hr class="border-t-2 mb-10 text-white" />
        <article class="bg-transparentblue rounded-md p-5 font-poppins bg-blackalpha backdrop-blur-3xl shadow-2xl justify-center flex animate-fadein ">
            <article class="prose text-white prose-headings:font-bold prose-headings:text-white prose-headings:font-poppins prose-a:underline prose-a:text-white hover:prose-a:text-altblue hover:prose-a:transition-all">
                {#each data.post?.Sections ?? [] as section}
                    {@html removeTag(section.Contents)}
                {/each}
            </article>
        </article>
    </div>

    
</article>

<DiscordEmbed title={data.post?.Title ?? ""} description={data.post?.Summary} />