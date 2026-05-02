<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'How $5/day From Age 25 Becomes $1.2M By 65',
				ko: '25살부터 하루 $5씩, 65세에 $1.2M이 되는 과정'
			},
			body: {
				en: `A daily latte habit redirected to a low-cost index fund is the most accessible way to feel exponential growth in everyday numbers. Make it concrete: $5 per day equals $150 per month. Invest that $150 monthly from age 25 to 65 in a broadly diversified equity index — historically, the S&P 500 total-return series has averaged roughly 10% nominal and roughly 7% real (inflation-adjusted) over the long run, per data compiled by NYU's Aswath Damodaran from CRSP and S&P Global. Use the future-value-of-an-annuity formula: FV = PMT × [((1 + r/n)^(nt) − 1) / (r/n)] × (1 + r/n) for end-of-month compounding. With PMT = 150, r = 0.10, n = 12, t = 40 you arrive at approximately $948,000 nominal. At 7% real, the same contribution lands near $395,000 in today's dollars — still about $123,000 of contributions for $272,000 of real purchasing-power growth.

Start late and the math is unforgiving. Starting at 35 with the same $150/month and same 10% nominal return → ≈ $342,000 at 65. Starting at 45 → ≈ $114,000. The first decade of compounding produces almost half of the final balance because the early dollars get the most doublings. The Rule of 72 makes this intuitive: at 10% returns money doubles every ~7.2 years. From age 25 to 65 you get roughly 5.5 doublings; from 35 you get 4.2; from 45 you get only 2.8. Each missed doubling halves your future amount.

Bumping the contribution turns the math from "interesting" into "life-changing." $300/month from age 25 reaches roughly $1.9M nominal; $500/month reaches roughly $3.2M. The math scales linearly with PMT but exponentially with time, so adding years matters more than adding dollars in the early decades. The real-world friction is fees: a 1% annual expense ratio (typical for an actively managed fund) reduces the 40-year FV by roughly 25%. Vanguard VTI (total US stock market) carries a 0.03% expense ratio. iShares ITOT carries 0.03%. Schwab SCHB carries 0.03%. Three basis points compound trivially; 100 basis points compound dramatically.

Honest caveats. (1) The 10% historical average comes with ~19% annual standard deviation, meaning any specific 5-year window can easily return 0% or negative 30%. The math here is an expected long-run path, not a guarantee. (2) Sequence-of-returns risk matters most near retirement — a major drawdown at age 60 can lock in losses that a drawdown at 30 would have recovered from. (3) Taxes erode after-tax returns; using a Roth IRA or 401(k) shelters compounding from drag. This is general educational illustration, not financial advice; for personalized planning consult a fiduciary financial advisor.`,
				ko: `매일 마시는 라떼 한 잔을 저비용 인덱스 펀드로 돌리는 것은 일상 숫자에서 지수적 성장을 체감하는 가장 접근하기 쉬운 방법입니다. 구체화하면 — 하루 $5는 월 $150. 25세부터 65세까지 폭넓게 분산된 주식 인덱스에 매월 투자한다고 합시다. S&P 500 총수익 시리즈는 NYU Aswath Damodaran 교수가 CRSP와 S&P Global에서 집계한 데이터 기준 장기 명목 약 10%, 실질(인플레이션 보정) 약 7%를 기록해 왔습니다. 연금 미래 가치 공식 — FV = PMT × [((1 + r/n)^(nt) − 1) / (r/n)] × (1 + r/n) (월말 복리 기준) — 에 PMT = 150, r = 0.10, n = 12, t = 40을 대입하면 약 $948,000 (명목)이 나옵니다. 7% 실질로 계산하면 같은 적립이 오늘 가치 약 $395,000 — 적립금 약 $123,000에 대해 실질 구매력 증가가 약 $272,000.

늦게 시작하면 수학이 가혹합니다. 35세부터 동일한 월 $150, 동일한 10% 명목 → 65세에 ≈ $342,000. 45세부터 → ≈ $114,000. 복리 첫 10년이 최종 잔액의 거의 절반을 만드는데, 초기 달러가 가장 많은 두 배의 기회를 얻기 때문입니다. 72의 법칙으로 직관화하면 — 10%에서 자산은 약 7.2년마다 두 배가 됩니다. 25세부터 65세까지는 약 5.5번 두 배, 35세부터는 4.2번, 45세부터는 2.8번. 놓친 두 배 한 번마다 미래 금액이 반으로 줄어듭니다.

적립금을 늘리면 "흥미로운"에서 "인생을 바꾸는" 수준이 됩니다. 25세부터 월 $300이면 명목 약 $1.9M, 월 $500이면 약 $3.2M. 수학은 PMT에 대해 선형으로, 시간에 대해 지수적으로 확장되므로 — 초기 수십 년에는 달러를 더하는 것보다 시간을 더하는 것이 훨씬 중요합니다. 현실의 마찰은 수수료입니다 — 액티브 펀드의 전형적인 연 1% 보수는 40년 FV를 약 25% 줄입니다. Vanguard VTI(미국 전체 주식 시장)는 보수 0.03%. iShares ITOT는 0.03%. Schwab SCHB는 0.03%. 3 bp는 복리 영향이 미미하지만 100 bp는 극적입니다.

솔직한 주의사항. (1) 10% 역사 평균은 연 표준편차 약 19%를 동반합니다 — 특정 5년 구간은 0% 또는 -30%도 쉽게 나옵니다. 이 수학은 장기 기대 경로이며 보장이 아닙니다. (2) 수익률 순서 위험(sequence-of-returns risk)은 은퇴 직전이 가장 중요합니다 — 60세의 큰 하락은 회복할 시간이 없어 손실로 고착됩니다 (30세였으면 회복했을 손실). (3) 세금이 세후 수익을 갉아먹습니다 — Roth IRA나 401(k)는 복리를 세금 마찰에서 보호합니다. 본 콘텐츠는 일반 교육용 예시이지 재무 자문이 아닙니다 — 개인 맞춤 계획은 수탁 의무를 지는 재무설계사와 상담하세요.`
			},
			code: {
				example: `// Future value of $150/month at 10% nominal, monthly compounding
function annuityFV(PMT, rate, years, n = 12) {
  const r = rate / n, k = n * years;
  return PMT * ((Math.pow(1 + r, k) - 1) / r) * (1 + r);
}

annuityFV(150, 0.10, 40); // ~948,000 starting at age 25
annuityFV(150, 0.10, 30); // ~342,000 starting at age 35
annuityFV(150, 0.10, 20); // ~114,000 starting at age 45

// Same payment, just less time -> roughly half as much for each decade lost.
// Real (inflation-adjusted) at 7%:
annuityFV(150, 0.07, 40); // ~395,000 in today's dollars`
			}
		},
		{
			heading: {
				en: 'Roth vs Traditional IRA: The Compound Math',
				ko: 'Roth vs Traditional IRA — 복리 수학으로 비교'
			},
			body: {
				en: `Both Roth and Traditional IRAs use compound growth, but the timing of taxes splits the future-value math in subtle ways. Traditional IRA contributions are pre-tax — your $7,000 contribution lowers this year's taxable income by $7,000. The entire balance, including future gains, gets taxed as ordinary income at withdrawal. Roth IRA contributions are post-tax — you contribute $7,000 of after-tax money, but every dollar of future growth and every dollar of qualified withdrawal is tax-free. The 2026 IRS contribution limit is $7,000 for under-50, $8,000 with the catch-up.

The clean comparison most articles miss: if your marginal tax rate is identical at contribution and at withdrawal, Roth and Traditional produce mathematically identical after-tax wealth. Proof: let M be your marginal rate, P your contribution amount, r the annual return, t the years. Traditional grows the full pre-tax amount and pays tax at the end: after-tax FV = P × (1+r)^t × (1−M). Roth pays tax at the start and grows tax-free: after-tax FV = P × (1−M) × (1+r)^t. The two expressions are algebraically the same. The break is only when M differs over time.

So which is better in practice? Roth wins when your future tax rate will be higher than today — typical for early-career professionals expecting income growth, residents of states with no income tax who plan to retire in a higher-tax state, or anyone who believes federal rates rise over time (the Tax Cuts and Jobs Act 2017 reductions sunset after 2025 absent new legislation). Traditional wins when your future rate will be lower — typical for high earners in their peak income years (32–37% federal bracket today) who expect to retire in the 12–22% bracket. Many financial planners recommend a mix to hedge tax-rate uncertainty.

The hidden Roth advantage that breaks the symmetry: Roth has effectively higher contribution capacity. A $7,000 Roth contribution shelters $7,000 of after-tax dollars from future tax. A $7,000 Traditional contribution shelters $7,000 minus future tax. To match the after-tax shelter of a Roth at a 30% future rate you would need to contribute $10,000 in Traditional — but the IRS cap is the same $7,000 for both. So at the cap, Roth always shelters more real wealth. There are also no required minimum distributions on Roth IRAs (Traditional IRAs require RMDs starting at age 73), and Roth lets you withdraw your contributions (not earnings) anytime tax- and penalty-free.

Income limits matter. The 2026 Roth IRA contribution phases out between $150,000 and $165,000 modified AGI for single filers ($236,000–$246,000 for married-filing-jointly). Above the cap you cannot contribute directly, but the "backdoor Roth" — non-deductible Traditional contribution converted to Roth — remains legal under current law. This is general education only; consult a CPA or fee-only financial planner for personalized tax strategy.`,
				ko: `Roth와 Traditional IRA 둘 다 복리 성장을 사용하지만, 세금의 시점이 미래 가치 수학을 미묘하게 갈라놓습니다. Traditional IRA 기여는 세전 — $7,000 기여는 올해 과세소득을 $7,000 줄입니다. 잔액 전체(미래 수익 포함)가 인출 시 일반소득세로 과세됩니다. Roth IRA 기여는 세후 — 세후 $7,000을 기여하지만, 미래 수익 한 푼 한 푼과 적격 인출 한 푼 한 푼이 비과세입니다. 2026년 IRS 기여 한도는 50세 미만 $7,000, 50세 이상 catch-up 포함 $8,000.

대부분의 글이 놓치는 깔끔한 비교 — 한계세율이 기여 시점과 인출 시점에 동일하다면 Roth와 Traditional은 수학적으로 동일한 세후 자산을 생성합니다. 증명 — M을 한계세율, P를 기여액, r을 연수익률, t를 연수라 하면. Traditional은 세전 전액이 성장한 뒤 끝에 과세 — 세후 FV = P × (1+r)^t × (1−M). Roth는 시작에 과세, 그 뒤 비과세 성장 — 세후 FV = P × (1−M) × (1+r)^t. 두 식은 대수적으로 동일. 차이는 M이 시간에 따라 달라질 때만 발생합니다.

그래서 실무적으로 어느 쪽이 나은가? Roth는 미래 세율이 현재보다 높을 때 유리 — 소득 성장이 예상되는 사회 초년생, 소득세 없는 주에 살지만 은퇴 시 세금 높은 주로 이주할 사람, 또는 연방 세율이 시간이 갈수록 오를 거라 믿는 사람(2017년 Tax Cuts and Jobs Act 감세는 새 입법 없으면 2025년 이후 일몰). Traditional은 미래 세율이 더 낮을 때 유리 — 절정 소득기에 32~37% 연방 구간이지만 은퇴 시 12~22% 구간으로 떨어질 고소득자에게 일반적입니다. 많은 재무 설계사는 세율 불확실성을 헤지하기 위해 둘을 섞으라고 권합니다.

대칭을 깨는 숨은 Roth 장점 — Roth는 사실상 기여 한도가 더 높습니다. $7,000 Roth 기여는 세후 $7,000을 미래 세금으로부터 보호합니다. $7,000 Traditional 기여는 $7,000에서 미래 세금을 뺀 금액을 보호합니다. 미래 세율 30% 가정 하에서 Roth와 동일한 세후 보호를 얻으려면 Traditional에 $10,000을 넣어야 하는데, IRS 한도는 둘 다 $7,000으로 같습니다. 따라서 한도까지 채울 때는 Roth가 항상 더 많은 실질 자산을 보호합니다. Roth IRA에는 RMD(필수 최소 인출)도 없습니다(Traditional은 73세부터 RMD 시작). 그리고 Roth는 기여금(수익이 아닌)을 언제든 세금·벌금 없이 인출 가능합니다.

소득 한도도 중요. 2026년 Roth IRA 기여는 단독 신고자 수정 AGI $150,000~$165,000 사이에서 단계적 축소(부부 합산 신고는 $236,000~$246,000). 한도 초과 시 직접 기여는 불가하지만 — 비공제 Traditional 기여를 Roth로 변환하는 "backdoor Roth"는 현행법상 합법입니다. 본 콘텐츠는 일반 교육용 — 개인 맞춤 세금 전략은 CPA 또는 수수료 기반 재무 설계사와 상담하세요.`
			},
			code: {
				example: `// Equal tax rates: Roth and Traditional produce identical after-tax wealth.
const P = 7000, r = 0.10, t = 30;
const M = 0.24; // marginal rate at contribution = at withdrawal

const traditional = P * Math.pow(1+r, t) * (1 - M);  // 92,832
const roth        = P * (1 - M) * Math.pow(1+r, t);  // 92,832 (identical)

// Different rates -> winner depends on direction
const Mnow = 0.32, Mlater = 0.18;  // high earner now, low later
const trad2 = P * Math.pow(1+r, t) * (1 - Mlater); // 100,237
const roth2 = P * (1 - Mnow) * Math.pow(1+r, t);   // 83,128
// Traditional wins: $17,109 more after-tax wealth

// Reverse: starting low, expecting higher future rate
const Mlow = 0.12, Mhigh = 0.28;
P * Math.pow(1+r, t) * (1 - Mhigh); // 87,997 traditional
P * (1 - Mlow) * Math.pow(1+r, t);  // 107,615 roth -> Roth wins`
			}
		},
		{
			heading: {
				en: '529 Plans for College: Compounding for Education',
				ko: '529 플랜으로 대학 — 교육 비용을 위한 복리'
			},
			body: {
				en: `A 529 plan is a state-sponsored, tax-advantaged investment account purpose-built for education expenses. Contributions are made with after-tax dollars (similar to a Roth), grow federally tax-free, and qualified withdrawals — tuition, fees, books, room and board, and up to $10,000/year of K–12 tuition under the 2017 TCJA expansion — are also federally tax-free. Many states layer on a state income tax deduction for contributions to their own plan: New York, Illinois, Michigan, and several others offer deductions worth several hundred to a few thousand dollars annually.

The compounding case is strong because the planning horizon is naturally long. Open a 529 at a child's birth and you have 18 years before tuition starts — long enough for two doublings at 7% real returns. Contribute $300/month from birth to age 18 and the balance lands near $130,000 nominal at 8% (a typical age-based portfolio's return historically). Even $100/month becomes roughly $43,000 over the same span. The earlier the start, the more aggressive the equity allocation can be in early years, gradually de-risking via the plan's "age-based" or "target-enrollment-date" glide path as college approaches — much like a target-date retirement fund.

Real cost numbers anchor the planning. The College Board's Trends in College Pricing 2024 report puts the average published in-state public four-year tuition at roughly $11,260/year and four-year private at roughly $43,350/year (excluding room and board, books, fees). Assume 4% annual tuition inflation — close to historical average per the College Board, though specific years vary widely — and a public four-year sticker price for a child born in 2026 would be around $22,800/year by freshman year, or roughly $95,000 across four years. A private four-year would be around $87,800/year, or $367,000 total. These are sticker prices; actual net price after grants and scholarships is typically much lower.

Important constraints. (1) Non-qualified withdrawals trigger ordinary income tax on the earnings portion plus a 10% federal penalty (with several exceptions including scholarships, death, disability, and military academy attendance). (2) 529 balances count as a parental asset on the FAFSA at a maximum 5.64% rate — far gentler than the 20% rate applied to student-owned assets. (3) The SECURE 2.0 Act (2022) added a path to roll up to $35,000 of unused 529 balance into a beneficiary's Roth IRA after the account has been open 15 years, subject to annual Roth contribution limits — meaning over-funding is less catastrophic than it used to be. (4) Investment options are limited to whatever menu your chosen state plan offers; expense ratios range from 0.10% (Utah my529, Nevada Vanguard 529) to 1.5%+ for some advisor-sold plans — choose direct-sold plans with low fees. Educational only; consult a CPA or fee-only financial planner for state-specific tax strategy.`,
				ko: `529 플랜은 교육비를 위해 특별히 설계된 주(州) 후원 세제 혜택 투자 계좌입니다. 기여는 세후 자금으로 하고(Roth와 유사), 연방세 비과세로 성장하며, 적격 인출 — 학비, 수업료, 책, 기숙사·식대, 그리고 2017년 TCJA 확장으로 연 $10,000까지의 K-12 학비 — 도 연방세 비과세입니다. 많은 주가 자체 플랜 기여에 주(州) 소득세 공제를 추가로 제공합니다 — 뉴욕, 일리노이, 미시간 등은 연 수백~수천 달러 가치의 공제를 제공합니다.

복리 케이스가 강력한 이유는 계획 기간이 자연스럽게 길기 때문입니다. 자녀 출생 시 529를 개설하면 학비 시작까지 18년 — 7% 실질 수익으로 두 번 두 배가 가능한 충분한 시간. 출생부터 18세까지 월 $300 기여하면 8%(연령 기반 포트폴리오의 역사적 수익률) 가정 시 잔액이 명목 약 $130,000에 도달. 월 $100이라도 같은 기간에 약 $43,000. 일찍 시작할수록 초기에 주식 비중을 공격적으로 가져갈 수 있고, 대학이 가까워질수록 플랜의 "연령 기반" 또는 "목표 입학년도" 글라이드 패스로 점진적으로 위험을 줄입니다 — 타겟 데이트 은퇴 펀드와 유사합니다.

실제 비용 숫자가 계획의 기준을 잡아줍니다. College Board의 Trends in College Pricing 2024 보고서에 따르면 평균 공시 주내 공립 4년제 학비는 연 약 $11,260, 사립 4년제는 연 약 $43,350(기숙사·식대·책 제외). 연 4% 학비 인플레이션 가정(College Board에 따르면 역사 평균에 가깝지만 특정 연도는 변동 큼) 하에서, 2026년 출생 자녀가 신입생이 될 때 공립 4년제 공시가는 연 약 $22,800, 4년 총 약 $95,000. 사립 4년제는 연 약 $87,800, 4년 총 $367,000. 이는 공시가이며, 장학금·보조금 후 실제 순 비용은 보통 훨씬 낮습니다.

중요한 제약. (1) 비적격 인출은 수익 부분에 일반소득세와 연방 10% 벌금이 부과됩니다(장학금, 사망, 장애, 군사관학교 입학 등 몇 가지 예외 있음). (2) 529 잔액은 FAFSA에서 부모 자산으로 최대 5.64%만 평가됩니다 — 학생 소유 자산에 적용되는 20%보다 훨씬 관대합니다. (3) SECURE 2.0 법(2022)은 계좌 개설 후 15년이 지난 미사용 529 잔액 중 최대 $35,000을 수혜자의 Roth IRA로 롤오버할 수 있는 길을 열었습니다(연 Roth 기여 한도 적용). 즉, 과다 적립의 파괴력이 예전보다 줄었습니다. (4) 투자 옵션은 선택한 주 플랜의 메뉴로 제한됩니다 — 보수율은 0.10%(Utah my529, Nevada Vanguard 529)부터 1.5% 이상(일부 자문 판매 플랜)까지 — 직판(direct-sold) 저비용 플랜을 선택하세요. 교육용일 뿐 — 주별 세금 전략은 CPA 또는 수수료 기반 재무 설계사와 상담하세요.`
			},
			code: {
				example: `// 529 plan: contributions from birth to age 18
function plan529(monthly, returnPct) {
  const r = returnPct / 12, n = 12 * 18;
  return monthly * ((Math.pow(1+r, n) - 1) / r) * (1 + r);
}

plan529(100, 0.08); // ~$43,400 (modest)
plan529(300, 0.08); // ~$130,200 (covers ~6 yrs in-state public)
plan529(500, 0.08); // ~$217,000 (covers most private 4-yr)

// Future tuition with 4% inflation
function futureCost(currentAnnualCost, years, inflation = 0.04) {
  return currentAnnualCost * Math.pow(1 + inflation, years);
}
futureCost(11260, 18);  // ~$22,800/yr public 4-year by freshman year
futureCost(43350, 18);  // ~$87,800/yr private 4-year by freshman year`
			}
		}
	];

	const toolContent = {
		about: {
			en: 'Compound interest is "interest on interest" — earnings are added to the principal, then earn more interest on the new total. This calculator uses the standard formula A = P(1 + r/n)^(nt) and lets you adjust principal, annual rate, time, and compounding frequency. Results are for educational purposes only and are not financial advice; actual returns vary with taxes, fees, and inflation.',
			ko: '복리는 "이자에 또 이자가 붙는" 방식으로, 발생한 이자를 원금에 더한 뒤 다시 이자가 계산됩니다. 이 계산기는 표준 공식 A = P(1 + r/n)^(nt)을 사용하며, 원금·연이율·기간·복리 주기를 자유롭게 조정할 수 있습니다. 본 도구는 교육 목적의 정보 제공이며 금융 자문이 아닙니다. 실제 수익은 세금, 수수료, 물가상승률 등에 따라 달라집니다.',
			ja: '複利は「利息に利息がつく」仕組みで、発生した利息を元本に加え、新しい合計に対して再び利息が計算されます。この計算機は標準式 A = P(1 + r/n)^(nt) を用い、元本、年利、期間、複利頻度を自由に調整できます。本ツールは教育目的の情報提供で、金融助言ではありません。実際の収益は税金や手数料、インフレ等で変動します。',
			zh: '复利意为"利息再生利息"——产生的利息加入本金，下一期就用新的总额计算利息。本计算器使用标准公式 A = P(1 + r/n)^(nt)，可调整本金、年利率、期限和复利频次。本工具仅供教育参考，不构成金融建议。实际收益受税费、通胀等因素影响。'
		},
		howTo: {
			en: [
				'Enter your starting principal amount.',
				'Set the expected annual interest rate as a percentage.',
				'Choose the investment period in years.',
				'Pick how often interest compounds (annually, monthly, daily, etc.).',
				'Read the future value, total interest earned, and principal/interest split.'
			],
			ko: [
				'초기 투자 원금을 입력합니다.',
				'예상 연이율(%)을 입력합니다.',
				'투자 기간(년)을 선택합니다.',
				'복리 주기를 선택합니다(연·반기·분기·월·일).',
				'미래 가치, 총 이자, 원금·이자 비율을 확인합니다.'
			],
			ja: [
				'元本を入力します。',
				'想定年利（%）を入力します。',
				'投資期間（年）を選びます。',
				'複利頻度を選びます（年・半年・四半期・月・日）。',
				'将来価値、合計利息、元本と利息の割合を確認します。'
			],
			zh: [
				'输入初始本金。',
				'输入预期年利率（%）。',
				'选择投资期限（年）。',
				'选择复利频次（年/半年/季/月/日）。',
				'查看未来值、累计利息以及本金与利息的比例。'
			]
		},
		useCases: {
			en: [
				'Estimating long-term growth of savings or retirement accounts.',
				'Comparing investment products with different compounding frequencies.',
				'Visualizing the power of starting to invest earlier in life.',
				'Setting financial goals like a down payment or college fund.',
				'Sanity-checking returns advertised by banks or investment apps.'
			],
			ko: [
				'예적금이나 연금 계좌의 장기 성장 추정.',
				'복리 주기가 다른 금융 상품 비교.',
				'일찍 투자를 시작했을 때의 효과 시각화.',
				'주택 자금, 학자금 등 재무 목표 설정.',
				'은행·증권사가 광고하는 수익률을 검증.'
			],
			ja: [
				'貯蓄や年金口座の長期成長を試算。',
				'複利頻度の異なる金融商品を比較。',
				'早期投資の効果を可視化。',
				'住宅頭金や教育資金などの目標設定。',
				'銀行や投資アプリの広告利回りを検証。'
			],
			zh: [
				'估算储蓄或退休账户的长期增长。',
				'比较不同复利频次的金融产品。',
				'直观展示早投资的复利效应。',
				'设定首付、教育金等理财目标。',
				'核对银行或投资应用宣传的收益率。'
			]
		},
		faq: {
			en: [
				{ q: 'Does this account for taxes and inflation?', a: 'No. The calculator shows nominal growth before taxes, fees, and inflation. Real purchasing power may be lower than the displayed number.' },
				{ q: 'Why does daily compounding only slightly beat monthly?', a: 'For typical interest rates, the difference between monthly and daily compounding is small once n exceeds 12. Continuous compounding is the theoretical upper bound.' },
				{ q: 'Can I model regular monthly contributions?', a: 'This tool computes a single lump-sum scenario. For recurring deposits, multiply each deposit\'s future value separately or use a dedicated savings calculator.' },
				{ q: 'Is this financial advice?', a: 'No. It is an educational illustration of compound math. Consult a licensed financial advisor before making investment decisions.' }
			],
			ko: [
				{ q: '세금이나 물가상승률이 반영되나요?', a: '아닙니다. 세전·수수료 전·물가 반영 전 명목 수익만 보여 줍니다. 실제 구매력은 표시 금액보다 낮을 수 있습니다.' },
				{ q: '일복리가 월복리보다 크게 차이나지 않는 이유?', a: '일반적인 금리 수준에서는 n이 12를 넘으면 차이가 매우 작아집니다. 이론상 최대치는 연속복리입니다.' },
				{ q: '매월 적립금도 계산할 수 있나요?', a: '이 도구는 단일 일시금 시나리오만 계산합니다. 정기 적립을 반영하려면 각 회차의 미래 가치를 따로 더하거나 적립식 계산기를 사용하세요.' },
				{ q: '이 결과가 금융 자문인가요?', a: '아닙니다. 복리의 수학적 원리를 보여 주는 교육용 자료입니다. 실제 투자 결정 전에 공인 재무상담사와 상담하세요.' }
			]
		},
		related: [
			{ href: '/loan-calculator', label: { en: 'Loan Calculator', ko: '대출 계산기', ja: 'ローン計算機', zh: '贷款计算器' } },
			{ href: '/percentage', label: { en: 'Percentage', ko: '퍼센트 계산기', ja: 'パーセント計算', zh: '百分比' } },
			{ href: '/currency-converter', label: { en: 'Currency Converter', ko: '환율 변환', ja: '通貨換算', zh: '货币换算' } }
		],
		externalRefs: [
			{ href: 'https://www.investopedia.com/terms/c/compoundinterest.asp', label: 'Investopedia: Compound Interest' },
			{ href: 'https://www.sec.gov/about/reports-publications/investor-publications/compound-interest-calculator', label: 'SEC: Compound Interest Calculator' }
		]
	};

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let principal = 10000;
	let rate = 5;
	let years = 10;
	let compoundFrequency = 12; // monthly

	$: futureValue = principal * Math.pow(1 + rate / 100 / compoundFrequency, compoundFrequency * years);
	$: totalInterest = futureValue - principal;

	const frequencies = [
		{ value: 1, label: 'compound.annually' },
		{ value: 2, label: 'compound.semiannually' },
		{ value: 4, label: 'compound.quarterly' },
		{ value: 12, label: 'compound.monthly' },
		{ value: 365, label: 'compound.daily' }
	];

	function formatCurrency(value: number): string {
		return new Intl.NumberFormat(lang === 'ko' ? 'ko-KR' : lang === 'ja' ? 'ja-JP' : lang === 'zh' ? 'zh-CN' : 'en-US', {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		}).format(value);
	}
</script>

<svelte:head>
	<title>{t('compound.title')} - SD.gy</title>
	<meta name="description" content={t('compound.desc')} />
	<link rel="canonical" href="https://sd.gy/{lang}/compound-interest" />
	<meta property="og:title" content="{t('compound.title')} - SD.gy" />
	<meta property="og:description" content={t('compound.desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/compound-interest" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('compound.title')} - SD.gy" />
	<meta name="twitter:description" content={t('compound.desc')} />
</svelte:head>

<div class="max-w-2xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('compound.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('compound.desc')}</p>
	</div>

	<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
		<!-- Input Fields -->
		<div class="space-y-4 mb-6">
			<div>
				<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('compound.principal')}</label>
				<input
					type="number"
					bind:value={principal}
					min="0"
					step="100"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent text-lg"
				/>
			</div>

			<div>
				<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('compound.rate')} (%)</label>
				<input
					type="number"
					bind:value={rate}
					min="0"
					max="100"
					step="0.1"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent text-lg"
				/>
				<input
					type="range"
					bind:value={rate}
					min="0"
					max="20"
					step="0.5"
					class="w-full mt-2 accent-violet-500"
				/>
			</div>

			<div>
				<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('compound.years')}</label>
				<input
					type="number"
					bind:value={years}
					min="1"
					max="50"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent text-lg"
				/>
				<input
					type="range"
					bind:value={years}
					min="1"
					max="50"
					class="w-full mt-2 accent-violet-500"
				/>
			</div>

			<div>
				<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('compound.frequency')}</label>
				<select
					bind:value={compoundFrequency}
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent text-lg"
				>
					{#each frequencies as freq}
						<option value={freq.value}>{t(freq.label)}</option>
					{/each}
				</select>
			</div>
		</div>

		<!-- Results -->
		<div class="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 space-y-4">
			<div class="flex justify-between items-center">
				<span class="text-gray-600 dark:text-dark-400">{t('compound.futureValue')}</span>
				<span class="text-2xl font-bold text-violet-500">${formatCurrency(futureValue)}</span>
			</div>
			<div class="flex justify-between items-center">
				<span class="text-gray-600 dark:text-dark-400">{t('compound.totalInterest')}</span>
				<span class="text-xl font-semibold text-green-500">+${formatCurrency(totalInterest)}</span>
			</div>
			<div class="flex justify-between items-center">
				<span class="text-gray-600 dark:text-dark-400">{t('compound.principal')}</span>
				<span class="text-lg text-gray-700 dark:text-dark-300">${formatCurrency(principal)}</span>
			</div>
		</div>

		<!-- Visual Bar -->
		<div class="mt-6">
			<div class="h-8 rounded-full overflow-hidden flex">
				<div
					class="bg-gray-400 dark:bg-dark-500 transition-all"
					style="width: {(principal / futureValue) * 100}%"
				></div>
				<div
					class="bg-green-400 transition-all"
					style="width: {(totalInterest / futureValue) * 100}%"
				></div>
			</div>
			<div class="flex justify-between text-xs text-gray-500 dark:text-dark-400 mt-2">
				<span>{t('compound.principal')}: {((principal / futureValue) * 100).toFixed(1)}%</span>
				<span>{t('compound.interest')}: {((totalInterest / futureValue) * 100).toFixed(1)}%</span>
			</div>
		</div>
	</div>

	<!-- Info Section -->
	<div class="mt-8 bg-blue-50 dark:bg-dark-800 rounded-xl p-6 border border-blue-200 dark:border-dark-700">
		<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-3">{t('compound.formula')}</h2>
		<p class="text-gray-700 dark:text-dark-300 font-mono text-sm bg-white dark:bg-dark-700 p-3 rounded-lg">
			A = P(1 + r/n)^(nt)
		</p>
		<ul class="mt-3 text-sm text-gray-600 dark:text-dark-400 space-y-1">
			<li><strong>A</strong> = {t('compound.futureValue')}</li>
			<li><strong>P</strong> = {t('compound.principal')}</li>
			<li><strong>r</strong> = {t('compound.rate')}</li>
			<li><strong>n</strong> = {t('compound.frequency')}</li>
			<li><strong>t</strong> = {t('compound.years')}</li>
		</ul>
	</div>

	<ToolContent
		{lang}
		toolName="Compound Interest Calculator"
		toolUrl="https://sd.gy/{lang}/compound-interest"
		lastUpdated="2026-04-30"
		category="Daily Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sd.gy/${lang}` },
			{ name: 'Tools', url: `https://sd.gy/${lang}` },
			{ name: 'Compound Interest Calculator', url: `https://sd.gy/${lang}/compound-interest` }
		]}
		content={toolContent}
	/>

	<ToolGuide {lang} sections={guideSections} />
</div>
