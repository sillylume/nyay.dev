<script lang="ts">
	import { repos } from '$lib/stores/github.svelte';
	import Card from '../Card.svelte';
	import Section from './Section.svelte';
</script>

<Section id="projects">
	{#snippet header()}
		<h1>Projects</h1>
		<p>Here are all my public projects available on GitHub, sorted by number of stargazers.</p>
	{/snippet}

	{#snippet body()}
		<div class="grid gap-2 xl:grid-cols-2">
			{#each $repos?.slice(0, 6) as repository (repository)}
				<Card class="flex flex-col gap-6 rounded-lg p-8">
					<div>
						<a
							target="_blank"
							rel="noopener noreferrer external"
							href={repository.html_url}
							class="text-2xl underline">{repository.name} <i class="ri-external-link-line"></i></a
						>
						<p class="text-lg opacity-50">{repository.description}</p>
					</div>
					<p>
						<span><i class="ri-star-fill"></i> {repository.stargazers_count}</span>
					</p>
				</Card>
			{/each}
		</div>
	{/snippet}
</Section>
