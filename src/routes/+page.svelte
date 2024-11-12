<script>
    export const pfpUrl = 'https://avatars.githubusercontent.com/u/95300917?s=400&u=4b7a75efdafbd368929511d483099250821ded21&v=4';
</script>

<svelte:head>
    <title>Kicks</title>
</svelte:head>

<div class="flex absolute top-0 left-0 bottom-0 right-0 flex-col items-center justify-center p-4 font-poppins text-white from-blue-900 via-gray-900 to-black">
    <div class="flex flex-col items-center justify-center gap-4 p-6 w-full max-w-xl rounded-md bg-transparentblue animate-fadein">
        <div class="w-full flex flex-col md:flex-row items-center">
            <div class="flex flex-col items-center md:items-start text-center md:text-left">
                <div class="text-3xl md:text-4xl font-bold mb-2">Hey, I'm kicks</div>
                <div class="text-xl md:text-2xl">I enjoy programming using C#, TypeScript/JavaScript, and HTML + CSS</div>
            </div>
        </div>
        <div class="flex flex-row md:justify-start justify-center w-full gap-4">
            <a href="https://github.com/Nolankicks">
                <img src="github-mark.png" alt="An icon for the website github" class="bg-cover h-12 w-12 hover:scale-105 active:scale-95 transition-all" />
            </a>
            
            <a href="https://sbox.game/nolankicks">
                <img src="sbox.png" alt="An icon for the game s&box" class="bg-cover rounded-md h-12 w-12 hover:scale-105 active:scale-95 transition-all" />
            </a>
        </div>
    </div>
</div>

<DiscordEmbed title="Kicks" description="My personal website" />