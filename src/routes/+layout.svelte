<script>
    import "../app.css";
    import Background from "../lib/components/Background.svelte";
</script>

<nav class="sticky top-0 z-50 mx-auto flex w-full flex-col bg-transparentblack1 p-2 drop-shadow-md text-white font-poppins">
    <div class="container mx-auto flex flex-row items-center justify-between">
        <a href="/" class="hover:scale-105 transition-all active:scale-95">kicks</a>

        <div class="flex space-x-4">
            <a href="/projects" class="text-white hover:text-gray-300 hover:scale-105 active:text-gray-500 active:scale-95 transition-all">Projects</a>
        </div>
    </div>
</nav>

<Background />

<slot></slot>