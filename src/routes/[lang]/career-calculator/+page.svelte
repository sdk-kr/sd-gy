<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';

	const toolContent = {
		about: {
			en: 'The career calculator adds up your work experience across multiple positions and shows the total in years, months, and days. Add as many roles as you need, mark your current job, and let the tool handle overlaps and gaps. Perfect for resumes, job applications, and salary negotiations where exact tenure matters.',
			ko: '경력 계산기는 여러 회사·직책의 근무 기간을 합산해 총 경력 연차를 연·월·일 단위로 보여 줍니다. 현재 재직 중인 직책은 체크박스로 표시할 수 있고, 직책을 자유롭게 추가·삭제할 수 있습니다. 이력서, 입사 지원서, 연봉 협상 등에서 정확한 경력이 필요한 상황에 유용합니다.',
			ja: 'キャリア計算機は、複数の職歴の勤務期間を合算し、総経験年数を年・月・日で表示します。現在在籍中のポジションはチェックボックスで指定でき、職歴の追加・削除も自由に行えます。履歴書や転職、給与交渉に役立ちます。',
			zh: '工龄计算器可累加多段工作经历的时长，按年、月、日显示总工龄。可勾选当前在职岗位，并自由增删职位条目。适用于简历填写、求职申请、薪资谈判等需要精确工龄的场景。'
		},
		howTo: {
			en: [
				'Enter the start date of your first position.',
				'If still employed there, check "Current" — otherwise enter the end date.',
				'Click "Add Position" for each additional role.',
				'Review the total experience displayed in years, months, and days.',
				'Adjust dates anytime to see how breaks or new roles change your total.'
			],
			ko: [
				'첫 직책의 입사일을 입력합니다.',
				'재직 중이면 "현재" 체크박스를 선택하고, 아니면 퇴사일을 입력합니다.',
				'추가 직책마다 "직책 추가" 버튼을 누릅니다.',
				'합산된 총 경력 연차(연·월·일)를 확인합니다.',
				'날짜를 바꿔 가며 공백기·신규 경력이 합산에 미치는 영향을 살펴봅니다.'
			],
			ja: [
				'最初の職歴の入社日を入力します。',
				'在職中の場合は「現在」をチェック、それ以外は退職日を入力します。',
				'追加の職歴ごとに「職歴を追加」ボタンを押します。',
				'合計経験を年・月・日で確認します。',
				'日付を変更して、ブランクや新しい職歴の影響を確認します。'
			],
			zh: [
				'输入第一段工作的入职日期。',
				'若仍在职勾选"当前"，否则填写离职日期。',
				'每段经历点击"添加职位"按钮。',
				'查看以年、月、日显示的总工龄。',
				'调整日期以查看空档或新经历对总工龄的影响。'
			]
		},
		useCases: {
			en: [
				'Filling out the experience section on a resume or LinkedIn profile.',
				'Calculating eligibility for promotions, awards, or seniority benefits.',
				'Preparing for salary negotiations with a precise tenure number.',
				'Verifying minimum-experience requirements for job postings.',
				'Tracking total industry experience across changes of employer.'
			],
			ko: [
				'이력서나 LinkedIn 경력란 작성.',
				'승진, 표창, 호봉 등 연차에 따른 자격 확인.',
				'정확한 경력 수치를 들고 연봉 협상 준비.',
				'채용 공고의 최소 경력 요건 충족 여부 확인.',
				'이직 이력을 포함한 업계 총 경력 관리.'
			],
			ja: [
				'履歴書やLinkedInのキャリア欄記入。',
				'昇進、表彰、年功制度の対象確認。',
				'給与交渉のための正確な勤続年数の準備。',
				'求人の最低経験要件の確認。',
				'転職を含む業界総経験の管理。'
			],
			zh: [
				'填写简历或 LinkedIn 经历部分。',
				'确认晋升、表彰或年资福利资格。',
				'准备薪资谈判时的精确工龄数据。',
				'核对招聘启事的最低经验要求。',
				'追踪跨公司变动的行业总工龄。'
			]
		},
		faq: {
			en: [
				{ q: 'How are overlapping positions counted?', a: 'Each position is counted independently and added together. For accurate non-overlapping totals, avoid duplicating the same period across two positions.' },
				{ q: 'How is "1 year" defined here?', a: '365 days. The tool then groups remaining days into 30-day months for readability — useful for resumes but not for legal contracts.' },
				{ q: 'Does it count internships and contract work?', a: 'Yes. Add them as separate positions. You decide what counts as "career experience" for your purpose.' },
				{ q: 'Why are the totals slightly different from my HR system?', a: 'HR systems often use exact calendar months and may exclude probation or unpaid leave. This tool uses fixed 365-day years and 30-day months for a quick estimate.' }
			],
			ko: [
				{ q: '기간이 겹치는 직책은 어떻게 합산되나요?', a: '각 직책을 독립적으로 합산하므로, 같은 기간이 두 직책에 들어 있으면 중복 계산됩니다. 정확한 합계를 원하면 겹치지 않게 입력하세요.' },
				{ q: '"1년"의 기준은?', a: '365일을 1년으로, 남은 일수는 30일을 1개월로 환산해 표시합니다. 이력서용 빠른 추산에는 적합하지만, 법적 계약에는 정확한 캘린더 기준이 별도로 필요합니다.' },
				{ q: '인턴이나 계약직도 계산되나요?', a: '직책을 따로 추가하면 모두 합산됩니다. 어떤 경력을 포함할지는 본인의 판단에 맡깁니다.' },
				{ q: '회사 인사 시스템과 결과가 약간 다릅니다.', a: '인사 시스템은 정확한 달력 월을 사용하거나 수습·휴직을 제외하기도 합니다. 이 도구는 빠른 추산을 위해 365일·30일 기준을 사용합니다.' }
			]
		},
		related: [
			{ href: '/date-calculator', label: { en: 'Date Calculator', ko: '날짜 계산기', ja: '日付計算機', zh: '日期计算器' } },
			{ href: '/age-calculator', label: { en: 'Age Calculator', ko: '나이 계산기', ja: '年齢計算機', zh: '年龄计算器' } },
			{ href: '/salary-calculator', label: { en: 'Salary Calculator', ko: '급여 계산기', ja: '給与計算機', zh: '薪资计算器' } }
		],
		externalRefs: [
			{ href: 'https://www.bls.gov/ooh/', label: 'BLS: Occupational Outlook Handbook' },
			{ href: 'https://en.wikipedia.org/wiki/Career', label: 'Career - Wikipedia' }
		]
	};

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
	<link rel="canonical" href="https://sd.gy/{lang}/career-calculator" />
	<meta property="og:title" content="{t('career.title')} - SD.gy" />
	<meta property="og:description" content={t('career.desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/career-calculator" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('career.title')} - SD.gy" />
	<meta name="twitter:description" content={t('career.desc')} />
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

	<ToolContent
		{lang}
		toolName="Career Calculator"
		toolUrl="https://sd.gy/{lang}/career-calculator"
		lastUpdated="2026-04-30"
		category="Daily Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sd.gy/${lang}` },
			{ name: 'Tools', url: `https://sd.gy/${lang}` },
			{ name: 'Career Calculator', url: `https://sd.gy/${lang}/career-calculator` }
		]}
		content={toolContent}
	/>
</div>
