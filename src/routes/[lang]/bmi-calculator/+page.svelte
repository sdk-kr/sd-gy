<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';

	const toolContent = {
		about: {
			en: 'BMI (Body Mass Index) is a screening number that compares weight to height (kg / m²). It is widely used to flag potential weight-related health risks for adults aged 20 and older. BMI does not measure body fat directly and ignores muscle mass, bone density, age, gender, and ethnicity. This tool is for informational purposes only and is not medical advice.',
			ko: 'BMI(체질량지수)는 몸무게를 키의 제곱으로 나눈 수치(kg/㎡)로, 성인의 체중 관련 건강 위험을 빠르게 가늠하는 지표입니다. 근육량, 골밀도, 나이, 성별, 인종을 반영하지 않으므로 정확한 체지방 측정은 아닙니다. 이 도구는 정보 제공 목적이며 의학적 진단을 대체하지 않습니다.',
			ja: 'BMI（体格指数）は体重（kg）を身長（m）の二乗で割った数値で、成人の体重関連の健康リスクを大まかに把握する指標です。筋肉量、骨密度、年齢、性別、人種を反映しないため、体脂肪の正確な測定ではありません。本ツールは情報提供のみで、医学的助言ではありません。',
			zh: 'BMI（身体质量指数）是体重（kg）除以身高（m）平方的数值，常用于评估成人体重相关的健康风险。BMI 不直接测量体脂，也不考虑肌肉量、骨密度、年龄、性别和种族差异。本工具仅供参考，不构成医疗建议。'
		},
		howTo: {
			en: [
				'Enter your height in centimeters using the input or slider.',
				'Enter your weight in kilograms.',
				'Read your BMI value and category (underweight / normal / overweight / obese).',
				'Compare your value against the WHO reference ranges shown on the scale.',
				'If your result is outside the normal range, consider consulting a doctor.'
			],
			ko: [
				'키를 센티미터(cm) 단위로 입력하거나 슬라이더로 조절합니다.',
				'몸무게를 킬로그램(kg) 단위로 입력합니다.',
				'BMI 수치와 분류(저체중/정상/과체중/비만)를 확인합니다.',
				'WHO 기준 표를 참고해 자신의 위치를 확인합니다.',
				'정상 범위를 벗어난다면 의사와 상담을 고려해 보세요.'
			],
			ja: [
				'身長をセンチメートル（cm）で入力またはスライダーで調整します。',
				'体重をキログラム（kg）で入力します。',
				'BMI値と分類（低体重／普通／過体重／肥満）を確認します。',
				'WHO基準と照らし合わせて自分の位置を確認します。',
				'正常範囲外であれば医師への相談を検討してください。'
			],
			zh: [
				'输入身高（厘米）或使用滑块调整。',
				'输入体重（千克）。',
				'查看 BMI 数值与分类（偏瘦／正常／超重／肥胖）。',
				'对照 WHO 标准查看自己所在的范围。',
				'若超出正常范围，建议咨询医生。'
			]
		},
		useCases: {
			en: [
				'Quickly checking whether your weight is in the recommended range.',
				'Tracking changes during a weight-loss or fitness program.',
				'Sharing a baseline measurement with a doctor or trainer.',
				'Filling out general health screening questionnaires.',
				'Comparing values across family members for general awareness.'
			],
			ko: [
				'현재 체중이 권장 범위 안에 있는지 빠르게 확인.',
				'다이어트나 운동 프로그램 진행 중 변화 추적.',
				'병원이나 트레이너에게 기초 수치 공유.',
				'건강검진 문진표 작성.',
				'가족 구성원 간 비교를 통한 건강 인식.'
			],
			ja: [
				'体重が推奨範囲内かを素早く確認。',
				'ダイエットや運動プログラム中の変化追跡。',
				'医師やトレーナーに基礎数値を共有。',
				'健康診断の問診票記入。',
				'家族間で比較して健康意識を高める。'
			],
			zh: [
				'快速判断体重是否在推荐范围。',
				'追踪减肥或健身计划的变化。',
				'与医生或教练分享基础数值。',
				'填写健康问卷。',
				'家庭成员间比较以增强健康意识。'
			]
		},
		faq: {
			en: [
				{ q: 'Should I consult a doctor based on this result?', a: 'Yes, if your BMI is well outside the normal range or you have other risk factors, talk to a healthcare professional. BMI alone is not a diagnosis.' },
				{ q: 'Is BMI accurate for athletes or muscular people?', a: 'Not very. Muscle weighs more than fat, so athletes often score "overweight" while having healthy body composition.' },
				{ q: 'Does BMI work for children or pregnant women?', a: 'No. Children have age-and-sex-specific percentiles, and pregnancy changes weight in ways BMI cannot interpret.' },
				{ q: 'What is a healthy BMI range?', a: 'The WHO defines 18.5 – 24.9 as normal, but the ideal range may differ slightly by ethnicity and individual factors.' }
			],
			ko: [
				{ q: '이 결과만 보고 병원에 가야 할까요?', a: 'BMI가 정상 범위에서 크게 벗어나거나 다른 위험 요인이 있다면 의사와 상담하세요. BMI 자체가 진단은 아닙니다.' },
				{ q: '운동선수나 근육이 많은 사람에게도 정확한가요?', a: '근육은 지방보다 무겁기 때문에 운동선수는 체지방이 정상이어도 "과체중"으로 나올 수 있습니다.' },
				{ q: '어린이나 임산부에게도 적용되나요?', a: '아닙니다. 어린이는 연령·성별 백분위수, 임산부는 별도 기준을 사용해야 합니다.' },
				{ q: '건강한 BMI 범위는?', a: 'WHO 기준으로 18.5~24.9가 정상입니다. 인종과 개인 차이에 따라 이상 범위는 조금씩 다를 수 있습니다.' }
			]
		},
		related: [
			{ href: '/calorie-calculator', label: { en: 'Calorie Calculator', ko: '칼로리 계산기', ja: 'カロリー計算機', zh: '卡路里计算器' } },
			{ href: '/calculator', label: { en: 'Calculator', ko: '계산기', ja: '計算機', zh: '计算器' } },
			{ href: '/percentage', label: { en: 'Percentage', ko: '퍼센트', ja: 'パーセント', zh: '百分比' } }
		],
		externalRefs: [
			{ href: 'https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight', label: 'WHO: Obesity and overweight' },
			{ href: 'https://www.cdc.gov/healthyweight/assessing/bmi/index.html', label: 'CDC: About Adult BMI' }
		]
	};

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let height = 170; // cm
	let weight = 70; // kg

	$: bmi = weight / Math.pow(height / 100, 2);
	$: bmiCategory = getBmiCategory(bmi);
	$: bmiColor = getBmiColor(bmi);

	function getBmiCategory(bmi: number): string {
		if (bmi < 18.5) return t('bmi.underweight');
		if (bmi < 25) return t('bmi.normal');
		if (bmi < 30) return t('bmi.overweight');
		return t('bmi.obese');
	}

	function getBmiColor(bmi: number): string {
		if (bmi < 18.5) return 'text-blue-500';
		if (bmi < 25) return 'text-green-500';
		if (bmi < 30) return 'text-yellow-500';
		return 'text-red-500';
	}

	function getBmiBarPosition(bmi: number): number {
		// Scale BMI to percentage (15-40 range)
		const min = 15;
		const max = 40;
		const clamped = Math.min(Math.max(bmi, min), max);
		return ((clamped - min) / (max - min)) * 100;
	}

	const bmiRanges = [
		{ label: 'bmi.underweight', range: '< 18.5', color: 'bg-blue-400' },
		{ label: 'bmi.normal', range: '18.5 - 24.9', color: 'bg-green-400' },
		{ label: 'bmi.overweight', range: '25 - 29.9', color: 'bg-yellow-400' },
		{ label: 'bmi.obese', range: '>= 30', color: 'bg-red-400' }
	];
</script>

<svelte:head>
	<title>{t('bmi.title')} - SD.gy</title>
	<meta name="description" content={t('bmi.desc')} />
	<link rel="canonical" href="https://sd.gy/{lang}/bmi-calculator" />
	<meta property="og:title" content="{t('bmi.title')} - SD.gy" />
	<meta property="og:description" content={t('bmi.desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/bmi-calculator" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('bmi.title')} - SD.gy" />
	<meta name="twitter:description" content={t('bmi.desc')} />
</svelte:head>

<div class="max-w-2xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('bmi.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('bmi.desc')}</p>
	</div>

	<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
		<!-- Input Fields -->
		<div class="grid grid-cols-2 gap-4 mb-6">
			<div>
				<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('bmi.height')} (cm)</label>
				<input
					type="number"
					bind:value={height}
					min="100"
					max="250"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent text-lg"
				/>
				<input
					type="range"
					bind:value={height}
					min="100"
					max="250"
					class="w-full mt-2 accent-violet-500"
				/>
			</div>
			<div>
				<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('bmi.weight')} (kg)</label>
				<input
					type="number"
					bind:value={weight}
					min="30"
					max="200"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent text-lg"
				/>
				<input
					type="range"
					bind:value={weight}
					min="30"
					max="200"
					class="w-full mt-2 accent-violet-500"
				/>
			</div>
		</div>

		<!-- BMI Result -->
		<div class="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 mb-6">
			<h3 class="text-sm text-gray-600 dark:text-dark-400 mb-2">{t('bmi.yourBmi')}</h3>
			<div class="flex items-baseline gap-3">
				<span class="text-5xl font-bold {bmiColor}">{bmi.toFixed(1)}</span>
				<span class="text-xl {bmiColor}">{bmiCategory}</span>
			</div>
		</div>

		<!-- BMI Scale -->
		<div class="mb-6">
			<div class="relative h-4 rounded-full overflow-hidden flex">
				<div class="flex-1 bg-blue-400"></div>
				<div class="flex-1 bg-green-400"></div>
				<div class="flex-1 bg-yellow-400"></div>
				<div class="flex-1 bg-red-400"></div>
			</div>
			<div
				class="relative -mt-1"
				style="left: {getBmiBarPosition(bmi)}%"
			>
				<div class="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-gray-900 dark:border-b-white transform -translate-x-1/2"></div>
			</div>
			<div class="flex justify-between text-xs text-gray-500 dark:text-dark-400 mt-2">
				<span>15</span>
				<span>18.5</span>
				<span>25</span>
				<span>30</span>
				<span>40</span>
			</div>
		</div>

		<!-- BMI Ranges -->
		<div>
			<h3 class="text-sm text-gray-600 dark:text-dark-400 mb-3">{t('bmi.range')}</h3>
			<div class="grid grid-cols-2 gap-2">
				{#each bmiRanges as range}
					<div class="flex items-center gap-2 p-2 rounded-lg bg-gray-50 dark:bg-dark-700">
						<div class="w-3 h-3 rounded-full {range.color}"></div>
						<span class="text-sm text-gray-700 dark:text-dark-300">{t(range.label)}</span>
						<span class="text-xs text-gray-500 dark:text-dark-400 ml-auto">{range.range}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<ToolContent
		{lang}
		toolName="BMI Calculator"
		toolUrl="https://sd.gy/{lang}/bmi-calculator"
		lastUpdated="2026-04-30"
		category="Daily Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sd.gy/${lang}` },
			{ name: 'Tools', url: `https://sd.gy/${lang}` },
			{ name: 'BMI Calculator', url: `https://sd.gy/${lang}/bmi-calculator` }
		]}
		content={toolContent}
	/>
</div>
