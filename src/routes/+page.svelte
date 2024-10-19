<script lang="ts">
    const url = "https://avatars.githubusercontent.com/u/95300917?s=400&u=4b7a75efdafbd368929511d483099250821ded21&v=4";
    const githubUrl = "github-mark.png";
    const sboxUrl = "sbox.png";
    import DiscordEmbed from "../lib/components/DiscordEmbed.svelte";
</script>

<div class="min-h-screen flex items-center justify-center font-poppins text-white p-4">
    <div class="w-full max-w-md h-auto bg-transparentblue p-6 rounded-md flex flex-col pointer-events-auto shadow-2xl">
        <div class="w-full flex flex-col sm:flex-row items-center mb-4">
            <div class="bg-transparentblack0 w-32 h-32 rounded-md shrink-0 mb-4 sm:mb-0 sm:mr-4" style="background-image: url({url}); background-size: cover;"></div>
            <div class="w-full flex items-center justify-start p-4 sm:p-6">
                <div class="text-[14px] sm:text-[16px]">Hey, I'm kicks, I enjoy programming using C#, TS/JS, and HTML + CSS</div>
            </div>
        </div>
        <div class="w-full flex items-center justify-center sm:justify-start gap-4">
            <a href="https://github.com/Nolankicks" class="w-12 h-12 rounded-md shrink-0 hover:scale-105 transition-all active:scale-95">
                <img src={githubUrl} alt="GitHub Profile" class="w-full h-full object-contain rounded-md" />
                <span class="sr-only">GitHub Profile</span>
            </a>
            <a href="https://sbox.game/nolankicks" class="w-12 h-12 rounded-md shrink-0 hover:scale-105 transition-all active:scale-95">
                <img src={sboxUrl} alt="s&box Profile" class="w-full h-full object-contain rounded-md" />
                <span class="sr-only">s&box Profile</span>
            </a>
        </div>
    </div>
</div>

<DiscordEmbed title="kicks" description="Programmer" />