<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';

	const toolContent = {
		about: {
			en: 'The age calculator finds your exact age in years, months, and days from your date of birth. It also shows total days lived, weeks, and months, plus the number of days until your next birthday. Useful for legal forms, retirement planning, school enrollment, or simple curiosity.',
			ko: '나이 계산기는 생년월일을 기준으로 만 나이를 연·월·일 단위로 정확히 계산합니다. 살아온 총 일수, 주, 개월 수와 다음 생일까지 남은 일수도 함께 보여 줍니다. 한국에서는 2023년부터 만 나이가 공식 표준이 되었으며, 이 도구는 그 기준을 따릅니다.',
			ja: '年齢計算機は、生年月日から正確な年齢を年・月・日単位で算出します。総日数、週数、月数、次の誕生日までの日数も表示されます。各種申請、進学、退職計画などに便利です。',
			zh: '年龄计算器根据出生日期计算精确的年、月、日年龄，并显示总天数、周数、月数以及距离下一个生日的天数。适用于法律文件、入学、退休规划等场景。'
		},
		howTo: {
			en: [
				'Enter your date of birth using the date picker.',
				'The calculator instantly shows your age in years, months, and days.',
				'Review the totals for days, weeks, and months you have lived.',
				'Check the date and countdown for your next birthday.',
				'Change the date to compare ages of family members or friends.'
			],
			ko: [
				'생년월일을 날짜 선택기로 입력합니다.',
				'연·월·일 단위의 만 나이가 즉시 계산되어 표시됩니다.',
				'살아온 총 일수, 주, 개월 수를 함께 확인합니다.',
				'다음 생일 날짜와 남은 일수를 확인합니다.',
				'날짜를 바꿔 가족이나 친구의 나이를 비교해 볼 수 있습니다.'
			],
			ja: [
				'日付選択で生年月日を入力します。',
				'年・月・日単位の年齢が即座に表示されます。',
				'総日数・週数・月数を確認します。',
				'次の誕生日までの日数を確認します。',
				'日付を変えて家族や友人の年齢を比較できます。'
			],
			zh: [
				'使用日期选择器输入出生日期。',
				'年、月、日年龄会立即显示。',
				'查看总天数、周数和月数。',
				'查看距离下一个生日的天数。',
				'更换日期以比较家人或朋友的年龄。'
			]
		},
		useCases: {
			en: [
				'Filling in legal documents that require exact age.',
				'Tracking a child\'s precise age for school or vaccinations.',
				'Planning birthdays and milestone celebrations.',
				'Calculating retirement, pension, or insurance eligibility.',
				'Comparing ages between two people for relationships or genealogy.'
			],
			ko: [
				'정확한 만 나이가 필요한 법률·행정 서류 작성.',
				'아이의 개월 수까지 정확한 나이로 학교·예방접종 일정 관리.',
				'생일 및 기념일 계획.',
				'국민연금, 노령연금, 보험 가입 자격 확인.',
				'가족·지인 간 나이 차이 계산.'
			],
			ja: [
				'正確な年齢が必要な行政書類の記入。',
				'子供の月齢に応じた予防接種や入園手続き。',
				'誕生日や記念日の計画。',
				'年金や保険の加入資格確認。',
				'家族や知人との年齢差の計算。'
			],
			zh: [
				'填写需要精确年龄的法律文件。',
				'追踪儿童精确月龄以安排接种或入学。',
				'规划生日和重要纪念日。',
				'查询养老金或保险资格。',
				'比较家人或朋友间的年龄差。'
			]
		},
		faq: {
			en: [
				{ q: 'Does this calculate Korean "age" or international age?', a: 'It uses the international (full-year) age standard, which is now also the official standard in Korea since 2023.' },
				{ q: 'Why is the day count off by one near my birthday?', a: 'The calculation is based on local time. Time zone differences between your device and birth location may cause a one-day shift.' },
				{ q: 'Can I calculate the age of someone who has passed away?', a: 'Use the date calculator instead — enter the birth date and the date of death to find the exact lifespan.' },
				{ q: 'Is leap day (Feb 29) handled correctly?', a: 'Yes. In non-leap years, the birthday rolls over on March 1 for age increment purposes.' }
			],
			ko: [
				{ q: '한국식 나이가 계산되나요, 만 나이가 계산되나요?', a: '국제 표준인 만 나이를 계산합니다. 한국에서도 2023년부터 만 나이가 공식 기준입니다.' },
				{ q: '생일 즈음에 일수가 하루씩 다르게 나옵니다.', a: '기기 로컬 시간 기준으로 계산하기 때문에, 출생지와 시간대가 다르면 하루 정도 차이가 날 수 있습니다.' },
				{ q: '돌아가신 분의 나이도 계산할 수 있나요?', a: '이 도구는 오늘 기준으로 계산합니다. 두 날짜 차이가 필요하면 날짜 계산기를 이용하세요.' },
				{ q: '윤년(2월 29일) 생일도 정확히 계산되나요?', a: '네, 평년에는 3월 1일에 한 살을 더하는 방식으로 처리합니다.' }
			]
		},
		related: [
			{ href: '/date-calculator', label: { en: 'Date Calculator', ko: '날짜 계산기', ja: '日付計算機', zh: '日期计算器' } },
			{ href: '/anniversary-calculator', label: { en: 'Anniversary Calculator', ko: '기념일 계산기', ja: '記念日計算機', zh: '纪念日计算器' } },
			{ href: '/career-calculator', label: { en: 'Career Calculator', ko: '경력 계산기', ja: 'キャリア計算機', zh: '工龄计算器' } }
		]
	};

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
	<link rel="canonical" href="https://sd.gy/{lang}/age-calculator" />
	<meta property="og:title" content="{t('age.title')} - SD.gy" />
	<meta property="og:description" content={t('age.desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/age-calculator" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('age.title')} - SD.gy" />
	<meta name="twitter:description" content={t('age.desc')} />
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

	<ToolContent {lang} content={toolContent} />
</div>
