<script lang="ts">
	import type { Locale } from '$lib/i18n';

	export let lang: Locale = 'en';
	export let sections: Array<{
		heading: Partial<Record<Locale, string>> & { en: string };
		body: Partial<Record<Locale, string>> & { en: string };
		code?: { lang?: string; example: string };
	}>;
</script>

<article class="prose prose-lg dark:prose-invert max-w-3xl mt-12 space-y-8 text-gray-800 dark:text-dark-200">
	{#each sections as s}
		<section>
			<h2 class="text-2xl font-bold mb-3 text-gray-900 dark:text-dark-100">
				{s.heading[lang] || s.heading.en}
			</h2>
			<div class="leading-relaxed whitespace-pre-line">
				{s.body[lang] || s.body.en}
			</div>
			{#if s.code}
				<pre class="bg-gray-100 dark:bg-dark-900 p-4 rounded-lg overflow-x-auto text-sm mt-3"><code>{s.code.example}</code></pre>
			{/if}
		</section>
	{/each}
</article>
