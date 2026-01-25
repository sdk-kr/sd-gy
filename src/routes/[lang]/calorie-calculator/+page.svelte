<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let age = 30;
	let gender: 'male' | 'female' = 'male';
	let height = 170; // cm
	let weight = 70; // kg
	let activity = 1.55; // moderate

	const activityLevels = [
		{ value: 1.2, label: 'calorie.sedentary' },
		{ value: 1.375, label: 'calorie.light' },
		{ value: 1.55, label: 'calorie.moderate' },
		{ value: 1.725, label: 'calorie.active' },
		{ value: 1.9, label: 'calorie.veryActive' }
	];

	// Mifflin-St Jeor Equation
	$: bmr = gender === 'male'
		? 10 * weight + 6.25 * height - 5 * age + 5
		: 10 * weight + 6.25 * height - 5 * age - 161;

	$: tdee = bmr * activity;
	$: weightLoss = tdee - 500;
	$: weightGain = tdee + 500;
</script>

<svelte:head>
	<title>{t('calorie.title')} - SD.gy</title>
	<meta name="description" content={t('calorie.desc')} />
</svelte:head>

<div class="max-w-2xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('calorie.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('calorie.desc')}</p>
	</div>

	<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
		<!-- Gender Selection -->
		<div class="mb-6">
			<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('calorie.gender')}</label>
			<div class="grid grid-cols-2 gap-3">
				<button
					class="px-4 py-3 rounded-xl font-medium transition-colors {gender === 'male' ? 'bg-violet-500 text-white' : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300'}"
					on:click={() => gender = 'male'}
				>
					{t('calorie.male')}
				</button>
				<button
					class="px-4 py-3 rounded-xl font-medium transition-colors {gender === 'female' ? 'bg-violet-500 text-white' : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300'}"
					on:click={() => gender = 'female'}
				>
					{t('calorie.female')}
				</button>
			</div>
		</div>

		<!-- Input Fields -->
		<div class="grid grid-cols-2 gap-4 mb-6">
			<div>
				<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('calorie.age')}</label>
				<input
					type="number"
					bind:value={age}
					min="15"
					max="100"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 text-lg"
				/>
			</div>
			<div>
				<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('bmi.height')} (cm)</label>
				<input
					type="number"
					bind:value={height}
					min="100"
					max="250"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 text-lg"
				/>
			</div>
			<div class="col-span-2">
				<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('bmi.weight')} (kg)</label>
				<input
					type="number"
					bind:value={weight}
					min="30"
					max="200"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 text-lg"
				/>
			</div>
		</div>

		<!-- Activity Level -->
		<div class="mb-6">
			<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('calorie.activity')}</label>
			<select
				bind:value={activity}
				class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 text-lg"
			>
				{#each activityLevels as level}
					<option value={level.value}>{t(level.label)}</option>
				{/each}
			</select>
		</div>

		<!-- Results -->
		<div class="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 space-y-4">
			<div class="text-center pb-4 border-b border-gray-200 dark:border-dark-600">
				<p class="text-sm text-gray-600 dark:text-dark-400 mb-1">{t('calorie.bmr')}</p>
				<p class="text-2xl font-bold text-gray-900 dark:text-dark-100">{Math.round(bmr)} kcal</p>
			</div>

			<div class="text-center pb-4 border-b border-gray-200 dark:border-dark-600">
				<p class="text-sm text-gray-600 dark:text-dark-400 mb-1">{t('calorie.maintenance')}</p>
				<p class="text-3xl font-bold text-violet-500">{Math.round(tdee)} kcal</p>
			</div>

			<div class="grid grid-cols-2 gap-4 pt-2">
				<div class="text-center">
					<p class="text-sm text-gray-600 dark:text-dark-400 mb-1">{t('calorie.lose')}</p>
					<p class="text-xl font-semibold text-blue-500">{Math.round(weightLoss)} kcal</p>
				</div>
				<div class="text-center">
					<p class="text-sm text-gray-600 dark:text-dark-400 mb-1">{t('calorie.gain')}</p>
					<p class="text-xl font-semibold text-green-500">{Math.round(weightGain)} kcal</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Info Section -->
	<div class="mt-8 bg-yellow-50 dark:bg-dark-800 rounded-xl p-6 border border-yellow-200 dark:border-dark-700">
		<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-3">{t('calorie.info')}</h2>
		<p class="text-sm text-gray-600 dark:text-dark-400">{t('calorie.infoText')}</p>
	</div>
</div>
