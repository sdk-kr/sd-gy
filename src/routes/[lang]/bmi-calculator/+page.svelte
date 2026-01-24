<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let height = 170; // cm
	let weight = 70; // kg

	$: bmi = weight / Math.pow(height / 100, 2);
	$: bmiCategory = getBmiCategory(bmi);
	$: bmiColor = getBmiColor(bmi);

	function getBmiCategory(bmi: number): string {
		if (bmi < 18.5) return t('bmi.underweight');
		if (bmi < 25) return t('bmi.normal');
		if (bmi < 30) return t('bmi.overweight');
		return t('bmi.obese');
	}

	function getBmiColor(bmi: number): string {
		if (bmi < 18.5) return 'text-blue-500';
		if (bmi < 25) return 'text-green-500';
		if (bmi < 30) return 'text-yellow-500';
		return 'text-red-500';
	}

	function getBmiBarPosition(bmi: number): number {
		// Scale BMI to percentage (15-40 range)
		const min = 15;
		const max = 40;
		const clamped = Math.min(Math.max(bmi, min), max);
		return ((clamped - min) / (max - min)) * 100;
	}

	const bmiRanges = [
		{ label: 'bmi.underweight', range: '< 18.5', color: 'bg-blue-400' },
		{ label: 'bmi.normal', range: '18.5 - 24.9', color: 'bg-green-400' },
		{ label: 'bmi.overweight', range: '25 - 29.9', color: 'bg-yellow-400' },
		{ label: 'bmi.obese', range: '>= 30', color: 'bg-red-400' }
	];
</script>

<svelte:head>
	<title>{t('bmi.title')} - SD.gy</title>
	<meta name="description" content={t('bmi.desc')} />
</svelte:head>

<div class="max-w-2xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('bmi.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('bmi.desc')}</p>
	</div>

	<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
		<!-- Input Fields -->
		<div class="grid grid-cols-2 gap-4 mb-6">
			<div>
				<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('bmi.height')} (cm)</label>
				<input
					type="number"
					bind:value={height}
					min="100"
					max="250"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent text-lg"
				/>
				<input
					type="range"
					bind:value={height}
					min="100"
					max="250"
					class="w-full mt-2 accent-violet-500"
				/>
			</div>
			<div>
				<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('bmi.weight')} (kg)</label>
				<input
					type="number"
					bind:value={weight}
					min="30"
					max="200"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent text-lg"
				/>
				<input
					type="range"
					bind:value={weight}
					min="30"
					max="200"
					class="w-full mt-2 accent-violet-500"
				/>
			</div>
		</div>

		<!-- BMI Result -->
		<div class="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 mb-6">
			<h3 class="text-sm text-gray-600 dark:text-dark-400 mb-2">{t('bmi.yourBmi')}</h3>
			<div class="flex items-baseline gap-3">
				<span class="text-5xl font-bold {bmiColor}">{bmi.toFixed(1)}</span>
				<span class="text-xl {bmiColor}">{bmiCategory}</span>
			</div>
		</div>

		<!-- BMI Scale -->
		<div class="mb-6">
			<div class="relative h-4 rounded-full overflow-hidden flex">
				<div class="flex-1 bg-blue-400"></div>
				<div class="flex-1 bg-green-400"></div>
				<div class="flex-1 bg-yellow-400"></div>
				<div class="flex-1 bg-red-400"></div>
			</div>
			<div
				class="relative -mt-1"
				style="left: {getBmiBarPosition(bmi)}%"
			>
				<div class="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-gray-900 dark:border-b-white transform -translate-x-1/2"></div>
			</div>
			<div class="flex justify-between text-xs text-gray-500 dark:text-dark-400 mt-2">
				<span>15</span>
				<span>18.5</span>
				<span>25</span>
				<span>30</span>
				<span>40</span>
			</div>
		</div>

		<!-- BMI Ranges -->
		<div>
			<h3 class="text-sm text-gray-600 dark:text-dark-400 mb-3">{t('bmi.range')}</h3>
			<div class="grid grid-cols-2 gap-2">
				{#each bmiRanges as range}
					<div class="flex items-center gap-2 p-2 rounded-lg bg-gray-50 dark:bg-dark-700">
						<div class="w-3 h-3 rounded-full {range.color}"></div>
						<span class="text-sm text-gray-700 dark:text-dark-300">{t(range.label)}</span>
						<span class="text-xs text-gray-500 dark:text-dark-400 ml-auto">{range.range}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
