<script lang="ts">
    import Link from "$lib/components/Link.svelte";
</script>

<nav class="sticky top-0 z-50 mx-auto flex w-full flex-col bg-blue p-4 drop-shadow-md text-white font-poppins">
    <div class="container mx-auto flex flex-row items-center justify-between">

        <Link href="/" text="kicks" />
        
        <div class="flex space-x-6">
            <Link href="/projects" text="Projects" />
            <Link href="/blog" text="Blogs" />
        </div>
    </div>
</nav>