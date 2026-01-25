<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	interface Position {
		id: number;
		startDate: string;
		endDate: string;
		isCurrent: boolean;
	}

	let positions: Position[] = [
		{ id: 1, startDate: '2020-01-01', endDate: '', isCurrent: true }
	];

	let nextId = 2;

	function addPosition() {
		positions = [...positions, { id: nextId++, startDate: '', endDate: '', isCurrent: false }];
	}

	function removePosition(id: number) {
		positions = positions.filter(p => p.id !== id);
	}

	function toggleCurrent(id: number) {
		positions = positions.map(p => ({
			...p,
			isCurrent: p.id === id ? !p.isCurrent : p.isCurrent,
			endDate: p.id === id && !p.isCurrent ? '' : p.endDate
		}));
	}

	function calculateExperience(positions: Position[]): { years: number; months: number; days: number } {
		let totalDays = 0;
		const today = new Date();

		for (const pos of positions) {
			if (!pos.startDate) continue;

			const start = new Date(pos.startDate);
			const end = pos.isCurrent ? today : (pos.endDate ? new Date(pos.endDate) : today);

			if (end >= start) {
				const diff = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
				totalDays += diff;
			}
		}

		const years = Math.floor(totalDays / 365);
		const months = Math.floor((totalDays % 365) / 30);
		const days = totalDays % 30;

		return { years, months, days };
	}

	$: experience = calculateExperience(positions);
</script>

<svelte:head>
	<title>{t('career.title')} - SD.gy</title>
	<meta name="description" content={t('career.desc')} />
</svelte:head>

<div class="max-w-2xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('career.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('career.desc')}</p>
	</div>

	<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
		<!-- Positions -->
		<div class="space-y-6">
			{#each positions as pos, i (pos.id)}
				<div class="p-4 bg-gray-50 dark:bg-dark-700 rounded-xl relative">
					<div class="flex items-center justify-between mb-4">
						<span class="text-sm font-medium text-gray-700 dark:text-dark-300">
							{t('career.position')} {i + 1}
						</span>
						{#if positions.length > 1}
							<button
								on:click={() => removePosition(pos.id)}
								class="text-red-500 hover:text-red-600 text-sm"
							>
								{t('career.removePosition')}
							</button>
						{/if}
					</div>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('career.startDate')}</label>
							<input
								type="date"
								bind:value={pos.startDate}
								class="w-full px-4 py-3 bg-white dark:bg-dark-600 border border-gray-200 dark:border-dark-500 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500"
							/>
						</div>
						<div>
							<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('career.endDate')}</label>
							{#if pos.isCurrent}
								<div class="px-4 py-3 bg-violet-100 dark:bg-violet-500/20 border border-violet-200 dark:border-violet-500/30 rounded-xl text-violet-600 dark:text-violet-300 text-center">
									{t('career.current')}
								</div>
							{:else}
								<input
									type="date"
									bind:value={pos.endDate}
									class="w-full px-4 py-3 bg-white dark:bg-dark-600 border border-gray-200 dark:border-dark-500 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500"
								/>
							{/if}
						</div>
					</div>

					<label class="flex items-center gap-2 mt-4 cursor-pointer">
						<input
							type="checkbox"
							checked={pos.isCurrent}
							on:change={() => toggleCurrent(pos.id)}
							class="w-4 h-4 text-violet-500 rounded focus:ring-violet-500"
						/>
						<span class="text-sm text-gray-600 dark:text-dark-400">{t('career.current')}</span>
					</label>
				</div>
			{/each}
		</div>

		<!-- Add Position Button -->
		<button
			on:click={addPosition}
			class="w-full mt-4 py-3 border-2 border-dashed border-gray-300 dark:border-dark-600 rounded-xl text-gray-500 dark:text-dark-400 hover:border-violet-400 hover:text-violet-500 transition-colors"
		>
			+ {t('career.addPosition')}
		</button>

		<!-- Results -->
		<div class="mt-6 bg-violet-50 dark:bg-violet-500/10 rounded-xl p-6 text-center">
			<p class="text-sm text-gray-600 dark:text-dark-400 mb-2">{t('career.totalExperience')}</p>
			<div class="text-4xl font-bold text-violet-500">
				{#if experience.years > 0}
					<span>{experience.years}</span>
					<span class="text-lg font-normal">{lang === 'ko' ? '년' : lang === 'ja' ? '年' : lang === 'zh' ? '年' : 'y'}</span>
				{/if}
				{#if experience.months > 0 || experience.years > 0}
					<span class="ml-2">{experience.months}</span>
					<span class="text-lg font-normal">{lang === 'ko' ? '개월' : lang === 'ja' ? 'ヶ月' : lang === 'zh' ? '个月' : 'm'}</span>
				{/if}
				{#if experience.days > 0 || (experience.years === 0 && experience.months === 0)}
					<span class="ml-2">{experience.days}</span>
					<span class="text-lg font-normal">{lang === 'ko' ? '일' : lang === 'ja' ? '日' : lang === 'zh' ? '天' : 'd'}</span>
				{/if}
			</div>
		</div>
	</div>
</div>
