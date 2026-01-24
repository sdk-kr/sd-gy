<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let birthdate = '1990-01-01';

	$: age = calculateAge(birthdate);

	function calculateAge(birthStr: string) {
		const birth = new Date(birthStr);
		const today = new Date();

		let years = today.getFullYear() - birth.getFullYear();
		let months = today.getMonth() - birth.getMonth();
		let days = today.getDate() - birth.getDate();

		if (days < 0) {
			months--;
			const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
			days += lastMonth.getDate();
		}

		if (months < 0) {
			years--;
			months += 12;
		}

		// Total calculations
		const totalDays = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
		const totalWeeks = Math.floor(totalDays / 7);
		const totalMonths = years * 12 + months;

		// Next birthday
		let nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
		if (nextBirthday <= today) {
			nextBirthday = new Date(today.getFullYear() + 1, birth.getMonth(), birth.getDate());
		}
		const daysUntilBirthday = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

		return {
			years,
			months,
			days,
			totalDays,
			totalWeeks,
			totalMonths,
			daysUntilBirthday,
			nextBirthday: nextBirthday.toISOString().split('T')[0]
		};
	}

	function formatDate(dateStr: string): string {
		const date = new Date(dateStr);
		const options: Intl.DateTimeFormatOptions = {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		};
		const locale = lang === 'ko' ? 'ko-KR' : lang === 'ja' ? 'ja-JP' : lang === 'zh' ? 'zh-CN' : 'en-US';
		return date.toLocaleDateString(locale, options);
	}
</script>

<svelte:head>
	<title>{t('age.title')} - SD.gy</title>
	<meta name="description" content={t('age.desc')} />
</svelte:head>

<div class="max-w-2xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('age.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('age.desc')}</p>
	</div>

	<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
		<!-- Birthdate Input -->
		<div class="mb-6">
			<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('age.birthdate')}</label>
			<input
				type="date"
				bind:value={birthdate}
				max={new Date().toISOString().split('T')[0]}
				class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent text-lg"
			/>
		</div>

		<!-- Current Age -->
		<div class="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-6 mb-6">
			<h3 class="text-sm text-gray-600 dark:text-dark-400 mb-2">{t('age.currentAge')}</h3>
			<div class="text-4xl font-bold text-violet-600 dark:text-violet-400">
				{age.years}
				<span class="text-lg font-normal">{t('date.years')}</span>
				{age.months}
				<span class="text-lg font-normal">{t('date.months')}</span>
				{age.days}
				<span class="text-lg font-normal">{t('date.days')}</span>
			</div>
		</div>

		<!-- Next Birthday -->
		<div class="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-4 mb-6">
			<h3 class="text-sm text-gray-600 dark:text-dark-400 mb-1">{t('age.nextBirthday')}</h3>
			<div class="flex items-center justify-between">
				<span class="text-gray-900 dark:text-dark-100">{formatDate(age.nextBirthday)}</span>
				<span class="text-pink-600 dark:text-pink-400 font-semibold">
					{age.daysUntilBirthday} {t('age.daysUntil')}
				</span>
			</div>
		</div>

		<!-- Statistics -->
		<div class="grid grid-cols-3 gap-4">
			<div class="bg-gray-50 dark:bg-dark-700 rounded-xl p-4 text-center">
				<div class="text-2xl font-bold text-gray-900 dark:text-dark-100">{age.totalDays.toLocaleString()}</div>
				<div class="text-sm text-gray-500 dark:text-dark-400">{t('age.totalDays')}</div>
			</div>
			<div class="bg-gray-50 dark:bg-dark-700 rounded-xl p-4 text-center">
				<div class="text-2xl font-bold text-gray-900 dark:text-dark-100">{age.totalWeeks.toLocaleString()}</div>
				<div class="text-sm text-gray-500 dark:text-dark-400">{t('age.totalWeeks')}</div>
			</div>
			<div class="bg-gray-50 dark:bg-dark-700 rounded-xl p-4 text-center">
				<div class="text-2xl font-bold text-gray-900 dark:text-dark-100">{age.totalMonths.toLocaleString()}</div>
				<div class="text-sm text-gray-500 dark:text-dark-400">{t('age.totalMonths')}</div>
			</div>
		</div>
	</div>
</div>
