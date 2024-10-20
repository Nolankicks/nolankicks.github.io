<script>
    import { onMount } from 'svelte';
    export const pfpUrl = 'https://avatars.githubusercontent.com/u/95300917?s=400&u=4b7a75efdafbd368929511d483099250821ded21&v=4';
</script>

<div class="flex h-screen flex-col items-center justify-center p-4 font-poppins text-white from-blue-900 via-gray-900 to-black">
    <div class="flex flex-col items-center justify-center gap-4 p-6 w-full max-w-xl bg-gray-800 rounded-md bg-transparentblue shadow-lg animate-fadein">
        <div class="w-full flex flex-col md:flex-row items-center">
            <img src="{pfpUrl}" class="w-40 h-40 rounded-md mb-4 md:mb-0 md:mr-6" alt="Ultra 85" />
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

<style>
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-fadein {
        animation: fadeIn 0.5s ease-in-out;
    }
</style>