<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let principal = 10000;
	let rate = 5;
	let years = 10;
	let compoundFrequency = 12; // monthly

	$: futureValue = principal * Math.pow(1 + rate / 100 / compoundFrequency, compoundFrequency * years);
	$: totalInterest = futureValue - principal;

	const frequencies = [
		{ value: 1, label: 'compound.annually' },
		{ value: 2, label: 'compound.semiannually' },
		{ value: 4, label: 'compound.quarterly' },
		{ value: 12, label: 'compound.monthly' },
		{ value: 365, label: 'compound.daily' }
	];

	function formatCurrency(value: number): string {
		return new Intl.NumberFormat(lang === 'ko' ? 'ko-KR' : lang === 'ja' ? 'ja-JP' : lang === 'zh' ? 'zh-CN' : 'en-US', {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		}).format(value);
	}
</script>

<svelte:head>
	<title>{t('compound.title')} - SD.gy</title>
	<meta name="description" content={t('compound.desc')} />
</svelte:head>

<div class="max-w-2xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('compound.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('compound.desc')}</p>
	</div>

	<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
		<!-- Input Fields -->
		<div class="space-y-4 mb-6">
			<div>
				<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('compound.principal')}</label>
				<input
					type="number"
					bind:value={principal}
					min="0"
					step="100"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent text-lg"
				/>
			</div>

			<div>
				<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('compound.rate')} (%)</label>
				<input
					type="number"
					bind:value={rate}
					min="0"
					max="100"
					step="0.1"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent text-lg"
				/>
				<input
					type="range"
					bind:value={rate}
					min="0"
					max="20"
					step="0.5"
					class="w-full mt-2 accent-violet-500"
				/>
			</div>

			<div>
				<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('compound.years')}</label>
				<input
					type="number"
					bind:value={years}
					min="1"
					max="50"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent text-lg"
				/>
				<input
					type="range"
					bind:value={years}
					min="1"
					max="50"
					class="w-full mt-2 accent-violet-500"
				/>
			</div>

			<div>
				<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('compound.frequency')}</label>
				<select
					bind:value={compoundFrequency}
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent text-lg"
				>
					{#each frequencies as freq}
						<option value={freq.value}>{t(freq.label)}</option>
					{/each}
				</select>
			</div>
		</div>

		<!-- Results -->
		<div class="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 space-y-4">
			<div class="flex justify-between items-center">
				<span class="text-gray-600 dark:text-dark-400">{t('compound.futureValue')}</span>
				<span class="text-2xl font-bold text-violet-500">${formatCurrency(futureValue)}</span>
			</div>
			<div class="flex justify-between items-center">
				<span class="text-gray-600 dark:text-dark-400">{t('compound.totalInterest')}</span>
				<span class="text-xl font-semibold text-green-500">+${formatCurrency(totalInterest)}</span>
			</div>
			<div class="flex justify-between items-center">
				<span class="text-gray-600 dark:text-dark-400">{t('compound.principal')}</span>
				<span class="text-lg text-gray-700 dark:text-dark-300">${formatCurrency(principal)}</span>
			</div>
		</div>

		<!-- Visual Bar -->
		<div class="mt-6">
			<div class="h-8 rounded-full overflow-hidden flex">
				<div
					class="bg-gray-400 dark:bg-dark-500 transition-all"
					style="width: {(principal / futureValue) * 100}%"
				></div>
				<div
					class="bg-green-400 transition-all"
					style="width: {(totalInterest / futureValue) * 100}%"
				></div>
			</div>
			<div class="flex justify-between text-xs text-gray-500 dark:text-dark-400 mt-2">
				<span>{t('compound.principal')}: {((principal / futureValue) * 100).toFixed(1)}%</span>
				<span>{t('compound.interest')}: {((totalInterest / futureValue) * 100).toFixed(1)}%</span>
			</div>
		</div>
	</div>

	<!-- Info Section -->
	<div class="mt-8 bg-blue-50 dark:bg-dark-800 rounded-xl p-6 border border-blue-200 dark:border-dark-700">
		<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-3">{t('compound.formula')}</h2>
		<p class="text-gray-700 dark:text-dark-300 font-mono text-sm bg-white dark:bg-dark-700 p-3 rounded-lg">
			A = P(1 + r/n)^(nt)
		</p>
		<ul class="mt-3 text-sm text-gray-600 dark:text-dark-400 space-y-1">
			<li><strong>A</strong> = {t('compound.futureValue')}</li>
			<li><strong>P</strong> = {t('compound.principal')}</li>
			<li><strong>r</strong> = {t('compound.rate')}</li>
			<li><strong>n</strong> = {t('compound.frequency')}</li>
			<li><strong>t</strong> = {t('compound.years')}</li>
		</ul>
	</div>
</div>
