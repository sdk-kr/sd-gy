<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';

	const toolContent = {
		about: {
			en: 'This calorie calculator estimates your daily energy needs using the Mifflin-St Jeor equation, the most accurate BMR formula in common use. It returns your basal metabolic rate (BMR), maintenance calories (TDEE), and weight-loss/gain targets adjusted by ±500 kcal. Results are estimates for informational purposes only and are not medical advice — consult a doctor or registered dietitian for a tailored plan.',
			ko: '이 칼로리 계산기는 가장 정확하다고 알려진 Mifflin-St Jeor 공식을 사용해 하루 에너지 소비량을 추정합니다. 기초대사량(BMR), 유지 칼로리(TDEE), ±500kcal로 조정된 감량·증량 목표 칼로리를 보여 줍니다. 결과는 정보 제공 목적의 추정치이며 의학적 자문이 아닙니다. 개인 맞춤 식단은 의사나 영양사와 상담하세요.',
			ja: 'このカロリー計算機は、もっとも精度が高いとされるMifflin-St Jeor式を用いて1日の必要カロリーを推定します。基礎代謝量（BMR）、維持カロリー（TDEE）、±500kcalで調整した減量・増量目標を表示します。結果は情報提供のための推定値であり、医学的助言ではありません。個別の指導は医師や栄養士にご相談ください。',
			zh: '本卡路里计算器使用 Mifflin-St Jeor 公式估算每日能量需求，包括基础代谢率（BMR）、维持热量（TDEE）以及减重 / 增重目标（±500 kcal）。结果仅供参考，不构成医疗建议。如需个性化饮食方案，请咨询医生或注册营养师。'
		},
		howTo: {
			en: [
				'Choose your gender (the BMR formula differs slightly).',
				'Enter your age, height in cm, and weight in kg.',
				'Pick the activity level that best matches your weekly routine.',
				'Read your BMR, maintenance, weight-loss, and weight-gain calorie values.',
				'Use the maintenance value as a baseline; adjust gradually rather than drastically.'
			],
			ko: [
				'성별을 선택합니다(BMR 공식이 약간 다릅니다).',
				'나이, 키(cm), 몸무게(kg)를 입력합니다.',
				'평소 활동 수준에 가장 가까운 항목을 선택합니다.',
				'기초대사량, 유지 칼로리, 감량/증량 목표 칼로리를 확인합니다.',
				'유지 칼로리를 기준으로 잡고, 급격한 변화 대신 점진적으로 조절하세요.'
			],
			ja: [
				'性別を選びます（BMR式がわずかに異なります）。',
				'年齢、身長（cm）、体重（kg）を入力します。',
				'普段の活動レベルに最も近い項目を選びます。',
				'BMR、維持カロリー、減量／増量目標を確認します。',
				'維持カロリーを基準に、急激ではなく段階的に調整しましょう。'
			],
			zh: [
				'选择性别（BMR 公式略有不同）。',
				'输入年龄、身高（cm）和体重（kg）。',
				'选择最符合日常活动水平的选项。',
				'查看 BMR、维持、减重和增重目标卡路里。',
				'以维持热量为基准，循序渐进地调整。'
			]
		},
		useCases: {
			en: [
				'Setting a daily calorie target for weight loss or muscle gain.',
				'Estimating energy needs before planning weekly meals.',
				'Adjusting macros and portions when starting a new fitness program.',
				'Comparing your needs across different activity weeks.',
				'Sharing baseline numbers with a trainer or nutritionist.'
			],
			ko: [
				'다이어트나 근육 증량을 위한 일일 칼로리 목표 설정.',
				'주간 식단 계획 전 필요 에너지 파악.',
				'새 운동 프로그램 시작 시 끼니별 양 조정.',
				'활동량이 다른 주별로 필요량 비교.',
				'트레이너나 영양사와 공유할 기초 수치 확인.'
			],
			ja: [
				'ダイエットや筋肉増量の1日カロリー目標設定。',
				'週ごとの食事プラン作成前の必要エネルギーの把握。',
				'新しい運動プログラム開始時の食事量調整。',
				'活動量が異なる週ごとの比較。',
				'トレーナーや栄養士との基礎数値の共有。'
			],
			zh: [
				'设定减脂或增肌的每日卡路里目标。',
				'制定周膳食计划前估算能量需求。',
				'开始新运动计划时调整餐量。',
				'比较不同活动量周的能量需求。',
				'与教练或营养师分享基础数值。'
			]
		},
		faq: {
			en: [
				{ q: 'Should I consult a doctor before starting a calorie plan?', a: 'Yes, especially if you have medical conditions, are pregnant, under 18, over 65, or have a history of eating disorders. This tool is informational only.' },
				{ q: 'Why does the formula need my gender?', a: 'Average lean mass differs between sexes, which changes BMR. Mifflin-St Jeor uses different constants for men and women.' },
				{ q: 'Is 500 kcal deficit the right pace for weight loss?', a: 'It targets roughly 0.5 kg / 1 lb per week, considered safe for most adults. Larger deficits may be unsustainable or unsafe.' },
				{ q: 'Why is my real calorie burn different from this estimate?', a: 'BMR formulas have ±10% error. Real expenditure depends on body composition, NEAT, exercise efficiency, and other factors.' }
			],
			ko: [
				{ q: '식단을 시작하기 전 의사 상담이 필요한가요?', a: '지병이 있거나 임산부, 18세 미만, 65세 이상, 섭식장애 병력이 있다면 반드시 의사와 상담하세요. 이 도구는 정보 제공 목적입니다.' },
				{ q: '왜 성별을 입력해야 하나요?', a: '평균 제지방량이 성별에 따라 다르기 때문에 Mifflin-St Jeor 공식은 남녀에 다른 상수를 사용합니다.' },
				{ q: '500kcal 감량 페이스가 적절한가요?', a: '주당 약 0.5kg 감량을 목표로 한 수치로, 대부분 성인에게 안전하다고 알려져 있습니다. 더 큰 결손은 지속하기 어렵거나 위험할 수 있습니다.' },
				{ q: '실제 소비 칼로리와 차이가 나는 이유는?', a: 'BMR 공식 자체에 ±10% 오차가 있고, 체구성, 비운동성 활동(NEAT), 운동 효율 등이 영향을 줍니다.' }
			]
		},
		related: [
			{ href: '/bmi-calculator', label: { en: 'BMI Calculator', ko: 'BMI 계산기', ja: 'BMI計算機', zh: 'BMI 计算器' } },
			{ href: '/percentage', label: { en: 'Percentage', ko: '퍼센트 계산기', ja: 'パーセント計算', zh: '百分比' } },
			{ href: '/calculator', label: { en: 'Calculator', ko: '계산기', ja: '計算機', zh: '计算器' } }
		],
		externalRefs: [
			{ href: 'https://www.who.int/news-room/fact-sheets/detail/healthy-diet', label: 'WHO: Healthy diet' },
			{ href: 'https://www.dietaryguidelines.gov/', label: 'Dietary Guidelines for Americans' }
		]
	};

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let age = 30;
	let gender: 'male' | 'female' = 'male';
	let height = 170; // cm
	let weight = 70; // kg
	let activity = 1.55; // moderate

	const activityLevels = [
		{ value: 1.2, label: 'calorie.sedentary' },
		{ value: 1.375, label: 'calorie.light' },
		{ value: 1.55, label: 'calorie.moderate' },
		{ value: 1.725, label: 'calorie.active' },
		{ value: 1.9, label: 'calorie.veryActive' }
	];

	// Mifflin-St Jeor Equation
	$: bmr = gender === 'male'
		? 10 * weight + 6.25 * height - 5 * age + 5
		: 10 * weight + 6.25 * height - 5 * age - 161;

	$: tdee = bmr * activity;
	$: weightLoss = tdee - 500;
	$: weightGain = tdee + 500;
</script>

<svelte:head>
	<title>{t('calorie.title')} - SD.gy</title>
	<meta name="description" content={t('calorie.desc')} />
	<link rel="canonical" href="https://sd.gy/{lang}/calorie-calculator" />
	<meta property="og:title" content="{t('calorie.title')} - SD.gy" />
	<meta property="og:description" content={t('calorie.desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/calorie-calculator" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('calorie.title')} - SD.gy" />
	<meta name="twitter:description" content={t('calorie.desc')} />
</svelte:head>

<div class="max-w-2xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('calorie.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('calorie.desc')}</p>
	</div>

	<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
		<!-- Gender Selection -->
		<div class="mb-6">
			<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('calorie.gender')}</label>
			<div class="grid grid-cols-2 gap-3">
				<button
					class="px-4 py-3 rounded-xl font-medium transition-colors {gender === 'male' ? 'bg-violet-500 text-white' : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300'}"
					on:click={() => gender = 'male'}
				>
					{t('calorie.male')}
				</button>
				<button
					class="px-4 py-3 rounded-xl font-medium transition-colors {gender === 'female' ? 'bg-violet-500 text-white' : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300'}"
					on:click={() => gender = 'female'}
				>
					{t('calorie.female')}
				</button>
			</div>
		</div>

		<!-- Input Fields -->
		<div class="grid grid-cols-2 gap-4 mb-6">
			<div>
				<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('calorie.age')}</label>
				<input
					type="number"
					bind:value={age}
					min="15"
					max="100"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 text-lg"
				/>
			</div>
			<div>
				<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('bmi.height')} (cm)</label>
				<input
					type="number"
					bind:value={height}
					min="100"
					max="250"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 text-lg"
				/>
			</div>
			<div class="col-span-2">
				<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('bmi.weight')} (kg)</label>
				<input
					type="number"
					bind:value={weight}
					min="30"
					max="200"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 text-lg"
				/>
			</div>
		</div>

		<!-- Activity Level -->
		<div class="mb-6">
			<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('calorie.activity')}</label>
			<select
				bind:value={activity}
				class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 text-lg"
			>
				{#each activityLevels as level}
					<option value={level.value}>{t(level.label)}</option>
				{/each}
			</select>
		</div>

		<!-- Results -->
		<div class="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 space-y-4">
			<div class="text-center pb-4 border-b border-gray-200 dark:border-dark-600">
				<p class="text-sm text-gray-600 dark:text-dark-400 mb-1">{t('calorie.bmr')}</p>
				<p class="text-2xl font-bold text-gray-900 dark:text-dark-100">{Math.round(bmr)} kcal</p>
			</div>

			<div class="text-center pb-4 border-b border-gray-200 dark:border-dark-600">
				<p class="text-sm text-gray-600 dark:text-dark-400 mb-1">{t('calorie.maintenance')}</p>
				<p class="text-3xl font-bold text-violet-500">{Math.round(tdee)} kcal</p>
			</div>

			<div class="grid grid-cols-2 gap-4 pt-2">
				<div class="text-center">
					<p class="text-sm text-gray-600 dark:text-dark-400 mb-1">{t('calorie.lose')}</p>
					<p class="text-xl font-semibold text-blue-500">{Math.round(weightLoss)} kcal</p>
				</div>
				<div class="text-center">
					<p class="text-sm text-gray-600 dark:text-dark-400 mb-1">{t('calorie.gain')}</p>
					<p class="text-xl font-semibold text-green-500">{Math.round(weightGain)} kcal</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Info Section -->
	<div class="mt-8 bg-yellow-50 dark:bg-dark-800 rounded-xl p-6 border border-yellow-200 dark:border-dark-700">
		<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-3">{t('calorie.info')}</h2>
		<p class="text-sm text-gray-600 dark:text-dark-400">{t('calorie.infoText')}</p>
	</div>

	<ToolContent
		{lang}
		toolName="Calorie Calculator"
		toolUrl="https://sd.gy/{lang}/calorie-calculator"
		lastUpdated="2026-04-30"
		category="Daily Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sd.gy/${lang}` },
			{ name: 'Tools', url: `https://sd.gy/${lang}` },
			{ name: 'Calorie Calculator', url: `https://sd.gy/${lang}/calorie-calculator` }
		]}
		content={toolContent}
	/>
</div>
