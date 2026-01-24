<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let principal = 100000;
	let annualRate = 5;
	let termYears = 30;
	let showSchedule = false;

	$: termMonths = termYears * 12;
	$: monthlyRate = annualRate / 100 / 12;
	$: monthlyPayment = calculateMonthlyPayment(principal, monthlyRate, termMonths);
	$: totalPayment = monthlyPayment * termMonths;
	$: totalInterest = totalPayment - principal;
	$: schedule = generateSchedule(principal, monthlyRate, termMonths, monthlyPayment);

	function calculateMonthlyPayment(p: number, r: number, n: number): number {
		if (r === 0) return p / n;
		return (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
	}

	function generateSchedule(p: number, r: number, n: number, payment: number) {
		const schedule = [];
		let balance = p;

		for (let i = 1; i <= Math.min(n, 360); i++) {
			const interestPart = balance * r;
			const principalPart = payment - interestPart;
			balance = Math.max(0, balance - principalPart);

			schedule.push({
				month: i,
				payment: payment,
				principal: principalPart,
				interest: interestPart,
				balance: balance
			});
		}

		return schedule;
	}

	function formatCurrency(amount: number): string {
		return amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
	}
</script>

<svelte:head>
	<title>{t('loan.title')} - SD.gy</title>
	<meta name="description" content={t('loan.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('loan.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('loan.desc')}</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<!-- Input Section -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<div class="space-y-5">
				<!-- Principal -->
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('loan.principal')} ($)</label>
					<input
						type="number"
						bind:value={principal}
						min="1000"
						step="1000"
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
					<input
						type="range"
						bind:value={principal}
						min="10000"
						max="1000000"
						step="5000"
						class="w-full mt-2 accent-violet-500"
					/>
				</div>

				<!-- Interest Rate -->
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('loan.interestRate')} (%)</label>
					<input
						type="number"
						bind:value={annualRate}
						min="0"
						max="30"
						step="0.1"
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
					<input
						type="range"
						bind:value={annualRate}
						min="0"
						max="20"
						step="0.25"
						class="w-full mt-2 accent-violet-500"
					/>
				</div>

				<!-- Term -->
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('loan.term')} ({t('loan.termYears')})</label>
					<input
						type="number"
						bind:value={termYears}
						min="1"
						max="40"
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
					<input
						type="range"
						bind:value={termYears}
						min="1"
						max="40"
						class="w-full mt-2 accent-violet-500"
					/>
					<div class="text-sm text-gray-500 dark:text-dark-400 mt-1">{termMonths} {t('loan.termMonths')}</div>
				</div>
			</div>
		</div>

		<!-- Results Section -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<div class="space-y-4">
				<div class="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-5">
					<div class="text-sm text-gray-600 dark:text-dark-400">{t('loan.monthlyPayment')}</div>
					<div class="text-4xl font-bold text-violet-600 dark:text-violet-400">${formatCurrency(monthlyPayment)}</div>
				</div>

				<div class="grid grid-cols-2 gap-4">
					<div class="bg-gray-50 dark:bg-dark-700 rounded-xl p-4">
						<div class="text-sm text-gray-600 dark:text-dark-400">{t('loan.totalPayment')}</div>
						<div class="text-xl font-bold text-gray-900 dark:text-dark-100">${formatCurrency(totalPayment)}</div>
					</div>
					<div class="bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
						<div class="text-sm text-gray-600 dark:text-dark-400">{t('loan.totalInterest')}</div>
						<div class="text-xl font-bold text-red-600 dark:text-red-400">${formatCurrency(totalInterest)}</div>
					</div>
				</div>

				<!-- Payment Breakdown Chart -->
				<div class="bg-gray-50 dark:bg-dark-700 rounded-xl p-4">
					<div class="flex h-4 rounded-full overflow-hidden">
						<div
							class="bg-violet-500"
							style="width: {(principal / totalPayment) * 100}%"
						></div>
						<div
							class="bg-red-400"
							style="width: {(totalInterest / totalPayment) * 100}%"
						></div>
					</div>
					<div class="flex justify-between text-xs mt-2">
						<span class="text-violet-600 dark:text-violet-400">{t('loan.principalPart')}: {((principal / totalPayment) * 100).toFixed(1)}%</span>
						<span class="text-red-600 dark:text-red-400">{t('loan.interestPart')}: {((totalInterest / totalPayment) * 100).toFixed(1)}%</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Amortization Schedule -->
	<div class="mt-6 bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
		<button
			on:click={() => showSchedule = !showSchedule}
			class="w-full flex items-center justify-between text-lg font-semibold text-gray-900 dark:text-dark-100"
		>
			<span>{t('loan.schedule')}</span>
			<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 transition-transform {showSchedule ? 'rotate-180' : ''}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
			</svg>
		</button>

		{#if showSchedule}
			<div class="mt-4 overflow-x-auto">
				<table class="w-full text-sm">
					<thead>
						<tr class="border-b border-gray-200 dark:border-dark-600">
							<th class="py-2 px-3 text-left text-gray-600 dark:text-dark-400">{t('loan.month')}</th>
							<th class="py-2 px-3 text-right text-gray-600 dark:text-dark-400">{t('loan.payment')}</th>
							<th class="py-2 px-3 text-right text-gray-600 dark:text-dark-400">{t('loan.principalPart')}</th>
							<th class="py-2 px-3 text-right text-gray-600 dark:text-dark-400">{t('loan.interestPart')}</th>
							<th class="py-2 px-3 text-right text-gray-600 dark:text-dark-400">{t('loan.balance')}</th>
						</tr>
					</thead>
					<tbody>
						{#each schedule.slice(0, 24) as row}
							<tr class="border-b border-gray-100 dark:border-dark-700">
								<td class="py-2 px-3 text-gray-900 dark:text-dark-100">{row.month}</td>
								<td class="py-2 px-3 text-right text-gray-900 dark:text-dark-100">${formatCurrency(row.payment)}</td>
								<td class="py-2 px-3 text-right text-violet-600 dark:text-violet-400">${formatCurrency(row.principal)}</td>
								<td class="py-2 px-3 text-right text-red-600 dark:text-red-400">${formatCurrency(row.interest)}</td>
								<td class="py-2 px-3 text-right text-gray-900 dark:text-dark-100">${formatCurrency(row.balance)}</td>
							</tr>
						{/each}
					</tbody>
				</table>
				{#if schedule.length > 24}
					<div class="text-center text-sm text-gray-500 dark:text-dark-400 mt-4">
						... {schedule.length - 24} more months
					</div>
				{/if}
			</div>
		{/if}
	</div>
</div>
