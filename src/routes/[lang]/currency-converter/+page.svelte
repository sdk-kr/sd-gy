<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';

	const toolContent = {
		about: {
			en: 'Convert between major world currencies using daily rates from the European Central Bank via the free Frankfurter API. Supports USD, EUR, GBP, JPY, KRW, CNY, and other top currencies. Rates update once per business day and reflect mid-market values; the actual rate you get from a bank or money exchange will include a spread. For educational purposes only — not financial or trading advice.',
			ko: '유럽중앙은행(ECB) 기준 일일 환율로 주요 국가의 통화를 변환합니다. Frankfurter 무료 API를 사용하며 USD, EUR, GBP, JPY, KRW, CNY 등 주요 통화를 지원합니다. 환율은 영업일 기준 하루 한 번 갱신되고 시중 환율에는 스프레드가 추가되므로 은행이나 환전소의 실제 환율과 다를 수 있습니다. 본 도구는 정보 제공 목적이며 금융·투자 자문이 아닙니다.',
			ja: '欧州中央銀行（ECB）の日次レートを用いて主要通貨を換算します。無料のFrankfurter APIを利用し、USD、EUR、GBP、JPY、KRW、CNYなど主要通貨に対応します。レートは営業日ごとに1回更新され、銀行や両替所の実際レートにはスプレッドが上乗せされます。本ツールは情報提供のみで、金融助言ではありません。',
			zh: '使用欧洲央行（ECB）每日汇率换算主要国家货币，数据来自免费的 Frankfurter API。支持 USD、EUR、GBP、JPY、KRW、CNY 等主流货币。汇率每个工作日更新一次，与银行或货币兑换处的实际汇率会有差异（包含点差）。本工具仅供参考，不构成金融或交易建议。'
		},
		howTo: {
			en: [
				'Type the amount you want to convert.',
				'Choose the source currency in the "From" dropdown.',
				'Choose the target currency in the "To" dropdown.',
				'View the converted amount and the per-unit exchange rate.',
				'Click the swap arrow to reverse the direction instantly.'
			],
			ko: [
				'환전하려는 금액을 입력합니다.',
				'"From"에서 출발 통화를 선택합니다.',
				'"To"에서 도착 통화를 선택합니다.',
				'환산 금액과 1단위당 환율을 확인합니다.',
				'화살표 버튼으로 두 통화의 방향을 즉시 반전합니다.'
			],
			ja: [
				'換算したい金額を入力します。',
				'「From」で元の通貨を選びます。',
				'「To」で換算先の通貨を選びます。',
				'換算金額と1単位あたりの為替レートを確認します。',
				'矢印ボタンで通貨の方向を即座に反転できます。'
			],
			zh: [
				'输入要换算的金额。',
				'在"From"中选择源货币。',
				'在"To"中选择目标货币。',
				'查看换算金额和单位汇率。',
				'点击箭头按钮可立即反转方向。'
			]
		},
		useCases: {
			en: [
				'Estimating the cost of overseas purchases or subscriptions.',
				'Planning travel budgets in the local currency.',
				'Comparing salaries or freelance rates between countries.',
				'Setting expectations before sending a remittance abroad.',
				'Quickly checking how much foreign cash to bring on a trip.'
			],
			ko: [
				'해외직구나 구독 서비스 가격 추정.',
				'해외여행 예산을 현지 통화로 계획.',
				'국가별 연봉이나 프리랜서 단가 비교.',
				'해외 송금 전 예상 금액 확인.',
				'여행에 챙길 외화 환전액 빠르게 확인.'
			],
			ja: [
				'海外通販やサブスクリプション料金の試算。',
				'海外旅行の予算を現地通貨で計画。',
				'国ごとの給与やフリーランス単価の比較。',
				'海外送金前の概算確認。',
				'旅行用に持参する外貨額の確認。'
			],
			zh: [
				'估算海外购物或订阅费用。',
				'按当地货币规划出行预算。',
				'比较不同国家的薪资或自由职业报价。',
				'境外汇款前预估金额。',
				'快速确定旅行需要兑换多少现金。'
			]
		},
		faq: {
			en: [
				{ q: 'Are these real-time rates?', a: 'No. The European Central Bank publishes reference rates once per business day. Forex markets fluctuate continuously throughout the day.' },
				{ q: 'Why is the bank giving me a worse rate?', a: 'Banks and exchanges add a spread (typically 1–4%) plus fees. The mid-market rate shown here is a baseline reference.' },
				{ q: 'Can I rely on this for trading?', a: 'No. This tool is for general information only. Use a licensed broker with live tick data for trading decisions.' },
				{ q: 'Why is my chosen currency missing?', a: 'The Frankfurter API focuses on widely-traded ECB-listed currencies. Niche currencies may not be available.' }
			],
			ko: [
				{ q: '실시간 환율인가요?', a: '아닙니다. 유럽중앙은행은 영업일 기준 하루 한 번 기준 환율을 발표합니다. 실제 외환 시장은 24시간 변동합니다.' },
				{ q: '은행 환율이 더 불리한 이유는?', a: '은행과 환전소는 보통 1~4%의 스프레드와 수수료를 추가합니다. 여기서 보이는 미드마켓 환율은 기준값일 뿐입니다.' },
				{ q: '이 도구로 트레이딩을 해도 되나요?', a: '안 됩니다. 일반 정보 제공용입니다. 매매 결정에는 라이선스 브로커의 실시간 시세를 사용하세요.' },
				{ q: '원하는 통화가 목록에 없습니다.', a: 'Frankfurter API는 ECB 기준 거래량이 많은 통화 위주로 제공합니다. 특수 통화는 지원되지 않을 수 있습니다.' }
			]
		},
		related: [
			{ href: '/percentage', label: { en: 'Percentage', ko: '퍼센트 계산기', ja: 'パーセント計算', zh: '百分比' } },
			{ href: '/loan-calculator', label: { en: 'Loan Calculator', ko: '대출 계산기', ja: 'ローン計算機', zh: '贷款计算器' } },
			{ href: '/compound-interest', label: { en: 'Compound Interest', ko: '복리 계산기', ja: '複利計算機', zh: '复利计算器' } }
		]
	};

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
	<link rel="canonical" href="https://sd.gy/{lang}/currency-converter" />
	<meta property="og:title" content="{t('currency.title')} - SD.gy" />
	<meta property="og:description" content={t('currency.desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/currency-converter" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('currency.title')} - SD.gy" />
	<meta name="twitter:description" content={t('currency.desc')} />
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

	<ToolContent {lang} content={toolContent} />
</div>
