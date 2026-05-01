<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';

	const toolContent = {
		about: {
			en: 'Compound interest is "interest on interest" — earnings are added to the principal, then earn more interest on the new total. This calculator uses the standard formula A = P(1 + r/n)^(nt) and lets you adjust principal, annual rate, time, and compounding frequency. Results are for educational purposes only and are not financial advice; actual returns vary with taxes, fees, and inflation.',
			ko: '복리는 "이자에 또 이자가 붙는" 방식으로, 발생한 이자를 원금에 더한 뒤 다시 이자가 계산됩니다. 이 계산기는 표준 공식 A = P(1 + r/n)^(nt)을 사용하며, 원금·연이율·기간·복리 주기를 자유롭게 조정할 수 있습니다. 본 도구는 교육 목적의 정보 제공이며 금융 자문이 아닙니다. 실제 수익은 세금, 수수료, 물가상승률 등에 따라 달라집니다.',
			ja: '複利は「利息に利息がつく」仕組みで、発生した利息を元本に加え、新しい合計に対して再び利息が計算されます。この計算機は標準式 A = P(1 + r/n)^(nt) を用い、元本、年利、期間、複利頻度を自由に調整できます。本ツールは教育目的の情報提供で、金融助言ではありません。実際の収益は税金や手数料、インフレ等で変動します。',
			zh: '复利意为"利息再生利息"——产生的利息加入本金，下一期就用新的总额计算利息。本计算器使用标准公式 A = P(1 + r/n)^(nt)，可调整本金、年利率、期限和复利频次。本工具仅供教育参考，不构成金融建议。实际收益受税费、通胀等因素影响。'
		},
		howTo: {
			en: [
				'Enter your starting principal amount.',
				'Set the expected annual interest rate as a percentage.',
				'Choose the investment period in years.',
				'Pick how often interest compounds (annually, monthly, daily, etc.).',
				'Read the future value, total interest earned, and principal/interest split.'
			],
			ko: [
				'초기 투자 원금을 입력합니다.',
				'예상 연이율(%)을 입력합니다.',
				'투자 기간(년)을 선택합니다.',
				'복리 주기를 선택합니다(연·반기·분기·월·일).',
				'미래 가치, 총 이자, 원금·이자 비율을 확인합니다.'
			],
			ja: [
				'元本を入力します。',
				'想定年利（%）を入力します。',
				'投資期間（年）を選びます。',
				'複利頻度を選びます（年・半年・四半期・月・日）。',
				'将来価値、合計利息、元本と利息の割合を確認します。'
			],
			zh: [
				'输入初始本金。',
				'输入预期年利率（%）。',
				'选择投资期限（年）。',
				'选择复利频次（年/半年/季/月/日）。',
				'查看未来值、累计利息以及本金与利息的比例。'
			]
		},
		useCases: {
			en: [
				'Estimating long-term growth of savings or retirement accounts.',
				'Comparing investment products with different compounding frequencies.',
				'Visualizing the power of starting to invest earlier in life.',
				'Setting financial goals like a down payment or college fund.',
				'Sanity-checking returns advertised by banks or investment apps.'
			],
			ko: [
				'예적금이나 연금 계좌의 장기 성장 추정.',
				'복리 주기가 다른 금융 상품 비교.',
				'일찍 투자를 시작했을 때의 효과 시각화.',
				'주택 자금, 학자금 등 재무 목표 설정.',
				'은행·증권사가 광고하는 수익률을 검증.'
			],
			ja: [
				'貯蓄や年金口座の長期成長を試算。',
				'複利頻度の異なる金融商品を比較。',
				'早期投資の効果を可視化。',
				'住宅頭金や教育資金などの目標設定。',
				'銀行や投資アプリの広告利回りを検証。'
			],
			zh: [
				'估算储蓄或退休账户的长期增长。',
				'比较不同复利频次的金融产品。',
				'直观展示早投资的复利效应。',
				'设定首付、教育金等理财目标。',
				'核对银行或投资应用宣传的收益率。'
			]
		},
		faq: {
			en: [
				{ q: 'Does this account for taxes and inflation?', a: 'No. The calculator shows nominal growth before taxes, fees, and inflation. Real purchasing power may be lower than the displayed number.' },
				{ q: 'Why does daily compounding only slightly beat monthly?', a: 'For typical interest rates, the difference between monthly and daily compounding is small once n exceeds 12. Continuous compounding is the theoretical upper bound.' },
				{ q: 'Can I model regular monthly contributions?', a: 'This tool computes a single lump-sum scenario. For recurring deposits, multiply each deposit\'s future value separately or use a dedicated savings calculator.' },
				{ q: 'Is this financial advice?', a: 'No. It is an educational illustration of compound math. Consult a licensed financial advisor before making investment decisions.' }
			],
			ko: [
				{ q: '세금이나 물가상승률이 반영되나요?', a: '아닙니다. 세전·수수료 전·물가 반영 전 명목 수익만 보여 줍니다. 실제 구매력은 표시 금액보다 낮을 수 있습니다.' },
				{ q: '일복리가 월복리보다 크게 차이나지 않는 이유?', a: '일반적인 금리 수준에서는 n이 12를 넘으면 차이가 매우 작아집니다. 이론상 최대치는 연속복리입니다.' },
				{ q: '매월 적립금도 계산할 수 있나요?', a: '이 도구는 단일 일시금 시나리오만 계산합니다. 정기 적립을 반영하려면 각 회차의 미래 가치를 따로 더하거나 적립식 계산기를 사용하세요.' },
				{ q: '이 결과가 금융 자문인가요?', a: '아닙니다. 복리의 수학적 원리를 보여 주는 교육용 자료입니다. 실제 투자 결정 전에 공인 재무상담사와 상담하세요.' }
			]
		},
		related: [
			{ href: '/loan-calculator', label: { en: 'Loan Calculator', ko: '대출 계산기', ja: 'ローン計算機', zh: '贷款计算器' } },
			{ href: '/percentage', label: { en: 'Percentage', ko: '퍼센트 계산기', ja: 'パーセント計算', zh: '百分比' } },
			{ href: '/currency-converter', label: { en: 'Currency Converter', ko: '환율 변환', ja: '通貨換算', zh: '货币换算' } }
		]
	};

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
	<link rel="canonical" href="https://sd.gy/{lang}/compound-interest" />
	<meta property="og:title" content="{t('compound.title')} - SD.gy" />
	<meta property="og:description" content={t('compound.desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/compound-interest" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('compound.title')} - SD.gy" />
	<meta name="twitter:description" content={t('compound.desc')} />
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

	<ToolContent {lang} content={toolContent} />
</div>
