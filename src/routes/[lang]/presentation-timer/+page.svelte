<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import AdSense from '$lib/components/AdSense.svelte';
	import { onDestroy } from 'svelte';

	$: lang = ($page.params.lang || 'en') as Locale;

	const translations: Record<string, Record<string, string>> = {
		en: {
			title: 'Presentation Timer',
			desc: 'Calculate speech duration from text and practice with a countdown timer.',
			textInput: 'Speech Text',
			textPlaceholder: 'Paste your speech or presentation text here...',
			manualInput: 'Or enter count manually',
			wordCount: 'Word Count',
			charCount: 'Character Count',
			countLang: 'Counting Method',
			english: 'English (words)',
			asian: 'Asian (characters)',
			speed: 'Speaking Speed',
			slow: 'Slow',
			normal: 'Normal',
			fast: 'Fast',
			wpm: 'wpm',
			cpm: 'cpm',
			slides: 'Slide Count',
			slideTime: 'Minutes per Slide',
			results: 'Estimated Duration',
			totalWords: 'Total Words',
			totalChars: 'Total Characters',
			speakingRate: 'Speaking Rate',
			textTime: 'Text Duration',
			slideTimeLabel: 'Slide Duration',
			totalTime: 'Total Estimated Time',
			practice: 'Practice Timer',
			start: 'Start',
			stop: 'Stop',
			reset: 'Reset',
			timeUp: 'Time is up!',
			useSlides: 'Include slide time',
			breakdown: 'Time Breakdown'
		},
		ko: {
			title: '발표시간 계산기',
			desc: '텍스트로 발표 시간을 계산하고 카운트다운 타이머로 연습하세요.',
			textInput: '발표 텍스트',
			textPlaceholder: '발표 또는 연설 텍스트를 붙여넣으세요...',
			manualInput: '또는 직접 입력',
			wordCount: '단어 수',
			charCount: '글자 수',
			countLang: '계산 방식',
			english: '영어 (단어)',
			asian: '아시아어 (글자)',
			speed: '말하기 속도',
			slow: '느림',
			normal: '보통',
			fast: '빠름',
			wpm: '단어/분',
			cpm: '글자/분',
			slides: '슬라이드 수',
			slideTime: '슬라이드당 시간(분)',
			results: '예상 소요 시간',
			totalWords: '총 단어 수',
			totalChars: '총 글자 수',
			speakingRate: '말하기 속도',
			textTime: '텍스트 소요 시간',
			slideTimeLabel: '슬라이드 소요 시간',
			totalTime: '총 예상 시간',
			practice: '연습 타이머',
			start: '시작',
			stop: '정지',
			reset: '초기화',
			timeUp: '시간 종료!',
			useSlides: '슬라이드 시간 포함',
			breakdown: '시간 분석'
		},
		ja: {
			title: 'プレゼン時間計算',
			desc: 'テキストからスピーチ時間を計算し、カウントダウンタイマーで練習しましょう。',
			textInput: 'スピーチテキスト',
			textPlaceholder: 'スピーチやプレゼンのテキストを貼り付けてください...',
			manualInput: 'または手動で入力',
			wordCount: '単語数',
			charCount: '文字数',
			countLang: 'カウント方法',
			english: '英語（単語）',
			asian: 'アジア語（文字）',
			speed: '話す速度',
			slow: 'ゆっくり',
			normal: '普通',
			fast: '速い',
			wpm: '語/分',
			cpm: '字/分',
			slides: 'スライド数',
			slideTime: 'スライドあたりの時間（分）',
			results: '推定所要時間',
			totalWords: '総単語数',
			totalChars: '総文字数',
			speakingRate: '話す速度',
			textTime: 'テキスト所要時間',
			slideTimeLabel: 'スライド所要時間',
			totalTime: '合計推定時間',
			practice: '練習タイマー',
			start: 'スタート',
			stop: 'ストップ',
			reset: 'リセット',
			timeUp: '時間切れ！',
			useSlides: 'スライド時間を含む',
			breakdown: '時間内訳'
		},
		zh: {
			title: '演讲时间计算器',
			desc: '从文本计算演讲时间，并使用倒计时器进行练习。',
			textInput: '演讲文本',
			textPlaceholder: '在此粘贴您的演讲或演示文本...',
			manualInput: '或手动输入',
			wordCount: '单词数',
			charCount: '字符数',
			countLang: '计算方式',
			english: '英语（单词）',
			asian: '亚洲语言（字符）',
			speed: '语速',
			slow: '慢',
			normal: '正常',
			fast: '快',
			wpm: '词/分',
			cpm: '字/分',
			slides: '幻灯片数',
			slideTime: '每张幻灯片时间（分钟）',
			results: '预计时长',
			totalWords: '总单词数',
			totalChars: '总字符数',
			speakingRate: '语速',
			textTime: '文本时长',
			slideTimeLabel: '幻灯片时长',
			totalTime: '总预计时间',
			practice: '练习计时器',
			start: '开始',
			stop: '停止',
			reset: '重置',
			timeUp: '时间到！',
			useSlides: '包含幻灯片时间',
			breakdown: '时间分析'
		}
	};

	$: t = (key: string) => translations[lang]?.[key] || translations['en'][key] || key;

	// State
	let text = '';
	let manualCount = 0;
	let useManual = false;
	let countMode: 'words' | 'chars' = lang === 'ko' || lang === 'ja' || lang === 'zh' ? 'chars' : 'words';
	let speedLevel: 'slow' | 'normal' | 'fast' = 'normal';
	let slideCount = 0;
	let minutesPerSlide = 3;
	let useSlides = false;

	// Timer
	let timerSeconds = 0;
	let timerRunning = false;
	let timerInterval: ReturnType<typeof setInterval> | null = null;
	let timeUp = false;

	const speeds: Record<string, { wpm: number; cpm: number }> = {
		slow: { wpm: 100, cpm: 200 },
		normal: { wpm: 130, cpm: 270 },
		fast: { wpm: 160, cpm: 340 }
	};

	$: wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
	$: charCount = text.trim() ? text.replace(/\s/g, '').length : 0;
	$: activeCount = useManual ? manualCount : (countMode === 'words' ? wordCount : charCount);
	$: currentSpeed = countMode === 'words' ? speeds[speedLevel].wpm : speeds[speedLevel].cpm;
	$: speedUnit = countMode === 'words' ? t('wpm') : t('cpm');
	$: textTimeSeconds = activeCount > 0 ? Math.round((activeCount / currentSpeed) * 60) : 0;
	$: slideTimeSeconds = useSlides ? slideCount * minutesPerSlide * 60 : 0;
	$: totalTimeSeconds = textTimeSeconds + slideTimeSeconds;

	function formatTime(seconds: number): string {
		const m = Math.floor(seconds / 60);
		const s = seconds % 60;
		return `${m}:${s.toString().padStart(2, '0')}`;
	}

	function startTimer() {
		if (totalTimeSeconds <= 0) return;
		if (!timerRunning) {
			if (timerSeconds <= 0) timerSeconds = totalTimeSeconds;
			timeUp = false;
			timerRunning = true;
			timerInterval = setInterval(() => {
				if (timerSeconds > 0) {
					timerSeconds--;
				} else {
					stopTimer();
					timeUp = true;
				}
			}, 1000);
		}
	}

	function stopTimer() {
		timerRunning = false;
		if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
	}

	function resetTimer() {
		stopTimer();
		timerSeconds = totalTimeSeconds;
		timeUp = false;
	}

	onDestroy(() => { if (timerInterval) clearInterval(timerInterval); });
</script>

<svelte:head>
	<title>{t('title')} - SD.gy</title>
	<meta name="description" content={t('desc')} />
	<link rel="canonical" href="https://sd.gy/{lang}/presentation-timer" />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('desc')}</p>
	</div>

	<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
		<!-- Left: Input -->
		<div class="space-y-6">
			<!-- Text Input -->
			<div class="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl p-6">
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('textInput')}</label>
				<textarea
					bind:value={text}
					placeholder={t('textPlaceholder')}
					rows="6"
					disabled={useManual}
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 placeholder-gray-400 dark:placeholder-dark-500 focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none disabled:opacity-50"
				></textarea>
				<div class="mt-4">
					<label class="flex items-center gap-2 text-sm text-gray-600 dark:text-dark-400 cursor-pointer">
						<input type="checkbox" bind:checked={useManual} class="rounded border-gray-300 dark:border-dark-600 text-violet-500 focus:ring-violet-500" />
						{t('manualInput')}
					</label>
					{#if useManual}
						<input
							type="number"
							bind:value={manualCount}
							min="0"
							class="mt-2 w-full px-4 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
							placeholder={countMode === 'words' ? t('wordCount') : t('charCount')}
						/>
					{/if}
				</div>
			</div>

			<!-- Counting Method -->
			<div class="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl p-6">
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-3">{t('countLang')}</label>
				<div class="flex gap-3">
					<button on:click={() => countMode = 'words'} class="flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors {countMode === 'words' ? 'bg-violet-500 text-white' : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}">
						{t('english')}
					</button>
					<button on:click={() => countMode = 'chars'} class="flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors {countMode === 'chars' ? 'bg-violet-500 text-white' : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}">
						{t('asian')}
					</button>
				</div>
			</div>

			<!-- Speaking Speed -->
			<div class="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl p-6">
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-3">{t('speed')}</label>
				<div class="flex gap-3">
					{#each ['slow', 'normal', 'fast'] as level}
						<button
							on:click={() => speedLevel = level}
							class="flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors {speedLevel === level ? 'bg-violet-500 text-white' : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
						>
							<div>{t(level)}</div>
							<div class="text-xs mt-1 opacity-75">
								{countMode === 'words' ? speeds[level].wpm : speeds[level].cpm} {speedUnit}
							</div>
						</button>
					{/each}
				</div>
			</div>

			<!-- Slides -->
			<div class="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl p-6">
				<label class="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-dark-300 mb-3 cursor-pointer">
					<input type="checkbox" bind:checked={useSlides} class="rounded border-gray-300 dark:border-dark-600 text-violet-500 focus:ring-violet-500" />
					{t('useSlides')}
				</label>
				{#if useSlides}
					<div class="grid grid-cols-2 gap-4">
						<div>
							<label class="block text-xs text-gray-500 dark:text-dark-400 mb-1">{t('slides')}</label>
							<input type="number" bind:value={slideCount} min="0" class="w-full px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent" />
						</div>
						<div>
							<label class="block text-xs text-gray-500 dark:text-dark-400 mb-1">{t('slideTime')}</label>
							<input type="number" bind:value={minutesPerSlide} min="1" max="10" class="w-full px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent" />
						</div>
					</div>
				{/if}
			</div>
		</div>

		<!-- Right: Results & Timer -->
		<div class="space-y-6">
			<!-- Results -->
			<div class="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl p-6">
				<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">{t('results')}</h2>
				<div class="text-center py-6 mb-4 bg-violet-50 dark:bg-violet-500/10 rounded-xl">
					<div class="text-5xl font-bold text-violet-600 dark:text-violet-400 font-mono">{formatTime(totalTimeSeconds)}</div>
					<div class="text-sm text-violet-500 mt-2">{t('totalTime')}</div>
				</div>
				<h3 class="text-sm font-medium text-gray-700 dark:text-dark-300 mb-3">{t('breakdown')}</h3>
				<div class="space-y-3">
					<div class="flex justify-between items-center py-2 border-b border-gray-100 dark:border-dark-700">
						<span class="text-sm text-gray-600 dark:text-dark-400">{countMode === 'words' ? t('totalWords') : t('totalChars')}</span>
						<span class="font-medium text-gray-900 dark:text-dark-100">{activeCount.toLocaleString()}</span>
					</div>
					<div class="flex justify-between items-center py-2 border-b border-gray-100 dark:border-dark-700">
						<span class="text-sm text-gray-600 dark:text-dark-400">{t('speakingRate')}</span>
						<span class="font-medium text-gray-900 dark:text-dark-100">{currentSpeed} {speedUnit}</span>
					</div>
					<div class="flex justify-between items-center py-2 border-b border-gray-100 dark:border-dark-700">
						<span class="text-sm text-gray-600 dark:text-dark-400">{t('textTime')}</span>
						<span class="font-medium text-gray-900 dark:text-dark-100">{formatTime(textTimeSeconds)}</span>
					</div>
					{#if useSlides}
						<div class="flex justify-between items-center py-2 border-b border-gray-100 dark:border-dark-700">
							<span class="text-sm text-gray-600 dark:text-dark-400">{t('slideTimeLabel')}</span>
							<span class="font-medium text-gray-900 dark:text-dark-100">{formatTime(slideTimeSeconds)}</span>
						</div>
					{/if}
				</div>
			</div>

			<!-- Practice Timer -->
			<div class="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl p-6">
				<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">{t('practice')}</h2>
				<div class="text-center py-6 mb-4 rounded-xl {timeUp ? 'bg-red-50 dark:bg-red-500/10' : 'bg-gray-50 dark:bg-dark-700'}">
					<div class="text-5xl font-bold font-mono {timeUp ? 'text-red-500' : timerRunning ? 'text-green-500' : 'text-gray-900 dark:text-dark-100'}">
						{formatTime(timerSeconds > 0 ? timerSeconds : totalTimeSeconds)}
					</div>
					{#if timeUp}
						<div class="text-sm text-red-500 mt-2 font-medium">{t('timeUp')}</div>
					{/if}
				</div>
				<div class="flex gap-3">
					{#if !timerRunning}
						<button on:click={startTimer} disabled={totalTimeSeconds <= 0} class="flex-1 py-3 px-4 bg-violet-500 hover:bg-violet-600 disabled:bg-gray-300 dark:disabled:bg-dark-600 text-white rounded-xl font-medium transition-colors disabled:cursor-not-allowed">
							{t('start')}
						</button>
					{:else}
						<button on:click={stopTimer} class="flex-1 py-3 px-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-medium transition-colors">
							{t('stop')}
						</button>
					{/if}
					<button on:click={resetTimer} class="py-3 px-6 bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-700 dark:text-dark-300 rounded-xl font-medium transition-colors">
						{t('reset')}
					</button>
				</div>
			</div>
		</div>
	</div>

	<div class="mt-8">
		<AdSense type="horizontal" />
	</div>
</div>
