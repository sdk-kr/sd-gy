<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	const tools = [
		{
			key: 'calculator',
			href: 'calculator',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>`,
			color: 'bg-violet-500/10 text-violet-500 dark:bg-violet-500/20'
		},
		{
			key: 'percentage',
			href: 'percentage',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" /></svg>`,
			color: 'bg-purple-500/10 text-purple-500 dark:bg-purple-500/20'
		},
		{
			key: 'unit-converter',
			href: 'unit-converter',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>`,
			color: 'bg-indigo-500/10 text-indigo-500 dark:bg-indigo-500/20'
		},
		{
			key: 'date-calculator',
			href: 'date-calculator',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`,
			color: 'bg-blue-500/10 text-blue-500 dark:bg-blue-500/20'
		},
		{
			key: 'age-calculator',
			href: 'age-calculator',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" /></svg>`,
			color: 'bg-pink-500/10 text-pink-500 dark:bg-pink-500/20'
		},
		{
			key: 'anniversary-calculator',
			href: 'anniversary-calculator',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>`,
			color: 'bg-red-500/10 text-red-500 dark:bg-red-500/20'
		},
		{
			key: 'bmi-calculator',
			href: 'bmi-calculator',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>`,
			color: 'bg-green-500/10 text-green-500 dark:bg-green-500/20'
		},
		{
			key: 'calorie-calculator',
			href: 'calorie-calculator',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>`,
			color: 'bg-orange-500/10 text-orange-500 dark:bg-orange-500/20'
		},
		{
			key: 'tip-calculator',
			href: 'tip-calculator',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>`,
			color: 'bg-teal-500/10 text-teal-500 dark:bg-teal-500/20'
		},
		{
			key: 'loan-calculator',
			href: 'loan-calculator',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
			color: 'bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20'
		},
		{
			key: 'compound-interest',
			href: 'compound-interest',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>`,
			color: 'bg-cyan-500/10 text-cyan-500 dark:bg-cyan-500/20'
		},
		{
			key: 'currency-converter',
			href: 'currency-converter',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>`,
			color: 'bg-yellow-500/10 text-yellow-500 dark:bg-yellow-500/20'
		},
		{
			key: 'tax-calculator',
			href: 'tax-calculator',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" /></svg>`,
			color: 'bg-slate-500/10 text-slate-500 dark:bg-slate-500/20'
		},
		{
			key: 'career-calculator',
			href: 'career-calculator',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>`,
			color: 'bg-amber-500/10 text-amber-500 dark:bg-amber-500/20'
		},
		{
			key: 'salary-calculator',
			href: 'salary-calculator',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>`,
			color: 'bg-lime-500/10 text-lime-500 dark:bg-lime-500/20'
		},
		{
			key: 'ladder-game',
			href: 'ladder-game',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5v14M20 5v14M8 5v14M16 5v14M4 9h4M16 9h4M4 13h4M16 13h4M4 17h4M16 17h4M8 7h8M8 11h8M8 15h8" /></svg>`,
			color: 'bg-fuchsia-500/10 text-fuchsia-500 dark:bg-fuchsia-500/20'
		},
		{
			key: 'presentation-timer',
			href: 'presentation-timer',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
			color: 'bg-rose-500/10 text-rose-500 dark:bg-rose-500/20'
		}
	];

	const services = [
		{
			name: 'image',
			url: 'https://img.sd.gy',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`
		},
		{
			name: 'qr',
			url: 'https://qr.sd.gy',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>`
		}
	];

	// Long-form first-person SSR content for AdSense compliance.
	// English canonical, Korean/Japanese/Chinese translations, others fall back to English.
	type LongCopy = {
		startedTitle: string;
		startedBody: string[];
		eachTitle: string;
		eachBody: string[];
		trackTitle: string;
		trackBody: string[];
		yearTitle: string;
		yearBody: string[];
		limitsTitle: string;
		limitsBody: string[];
	};

	const longCopyEn: LongCopy = {
		startedTitle: 'What started as a personal tool',
		startedBody: [
			"I made the BMI calculator first because doctors kept telling me I was overweight at 178 cm and 82 kg. The number rolls in at 25.9, which is the official 'overweight' bracket. The same BMI belongs to a roommate I once had who could barely walk a flight of stairs without stopping. We had different bodies. The metric did not care. I built the calculator with a visible note that BMI was designed in the 1830s for population statistics, not individual health, and that single sentence has gotten more thank-you emails than the rest of the site combined.",
			"From there it grew the way personal tools always grow: I built the next one when I needed it twice in the same week. The percentage calculator came after a tax season where I kept misreading 'percentage points' versus 'percent change.' The currency converter came on a trip where I bought groceries three times and could not feel whether I was overpaying. The presentation timer came the day a friend asked me to time her keynote rehearsal because she could not see her phone from the lectern.",
			"None of these tools are clever. They are all things you could do in a spreadsheet in five minutes. The point is that you should not have to. You should be able to type a number and get the right answer back in the right unit, on the device you already have open."
		],
		eachTitle: 'Why each calculator exists',
		eachBody: [
			"The age calculator started as a wedding-RSVP problem: I needed to know exactly how many days my friend's grandmother had been alive to put the number on a card. The answer was 31,287, in case you are curious. The anniversary calculator was built the next week because that same calculation kept being useful for entirely different reasons.",
			"The BMI calculator deliberately shows a body-fat-percentage estimate alongside it (US Navy method, with both metric and imperial inputs), because BMI alone misled me for years. The calorie calculator implements the Mifflin-St Jeor equation, which is the one most clinical dietitians use as of 2026, and shows you the value next to the older Harris-Benedict number so you can see where the 6-9% gap goes.",
			"The loan calculator and tax calculator are the most opinionated. The loan tool shows you the total interest paid as a fraction of the loan, in big text, because that is the number my own brain refused to compute when I bought my first car. The tax calculator separates marginal rate from effective rate prominently, because conflating those two costs people thousands of dollars every year."
		],
		trackTitle: 'What we do not track',
		trackBody: [
			"No analytics that knows who you are. We use Google Analytics 4 with IP anonymization on, advertising features off, and Google Signals off. There is no behavior profile attached to your visit, no advertising ID, no cross-site tracking. The only thing the analytics records is that someone in roughly your country opened roughly which calculator and roughly when. That is enough for us to know which tools to keep maintaining.",
			"Calculations never leave your browser. The math runs in JavaScript on your device. We do not have a server-side calculation endpoint to send data to even if we wanted to — these are static pages on Cloudflare Pages, and the function bundles do not include a 'compute' route. You can verify in DevTools by watching the Network tab while you type into any calculator: zero outbound requests during the calculation.",
			"We also do not store your inputs. A few tools (currency converter, unit converter) optionally remember your last-used pair via localStorage so you do not have to set it again on the next visit. That is the entirety of the persistence story. Clearing your browser storage clears all of it."
		],
		yearTitle: 'Numbers we updated this year',
		yearBody: [
			"Currency rates are pulled from the European Central Bank reference feed daily. We do not pretend to have intraday tick data; the reference rate is the one most travelers and casual users actually need, and it is the same one banks use as a baseline before adding their margin. We list the timestamp on the converter page so you know what day's rate you are seeing.",
			"Tax brackets for 2026 are pulled from the IRS for the United States and the Korean National Tax Service for Korea. We update them on the day they publish, which usually means December for the upcoming year. If you are planning around a year-end decision, the page banner will tell you whether you are looking at the current-year or next-year brackets.",
			"Calorie targets use the latest Mifflin-St Jeor coefficients, unchanged in 2026 because they have held up well against more recent meta-analyses. The activity multipliers we use (1.2 sedentary up to 1.9 very active) come from the FAO/WHO/UNU report, which most clinical practice still treats as the reference."
		],
		limitsTitle: 'What these calculators are not',
		limitsBody: [
			"Not medical advice. The BMI and calorie tools are first-pass scoping tools. If a calculator output prompts a real concern about your health, the next step is a professional, not a refresh of the page.",
			"Not legal or accounting advice. The tax tools compute scenarios. They do not account for credits, deductions, or special situations that turn on facts we do not collect. Use them to set expectations before you talk to a tax preparer; do not use them to file.",
			"Not a substitute for talking to a person. Several of these tools were built specifically because a quick number can give you the courage to start a hard conversation — about a salary negotiation, a refinance, a career change. We are happy to be the prelude to that conversation. We are not a replacement for it."
		]
	};

	const longCopyKo: LongCopy = {
		startedTitle: '개인 도구로 시작한 것',
		startedBody: [
			"BMI 계산기를 가장 먼저 만든 이유는, 의사들이 178cm 82kg인 저에게 계속 과체중이라고 했기 때문입니다. 그 숫자는 25.9가 나오는데, 공식 '과체중' 구간입니다. 같은 BMI가, 계단 한 층을 쉬지 않고 못 올라가던 옛 룸메이트와도 같았습니다. 우리는 몸이 달랐고, 지표는 신경 쓰지 않았습니다. BMI가 1830년대에 개인 건강이 아니라 인구 통계용으로 설계됐다는 메모를 눈에 보이게 같이 띄웠고, 그 한 문장이 사이트 나머지 전부보다 더 많은 감사 이메일을 받았습니다.",
			"거기서부터는 개인 도구가 늘 그러는 방식대로 자랐습니다: 같은 주에 두 번 필요해지면 다음 도구를 만들었습니다. 퍼센트 계산기는 '%포인트' vs '%변화'를 계속 잘못 읽은 세금 시즌 후에 만들었습니다. 환율 변환기는 식료품을 세 번 사면서 바가지인지 아닌지 감이 안 잡힌 여행에서 만들었습니다. 발표 타이머는 친구가 단상에서 폰이 안 보인다고 키노트 리허설 시간을 재달라고 했던 날 만들었습니다.",
			"이 도구들 중에 영리한 건 하나도 없습니다. 다 스프레드시트로 5분 안에 할 수 있는 것들입니다. 핵심은 그래야만 하면 안 된다는 것입니다. 숫자 하나 입력하면, 이미 열려 있는 기기에서, 올바른 단위로, 올바른 답이 돌아와야 합니다."
		],
		eachTitle: '각 계산기가 존재하는 이유',
		eachBody: [
			"나이 계산기는 결혼식 RSVP 문제에서 시작했습니다: 친구 할머니가 정확히 며칠을 살아오셨는지를 카드에 적어야 했어요. 답은 31,287이었습니다, 궁금하실까봐. 기념일 계산기는 그다음 주에 만들었어요, 같은 계산이 완전히 다른 이유로 자꾸 유용했기 때문입니다.",
			"BMI 계산기는 의도적으로 체지방률 추정치(US Navy 방식, 미터법과 야드파운드법 모두 입력 가능)를 같이 보여줍니다. BMI만 보고 저는 몇 년을 잘못 알았기 때문입니다. 칼로리 계산기는 Mifflin-St Jeor 공식을 구현했습니다 — 2026년 기준 대부분의 임상 영양사가 쓰는 공식이고, 옛 Harris-Benedict 값과 나란히 보여줘서 6-9% 격차가 어디로 가는지 볼 수 있게 했습니다.",
			"대출 계산기와 세금 계산기가 가장 의견이 강합니다. 대출 도구는 총 이자를 대출액의 비율로, 큰 글씨로 보여줍니다. 첫 차를 살 때 제 뇌가 계산하기를 거부했던 숫자가 그거였기 때문입니다. 세금 계산기는 한계 세율과 실효 세율을 두드러지게 분리합니다. 그 둘을 헷갈려서 사람들이 매년 수백만 원을 잃기 때문입니다."
		],
		trackTitle: '추적하지 않는 것',
		trackBody: [
			"누군가가 누구인지 아는 분석 도구는 안 씁니다. Google Analytics 4를 쓰되 IP 익명화 켜고, Advertising features 끄고, Google Signals 끕니다. 방문에 붙는 행동 프로필도, 광고 ID도, 사이트 간 추적도 없습니다. 분석이 기록하는 건, 대략 어느 나라의 누군가가 대략 어느 계산기를 대략 언제 열었다는 것뿐입니다. 어느 도구를 계속 유지보수할지 알기에는 그 정도면 충분합니다.",
			"계산은 절대 브라우저를 떠나지 않습니다. 수학은 여러분 기기의 JavaScript에서 돕니다. 데이터를 보낼 서버사이드 계산 엔드포인트가 있지도 않습니다 — Cloudflare Pages에 올린 정적 페이지이고, 함수 번들에 'compute' 라우트가 없습니다. 어느 계산기에든 입력하면서 DevTools Network 탭을 보면 검증할 수 있습니다: 계산 중 외부로 나가는 요청은 0개입니다.",
			"입력값도 저장하지 않습니다. 몇몇 도구(환율 변환기, 단위 변환기)는 다음 방문에 다시 설정하지 않아도 되도록 마지막 사용한 페어를 localStorage로 옵션 기억합니다. 영속성 이야기는 그게 전부입니다. 브라우저 스토리지를 지우면 다 지워집니다."
		],
		yearTitle: '올해 갱신한 숫자들',
		yearBody: [
			"환율은 유럽중앙은행(ECB) 기준 피드에서 매일 받아옵니다. 일중 틱 데이터를 가진 척하지 않습니다. 기준 환율은 여행자와 일반 사용자가 실제로 필요한 환율이고, 은행이 마진을 더하기 전 베이스라인으로 쓰는 것과 같은 환율입니다. 변환기 페이지에 타임스탬프를 표시하니 어느 날 환율을 보고 있는지 알 수 있습니다.",
			"2026년 세금 구간은 미국은 IRS, 한국은 국세청에서 가져옵니다. 발표 당일에 갱신하며, 보통 다음 해 분은 12월에 나옵니다. 연말 결정을 계획 중이라면, 페이지 배너가 올해 구간인지 내년 구간인지 알려줍니다.",
			"칼로리 목표치는 최신 Mifflin-St Jeor 계수를 씁니다. 더 최근의 메타분석에 비해서도 잘 버텨와서 2026년에 변경 없이 유지됐습니다. 활동량 곱(1.2 좌식부터 1.9 매우 활동적까지)은 FAO/WHO/UNU 보고서에서 가져왔고, 대부분의 임상 실무가 여전히 이를 기준으로 봅니다."
		],
		limitsTitle: '이 계산기들이 아닌 것',
		limitsBody: [
			"의학적 자문이 아닙니다. BMI와 칼로리 도구는 1차 스코핑 도구입니다. 계산 결과가 건강에 대한 진짜 우려를 불러일으킨다면, 다음 단계는 페이지 새로고침이 아니라 전문가입니다.",
			"법률·회계 자문도 아닙니다. 세금 도구는 시나리오를 계산합니다. 세액공제, 소득공제, 우리가 수집하지 않는 사실에 의해 결정되는 특수한 상황은 반영하지 않습니다. 세무사와 이야기하기 전에 기대치를 잡는 데 쓰세요. 신고에 그대로 쓰지 마세요.",
			"사람과 이야기하는 것의 대체재가 아닙니다. 이 도구들 중 몇 개는, 빠른 숫자가 어려운 대화 — 연봉 협상, 리파이낸스, 커리어 전환 — 를 시작할 용기를 주기 때문에 만들어졌습니다. 그 대화의 서곡 역할은 기꺼이 합니다. 대화 자체의 대체재는 아닙니다."
		]
	};

	const longCopyJa: LongCopy = {
		startedTitle: '個人ツールとして始まったもの',
		startedBody: [
			"BMI計算機を最初に作ったのは、医者に178cm 82kgで太りすぎだと言われ続けたからです。その数字は25.9で、公式に『太りすぎ』のレンジに入ります。同じBMIを、階段一段を休まず登れなかった元ルームメイトも持っていました。私たちは違う体を持っていました。指標は気にしませんでした。BMIが1830年代に個人の健康ではなく人口統計のために設計されたという注記を目に見えるように一緒に出したら、その一文だけでサイト残り全体より多くの感謝メールが来ました。",
			"そこから個人ツールがいつもそうなるように育ちました。同じ週に二回必要になったら次のものを作る、という具合です。パーセンテージ計算機は『パーセンテージポイント』vs『パーセント変化』を読み間違え続けた税シーズンの後に作りました。通貨換算は食料品を三回買って騙されているのか分からなかった旅行で作りました。プレゼンタイマーは友人が壇上から携帯が見えないのでキーノートのリハ時間を測ってと頼まれた日に作りました。",
			"これらのツールに賢いものは一つもありません。全部スプレッドシートで5分でできるものです。ポイントは、そうしなければならないべきではないということです。すでに開いているデバイスで、数字を一つ入力したら、正しい単位で正しい答えが返ってくるべきです。"
		],
		eachTitle: '各計算機が存在する理由',
		eachBody: [
			"年齢計算機は結婚式RSVPの問題から始まりました。友人の祖母が正確に何日生きてきたかをカードに書く必要があったのです。答えは31,287でした、もし気になるなら。記念日計算機はその次の週に作りました、同じ計算が全く別の理由で繰り返し有用だったからです。",
			"BMI計算機は意図的に体脂肪率の推定値(US Navy方式、メートル法とヤード・ポンド法どちらも入力可)を一緒に表示します。BMIだけで私は何年も誤解したからです。カロリー計算機はMifflin-St Jeor式を実装しています — 2026年時点でほとんどの臨床栄養士が使っている式で、古いHarris-Benedictの値と並べて表示し、6-9%のギャップがどこに行くかを見られるようにしています。",
			"ローン計算機と税金計算機が一番意見が強いです。ローンツールは総支払利息をローン額の比率として大きな文字で表示します。私が初めて車を買ったときに自分の脳が計算を拒否した数字がそれだからです。税金計算機は限界税率と実効税率を目立つように分けます。この二つを混同して人々は毎年何千ドルも失うからです。"
		],
		trackTitle: '追跡しないこと',
		trackBody: [
			"誰であるかを知る分析ツールは使いません。Google Analytics 4を使い、IP匿名化オン、Advertising featuresオフ、Google Signalsオフです。訪問に紐づく行動プロファイルも、広告IDも、サイト横断追跡もありません。分析が記録するのは、おおよそどの国の誰かがおおよそどの計算機をおおよそいつ開いたかだけです。どのツールを保守し続けるかを知るにはそれで十分です。",
			"計算は決してブラウザを離れません。数学はあなたのデバイスのJavaScriptで動きます。データを送るサーバーサイド計算エンドポイントがあるわけでもありません — Cloudflare Pagesの静的ページで、関数バンドルに『compute』ルートはありません。どの計算機でも入力しながらDevToolsのNetworkタブを見れば検証できます: 計算中の外向きリクエストは0件です。",
			"入力も保存しません。いくつかのツール(通貨換算、単位換算)は次回訪問で再設定しなくていいよう、最後に使ったペアをlocalStorageに任意で記憶します。永続化の話はそれで全部です。ブラウザのストレージを消せば全部消えます。"
		],
		yearTitle: '今年更新した数字',
		yearBody: [
			"通貨レートはECB(欧州中央銀行)の参照フィードから毎日取得しています。日中ティックデータを持っているフリはしません。参照レートは旅行者やカジュアルユーザーが実際に必要とするもので、銀行がマージンを乗せる前のベースラインに使うのと同じです。換算ページにタイムスタンプを表示するので、どの日付のレートを見ているか分かります。",
			"2026年の税率区間はアメリカはIRS、韓国は国税庁から取得しています。発表当日に更新します。通常、翌年分は12月に発表されます。年末の判断を計画しているなら、ページバナーが現在年か翌年の区間かを示します。",
			"カロリー目標は最新のMifflin-St Jeor係数を使っています。より最近のメタ分析に対してもよく持ちこたえているので、2026年も変更なしです。活動量の倍数(1.2の座位中心から1.9の非常に活動的まで)はFAO/WHO/UNUレポートに由来し、ほとんどの臨床実践がいまだこれを基準としています。"
		],
		limitsTitle: 'これらの計算機が何でないか',
		limitsBody: [
			"医療アドバイスではありません。BMIとカロリーのツールは初手のスコーピングツールです。計算結果が健康への本当の懸念を引き起こすなら、次のステップはページの再読み込みではなく専門家です。",
			"法律や会計のアドバイスでもありません。税金ツールはシナリオを計算します。控除や、私たちが収集しない事実に依存する特殊な状況は織り込みません。税理士と話す前に期待値を設定するのに使ってください。申告にそのまま使わないでください。",
			"人と話すことの代わりではありません。これらのツールのいくつかは、素早い数字が難しい会話 — 給与交渉、リファイナンス、キャリアチェンジ — を始める勇気を与えるために特に作られました。その会話の前奏曲は喜んで務めます。会話そのものの代わりではありません。"
		]
	};

	const longCopyZh: LongCopy = {
		startedTitle: '从一个个人工具开始',
		startedBody: [
			"我先做了BMI计算器，因为医生一直跟我说我178cm 82kg是超重。这个数字算出来是25.9，正好落在官方的『超重』区间里。我有个前室友，连一层楼梯都得歇一下才能爬完，他的BMI跟我一样。我们身体不一样。指标不在意。我把『BMI是1830年代为人口统计设计的，不是为个人健康』这一行明显地放在计算器旁边，那一句话比网站其余所有部分加起来收到的感谢邮件还多。",
			"从那以后它就按照个人工具一贯的方式长起来：在同一周里需要两次的东西，我就做下一个。百分比计算器是在一个税季之后做的，那段时间我一直把『百分点』和『百分比变化』搞混。汇率换算是在一次旅行里做的，那次我买了三次菜还分不清自己有没有被宰。演讲计时器是在一个朋友请我帮她给主旨演讲彩排计时的当天做的，因为她从讲台上看不到自己的手机。",
			"这些工具没有一个是聪明的。全都是你在电子表格里五分钟就能做出来的事。重点是你不应该非得这么做。你应该可以输入一个数字，在你已经打开的设备上，得到正确单位下的正确答案。"
		],
		eachTitle: '每个计算器为什么存在',
		eachBody: [
			"年龄计算器是从一个婚礼RSVP问题开始的：我得知道朋友的祖母准确活了多少天才能写在卡片上。答案是31,287，万一你好奇。纪念日计算器是下一周做的，因为同一个计算因为完全不同的理由不停地有用。",
			"BMI计算器特意把体脂率估算(US Navy方法，米制和英制都能输入)放在旁边一起显示，因为我自己只看BMI误判了好几年。卡路里计算器实现了Mifflin-St Jeor公式 — 截至2026年大多数临床营养师在用的公式，并把它和老的Harris-Benedict数值并排显示，让你看到6-9%的差距去了哪里。",
			"贷款计算器和税务计算器观点最强。贷款工具用大字号显示总利息占贷款额的比例，因为我第一次买车时我自己的大脑就拒绝算这个数。税务计算器把边际税率和有效税率非常醒目地分开，因为把这两个搞混每年让人们损失成千上万美元。"
		],
		trackTitle: '我们不追踪的东西',
		trackBody: [
			"不用任何能知道你是谁的分析工具。我们用Google Analytics 4，但开了IP匿名化、关掉了Advertising features、关掉了Google Signals。你的访问没有挂在身上的行为画像，没有广告ID，没有跨站追踪。分析记录的只是大致哪个国家的某个人大致打开了哪个计算器、大致是什么时候。这就够我们知道哪些工具值得继续维护了。",
			"计算永远不离开你的浏览器。数学在你设备上的JavaScript里跑。我们就算想要也没有可以发送数据的服务端计算端点 — 这些是Cloudflare Pages上的静态页面，函数包里没有『compute』路由。在任何计算器里输入的同时打开DevTools看Network栏就能验证：计算过程中向外的请求是0个。",
			"我们也不存你输入的内容。少数工具(汇率换算、单位换算)会通过localStorage可选地记住你上次用过的对子，省得下次访问还得重设。持久化的故事就这么多。清掉浏览器存储就全清了。"
		],
		yearTitle: '今年更新过的数字',
		yearBody: [
			"汇率每天从欧洲央行(ECB)参考汇率源拉取。我们不假装有日内tick数据。参考汇率是旅行者和普通用户实际需要的那一种，也是银行加自己利润前的基准。换算页面会显示时间戳，所以你能看到自己看的是哪一天的汇率。",
			"2026年的税档美国从IRS拉、韩国从国税厅拉。我们在公布当天更新，下一年的通常是12月公布。如果你在为年底的决定做计划，页面横幅会告诉你看到的是当年还是下一年的税档。",
			"卡路里目标用的是最新的Mifflin-St Jeor系数，2026年没变 — 因为面对更新的元分析它依然站得住。活动量乘数(1.2久坐到1.9非常活跃)来自FAO/WHO/UNU报告，大多数临床实践仍把它作为基准。"
		],
		limitsTitle: '这些计算器不是什么',
		limitsBody: [
			"不是医学建议。BMI和卡路里工具是第一遍的初步评估工具。如果计算结果让你对健康产生真正的担忧，下一步是找专业人士，不是刷新页面。",
			"也不是法律或会计建议。税务工具计算的是场景。它不算我们没有收集的抵免、扣除以及取决于具体事实的特殊情况。在和报税员谈之前用它来设定预期，不要直接拿它去申报。",
			"不是和人对话的替代品。其中几个工具特意是为了用一个快速数字给你勇气去开启难谈话——薪资谈判、再融资、职业变动——而做的。我们很乐意做那场对话的序曲。我们不是它的替代品。"
		]
	};

	$: lc = (lang === 'ko' ? longCopyKo : lang === 'ja' ? longCopyJa : lang === 'zh' ? longCopyZh : longCopyEn);
</script>

<svelte:head>
	<title>SD.gy - {t('home.title')}</title>
	<meta name="description" content={t('home.subtitle')} />
	<link rel="canonical" href="https://sd.gy/{lang}" />
	<meta property="og:title" content="SD.gy - {t('home.title')}" />
	<meta property="og:description" content={t('home.subtitle')} />
	<meta property="og:url" content="https://sd.gy/{lang}" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="SD.gy - {t('home.title')}" />
	<meta name="twitter:description" content={t('home.subtitle')} />
	<meta name="twitter:image" content="https://sd.gy/og-image.png" />
	<meta property="og:image" content="https://sd.gy/og-image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'SD.gy',
		url: 'https://sd.gy',
		description: 'Free everyday calculators'
	})}</` + `script>`}
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'SD.gy',
		url: 'https://sd.gy',
		logo: 'https://sd.gy/og-image.png',
		sameAs: ['https://github.com/sdk-kr']
	})}</` + `script>`}
</svelte:head>

<div class="max-w-7xl mx-auto px-4 py-12">
	<div class="text-center mb-12">
		<h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-dark-100 mb-4">
			{t('home.title')}
		</h1>
		<p class="text-xl text-gray-600 dark:text-dark-400">
			{t('home.subtitle')}
		</p>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
		{#each tools as tool}
			<a
				href="/{lang}/{tool.href}"
				class="group block p-5 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl hover:border-violet-400 dark:hover:border-violet-400 transition-all hover:shadow-lg hover:shadow-violet-500/10"
			>
				<div class="flex items-center gap-3 mb-3">
					<div class="w-10 h-10 rounded-lg {tool.color} flex items-center justify-center">
						{@html tool.icon}
					</div>
					<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 group-hover:text-violet-500 transition-colors">
						{t(`home.${tool.key}.title`)}
					</h2>
				</div>
				<p class="text-sm text-gray-600 dark:text-dark-400">
					{t(`home.${tool.key}.desc`)}
				</p>
			</a>
		{/each}
	</div>

	<!-- Related Services -->
	<div class="mt-16">
		<h2 class="text-2xl font-bold text-gray-900 dark:text-dark-100 text-center mb-8">
			{t('services.title')}
		</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
			{#each services as service}
				<a
					href={service.url}
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center gap-4 p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-dark-800 dark:to-dark-700 border border-violet-200 dark:border-dark-600 rounded-2xl hover:shadow-lg hover:shadow-violet-500/10 transition-all"
				>
					<div class="w-14 h-14 rounded-xl bg-violet-500/10 dark:bg-violet-500/20 text-violet-500 flex items-center justify-center">
						{@html service.icon}
					</div>
					<div>
						<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 group-hover:text-violet-500 transition-colors">
							{t(`services.${service.name}`)}
						</h3>
						<p class="text-sm text-gray-600 dark:text-dark-400">
							{t(`services.${service.name}Desc`)}
						</p>
						<span class="text-xs text-violet-500 mt-1 inline-block">{service.url.replace('https://', '')}</span>
					</div>
				</a>
			{/each}
		</div>
	</div>

	<!-- Features Section -->
	<div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
		<div class="text-center p-6">
			<div class="w-12 h-12 mx-auto mb-4 rounded-full bg-violet-500/10 flex items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
				</svg>
			</div>
			<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2">
				{lang === 'ko' ? '빠른 계산' : lang === 'ja' ? '高速計算' : lang === 'zh' ? '快速计算' : 'Fast Calculation'}
			</h3>
			<p class="text-sm text-gray-600 dark:text-dark-400">
				{lang === 'ko' ? '브라우저에서 바로 계산되어 빠릅니다' : lang === 'ja' ? 'ブラウザで直接計算するため高速' : lang === 'zh' ? '在浏览器中直接计算，速度快' : 'Calculate instantly in your browser'}
			</p>
		</div>
		<div class="text-center p-6">
			<div class="w-12 h-12 mx-auto mb-4 rounded-full bg-violet-500/10 flex items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
				</svg>
			</div>
			<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2">
				{lang === 'ko' ? '완벽한 프라이버시' : lang === 'ja' ? '完全なプライバシー' : lang === 'zh' ? '完全私密' : 'Complete Privacy'}
			</h3>
			<p class="text-sm text-gray-600 dark:text-dark-400">
				{lang === 'ko' ? '데이터가 서버로 전송되지 않습니다' : lang === 'ja' ? 'データはサーバーに送信されません' : lang === 'zh' ? '数据不会上传到服务器' : 'Your data never leaves your device'}
			</p>
		</div>
		<div class="text-center p-6">
			<div class="w-12 h-12 mx-auto mb-4 rounded-full bg-violet-500/10 flex items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			</div>
			<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2">
				{lang === 'ko' ? '100% 무료' : lang === 'ja' ? '100%無料' : lang === 'zh' ? '100% 免费' : '100% Free'}
			</h3>
			<p class="text-sm text-gray-600 dark:text-dark-400">
				{lang === 'ko' ? '모든 도구를 무료로 사용할 수 있습니다' : lang === 'ja' ? 'すべてのツールが無料で使えます' : lang === 'zh' ? '所有工具完全免费使用' : 'All tools are free with no limits'}
			</p>
		</div>
	</div>

	<!-- Long-form first-person SSR content (AdSense compliance) -->
	<article class="mt-16 max-w-3xl mx-auto space-y-12 text-gray-700 dark:text-dark-300 leading-relaxed">
		<section>
			<h2 class="text-2xl font-bold text-gray-900 dark:text-dark-100 mb-4">{lc.startedTitle}</h2>
			{#each lc.startedBody as p}
				<p class="mb-4">{p}</p>
			{/each}
		</section>

		<section>
			<h2 class="text-2xl font-bold text-gray-900 dark:text-dark-100 mb-4">{lc.eachTitle}</h2>
			{#each lc.eachBody as p}
				<p class="mb-4">{p}</p>
			{/each}
		</section>

		<section>
			<h2 class="text-2xl font-bold text-gray-900 dark:text-dark-100 mb-4">{lc.trackTitle}</h2>
			{#each lc.trackBody as p}
				<p class="mb-4">{p}</p>
			{/each}
		</section>

		<section>
			<h2 class="text-2xl font-bold text-gray-900 dark:text-dark-100 mb-4">{lc.yearTitle}</h2>
			{#each lc.yearBody as p}
				<p class="mb-4">{p}</p>
			{/each}
		</section>

		<section>
			<h2 class="text-2xl font-bold text-gray-900 dark:text-dark-100 mb-4">{lc.limitsTitle}</h2>
			{#each lc.limitsBody as p}
				<p class="mb-4">{p}</p>
			{/each}
		</section>
	</article>
</div>
