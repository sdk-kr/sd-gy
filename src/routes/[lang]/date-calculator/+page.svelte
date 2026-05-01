<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';

	const toolContent = {
		about: {
			en: 'A three-in-one date utility: count down to a future event (D-day), measure the gap between any two dates in days/weeks/months/years, or add and subtract days from a starting date. All calculations run instantly in your browser using local time. Useful for project deadlines, event planning, contract terms, and personal milestones.',
			ko: '한 페이지에서 세 가지 날짜 계산을 할 수 있습니다. 미래 일정까지 남은 D-day 카운트, 두 날짜 사이의 일·주·월·년 간격, 그리고 기준 날짜에 일수를 더하거나 빼는 기능을 제공합니다. 모든 계산은 브라우저의 로컬 시간으로 즉시 처리됩니다. 프로젝트 마감, 이벤트 준비, 계약 기간, 개인 일정 관리에 유용합니다.',
			ja: '1ページで3種類の日付計算が可能です。将来の予定までのD-dayカウント、2つの日付間の日・週・月・年の間隔、基準日への加算・減算に対応します。すべての計算はブラウザのローカル時間で即座に処理されます。プロジェクト締切、イベント準備、契約期間、個人の予定管理に便利です。',
			zh: '一页可完成三种日期运算：倒数计时（D-day）、两日期间隔（日 / 周 / 月 / 年）、基于起始日加减天数。所有计算在浏览器本地时间下即时完成。适合项目截止日、活动准备、合同期限和个人日程管理。'
		},
		howTo: {
			en: [
				'For D-day countdown, set your target date and read D-N or D+N.',
				'For date difference, enter both start and end dates to see the spans.',
				'For add/subtract, choose a base date and type a positive or negative number of days.',
				'Use the formatted date with weekday for quick verification.',
				'Bookmark the page with your dates pre-filled in the URL.'
			],
			ko: [
				'D-day는 목표 날짜를 입력하면 D-N, D+N으로 표시됩니다.',
				'날짜 차이는 시작·종료 날짜를 입력하면 일·주·월·년 단위로 보여 줍니다.',
				'더하기·빼기는 기준 날짜와 더할(또는 뺄) 일수를 입력합니다.',
				'결과에 표시되는 요일까지 활용해 빠르게 검증합니다.',
				'자주 쓰는 날짜 조합은 페이지를 북마크해 두세요.'
			],
			ja: [
				'D-dayは目標日を入力するとD-N／D+Nで表示されます。',
				'日付間隔は開始日と終了日を入力すると日・週・月・年で表示されます。',
				'加減算は基準日と加える（または引く）日数を入力します。',
				'曜日も表示されるので素早く確認できます。',
				'よく使う日付はページをブックマークしておくと便利です。'
			],
			zh: [
				'倒数计时填入目标日期即显示 D-N 或 D+N。',
				'日期差填入起始与结束日期，按日 / 周 / 月 / 年显示。',
				'加减天数填入基准日和正负天数。',
				'结果同时显示星期，方便快速核对。',
				'常用日期可将页面加入书签。'
			]
		},
		useCases: {
			en: [
				'Counting down to exam day, project deadline, or wedding.',
				'Computing the number of nights for a hotel stay or rental.',
				'Calculating contract duration or notice periods.',
				'Estimating delivery dates by adding shipping days.',
				'Planning a sprint, vacation, or marathon training schedule.'
			],
			ko: [
				'시험일, 프로젝트 마감, 결혼식 등 D-day 카운트.',
				'호텔 숙박 일수 또는 렌트 기간 계산.',
				'계약 기간이나 통지 기간 계산.',
				'배송일에 일수를 더해 도착 예상일 추정.',
				'스프린트, 휴가, 마라톤 훈련 일정 계획.'
			],
			ja: [
				'試験日、プロジェクト締切、結婚式までのカウントダウン。',
				'ホテルやレンタルの宿泊日数の計算。',
				'契約期間や通知期間の算出。',
				'配送日に日数を加えて到着予想日を推定。',
				'スプリントや休暇、マラソントレーニングの計画。'
			],
			zh: [
				'倒数考试、项目截止、婚礼等重要日子。',
				'计算酒店或租赁的入住天数。',
				'计算合同期或通知期。',
				'根据物流天数估算到货日期。',
				'规划冲刺、假期或马拉松训练日程。'
			]
		},
		faq: {
			en: [
				{ q: 'How are months and years calculated?', a: 'Months are approximated as 30 days and years as 365 days for quick estimation. For exact calendar months, use the age calculator.' },
				{ q: 'Why does today show as D-1 in some time zones?', a: 'The countdown uses your device\'s local midnight. Crossing midnight or different time zones can shift the count.' },
				{ q: 'Can I add a negative number of days?', a: 'Yes. Negative numbers subtract days from the base date.' },
				{ q: 'Are weekends excluded?', a: 'No, all days are counted. Use a business-day calculator if you need to exclude weekends.' }
			],
			ko: [
				{ q: '월수와 연수는 어떻게 계산되나요?', a: '간단한 추정을 위해 한 달은 30일, 한 해는 365일로 환산합니다. 정확한 달력 월·년이 필요하면 나이 계산기를 사용하세요.' },
				{ q: '오늘인데 D-1로 보이는 경우가 있어요.', a: '기기의 로컬 자정을 기준으로 계산하기 때문에, 시간대나 자정 부근에서는 하루 차이가 날 수 있습니다.' },
				{ q: '음수 일수도 입력할 수 있나요?', a: '네, 음수를 입력하면 기준일에서 그만큼 빼서 계산합니다.' },
				{ q: '주말은 제외되나요?', a: '아닙니다. 모든 일수를 셈에 포함합니다. 영업일만 계산하려면 별도의 영업일 계산기가 필요합니다.' }
			]
		},
		related: [
			{ href: '/age-calculator', label: { en: 'Age Calculator', ko: '나이 계산기', ja: '年齢計算機', zh: '年龄计算器' } },
			{ href: '/anniversary-calculator', label: { en: 'Anniversary Calculator', ko: '기념일 계산기', ja: '記念日計算機', zh: '纪念日计算器' } },
			{ href: '/career-calculator', label: { en: 'Career Calculator', ko: '경력 계산기', ja: 'キャリア計算機', zh: '工龄计算器' } }
		]
	};

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	// D-Day Calculator
	let targetDate = new Date().toISOString().split('T')[0];
	$: daysUntilTarget = Math.ceil((new Date(targetDate).getTime() - new Date().setHours(0,0,0,0)) / (1000 * 60 * 60 * 24));

	// Date Difference
	let startDate = new Date().toISOString().split('T')[0];
	let endDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
	$: dateDiff = calculateDateDiff(startDate, endDate);

	function calculateDateDiff(start: string, end: string) {
		const startD = new Date(start);
		const endD = new Date(end);
		const diffTime = Math.abs(endD.getTime() - startD.getTime());
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		return {
			days: diffDays,
			weeks: Math.floor(diffDays / 7),
			months: Math.floor(diffDays / 30),
			years: Math.floor(diffDays / 365)
		};
	}

	// Add/Subtract Days
	let baseDate = new Date().toISOString().split('T')[0];
	let daysToAdd = 30;
	$: resultDate = new Date(new Date(baseDate).getTime() + daysToAdd * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

	function formatDate(dateStr: string): string {
		const date = new Date(dateStr);
		const options: Intl.DateTimeFormatOptions = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			weekday: 'long'
		};
		const locale = lang === 'ko' ? 'ko-KR' : lang === 'ja' ? 'ja-JP' : lang === 'zh' ? 'zh-CN' : 'en-US';
		return date.toLocaleDateString(locale, options);
	}
</script>

<svelte:head>
	<title>{t('date.title')} - SD.gy</title>
	<meta name="description" content={t('date.desc')} />
	<link rel="canonical" href="https://sd.gy/{lang}/date-calculator" />
	<meta property="og:title" content="{t('date.title')} - SD.gy" />
	<meta property="og:description" content={t('date.desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/date-calculator" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('date.title')} - SD.gy" />
	<meta name="twitter:description" content={t('date.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('date.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('date.desc')}</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<!-- D-Day Calculator -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">{t('date.dday')}</h2>
			<div class="space-y-4">
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('date.targetDate')}</label>
					<input
						type="date"
						bind:value={targetDate}
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>
				<div class="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-6 text-center">
					{#if daysUntilTarget === 0}
						<div class="text-4xl font-bold text-violet-600 dark:text-violet-400">D-Day</div>
						<div class="text-gray-600 dark:text-dark-400 mt-2">{t('date.today')}</div>
					{:else if daysUntilTarget > 0}
						<div class="text-4xl font-bold text-violet-600 dark:text-violet-400">D-{daysUntilTarget}</div>
						<div class="text-gray-600 dark:text-dark-400 mt-2">{daysUntilTarget} {t('date.daysLeft')}</div>
					{:else}
						<div class="text-4xl font-bold text-gray-500 dark:text-dark-400">D+{Math.abs(daysUntilTarget)}</div>
						<div class="text-gray-600 dark:text-dark-400 mt-2">{Math.abs(daysUntilTarget)} {t('date.daysAgo')}</div>
					{/if}
				</div>
				<div class="text-center text-sm text-gray-500 dark:text-dark-400">
					{formatDate(targetDate)}
				</div>
			</div>
		</div>

		<!-- Date Difference -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">{t('date.difference')}</h2>
			<div class="space-y-4">
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('date.startDate')}</label>
					<input
						type="date"
						bind:value={startDate}
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('date.endDate')}</label>
					<input
						type="date"
						bind:value={endDate}
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>
				<div class="grid grid-cols-2 gap-3">
					<div class="bg-gray-50 dark:bg-dark-700 rounded-lg p-3 text-center">
						<div class="text-2xl font-bold text-gray-900 dark:text-dark-100">{dateDiff.days}</div>
						<div class="text-sm text-gray-500 dark:text-dark-400">{t('date.days')}</div>
					</div>
					<div class="bg-gray-50 dark:bg-dark-700 rounded-lg p-3 text-center">
						<div class="text-2xl font-bold text-gray-900 dark:text-dark-100">{dateDiff.weeks}</div>
						<div class="text-sm text-gray-500 dark:text-dark-400">{t('date.weeks')}</div>
					</div>
					<div class="bg-gray-50 dark:bg-dark-700 rounded-lg p-3 text-center">
						<div class="text-2xl font-bold text-gray-900 dark:text-dark-100">{dateDiff.months}</div>
						<div class="text-sm text-gray-500 dark:text-dark-400">{t('date.months')}</div>
					</div>
					<div class="bg-gray-50 dark:bg-dark-700 rounded-lg p-3 text-center">
						<div class="text-2xl font-bold text-gray-900 dark:text-dark-100">{dateDiff.years}</div>
						<div class="text-sm text-gray-500 dark:text-dark-400">{t('date.years')}</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Add/Subtract Days -->
		<div class="md:col-span-2 bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">{t('date.addSubtract')}</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('date.baseDate')}</label>
					<input
						type="date"
						bind:value={baseDate}
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('date.daysToAdd')}</label>
					<input
						type="number"
						bind:value={daysToAdd}
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('date.resultDate')}</label>
					<div class="px-4 py-3 bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl text-violet-600 dark:text-violet-400 font-semibold">
						{formatDate(resultDate)}
					</div>
				</div>
			</div>
		</div>
	</div>

	<ToolContent {lang} content={toolContent} />
</div>
