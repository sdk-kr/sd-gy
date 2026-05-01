<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import AdSense from '$lib/components/AdSense.svelte';
	import ToolContent from '$lib/components/ToolContent.svelte';
	import { onDestroy } from 'svelte';

	const toolContent = {
		about: {
			en: 'Estimate how long your presentation will take by pasting the script. The tool counts words (English) or characters (Korean / Japanese / Chinese), then applies a slow / normal / fast speaking rate. Add slide transition time, then practice with the live countdown timer. Helpful for keeping conference talks, lectures, or speeches within their allotted time.',
			ko: '발표 원고를 붙여넣으면 예상 발표 시간을 계산합니다. 영어는 단어 수, 한국어·일본어·중국어는 글자 수를 기준으로 느림/보통/빠름의 말하기 속도를 적용합니다. 슬라이드별 소요 시간도 포함할 수 있고, 실시간 카운트다운 타이머로 연습할 수 있습니다. 학회 발표, 강의, 연설 등 정해진 시간에 맞춰야 하는 상황에 유용합니다.',
			ja: '原稿を貼り付けるだけで発表時間を見積もります。英語は単語数、日本語・韓国語・中国語は文字数を基準にゆっくり／普通／速いの3段階の話速を適用します。スライド時間も加算でき、リアルタイムのカウントダウンで練習できます。学会発表、講義、スピーチなど時間制限がある場面に便利です。',
			zh: '粘贴讲稿即可估算演讲时长。英文按单词数、中日韩按字符数计算，并支持慢 / 正常 / 快三档语速。可加入幻灯片时间，并通过倒计时器进行实战练习。适合学术演讲、课程、致辞等需要严格控时的场合。'
		},
		howTo: {
			en: [
				'Paste your speech text into the box (or check "manual" to enter a count).',
				'Choose word-counting (English) or character-counting (CJK).',
				'Pick a speaking speed: slow, normal, or fast.',
				'Optionally add the number of slides and minutes per slide.',
				'Read the estimated total, then start the timer to practice.'
			],
			ko: [
				'발표 텍스트를 입력란에 붙여넣습니다(또는 "직접 입력" 체크).',
				'영어는 단어, 한국어·일본어·중국어는 글자 모드를 선택합니다.',
				'느림/보통/빠름 중 발표 속도를 선택합니다.',
				'필요하면 슬라이드 수와 슬라이드당 시간을 추가합니다.',
				'예상 시간을 확인하고 타이머로 실제 연습을 시작합니다.'
			],
			ja: [
				'スピーチテキストを貼り付けます（または「手動入力」をチェック）。',
				'英語は単語、日本語・韓国語・中国語は文字モードを選びます。',
				'ゆっくり／普通／速いから話速を選びます。',
				'必要に応じてスライド数と1枚あたりの時間を追加します。',
				'推定時間を確認し、タイマーで練習を開始します。'
			],
			zh: [
				'粘贴讲稿到输入框（或勾选"手动输入"）。',
				'英文选单词模式，中日韩选字符模式。',
				'选择慢 / 正常 / 快的语速。',
				'可选填入幻灯片数量和每张时长。',
				'查看预计时长，然后开始计时进行练习。'
			]
		},
		useCases: {
			en: [
				'Trimming a conference talk to fit a 20-minute slot.',
				'Practicing a wedding toast or graduation speech.',
				'Coaching students for debate or oral exams.',
				'Pacing a podcast script segment to a target length.',
				'Estimating sermon, lecture, or storytime duration.'
			],
			ko: [
				'학회 발표를 20분 시간에 맞춰 분량 조정.',
				'결혼식 축사나 졸업 연설 사전 연습.',
				'학생들의 토론·구술시험 대비 코칭.',
				'팟캐스트 스크립트 분량을 목표 시간에 맞추기.',
				'설교, 강의, 동화 구연 시간 추정.'
			],
			ja: [
				'学会発表を20分枠に合わせて調整。',
				'結婚式の祝辞や卒業スピーチの練習。',
				'生徒のディベートや口述試験のコーチング。',
				'ポッドキャスト原稿の長さ調整。',
				'説教、講義、読み聞かせの時間見積もり。'
			],
			zh: [
				'调整学术演讲以契合 20 分钟时段。',
				'练习婚礼祝词或毕业致辞。',
				'指导学生准备辩论或口试。',
				'按目标时长调整播客脚本片段。',
				'估算讲道、讲座或故事时间。'
			]
		},
		faq: {
			en: [
				{ q: 'Why does the timer differ from my actual delivery?', a: 'Speaking rates vary by speaker, language, and content. Use the estimate as a baseline and adjust based on your own pace.' },
				{ q: 'What rates does the tool use?', a: 'Slow ~100 wpm / 200 cpm, normal ~130 / 270, fast ~160 / 340. Real-world averages are similar.' },
				{ q: 'Should I count CJK characters or English words?', a: 'Match the language: characters for Korean/Japanese/Chinese, words for English. Mixing texts? Use the dominant language.' },
				{ q: 'Can I save settings between visits?', a: 'No, the tool does not store data. Reload starts a fresh session.' }
			],
			ko: [
				{ q: '실제 발표 시간과 차이가 나는 이유는?', a: '말하기 속도는 사람·언어·내용에 따라 다릅니다. 추정치를 기준으로 자신의 페이스에 맞게 조정하세요.' },
				{ q: '어떤 속도 기준을 사용하나요?', a: '느림 약 100단어/분(200자/분), 보통 약 130(270), 빠름 약 160(340)입니다. 실제 평균과 비슷한 수준입니다.' },
				{ q: '한국어 발표는 글자 수와 단어 수 중 무엇으로 세야 하나요?', a: '한국어·일본어·중국어는 글자 모드를, 영어는 단어 모드를 선택하세요. 혼용 시에는 주된 언어를 기준으로 합니다.' },
				{ q: '설정이 저장되나요?', a: '아닙니다. 페이지를 새로고침하면 초기 상태로 돌아갑니다.' }
			]
		},
		related: [
			{ href: '/calculator', label: { en: 'Calculator', ko: '계산기', ja: '計算機', zh: '计算器' } },
			{ href: '/date-calculator', label: { en: 'Date Calculator', ko: '날짜 계산기', ja: '日付計算機', zh: '日期计算器' } },
			{ href: '/ladder-game', label: { en: 'Ladder Game', ko: '사다리타기', ja: 'あみだくじ', zh: '梯子游戏' } }
		],
		externalRefs: [
			{ href: 'https://en.wikipedia.org/wiki/Presentation', label: 'Presentation - Wikipedia' },
			{ href: 'https://hbr.org/2013/06/how-to-give-a-killer-presentation', label: 'HBR: How to Give a Killer Presentation' }
		]
	};

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
	<meta property="og:title" content="{t('title')} - SD.gy" />
	<meta property="og:description" content={t('desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/presentation-timer" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('title')} - SD.gy" />
	<meta name="twitter:description" content={t('desc')} />
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

	<ToolContent
		{lang}
		toolName="Presentation Timer"
		toolUrl="https://sd.gy/{lang}/presentation-timer"
		lastUpdated="2026-04-30"
		category="Daily Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sd.gy/${lang}` },
			{ name: 'Tools', url: `https://sd.gy/${lang}` },
			{ name: 'Presentation Timer', url: `https://sd.gy/${lang}/presentation-timer` }
		]}
		content={toolContent}
	/>
</div>
