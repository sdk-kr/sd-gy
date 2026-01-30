<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let monthlySalary = 3000000;
	let nonTaxableAmount = 200000;
	let dependents = 1;
	let childrenUnder20 = 0;

	// 2026 Korean social insurance rates (employee portion)
	const NATIONAL_PENSION_RATE = 0.045;
	const NATIONAL_PENSION_MONTHLY_CAP = 5900000;
	const HEALTH_INSURANCE_RATE = 0.03545;
	const LONG_TERM_CARE_RATE = 0.1295; // of health insurance
	const EMPLOYMENT_INSURANCE_RATE = 0.009;

	$: taxableIncome = Math.max(0, monthlySalary - nonTaxableAmount);

	// National Pension (capped)
	$: nationalPension = Math.round(Math.min(taxableIncome, NATIONAL_PENSION_MONTHLY_CAP) * NATIONAL_PENSION_RATE);

	// Health Insurance
	$: healthInsurance = Math.round(taxableIncome * HEALTH_INSURANCE_RATE);

	// Long-term Care Insurance
	$: longTermCare = Math.round(healthInsurance * LONG_TERM_CARE_RATE);

	// Employment Insurance
	$: employmentInsurance = Math.round(taxableIncome * EMPLOYMENT_INSURANCE_RATE);

	// Income Tax calculation (simplified bracket method)
	$: incomeTax = calculateIncomeTax(taxableIncome, dependents, childrenUnder20);

	// Local Income Tax (10% of income tax)
	$: localIncomeTax = Math.round(incomeTax * 0.1);

	// Totals
	$: totalDeductions = nationalPension + healthInsurance + longTermCare + employmentInsurance + incomeTax + localIncomeTax;
	$: netSalary = monthlySalary - totalDeductions;

	// Ratio for chart
	$: netRatio = monthlySalary > 0 ? (netSalary / monthlySalary) * 100 : 100;
	$: deductionRatio = monthlySalary > 0 ? (totalDeductions / monthlySalary) * 100 : 0;

	function calculateIncomeTax(monthlyTaxable: number, deps: number, children: number): number {
		if (monthlyTaxable <= 0) return 0;

		// Annual gross salary
		const annualGross = monthlyTaxable * 12;

		// 근로소득공제 (Earned Income Deduction)
		let earnedIncomeDeduction = 0;
		if (annualGross <= 5000000) {
			earnedIncomeDeduction = annualGross * 0.7;
		} else if (annualGross <= 15000000) {
			earnedIncomeDeduction = 3500000 + (annualGross - 5000000) * 0.4;
		} else if (annualGross <= 45000000) {
			earnedIncomeDeduction = 7500000 + (annualGross - 15000000) * 0.15;
		} else if (annualGross <= 100000000) {
			earnedIncomeDeduction = 12000000 + (annualGross - 45000000) * 0.05;
		} else {
			earnedIncomeDeduction = 14750000 + (annualGross - 100000000) * 0.02;
		}

		const earnedIncome = annualGross - earnedIncomeDeduction;

		// 인적공제 (Personal Exemption): 1인당 150만원
		const personalExemption = deps * 1500000;

		// 국민연금 공제
		const annualPension = nationalPension * 12;

		// 과세표준
		const taxBase = Math.max(0, earnedIncome - personalExemption - annualPension);

		// 산출세액 (Tax brackets)
		let calculatedTax = 0;
		if (taxBase <= 14000000) {
			calculatedTax = taxBase * 0.06;
		} else if (taxBase <= 50000000) {
			calculatedTax = 840000 + (taxBase - 14000000) * 0.15;
		} else if (taxBase <= 88000000) {
			calculatedTax = 6240000 + (taxBase - 50000000) * 0.24;
		} else if (taxBase <= 150000000) {
			calculatedTax = 15360000 + (taxBase - 88000000) * 0.35;
		} else if (taxBase <= 300000000) {
			calculatedTax = 37060000 + (taxBase - 150000000) * 0.38;
		} else if (taxBase <= 500000000) {
			calculatedTax = 94060000 + (taxBase - 300000000) * 0.40;
		} else if (taxBase <= 1000000000) {
			calculatedTax = 174060000 + (taxBase - 500000000) * 0.42;
		} else {
			calculatedTax = 384060000 + (taxBase - 1000000000) * 0.45;
		}

		// 근로소득세액공제 (Earned Income Tax Credit)
		let taxCredit = 0;
		if (calculatedTax <= 1300000) {
			taxCredit = calculatedTax * 0.55;
		} else {
			taxCredit = 715000 + (calculatedTax - 1300000) * 0.30;
		}
		// Cap
		if (annualGross <= 33000000) {
			taxCredit = Math.min(taxCredit, 740000);
		} else if (annualGross <= 70000000) {
			taxCredit = Math.min(taxCredit, 660000);
		} else {
			taxCredit = Math.min(taxCredit, 500000);
		}

		// 자녀세액공제 (Child Tax Credit)
		let childCredit = 0;
		if (children === 1) childCredit = 150000;
		else if (children === 2) childCredit = 350000;
		else if (children >= 3) childCredit = 350000 + (children - 2) * 300000;

		const annualTax = Math.max(0, calculatedTax - taxCredit - childCredit);
		return Math.round(annualTax / 12);
	}

	function formatKRW(amount: number): string {
		return amount.toLocaleString('ko-KR');
	}

	// SEO structured data
	$: jsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		name: t('salary.title'),
		description: t('salary.seoDesc'),
		url: `https://sd.gy/${lang}/salary-calculator`,
		applicationCategory: 'FinanceApplication',
		operatingSystem: 'Any',
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'USD'
		}
	});
</script>

<svelte:head>
	<title>{t('salary.title')} - SD.gy</title>
	<meta name="description" content={t('salary.seoDesc')} />
	<meta name="keywords" content={t('salary.seoKeywords')} />
	<link rel="canonical" href="https://sd.gy/{lang}/salary-calculator" />
	<meta property="og:title" content="{t('salary.title')} - SD.gy" />
	<meta property="og:description" content={t('salary.seoDesc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/salary-calculator" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('salary.title')} - SD.gy" />
	<meta name="twitter:description" content={t('salary.seoDesc')} />
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('salary.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('salary.desc')}</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<!-- Input Section -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<div class="space-y-5">
				<!-- Monthly Salary -->
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('salary.monthlySalary')} ({t('salary.currency')})</label>
					<input
						type="number"
						bind:value={monthlySalary}
						min="0"
						step="100000"
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
					<input
						type="range"
						bind:value={monthlySalary}
						min="1000000"
						max="20000000"
						step="100000"
						class="w-full mt-2 accent-violet-500"
					/>
					<div class="text-sm text-gray-500 dark:text-dark-400 mt-1">{formatKRW(monthlySalary)}{t('salary.currency')}</div>
				</div>

				<!-- Non-taxable Amount -->
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('salary.nonTaxable')} ({t('salary.currency')})</label>
					<input
						type="number"
						bind:value={nonTaxableAmount}
						min="0"
						step="10000"
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
					<input
						type="range"
						bind:value={nonTaxableAmount}
						min="0"
						max="500000"
						step="10000"
						class="w-full mt-2 accent-violet-500"
					/>
				</div>

				<!-- Dependents -->
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('salary.dependents')}</label>
					<input
						type="number"
						bind:value={dependents}
						min="1"
						max="20"
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>

				<!-- Children under 20 -->
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('salary.children')}</label>
					<input
						type="number"
						bind:value={childrenUnder20}
						min="0"
						max="20"
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>
			</div>
		</div>

		<!-- Results Section -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<div class="space-y-4">
				<!-- Net Salary Highlight -->
				<div class="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-5">
					<div class="text-sm text-gray-600 dark:text-dark-400">{t('salary.netSalary')}</div>
					<div class="text-4xl font-bold text-violet-600 dark:text-violet-400">{formatKRW(netSalary)}<span class="text-lg ml-1">{t('salary.currency')}</span></div>
				</div>

				<!-- Deduction Breakdown -->
				<div class="space-y-2">
					<div class="flex justify-between text-sm py-1.5 border-b border-gray-100 dark:border-dark-700">
						<span class="text-gray-600 dark:text-dark-400">{t('salary.nationalPension')}</span>
						<span class="text-gray-900 dark:text-dark-100 font-medium">{formatKRW(nationalPension)}{t('salary.currency')}</span>
					</div>
					<div class="flex justify-between text-sm py-1.5 border-b border-gray-100 dark:border-dark-700">
						<span class="text-gray-600 dark:text-dark-400">{t('salary.healthInsurance')}</span>
						<span class="text-gray-900 dark:text-dark-100 font-medium">{formatKRW(healthInsurance)}{t('salary.currency')}</span>
					</div>
					<div class="flex justify-between text-sm py-1.5 border-b border-gray-100 dark:border-dark-700">
						<span class="text-gray-600 dark:text-dark-400">{t('salary.longTermCare')}</span>
						<span class="text-gray-900 dark:text-dark-100 font-medium">{formatKRW(longTermCare)}{t('salary.currency')}</span>
					</div>
					<div class="flex justify-between text-sm py-1.5 border-b border-gray-100 dark:border-dark-700">
						<span class="text-gray-600 dark:text-dark-400">{t('salary.employmentInsurance')}</span>
						<span class="text-gray-900 dark:text-dark-100 font-medium">{formatKRW(employmentInsurance)}{t('salary.currency')}</span>
					</div>
					<div class="flex justify-between text-sm py-1.5 border-b border-gray-100 dark:border-dark-700">
						<span class="text-gray-600 dark:text-dark-400">{t('salary.incomeTax')}</span>
						<span class="text-gray-900 dark:text-dark-100 font-medium">{formatKRW(incomeTax)}{t('salary.currency')}</span>
					</div>
					<div class="flex justify-between text-sm py-1.5 border-b border-gray-100 dark:border-dark-700">
						<span class="text-gray-600 dark:text-dark-400">{t('salary.localIncomeTax')}</span>
						<span class="text-gray-900 dark:text-dark-100 font-medium">{formatKRW(localIncomeTax)}{t('salary.currency')}</span>
					</div>
					<div class="flex justify-between text-sm py-2 font-bold">
						<span class="text-red-600 dark:text-red-400">{t('salary.totalDeductions')}</span>
						<span class="text-red-600 dark:text-red-400">{formatKRW(totalDeductions)}{t('salary.currency')}</span>
					</div>
				</div>

				<!-- Ratio Bar -->
				<div class="bg-gray-50 dark:bg-dark-700 rounded-xl p-4">
					<div class="flex h-4 rounded-full overflow-hidden">
						<div
							class="bg-violet-500"
							style="width: {netRatio}%"
						></div>
						<div
							class="bg-red-400"
							style="width: {deductionRatio}%"
						></div>
					</div>
					<div class="flex justify-between text-xs mt-2">
						<span class="text-violet-600 dark:text-violet-400">{t('salary.netSalary')}: {netRatio.toFixed(1)}%</span>
						<span class="text-red-600 dark:text-red-400">{t('salary.deductions')}: {deductionRatio.toFixed(1)}%</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Info Section for SEO -->
	<div class="mt-6 bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
		<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-3">{t('salary.infoTitle')}</h2>
		<div class="text-sm text-gray-600 dark:text-dark-400 space-y-2">
			<p>{t('salary.infoText1')}</p>
			<div class="overflow-x-auto mt-3">
				<table class="w-full text-sm">
					<thead>
						<tr class="border-b border-gray-200 dark:border-dark-600">
							<th class="py-2 px-3 text-left text-gray-600 dark:text-dark-400">{t('salary.item')}</th>
							<th class="py-2 px-3 text-right text-gray-600 dark:text-dark-400">{t('salary.rate')}</th>
						</tr>
					</thead>
					<tbody>
						<tr class="border-b border-gray-100 dark:border-dark-700">
							<td class="py-2 px-3">{t('salary.nationalPension')}</td>
							<td class="py-2 px-3 text-right">4.5%</td>
						</tr>
						<tr class="border-b border-gray-100 dark:border-dark-700">
							<td class="py-2 px-3">{t('salary.healthInsurance')}</td>
							<td class="py-2 px-3 text-right">3.545%</td>
						</tr>
						<tr class="border-b border-gray-100 dark:border-dark-700">
							<td class="py-2 px-3">{t('salary.longTermCare')}</td>
							<td class="py-2 px-3 text-right">{t('salary.longTermCareRate')}</td>
						</tr>
						<tr class="border-b border-gray-100 dark:border-dark-700">
							<td class="py-2 px-3">{t('salary.employmentInsurance')}</td>
							<td class="py-2 px-3 text-right">0.9%</td>
						</tr>
						<tr class="border-b border-gray-100 dark:border-dark-700">
							<td class="py-2 px-3">{t('salary.incomeTax')}</td>
							<td class="py-2 px-3 text-right">{t('salary.incomeTaxRate')}</td>
						</tr>
						<tr class="border-b border-gray-100 dark:border-dark-700">
							<td class="py-2 px-3">{t('salary.localIncomeTax')}</td>
							<td class="py-2 px-3 text-right">{t('salary.localIncomeTaxRate')}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p class="mt-3 text-xs text-gray-500 dark:text-dark-500">{t('salary.disclaimer')}</p>
		</div>
	</div>
</div>
