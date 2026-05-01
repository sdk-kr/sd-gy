<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';

	const toolContent = {
		about: {
			en: 'The anniversary calculator counts the days since a meaningful date and lists upcoming day, month, and year milestones. Track relationship anniversaries, sobriety days, work-start dates, or any moment worth celebrating. The tool highlights round-number milestones (100, 200, 1000 days, etc.) within the next year.',
			ko: '기념일 계산기는 의미 있는 날짜로부터 지난 일수를 세어 주고, 다가오는 일·월·년 단위 기념일을 한 번에 보여 줍니다. 연애 기념일, 결혼기념일, 입사일, 금주·금연일 등 무엇이든 기록하세요. 100일, 200일, 1000일처럼 의미 있는 숫자의 기념일을 자동으로 표시합니다.',
			ja: '記念日計算機は、特別な日付から経過した日数を数え、今後の日・月・年単位の記念日を一覧表示します。記念日、入社日、禁煙・禁酒日などに利用できます。100日、200日、1000日など節目の日を自動表示します。',
			zh: '纪念日计算器从一个有意义的日期开始计算已过天数，并列出即将到来的日、月、年纪念日。可用于恋爱纪念日、入职日、戒烟戒酒日等。自动突出 100 天、200 天、1000 天等整数里程碑。'
		},
		howTo: {
			en: [
				'Pick the start date you want to commemorate.',
				'See the total number of days that have passed since that date.',
				'Browse the list of upcoming day, month, and year milestones.',
				'Note dates highlighted as "Today!" so you can celebrate them.',
				'Save the page as a bookmark for quick access throughout the year.'
			],
			ko: [
				'기념하고 싶은 시작 날짜를 선택합니다.',
				'그 날부터 오늘까지의 총 경과 일수를 확인합니다.',
				'다가오는 일·월·년 단위 기념일 목록을 살펴봅니다.',
				'"오늘!"로 표시된 기념일은 빠짐없이 챙겨 보세요.',
				'페이지를 북마크해 두면 일년 내내 편하게 확인할 수 있습니다.'
			],
			ja: [
				'記念したい開始日を選択します。',
				'その日からの経過日数を確認します。',
				'今後の日・月・年単位の記念日リストを確認します。',
				'「今日！」と表示された日は忘れずにお祝いしましょう。',
				'ブックマークしておくと一年中便利に使えます。'
			],
			zh: [
				'选择要纪念的起始日期。',
				'查看从该日期至今的总天数。',
				'浏览即将到来的日、月、年里程碑。',
				'留意标记为"今天！"的纪念日。',
				'将页面加入书签以便随时查看。'
			]
		},
		useCases: {
			en: [
				'Couples tracking dating, engagement, and wedding anniversaries.',
				'Counting sobriety days for personal health milestones.',
				'Marking the day you started a new job or business.',
				'Remembering loss and honoring memorial dates.',
				'Celebrating long friendships, pet adoptions, or moves.'
			],
			ko: [
				'연인의 만난 날, 결혼기념일, 약혼 기념일 관리.',
				'금연·금주 일수 기록 및 동기 부여.',
				'입사일, 창업일, 개업일 기념.',
				'추모일, 기일을 잊지 않고 챙기기.',
				'반려동물 입양일, 이사한 날 등 일상의 기념일.'
			],
			ja: [
				'交際、結婚、婚約などの記念日管理。',
				'禁酒・禁煙の継続日数の記録。',
				'入社日、創業日のお祝い。',
				'命日や記念日を忘れないために。',
				'ペットの誕生日、引越し日など日常の記念日。'
			],
			zh: [
				'记录恋爱、订婚、结婚纪念日。',
				'追踪戒烟戒酒天数。',
				'纪念入职日或创业日。',
				'追思故人，铭记纪念日。',
				'记录宠物领养日、搬家日等生活里程碑。'
			]
		},
		faq: {
			en: [
				{ q: 'Can I save multiple anniversaries?', a: 'Currently the tool computes one date at a time. Bookmark the page with the date filled in or store dates in your calendar app.' },
				{ q: 'Why are some milestones missing from the list?', a: 'Only milestones that fall within the upcoming year (or two years for yearly milestones) are shown to keep the list focused.' },
				{ q: 'Does it support lunar calendar dates?', a: 'No, the calculator works with the Gregorian calendar. Convert lunar dates first if needed.' },
				{ q: 'Why is the count off by one day sometimes?', a: 'Time zone differences and daylight-saving boundaries can cause a one-day shift around midnight.' }
			],
			ko: [
				{ q: '여러 기념일을 동시에 저장할 수 있나요?', a: '현재는 한 번에 하나씩만 계산합니다. 날짜를 채운 상태로 북마크하거나 캘린더 앱에 저장해 두세요.' },
				{ q: '일부 기념일이 목록에 보이지 않습니다.', a: '리스트가 너무 길어지지 않도록 다가올 1년(연 단위는 2년) 안의 기념일만 표시합니다.' },
				{ q: '음력 기념일도 지원하나요?', a: '양력 기준으로만 계산됩니다. 음력 날짜는 양력으로 변환한 뒤 입력해 주세요.' },
				{ q: '하루씩 차이가 나는 경우가 있어요.', a: '자정 무렵에는 시간대와 서머타임의 영향으로 하루 정도 차이가 날 수 있습니다.' }
			]
		},
		related: [
			{ href: '/date-calculator', label: { en: 'Date Calculator', ko: '날짜 계산기', ja: '日付計算機', zh: '日期计算器' } },
			{ href: '/age-calculator', label: { en: 'Age Calculator', ko: '나이 계산기', ja: '年齢計算機', zh: '年龄计算器' } },
			{ href: '/career-calculator', label: { en: 'Career Calculator', ko: '경력 계산기', ja: 'キャリア計算機', zh: '工龄计算器' } }
		]
	};

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
	<link rel="canonical" href="https://sd.gy/{lang}/anniversary-calculator" />
	<meta property="og:title" content="{t('anniversary.title')} - SD.gy" />
	<meta property="og:description" content={t('anniversary.desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/anniversary-calculator" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('anniversary.title')} - SD.gy" />
	<meta name="twitter:description" content={t('anniversary.desc')} />
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

	<ToolContent {lang} content={toolContent} />
</div>
