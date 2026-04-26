<script>
	import Background from '$lib/components/Background.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Contacts from '$lib/components/sections/Contacts.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
</script>

<Background />

<div class="flex min-h-screen flex-col justify-center p-8">
	<div class="sm:max-w-2/3">
		<img
			src="https://avatars.githubusercontent.com/u/268245564?v=4"
			class="mb-8 size-48 rounded-full"
			alt="GitHub Avatar"
		/>

		<div class="mb-8">
			<h1 class="text-4xl">
				Hello, I'm <span class="font-semibold text-shadow-[0_0_16px] text-shadow-neutral-200"
					>yay</span
				>!
			</h1>
			<p class="text-xl font-thin">Random developper</p>
		</div>

		<div class="mb-12">
			<p>
				I'm a young passionate developer, who loves messing around with code and create weird games
				and tools...
			</p>
		</div>

		<div class="flex gap-2 *:rounded-xl not-sm:flex-col not-sm:text-center not-sm:*:w-full">
			<a href="#projects" class="primary">View My Projects <i class="ri-arrow-right-line"></i></a>
			<a href="#contacts" class="secondary">Get In Touch</a>
		</div>
	</div>
</div>

<About />
<Projects />
<Contacts />
