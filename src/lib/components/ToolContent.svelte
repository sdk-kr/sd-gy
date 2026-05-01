<script lang="ts">
	import type { Locale } from '$lib/i18n';

	export let lang: Locale = 'en';
	export let toolName: string = '';
	export let toolUrl: string = '';
	export let lastUpdated: string = '2026-04-30';
	export let category: string = 'Developer Tools';
	export let breadcrumb: Array<{ name: string; url: string }> = [];
	export let content: {
		about: Partial<Record<Locale, string>> & { en: string };
		howTo: Partial<Record<Locale, string[]>> & { en: string[] };
		useCases: Partial<Record<Locale, string[]>> & { en: string[] };
		faq: Partial<Record<Locale, Array<{ q: string; a: string }>>> & {
			en: Array<{ q: string; a: string }>;
		};
		related?: Array<{ href: string; label: Partial<Record<Locale, string>> & { en: string } }>;
		externalRefs?: Array<{ href: string; label: string }>;
	};

	const labels = {
		en: {
			about: 'About this tool',
			howTo: 'How to use',
			useCases: 'Common use cases',
			faq: 'Frequently asked questions',
			related: 'Related tools',
			refs: 'Further reading',
			updated: 'Last updated'
		},
		ko: {
			about: '도구 소개',
			howTo: '사용 방법',
			useCases: '주요 사용 사례',
			faq: '자주 묻는 질문',
			related: '관련 도구',
			refs: '추가 자료',
			updated: '최종 수정'
		},
		ja: {
			about: 'ツールについて',
			howTo: '使い方',
			useCases: '主な使用例',
			faq: 'よくある質問',
			related: '関連ツール',
			refs: '関連リンク',
			updated: '最終更新'
		},
		zh: {
			about: '关于此工具',
			howTo: '使用方法',
			useCases: '常见用例',
			faq: '常见问题',
			related: '相关工具',
			refs: '延伸阅读',
			updated: '最后更新'
		}
	};

	$: l = labels[lang] || labels.en;
	$: about = content.about[lang] || content.about.en;
	$: howTo = content.howTo[lang] || content.howTo.en;
	$: useCases = content.useCases[lang] || content.useCases.en;
	$: faq = content.faq[lang] || content.faq.en;

	$: howToSchema = {
		'@context': 'https://schema.org',
		'@type': 'HowTo',
		name: toolName,
		step: howTo.map((s, i) => ({
			'@type': 'HowToStep',
			position: i + 1,
			name: `Step ${i + 1}`,
			text: s
		}))
	};

	$: faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faq.map((item) => ({
			'@type': 'Question',
			name: item.q,
			acceptedAnswer: { '@type': 'Answer', text: item.a }
		}))
	};

	$: webAppSchema = {
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		name: toolName,
		url: toolUrl,
		applicationCategory: category,
		operatingSystem: 'Any',
		offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
		dateModified: lastUpdated
	};

	$: breadcrumbSchema =
		breadcrumb.length > 0
			? {
					'@context': 'https://schema.org',
					'@type': 'BreadcrumbList',
					itemListElement: breadcrumb.map((b, i) => ({
						'@type': 'ListItem',
						position: i + 1,
						name: b.name,
						item: b.url
					}))
				}
			: null;
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(howToSchema)}</script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(webAppSchema)}</script>`}
	{#if breadcrumbSchema}
		{@html `<script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>`}
	{/if}
</svelte:head>

<section class="mt-12 max-w-4xl space-y-10 text-gray-800 dark:text-dark-200">
	<!-- Last updated -->
	<div class="text-xs text-gray-500 dark:text-dark-400">
		{l.updated}: <time datetime={lastUpdated}>{lastUpdated}</time>
	</div>

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

	<!-- External references -->
	{#if content.externalRefs?.length}
		<div>
			<h2 class="text-2xl font-bold mb-3 text-gray-900 dark:text-dark-100">{l.refs}</h2>
			<ul class="list-disc pl-6 space-y-1">
				{#each content.externalRefs as ref}
					<li>
						<a
							href={ref.href}
							target="_blank"
							rel="noopener noreferrer nofollow"
							class="text-primary-400 hover:underline"
						>
							{ref.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}

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
