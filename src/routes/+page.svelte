<script>
	import NameCard from "$lib/components/NameCard.svelte";

	export const pfpUrl =
		'https://avatars.githubusercontent.com/u/95300917?s=400&u=4b7a75efdafbd368929511d483099250821ded21&v=4';

	export let data;
</script>

<svelte:head>
	<title>Kicks</title>
</svelte:head>

<NameCard />

<div class="w-full flex items-center justify-center p-5">
  <div class="flex flex-col items-center justify-center max-w-xl rounded-md animate-fadein w-full">
    <h2 class="text-white font-poppins text-2xl flex items-start w-full font-bolder">Latest Blog</h2>
    <hr class="my-5 w-full text-white"/>
    <a
      href={`${data.posts[0]?.IsNews ? 'sboxnews/' : 'blog/'}${data.posts[0]?.slug}`}
      class="block p-5 bg-secondary rounded-md shadow-2xl mb-4 hover:scale-[1.01] active:scale-[0.99] transition-all w-full"
    >
      <h2 class="text-2xl font-bold text-white">{data.posts[0]?.title}</h2>

      {#if data.posts[0]?.description}
        <p class="text-white font-semibold">{data.posts[0]?.description}</p>
      {/if}
      <p class="text-gray-400 text-white">
        {new Date(data.posts[0]?.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })}
      </p>

      <p class="text-gray-400 text-white">
        {data.posts[0]?.IsNews ? 'Sbox.Game Blog' : 'Kicks Blog'}
      </p>
    </a>
  </div>
</div>
<DiscordEmbed title="Kicks" description="My personal website" />
