<script lang="ts">
    import "../app.css";
    import Background from "../lib/components/Background.svelte";
    import "../syntax-highlight.css";
    import Link from "$lib/components/Link.svelte";
	import NavBar from "$lib/components/NavBar.svelte";
</script>

<NavBar />

<Background />

<slot></slot>