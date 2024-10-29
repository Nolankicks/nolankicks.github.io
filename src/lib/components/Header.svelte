<script lang="ts">
	export let title: string;
    export let author: string | undefined;
    export let authorLink: string | undefined;
</script>

<div>
	<p class="font-poppins font-bold text-5xl mb-0 mt-0 text-kindagrey">{title}</p>
	<hr class="mt-3 {authorLink ? "mb-0" : "mb-4"}" />

    {#if author}
        {#if authorLink}
            <p class="text-2xl font-poppins">By <a href={authorLink}>{author}</a></p>
        {/if}
    
        {#if !authorLink}
            <p class="text-2xl font-poppins">By {author}</p>
        {/if}
    {/if}

</div>