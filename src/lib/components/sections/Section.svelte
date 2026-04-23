<script lang="ts">
	import type { Snippet } from 'svelte';
	let { id, header, body }: { id: string; header?: Snippet; body: Snippet } = $props();
</script>

<section {id} class={['flex min-h-screen flex-col gap-8 px-6 py-24 sm:px-18']}>
	{#if header}
		<div class="*:mb-2 *:not-first:text-xl *:not-first:text-neutral-600 first:text-4xl md:max-w-1/2">
			{@render header()}
		</div>
	{/if}

	{@render body()}
</section>
