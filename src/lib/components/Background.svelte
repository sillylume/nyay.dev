<script>
	import { scrollY, innerHeight } from 'svelte/reactivity/window';
</script>

<img
	src="https://avatars.githubusercontent.com/u/268245564?v=4"
	class="mask-b-from fixed top-0 left-0 -z-1 size-full bg-linear-0 from-black to-white mask-b-to-transparent object-cover opacity-20 blur-xs grayscale invert transition-all duration-1000"
	alt="Hero Background"
	style:opacity={scrollY.current && innerHeight.current
		? 0.25 - scrollY.current / innerHeight.current
		: 0.25}
/>
