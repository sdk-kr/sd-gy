<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	// D-Day Calculator
	let targetDate = new Date().toISOString().split('T')[0];
	$: daysUntilTarget = Math.ceil((new Date(targetDate).getTime() - new Date().setHours(0,0,0,0)) / (1000 * 60 * 60 * 24));

	// Date Difference
	let startDate = new Date().toISOString().split('T')[0];
	let endDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
	$: dateDiff = calculateDateDiff(startDate, endDate);

	function calculateDateDiff(start: string, end: string) {
		const startD = new Date(start);
		const endD = new Date(end);
		const diffTime = Math.abs(endD.getTime() - startD.getTime());
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		return {
			days: diffDays,
			weeks: Math.floor(diffDays / 7),
			months: Math.floor(diffDays / 30),
			years: Math.floor(diffDays / 365)
		};
	}

	// Add/Subtract Days
	let baseDate = new Date().toISOString().split('T')[0];
	let daysToAdd = 30;
	$: resultDate = new Date(new Date(baseDate).getTime() + daysToAdd * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

	function formatDate(dateStr: string): string {
		const date = new Date(dateStr);
		const options: Intl.DateTimeFormatOptions = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			weekday: 'long'
		};
		const locale = lang === 'ko' ? 'ko-KR' : lang === 'ja' ? 'ja-JP' : lang === 'zh' ? 'zh-CN' : 'en-US';
		return date.toLocaleDateString(locale, options);
	}
</script>

<svelte:head>
	<title>{t('date.title')} - SD.gy</title>
	<meta name="description" content={t('date.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('date.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('date.desc')}</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<!-- D-Day Calculator -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">{t('date.dday')}</h2>
			<div class="space-y-4">
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('date.targetDate')}</label>
					<input
						type="date"
						bind:value={targetDate}
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>
				<div class="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-6 text-center">
					{#if daysUntilTarget === 0}
						<div class="text-4xl font-bold text-violet-600 dark:text-violet-400">D-Day</div>
						<div class="text-gray-600 dark:text-dark-400 mt-2">{t('date.today')}</div>
					{:else if daysUntilTarget > 0}
						<div class="text-4xl font-bold text-violet-600 dark:text-violet-400">D-{daysUntilTarget}</div>
						<div class="text-gray-600 dark:text-dark-400 mt-2">{daysUntilTarget} {t('date.daysLeft')}</div>
					{:else}
						<div class="text-4xl font-bold text-gray-500 dark:text-dark-400">D+{Math.abs(daysUntilTarget)}</div>
						<div class="text-gray-600 dark:text-dark-400 mt-2">{Math.abs(daysUntilTarget)} {t('date.daysAgo')}</div>
					{/if}
				</div>
				<div class="text-center text-sm text-gray-500 dark:text-dark-400">
					{formatDate(targetDate)}
				</div>
			</div>
		</div>

		<!-- Date Difference -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">{t('date.difference')}</h2>
			<div class="space-y-4">
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('date.startDate')}</label>
					<input
						type="date"
						bind:value={startDate}
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('date.endDate')}</label>
					<input
						type="date"
						bind:value={endDate}
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>
				<div class="grid grid-cols-2 gap-3">
					<div class="bg-gray-50 dark:bg-dark-700 rounded-lg p-3 text-center">
						<div class="text-2xl font-bold text-gray-900 dark:text-dark-100">{dateDiff.days}</div>
						<div class="text-sm text-gray-500 dark:text-dark-400">{t('date.days')}</div>
					</div>
					<div class="bg-gray-50 dark:bg-dark-700 rounded-lg p-3 text-center">
						<div class="text-2xl font-bold text-gray-900 dark:text-dark-100">{dateDiff.weeks}</div>
						<div class="text-sm text-gray-500 dark:text-dark-400">{t('date.weeks')}</div>
					</div>
					<div class="bg-gray-50 dark:bg-dark-700 rounded-lg p-3 text-center">
						<div class="text-2xl font-bold text-gray-900 dark:text-dark-100">{dateDiff.months}</div>
						<div class="text-sm text-gray-500 dark:text-dark-400">{t('date.months')}</div>
					</div>
					<div class="bg-gray-50 dark:bg-dark-700 rounded-lg p-3 text-center">
						<div class="text-2xl font-bold text-gray-900 dark:text-dark-100">{dateDiff.years}</div>
						<div class="text-sm text-gray-500 dark:text-dark-400">{t('date.years')}</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Add/Subtract Days -->
		<div class="md:col-span-2 bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">{t('date.addSubtract')}</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('date.baseDate')}</label>
					<input
						type="date"
						bind:value={baseDate}
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('date.daysToAdd')}</label>
					<input
						type="number"
						bind:value={daysToAdd}
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('date.resultDate')}</label>
					<div class="px-4 py-3 bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl text-violet-600 dark:text-violet-400 font-semibold">
						{formatDate(resultDate)}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
