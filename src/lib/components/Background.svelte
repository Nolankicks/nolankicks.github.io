<div class="effect"></div>

<style lang="postcss">
	.effect {
		@apply fixed h-screen w-screen -z-10;
		filter: contrast(150%) blur(1px);
		background: linear-gradient(0deg, rgba(255, 101, 0, 0.36), transparent 100%),
			linear-gradient(0deg, rgba(30, 62, 98, 0.75), transparent 400%), url('/noise.svg');
	}
</style>
