<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let billAmount = 50;
	let tipPercent = 15;
	let customTip = false;
	let numPeople = 2;

	const presetTips = [10, 15, 18, 20, 25];

	$: tipAmount = (billAmount * tipPercent) / 100;
	$: totalAmount = billAmount + tipAmount;
	$: perPersonTip = numPeople > 0 ? tipAmount / numPeople : 0;
	$: perPersonTotal = numPeople > 0 ? totalAmount / numPeople : 0;

	function selectTip(percent: number) {
		tipPercent = percent;
		customTip = false;
	}

	function formatCurrency(amount: number): string {
		return amount.toFixed(2);
	}
</script>

<svelte:head>
	<title>{t('tip.title')} - SD.gy</title>
	<meta name="description" content={t('tip.desc')} />
</svelte:head>

<div class="max-w-2xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('tip.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('tip.desc')}</p>
	</div>

	<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
		<!-- Bill Amount -->
		<div class="mb-6">
			<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('tip.billAmount')}</label>
			<div class="relative">
				<span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-dark-400 text-lg">$</span>
				<input
					type="number"
					bind:value={billAmount}
					min="0"
					step="0.01"
					class="w-full pl-8 pr-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent text-xl"
				/>
			</div>
		</div>

		<!-- Tip Percentage -->
		<div class="mb-6">
			<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('tip.tipPercent')}</label>
			<div class="grid grid-cols-6 gap-2">
				{#each presetTips as preset}
					<button
						on:click={() => selectTip(preset)}
						class="py-3 rounded-xl font-semibold transition-colors {tipPercent === preset && !customTip ? 'bg-violet-500 text-white' : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
					>
						{preset}%
					</button>
				{/each}
				<button
					on:click={() => customTip = true}
					class="py-3 rounded-xl font-semibold transition-colors {customTip ? 'bg-violet-500 text-white' : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
				>
					{t('tip.custom')}
				</button>
			</div>
			{#if customTip}
				<div class="mt-3 flex items-center gap-2">
					<input
						type="number"
						bind:value={tipPercent}
						min="0"
						max="100"
						class="w-24 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
					<span class="text-gray-600 dark:text-dark-400">%</span>
				</div>
			{/if}
		</div>

		<!-- Number of People -->
		<div class="mb-6">
			<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('tip.people')}</label>
			<div class="flex items-center gap-4">
				<button
					on:click={() => numPeople = Math.max(1, numPeople - 1)}
					class="w-12 h-12 rounded-xl bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600 text-xl font-bold"
				>
					-
				</button>
				<input
					type="number"
					bind:value={numPeople}
					min="1"
					class="w-20 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-center text-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
				/>
				<button
					on:click={() => numPeople++}
					class="w-12 h-12 rounded-xl bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600 text-xl font-bold"
				>
					+
				</button>
			</div>
		</div>

		<!-- Results -->
		<div class="space-y-4">
			<div class="grid grid-cols-2 gap-4">
				<div class="bg-gray-50 dark:bg-dark-700 rounded-xl p-4">
					<div class="text-sm text-gray-600 dark:text-dark-400">{t('tip.tipAmount')}</div>
					<div class="text-2xl font-bold text-gray-900 dark:text-dark-100">${formatCurrency(tipAmount)}</div>
				</div>
				<div class="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-4">
					<div class="text-sm text-gray-600 dark:text-dark-400">{t('tip.total')}</div>
					<div class="text-2xl font-bold text-violet-600 dark:text-violet-400">${formatCurrency(totalAmount)}</div>
				</div>
			</div>

			{#if numPeople > 1}
				<div class="border-t border-gray-200 dark:border-dark-600 pt-4">
					<div class="text-sm text-gray-600 dark:text-dark-400 mb-3">{t('tip.perPerson')} ({numPeople})</div>
					<div class="grid grid-cols-2 gap-4">
						<div class="bg-gray-50 dark:bg-dark-700 rounded-xl p-4">
							<div class="text-sm text-gray-600 dark:text-dark-400">{t('tip.tipAmount')}</div>
							<div class="text-xl font-bold text-gray-900 dark:text-dark-100">${formatCurrency(perPersonTip)}</div>
						</div>
						<div class="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-4">
							<div class="text-sm text-gray-600 dark:text-dark-400">{t('tip.total')}</div>
							<div class="text-xl font-bold text-teal-600 dark:text-teal-400">${formatCurrency(perPersonTotal)}</div>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
