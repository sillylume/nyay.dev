<script lang="ts">
	import Card from '../Card.svelte';
	import Section from './Section.svelte';
</script>

<Section id="contacts">
	{#snippet header()}
		<h1>Contacts</h1>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptates repudiandae a, perferendis illo dolorum placeat!
		</p>
	{/snippet}

	{#snippet body()}
		Coming soon...
	{/snippet}
</Section>
