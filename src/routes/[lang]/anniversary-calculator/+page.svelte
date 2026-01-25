<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let startDate = '';
	const today = new Date();

	$: daysSince = startDate
		? Math.floor((today.getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24))
		: 0;

	interface Anniversary {
		label: string;
		date: Date;
		daysLeft: number;
	}

	function calculateAnniversaries(start: string): Anniversary[] {
		if (!start) return [];

		const startDateObj = new Date(start);
		const results: Anniversary[] = [];
		const now = new Date();

		// Day anniversaries (100, 200, 300, 500, 1000, etc.)
		const dayMilestones = [100, 200, 300, 365, 500, 1000, 2000, 3000, 5000, 10000];
		for (const days of dayMilestones) {
			const date = new Date(startDateObj);
			date.setDate(date.getDate() + days);
			const daysLeft = Math.floor((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
			if (daysLeft >= 0 && daysLeft <= 365) {
				results.push({
					label: `${days}${t('anniversary.daysAnniversary')}`,
					date,
					daysLeft
				});
			}
		}

		// Month anniversaries (1-12 months)
		for (let m = 1; m <= 12; m++) {
			const date = new Date(startDateObj);
			date.setMonth(date.getMonth() + m);
			const daysLeft = Math.floor((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
			if (daysLeft >= 0 && daysLeft <= 365) {
				results.push({
					label: `${m}${t('anniversary.monthsAnniversary')}`,
					date,
					daysLeft
				});
			}
		}

		// Year anniversaries (1-10 years)
		for (let y = 1; y <= 10; y++) {
			const date = new Date(startDateObj);
			date.setFullYear(date.getFullYear() + y);
			const daysLeft = Math.floor((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
			if (daysLeft >= 0 && daysLeft <= 730) {
				results.push({
					label: `${y}${t('anniversary.yearsAnniversary')}`,
					date,
					daysLeft
				});
			}
		}

		// Sort by days left
		return results.sort((a, b) => a.daysLeft - b.daysLeft).slice(0, 10);
	}

	$: anniversaries = calculateAnniversaries(startDate);

	function formatDate(date: Date): string {
		return date.toLocaleDateString(
			lang === 'ko' ? 'ko-KR' : lang === 'ja' ? 'ja-JP' : lang === 'zh' ? 'zh-CN' : 'en-US',
			{ year: 'numeric', month: 'long', day: 'numeric' }
		);
	}
</script>

<svelte:head>
	<title>{t('anniversary.title')} - SD.gy</title>
	<meta name="description" content={t('anniversary.desc')} />
</svelte:head>

<div class="max-w-2xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('anniversary.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('anniversary.desc')}</p>
	</div>

	<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
		<!-- Start Date -->
		<div class="mb-6">
			<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('anniversary.startDate')}</label>
			<input
				type="date"
				bind:value={startDate}
				class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 text-lg"
			/>
		</div>

		<!-- Days Since -->
		{#if startDate}
			<div class="bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl p-6 text-center text-white mb-6">
				<p class="text-sm opacity-90 mb-1">{t('anniversary.daysSince')}</p>
				<p class="text-5xl font-bold">{daysSince.toLocaleString()}</p>
				<p class="text-sm opacity-90 mt-1">{t('anniversary.days')}</p>
			</div>

			<!-- Upcoming Anniversaries -->
			{#if anniversaries.length > 0}
				<div class="mt-6">
					<h3 class="text-sm font-semibold text-gray-700 dark:text-dark-300 mb-4">{t('anniversary.upcoming')}</h3>
					<div class="space-y-3">
						{#each anniversaries as ann}
							<div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-700 rounded-xl">
								<div>
									<p class="font-semibold text-gray-900 dark:text-dark-100">{ann.label}</p>
									<p class="text-sm text-gray-500 dark:text-dark-400">{formatDate(ann.date)}</p>
								</div>
								<div class="text-right">
									{#if ann.daysLeft === 0}
										<span class="px-3 py-1 bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
											{lang === 'ko' ? '오늘!' : lang === 'ja' ? '今日！' : lang === 'zh' ? '今天！' : 'Today!'}
										</span>
									{:else}
										<p class="text-2xl font-bold text-violet-500">{ann.daysLeft}</p>
										<p class="text-xs text-gray-500 dark:text-dark-400">{t('anniversary.daysLeft')}</p>
									{/if}
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/if}
		{/if}
	</div>
</div>
