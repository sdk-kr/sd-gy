<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';

	const toolContent = {
		about: {
			en: 'A four-in-one percentage calculator: find X% of Y, express X as a percentage of Y, calculate the percentage change between two numbers, and compute discount price plus savings. Percent literally means "per hundred", so all formulas come down to (part / whole) × 100. The discount tool is especially handy for sale shopping and tip math.',
			ko: '한 페이지에서 네 가지 퍼센트 계산을 할 수 있습니다. Y의 X%, X는 Y의 몇 %, 두 값 간 증감률, 그리고 할인가 계산까지 한 번에 처리합니다. "Percent"는 라틴어로 "100당"이라는 뜻이며, 모든 공식은 결국 (부분 / 전체) × 100으로 귀결됩니다. 세일이나 팁 계산에 특히 유용합니다.',
			ja: '1ページで4種類のパーセント計算が可能です。YのX%、XはYの何%か、2値の増減率、割引価格までまとめて処理します。Percentはラテン語で「100あたり」の意味で、すべての式は(部分/全体)×100に帰着します。セールやチップ計算に便利です。',
			zh: '一页支持四种百分比计算：求 Y 的 X%、X 是 Y 的百分之几、两个数值的增减率，以及折扣价与节省金额。百分比即"每百分之几"，所有公式都可归结为（部分 / 总数）× 100。折扣计算尤其适合购物和小费场景。'
		},
		howTo: {
			en: [
				'Choose the calculation type that matches your question.',
				'Type the two numbers into the input fields.',
				'Read the result instantly — no submit button needed.',
				'For percentage change, positive values mean increase, negative means decrease.',
				'For discount, enter the original price and the rate to see savings and final price.'
			],
			ko: [
				'질문 유형에 맞는 카드를 선택합니다.',
				'두 숫자를 입력란에 입력합니다.',
				'결과가 즉시 표시되며 별도의 계산 버튼이 필요 없습니다.',
				'증감률에서 양수는 증가, 음수는 감소를 의미합니다.',
				'할인 계산은 정가와 할인율을 입력해 절약 금액과 최종 가격을 확인합니다.'
			],
			ja: [
				'質問内容に合ったカードを選びます。',
				'2つの数値を入力欄に入力します。',
				'計算ボタンなしで結果が即座に表示されます。',
				'増減率は正の値が増加、負の値が減少を表します。',
				'割引計算では定価と割引率を入力して節約額と最終価格を確認します。'
			],
			zh: [
				'选择对应的计算类型。',
				'在输入框填入两个数字。',
				'结果即时显示，无需点击提交。',
				'增减率为正表示上升，为负表示下降。',
				'折扣计算输入原价和折扣率，可查看节省金额与最终价格。'
			]
		},
		useCases: {
			en: [
				'Calculating restaurant tips and bill splits.',
				'Working out sale prices and seasonal discounts.',
				'Comparing year-over-year revenue or growth.',
				'Tracking weight loss or fitness improvements as a percent.',
				'Checking VAT or sales-tax inclusive prices.'
			],
			ko: [
				'식당에서 팁과 더치페이 금액 계산.',
				'쇼핑 시 세일 가격과 할인율 확인.',
				'전년 대비 매출이나 성장률 비교.',
				'다이어트나 운동 성과를 퍼센트로 추적.',
				'부가세 포함·미포함 가격 빠르게 환산.'
			],
			ja: [
				'レストランでのチップや割り勘の計算。',
				'セール価格や季節の割引率の確認。',
				'前年比の売上や成長率の比較。',
				'ダイエットやトレーニングの進捗をパーセントで管理。',
				'消費税込み・抜き価格の素早い換算。'
			],
			zh: [
				'计算餐厅小费和 AA 制金额。',
				'查看促销价和折扣力度。',
				'比较同比营收或增长率。',
				'以百分比追踪减肥或健身进展。',
				'快速换算含税或不含税价格。'
			]
		},
		faq: {
			en: [
				{ q: 'How is percentage change calculated?', a: 'The formula is ((new − old) / old) × 100. The result is positive for an increase, negative for a decrease.' },
				{ q: 'Why is the result NaN or Infinity?', a: 'You probably divided by zero (e.g., the "whole" or "from" value is 0). Enter a non-zero denominator.' },
				{ q: 'Can I do tax-inclusive math?', a: 'Yes. Use "X% of Y" with the tax rate to get the tax amount, then add to the original price.' },
				{ q: 'Does negative discount mean a markup?', a: 'Yes. A negative discount rate increases the final price beyond the original.' }
			],
			ko: [
				{ q: '증감률은 어떻게 계산되나요?', a: '공식은 ((새 값 − 이전 값) / 이전 값) × 100입니다. 양수면 증가, 음수면 감소를 의미합니다.' },
				{ q: '결과가 NaN이나 Infinity로 나옵니다.', a: '"전체"나 "From" 값에 0을 입력했을 가능성이 큽니다. 분모는 0이 아닌 값이어야 합니다.' },
				{ q: '부가세 포함 가격도 계산할 수 있나요?', a: '네, "Y의 X%"로 세액을 구한 뒤 원래 가격에 더하면 됩니다.' },
				{ q: '음수 할인율은 무엇을 의미하나요?', a: '인상을 의미합니다. 할인율이 음수면 최종 가격이 정가보다 비싸집니다.' }
			]
		},
		related: [
			{ href: '/calculator', label: { en: 'Calculator', ko: '계산기', ja: '計算機', zh: '计算器' } },
			{ href: '/loan-calculator', label: { en: 'Loan Calculator', ko: '대출 계산기', ja: 'ローン計算機', zh: '贷款计算器' } },
			{ href: '/compound-interest', label: { en: 'Compound Interest', ko: '복리 계산기', ja: '複利計算機', zh: '复利计算器' } }
		]
	};

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	// What is X% of Y
	let percent1 = 0;
	let value1 = 0;
	$: result1 = (percent1 / 100) * value1;

	// X is what % of Y
	let partValue = 0;
	let wholeValue = 0;
	$: result2 = wholeValue !== 0 ? (partValue / wholeValue) * 100 : 0;

	// Percentage change from X to Y
	let fromValue = 0;
	let toValue = 0;
	$: percentChange = fromValue !== 0 ? ((toValue - fromValue) / fromValue) * 100 : 0;
	$: isIncrease = percentChange >= 0;

	// Discount calculator
	let originalPrice = 0;
	let discountRate = 0;
	$: discountAmount = (originalPrice * discountRate) / 100;
	$: finalPrice = originalPrice - discountAmount;

	function formatNumber(num: number): string {
		return Number.isInteger(num) ? num.toString() : num.toFixed(2);
	}
</script>

<svelte:head>
	<title>{t('percentage.title')} - SD.gy</title>
	<meta name="description" content={t('percentage.desc')} />
	<link rel="canonical" href="https://sd.gy/{lang}/percentage" />
	<meta property="og:title" content="{t('percentage.title')} - SD.gy" />
	<meta property="og:description" content={t('percentage.desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/percentage" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('percentage.title')} - SD.gy" />
	<meta name="twitter:description" content={t('percentage.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('percentage.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('percentage.desc')}</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<!-- What is X% of Y -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">
				{t('percentage.whatIs')} X% {t('percentage.of')} Y
			</h2>
			<div class="space-y-4">
				<div class="flex items-center gap-2">
					<input
						type="number"
						bind:value={percent1}
						class="w-24 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
					<span class="text-gray-600 dark:text-dark-400">%</span>
					<span class="text-gray-600 dark:text-dark-400">{t('percentage.of')}</span>
					<input
						type="number"
						bind:value={value1}
						class="flex-1 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>
				<div class="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4">
					<span class="text-sm text-gray-600 dark:text-dark-400">{t('percentage.result')}</span>
					<div class="text-2xl font-bold text-violet-600 dark:text-violet-400">{formatNumber(result1)}</div>
				</div>
			</div>
		</div>

		<!-- X is what % of Y -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">
				X {t('percentage.isWhatPercent')} Y
			</h2>
			<div class="space-y-4">
				<div class="flex items-center gap-2">
					<input
						type="number"
						bind:value={partValue}
						class="flex-1 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
					<span class="text-gray-600 dark:text-dark-400">{t('percentage.isWhatPercent')}</span>
					<input
						type="number"
						bind:value={wholeValue}
						class="flex-1 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>
				<div class="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4">
					<span class="text-sm text-gray-600 dark:text-dark-400">{t('percentage.result')}</span>
					<div class="text-2xl font-bold text-violet-600 dark:text-violet-400">{formatNumber(result2)}%</div>
				</div>
			</div>
		</div>

		<!-- Percentage Change -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">
				{t('percentage.change')} X {t('percentage.to')} Y
			</h2>
			<div class="space-y-4">
				<div class="flex items-center gap-2">
					<input
						type="number"
						bind:value={fromValue}
						class="flex-1 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
						placeholder="From"
					/>
					<span class="text-gray-600 dark:text-dark-400">{t('percentage.to')}</span>
					<input
						type="number"
						bind:value={toValue}
						class="flex-1 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
						placeholder="To"
					/>
				</div>
				<div class="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4">
					<span class="text-sm text-gray-600 dark:text-dark-400">{t('percentage.result')}</span>
					<div class="text-2xl font-bold {isIncrease ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}">
						{isIncrease ? '+' : ''}{formatNumber(percentChange)}%
						<span class="text-sm font-normal">({isIncrease ? t('percentage.increase') : t('percentage.decrease')})</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Discount Calculator -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">{t('percentage.discount')}</h2>
			<div class="space-y-4">
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-1">{t('percentage.originalPrice')}</label>
					<input
						type="number"
						bind:value={originalPrice}
						class="w-full px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-1">{t('percentage.discountRate')} (%)</label>
					<input
						type="number"
						bind:value={discountRate}
						class="w-full px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>
				<div class="grid grid-cols-2 gap-3">
					<div class="bg-red-50 dark:bg-red-900/20 rounded-lg p-3">
						<span class="text-sm text-gray-600 dark:text-dark-400">{t('percentage.savings')}</span>
						<div class="text-xl font-bold text-red-600 dark:text-red-400">-{formatNumber(discountAmount)}</div>
					</div>
					<div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
						<span class="text-sm text-gray-600 dark:text-dark-400">{t('percentage.finalPrice')}</span>
						<div class="text-xl font-bold text-green-600 dark:text-green-400">{formatNumber(finalPrice)}</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<ToolContent {lang} content={toolContent} />
</div>
