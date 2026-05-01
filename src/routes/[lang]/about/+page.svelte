<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const content = {
		en: {
			title: 'About SD.gy',
			subtitle: 'Free Online Calculators',
			description: 'SD.gy provides free, fast, and privacy-focused calculator tools that work directly in your browser. No uploads, no servers — just instant calculations.',
			mission: {
				title: 'Our Mission',
				text: 'SD.gy exists to make everyday calculations effortless — from working out a tip and splitting a bill to checking your BMI, calculating your age in days, or estimating your monthly loan payment. We believe simple math tools should load instantly, work offline-friendly in your browser, and never demand a signup. Whether you are a student, parent, traveler, or just need a quick answer, SD.gy gives you the number without the friction.'
			},
			whoWeAre: {
				title: 'Who We Are',
				text: 'SD.gy is operated by SDK Co., Ltd. — a software company founded in 2024 that builds developer-focused tools and free online utilities. Our team has shipped consumer web products used by millions, and we apply that same attention to UX, accuracy, and speed to every calculator on this site.',
				company: 'Company',
				companyName: 'SDK Co., Ltd.',
				founded: 'Founded',
				foundedYear: '2024',
				focus: 'Focus',
				focusArea: 'Developer tools, calculators, free utilities'
			},
			features: {
				title: 'Our Tools',
				intro: '18+ everyday calculators across math, health, finance, time, and conversion categories — all free, all client-side.',
				items: [
					'Calculator — basic arithmetic with history',
					'Percentage Calculator — percentages, discounts, and changes',
					'Unit Converter — length, weight, temperature, area, volume',
					'Date Calculator — D-day, date differences, and add/subtract days',
					'Age Calculator — exact age in years, months, and days from birthdate',
					'BMI Calculator — Body Mass Index with health-range guidance',
					'Calorie Calculator — daily calorie needs based on activity level',
					'Tip Calculator — tips and split bills among any group size',
					'Loan Calculator — monthly payment and total interest',
					'Salary Calculator — gross-to-net pay with deductions',
					'Tax Calculator — income tax estimation by bracket',
					'Currency Converter — live FX-rate conversion',
					'Time Zone Converter — convert times across global zones',
					'Random Number / Password Generator — quick random tools',
					'And more — countdown timers, fuel cost, GPA, and more'
				]
			},
			principles: {
				title: 'Our Principles',
				items: [
					{ title: 'Free Forever', description: 'Every calculator is free. Ads keep tools free for everyone.' },
					{ title: 'Privacy-First', description: 'Calculations happen in your browser. Your numbers never leave your device.' },
					{ title: 'Fast by Default', description: 'Sub-second load times powered by Cloudflare’s global edge network.' },
					{ title: 'Open Access', description: 'No login, no signup, no email required. Just open and use.' },
					{ title: 'Mobile-First', description: 'Every calculator is touch-friendly and works great on phones and tablets.' }
				]
			},
			privacy: {
				title: 'Privacy First',
				text: 'All calculations happen entirely in your browser. The values you enter — weights, salaries, dates, loan amounts — are never uploaded to any server and never stored anywhere outside your device. The only data we collect is standard, aggregated analytics (page views, country, device type) and AdSense-related cookies as described in our Privacy Policy. We never sell or share personal data.'
			},
			contact: {
				title: 'Contact',
				text: 'For questions, feedback, bug reports, or partnership inquiries, please reach us at',
				email: 'contact@sd.gy'
			},
			operator: {
				title: 'Operated by',
				text: 'SDK Co., Ltd. — building developer-focused tools and free utilities since 2024.'
			}
		},
		ko: {
			title: 'SD.gy 소개',
			subtitle: '무료 온라인 계산기',
			description: 'SD.gy는 브라우저에서 바로 작동하는 무료, 빠른, 개인정보 보호 중심의 계산기 도구를 제공합니다. 업로드 없이, 서버 없이 — 즉시 계산.',
			mission: {
				title: '우리의 미션',
				text: 'SD.gy는 일상 속 계산 — 팁 계산과 더치페이부터 BMI 확인, 일 단위 나이 계산, 월 상환액 추정까지 — 을 손쉽게 만들기 위해 존재합니다. 간단한 수학 도구는 즉시 로드되고, 브라우저에서 오프라인 친화적으로 작동하며, 가입을 요구하지 말아야 한다고 믿습니다. 학생이든, 부모든, 여행자든, 빠른 답이 필요한 누구든 SD.gy는 마찰 없이 숫자를 제공합니다.'
			},
			whoWeAre: {
				title: '운영 정보',
				text: 'SD.gy는 2024년 설립된 소프트웨어 회사 SDK Co., Ltd.가 운영합니다. 우리 팀은 수백만 명이 사용하는 컨슈머 웹 제품을 출시한 경험이 있으며, UX·정확성·속도에 대한 동일한 관심을 사이트의 모든 계산기에 적용합니다.',
				company: '회사',
				companyName: 'SDK Co., Ltd.',
				founded: '설립',
				foundedYear: '2024',
				focus: '주력 분야',
				focusArea: '개발자 도구, 계산기, 무료 유틸리티'
			},
			features: {
				title: '도구 소개',
				intro: '수학, 건강, 금융, 시간, 변환 카테고리에 걸친 18개 이상의 일상 계산기 — 모두 무료, 모두 클라이언트 측 실행.',
				items: [
					'계산기 — 기록 기능이 있는 기본 사칙연산',
					'퍼센트 계산기 — 퍼센트, 할인율, 증감률',
					'단위 변환기 — 길이, 무게, 온도, 면적, 부피',
					'날짜 계산기 — D-day, 날짜 차이, 일수 가감',
					'나이 계산기 — 생년월일로 정확한 년/월/일 계산',
					'BMI 계산기 — 건강 범위 가이드가 있는 체질량지수',
					'칼로리 계산기 — 활동량 기반 일일 칼로리 필요량',
					'팁 계산기 — 팁 계산 및 다인원 더치페이',
					'대출 계산기 — 월 상환액 및 총 이자',
					'급여 계산기 — 공제 포함 실수령액',
					'세금 계산기 — 과세 구간별 소득세 추정',
					'환율 변환기 — 실시간 환율 변환',
					'시간대 변환기 — 전 세계 시간대 변환',
					'랜덤 번호/비밀번호 생성기 — 빠른 랜덤 도구',
					'그 외 — 카운트다운 타이머, 유류비, 학점 등'
				]
			},
			principles: {
				title: '우리의 원칙',
				items: [
					{ title: '영원히 무료', description: '모든 계산기가 무료입니다. 광고로 모두에게 무료 제공.' },
					{ title: '개인정보 우선', description: '계산은 브라우저에서. 숫자는 기기를 떠나지 않습니다.' },
					{ title: '기본적으로 빠름', description: 'Cloudflare 글로벌 엣지로 1초 미만 로딩.' },
					{ title: '오픈 액세스', description: '로그인 없음, 가입 없음, 이메일 불필요. 열고 바로 사용.' },
					{ title: '모바일 우선', description: '모든 계산기가 터치 친화적이며 폰과 태블릿에서 잘 작동합니다.' }
				]
			},
			privacy: {
				title: '개인정보 보호 우선',
				text: '모든 계산은 브라우저에서 완전히 이루어집니다. 입력한 값 — 체중, 급여, 날짜, 대출 금액 — 은 절대 서버로 업로드되지 않으며 기기 외부 어디에도 저장되지 않습니다. 우리가 수집하는 데이터는 표준 집계 분석(페이지뷰, 국가, 기기 유형)과 개인정보처리방침에 명시된 AdSense 관련 쿠키뿐입니다. 개인정보를 절대 판매하거나 공유하지 않습니다.'
			},
			contact: {
				title: '연락처',
				text: '질문, 피드백, 버그 제보, 파트너십 문의는 다음으로 연락해 주세요',
				email: 'contact@sd.gy'
			},
			operator: {
				title: '운영',
				text: 'SDK Co., Ltd. — 2024년부터 개발자 도구 및 무료 유틸리티 제공.'
			}
		},
		ja: {
			title: 'SD.gy について',
			subtitle: '無料オンライン電卓',
			description: 'SD.gyは、ブラウザで直接動作する無料、高速、プライバシー重視の計算ツールを提供します。アップロード不要、サーバー不要 — 即座に計算。',
			mission: {
				title: '私たちのミッション',
				text: 'SD.gyは日常の計算 — チップの計算と割り勘、BMIチェック、日数単位での年齢計算、月々の返済額の見積もり — を労力なくこなすために存在します。シンプルな数学ツールは即座にロードされ、ブラウザでオフラインフレンドリーに動作し、サインアップを要求すべきでないと信じています。学生・親・旅行者・素早く答えが必要な人 — 誰にでもSD.gyは摩擦なく数字を提供します。'
			},
			whoWeAre: {
				title: '運営情報',
				text: 'SD.gyは2024年に設立されたソフトウェア会社SDK Co., Ltd.が運営しています。チームは数百万人に使われるコンシューマーウェブ製品を出荷した経験があり、UX・正確性・速度に対する同じこだわりをサイトのすべての計算機に注いでいます。',
				company: '会社',
				companyName: 'SDK Co., Ltd.',
				founded: '設立',
				foundedYear: '2024年',
				focus: '注力分野',
				focusArea: '開発者ツール、計算機、無料ユーティリティ'
			},
			features: {
				title: 'ツール紹介',
				intro: '数学、健康、金融、時間、変換カテゴリにわたる18以上の日常計算機 — すべて無料、すべてクライアント側で実行。',
				items: [
					'電卓 — 履歴付きの基本四則演算',
					'パーセント計算機 — パーセント、割引率、増減率',
					'単位変換 — 長さ、重さ、温度、面積、体積',
					'日付計算機 — D-day、日付の差、日数の加減',
					'年齢計算機 — 生年月日から年/月/日を正確に計算',
					'BMI計算機 — 健康範囲ガイド付きの体格指数',
					'カロリー計算機 — 活動量に基づく1日の必要カロリー',
					'チップ計算機 — チップ計算と人数別割り勘',
					'ローン計算機 — 月々の返済額と総利息',
					'給与計算機 — 控除を含む手取り額',
					'税金計算機 — 税率区分別所得税推定',
					'通貨換算 — リアルタイム為替換算',
					'タイムゾーン変換 — 世界各地の時間帯を変換',
					'乱数/パスワードジェネレーター — 高速ランダムツール',
					'その他 — カウントダウンタイマー、燃料費、GPA など'
				]
			},
			principles: {
				title: '私たちの原則',
				items: [
					{ title: '永久無料', description: 'すべての計算機は無料です。広告で全員に無料提供。' },
					{ title: 'プライバシー優先', description: '計算はブラウザで。数字はデバイスから出ません。' },
					{ title: 'デフォルトで高速', description: 'Cloudflareのグローバルエッジで1秒未満のロード。' },
					{ title: 'オープンアクセス', description: 'ログイン・登録・メール不要。開いてすぐ使える。' },
					{ title: 'モバイルファースト', description: 'すべての計算機がタッチフレンドリーで、スマホ・タブレットで快適。' }
				]
			},
			privacy: {
				title: 'プライバシー優先',
				text: 'すべての計算はブラウザで完全に行われます。入力した値 — 体重、給与、日付、ローン金額 — はサーバーにアップロードされず、デバイス外のどこにも保存されません。収集するデータは標準的な集計分析(ページビュー・国・デバイスタイプ)とプライバシーポリシーに記載のAdSense関連クッキーのみです。個人データを販売・共有することは一切ありません。'
			},
			contact: {
				title: 'お問い合わせ',
				text: 'ご質問、フィードバック、バグ報告、パートナーシップのお問い合わせは下記まで',
				email: 'contact@sd.gy'
			},
			operator: {
				title: '運営',
				text: 'SDK Co., Ltd. — 2024年から開発者ツールと無料ユーティリティを提供。'
			}
		},
		zh: {
			title: '关于 SD.gy',
			subtitle: '免费在线计算器',
			description: 'SD.gy 提供免费、快速、注重隐私的计算工具，直接在您的浏览器中运行。无需上传，无需服务器 — 即时计算。',
			mission: {
				title: '我们的使命',
				text: 'SD.gy 旨在让日常计算变得轻而易举 — 从计算小费、AA 分账到检查 BMI、按天计算年龄或估算月供。我们相信简单的数学工具应当即时加载、在浏览器中友好地离线工作，且永远不需要注册。无论您是学生、家长、旅行者，还是只需要一个快速答案，SD.gy 都能让您毫无阻力地获得数字。'
			},
			whoWeAre: {
				title: '运营信息',
				text: 'SD.gy 由成立于 2024 年的软件公司 SDK Co., Ltd. 运营。我们的团队曾发布过被数百万人使用的消费级 Web 产品，并将同样的 UX、准确性和速度的关注度应用到本站的每一款计算器上。',
				company: '公司',
				companyName: 'SDK Co., Ltd.',
				founded: '成立',
				foundedYear: '2024 年',
				focus: '专注领域',
				focusArea: '开发者工具、计算器、免费实用工具'
			},
			features: {
				title: '工具介绍',
				intro: '18+ 款日常计算器，涵盖数学、健康、金融、时间和转换等类别 — 全部免费，全部客户端运行。',
				items: [
					'计算器 — 带历史记录的基本四则运算',
					'百分比计算器 — 百分比、折扣率、增减率',
					'单位转换器 — 长度、重量、温度、面积、体积',
					'日期计算器 — D-day、日期差、加减天数',
					'年龄计算器 — 根据出生日期精确计算年/月/日',
					'BMI 计算器 — 含健康范围提示的身体质量指数',
					'卡路里计算器 — 基于活动量的每日所需卡路里',
					'小费计算器 — 计算小费和多人分账',
					'贷款计算器 — 月供和总利息',
					'薪资计算器 — 含扣除的税后收入',
					'税务计算器 — 按税率档位估算所得税',
					'货币转换器 — 实时汇率换算',
					'时区转换器 — 全球时区转换',
					'随机数/密码生成器 — 快速随机工具',
					'更多 — 倒计时、油费、GPA 等'
				]
			},
			principles: {
				title: '我们的原则',
				items: [
					{ title: '永久免费', description: '所有计算器均免费。靠广告为所有人保持免费。' },
					{ title: '隐私优先', description: '计算在浏览器中进行。您的数字永不离开设备。' },
					{ title: '默认快速', description: '由 Cloudflare 全球边缘网络驱动，加载时间低于 1 秒。' },
					{ title: '开放访问', description: '无需登录、注册或邮箱。打开即用。' },
					{ title: '移动优先', description: '每个计算器都对触摸友好，在手机和平板上表现出色。' }
				]
			},
			privacy: {
				title: '隐私优先',
				text: '所有计算完全在您的浏览器中进行。您输入的值 — 体重、薪资、日期、贷款金额 — 永不被上传到任何服务器，也不会存储在设备之外的任何地方。我们仅收集标准的聚合分析数据（页面浏览量、国家、设备类型）以及隐私政策中所述的 AdSense 相关 Cookie。我们绝不出售或共享个人数据。'
			},
			contact: {
				title: '联系我们',
				text: '如有问题、反馈、错误报告或合作咨询，请联系',
				email: 'contact@sd.gy'
			},
			operator: {
				title: '运营商',
				text: 'SDK Co., Ltd. — 自 2024 年起提供开发者工具和免费实用工具。'
			}
		}
	};

	$: t = content[lang] || content.en;
</script>

<svelte:head>
	<title>{t.title} - SD.gy</title>
	<meta name="description" content={t.description} />
	<link rel="canonical" href="https://sd.gy/{lang}/about" />
	<meta property="og:title" content="{t.title} - SD.gy" />
	<meta property="og:description" content={t.description} />
	<meta property="og:url" content="https://sd.gy/{lang}/about" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t.title} - SD.gy" />
	<meta name="twitter:description" content={t.description} />
</svelte:head>

<div class="max-w-3xl mx-auto px-4 py-12">
	<h1 class="text-4xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t.title}</h1>
	<p class="text-xl text-violet-500 mb-8">{t.subtitle}</p>

	<p class="text-lg text-gray-700 dark:text-dark-300 mb-12">
		{t.description}
	</p>

	<section class="mb-10">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.mission.title}</h2>
		<p class="text-gray-700 dark:text-dark-300 leading-relaxed">{t.mission.text}</p>
	</section>

	<section class="mb-10">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.whoWeAre.title}</h2>
		<p class="text-gray-700 dark:text-dark-300 leading-relaxed mb-6">{t.whoWeAre.text}</p>
		<dl class="grid sm:grid-cols-3 gap-4 bg-violet-50 dark:bg-dark-800 rounded-xl p-6 border border-violet-200 dark:border-dark-700">
			<div>
				<dt class="text-xs text-violet-600 dark:text-violet-400 uppercase tracking-wide mb-1">{t.whoWeAre.company}</dt>
				<dd class="text-gray-900 dark:text-dark-100 font-semibold">{t.whoWeAre.companyName}</dd>
			</div>
			<div>
				<dt class="text-xs text-violet-600 dark:text-violet-400 uppercase tracking-wide mb-1">{t.whoWeAre.founded}</dt>
				<dd class="text-gray-900 dark:text-dark-100 font-semibold">{t.whoWeAre.foundedYear}</dd>
			</div>
			<div>
				<dt class="text-xs text-violet-600 dark:text-violet-400 uppercase tracking-wide mb-1">{t.whoWeAre.focus}</dt>
				<dd class="text-gray-900 dark:text-dark-100 font-semibold">{t.whoWeAre.focusArea}</dd>
			</div>
		</dl>
	</section>

	<section class="mb-10">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.features.title}</h2>
		<p class="text-gray-700 dark:text-dark-300 mb-4">{t.features.intro}</p>
		<ul class="space-y-3">
			{#each t.features.items as item}
				<li class="flex items-start gap-3 text-gray-700 dark:text-dark-300">
					<span class="text-violet-500 mt-1">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
						</svg>
					</span>
					<span>{item}</span>
				</li>
			{/each}
		</ul>
	</section>

	<section class="mb-10">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.principles.title}</h2>
		<div class="space-y-3">
			{#each t.principles.items as principle}
				<div class="bg-violet-50 dark:bg-dark-800 rounded-lg p-4 border-l-4 border-violet-500">
					<h3 class="font-semibold text-gray-900 dark:text-dark-100 mb-1">{principle.title}</h3>
					<p class="text-gray-600 dark:text-dark-400 text-sm">{principle.description}</p>
				</div>
			{/each}
		</div>
	</section>

	<section class="mb-10">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.privacy.title}</h2>
		<p class="text-gray-700 dark:text-dark-300 leading-relaxed">{t.privacy.text}</p>
	</section>

	<section class="mb-10">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.contact.title}</h2>
		<p class="text-gray-700 dark:text-dark-300">
			{t.contact.text}
			<a href="mailto:{t.contact.email}" class="text-violet-600 dark:text-violet-400 hover:underline">{t.contact.email}</a>
		</p>
	</section>

	<section>
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.operator.title}</h2>
		<p class="text-gray-700 dark:text-dark-300">{t.operator.text}</p>
	</section>
</div>
