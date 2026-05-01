<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';

	const toolContent = {
		about: {
			en: 'A loan calculator that estimates your monthly payment using the standard amortization formula M = P · r · (1+r)^n / ((1+r)^n − 1). It shows total interest, total cost, the principal/interest split, and an amortization schedule for the first 24 months. Useful for mortgages, auto loans, and personal loans. For educational purposes only — not financial or legal advice.',
			ko: '대출 계산기는 표준 원리금균등상환 공식 M = P·r·(1+r)^n / ((1+r)^n − 1)을 사용해 매월 상환액을 계산합니다. 총 이자, 총 상환액, 원금/이자 비율, 그리고 처음 24개월의 상환 스케줄을 보여 줍니다. 주택담보대출, 자동차 대출, 신용대출 등에 활용할 수 있습니다. 본 도구는 교육 목적의 정보 제공이며 금융·법률 자문이 아닙니다.',
			ja: 'ローン計算機は標準的な元利均等返済式 M = P·r·(1+r)^n / ((1+r)^n − 1) を用いて月々の返済額を算出します。総利息、総支払額、元金と利息の割合、最初の24か月分の返済スケジュールを表示します。住宅ローン、自動車ローン、個人ローンなどに活用できます。本ツールは教育目的の情報提供で、金融・法律助言ではありません。',
			zh: '贷款计算器使用标准等额本息公式 M = P·r·(1+r)^n / ((1+r)^n − 1) 计算月供，并显示总利息、总成本、本金 / 利息占比以及前 24 期还款明细。适用于房贷、车贷、个人贷款等估算。本工具仅供教育参考，不构成金融或法律建议。'
		},
		howTo: {
			en: [
				'Enter the loan amount (principal).',
				'Set the annual interest rate (APR) as a percentage.',
				'Choose the loan term in years.',
				'Read the monthly payment, total payment, and total interest.',
				'Expand the schedule to see how each payment splits into principal and interest.'
			],
			ko: [
				'대출 원금을 입력합니다.',
				'연이자율(%)을 입력합니다.',
				'상환 기간(년)을 선택합니다.',
				'월 상환액, 총 상환액, 총 이자를 확인합니다.',
				'상환 스케줄을 펼쳐 매월 원금과 이자의 분배 내역을 확인합니다.'
			],
			ja: [
				'借入元金を入力します。',
				'年利（%）を入力します。',
				'返済期間（年）を選びます。',
				'月々の返済額、総返済額、総利息を確認します。',
				'返済スケジュールを開いて、毎月の元金と利息の内訳を確認します。'
			],
			zh: [
				'输入贷款本金。',
				'输入年利率（%）。',
				'选择贷款期限（年）。',
				'查看月供、总还款额和总利息。',
				'展开还款明细查看每期本金与利息的拆分。'
			]
		},
		useCases: {
			en: [
				'Comparing mortgage offers from different lenders.',
				'Estimating affordability before house or car shopping.',
				'Planning early repayment scenarios by reducing the term.',
				'Visualizing how interest dominates early-year payments.',
				'Sharing a baseline payment estimate with a co-borrower.'
			],
			ko: [
				'은행별 주택담보대출 조건 비교.',
				'주택·자동차 구매 전 부담 가능 금액 추산.',
				'기간을 줄여 조기 상환 시나리오 시뮬레이션.',
				'초반에 이자 비중이 큰 구조를 시각적으로 이해.',
				'공동 차주와 기준 상환액 공유.'
			],
			ja: [
				'銀行ごとの住宅ローン条件の比較。',
				'住宅・自動車購入前の予算試算。',
				'返済期間を短縮した繰上げ返済シナリオ検討。',
				'初期に利息比率が高い構造を可視化。',
				'共同借入人との返済額共有。'
			],
			zh: [
				'比较不同银行的房贷方案。',
				'购房或购车前评估月供承受能力。',
				'通过缩短期限模拟提前还款。',
				'直观了解前期利息占比偏高的结构。',
				'与共同借款人分享月供基准。'
			]
		},
		faq: {
			en: [
				{ q: 'Does this include taxes, insurance, or fees?', a: 'No. The calculation covers only principal and interest. Mortgage payments often include property tax and insurance escrow on top.' },
				{ q: 'Why is so much of my early payment going to interest?', a: 'In an amortizing loan, interest is charged on the remaining balance. Early balances are large, so interest is large; the principal share grows over time.' },
				{ q: 'Can I model variable rates?', a: 'No. This tool assumes a fixed APR. For ARMs, recalculate after each rate adjustment using the updated rate and remaining balance.' },
				{ q: 'Is this financial or legal advice?', a: 'No. Always consult a licensed financial advisor or legal professional before signing a loan contract.' }
			],
			ko: [
				{ q: '세금이나 보험, 수수료까지 포함되나요?', a: '아닙니다. 원금과 이자만 계산합니다. 실제 주택담보대출에는 재산세와 보험 등 부수 비용이 추가될 수 있습니다.' },
				{ q: '초반에 이자가 너무 많이 빠지는 이유는?', a: '원리금균등상환은 잔액에 이자가 붙는 구조라, 초반엔 잔액이 커 이자가 크고 시간이 갈수록 원금 비중이 커집니다.' },
				{ q: '변동금리도 계산할 수 있나요?', a: '이 도구는 고정금리를 가정합니다. 변동금리는 금리 변경 시점마다 잔액과 새 금리로 다시 계산해야 합니다.' },
				{ q: '이 결과가 금융·법률 자문인가요?', a: '아닙니다. 실제 대출 계약 전에 반드시 공인 재무상담사나 법률 전문가와 상담하세요.' }
			]
		},
		related: [
			{ href: '/compound-interest', label: { en: 'Compound Interest', ko: '복리 계산기', ja: '複利計算機', zh: '复利计算器' } },
			{ href: '/percentage', label: { en: 'Percentage', ko: '퍼센트 계산기', ja: 'パーセント計算', zh: '百分比' } },
			{ href: '/salary-calculator', label: { en: 'Salary Calculator', ko: '급여 계산기', ja: '給与計算機', zh: '薪资计算器' } }
		],
		externalRefs: [
			{ href: 'https://www.investopedia.com/terms/a/amortization.asp', label: 'Investopedia: Amortization' },
			{ href: 'https://www.consumerfinance.gov/owning-a-home/loan-options/', label: 'CFPB: Loan Options' }
		]
	};

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
	<link rel="canonical" href="https://sd.gy/{lang}/loan-calculator" />
	<meta property="og:title" content="{t('loan.title')} - SD.gy" />
	<meta property="og:description" content={t('loan.desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/loan-calculator" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('loan.title')} - SD.gy" />
	<meta name="twitter:description" content={t('loan.desc')} />
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

	<ToolContent
		{lang}
		toolName="Loan Calculator"
		toolUrl="https://sd.gy/{lang}/loan-calculator"
		lastUpdated="2026-04-30"
		category="Daily Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sd.gy/${lang}` },
			{ name: 'Tools', url: `https://sd.gy/${lang}` },
			{ name: 'Loan Calculator', url: `https://sd.gy/${lang}/loan-calculator` }
		]}
		content={toolContent}
	/>
</div>
