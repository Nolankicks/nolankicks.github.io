<script>
	export const pfpUrl =
		'https://avatars.githubusercontent.com/u/95300917?s=400&u=4b7a75efdafbd368929511d483099250821ded21&v=4';

	export let data;
</script>

<svelte:head>
	<title>Kicks</title>
</svelte:head>

<div
	class="flex w-full h-96 p-5 flex-col font-poppins items-center justify-end text-white bg-gradient-to-b from-blue-900 via-gray-900 to-black mb-11"
>
	<div
		class="flex flex-col items-center justify-center gap-4 w-full max-w-xl rounded-md animate-fadein"
	>
		<div class="px-5 rounded-md mb-4 transition-all w-full flex">
			<div class="flex flex-col items-center">
				<div class="text-3xl md:text-4xl font-bold mb-2 w-full">Hey, I'm Kicks</div>
				<div class="text-xl md:text-2xl">
					I enjoy programming using C#, TypeScript/JavaScript, and HTML/CSS
				</div>
			</div>
		</div>
		<div class="px-5 rounded-md mb-4 transition-all w-full flex gap-6">
			<a href="https://github.com/Nolankicks">
				<img
					src="github-mark.png"
					alt="GitHub"
					class="bg-cover h-12 w-12 hover:scale-105 active:scale-95 transition-all"
				/>
			</a>
			<a href="https://sbox.game/nolankicks">
				<img
					src="sbox.png"
					alt="S&Box"
					class="bg-cover rounded-md h-12 w-12 hover:scale-105 active:scale-95 transition-all"
				/>
			</a>
		</div>
	</div>
</div>

<div class="w-full flex items-center justify-center md:p-0 p-5">
  <div class="flex flex-col items-center justify-center max-w-xl rounded-md animate-fadein w-full">
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
