<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let participants = ['A', 'B', 'C', 'D'];
	let results = ['1', '2', '3', '4'];
	let newParticipant = '';
	let newResult = '';
	let gameResult: { participant: string; result: string }[] = [];
	let isPlaying = false;

	function addParticipant() {
		if (newParticipant.trim() && participants.length < 10) {
			participants = [...participants, newParticipant.trim()];
			newParticipant = '';
		}
	}

	function removeParticipant(index: number) {
		if (participants.length > 2) {
			participants = participants.filter((_, i) => i !== index);
		}
	}

	function addResult() {
		if (newResult.trim() && results.length < 10) {
			results = [...results, newResult.trim()];
			newResult = '';
		}
	}

	function removeResult(index: number) {
		if (results.length > 2) {
			results = results.filter((_, i) => i !== index);
		}
	}

	async function startGame() {
		if (participants.length !== results.length) {
			alert(lang === 'ko' ? '참가자 수와 결과 수가 같아야 합니다.' :
				lang === 'ja' ? '参加者数と結果数は同じである必要があります。' :
				lang === 'zh' ? '参与者数量必须与结果数量相同。' :
				'Number of participants must match number of results.');
			return;
		}

		isPlaying = true;
		gameResult = [];

		// Shuffle results
		const shuffledResults = [...results].sort(() => Math.random() - 0.5);

		// Animate reveal
		for (let i = 0; i < participants.length; i++) {
			await new Promise(resolve => setTimeout(resolve, 500));
			gameResult = [...gameResult, { participant: participants[i], result: shuffledResults[i] }];
		}

		isPlaying = false;
	}

	function reset() {
		gameResult = [];
	}
</script>

<svelte:head>
	<title>{t('ladder.title')} - SD.gy</title>
	<meta name="description" content={t('ladder.desc')} />
</svelte:head>

<div class="max-w-2xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('ladder.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('ladder.desc')}</p>
	</div>

	<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
		<div class="grid grid-cols-2 gap-6">
			<!-- Participants -->
			<div>
				<h3 class="text-sm font-semibold text-gray-700 dark:text-dark-300 mb-3">{t('ladder.participants')}</h3>
				<div class="space-y-2">
					{#each participants as p, i}
						<div class="flex items-center gap-2">
							<input
								type="text"
								bind:value={participants[i]}
								class="flex-1 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500"
							/>
							{#if participants.length > 2}
								<button
									on:click={() => removeParticipant(i)}
									class="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg"
								>
									<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							{/if}
						</div>
					{/each}
				</div>
				{#if participants.length < 10}
					<div class="flex items-center gap-2 mt-2">
						<input
							type="text"
							bind:value={newParticipant}
							placeholder={lang === 'ko' ? '이름 입력' : lang === 'ja' ? '名前を入力' : lang === 'zh' ? '输入名字' : 'Enter name'}
							on:keypress={(e) => e.key === 'Enter' && addParticipant()}
							class="flex-1 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500"
						/>
						<button
							on:click={addParticipant}
							class="px-4 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600"
						>
							{t('ladder.addParticipant')}
						</button>
					</div>
				{/if}
			</div>

			<!-- Results -->
			<div>
				<h3 class="text-sm font-semibold text-gray-700 dark:text-dark-300 mb-3">{t('ladder.results')}</h3>
				<div class="space-y-2">
					{#each results as r, i}
						<div class="flex items-center gap-2">
							<input
								type="text"
								bind:value={results[i]}
								class="flex-1 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500"
							/>
							{#if results.length > 2}
								<button
									on:click={() => removeResult(i)}
									class="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg"
								>
									<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							{/if}
						</div>
					{/each}
				</div>
				{#if results.length < 10}
					<div class="flex items-center gap-2 mt-2">
						<input
							type="text"
							bind:value={newResult}
							placeholder={lang === 'ko' ? '결과 입력' : lang === 'ja' ? '結果を入力' : lang === 'zh' ? '输入结果' : 'Enter result'}
							on:keypress={(e) => e.key === 'Enter' && addResult()}
							class="flex-1 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500"
						/>
						<button
							on:click={addResult}
							class="px-4 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600"
						>
							{t('ladder.addResult')}
						</button>
					</div>
				{/if}
			</div>
		</div>

		<!-- Buttons -->
		<div class="flex gap-3 mt-6">
			<button
				on:click={startGame}
				disabled={isPlaying || participants.length !== results.length}
				class="flex-1 py-3 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-xl font-semibold hover:from-violet-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
			>
				{isPlaying ? '...' : t('ladder.start')}
			</button>
			<button
				on:click={reset}
				class="px-6 py-3 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
			>
				{t('ladder.reset')}
			</button>
		</div>

		<!-- Game Result -->
		{#if gameResult.length > 0}
			<div class="mt-6">
				<h3 class="text-sm font-semibold text-gray-700 dark:text-dark-300 mb-3">{t('ladder.result')}</h3>
				<div class="space-y-3">
					{#each gameResult as gr, i}
						<div
							class="flex items-center justify-between p-4 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-500/10 dark:to-purple-500/10 rounded-xl border border-violet-200 dark:border-violet-500/20 animate-fade-in"
							style="animation-delay: {i * 100}ms"
						>
							<span class="font-semibold text-gray-900 dark:text-dark-100">{gr.participant}</span>
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
							<span class="font-bold text-violet-600 dark:text-violet-400">{gr.result}</span>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	@keyframes fade-in {
		from { opacity: 0; transform: translateY(-10px); }
		to { opacity: 1; transform: translateY(0); }
	}

	.animate-fade-in {
		animation: fade-in 0.3s ease-out forwards;
		opacity: 0;
	}
</style>
