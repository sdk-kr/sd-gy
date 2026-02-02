<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="min-h-[60vh] flex items-center justify-center px-4">
	<div class="text-center">
		<h1 class="text-6xl font-bold text-violet-500 mb-4">{$page.status}</h1>
		<p class="text-xl text-gray-600 dark:text-dark-300 mb-8">{$page.error?.message || 'Page not found'}</p>
		<a href="/en" class="inline-block px-6 py-3 bg-violet-500 hover:bg-violet-400 text-white font-medium rounded-lg transition-colors">
			Go Home
		</a>
	</div>
</div>
