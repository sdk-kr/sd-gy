<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	const tools = [
		{
			key: 'calculator',
			href: 'calculator',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>`,
			color: 'bg-violet-500/10 text-violet-500 dark:bg-violet-500/20'
		},
		{
			key: 'percentage',
			href: 'percentage',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" /></svg>`,
			color: 'bg-purple-500/10 text-purple-500 dark:bg-purple-500/20'
		},
		{
			key: 'unit-converter',
			href: 'unit-converter',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>`,
			color: 'bg-indigo-500/10 text-indigo-500 dark:bg-indigo-500/20'
		},
		{
			key: 'date-calculator',
			href: 'date-calculator',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`,
			color: 'bg-blue-500/10 text-blue-500 dark:bg-blue-500/20'
		},
		{
			key: 'age-calculator',
			href: 'age-calculator',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" /></svg>`,
			color: 'bg-pink-500/10 text-pink-500 dark:bg-pink-500/20'
		},
		{
			key: 'bmi-calculator',
			href: 'bmi-calculator',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>`,
			color: 'bg-green-500/10 text-green-500 dark:bg-green-500/20'
		},
		{
			key: 'tip-calculator',
			href: 'tip-calculator',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>`,
			color: 'bg-teal-500/10 text-teal-500 dark:bg-teal-500/20'
		},
		{
			key: 'loan-calculator',
			href: 'loan-calculator',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
			color: 'bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20'
		}
	];
</script>

<svelte:head>
	<title>SD.gy - {t('home.title')}</title>
	<meta name="description" content={t('home.subtitle')} />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 py-12">
	<div class="text-center mb-12">
		<h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-dark-100 mb-4">
			{t('home.title')}
		</h1>
		<p class="text-xl text-gray-600 dark:text-dark-400">
			{t('home.subtitle')}
		</p>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
		{#each tools as tool}
			<a
				href="/{lang}/{tool.href}"
				class="group block p-5 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl hover:border-violet-400 dark:hover:border-violet-400 transition-all hover:shadow-lg hover:shadow-violet-500/10"
			>
				<div class="flex items-center gap-3 mb-3">
					<div class="w-10 h-10 rounded-lg {tool.color} flex items-center justify-center">
						{@html tool.icon}
					</div>
					<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 group-hover:text-violet-500 transition-colors">
						{t(`home.${tool.key}.title`)}
					</h2>
				</div>
				<p class="text-sm text-gray-600 dark:text-dark-400">
					{t(`home.${tool.key}.desc`)}
				</p>
			</a>
		{/each}
	</div>

	<!-- Features Section -->
	<div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
		<div class="text-center p-6">
			<div class="w-12 h-12 mx-auto mb-4 rounded-full bg-violet-500/10 flex items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
				</svg>
			</div>
			<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2">
				{lang === 'ko' ? '빠른 계산' : lang === 'ja' ? '高速計算' : lang === 'zh' ? '快速计算' : 'Fast Calculation'}
			</h3>
			<p class="text-sm text-gray-600 dark:text-dark-400">
				{lang === 'ko' ? '브라우저에서 바로 계산되어 빠릅니다' : lang === 'ja' ? 'ブラウザで直接計算するため高速' : lang === 'zh' ? '在浏览器中直接计算，速度快' : 'Calculate instantly in your browser'}
			</p>
		</div>
		<div class="text-center p-6">
			<div class="w-12 h-12 mx-auto mb-4 rounded-full bg-violet-500/10 flex items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
				</svg>
			</div>
			<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2">
				{lang === 'ko' ? '완벽한 프라이버시' : lang === 'ja' ? '完全なプライバシー' : lang === 'zh' ? '完全私密' : 'Complete Privacy'}
			</h3>
			<p class="text-sm text-gray-600 dark:text-dark-400">
				{lang === 'ko' ? '데이터가 서버로 전송되지 않습니다' : lang === 'ja' ? 'データはサーバーに送信されません' : lang === 'zh' ? '数据不会上传到服务器' : 'Your data never leaves your device'}
			</p>
		</div>
		<div class="text-center p-6">
			<div class="w-12 h-12 mx-auto mb-4 rounded-full bg-violet-500/10 flex items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			</div>
			<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2">
				{lang === 'ko' ? '100% 무료' : lang === 'ja' ? '100%無料' : lang === 'zh' ? '100% 免费' : '100% Free'}
			</h3>
			<p class="text-sm text-gray-600 dark:text-dark-400">
				{lang === 'ko' ? '모든 도구를 무료로 사용할 수 있습니다' : lang === 'ja' ? 'すべてのツールが無料で使えます' : lang === 'zh' ? '所有工具完全免费使用' : 'All tools are free with no limits'}
			</p>
		</div>
	</div>
</div>
