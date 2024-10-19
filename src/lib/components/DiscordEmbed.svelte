<script lang="ts">
	export let title: string;
	export let description: string = '';
</script>

<svelte:head>
	<meta content={title} property="og:title" />
	<meta content={description} property="og:description" />
	<meta content="/" property="og:url" />
	<meta content="rgba(46, 138, 212, 1)" data-react-helmet="true" name="theme-color" />
</svelte:head>