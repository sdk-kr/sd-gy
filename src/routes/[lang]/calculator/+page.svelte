<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

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
</div>
