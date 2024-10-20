<script lang="ts">
    import type { PageData } from './$types';
    import DiscordEmbed from '$lib/components/DiscordEmbed.svelte';
    export let data: PageData;
</script>

<base target="_blank" />

<div class="flex flex-col font-poppins w-full mx-auto 2xl:w-[75%] p-4 sm:p-8">
    <div class="mb-10 text-white text-shadow flex flex-col self-center">
        <p class="text-[pictonblue] mb-5 text-5xl md:text-7xl sm:text-5xl font-bold sm:px-0 text-center">
            {data.blogPost.title}
        </p>
        <p class="date mb-5 md:text-4xl sm:text-3xl text-2xl text-center">
            {new Date(data.blogPost.date).toLocaleString('en-us', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            })}
        </p>

        <hr class="border-t-2 mb-10" />
        <div class="bg-transparentblue rounded-md p-5 font-poppins bg-blackalpha backdrop-blur-3xl shadow-2xl justify-center flex animate-fadein ">
            <div class="prose text-white prose-headings:font-normal prose-a:underline prose-a:text-white hover:prose-a:text-altblue hover:prose-a:transition-all">
                <svelte:component this={data.content} />
            </div>
        </div>
    </div>

    <DiscordEmbed title={data.blogPost.title} description={data.blogPost.description} />
</div>