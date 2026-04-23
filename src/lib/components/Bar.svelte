<script lang="ts">
	import { slide } from 'svelte/transition';
	import Logo from './Logo.svelte';
	import Footer from './Footer.svelte';
	import Activities from './widgets/Activities.svelte';

	let open: boolean = $state(false);
</script>

<div
	class="relative top-0 left-0 flex w-full justify-between gap-16 p-4 not-lg:fixed lg:sticky lg:h-screen lg:w-1/3 lg:flex-col"
>
	<div>
		<Logo />
	</div>

	<!-- Mobile -->
	<div class="z-1 lg:hidden">
		<button onclick={() => (open = open ? false : true)}>
			{#if !open}
				<i class="ri-menu-line"></i>
			{:else}
				<i class="ri-close-line"></i>
			{/if}
		</button>
	</div>

	{#if open}
		<div
			in:slide
			out:slide
			class="absolute top-0 left-0 flex min-h-screen w-full flex-col justify-between px-8 py-16 backdrop-blur-xs backdrop-brightness-5"
			onclick={() => (open = false)}
			role="none"
		>
			<div class="*:mb-24">
				<ul class="flex-1 text-2xl">
					<li><a href="#about">About</a></li>
					<li><a href="#projects">Projects</a></li>
					<li><a href="#contacts">Contacts</a></li>
				</ul>
				<Activities />
			</div>
			<Footer />
		</div>
	{/if}

	<ul class="flex-1 text-xl not-lg:hidden">
		<li><a href="#about">About</a></li>
		<li><a href="#projects">Projects</a></li>
		<li><a href="#contacts">Contacts</a></li>
	</ul>

	<div class="*:mb-4 not-lg:hidden">
		<Activities />
		<Footer />
	</div>
</div>
