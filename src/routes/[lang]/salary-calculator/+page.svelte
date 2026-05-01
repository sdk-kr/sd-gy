<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';

	const toolContent = {
		about: {
			en: 'A Korean salary calculator for 2026 that converts your gross monthly pay into estimated take-home pay. It deducts the four major social insurance contributions (national pension, health, long-term care, employment) plus income tax and local income tax, accounting for dependents and children. Provided for educational purposes only — not financial, tax, or legal advice.',
			ko: '2026년 기준 한국 급여 계산기입니다. 월 총급여(세전)에서 4대보험(국민연금, 건강보험, 장기요양, 고용보험)과 근로소득세, 지방소득세를 공제해 실수령액을 추정합니다. 부양가족 수와 20세 이하 자녀 수에 따른 인적공제와 자녀세액공제도 반영합니다. 본 도구는 교육 목적의 정보 제공이며 금융·세무·법률 자문이 아닙니다.',
			ja: '2026年基準の韓国給与計算機です。月額総支給額から国民年金・健康保険・長期療養保険・雇用保険、所得税、地方所得税を控除して手取り額を推定します。扶養家族数や20歳以下の子女数に応じた人的控除・子女税額控除も反映します。本ツールは教育目的の情報提供であり、金融・税務・法律助言ではありません。',
			zh: '2026 年韩国工资计算器。从月度税前收入中扣除四大社会保险（国民年金、健康保险、长期护理保险、雇佣保险）以及综合所得税与地方所得税，估算实际到手工资。同时考虑赡养家属和 20 岁以下子女的扣除项目。本工具仅供教育参考，不构成金融、税务或法律建议。'
		},
		howTo: {
			en: [
				'Enter your gross monthly salary in KRW.',
				'Set the non-taxable portion (e.g., meal allowance up to ₩200,000).',
				'Set the number of dependents (yourself counts as 1).',
				'Set the number of children under 20 for the child tax credit.',
				'Read the net (take-home) salary and the deduction breakdown.'
			],
			ko: [
				'세전 월급(원)을 입력합니다.',
				'비과세 항목(식대 등 최대 20만 원) 금액을 입력합니다.',
				'부양가족 수를 입력합니다(본인 포함 1명).',
				'20세 이하 자녀 수를 입력해 자녀세액공제를 반영합니다.',
				'실수령액과 항목별 공제 내역을 확인합니다.'
			],
			ja: [
				'税引前の月給（ウォン）を入力します。',
				'非課税項目（食事手当など最大20万ウォン）を入力します。',
				'扶養家族数を入力します（本人を含めて1名以上）。',
				'20歳以下の子女数を入力すると子女税額控除が反映されます。',
				'手取り額と控除内訳を確認します。'
			],
			zh: [
				'输入税前月薪（韩元）。',
				'输入非课税部分（如餐补最高 20 万韩元）。',
				'输入赡养家属人数（包含本人）。',
				'输入 20 岁以下子女数以适用子女税额扣除。',
				'查看实际到手工资及各项扣除明细。'
			]
		},
		useCases: {
			en: [
				'Estimating take-home pay before accepting a Korean job offer.',
				'Checking how a raise actually affects your monthly cash.',
				'Comparing salary structures with and without meal allowances.',
				'Planning a family budget around a known net income.',
				'Verifying your payslip against the standard deduction rates.'
			],
			ko: [
				'이직 제안을 받았을 때 실수령액 추정.',
				'연봉 인상이 실제 월 실수령액에 미치는 영향 확인.',
				'식대 비과세 적용 여부에 따른 차이 비교.',
				'실수령액 기준 가계 예산 계획.',
				'급여명세서의 공제 항목을 표준 요율과 대조.'
			],
			ja: [
				'転職オファー時の手取り額試算。',
				'昇給が実際の手取りにどう影響するかを確認。',
				'食事手当の有無による給与構造の比較。',
				'手取りベースでの家計予算計画。',
				'給与明細の控除項目を標準料率と照合。'
			],
			zh: [
				'接受韩国职位前估算实际到手工资。',
				'查看加薪后月度现金的实际变化。',
				'比较是否包含餐补的薪资结构。',
				'按净收入规划家庭预算。',
				'核对工资单上的扣除项目是否合理。'
			]
		},
		faq: {
			en: [
				{ q: 'Are these the latest 2026 rates?', a: 'Yes, but Korean social insurance rates can change mid-year via government notice. Verify with the National Tax Service or 4대보험 사이트 for the latest values.' },
				{ q: 'Why does my actual payslip differ slightly?', a: 'Year-end tax settlement, additional deductions (insurance, donations, housing), and bonus rules can shift the monthly tax. This tool gives a baseline estimate.' },
				{ q: 'Does this support self-employed or freelance taxes?', a: 'No. The calculator targets salaried workers under the standard payroll system. Self-employed taxes use different forms.' },
				{ q: 'Is this legal or tax advice?', a: 'No. Always consult a licensed tax accountant (세무사) or your HR department for binding figures.' }
			],
			ko: [
				{ q: '2026년 최신 요율이 맞나요?', a: '네, 다만 4대보험 요율은 연중 고시로 바뀔 수 있습니다. 정확한 값은 국세청이나 4대보험 사이트에서 확인하세요.' },
				{ q: '실제 급여명세서와 약간 다릅니다.', a: '연말정산, 추가 소득공제(보험·기부·주택), 상여 규정 등이 매월 세금에 영향을 줍니다. 이 도구는 표준 추정치를 제공합니다.' },
				{ q: '프리랜서나 사업소득도 계산되나요?', a: '아닙니다. 이 도구는 근로소득자(직장인) 기준입니다. 사업소득은 별도 신고 양식과 세율을 따릅니다.' },
				{ q: '이 결과가 법률·세무 자문인가요?', a: '아닙니다. 정확한 금액은 세무사나 회사 인사팀에 확인하세요.' }
			]
		},
		related: [
			{ href: '/tax-calculator', label: { en: 'Tax Calculator', ko: '세금 계산기', ja: '税金計算機', zh: '税金计算器' } },
			{ href: '/career-calculator', label: { en: 'Career Calculator', ko: '경력 계산기', ja: 'キャリア計算機', zh: '工龄计算器' } },
			{ href: '/loan-calculator', label: { en: 'Loan Calculator', ko: '대출 계산기', ja: 'ローン計算機', zh: '贷款计算器' } }
		],
		externalRefs: [
			{ href: 'https://www.bls.gov/oes/', label: 'BLS: Occupational Employment Statistics' },
			{ href: 'https://www.investopedia.com/terms/s/salary.asp', label: 'Investopedia: Salary' }
		]
	};

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

	<ToolContent
		{lang}
		toolName="Salary Calculator"
		toolUrl="https://sd.gy/{lang}/salary-calculator"
		lastUpdated="2026-04-30"
		category="Daily Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sd.gy/${lang}` },
			{ name: 'Tools', url: `https://sd.gy/${lang}` },
			{ name: 'Salary Calculator', url: `https://sd.gy/${lang}/salary-calculator` }
		]}
		content={toolContent}
	/>
</div>
