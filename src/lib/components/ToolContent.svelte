<script lang="ts">
	import type { Locale } from '$lib/i18n';

	export let lang: Locale = 'en';
	export let content: {
		about: Partial<Record<Locale, string>> & { en: string };
		howTo: Partial<Record<Locale, string[]>> & { en: string[] };
		useCases: Partial<Record<Locale, string[]>> & { en: string[] };
		faq: Partial<Record<Locale, Array<{ q: string; a: string }>>> & { en: Array<{ q: string; a: string }> };
		related?: Array<{ href: string; label: Partial<Record<Locale, string>> & { en: string } }>;
	};

	const labels = {
		en: { about: 'About', howTo: 'How to use', useCases: 'Common use cases', faq: 'FAQ', related: 'Related tools' },
		ko: { about: '소개', howTo: '사용 방법', useCases: '주요 사용 사례', faq: '자주 묻는 질문', related: '관련 도구' },
		ja: { about: '概要', howTo: '使い方', useCases: '主な使用例', faq: 'よくある質問', related: '関連ツール' },
		zh: { about: '介绍', howTo: '使用方法', useCases: '常见用例', faq: '常见问题', related: '相关工具' }
	};

	$: l = labels[lang] || labels.en;
	$: about = content.about[lang] || content.about.en;
	$: howTo = content.howTo[lang] || content.howTo.en;
	$: useCases = content.useCases[lang] || content.useCases.en;
	$: faq = content.faq[lang] || content.faq.en;
</script>

<section class="mt-12 max-w-4xl space-y-10 text-gray-800 dark:text-dark-200">
	<!-- About -->
	<div>
		<h2 class="text-2xl font-bold mb-3 text-gray-900 dark:text-dark-100">{l.about}</h2>
		<p class="leading-relaxed whitespace-pre-line">{about}</p>
	</div>

	<!-- How to use -->
	<div>
		<h2 class="text-2xl font-bold mb-3 text-gray-900 dark:text-dark-100">{l.howTo}</h2>
		<ol class="list-decimal pl-6 space-y-2">
			{#each howTo as step}
				<li>{step}</li>
			{/each}
		</ol>
	</div>

	<!-- Use cases -->
	<div>
		<h2 class="text-2xl font-bold mb-3 text-gray-900 dark:text-dark-100">{l.useCases}</h2>
		<ul class="list-disc pl-6 space-y-2">
			{#each useCases as useCase}
				<li>{useCase}</li>
			{/each}
		</ul>
	</div>

	<!-- FAQ -->
	<div>
		<h2 class="text-2xl font-bold mb-3 text-gray-900 dark:text-dark-100">{l.faq}</h2>
		<div class="space-y-4">
			{#each faq as item}
				<div>
					<h3 class="font-semibold text-gray-900 dark:text-dark-100 mb-1">Q. {item.q}</h3>
					<p class="text-gray-700 dark:text-dark-300 leading-relaxed">A. {item.a}</p>
				</div>
			{/each}
		</div>
	</div>

	<!-- Related tools -->
	{#if content.related?.length}
		<div>
			<h2 class="text-2xl font-bold mb-3 text-gray-900 dark:text-dark-100">{l.related}</h2>
			<div class="flex flex-wrap gap-2">
				{#each content.related as r}
					<a
						href="/{lang}{r.href}"
						class="px-3 py-1.5 bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 rounded-md text-sm transition-colors"
					>
						{r.label[lang] || r.label.en}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</section>
