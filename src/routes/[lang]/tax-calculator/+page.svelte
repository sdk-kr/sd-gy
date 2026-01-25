<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let income = 50000;
	let country = 'us';

	// Simplified tax brackets (2024)
	const taxBrackets: Record<string, { brackets: { min: number; max: number; rate: number }[]; currency: string }> = {
		us: {
			currency: 'USD',
			brackets: [
				{ min: 0, max: 11600, rate: 10 },
				{ min: 11600, max: 47150, rate: 12 },
				{ min: 47150, max: 100525, rate: 22 },
				{ min: 100525, max: 191950, rate: 24 },
				{ min: 191950, max: 243725, rate: 32 },
				{ min: 243725, max: 609350, rate: 35 },
				{ min: 609350, max: Infinity, rate: 37 }
			]
		},
		kr: {
			currency: 'KRW',
			brackets: [
				{ min: 0, max: 14000000, rate: 6 },
				{ min: 14000000, max: 50000000, rate: 15 },
				{ min: 50000000, max: 88000000, rate: 24 },
				{ min: 88000000, max: 150000000, rate: 35 },
				{ min: 150000000, max: 300000000, rate: 38 },
				{ min: 300000000, max: 500000000, rate: 40 },
				{ min: 500000000, max: 1000000000, rate: 42 },
				{ min: 1000000000, max: Infinity, rate: 45 }
			]
		},
		jp: {
			currency: 'JPY',
			brackets: [
				{ min: 0, max: 1950000, rate: 5 },
				{ min: 1950000, max: 3300000, rate: 10 },
				{ min: 3300000, max: 6950000, rate: 20 },
				{ min: 6950000, max: 9000000, rate: 23 },
				{ min: 9000000, max: 18000000, rate: 33 },
				{ min: 18000000, max: 40000000, rate: 40 },
				{ min: 40000000, max: Infinity, rate: 45 }
			]
		}
	};

	const countries = [
		{ code: 'us', name: 'United States' },
		{ code: 'kr', name: 'South Korea' },
		{ code: 'jp', name: 'Japan' }
	];

	function calculateTax(income: number, countryCode: string) {
		const { brackets } = taxBrackets[countryCode] || taxBrackets.us;
		let tax = 0;
		let remaining = income;

		for (const bracket of brackets) {
			if (remaining <= 0) break;
			const taxable = Math.min(remaining, bracket.max - bracket.min);
			tax += taxable * (bracket.rate / 100);
			remaining -= taxable;
		}

		return tax;
	}

	$: tax = calculateTax(income, country);
	$: effectiveRate = income > 0 ? (tax / income) * 100 : 0;
	$: afterTax = income - tax;
	$: currency = taxBrackets[country]?.currency || 'USD';

	function formatCurrency(value: number): string {
		return new Intl.NumberFormat(lang === 'ko' ? 'ko-KR' : lang === 'ja' ? 'ja-JP' : 'en-US', {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		}).format(value);
	}

	$: currentBrackets = taxBrackets[country]?.brackets || taxBrackets.us.brackets;
</script>

<svelte:head>
	<title>{t('tax.title')} - SD.gy</title>
	<meta name="description" content={t('tax.desc')} />
</svelte:head>

<div class="max-w-2xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('tax.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('tax.desc')}</p>
	</div>

	<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
		<!-- Country Selection -->
		<div class="mb-6">
			<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('tax.country')}</label>
			<select
				bind:value={country}
				class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 text-lg"
			>
				{#each countries as c}
					<option value={c.code}>{c.name}</option>
				{/each}
			</select>
		</div>

		<!-- Income Input -->
		<div class="mb-6">
			<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('tax.income')} ({currency})</label>
			<input
				type="number"
				bind:value={income}
				min="0"
				step="1000"
				class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 text-2xl font-semibold"
			/>
		</div>

		<!-- Results -->
		<div class="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 space-y-4">
			<div class="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-dark-600">
				<span class="text-gray-600 dark:text-dark-400">{t('tax.income')}</span>
				<span class="text-xl font-semibold text-gray-900 dark:text-dark-100">{formatCurrency(income)} {currency}</span>
			</div>
			<div class="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-dark-600">
				<span class="text-gray-600 dark:text-dark-400">{t('tax.estimated')}</span>
				<span class="text-xl font-semibold text-red-500">-{formatCurrency(tax)} {currency}</span>
			</div>
			<div class="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-dark-600">
				<span class="text-gray-600 dark:text-dark-400">{t('tax.effectiveRate')}</span>
				<span class="text-xl font-semibold text-orange-500">{effectiveRate.toFixed(1)}%</span>
			</div>
			<div class="flex justify-between items-center">
				<span class="text-gray-600 dark:text-dark-400">{t('tax.afterTax')}</span>
				<span class="text-2xl font-bold text-green-500">{formatCurrency(afterTax)} {currency}</span>
			</div>
		</div>

		<!-- Tax Brackets -->
		<div class="mt-6">
			<h3 class="text-sm font-semibold text-gray-700 dark:text-dark-300 mb-3">{t('tax.brackets')}</h3>
			<div class="space-y-2">
				{#each currentBrackets.slice(0, -1) as bracket, i}
					<div class="flex justify-between text-sm">
						<span class="text-gray-600 dark:text-dark-400">
							{formatCurrency(bracket.min)} - {formatCurrency(bracket.max)} {currency}
						</span>
						<span class="font-medium text-gray-900 dark:text-dark-100">{bracket.rate}%</span>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Disclaimer -->
	<div class="mt-8 bg-yellow-50 dark:bg-dark-800 rounded-xl p-6 border border-yellow-200 dark:border-dark-700">
		<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-3">{t('tax.disclaimer')}</h2>
		<p class="text-sm text-gray-600 dark:text-dark-400">{t('tax.disclaimerText')}</p>
	</div>
</div>
