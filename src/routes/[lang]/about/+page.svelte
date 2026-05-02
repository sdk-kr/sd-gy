<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const SITE_NAME = 'SD.gy';
	const SITE_DOMAIN = 'sd.gy';
	const CONTACT_EMAIL = 'contact@sd.gy';
	const COMPANY_NAME = 'SDK Co., Ltd.';
	const BUSINESS_NUMBER = '871-81-03242';
	const ECOMMERCE_NUMBER = '2024-고양일산서-1820';
	const COMPANY_ADDRESS = '제주특별자치도 제주시 남성로 127, 4층';
	const COMPANY_ADDRESS_EN = '4F, 127 Namseong-ro, Jeju-si, Jeju Special Self-Governing Province, Republic of Korea';

	const translations = {
		en: {
			title: 'About SD.gy',
			subtitle: "Free, fast, privacy-focused calculators for the math you actually do in real life.",

			storyHeading: 'Our Story',
			storyParagraphs: [
				"SD.gy started in 2024 because the team kept catching themselves googling the same calculations on their phones — split a dinner bill three ways, figure out a child's age in months for a doctor's form, convert a US recipe's cups to grams, work out the BMI my doctor mentioned in passing.",
				"Every result on Google was either an answer-box that gave you a number with no working, or a website wrapped in five layers of pop-ups, app installs, and \"for the full breakdown please…\" upsells. We wanted somewhere to land, tap five fields, see the answer, and close the tab. Mobile-first because most of these questions happen on a phone, in a hurry.",
				"We launched with the eight calculators we used most ourselves. We add a calculator only when at least two of us notice we are wishing for it. Today the site has more than 18 calculators across math, health, finance, time, and conversions, and every one of them runs entirely in your browser. Your weight, salary, and date inputs never reach our servers — there is nothing to leak.",
				"Display advertising pays for hosting and writing. Ad density stays well below the industry average and ads are never placed between an input and its result. If an ad ever made a calculator harder to use, we move or remove it."
			],

			missionHeading: 'Our Mission',
			missionParagraphs: [
				`${SITE_NAME} exists to give working people a fast, friction-free toolbox for the everyday calculators they actually need every day. We believe everyday utilities should be free, accurate, fast, mobile-friendly, and respect your privacy by default. Whether you are at your desk, on a train, or in a parking lot trying to settle a dinner bill, we want you to find your answer in seconds.`,
				`We measure success in three numbers: time-to-answer (target: under 3 seconds from cold load to result), inputs-to-answer (target: as few as possible), and bytes-of-your-data-on-our-servers (target: zero). Everything else is downstream of those numbers.`,
				`Long-term, our mission is broader than the current tool catalogue. We want ${SITE_NAME} to be the place a friend recommends when you say "is there a calculator for that?" — and have you not feel a flicker of regret when you click the link.`
			],

			whoWeAreHeading: 'Who We Are',
			whoWeAreParagraphs: [
				`${SITE_NAME} is operated by ${COMPANY_NAME}, a Korean software company founded in 2024 that builds developer-focused tools and free online utilities. Our team has shipped consumer and developer web products used by millions, and we apply that same attention to UX, accuracy, and speed to every calculator on this site.`,
				`Beyond ${SITE_NAME}, the same team operates JavaScript.ac (interactive JavaScript learning), SDK.is (developer utilities), SDK.bz (financial and crypto calculators), and SD.gy (everyday calculators). Lessons learned on one site — accessibility patterns, performance budgets, ad-density thresholds — get applied across all of them.`
			],
			company: 'Company',
			companyName: COMPANY_NAME,
			founded: 'Founded',
			foundedYear: '2024',
			focus: 'Focus',
			focusArea: 'Developer tools, calculators, free utilities',
			businessNumberLabel: 'Business Registration',
			businessNumberValue: BUSINESS_NUMBER,
			ecommerceNumberLabel: 'E-Commerce Registration',
			ecommerceNumberValue: ECOMMERCE_NUMBER,
			addressLabel: 'Address',
			addressValue: COMPANY_ADDRESS_EN,

			catalogHeading: `What You'll Find on ${SITE_NAME}`,
			catalogIntro: `${SITE_NAME} ships 18+ everyday calculators today, all free, all running 100% in your browser.`,
			catalogItems: [
					{ icon: "+", title: "Basic Calculator", description: "Standard arithmetic with calculation history and keyboard support. Useful when you do not want to leave the browser tab." },
					{ icon: "%", title: "Percentage Calculator", description: "Compute percentages, discounts, percentage changes, and tip splits with a single tap." },
					{ icon: "↔", title: "Unit Converter", description: "Length, weight, temperature, area, volume, speed, and energy. Supports both metric and imperial." },
					{ icon: "📅", title: "Date Calculator", description: "Compute D-day, the difference between two dates, and add or subtract days, months, or years." },
					{ icon: "🎂", title: "Age Calculator", description: "Exact age from birthdate in years, months, weeks, and days. Useful for forms and visa applications." },
					{ icon: "⚖", title: "BMI Calculator", description: "Body Mass Index with health-range guidance for both metric and imperial users." },
					{ icon: "🔥", title: "Calorie Calculator", description: "Daily calorie needs based on age, sex, weight, height, and activity level using the Mifflin-St Jeor equation." },
					{ icon: "$", title: "Tip Calculator", description: "Calculate tip and split the bill across any group size. Handles tax-inclusive and tax-exclusive subtotals." },
					{ icon: "L", title: "Loan Calculator", description: "Monthly payment and total interest for a fixed-rate loan. Includes a simple amortisation table." },
					{ icon: "💼", title: "Salary Calculator", description: "Gross-to-net pay with the major Korean deductions (income tax, national pension, health insurance, employment insurance)." },
					{ icon: "T", title: "Tax Calculator", description: "Income-tax estimation by bracket. Brackets are documented in the guide and updated when tax law changes." },
					{ icon: "🌍", title: "Currency Converter", description: "Live FX-rate conversion across major currencies for travel, online shopping, and remittance estimates." }
			],

			principlesHeading: 'Our Principles',
			principles: [
				{ title: 'Free Forever', description: 'No paywalls, no premium tier. Ads keep tools free for everyone.' },
				{ title: 'Privacy-First', description: 'All processing happens in your browser. Your data never leaves your device.' },
				{ title: 'Fast by Default', description: 'Sub-second load times powered by Cloudflare\'s global edge network.' },
				{ title: 'Open Access', description: 'No login, no signup, no email required. Just open and use.' },
				{ title: 'Mobile-First', description: 'Every tool is touch-friendly and works great on phones and tablets.' },
				{ title: 'No Dark Patterns', description: 'No fake countdown timers, no roach-motel cookie banners, no manufactured scarcity.' }
			],

			techHeading: 'Technology Stack',
			techIntro: `We chose every piece of the stack to optimise for read speed, write speed, and long-term maintainability with a small team.`,
			techParagraphs: [
				`Our frontend is built on SvelteKit and TypeScript, styled with Tailwind CSS, and deployed to Cloudflare Pages. We use no traditional backend: pages are statically pre-rendered or generated at request time at the edge, calculator/tool logic runs entirely in the user's browser, and dynamic features that need persistence use the user's own localStorage.`,
				`This architecture has practical consequences for you. First, time-to-interactive is measured in tens of milliseconds, not seconds. Second, your inputs never leave your device, so there is no server log to leak. Third, our infrastructure cost is low enough that we can keep ${SITE_NAME} free indefinitely without ever introducing a "Pro" tier.`
			],
			techStack: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages', 'Cloudflare Workers'],

			privacyHeading: 'Privacy Promise',
			privacyParagraphs: [
				`All everyday calculators on ${SITE_NAME} run client-side in your browser. The text, files, or values you input are never transmitted to our servers. The only data we collect is standard, aggregated analytics (page views, country, device type) and AdSense-related cookies as described in our Privacy Policy. We never sell or share personal data, we never read your inputs, and we never use your activity to train machine-learning models.`,
				`If our ad provider changes its consent rules, we will update the consent banner immediately and post a clear changelog entry on the Privacy Policy page. We treat consent as a permanent design choice, not a compliance afterthought.`
			],

			contactHeading: 'Contact Us',
			contactIntro: `Have questions, suggestions, or feedback? We'd love to hear from you.`,
			contactPoints: [
				`General questions and feedback: ${CONTACT_EMAIL}`,
				`Bug reports: please include reproduction steps, browser, and OS.`,
				`Tool suggestions: tell us which calculation or utility you wish existed — real use-cases move our roadmap.`,
				`Partnership and content collaboration: include "Partnership" in your subject line.`,
				`Press and media: same e-mail address, with "Press" in the subject line.`
			],

			legalHeading: 'Legal & Operator Information',
			legalNote: `${SITE_NAME} is operated by ${COMPANY_NAME}, a Korean corporation registered with the Republic of Korea's Ministry of the Interior and Safety and the Korean Fair Trade Commission.`,

			linksHeading: 'Legal',
			linkPrivacy: 'Privacy Policy',
			linkTerms: 'Terms of Service'
		},

		ko: {
			title: `${SITE_NAME} 소개`,
			subtitle: "실생활에서 실제로 하는 계산을 위한 무료의 빠르고 프라이버시 중심 계산기.",

			storyHeading: '운영자 이야기',
			storyParagraphs: [
				"SD.gy는 2024년에 시작했습니다. 팀원들이 휴대폰으로 같은 계산을 반복해서 검색하고 있다는 걸 깨달았기 때문입니다 — 저녁값 3명 분담, 병원 양식에 들어갈 아이의 개월 수, 미국 레시피의 컵 단위를 그램으로, 의사가 지나가듯 말한 BMI를 직접 확인하기.",
				"구글 검색 결과는 거의 둘 중 하나였습니다: 풀이 없이 답만 던지는 답변 박스, 또는 다섯 겹의 팝업·앱 설치·\"전체 결과를 보려면…\" 업셀로 감싸진 웹사이트. 우리가 원한 건 도착해서, 다섯 칸 입력하고, 답을 보고, 탭을 닫는 사이트였습니다. 대부분의 질문이 휴대폰으로, 그리고 급하게 일어나기에 모바일 우선이어야 했습니다.",
				"우리가 가장 많이 쓰던 계산기 8개로 출시했습니다. 우리 중 두 명 이상이 \"있었으면 좋겠다\"고 느낄 때만 계산기를 추가합니다. 오늘 사이트는 수학, 건강, 금융, 시간, 변환 카테고리에 18개 이상의 계산기를 가지고 있고, 모두 브라우저에서만 실행됩니다. 체중, 급여, 날짜 입력값은 회사 서버에 절대 도달하지 않습니다 — 유출될 것이 없습니다.",
				"디스플레이 광고가 호스팅과 집필 비용을 책임집니다. 광고 밀도는 업계 평균보다 훨씬 낮게 유지하며, 입력과 결과 사이에는 절대 광고를 두지 않습니다. 광고가 계산기를 더 쓰기 힘들게 만들었다면 옮기거나 제거합니다."
			],

			missionHeading: '미션',
			missionParagraphs: [
				`${SITE_NAME}은 일하는 사람들에게 매일 실제로 필요한 일상 계산기를 빠르고 마찰 없이 제공하기 위해 존재합니다. 일상 유틸리티는 무료여야 하고, 정확해야 하고, 빨라야 하고, 모바일 친화적이어야 하며, 기본적으로 프라이버시를 존중해야 한다고 믿습니다. 책상 앞이든, 기차 안이든, 저녁값을 정산하려는 주차장이든 — 몇 초 안에 답을 찾기를 바랍니다.`,
				`성공은 세 가지 숫자로 측정합니다. 답까지의 시간(목표: 콜드 로드부터 결과까지 3초 미만), 답까지의 입력 수(목표: 가능한 한 적게), 우리 서버에 남는 여러분 데이터의 바이트 수(목표: 0). 그 밖의 모든 것은 이 숫자들의 결과입니다.`,
				`장기적으로, 미션은 현재 도구 카탈로그보다 더 넓습니다. "그거 계산해 주는 거 있어?"라고 물었을 때 친구가 망설임 없이 추천하는 곳, 그리고 링크를 눌렀을 때 후회하지 않는 곳이 ${SITE_NAME}이 되었으면 합니다.`
			],

			whoWeAreHeading: '운영 정보',
			whoWeAreParagraphs: [
				`${SITE_NAME}은 2024년 설립된 한국 소프트웨어 회사 ${COMPANY_NAME}이 운영합니다. 우리 팀은 수백만 사용자가 쓰는 컨슈머·개발자 웹 제품을 출시한 경험이 있으며, 그 UX·정확성·속도에 대한 동일한 기준을 사이트의 모든 계산기에 적용합니다.`,
				`${SITE_NAME} 외에도 같은 팀이 JavaScript.ac(인터랙티브 JavaScript 학습), SDK.is(개발자 유틸리티), SDK.bz(금융·암호화폐 계산기), SD.gy(일상 계산기)를 운영합니다. 한 사이트에서 얻은 교훈 — 접근성 패턴, 성능 예산, 광고 밀도 임계치 — 이 모든 사이트에 적용됩니다.`
			],
			company: '회사',
			companyName: COMPANY_NAME,
			founded: '설립',
			foundedYear: '2024',
			focus: '주력 분야',
			focusArea: '개발자 도구, 계산기, 무료 유틸리티',
			businessNumberLabel: '사업자등록번호',
			businessNumberValue: BUSINESS_NUMBER,
			ecommerceNumberLabel: '통신판매업 신고번호',
			ecommerceNumberValue: ECOMMERCE_NUMBER,
			addressLabel: '주소',
			addressValue: COMPANY_ADDRESS,

			catalogHeading: `${SITE_NAME}에서 만나는 것`,
			catalogIntro: `${SITE_NAME}은 현재 18개 이상의 일상 계산기를 제공하며, 모두 무료이고 100% 브라우저에서 실행됩니다.`,
			catalogItems: [
					{ icon: "+", title: "일반 계산기", description: "계산 이력과 키보드 입력을 지원하는 표준 사칙연산. 브라우저를 떠나지 않고도 계산할 수 있습니다." },
					{ icon: "%", title: "퍼센트 계산기", description: "퍼센트, 할인, 변화율, 팁 분담을 한 번의 탭으로 계산합니다." },
					{ icon: "↔", title: "단위 변환기", description: "길이, 무게, 온도, 면적, 부피, 속도, 에너지. 미터법과 야드파운드법 모두 지원." },
					{ icon: "📅", title: "날짜 계산기", description: "D-day 계산, 두 날짜의 차이, 일·월·년 더하기/빼기를 지원합니다." },
					{ icon: "🎂", title: "나이 계산기", description: "생년월일로부터 정확한 나이를 년·월·주·일로 계산합니다." },
					{ icon: "⚖", title: "BMI 계산기", description: "BMI(체질량지수)와 건강 범위 가이드. 미터법·야드파운드법 모두 지원." },
					{ icon: "🔥", title: "칼로리 계산기", description: "Mifflin-St Jeor 공식으로 나이, 성별, 체중, 신장, 활동량에 따른 일일 칼로리 필요량을 계산합니다." },
					{ icon: "$", title: "팁 계산기", description: "팁 계산과 인원수에 따른 분담. 세금 포함·미포함 합계 모두 처리합니다." },
					{ icon: "L", title: "대출 계산기", description: "고정 금리 대출의 월 상환액과 총 이자. 간단한 상환 스케줄 포함." },
					{ icon: "💼", title: "급여 계산기", description: "주요 한국 공제 포함한 총급여→실수령액." },
					{ icon: "T", title: "세금 계산기", description: "구간별 소득세 추정. 구간은 가이드에 문서화되어 있으며 세법 개정 시 업데이트됩니다." },
					{ icon: "🌍", title: "환율 변환기", description: "여행, 해외 쇼핑, 송금 추정에 유용한 주요 통화 실시간 환율 변환." }
			],

			principlesHeading: '운영 원칙',
			principles: [
				{ title: '영원히 무료', description: '페이월·프리미엄 티어 없음. 광고가 모두를 위한 도구를 무료로 유지합니다.' },
				{ title: '개인정보 우선', description: '모든 처리가 브라우저에서 일어납니다. 데이터가 기기를 떠나지 않습니다.' },
				{ title: '기본적으로 빠름', description: 'Cloudflare 글로벌 엣지 네트워크 기반의 1초 미만 로딩.' },
				{ title: '오픈 액세스', description: '로그인·가입·이메일 불필요. 열고 바로 사용.' },
				{ title: '모바일 우선', description: '모든 도구는 터치 친화적이며 폰·태블릿에서 잘 동작합니다.' },
				{ title: '다크 패턴 없음', description: '가짜 카운트다운, 끈끈이 쿠키 배너, 인위적 희소성 모두 없음.' }
			],

			techHeading: '기술 스택',
			techIntro: '스택의 모든 부분은 읽기 속도, 작성 속도, 그리고 작은 팀의 장기 유지보수성을 최적화하기 위해 선택되었습니다.',
			techParagraphs: [
				`프런트엔드는 SvelteKit + TypeScript로 만들고, Tailwind CSS로 스타일링하며, Cloudflare Pages에 배포합니다. 전통적인 백엔드를 두지 않습니다. 페이지는 정적으로 사전 렌더링되거나 엣지에서 요청 시점에 생성되고, 계산기/도구 로직은 전적으로 이용자 브라우저에서 실행되며, 영속성이 필요한 동적 기능은 이용자 본인의 localStorage를 사용합니다.`,
				`이 아키텍처가 이용자에게 주는 실용적 효과는 분명합니다. 첫째, TTI는 초 단위가 아니라 수십 ms 단위로 측정됩니다. 둘째, 입력값이 기기를 떠나지 않으므로 유출될 서버 로그가 존재하지 않습니다. 셋째, 인프라 비용이 낮아 "Pro 티어"를 도입하지 않고도 ${SITE_NAME}을 무한정 무료로 유지할 수 있습니다.`
			],
			techStack: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages', 'Cloudflare Workers'],

			privacyHeading: '프라이버시 약속',
			privacyParagraphs: [
				`${SITE_NAME}의 모든 일상 계산기는 브라우저 클라이언트 측에서 실행됩니다. 입력한 텍스트·파일·값은 우리 서버로 전송되지 않습니다. 우리가 수집하는 데이터는 표준 집계 분석(페이지뷰, 국가, 기기 유형)과 개인정보처리방침에 명시된 AdSense 관련 쿠키뿐입니다. 개인정보를 절대 판매·공유하지 않으며, 입력값을 읽지 않고, 이용자의 활동을 기계학습 모델 학습에 사용하지 않습니다.`,
				`광고 사업자의 동의 정책이 변경되는 경우 동의 배너를 즉시 업데이트하고 개인정보 처리방침 페이지에 명확한 변경 이력을 남깁니다.`
			],

			contactHeading: '문의하기',
			contactIntro: '질문, 제안, 피드백이 있으시면 언제든지 연락해 주세요.',
			contactPoints: [
				`일반 문의·피드백: ${CONTACT_EMAIL}`,
				`버그 신고: 재현 단계, 브라우저, OS를 포함해 주세요.`,
				`도구 제안: 어떤 계산이나 유틸리티가 있었으면 좋겠는지 알려주세요. 실제 사용 사례가 로드맵을 움직입니다.`,
				`파트너십·콘텐츠 협업: 제목에 "Partnership"을 포함해 주세요.`,
				`보도·미디어: 같은 이메일 주소, 제목에 "Press" 표시.`
			],

			legalHeading: '법적·운영자 정보',
			legalNote: `${SITE_NAME}은 대한민국 행정안전부 및 공정거래위원회에 등록된 한국 법인 ${COMPANY_NAME}이 운영합니다.`,

			linksHeading: '법적 고지',
			linkPrivacy: '개인정보 처리방침',
			linkTerms: '이용약관'
		},

		ja: {
			title: `${SITE_NAME} について`,
			subtitle: "実生活で本当に使う計算のための無料・高速・プライバシー重視の計算機。",

			storyHeading: '運営者の物語',
			storyParagraphs: [
				"SD.gy は 2024 年に始まりました。チームメンバーがスマホで同じ計算を何度も検索していることに気づいたからです — 夕食代を 3 人で割る、病院の用紙のために子供の月齢を出す、米国レシピのカップをグラムに、医師がついでに言った BMI を確認する。",
				"Google の結果はだいたい 2 種類でした: 過程を見せずに数字だけ返す回答ボックスか、ポップアップ・アプリ誘導・「完全な内訳を見るには…」アップセルが 5 重に重なったサイト。欲しかったのは「開く・5 つ入力・答えを見る・閉じる」が終わるサイトでした。多くの質問はスマホで急いで行われるため、モバイルファーストに。",
				"まず自分たちが最も使う 8 つの計算機を出しました。チームの 2 人以上が「欲しい」と感じたときだけ計算機を追加します。今日サイトには数学・健康・金融・時間・変換にまたがる 18 個以上の計算機があり、すべてブラウザ内で動きます。体重、給与、日付の入力は当社サーバーには届きません — 漏れるものがありません。",
				"ディスプレイ広告がホスティングと執筆を支えます。広告密度は業界平均よりはるかに低く保たれ、入力と結果の間には絶対に広告を置きません。広告が計算機を使いづらくしたら移動・撤去します。"
			],

			missionHeading: 'ミッション',
			missionParagraphs: [
				`${SITE_NAME} は、働く人々に毎日本当に必要な日常の計算機を高速・低摩擦で提供するために存在します。日常のユーティリティは無料、正確、高速、モバイルフレンドリーで、デフォルトでプライバシーを尊重すべきだと信じています。机の前でも、電車の中でも、夕食代を精算する駐車場でも、数秒で答えを見つけてほしい。`,
				`成功は 3 つの数値で測ります: 答えまでの時間（目標: コールドロードから結果まで 3 秒未満）、答えまでの入力数（目標: 可能な限り少なく）、当社サーバーに残るあなたのデータのバイト数（目標: 0）。それ以外はすべてこれらの結果です。`,
				`長期的にはミッションは現在のツールカタログより広いものです。「それを計算してくれるところある？」と聞かれた友人が安心して薦め、リンクを開いた瞬間に後悔の気配がしない場所であってほしい — それが ${SITE_NAME} の目標です。`
			],

			whoWeAreHeading: '運営情報',
			whoWeAreParagraphs: [
				`${SITE_NAME} は、2024 年に設立された韓国のソフトウェア会社 ${COMPANY_NAME} が運営しています。私たちのチームは数百万人が使用するコンシューマーおよび開発者向け Web プロダクトを出してきており、同じ UX・正確性・速度の基準をサイトのすべての計算機に適用しています。`,
				`${SITE_NAME} の他にも、同じチームが JavaScript.ac（インタラクティブな JavaScript 学習）、SDK.is（開発者ユーティリティ）、SDK.bz（金融・暗号資産計算機）、SD.gy（日常計算機）を運営しています。1 つのサイトで得た学びがすべてに適用されます。`
			],
			company: '会社',
			companyName: COMPANY_NAME,
			founded: '設立',
			foundedYear: '2024 年',
			focus: '注力分野',
			focusArea: '開発者ツール、計算機、無料ユーティリティ',
			businessNumberLabel: '事業者登録番号',
			businessNumberValue: BUSINESS_NUMBER,
			ecommerceNumberLabel: '通信販売業申告番号',
			ecommerceNumberValue: ECOMMERCE_NUMBER,
			addressLabel: '住所',
			addressValue: COMPANY_ADDRESS,

			catalogHeading: `${SITE_NAME} で出会えるもの`,
			catalogIntro: `${SITE_NAME} は現在 18 以上の日常の計算機を提供し、すべて無料・100% ブラウザ内で動作します。`,
			catalogItems: [
					{ icon: "+", title: "基本電卓", description: "計算履歴とキーボード入力に対応した標準四則演算。ブラウザタブを離れたくない時に。" },
					{ icon: "%", title: "パーセント計算", description: "パーセント、割引、変化率、チップの分担をワンタップで計算。" },
					{ icon: "↔", title: "単位変換", description: "長さ、重さ、温度、面積、体積、速度、エネルギー。メートル法・ヤードポンド法対応。" },
					{ icon: "📅", title: "日付計算", description: "D-day、2 日付の差、日・月・年の加減算をサポート。" },
					{ icon: "🎂", title: "年齢計算", description: "誕生日から正確な年齢を年・月・週・日で計算します。" },
					{ icon: "⚖", title: "BMI 計算機", description: "BMI と健康範囲のガイド。メートル法・ヤードポンド法対応。" },
					{ icon: "🔥", title: "カロリー計算", description: "Mifflin-St Jeor 式で年齢・性別・体重・身長・活動量から日次必要カロリーを計算。" },
					{ icon: "$", title: "チップ計算", description: "チップ計算と人数割り。税込・税抜小計の両方に対応。" },
					{ icon: "L", title: "ローン計算", description: "固定金利ローンの月返済額と総利息。シンプルな償還表付き。" },
					{ icon: "💼", title: "給与計算", description: "主要な韓国控除（所得税、国民年金、健康保険、雇用保険）込みの総額→手取り。" },
					{ icon: "T", title: "税額計算", description: "ブラケットごとの所得税概算。ブラケットはガイドに記載され、税法改正時に更新します。" },
					{ icon: "🌍", title: "通貨換算", description: "旅行、海外通販、送金見積もりに便利な主要通貨のリアルタイム換算。" }
			],

			principlesHeading: '運営原則',
			principles: [
				{ title: '永久無料', description: 'ペイウォール・プレミアム層なし。広告が全員のためにツールを無料に保ちます。' },
				{ title: 'プライバシー優先', description: 'すべての処理がブラウザ内で行われます。データが端末を離れません。' },
				{ title: 'デフォルトで高速', description: 'Cloudflare グローバルエッジ基盤の 1 秒未満ロード。' },
				{ title: 'オープンアクセス', description: 'ログイン・登録・メール不要。開いてすぐ使えます。' },
				{ title: 'モバイルファースト', description: 'すべてのツールがタッチフレンドリーで、スマホ・タブレットでも快適に動作。' },
				{ title: 'ダークパターンなし', description: '偽のカウントダウン、ベタつくクッキーバナー、人工的な希少性は一切ありません。' }
			],

			techHeading: '技術スタック',
			techIntro: 'スタックの各構成要素は、読み込み速度、執筆速度、そして小さなチームでの長期保守性を最適化するために選定されました。',
			techParagraphs: [
				`フロントエンドは SvelteKit + TypeScript で構築し、Tailwind CSS でスタイリング、Cloudflare Pages にデプロイしています。従来型のバックエンドは持ちません。ページは静的に事前レンダリングまたはエッジでリクエスト時生成され、計算機/ツールロジックは完全にユーザーのブラウザで動き、永続化が必要な動的機能はユーザー自身の localStorage を使用します。`,
				`このアーキテクチャがユーザーにもたらす実利は明確です。まず、TTI は秒単位ではなく数十 ms 単位で計測されます。次に、入力が端末を離れないため、流出するサーバーログが存在しません。最後に、インフラコストが低く、「Pro ティア」を導入することなく ${SITE_NAME} を無期限に無料で維持できます。`
			],
			techStack: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages', 'Cloudflare Workers'],

			privacyHeading: 'プライバシーの約束',
			privacyParagraphs: [
				`${SITE_NAME} のすべての日常の計算機はブラウザのクライアント側で実行されます。入力したテキスト・ファイル・値は当社サーバーに送信されません。当社が収集するのは標準的な集計分析（ページビュー、国、デバイスタイプ）とプライバシーポリシーに記載された AdSense 関連 Cookie のみです。`,
				`広告事業者の同意ポリシーが変更された場合、同意バナーを即時更新し、プライバシーポリシーページに変更履歴を残します。`
			],

			contactHeading: 'お問い合わせ',
			contactIntro: 'ご質問、ご提案、フィードバックがございましたら、お気軽にご連絡ください。',
			contactPoints: [
				`一般のお問い合わせ・フィードバック: ${CONTACT_EMAIL}`,
				`不具合報告: 再現手順、ブラウザ、OS を含めてください。`,
				`ツールの提案: 欲しい計算やユーティリティを教えてください。実用ユースケースがロードマップを動かします。`,
				`提携・コンテンツ協業: 件名に「Partnership」を含めてください。`,
				`報道・メディア: 同じメールアドレス、件名に「Press」を表示。`
			],

			legalHeading: '法的・運営者情報',
			legalNote: `${SITE_NAME} は、大韓民国行政安全部および公正取引委員会に登録された韓国法人 ${COMPANY_NAME} が運営しています。`,

			linksHeading: '法的事項',
			linkPrivacy: 'プライバシーポリシー',
			linkTerms: '利用規約'
		},

		zh: {
			title: `关于 ${SITE_NAME}`,
			subtitle: "为您日常生活中真正会用的计算而设计的免费、快速、注重隐私的计算器。",

			storyHeading: '运营故事',
			storyParagraphs: [
				"SD.gy 始于 2024 年，因为团队成员发现自己一遍又一遍在手机上搜索同样的计算 —— 三个人 AA 晚餐、为诊所表格算孩子的月龄、把美式食谱里的杯换成克、亲自核对医生顺口提到的 BMI。",
				"Google 的结果几乎只有两种：直接给数字但没有过程的回答框，或者被五层弹窗、App 安装与\"查看完整结果请…\"裹挟的网站。我们想要的是：打开、点五个输入框、看到答案、关掉标签。大多数这种问题都发生在手机上、且很急，所以必须移动端优先。",
				"我们以自己最常用的 8 个计算器上线。只有当至少两位成员觉得\"希望有一个\"时，才会新增计算器。如今网站在数学、健康、金融、时间与单位换算分类下已有超过 18 个计算器，全部在浏览器中运行。您输入的体重、薪资、日期都不会到达我们的服务器 —— 没有可外泄的东西。",
				"展示广告支付托管与写作成本。广告密度远低于行业平均，绝不放在输入与结果之间。如果广告让某个计算器更难用，我们就移走或下线它。"
			],

			missionHeading: '使命',
			missionParagraphs: [
				`${SITE_NAME} 致力于为每天真正需要日常计算器的人提供高速、零摩擦的工具箱。我们相信日常实用工具应当免费、准确、迅速、移动友好，并默认尊重您的隐私。无论您在办公桌前、列车上，还是在停车场里赶着分摊晚餐费 — 我们都希望您在数秒内得到答案。`,
				`我们用三个数字衡量成功：到答案的时间（目标：从冷加载到结果 3 秒以内）、到答案的输入数（目标：尽可能少）、留在我们服务器上的您的数据字节数（目标：0）。其余一切都是这三者的副产物。`,
				`长期来看，我们的使命比当前的工具目录更广。希望 ${SITE_NAME} 是别人问"有没有计算这个的"时朋友会安心推荐的网站 —— 而您点开链接时不会有一丝后悔。`
			],

			whoWeAreHeading: '运营信息',
			whoWeAreParagraphs: [
				`${SITE_NAME} 由 2024 年成立的韩国软件公司 ${COMPANY_NAME} 运营。我们的团队曾交付服务过百万级用户的消费者与开发者 Web 产品，并将同样的 UX、准确性与速度标准应用到本站每一个计算器上。`,
				`除 ${SITE_NAME} 外，同一团队还运营 JavaScript.ac（交互式 JavaScript 学习）、SDK.is（开发者实用工具）、SDK.bz（金融与加密计算器）和 SD.gy（日常计算器）。在一个站点学到的经验会迅速复用到所有站点。`
			],
			company: '公司',
			companyName: COMPANY_NAME,
			founded: '成立',
			foundedYear: '2024 年',
			focus: '专注领域',
			focusArea: '开发者工具、计算器、免费实用工具',
			businessNumberLabel: '营业执照编号',
			businessNumberValue: BUSINESS_NUMBER,
			ecommerceNumberLabel: '电子商务备案编号',
			ecommerceNumberValue: ECOMMERCE_NUMBER,
			addressLabel: '地址',
			addressValue: COMPANY_ADDRESS,

			catalogHeading: `您能在 ${SITE_NAME} 上找到什么`,
			catalogIntro: `${SITE_NAME} 目前提供超过 18 个日常计算器，全部免费，且 100% 在浏览器中运行。`,
			catalogItems: [
					{ icon: "+", title: "基本计算器", description: "带历史记录与键盘输入的标准算术。不想离开当前标签页时很好用。" },
					{ icon: "%", title: "百分比计算", description: "百分比、折扣、变化率、AA 分账，一键完成。" },
					{ icon: "↔", title: "单位换算", description: "长度、重量、温度、面积、体积、速度、能量。支持米制与英制。" },
					{ icon: "📅", title: "日期计算", description: "倒计时、两日期差、日/月/年加减。" },
					{ icon: "🎂", title: "年龄计算", description: "由生日精确计算到年、月、周、日。" },
					{ icon: "⚖", title: "BMI 计算", description: "BMI（身体质量指数）及健康范围指引。支持米制与英制。" },
					{ icon: "🔥", title: "卡路里计算", description: "使用 Mifflin-St Jeor 公式根据年龄、性别、体重、身高与活动量计算每日卡路里需求。" },
					{ icon: "$", title: "小费计算", description: "计算小费并按人数分摊，支持含税与不含税小计。" },
					{ icon: "L", title: "贷款计算", description: "固定利率贷款的月供与总利息。含简易还款表。" },
					{ icon: "💼", title: "工资计算", description: "含主要韩国扣项（所得税、国民年金、健康保险、雇佣保险）的税前→税后工资。" },
					{ icon: "T", title: "税款计算", description: "按等级估算所得税。等级在指南中记录，税法改动时更新。" },
					{ icon: "🌍", title: "汇率换算", description: "便于旅行、海淘、汇款估算的主要货币实时汇率换算。" }
			],

			principlesHeading: '运营原则',
			principles: [
				{ title: '永久免费', description: '没有付费墙、没有高级版。靠广告为所有人保持免费。' },
				{ title: '隐私优先', description: '所有处理在浏览器中进行，您的数据永不离开设备。' },
				{ title: '默认快速', description: '由 Cloudflare 全球边缘网络驱动，加载时间低于 1 秒。' },
				{ title: '开放访问', description: '无需登录、注册或邮箱。打开即用。' },
				{ title: '移动优先', description: '所有工具均触控友好，在手机和平板上同样好用。' },
				{ title: '杜绝暗黑模式', description: '没有虚假倒计时、没有粘性 Cookie 横幅、没有人为稀缺感。' }
			],

			techHeading: '技术栈',
			techIntro: '技术栈的每一部分都为加载速度、写作速度以及小团队的长期可维护性而精心选择。',
			techParagraphs: [
				`前端基于 SvelteKit + TypeScript 构建，使用 Tailwind CSS 样式设计，部署在 Cloudflare Pages 上。我们没有传统意义上的后端：页面通过静态预渲染或边缘按需生成；计算器/工具逻辑完全发生在用户浏览器中；需要持久化的动态功能则使用用户自己的 localStorage。`,
				`这种架构带来的实际效果非常明确：第一，TTI 以数十毫秒计；第二，输入不离开您的设备，因此根本不存在可被泄漏的服务器日志；第三，基础设施成本足够低，让我们能在不引入"Pro 套餐"的前提下无限期保持 ${SITE_NAME} 免费。`
			],
			techStack: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages', 'Cloudflare Workers'],

			privacyHeading: '隐私承诺',
			privacyParagraphs: [
				`${SITE_NAME} 的所有日常计算器都在浏览器客户端运行。您输入的文本、文件或数值绝不传输到我们的服务器。我们仅收集标准的聚合分析数据（页面访问量、国家、设备类型）以及《隐私政策》中所述的 AdSense 相关 Cookie。`,
				`若广告服务商的同意规则发生变化，我们会立即更新同意横幅，并在《隐私政策》页面发布清晰的变更日志。`
			],

			contactHeading: '联系我们',
			contactIntro: '如果您有问题、建议或反馈，欢迎随时联系。',
			contactPoints: [
				`一般咨询与反馈：${CONTACT_EMAIL}`,
				`错误报告：请附上重现步骤、浏览器与操作系统。`,
				`工具建议：告诉我们希望出现的计算或实用工具 —— 真实用例会推动我们的路线图。`,
				`合作与内容协作：请在邮件主题中注明 "Partnership"。`,
				`媒体与公关：同一邮箱，主题中注明 "Press"。`
			],

			legalHeading: '法律与运营者信息',
			legalNote: `${SITE_NAME} 由在大韩民国行政安全部及公正交易委员会登记的韩国法人 ${COMPANY_NAME} 运营。`,

			linksHeading: '法律信息',
			linkPrivacy: '隐私政策',
			linkTerms: '服务条款'
		}
	};

	$: t = translations[lang] || translations.en;
</script>

<svelte:head>
	<title>{t.title} - {SITE_NAME}</title>
	<meta name="description" content={t.subtitle} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-12">
	<div class="text-center mb-16">
		<h1 class="text-4xl font-bold text-gray-900 dark:text-dark-100 mb-4">{t.title}</h1>
		<p class="text-xl text-primary-500 dark:text-primary-400">{t.subtitle}</p>
	</div>

	<section class="mb-16">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.storyHeading}</h2>
		{#each t.storyParagraphs as paragraph}
			<p class="text-gray-700 dark:text-dark-300 leading-relaxed mb-4">{paragraph}</p>
		{/each}
	</section>

	<section class="mb-16">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.missionHeading}</h2>
		{#each t.missionParagraphs as paragraph}
			<p class="text-gray-700 dark:text-dark-300 leading-relaxed mb-4">{paragraph}</p>
		{/each}
	</section>

	<section class="mb-16">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.whoWeAreHeading}</h2>
		{#each t.whoWeAreParagraphs as paragraph}
			<p class="text-gray-700 dark:text-dark-300 leading-relaxed mb-4">{paragraph}</p>
		{/each}
		<dl class="grid sm:grid-cols-2 gap-4 bg-gray-50 dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-dark-700 mt-6">
			<div>
				<dt class="text-xs text-primary-500 uppercase tracking-wide mb-1">{t.company}</dt>
				<dd class="text-gray-900 dark:text-dark-100 font-semibold">{t.companyName}</dd>
			</div>
			<div>
				<dt class="text-xs text-primary-500 uppercase tracking-wide mb-1">{t.founded}</dt>
				<dd class="text-gray-900 dark:text-dark-100 font-semibold">{t.foundedYear}</dd>
			</div>
			<div>
				<dt class="text-xs text-primary-500 uppercase tracking-wide mb-1">{t.focus}</dt>
				<dd class="text-gray-900 dark:text-dark-100 font-semibold">{t.focusArea}</dd>
			</div>
			<div>
				<dt class="text-xs text-primary-500 uppercase tracking-wide mb-1">{t.businessNumberLabel}</dt>
				<dd class="text-gray-900 dark:text-dark-100 font-semibold">{t.businessNumberValue}</dd>
			</div>
			<div>
				<dt class="text-xs text-primary-500 uppercase tracking-wide mb-1">{t.ecommerceNumberLabel}</dt>
				<dd class="text-gray-900 dark:text-dark-100 font-semibold">{t.ecommerceNumberValue}</dd>
			</div>
			<div>
				<dt class="text-xs text-primary-500 uppercase tracking-wide mb-1">{t.addressLabel}</dt>
				<dd class="text-gray-900 dark:text-dark-100 font-semibold">{t.addressValue}</dd>
			</div>
		</dl>
	</section>

	<section class="mb-16">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.catalogHeading}</h2>
		<p class="text-gray-700 dark:text-dark-300 mb-8">{t.catalogIntro}</p>
		<div class="grid md:grid-cols-2 gap-6">
			{#each t.catalogItems as item}
				<div class="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-dark-700">
					<div class="text-xl font-bold text-primary-500 mb-3">{item.icon}</div>
					<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2">{item.title}</h3>
					<p class="text-gray-600 dark:text-dark-400 leading-relaxed">{item.description}</p>
				</div>
			{/each}
		</div>
	</section>

	<section class="mb-16">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-8">{t.principlesHeading}</h2>
		<div class="space-y-4">
			{#each t.principles as principle}
				<div class="bg-gray-50 dark:bg-dark-800 rounded-lg p-5 border-l-4 border-primary-400">
					<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-1">{principle.title}</h3>
					<p class="text-gray-600 dark:text-dark-400">{principle.description}</p>
				</div>
			{/each}
		</div>
	</section>

	<section class="mb-16">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.techHeading}</h2>
		<p class="text-gray-700 dark:text-dark-300 mb-4">{t.techIntro}</p>
		{#each t.techParagraphs as paragraph}
			<p class="text-gray-700 dark:text-dark-300 leading-relaxed mb-4">{paragraph}</p>
		{/each}
		<div class="flex flex-wrap gap-3 mt-6">
			{#each t.techStack as tech}
				<span class="bg-gray-100 dark:bg-dark-700 text-gray-800 dark:text-dark-200 px-4 py-2 rounded-full text-sm">{tech}</span>
			{/each}
		</div>
	</section>

	<section class="mb-16">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.privacyHeading}</h2>
		{#each t.privacyParagraphs as paragraph}
			<p class="text-gray-700 dark:text-dark-300 leading-relaxed mb-4">{paragraph}</p>
		{/each}
	</section>

	<section class="mb-16">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.contactHeading}</h2>
		<p class="text-gray-700 dark:text-dark-300 mb-4">{t.contactIntro}</p>
		<ul class="text-gray-700 dark:text-dark-300 leading-relaxed list-disc pl-6 space-y-2 mb-6">
			{#each t.contactPoints as point}
				<li>{point}</li>
			{/each}
		</ul>
		<a
			href="mailto:{CONTACT_EMAIL}"
			class="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-dark-800 dark:hover:bg-dark-700 border border-gray-200 dark:border-dark-700 rounded-lg px-6 py-3 text-gray-800 dark:text-dark-200 transition-colors"
		>
			{CONTACT_EMAIL}
		</a>
	</section>

	<section class="mb-16">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.legalHeading}</h2>
		<p class="text-gray-700 dark:text-dark-300 leading-relaxed">{t.legalNote}</p>
	</section>

	<section class="pt-8 border-t border-gray-200 dark:border-dark-700">
		<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.linksHeading}</h2>
		<div class="flex gap-6">
			<a href="/{lang}/privacy" class="text-primary-500 hover:text-primary-400 transition-colors">{t.linkPrivacy}</a>
			<a href="/{lang}/terms" class="text-primary-500 hover:text-primary-400 transition-colors">{t.linkTerms}</a>
		</div>
	</section>
</div>
