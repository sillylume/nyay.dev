<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Bar from '$lib/components/Bar.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="flex min-h-screen">
	<Bar />
	<div class="w-full">
		{@render children()}
	</div>
</div>
