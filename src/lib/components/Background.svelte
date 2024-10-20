<div class="effect"></div>

<style lang="postcss">
    .effect {
        @apply fixed top-0 left-0 w-full h-full -z-10;
        filter: contrast(175%) brightness(100%) blur(1px);
        background:
            linear-gradient(0deg, rgba(255, 101, 0, 0.35), transparent),
            radial-gradient(circle, rgba(30, 62, 98, 0.9), transparent 300%),
            url('/noise.svg');
    }
</style>