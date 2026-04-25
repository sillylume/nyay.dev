<script lang="ts">
	import Section from '$lib/components/sections/Section.svelte';
	import Card from '../Card.svelte';
</script>

<Section id="about">
	{#snippet header()}
		<h1>About</h1>
	{/snippet}

	{#snippet body()}
		<div class="grid justify-between gap-12 md:grid-cols-2">
			<div>
				<ul class="*:mb-8">
					<li>
						<p class="text-lg text-neutral-600"><i class="ri-cake-2-line"></i> Age</p>
						<p class="text-xl">&lt; 18 Years old</p>
					</li>
					<li>
						<p class="text-lg text-neutral-600"><i class="ri-map-pin-2-line"></i> Location</p>
						<p class="text-xl">France, Lyon</p>
					</li>
					<li>
						<p class="text-lg text-neutral-600"><i class="ri-global-line"></i> Languages</p>
						<ul class="pl-4 text-xl">
							<li>French (Native)</li>
							<li>English (B1)</li>
						</ul>
					</li>
					<li>
						<p class="text-lg text-neutral-600"><i class="ri-brain-line"></i> Experience</p>
						<ul class="pl-4 text-lg">
							<li>
								<p>~ 5 Years in Computers/Technology</p>
							</li>
							<li>
								<p>~ 4 Years in Development</p>
							</li>
							<li>
								<p>~ 4 Years in Python</p>
							</li>
						</ul>
					</li>
				</ul>
			</div>

			<div class="text-lg *:mb-8">
				<h1 class="max-w-11/12 text-2xl">
					Project with <span class="font-semibold">Readability</span>,
					<span class="font-semibold">Extendability</span>
					and <span class="font-semibold">Performances</span> in mind are meaningful projects.
				</h1>
				<p>
					Indeed, picking the right language, for the right tool are one of my top priority even as
					a amator. (Fuck Electron.JS)
				</p>
				<p>
					And being able to create my own tool at the lowest level imaginable to guarantee peak
					performances for the end user would be a great achievement as a developer.
				</p>
				<p>
					I don't need a whole section to show what I can (or might be able) to do... You can check
					my <a href="#projects" class="underline">Projects</a> to know what I can really do &gt;:3
				</p>
			</div>
		</div>
	{/snippet}
</Section>
