<script lang="ts">
	import Widget from './Widget.svelte';

	import { lanyard } from '$lib/stores/lanyard.svelte';
	import type { Activity, Profile } from '$lib/stores/lanyard.svelte';
	
	let activities = $state<Activity[] | null>();
	lanyard.subscribe(
		(val) =>
			(activities = val?.activities.filter(
				(item, index) => item.id != 'custom' && item.id != 'spotify:1'
			))
	);
</script>

{#if activities}
	<div class="flex flex-col gap-2">
		{#each activities.slice(0, 2) as activity}
			<Widget class="flex items-center gap-6 rounded-xl">
				<img
					src={activity.assets?.large_image?.replace(/mp:external\/([^\/]*)\/(http[s])/g, '$2:/')}
					alt="Activity Large"
					class="aspect-square size-24 rounded-lg object-cover ring-1 ring-neutral-600"
				/>
				<div>
					<h1 class="text-xl">{activity.name}</h1>
					<p class="text-sm">{activity.assets?.large_text}</p>
				</div>
			</Widget>
		{/each}
	</div>
{/if}
