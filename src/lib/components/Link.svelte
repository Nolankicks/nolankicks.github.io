<script lang="ts">
    import { page } from '$app/stores';

    export let href: string = '/';
    export let text: string = 'Link';

    export let style: string = 'font-poppins font-bold hover:scale-105 active:text-gray-500 active:scale-95 scale-98 text-xl transition-all opacity-50';

</script>

<a href="{href}" class="{style} {href === $page.url.pathname ? 'selected' : ''}">{text}</a>

<style>
    .selected {
        opacity: 1;
    }

    a {
        transform-origin: center;
    }
</style>