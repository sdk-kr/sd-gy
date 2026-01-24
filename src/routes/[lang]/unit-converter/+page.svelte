<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	type UnitCategory = 'length' | 'weight' | 'temperature';

	let category: UnitCategory = 'length';
	let fromValue = 1;
	let fromUnit = 'm';
	let toUnit = 'ft';

	const units: Record<UnitCategory, { value: string; label: string; toBase: (v: number) => number; fromBase: (v: number) => number }[]> = {
		length: [
			{ value: 'mm', label: 'mm', toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
			{ value: 'cm', label: 'cm', toBase: (v) => v / 100, fromBase: (v) => v * 100 },
			{ value: 'm', label: 'm', toBase: (v) => v, fromBase: (v) => v },
			{ value: 'km', label: 'km', toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
			{ value: 'in', label: 'inch', toBase: (v) => v * 0.0254, fromBase: (v) => v / 0.0254 },
			{ value: 'ft', label: 'feet', toBase: (v) => v * 0.3048, fromBase: (v) => v / 0.3048 },
			{ value: 'yd', label: 'yard', toBase: (v) => v * 0.9144, fromBase: (v) => v / 0.9144 },
			{ value: 'mi', label: 'mile', toBase: (v) => v * 1609.344, fromBase: (v) => v / 1609.344 }
		],
		weight: [
			{ value: 'mg', label: 'mg', toBase: (v) => v / 1000000, fromBase: (v) => v * 1000000 },
			{ value: 'g', label: 'g', toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
			{ value: 'kg', label: 'kg', toBase: (v) => v, fromBase: (v) => v },
			{ value: 't', label: 'ton', toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
			{ value: 'oz', label: 'oz', toBase: (v) => v * 0.0283495, fromBase: (v) => v / 0.0283495 },
			{ value: 'lb', label: 'lb', toBase: (v) => v * 0.453592, fromBase: (v) => v / 0.453592 }
		],
		temperature: [
			{ value: 'c', label: 'Celsius', toBase: (v) => v, fromBase: (v) => v },
			{ value: 'f', label: 'Fahrenheit', toBase: (v) => (v - 32) * 5/9, fromBase: (v) => v * 9/5 + 32 },
			{ value: 'k', label: 'Kelvin', toBase: (v) => v - 273.15, fromBase: (v) => v + 273.15 }
		]
	};

	$: currentUnits = units[category];

	$: {
		if (category === 'length') {
			fromUnit = 'm';
			toUnit = 'ft';
		} else if (category === 'weight') {
			fromUnit = 'kg';
			toUnit = 'lb';
		} else {
			fromUnit = 'c';
			toUnit = 'f';
		}
	}

	$: convertedValue = convert(fromValue, fromUnit, toUnit);

	function convert(value: number, from: string, to: string): number {
		const fromUnitDef = currentUnits.find(u => u.value === from);
		const toUnitDef = currentUnits.find(u => u.value === to);
		if (!fromUnitDef || !toUnitDef) return 0;
		const baseValue = fromUnitDef.toBase(value);
		return toUnitDef.fromBase(baseValue);
	}

	function swapUnits() {
		const temp = fromUnit;
		fromUnit = toUnit;
		toUnit = temp;
	}

	function formatNumber(num: number): string {
		if (Math.abs(num) < 0.0001 || Math.abs(num) >= 1000000) {
			return num.toExponential(4);
		}
		return num.toLocaleString(undefined, { maximumFractionDigits: 6 });
	}
</script>

<svelte:head>
	<title>{t('unit.title')} - SD.gy</title>
	<meta name="description" content={t('unit.desc')} />
</svelte:head>

<div class="max-w-2xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('unit.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('unit.desc')}</p>
	</div>

	<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
		<!-- Category Tabs -->
		<div class="flex gap-2 mb-6">
			<button
				on:click={() => category = 'length'}
				class="flex-1 py-2 px-4 rounded-lg font-medium transition-colors {category === 'length' ? 'bg-violet-500 text-white' : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
			>
				{t('unit.length')}
			</button>
			<button
				on:click={() => category = 'weight'}
				class="flex-1 py-2 px-4 rounded-lg font-medium transition-colors {category === 'weight' ? 'bg-violet-500 text-white' : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
			>
				{t('unit.weight')}
			</button>
			<button
				on:click={() => category = 'temperature'}
				class="flex-1 py-2 px-4 rounded-lg font-medium transition-colors {category === 'temperature' ? 'bg-violet-500 text-white' : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
			>
				{t('unit.temperature')}
			</button>
		</div>

		<!-- From -->
		<div class="mb-4">
			<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('unit.from')}</label>
			<div class="flex gap-2">
				<input
					type="number"
					bind:value={fromValue}
					class="flex-1 px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
				/>
				<select
					bind:value={fromUnit}
					class="px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
				>
					{#each currentUnits as unit}
						<option value={unit.value}>{unit.label}</option>
					{/each}
				</select>
			</div>
		</div>

		<!-- Swap Button -->
		<div class="flex justify-center my-4">
			<button
				on:click={swapUnits}
				class="p-3 bg-gray-100 dark:bg-dark-700 rounded-full hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
				aria-label={t('unit.swap')}
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600 dark:text-dark-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
				</svg>
			</button>
		</div>

		<!-- To -->
		<div>
			<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('unit.to')}</label>
			<div class="flex gap-2">
				<div class="flex-1 px-4 py-3 bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl text-xl font-bold text-violet-600 dark:text-violet-400">
					{formatNumber(convertedValue)}
				</div>
				<select
					bind:value={toUnit}
					class="px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
				>
					{#each currentUnits as unit}
						<option value={unit.value}>{unit.label}</option>
					{/each}
				</select>
			</div>
		</div>

		<!-- Conversion Formula -->
		<div class="mt-6 p-4 bg-gray-50 dark:bg-dark-700 rounded-xl text-center">
			<span class="text-gray-600 dark:text-dark-400">
				{fromValue} {currentUnits.find(u => u.value === fromUnit)?.label} = {formatNumber(convertedValue)} {currentUnits.find(u => u.value === toUnit)?.label}
			</span>
		</div>
	</div>
</div>
