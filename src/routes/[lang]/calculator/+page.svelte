<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';

	const toolContent = {
		about: {
			en: 'A simple online calculator that handles the four basic arithmetic operations — addition, subtraction, multiplication, and division — plus percentage and sign toggle. Calculations are done locally in your browser, so no data is sent to a server. A history panel keeps the last ten results so you can revisit recent computations.',
			ko: '온라인 사칙연산 계산기입니다. 더하기, 빼기, 곱하기, 나누기와 함께 퍼센트, 부호 변환 기능을 지원합니다. 모든 계산은 브라우저 안에서 처리되므로 데이터가 서버로 전송되지 않습니다. 최근 10개의 계산 기록을 우측 패널에서 확인할 수 있습니다.',
			ja: 'シンプルなオンライン四則演算計算機です。加減乗除に加え、パーセントや符号反転にも対応します。計算はすべてブラウザ内で行われ、サーバーに送信されません。直近10件の履歴を右側パネルで確認できます。',
			zh: '简洁的在线计算器，支持加减乘除四则运算以及百分比和正负号切换。所有计算均在浏览器本地完成，数据不会上传服务器。右侧面板保留最近 10 条计算记录，方便回顾。'
		},
		howTo: {
			en: [
				'Click number buttons or type with your keyboard.',
				'Choose an operator (+, −, ×, ÷) to chain operations.',
				'Press = or Enter to see the result.',
				'Use C to clear everything, CE to clear only the current entry.',
				'Check the right-side panel for your recent calculation history.'
			],
			ko: [
				'화면의 숫자 버튼이나 키보드 숫자 키를 눌러 입력합니다.',
				'+, −, ×, ÷ 중 원하는 연산자를 선택합니다.',
				'= 키 또는 Enter 키를 눌러 결과를 확인합니다.',
				'C로 전체 초기화, CE로 현재 입력값만 지웁니다.',
				'오른쪽 히스토리 패널에서 최근 계산 기록을 확인할 수 있습니다.'
			],
			ja: [
				'画面の数字ボタンまたはキーボードで入力します。',
				'演算子（+、−、×、÷）を選びます。',
				'＝キーまたはEnterで結果を表示します。',
				'Cで全消去、CEで現在の入力のみ消去します。',
				'右側の履歴パネルで直近の計算を確認できます。'
			],
			zh: [
				'点击数字按钮或使用键盘输入数字。',
				'选择运算符（+、−、×、÷）进行连续运算。',
				'按 = 或回车键查看结果。',
				'C 键清空全部，CE 仅清除当前输入。',
				'右侧面板可查看最近计算记录。'
			]
		},
		useCases: {
			en: [
				'Quick everyday math like splitting a bill or calculating change.',
				'Verifying spreadsheet formulas with a manual cross-check.',
				'Helping kids learn arithmetic with an on-screen calculator.',
				'Calculating discount percentages while shopping online.',
				'Doing quick conversions and basic engineering checks.'
			],
			ko: [
				'식당 더치페이 등 일상의 간단한 계산.',
				'스프레드시트 결과를 손으로 검증.',
				'어린이의 사칙연산 학습 보조.',
				'온라인 쇼핑 중 할인율 계산.',
				'간단한 단위 환산 및 엔지니어링 검토.'
			],
			ja: [
				'割り勘などの日常計算。',
				'スプレッドシートの結果を手計算で検証。',
				'子供の算数学習サポート。',
				'オンラインショッピングでの割引計算。',
				'簡単な単位換算や設計チェック。'
			],
			zh: [
				'日常算账，如餐费 AA 制。',
				'手动核对电子表格公式结果。',
				'帮助孩子学习算术。',
				'购物时计算折扣。',
				'快速换算和工程估算。'
			]
		},
		faq: {
			en: [
				{ q: 'Are calculations sent to your servers?', a: 'No. Everything runs in your browser using JavaScript. Nothing leaves your device.' },
				{ q: 'Why does dividing by zero show 0?', a: 'Division by zero is mathematically undefined. The calculator returns 0 to avoid breaking the display.' },
				{ q: 'Can I use my keyboard?', a: 'Yes. Number keys, operators, Enter (=), Escape (clear), and Backspace are all supported.' },
				{ q: 'Why are some long decimals slightly off?', a: 'JavaScript uses IEEE-754 floating point, so values like 0.1 + 0.2 may show tiny rounding artifacts.' }
			],
			ko: [
				{ q: '계산 결과가 서버로 전송되나요?', a: '아닙니다. 모든 계산은 브라우저에서 JavaScript로 처리되며 외부로 전송되지 않습니다.' },
				{ q: '0으로 나누면 왜 0이 나오나요?', a: '수학적으로 정의되지 않기 때문에 화면이 깨지지 않도록 0으로 처리합니다.' },
				{ q: '키보드로도 입력할 수 있나요?', a: '네, 숫자 키, 연산자, Enter(=), Esc(초기화), Backspace를 모두 지원합니다.' },
				{ q: '소수점 계산이 미세하게 어긋나는 이유는?', a: 'JavaScript의 IEEE-754 부동소수점 특성상 0.1 + 0.2 같은 계산에서 미세한 반올림 오차가 발생할 수 있습니다.' }
			]
		},
		related: [
			{ href: '/percentage', label: { en: 'Percentage', ko: '퍼센트 계산기', ja: 'パーセント計算', zh: '百分比' } },
			{ href: '/loan-calculator', label: { en: 'Loan Calculator', ko: '대출 계산기', ja: 'ローン計算機', zh: '贷款计算器' } },
			{ href: '/compound-interest', label: { en: 'Compound Interest', ko: '복리 계산기', ja: '複利計算機', zh: '复利计算器' } }
		],
		externalRefs: [
			{ href: 'https://en.wikipedia.org/wiki/Calculator', label: 'Calculator - Wikipedia' },
			{ href: 'https://en.wikipedia.org/wiki/Order_of_operations', label: 'Order of operations - Wikipedia' }
		]
	};

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let display = '0';
	let previousValue = '';
	let operation = '';
	let waitingForOperand = false;
	let history: string[] = [];

	function inputDigit(digit: string) {
		if (waitingForOperand) {
			display = digit;
			waitingForOperand = false;
		} else {
			display = display === '0' ? digit : display + digit;
		}
	}

	function inputDecimal() {
		if (waitingForOperand) {
			display = '0.';
			waitingForOperand = false;
			return;
		}
		if (!display.includes('.')) {
			display = display + '.';
		}
	}

	function clearDisplay() {
		display = '0';
		previousValue = '';
		operation = '';
		waitingForOperand = false;
	}

	function clearEntry() {
		display = '0';
	}

	function toggleSign() {
		display = String(-parseFloat(display));
	}

	function inputPercent() {
		display = String(parseFloat(display) / 100);
	}

	function performOperation(nextOperation: string) {
		const inputValue = parseFloat(display);

		if (previousValue === '') {
			previousValue = display;
		} else if (operation) {
			const currentValue = parseFloat(previousValue);
			let result = 0;

			switch (operation) {
				case '+':
					result = currentValue + inputValue;
					break;
				case '-':
					result = currentValue - inputValue;
					break;
				case '*':
					result = currentValue * inputValue;
					break;
				case '/':
					result = inputValue !== 0 ? currentValue / inputValue : 0;
					break;
			}

			const historyEntry = `${previousValue} ${operation} ${display} = ${result}`;
			history = [historyEntry, ...history].slice(0, 10);

			display = String(result);
			previousValue = display;
		}

		waitingForOperand = true;
		operation = nextOperation;
	}

	function calculate() {
		if (!operation || previousValue === '') return;

		const inputValue = parseFloat(display);
		const currentValue = parseFloat(previousValue);
		let result = 0;

		switch (operation) {
			case '+':
				result = currentValue + inputValue;
				break;
			case '-':
				result = currentValue - inputValue;
				break;
			case '*':
				result = currentValue * inputValue;
				break;
			case '/':
				result = inputValue !== 0 ? currentValue / inputValue : 0;
				break;
		}

		const historyEntry = `${previousValue} ${operation} ${display} = ${result}`;
		history = [historyEntry, ...history].slice(0, 10);

		display = String(result);
		previousValue = '';
		operation = '';
		waitingForOperand = true;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key >= '0' && e.key <= '9') {
			inputDigit(e.key);
		} else if (e.key === '.') {
			inputDecimal();
		} else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
			performOperation(e.key);
		} else if (e.key === 'Enter' || e.key === '=') {
			calculate();
		} else if (e.key === 'Escape') {
			clearDisplay();
		} else if (e.key === 'Backspace') {
			display = display.length > 1 ? display.slice(0, -1) : '0';
		}
	}

	const buttons = [
		['C', 'CE', '%', '/'],
		['7', '8', '9', '*'],
		['4', '5', '6', '-'],
		['1', '2', '3', '+'],
		['+/-', '0', '.', '=']
	];

	function handleButton(btn: string) {
		switch (btn) {
			case 'C':
				clearDisplay();
				break;
			case 'CE':
				clearEntry();
				break;
			case '%':
				inputPercent();
				break;
			case '+/-':
				toggleSign();
				break;
			case '.':
				inputDecimal();
				break;
			case '=':
				calculate();
				break;
			case '+':
			case '-':
			case '*':
			case '/':
				performOperation(btn);
				break;
			default:
				inputDigit(btn);
		}
	}

	function getButtonClass(btn: string): string {
		if (btn === '=') return 'bg-violet-500 hover:bg-violet-600 text-white';
		if (['+', '-', '*', '/'].includes(btn)) return 'bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 hover:bg-violet-200 dark:hover:bg-violet-900/50';
		if (['C', 'CE', '%', '+/-'].includes(btn)) return 'bg-gray-200 dark:bg-dark-600 text-gray-700 dark:text-dark-200 hover:bg-gray-300 dark:hover:bg-dark-500';
		return 'bg-white dark:bg-dark-700 text-gray-900 dark:text-dark-100 hover:bg-gray-100 dark:hover:bg-dark-600';
	}
</script>

<svelte:head>
	<title>{t('calculator.title')} - SD.gy</title>
	<meta name="description" content={t('calculator.desc')} />
	<link rel="canonical" href="https://sd.gy/{lang}/calculator" />
	<meta property="og:title" content="{t('calculator.title')} - SD.gy" />
	<meta property="og:description" content={t('calculator.desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/calculator" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('calculator.title')} - SD.gy" />
	<meta name="twitter:description" content={t('calculator.desc')} />
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('calculator.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('calculator.desc')}</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<!-- Calculator -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<!-- Display -->
			<div class="bg-gray-100 dark:bg-dark-900 rounded-xl p-4 mb-4">
				<div class="text-right text-sm text-gray-500 dark:text-dark-400 h-5">
					{previousValue} {operation}
				</div>
				<div class="text-right text-4xl font-mono font-bold text-gray-900 dark:text-dark-100 overflow-x-auto">
					{display}
				</div>
			</div>

			<!-- Buttons -->
			<div class="grid grid-cols-4 gap-2">
				{#each buttons as row}
					{#each row as btn}
						<button
							on:click={() => handleButton(btn)}
							class="h-14 text-xl font-semibold rounded-xl transition-colors {getButtonClass(btn)} border border-gray-200 dark:border-dark-600"
						>
							{btn}
						</button>
					{/each}
				{/each}
			</div>
		</div>

		<!-- History -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">{t('calculator.history')}</h2>
			{#if history.length === 0}
				<p class="text-gray-500 dark:text-dark-400 text-center py-8">{t('calculator.noHistory')}</p>
			{:else}
				<div class="space-y-2 max-h-80 overflow-y-auto">
					{#each history as entry}
						<div class="bg-gray-50 dark:bg-dark-700 rounded-lg p-3 font-mono text-sm text-gray-700 dark:text-dark-300">
							{entry}
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>

	<ToolContent
		{lang}
		toolName="Calculator"
		toolUrl="https://sd.gy/{lang}/calculator"
		lastUpdated="2026-04-30"
		category="Daily Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sd.gy/${lang}` },
			{ name: 'Tools', url: `https://sd.gy/${lang}` },
			{ name: 'Calculator', url: `https://sd.gy/${lang}/calculator` }
		]}
		content={toolContent}
	/>
</div>
