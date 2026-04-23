<script lang="ts">
	import { onMount } from 'svelte';
	import Card from '../Card.svelte';
	import Section from './Section.svelte';

	type Repository = {
		id: number;
		node_id: string;
		name: string;
		full_name: string;
		private: boolean;
		owner: {
			login: string;
			id: number;
			node_id: string;
			avatar_url: string;
			gravatar_id: string;
			url: string;
			html_url: string;
			followers_url: string;
			following_url: string;
			gists_url: string;
			starred_url: string;
			subscriptions_url: string;
			organizations_url: string;
			repos_url: string;
			events_url: string;
			received_events_url: string;
			type: string;
			user_view_type: string;
			site_admin: boolean;
		};
		html_url: string;
		description?: string;
		fork: boolean;
		url: string;
		forks_url: string;
		keys_url: string;
		collaborators_url: string;
		teams_url: string;
		hooks_url: string;
		issue_events_url: string;
		events_url: string;
		assignees_url: string;
		branches_url: string;
		tags_url: string;
		blobs_url: string;
		git_tags_url: string;
		git_refs_url: string;
		trees_url: string;
		statuses_url: string;
		languages_url: string;
		stargazers_url: string;
		contributors_url: string;
		subscribers_url: string;
		subscription_url: string;
		commits_url: string;
		git_commits_url: string;
		comments_url: string;
		issue_comment_url: string;
		contents_url: string;
		compare_url: string;
		merges_url: string;
		archive_url: string;
		downloads_url: string;
		issues_url: string;
		pulls_url: string;
		milestones_url: string;
		notifications_url: string;
		labels_url: string;
		releases_url: string;
		deployments_url: string;
		created_at: string;
		updated_at: string;
		pushed_at: string;
		git_url: string;
		ssh_url: string;
		clone_url: string;
		svn_url: string;
		homepage?: string;
		size: number;
		stargazers_count: number;
		watchers_count: number;
		language?: string;
		has_issues: boolean;
		has_projects: boolean;
		has_downloads: boolean;
		has_wiki: boolean;
		has_pages: boolean;
		has_discussions: boolean;
		forks_count: number;
		mirror_url: any;
		archived: boolean;
		disabled: boolean;
		open_issues_count: number;
		license?: {
			key: string;
			name: string;
			spdx_id: string;
			url: string;
			node_id: string;
		};
		allow_forking: boolean;
		is_template: boolean;
		web_commit_signoff_required: boolean;
		has_pull_requests: boolean;
		pull_request_creation_policy: string;
		topics: Array<string>;
		visibility: string;
		forks: number;
		open_issues: number;
		watchers: number;
		default_branch: string;
	};

	let repositories = $state<Repository[] | null>();
	let rsorted = $derived(repositories?.toSorted((a, b) => b.stargazers_count - a.stargazers_count));
	onMount(() => {
		fetch(`https://api.github.com/users/${'sillylume'}/repos?per_page=99`)
			.then((res) => res.json())
			.then((data) => (repositories = data));
	});
</script>

<Section id="projects">
	{#snippet header()}
		<h1>Projects</h1>
		<p>Here are all my public projects available on GitHub, sorted by number of stargazers.</p>
	{/snippet}

	{#snippet body()}
		<div class="grid gap-2 xl:grid-cols-2">
			{#each rsorted?.slice(0, 6) as repository}
				<Card class="flex flex-col gap-6 rounded-lg p-8">
					<div>
						<a
							target="_blank"
							rel="noopener noreferrer"
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
