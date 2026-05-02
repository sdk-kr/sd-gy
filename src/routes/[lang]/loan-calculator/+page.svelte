<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'Auto Loan vs Lease — The Lifetime Cost Math',
				ko: '자동차 대출 vs 리스 — 평생 비용 수학'
			},
			body: {
				en: `On the surface, leasing looks cheaper: monthly payments are typically 30–50% lower than financing the same vehicle. The catch is that the lease payment buys you depreciation plus rent, while the loan payment buys you the entire car. Run a 3-year window on a $35,000 mid-size sedan to see what the math actually looks like.

Lease scenario: assume a 36-month, 36k-mile lease with money factor 0.0015 (≈ 3.6% APR equivalent — multiply by 2400 to convert money factor to APR), residual value 58% ($20,300), and an acquisition fee of $695. Capitalized cost reduction (down payment) of $0. Depreciation = ($35,000 − $20,300) / 36 = $408.33/month. Rent charge = ($35,000 + $20,300) × 0.0015 = $82.95/month. Pre-tax monthly = $491.28. Add 8% sales tax (varies by state) → $530.58. Over 36 months you pay $19,790 — and you return the keys with nothing.

Loan scenario: same $35,000, $0 down, 60-month note at 7.5% APR. Monthly payment via the amortization formula M = P · r · (1+r)^n / ((1+r)^n − 1) = $701.40. Over 36 months you have paid $25,250 in payments. Of that, roughly $16,800 went to principal and $8,450 to interest. The car at month 36 is worth approximately $20,300 (same residual). Net worth position: $25,250 paid out, $20,300 asset, plus a remaining balance of $18,200 you still owe. Equity = $20,300 − $18,200 = $2,100.

Side by side at month 36: lease costs $19,790 with nothing to show; loan costs $25,250 paid plus $18,200 still owed but with $2,100 in equity. The lease is $5,460 cheaper out of pocket but leaves you with no asset and no transportation. The loan path requires another 24 months to own free and clear — and once you cross year 5, the per-month cost of ownership drops to insurance, fuel, and maintenance. Over a 10-year horizon, owning typically wins by $5,000–$15,000, depending on residual values, interest rates, and how long you actually keep cars. Lease loses if you keep cars more than 4 years; lease wins if you trade every 3 years and value the latest features. Educational only — confirm specific lease/loan terms in writing with your dealer and lender.`,
				ko: `표면적으로 리스는 싸 보입니다 — 월 납입금이 같은 차량을 할부로 살 때보다 보통 30~50% 낮습니다. 함정은, 리스료는 감가상각과 임대료를 사는 것이고 할부 납입금은 차 전체를 사는 것이라는 점입니다. $35,000 중형 세단의 3년 시나리오로 실제 수학을 비교해 봅시다.

리스 시나리오 — 36개월, 36k 마일, 머니팩터 0.0015 (≈ APR 3.6%, 머니팩터 × 2400 = APR 환산), 잔존가치 58% ($20,300), 취득수수료 $695, 선납금 $0 가정. 감가상각 = ($35,000 − $20,300) / 36 = $408.33/월. 임대 비용 = ($35,000 + $20,300) × 0.0015 = $82.95/월. 세전 월 = $491.28. 8% 판매세(주마다 다름) 가산 → $530.58. 36개월간 $19,790 지불 — 그리고 차 키를 반납하고 끝.

할부 시나리오 — 동일한 $35,000, 선납 $0, 60개월 7.5% APR. 원리금균등상환 공식 M = P · r · (1+r)^n / ((1+r)^n − 1) = $701.40/월. 36개월간 $25,250 납입. 이 중 약 $16,800은 원금, $8,450은 이자. 36개월 시점 차량 가치는 약 $20,300 (동일 잔존가치). 순자산 위치 — $25,250 지출, $20,300 자산, 잔여 대출 $18,200. 순 자본 = $20,300 − $18,200 = $2,100.

36개월 시점 비교 — 리스 $19,790 지출, 잔존 자산 0. 할부 $25,250 지출 + $18,200 부채, 순 자본 $2,100. 리스가 현금 흐름상 $5,460 저렴하지만 자산도 차량도 남지 않습니다. 할부는 24개월 더 내야 완전히 소유합니다 — 그 5년차를 넘기면 월 보유 비용이 보험, 연료, 정비로 줄어듭니다. 10년 시야에서는 보통 소유가 $5,000~$15,000 정도 유리합니다 (잔존가치, 금리, 실제 보유 기간에 따라 다름). 차량을 4년 이상 타면 리스가 손해, 3년마다 바꾸고 최신 기능을 중시하면 리스가 유리합니다. 교육용이며 — 구체적인 리스/대출 조건은 딜러와 대출기관과 서면으로 확인하세요.`
			},
			code: {
				example: `// 36-month lease vs 60-month loan on a $35,000 car
const price = 35000;
const residualPct = 0.58;
const residual = price * residualPct;     // 20300
const moneyFactor = 0.0015;               // APR ~ 3.6% (MF * 2400)
const leaseMonths = 36;
const taxRate = 0.08;

const depreciation = (price - residual) / leaseMonths;        // 408.33
const rentCharge   = (price + residual) * moneyFactor;        // 82.95
const lease = (depreciation + rentCharge) * (1 + taxRate);    // 530.58
const leaseTotal = lease * leaseMonths;                       // 19,790

// Loan: 60-month, 7.5% APR
const r = 0.075 / 12, n = 60;
const M = price * r * Math.pow(1+r, n) / (Math.pow(1+r, n) - 1); // 701.40
const paid36 = M * 36;       // 25,250
const balance36 = price * (Math.pow(1+r, n) - Math.pow(1+r, 36)) / (Math.pow(1+r, n) - 1);
// Equity at month 36 = residual - remaining balance`
			}
		},
		{
			heading: {
				en: 'Personal Loan APR vs Credit Card APR (When to Consolidate)',
				ko: '개인 대출 APR vs 신용카드 APR — 언제 통합해야 하는가'
			},
			body: {
				en: `Credit card debt and personal loan debt are both unsecured consumer credit, yet the average rates differ wildly: as of early 2026, the Federal Reserve's G.19 release reports the average commercial bank credit card APR at roughly 22%, while average 24-month personal loan APR sits closer to 12%. That ten-percentage-point gap is the entire reason the debt consolidation industry exists — and also the reason it can backfire if you do the math wrong.

The case where consolidation clearly wins: $15,000 in credit card debt at 24% APR, paying the minimum (typically interest plus 1% of balance, about $325/month). At that pace you would take roughly 17 years to pay off and spend approximately $14,300 in interest alone. Refinance into a 5-year personal loan at 12% APR via the standard amortization formula M = P · r · (1+r)^n / ((1+r)^n − 1): monthly payment $333.67, total interest paid $5,020. Switching saves $9,280 in interest and you are debt-free in 60 months instead of 200. The break-even depends on how disciplined you are about not running the cards back up.

The case where consolidation backfires: same $15,000 at 24% APR, but instead of paying minimums you were already paying $500/month — that schedule clears the debt in 47 months with about $8,300 interest. Now refinance to a 7-year personal loan at 12% APR: monthly drops to $264.81, total interest jumps to $7,244 over 84 months. You "saved" $1,000 in interest only by stretching the term to 7 years. Worse, the 24% credit card line stays open and frequently gets re-utilized — about 60% of debt consolidation borrowers run their card balances back up within 24 months, per the Consumer Financial Protection Bureau's 2017 report on debt consolidation outcomes.

Three rules of thumb. (1) Consolidate only if the new APR is at least 5 percentage points lower than the weighted average APR of what you are replacing — fees and origination charges erode smaller spreads. (2) Keep or shorten the payoff term; never extend it. If you were 4 years from payoff at minimum payments, target a 3-year personal loan. (3) Close or freeze the credit card lines you just paid off to remove the temptation. Look at hardship programs from the original creditor first — they can sometimes drop your APR to 9–12% without a new loan or hard credit pull. This is general educational content; for a personalized assessment, talk to a non-profit credit counselor accredited by the NFCC (nfcc.org).`,
				ko: `신용카드 부채와 개인 대출 부채는 둘 다 무담보 소비자 신용이지만 평균 금리는 크게 다릅니다 — 2026년 초 기준 미국 연준 G.19 발표에 따르면 시중은행 신용카드 평균 APR은 약 22%, 24개월 개인 대출 평균 APR은 약 12%입니다. 이 10%p 격차가 부채 통합 산업이 존재하는 이유이며, 동시에 잘못 계산하면 역효과가 날 수 있는 이유입니다.

통합이 명확히 이기는 경우 — 신용카드 잔액 $15,000, APR 24%, 최소 결제(보통 이자 + 잔액의 1%, 약 $325/월) 납입. 이 속도로는 약 17년 걸리고 이자만 약 $14,300 지불. 표준 원리금균등상환 공식 M = P · r · (1+r)^n / ((1+r)^n − 1)으로 5년 12% APR 개인 대출로 차환하면 — 월 $333.67, 총 이자 $5,020. 차환으로 이자 $9,280 절감, 200개월이 아닌 60개월에 부채 청산. 손익분기는 카드를 다시 쓰지 않는 자제력에 달려 있습니다.

통합이 역효과인 경우 — 같은 $15,000 / 24% APR이지만 최소 결제 대신 이미 월 $500을 내고 있던 상황. 이 일정이면 47개월에 약 $8,300 이자로 청산됩니다. 여기서 12% APR 7년 개인 대출로 바꾸면 — 월 $264.81, 총 이자 $7,244 (84개월 동안). 이자 "절감"은 $1,000에 불과한데 기간을 7년으로 늘려서 얻은 것입니다. 더 나쁜 건, 24% 카드 라인은 그대로 열려 있고 자주 재사용된다는 점입니다 — 미국 CFPB 2017년 부채 통합 결과 보고서에 따르면 부채 통합 차주의 약 60%가 24개월 내 카드 잔액을 다시 늘립니다.

세 가지 경험칙. (1) 새 APR이 대체할 가중 평균 APR보다 최소 5%p 낮을 때만 통합 — 수수료와 개시 비용이 작은 스프레드를 잠식합니다. (2) 상환 기간을 유지하거나 줄이세요, 절대 늘리지 말 것. 최소 결제로 4년 남았다면 3년 개인 대출을 목표로. (3) 방금 갚은 카드 라인은 닫거나 동결해 유혹을 제거. 새 대출과 신용 조회 없이 원 채권자의 헬프 프로그램이 APR을 9~12%로 낮춰주는 경우도 있으니 먼저 알아보세요. 본 콘텐츠는 일반 교육용 — 개인 맞춤 평가는 미국 NFCC(nfcc.org) 인증 비영리 신용상담사와 상담하세요.`
			},
			code: {
				example: `// $15,000 debt: minimum payments vs 5-year consolidation
function payoffMonths(principal, apr, monthlyPayment) {
  const r = apr / 12;
  let bal = principal, months = 0, interest = 0;
  while (bal > 0 && months < 600) {
    const i = bal * r;
    interest += i;
    bal = bal + i - monthlyPayment;
    months++;
  }
  return { months, interest: +interest.toFixed(0) };
}

payoffMonths(15000, 0.24, 325);   // ~200 months, ~$14,300 interest
payoffMonths(15000, 0.12, 333.67);// ~60 months,  ~$5,020 interest

// Consolidate only if new APR is >=5pp lower than weighted average
function shouldConsolidate(currentWeightedApr, newApr) {
  return (currentWeightedApr - newApr) >= 0.05;
}`
			}
		},
		{
			heading: {
				en: 'Co-signing Math: What You Are Really Promising',
				ko: '연대 보증 수학 — 당신이 실제로 약속하는 것'
			},
			body: {
				en: `When a parent co-signs a $30,000 student loan or a friend co-signs a $20,000 auto loan, what they sign is not a "vouch" or a "reference" — they sign a joint and several liability contract. The lender can demand the entire balance from the co-signer the day after the primary borrower misses a payment, and they often do. The Consumer Financial Protection Bureau's data shows roughly 38% of co-signers ultimately have to pay some or all of the loan, and 28% see their credit score drop because of it.

The math your credit report sees is brutal. The full loan balance counts toward your debt-to-income (DTI) ratio for any future mortgage, auto loan, or refinance application. Co-sign a $30,000 student loan with a $300/month payment, and Fannie Mae underwriters add that $300 to your monthly obligations even though you have never made a payment — that single line item can cost you about $50,000 of borrowing capacity on a 30-year mortgage at 7%. The loan also lives on your credit report. A single 30-day late by the primary borrower drops a co-signer's FICO score by 50–100 points; a 90-day late drops it by another 50–80. Recovery takes 24 months minimum and the negative mark stays on the report for 7 years.

Worse, "co-signer release" — the lender's option to formally remove you after the primary borrower makes 12–48 on-time payments — is far less reliable than borrowers assume. Sallie Mae approves roughly 5% of co-signer release requests; SoFi and other private lenders reportedly approve 10–25%. The borrower must demonstrate income that independently supports the loan, hit a credit score threshold (often 700+), and apply during a narrow window. Practical reality: assume the obligation is permanent unless you refinance the loan into the borrower's name alone.

If you must co-sign, three protections meaningfully reduce risk. (1) Demand monthly statement access — federal law requires lenders to provide statements to all named borrowers, but in practice you have to ask. Set up account alerts in your own name so you find out about late payments before they hit credit. (2) Set a written agreement with the primary borrower that funds you a "reserve" equal to 3 months of payments, held in your own account, available if they miss. (3) Push hard for a clear refinance/release timeline — document an expectation that the loan is refinanced into the borrower's sole name within 24–36 months once their credit qualifies. None of this changes the legal obligation; it only manages the downside. Educational information only; consult a licensed attorney before signing.`,
				ko: `부모가 $30,000 학자금 대출에 연대 보증을 서거나 친구가 $20,000 자동차 대출에 연대 보증을 설 때, 그들이 서명하는 것은 "추천서"나 "참조"가 아닙니다 — 연대보증(joint and several liability) 계약입니다. 채권자는 주차주가 한 번이라도 연체하면 그 다음날부터 잔액 전액을 보증인에게 청구할 수 있고, 실제로 자주 그렇게 합니다. 미국 CFPB 데이터에 따르면 연대보증인의 약 38%가 결국 일부 또는 전액을 갚게 되고, 28%는 신용점수 하락을 경험합니다.

신용보고서가 보는 수학은 가혹합니다. 대출 잔액 전체가 향후 주택담보대출, 자동차 대출, 차환 신청 시 부채/소득 비율(DTI)에 잡힙니다. 월 $300인 $30,000 학자금 대출에 보증을 서면 — 한 번도 갚은 적이 없어도 — Fannie Mae 언더라이터는 그 $300을 월 의무로 가산합니다. 그 한 줄이 30년 7% 모기지에서 대출 한도를 약 $50,000 깎아먹습니다. 대출은 신용보고서에도 올라갑니다. 주차주가 한 번 30일 연체하면 보증인의 FICO 점수가 50~100점 하락하고, 90일 연체면 추가 50~80점 하락. 회복에 최소 24개월, 부정 기록은 7년 동안 남습니다.

게다가 "보증인 해제(co-signer release)" — 주차주가 12~48회 정상 상환한 뒤 채권자가 보증인을 공식 제외하는 옵션 — 은 차주들이 기대하는 것보다 훨씬 신뢰할 수 없습니다. Sallie Mae는 보증인 해제 신청의 약 5%를 승인하고, SoFi 등 사설 대출기관은 10~25% 정도로 보고됩니다. 차주가 대출을 독립적으로 감당할 소득을 입증하고, 신용점수 임계(보통 700+)를 넘고, 좁은 신청 창 내에 신청해야 합니다. 현실적으로 — 대출이 차주 단독 명의로 차환되지 않는 한 의무가 영구적이라고 가정하세요.

꼭 보증을 서야 한다면 세 가지 보호 장치가 실질적인 위험을 줄입니다. (1) 월별 명세서 접근권을 요구하세요 — 연방법은 대출기관이 모든 명시 차주에게 명세서를 제공하도록 의무화하지만 실제로는 요청해야 합니다. 본인 명의 계정 알림을 설정해 신용 기록 전에 연체를 발견하세요. (2) 주차주와 서면 합의를 만들어 본인 계좌에 3개월치 상환금 상당액을 "예비금"으로 적립하게 하세요. (3) 차환/해제 일정을 강하게 밀어붙이세요 — 차주의 신용이 충족되면 24~36개월 내 단독 명의로 차환하는 것을 문서로 명시. 어느 것도 법적 의무를 바꾸지는 않으며 — 하방 위험만 관리합니다. 본 콘텐츠는 교육 정보일 뿐 — 서명 전 면허 있는 변호사와 상담하세요.`
			},
			code: {
				example: `// Hidden DTI cost: a co-signed loan reduces your future mortgage capacity
function maxMortgage(monthlyIncome, otherDebts, dtiCap, rate, years) {
  const allowance = monthlyIncome * dtiCap - otherDebts;
  const r = rate / 12, n = years * 12;
  // Solve P from M = P r (1+r)^n / ((1+r)^n - 1)
  return allowance * (Math.pow(1+r, n) - 1) / (r * Math.pow(1+r, n));
}

const income = 8000;        // $8k/month
const baseDebts = 500;      // car payment, etc.
const dti = 0.43;           // Fannie Mae cap

const noCosign = maxMortgage(income, baseDebts,            dti, 0.07, 30);
const yesCosign= maxMortgage(income, baseDebts + 300,      dti, 0.07, 30);
// Difference is roughly $45,000 - $50,000 of mortgage borrowing power
// for a single co-signed $300/month student loan.`
			}
		}
	];

	const toolContent = {
		about: {
			en: 'A loan calculator that estimates your monthly payment using the standard amortization formula M = P · r · (1+r)^n / ((1+r)^n − 1). It shows total interest, total cost, the principal/interest split, and an amortization schedule for the first 24 months. Useful for mortgages, auto loans, and personal loans. For educational purposes only — not financial or legal advice.',
			ko: '대출 계산기는 표준 원리금균등상환 공식 M = P·r·(1+r)^n / ((1+r)^n − 1)을 사용해 매월 상환액을 계산합니다. 총 이자, 총 상환액, 원금/이자 비율, 그리고 처음 24개월의 상환 스케줄을 보여 줍니다. 주택담보대출, 자동차 대출, 신용대출 등에 활용할 수 있습니다. 본 도구는 교육 목적의 정보 제공이며 금융·법률 자문이 아닙니다.',
			ja: 'ローン計算機は標準的な元利均等返済式 M = P·r·(1+r)^n / ((1+r)^n − 1) を用いて月々の返済額を算出します。総利息、総支払額、元金と利息の割合、最初の24か月分の返済スケジュールを表示します。住宅ローン、自動車ローン、個人ローンなどに活用できます。本ツールは教育目的の情報提供で、金融・法律助言ではありません。',
			zh: '贷款计算器使用标准等额本息公式 M = P·r·(1+r)^n / ((1+r)^n − 1) 计算月供，并显示总利息、总成本、本金 / 利息占比以及前 24 期还款明细。适用于房贷、车贷、个人贷款等估算。本工具仅供教育参考，不构成金融或法律建议。'
		},
		howTo: {
			en: [
				'Enter the loan amount (principal).',
				'Set the annual interest rate (APR) as a percentage.',
				'Choose the loan term in years.',
				'Read the monthly payment, total payment, and total interest.',
				'Expand the schedule to see how each payment splits into principal and interest.'
			],
			ko: [
				'대출 원금을 입력합니다.',
				'연이자율(%)을 입력합니다.',
				'상환 기간(년)을 선택합니다.',
				'월 상환액, 총 상환액, 총 이자를 확인합니다.',
				'상환 스케줄을 펼쳐 매월 원금과 이자의 분배 내역을 확인합니다.'
			],
			ja: [
				'借入元金を入力します。',
				'年利（%）を入力します。',
				'返済期間（年）を選びます。',
				'月々の返済額、総返済額、総利息を確認します。',
				'返済スケジュールを開いて、毎月の元金と利息の内訳を確認します。'
			],
			zh: [
				'输入贷款本金。',
				'输入年利率（%）。',
				'选择贷款期限（年）。',
				'查看月供、总还款额和总利息。',
				'展开还款明细查看每期本金与利息的拆分。'
			]
		},
		useCases: {
			en: [
				'Comparing mortgage offers from different lenders.',
				'Estimating affordability before house or car shopping.',
				'Planning early repayment scenarios by reducing the term.',
				'Visualizing how interest dominates early-year payments.',
				'Sharing a baseline payment estimate with a co-borrower.'
			],
			ko: [
				'은행별 주택담보대출 조건 비교.',
				'주택·자동차 구매 전 부담 가능 금액 추산.',
				'기간을 줄여 조기 상환 시나리오 시뮬레이션.',
				'초반에 이자 비중이 큰 구조를 시각적으로 이해.',
				'공동 차주와 기준 상환액 공유.'
			],
			ja: [
				'銀行ごとの住宅ローン条件の比較。',
				'住宅・自動車購入前の予算試算。',
				'返済期間を短縮した繰上げ返済シナリオ検討。',
				'初期に利息比率が高い構造を可視化。',
				'共同借入人との返済額共有。'
			],
			zh: [
				'比较不同银行的房贷方案。',
				'购房或购车前评估月供承受能力。',
				'通过缩短期限模拟提前还款。',
				'直观了解前期利息占比偏高的结构。',
				'与共同借款人分享月供基准。'
			]
		},
		faq: {
			en: [
				{ q: 'Does this include taxes, insurance, or fees?', a: 'No. The calculation covers only principal and interest. Mortgage payments often include property tax and insurance escrow on top.' },
				{ q: 'Why is so much of my early payment going to interest?', a: 'In an amortizing loan, interest is charged on the remaining balance. Early balances are large, so interest is large; the principal share grows over time.' },
				{ q: 'Can I model variable rates?', a: 'No. This tool assumes a fixed APR. For ARMs, recalculate after each rate adjustment using the updated rate and remaining balance.' },
				{ q: 'Is this financial or legal advice?', a: 'No. Always consult a licensed financial advisor or legal professional before signing a loan contract.' }
			],
			ko: [
				{ q: '세금이나 보험, 수수료까지 포함되나요?', a: '아닙니다. 원금과 이자만 계산합니다. 실제 주택담보대출에는 재산세와 보험 등 부수 비용이 추가될 수 있습니다.' },
				{ q: '초반에 이자가 너무 많이 빠지는 이유는?', a: '원리금균등상환은 잔액에 이자가 붙는 구조라, 초반엔 잔액이 커 이자가 크고 시간이 갈수록 원금 비중이 커집니다.' },
				{ q: '변동금리도 계산할 수 있나요?', a: '이 도구는 고정금리를 가정합니다. 변동금리는 금리 변경 시점마다 잔액과 새 금리로 다시 계산해야 합니다.' },
				{ q: '이 결과가 금융·법률 자문인가요?', a: '아닙니다. 실제 대출 계약 전에 반드시 공인 재무상담사나 법률 전문가와 상담하세요.' }
			]
		},
		related: [
			{ href: '/compound-interest', label: { en: 'Compound Interest', ko: '복리 계산기', ja: '複利計算機', zh: '复利计算器' } },
			{ href: '/percentage', label: { en: 'Percentage', ko: '퍼센트 계산기', ja: 'パーセント計算', zh: '百分比' } },
			{ href: '/salary-calculator', label: { en: 'Salary Calculator', ko: '급여 계산기', ja: '給与計算機', zh: '薪资计算器' } }
		],
		externalRefs: [
			{ href: 'https://www.investopedia.com/terms/a/amortization.asp', label: 'Investopedia: Amortization' },
			{ href: 'https://www.consumerfinance.gov/owning-a-home/loan-options/', label: 'CFPB: Loan Options' }
		]
	};

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let principal = 100000;
	let annualRate = 5;
	let termYears = 30;
	let showSchedule = false;

	$: termMonths = termYears * 12;
	$: monthlyRate = annualRate / 100 / 12;
	$: monthlyPayment = calculateMonthlyPayment(principal, monthlyRate, termMonths);
	$: totalPayment = monthlyPayment * termMonths;
	$: totalInterest = totalPayment - principal;
	$: schedule = generateSchedule(principal, monthlyRate, termMonths, monthlyPayment);

	function calculateMonthlyPayment(p: number, r: number, n: number): number {
		if (r === 0) return p / n;
		return (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
	}

	function generateSchedule(p: number, r: number, n: number, payment: number) {
		const schedule = [];
		let balance = p;

		for (let i = 1; i <= Math.min(n, 360); i++) {
			const interestPart = balance * r;
			const principalPart = payment - interestPart;
			balance = Math.max(0, balance - principalPart);

			schedule.push({
				month: i,
				payment: payment,
				principal: principalPart,
				interest: interestPart,
				balance: balance
			});
		}

		return schedule;
	}

	function formatCurrency(amount: number): string {
		return amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
	}
</script>

<svelte:head>
	<title>{t('loan.title')} - SD.gy</title>
	<meta name="description" content={t('loan.desc')} />
	<link rel="canonical" href="https://sd.gy/{lang}/loan-calculator" />
	<meta property="og:title" content="{t('loan.title')} - SD.gy" />
	<meta property="og:description" content={t('loan.desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/loan-calculator" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('loan.title')} - SD.gy" />
	<meta name="twitter:description" content={t('loan.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('loan.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('loan.desc')}</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<!-- Input Section -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<div class="space-y-5">
				<!-- Principal -->
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('loan.principal')} ($)</label>
					<input
						type="number"
						bind:value={principal}
						min="1000"
						step="1000"
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
					<input
						type="range"
						bind:value={principal}
						min="10000"
						max="1000000"
						step="5000"
						class="w-full mt-2 accent-violet-500"
					/>
				</div>

				<!-- Interest Rate -->
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('loan.interestRate')} (%)</label>
					<input
						type="number"
						bind:value={annualRate}
						min="0"
						max="30"
						step="0.1"
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
					<input
						type="range"
						bind:value={annualRate}
						min="0"
						max="20"
						step="0.25"
						class="w-full mt-2 accent-violet-500"
					/>
				</div>

				<!-- Term -->
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('loan.term')} ({t('loan.termYears')})</label>
					<input
						type="number"
						bind:value={termYears}
						min="1"
						max="40"
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
					<input
						type="range"
						bind:value={termYears}
						min="1"
						max="40"
						class="w-full mt-2 accent-violet-500"
					/>
					<div class="text-sm text-gray-500 dark:text-dark-400 mt-1">{termMonths} {t('loan.termMonths')}</div>
				</div>
			</div>
		</div>

		<!-- Results Section -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<div class="space-y-4">
				<div class="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-5">
					<div class="text-sm text-gray-600 dark:text-dark-400">{t('loan.monthlyPayment')}</div>
					<div class="text-4xl font-bold text-violet-600 dark:text-violet-400">${formatCurrency(monthlyPayment)}</div>
				</div>

				<div class="grid grid-cols-2 gap-4">
					<div class="bg-gray-50 dark:bg-dark-700 rounded-xl p-4">
						<div class="text-sm text-gray-600 dark:text-dark-400">{t('loan.totalPayment')}</div>
						<div class="text-xl font-bold text-gray-900 dark:text-dark-100">${formatCurrency(totalPayment)}</div>
					</div>
					<div class="bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
						<div class="text-sm text-gray-600 dark:text-dark-400">{t('loan.totalInterest')}</div>
						<div class="text-xl font-bold text-red-600 dark:text-red-400">${formatCurrency(totalInterest)}</div>
					</div>
				</div>

				<!-- Payment Breakdown Chart -->
				<div class="bg-gray-50 dark:bg-dark-700 rounded-xl p-4">
					<div class="flex h-4 rounded-full overflow-hidden">
						<div
							class="bg-violet-500"
							style="width: {(principal / totalPayment) * 100}%"
						></div>
						<div
							class="bg-red-400"
							style="width: {(totalInterest / totalPayment) * 100}%"
						></div>
					</div>
					<div class="flex justify-between text-xs mt-2">
						<span class="text-violet-600 dark:text-violet-400">{t('loan.principalPart')}: {((principal / totalPayment) * 100).toFixed(1)}%</span>
						<span class="text-red-600 dark:text-red-400">{t('loan.interestPart')}: {((totalInterest / totalPayment) * 100).toFixed(1)}%</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Amortization Schedule -->
	<div class="mt-6 bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
		<button
			on:click={() => showSchedule = !showSchedule}
			class="w-full flex items-center justify-between text-lg font-semibold text-gray-900 dark:text-dark-100"
		>
			<span>{t('loan.schedule')}</span>
			<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 transition-transform {showSchedule ? 'rotate-180' : ''}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
			</svg>
		</button>

		{#if showSchedule}
			<div class="mt-4 overflow-x-auto">
				<table class="w-full text-sm">
					<thead>
						<tr class="border-b border-gray-200 dark:border-dark-600">
							<th class="py-2 px-3 text-left text-gray-600 dark:text-dark-400">{t('loan.month')}</th>
							<th class="py-2 px-3 text-right text-gray-600 dark:text-dark-400">{t('loan.payment')}</th>
							<th class="py-2 px-3 text-right text-gray-600 dark:text-dark-400">{t('loan.principalPart')}</th>
							<th class="py-2 px-3 text-right text-gray-600 dark:text-dark-400">{t('loan.interestPart')}</th>
							<th class="py-2 px-3 text-right text-gray-600 dark:text-dark-400">{t('loan.balance')}</th>
						</tr>
					</thead>
					<tbody>
						{#each schedule.slice(0, 24) as row}
							<tr class="border-b border-gray-100 dark:border-dark-700">
								<td class="py-2 px-3 text-gray-900 dark:text-dark-100">{row.month}</td>
								<td class="py-2 px-3 text-right text-gray-900 dark:text-dark-100">${formatCurrency(row.payment)}</td>
								<td class="py-2 px-3 text-right text-violet-600 dark:text-violet-400">${formatCurrency(row.principal)}</td>
								<td class="py-2 px-3 text-right text-red-600 dark:text-red-400">${formatCurrency(row.interest)}</td>
								<td class="py-2 px-3 text-right text-gray-900 dark:text-dark-100">${formatCurrency(row.balance)}</td>
							</tr>
						{/each}
					</tbody>
				</table>
				{#if schedule.length > 24}
					<div class="text-center text-sm text-gray-500 dark:text-dark-400 mt-4">
						... {schedule.length - 24} more months
					</div>
				{/if}
			</div>
		{/if}
	</div>

	<ToolContent
		{lang}
		toolName="Loan Calculator"
		toolUrl="https://sd.gy/{lang}/loan-calculator"
		lastUpdated="2026-04-30"
		category="Daily Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sd.gy/${lang}` },
			{ name: 'Tools', url: `https://sd.gy/${lang}` },
			{ name: 'Loan Calculator', url: `https://sd.gy/${lang}/loan-calculator` }
		]}
		content={toolContent}
	/>

	<ToolGuide {lang} sections={guideSections} />
</div>
