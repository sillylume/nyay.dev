<script lang="ts">
	let props = $props();
</script>

<div {...props} class={['bg-neutral-800/25 p-2 ring-1 ring-neutral-600/50', props.class]}>
	{@render props.children?.()}
</div>
