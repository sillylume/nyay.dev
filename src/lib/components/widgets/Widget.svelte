<script lang="ts">
	import { slide } from 'svelte/transition';

	let props = $props();
</script>

<div
	in:slide
	out:slide
	{...props}
	class={['bg-neutral-800/25 p-2 ring-1 ring-neutral-600/50', props.class]}
>
	{@render props.children?.()}
</div>
