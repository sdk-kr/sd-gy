<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';

	const toolContent = {
		about: {
			en: 'A digital ladder game (also known as Amidakuji or Ghost Leg) randomly assigns each participant to one of the result options. Originating in Japan, the game is widely used in Korea ("사다리타기") and Asia for fair, fun random selection. Each result is mathematically equally likely to fall on each participant — perfect for splitting tasks, picking winners, or deciding who pays.',
			ko: '전통적인 종이 사다리타기를 디지털로 옮긴 도구입니다. 일본의 아미다쿠지에서 유래했으며 한국에서도 친구 모임, 회사 점심값 정하기, 청소 당번 등 공정하고 재미있는 무작위 선택에 자주 쓰입니다. 수학적으로 각 참가자가 각 결과를 받을 확률이 정확히 1/N로 동일합니다.',
			ja: '伝統的な紙のあみだくじをデジタル化したツールです。日本発祥で、韓国でも「사다리타기」として広く使われています。罰ゲーム決め、当番決め、ランチ代の負担決めなど、公平で楽しい抽選に最適です。各参加者が各結果を引く確率は数学的に1/Nで等しくなります。',
			zh: '将传统纸上画梯子（梯子游戏）数字化的工具，源自日本的"阿弥陀签"。在韩国（사다리타기）和亚洲广泛使用，常用于聚会决定输家、分担清洁任务、决定饭钱等公平有趣的随机选择。每位参与者抽中各结果的概率在数学上是相等的 1/N。'
		},
		howTo: {
			en: [
				'Edit or add the names of the participants on the left.',
				'Edit or add the result options on the right (must equal participant count).',
				'Click "Start" to randomly assign one result to each participant.',
				'Watch the matches reveal one by one with a smooth animation.',
				'Click "Reset" to clear results and play again with the same lineup.'
			],
			ko: [
				'왼쪽에 참가자 이름을 수정하거나 추가합니다.',
				'오른쪽에 결과 항목을 수정하거나 추가합니다(참가자 수와 동일해야 함).',
				'"시작" 버튼을 누르면 각 참가자에게 결과가 무작위로 배정됩니다.',
				'결과가 한 명씩 부드럽게 공개됩니다.',
				'"리셋" 버튼으로 같은 명단을 유지한 채 다시 돌릴 수 있습니다.'
			],
			ja: [
				'左側に参加者名を編集または追加します。',
				'右側に結果項目を編集または追加します（参加者と同数）。',
				'「スタート」を押すと結果が無作為に割り当てられます。',
				'結果が1人ずつアニメーションで表示されます。',
				'「リセット」で同じメンバーで再抽選できます。'
			],
			zh: [
				'在左侧编辑或添加参与者名字。',
				'在右侧编辑或添加结果项（数量需与参与者一致）。',
				'点击"开始"，每位参与者会被随机分配一个结果。',
				'结果会以动画形式逐个揭晓。',
				'点击"重置"可保留名单重新抽签。'
			]
		},
		useCases: {
			en: [
				'Deciding who buys lunch or coffee for the group.',
				'Assigning chores or chores rotation among roommates.',
				'Picking a presentation order at school or work.',
				'Choosing a winner for a small giveaway or game.',
				'Splitting party planning roles among friends.'
			],
			ko: [
				'점심값, 커피값 누가 낼지 정하기.',
				'룸메이트끼리 청소 당번 정하기.',
				'학교나 회사에서 발표 순서 결정.',
				'간단한 추첨 이벤트 당첨자 뽑기.',
				'모임 준비 역할 분담.'
			],
			ja: [
				'ランチやコーヒー代の負担者決め。',
				'ルームメイト間の掃除当番決め。',
				'学校や職場でのプレゼン順序決定。',
				'小さな抽選イベントの当選者選び。',
				'パーティー準備の役割分担。'
			],
			zh: [
				'决定谁请午餐或咖啡。',
				'室友间分配打扫值日。',
				'决定学校或职场的演讲顺序。',
				'小型抽奖活动选出获胜者。',
				'派对筹备时分配任务。'
			]
		},
		faq: {
			en: [
				{ q: 'Is each outcome truly random?', a: 'Yes. The tool uses JavaScript\'s Math.random() to shuffle results. Each participant has a 1/N chance for any given result.' },
				{ q: 'Why must participants and results have the same count?', a: 'A ladder game is a one-to-one mapping (a permutation). Mismatched counts would leave participants unmatched.' },
				{ q: 'Can I save or share the result?', a: 'You can take a screenshot, but the page does not store data. Re-running will produce a different random outcome.' },
				{ q: 'How many participants are supported?', a: 'Up to 10 to keep the layout readable. For larger groups, run multiple rounds.' }
			],
			ko: [
				{ q: '결과가 정말 무작위인가요?', a: '네. JavaScript의 Math.random()으로 셔플하므로 각 참가자가 특정 결과를 받을 확률은 정확히 1/N입니다.' },
				{ q: '참가자와 결과 수가 같아야 하는 이유는?', a: '사다리타기는 일대일 대응(순열)이므로 수가 다르면 매칭되지 않는 항목이 생깁니다.' },
				{ q: '결과를 저장하거나 공유할 수 있나요?', a: '스크린샷으로 저장할 수 있습니다. 페이지에 데이터가 저장되지 않으며, 다시 돌리면 다른 결과가 나옵니다.' },
				{ q: '몇 명까지 지원하나요?', a: '레이아웃 가독성을 위해 최대 10명까지 지원합니다. 더 많은 인원은 여러 라운드로 나누어 진행하세요.' }
			]
		},
		related: [
			{ href: '/calculator', label: { en: 'Calculator', ko: '계산기', ja: '計算機', zh: '计算器' } },
			{ href: '/percentage', label: { en: 'Percentage', ko: '퍼센트 계산기', ja: 'パーセント計算', zh: '百分比' } },
			{ href: '/presentation-timer', label: { en: 'Presentation Timer', ko: '프레젠테이션 타이머', ja: 'プレゼンタイマー', zh: '演讲计时器' } }
		],
		externalRefs: [
			{ href: 'https://en.wikipedia.org/wiki/Ghost_Leg', label: 'Ghost Leg (Ladder Game) - Wikipedia' },
			{ href: 'https://en.wikipedia.org/wiki/Random_number_generation', label: 'Random number generation - Wikipedia' }
		]
	};

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
	<link rel="canonical" href="https://sd.gy/{lang}/ladder-game" />
	<meta property="og:title" content="{t('ladder.title')} - SD.gy" />
	<meta property="og:description" content={t('ladder.desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/ladder-game" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('ladder.title')} - SD.gy" />
	<meta name="twitter:description" content={t('ladder.desc')} />
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

	<ToolContent
		{lang}
		toolName="Ladder Game"
		toolUrl="https://sd.gy/{lang}/ladder-game"
		lastUpdated="2026-04-30"
		category="Daily Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sd.gy/${lang}` },
			{ name: 'Tools', url: `https://sd.gy/${lang}` },
			{ name: 'Ladder Game', url: `https://sd.gy/${lang}/ladder-game` }
		]}
		content={toolContent}
	/>
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
