<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="fixed top-0 left-0 size-full backdrop-blur-xs backdrop-brightness-25">
	<div class="flex min-h-screen items-center justify-center">
		<div class="text-center">
			<h1 class="text-4xl mb-4">{page.status} - {page.error?.message}</h1>
			<div>
        <p class="text-xl">Kid? Are you lost???</p>
			  <p>You should <a href="/" class="underline">Go back home</a> :&lt;</p>
      </div>
		</div>
	</div>
</div>

<div class="w-full"></div>