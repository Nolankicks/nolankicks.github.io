<div class="effect"></div>

<style lang="postcss">
    .effect
    {
        @apply absolute w-full h-full -z-10;
		filter: contrast(175%) brightness(100%) blur(1px);
  		background:
		  linear-gradient(0deg, black, transparent),
          radial-gradient(circle, rgba(46, 138, 212, 0.5), transparent 300%),
		  url('/noise.svg');
    }
</style>