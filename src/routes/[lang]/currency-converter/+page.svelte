<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let amount = 1000;
	let fromCurrency = 'USD';
	let toCurrency = 'KRW';
	let rates: Record<string, number> = {};
	let loading = true;
	let lastUpdated = '';

	const currencies = [
		{ code: 'USD', name: 'US Dollar', symbol: '$' },
		{ code: 'EUR', name: 'Euro', symbol: '€' },
		{ code: 'GBP', name: 'British Pound', symbol: '£' },
		{ code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
		{ code: 'KRW', name: 'Korean Won', symbol: '₩' },
		{ code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
		{ code: 'CAD', name: 'Canadian Dollar', symbol: '$' },
		{ code: 'AUD', name: 'Australian Dollar', symbol: '$' },
		{ code: 'CHF', name: 'Swiss Franc', symbol: 'Fr' },
		{ code: 'HKD', name: 'Hong Kong Dollar', symbol: '$' },
		{ code: 'SGD', name: 'Singapore Dollar', symbol: '$' },
		{ code: 'INR', name: 'Indian Rupee', symbol: '₹' }
	];

	async function fetchRates() {
		loading = true;
		try {
			// Using frankfurter.app - free, no API key needed
			const res = await fetch(`https://api.frankfurter.app/latest?from=${fromCurrency}`);
			const data = await res.json();
			rates = { [fromCurrency]: 1, ...data.rates };
			lastUpdated = data.date;
		} catch (e) {
			console.error('Failed to fetch rates', e);
			// Fallback rates (approximate)
			rates = {
				USD: 1, EUR: 0.92, GBP: 0.79, JPY: 149.5, KRW: 1320,
				CNY: 7.24, CAD: 1.36, AUD: 1.53, CHF: 0.88, HKD: 7.82,
				SGD: 1.34, INR: 83.1
			};
		}
		loading = false;
	}

	$: convertedAmount = amount * (rates[toCurrency] || 1) / (rates[fromCurrency] || 1);
	$: rate = (rates[toCurrency] || 1) / (rates[fromCurrency] || 1);

	function swapCurrencies() {
		[fromCurrency, toCurrency] = [toCurrency, fromCurrency];
	}

	function formatNumber(num: number, decimals = 2): string {
		if (num >= 1000) {
			return new Intl.NumberFormat().format(Math.round(num * 100) / 100);
		}
		return num.toFixed(decimals);
	}

	onMount(() => {
		fetchRates();
	});

	$: if (fromCurrency) fetchRates();
</script>

<svelte:head>
	<title>{t('currency.title')} - SD.gy</title>
	<meta name="description" content={t('currency.desc')} />
</svelte:head>

<div class="max-w-2xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('currency.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('currency.desc')}</p>
	</div>

	<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
		<!-- Amount Input -->
		<div class="mb-6">
			<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('currency.amount')}</label>
			<input
				type="number"
				bind:value={amount}
				min="0"
				step="0.01"
				class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 text-2xl font-semibold"
			/>
		</div>

		<!-- Currency Selection -->
		<div class="grid grid-cols-[1fr,auto,1fr] gap-3 items-center mb-6">
			<div>
				<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('currency.from')}</label>
				<select
					bind:value={fromCurrency}
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500"
				>
					{#each currencies as curr}
						<option value={curr.code}>{curr.code} - {curr.name}</option>
					{/each}
				</select>
			</div>

			<button
				on:click={swapCurrencies}
				class="mt-6 p-3 rounded-full bg-violet-100 dark:bg-dark-700 text-violet-500 hover:bg-violet-200 dark:hover:bg-dark-600 transition-colors"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
				</svg>
			</button>

			<div>
				<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('currency.to')}</label>
				<select
					bind:value={toCurrency}
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500"
				>
					{#each currencies as curr}
						<option value={curr.code}>{curr.code} - {curr.name}</option>
					{/each}
				</select>
			</div>
		</div>

		<!-- Result -->
		<div class="bg-gray-50 dark:bg-dark-700 rounded-xl p-6">
			{#if loading}
				<div class="text-center text-gray-500 dark:text-dark-400">{t('common.loading')}</div>
			{:else}
				<div class="text-center">
					<p class="text-sm text-gray-600 dark:text-dark-400 mb-2">
						{formatNumber(amount)} {fromCurrency} =
					</p>
					<p class="text-4xl font-bold text-violet-500">
						{formatNumber(convertedAmount)} {toCurrency}
					</p>
					<p class="text-sm text-gray-500 dark:text-dark-400 mt-4">
						1 {fromCurrency} = {formatNumber(rate, 4)} {toCurrency}
					</p>
				</div>
			{/if}
		</div>

		<!-- Last Updated -->
		{#if lastUpdated}
			<p class="text-xs text-gray-400 dark:text-dark-500 text-center mt-4">
				{t('currency.updated')}: {lastUpdated}
			</p>
		{/if}
	</div>

	<!-- Info -->
	<div class="mt-8 bg-blue-50 dark:bg-dark-800 rounded-xl p-6 border border-blue-200 dark:border-dark-700">
		<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-3">{t('currency.info')}</h2>
		<p class="text-sm text-gray-600 dark:text-dark-400">{t('currency.infoText')}</p>
	</div>
</div>
