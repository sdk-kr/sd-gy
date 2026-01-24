<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	// What is X% of Y
	let percent1 = 0;
	let value1 = 0;
	$: result1 = (percent1 / 100) * value1;

	// X is what % of Y
	let partValue = 0;
	let wholeValue = 0;
	$: result2 = wholeValue !== 0 ? (partValue / wholeValue) * 100 : 0;

	// Percentage change from X to Y
	let fromValue = 0;
	let toValue = 0;
	$: percentChange = fromValue !== 0 ? ((toValue - fromValue) / fromValue) * 100 : 0;
	$: isIncrease = percentChange >= 0;

	// Discount calculator
	let originalPrice = 0;
	let discountRate = 0;
	$: discountAmount = (originalPrice * discountRate) / 100;
	$: finalPrice = originalPrice - discountAmount;

	function formatNumber(num: number): string {
		return Number.isInteger(num) ? num.toString() : num.toFixed(2);
	}
</script>

<svelte:head>
	<title>{t('percentage.title')} - SD.gy</title>
	<meta name="description" content={t('percentage.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('percentage.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('percentage.desc')}</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<!-- What is X% of Y -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">
				{t('percentage.whatIs')} X% {t('percentage.of')} Y
			</h2>
			<div class="space-y-4">
				<div class="flex items-center gap-2">
					<input
						type="number"
						bind:value={percent1}
						class="w-24 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
					<span class="text-gray-600 dark:text-dark-400">%</span>
					<span class="text-gray-600 dark:text-dark-400">{t('percentage.of')}</span>
					<input
						type="number"
						bind:value={value1}
						class="flex-1 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>
				<div class="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4">
					<span class="text-sm text-gray-600 dark:text-dark-400">{t('percentage.result')}</span>
					<div class="text-2xl font-bold text-violet-600 dark:text-violet-400">{formatNumber(result1)}</div>
				</div>
			</div>
		</div>

		<!-- X is what % of Y -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">
				X {t('percentage.isWhatPercent')} Y
			</h2>
			<div class="space-y-4">
				<div class="flex items-center gap-2">
					<input
						type="number"
						bind:value={partValue}
						class="flex-1 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
					<span class="text-gray-600 dark:text-dark-400">{t('percentage.isWhatPercent')}</span>
					<input
						type="number"
						bind:value={wholeValue}
						class="flex-1 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>
				<div class="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4">
					<span class="text-sm text-gray-600 dark:text-dark-400">{t('percentage.result')}</span>
					<div class="text-2xl font-bold text-violet-600 dark:text-violet-400">{formatNumber(result2)}%</div>
				</div>
			</div>
		</div>

		<!-- Percentage Change -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">
				{t('percentage.change')} X {t('percentage.to')} Y
			</h2>
			<div class="space-y-4">
				<div class="flex items-center gap-2">
					<input
						type="number"
						bind:value={fromValue}
						class="flex-1 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
						placeholder="From"
					/>
					<span class="text-gray-600 dark:text-dark-400">{t('percentage.to')}</span>
					<input
						type="number"
						bind:value={toValue}
						class="flex-1 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
						placeholder="To"
					/>
				</div>
				<div class="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4">
					<span class="text-sm text-gray-600 dark:text-dark-400">{t('percentage.result')}</span>
					<div class="text-2xl font-bold {isIncrease ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}">
						{isIncrease ? '+' : ''}{formatNumber(percentChange)}%
						<span class="text-sm font-normal">({isIncrease ? t('percentage.increase') : t('percentage.decrease')})</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Discount Calculator -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">{t('percentage.discount')}</h2>
			<div class="space-y-4">
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-1">{t('percentage.originalPrice')}</label>
					<input
						type="number"
						bind:value={originalPrice}
						class="w-full px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-1">{t('percentage.discountRate')} (%)</label>
					<input
						type="number"
						bind:value={discountRate}
						class="w-full px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>
				<div class="grid grid-cols-2 gap-3">
					<div class="bg-red-50 dark:bg-red-900/20 rounded-lg p-3">
						<span class="text-sm text-gray-600 dark:text-dark-400">{t('percentage.savings')}</span>
						<div class="text-xl font-bold text-red-600 dark:text-red-400">-{formatNumber(discountAmount)}</div>
					</div>
					<div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
						<span class="text-sm text-gray-600 dark:text-dark-400">{t('percentage.finalPrice')}</span>
						<div class="text-xl font-bold text-green-600 dark:text-green-400">{formatNumber(finalPrice)}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
