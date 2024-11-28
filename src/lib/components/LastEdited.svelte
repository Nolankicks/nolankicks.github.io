<script lang="ts">
    export let date = '';
    export let text = '';
</script>

<p class="text-sm text-center w-full flex">{text} {new Date(date).toLocaleString('en-us', {
    month: 'short',
    year: 'numeric'
})}</p>