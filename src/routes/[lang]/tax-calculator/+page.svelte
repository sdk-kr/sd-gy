<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';

	const toolContent = {
		about: {
			en: 'A simplified income tax calculator for the United States, South Korea, and Japan based on 2024 federal/national income brackets. It applies progressive marginal rates to your taxable income to estimate the total tax, effective rate, and after-tax amount. Many real-world deductions, credits, and state/local taxes are not modeled. For educational purposes only — not legal or tax advice.',
			ko: '미국·한국·일본의 2024년 기준 종합소득세를 단순화해 계산해 주는 도구입니다. 누진세율을 과세표준에 적용해 총 세액, 실효세율, 세후 소득을 추정합니다. 인적공제, 세액공제, 주민세·지방세 등 실제 항목은 반영되지 않습니다. 본 도구는 교육 목적의 정보 제공이며 법률·세무 자문이 아닙니다.',
			ja: '米国・韓国・日本の2024年基準の所得税を簡略化した計算ツールです。累進税率を課税所得に適用し、税額・実効税率・税引後所得を推定します。各種控除や住民税などは反映されていません。本ツールは教育目的の情報提供であり、法律・税務助言ではありません。',
			zh: '基于美国、韩国、日本 2024 年综合所得税阶梯的简化计算器。对应税所得套用累进税率，估算税款、实际税率与税后金额。多数个人扣除项与地方税未纳入计算。本工具仅供教育参考，不构成法律或税务建议。'
		},
		howTo: {
			en: [
				'Choose the country: United States, South Korea, or Japan.',
				'Enter your annual taxable income in the local currency.',
				'View your estimated tax, effective rate, and after-tax income.',
				'Scroll down to see the bracket-by-bracket marginal rates used.',
				'Compare different income levels to see how brackets stack.'
			],
			ko: [
				'국가를 선택합니다(미국, 한국, 일본).',
				'해당 통화로 연간 과세 소득을 입력합니다.',
				'예상 세액, 실효세율, 세후 소득을 확인합니다.',
				'아래에서 단계별 한계세율 표를 확인합니다.',
				'소득 금액을 바꿔 가며 누진세 효과를 비교합니다.'
			],
			ja: [
				'国を選びます（米国、韓国、日本）。',
				'各通貨で年間課税所得を入力します。',
				'推定税額、実効税率、税引後所得を確認します。',
				'下部の段階別限界税率表を確認します。',
				'所得を変えて累進税の効果を比較します。'
			],
			zh: [
				'选择国家：美国、韩国或日本。',
				'输入对应货币的年度应税所得。',
				'查看预估税款、实际税率与税后所得。',
				'查看下方各级边际税率表。',
				'调整收入金额，比较累进税效果。'
			]
		},
		useCases: {
			en: [
				'Comparing how the same income is taxed across countries.',
				'Estimating self-employment quarterly tax payments.',
				'Understanding the difference between marginal and effective rates.',
				'Sanity-checking the tax line on a contract or offer letter.',
				'Educational discussions about progressive taxation.'
			],
			ko: [
				'동일 소득이 국가별로 어떻게 과세되는지 비교.',
				'사업·프리랜서 분기 예납 추정.',
				'한계세율과 실효세율의 차이 이해.',
				'계약서·오퍼레터의 세금 항목 검증.',
				'누진세 개념 교육 자료.'
			],
			ja: [
				'同じ所得が国ごとにどう課税されるかを比較。',
				'個人事業主の四半期予定納税額の試算。',
				'限界税率と実効税率の違いを理解。',
				'契約書やオファーレターの税金項目を確認。',
				'累進課税の教材として活用。'
			],
			zh: [
				'比较同等收入在各国的税负。',
				'估算自雇人士的季度预缴税款。',
				'理解边际税率与实际税率的区别。',
				'核对合同或聘书中的税项。',
				'用于讲解累进税制的教育素材。'
			]
		},
		faq: {
			en: [
				{ q: 'Are state, local, or filing-status differences included?', a: 'No. The calculator uses single-filer federal/national brackets only. State, prefectural, and local taxes are not modeled.' },
				{ q: 'Why is my actual tax different?', a: 'Real returns include deductions, credits, payroll-withheld amounts, and special situations (capital gains, AMT, etc.) that this tool does not handle.' },
				{ q: 'What is the difference between marginal and effective rates?', a: 'Marginal is the rate on your next dollar; effective is total tax divided by total income — usually lower than the top marginal rate.' },
				{ q: 'Is this legal or tax advice?', a: 'No. Always consult a licensed tax professional (CPA / 세무사 / 税理士) for binding decisions.' }
			],
			ko: [
				{ q: '주·지방세나 신고 유형 차이가 반영되나요?', a: '아닙니다. 미국은 연방 단일 신고자, 한국·일본은 종합소득 누진세만 반영합니다. 주·도·시군구세는 별도로 계산해야 합니다.' },
				{ q: '실제 세액과 다른 이유는?', a: '실제 신고에는 각종 공제, 세액공제, 원천징수, 양도소득·AMT 등 특수 항목이 포함되어 이 도구로는 모두 반영할 수 없습니다.' },
				{ q: '한계세율과 실효세율의 차이는?', a: '한계세율은 다음 1원에 적용되는 세율, 실효세율은 총 세금 ÷ 총 소득입니다. 보통 실효세율이 최상위 한계세율보다 낮습니다.' },
				{ q: '이 결과가 법률·세무 자문인가요?', a: '아닙니다. 실제 신고나 결정은 반드시 세무사(CPA, 세무사, 税理士)와 상담하세요.' }
			]
		},
		related: [
			{ href: '/salary-calculator', label: { en: 'Salary Calculator', ko: '급여 계산기', ja: '給与計算機', zh: '薪资计算器' } },
			{ href: '/percentage', label: { en: 'Percentage', ko: '퍼센트 계산기', ja: 'パーセント計算', zh: '百分比' } },
			{ href: '/currency-converter', label: { en: 'Currency Converter', ko: '환율 변환', ja: '通貨換算', zh: '货币换算' } }
		]
	};

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
	<link rel="canonical" href="https://sd.gy/{lang}/tax-calculator" />
	<meta property="og:title" content="{t('tax.title')} - SD.gy" />
	<meta property="og:description" content={t('tax.desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/tax-calculator" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('tax.title')} - SD.gy" />
	<meta name="twitter:description" content={t('tax.desc')} />
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

	<ToolContent {lang} content={toolContent} />
</div>
