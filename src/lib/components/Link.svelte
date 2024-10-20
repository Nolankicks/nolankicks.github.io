<script lang="ts">
    import { page } from '$app/stores';

    export let href: string = '/';
    export let text: string = 'Link';

    export let style: string = 'font-poppins font-bolder hover:scale-105 active:text-gray-500 active:scale-95 text-lg transition-all';

</script>

<a href="{href}" class="{style} {href === $page.url.pathname ? 'text-altblue' : ''}">{text}</a>