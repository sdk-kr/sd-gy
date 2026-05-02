<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'Why a 50% Loss Needs a 100% Gain to Break Even',
				ko: '50% 손실을 회복하려면 100% 수익이 필요한 이유'
			},
			body: {
				en: `The most counterintuitive piece of percentage math is asymmetric recovery: losses and gains do not cancel out the way most people expect. If a $100 stock drops 50% to $50, it must rise 100% — not 50% — to return to $100. This is because the gain percentage is calculated against the new, smaller base, not the original. The general formula for required recovery after a loss of L% is: gain_required = L / (100 − L) × 100. Plug in 50% loss: 50 / (100 − 50) × 100 = 100%. Plug in 30% loss: 30 / 70 × 100 = 42.9%. Plug in 80% loss: 80 / 20 × 100 = 400%. The relationship is wildly nonlinear at the extremes.

Real-world stakes are huge. The S&P 500 dropped about 56% peak-to-trough in the 2007–2009 financial crisis (October 2007 to March 2009 by closing levels). To return to the previous peak required a roughly 127% gain, which actually took until March 2013 — about four years of recovery. The Nasdaq fell about 78% in the dot-com bust from March 2000 to October 2002, requiring a ~355% gain to recover; that recovery took 15 years, finally completing in April 2015. Bitcoin's 2018 crash was about 84% peak-to-trough, demanding a 525% gain to return — which it did, but took roughly three years.

The asymmetry means risk management matters more than people instinctively assume. A portfolio with 20% annual standard deviation (typical for an all-equity portfolio) experiences losses of 20%+ in roughly 16% of years (assuming roughly normal distribution — real markets have fatter left tails). Each such drawdown requires a 25%+ subsequent gain just to recover. This is the mathematical reason why "smooth" returns compound faster than "lumpy" returns of the same arithmetic average. It is also why position sizing for traders typically caps single-position loss at 1–2% of portfolio: a 50% portfolio drawdown from a single bad trade requires doubling the surviving capital just to break even, while a 2% drawdown requires only ~2.04% recovery.

Practical mitigations: (1) Diversification reduces portfolio standard deviation without proportionally reducing return — Markowitz mean-variance optimization (Nobel Prize 1990) formalizes this. (2) Rebalancing forces buying after losses and selling after gains, mechanically harvesting the asymmetry. (3) Time horizon matters because longer windows allow recovery — Vanguard research shows the worst 30-year rolling period for a 60/40 portfolio since 1928 still produced positive real returns. The asymmetric-recovery math is the reason "buy and hold" works better the longer you hold. Educational only — not financial advice.`,
				ko: `퍼센트 수학에서 가장 직관에 반하는 것이 비대칭 회복입니다 — 손실과 이익은 사람들의 직관처럼 상쇄되지 않습니다. $100 주식이 50% 하락해 $50가 되면, $100으로 돌아오려면 50%가 아니라 100% 상승해야 합니다. 상승률은 줄어든 새 기준이 아니라 원래 가격이 아닌 작아진 base에 대해 계산되기 때문입니다. 손실률 L% 후 필요한 회복률 일반 공식은 — 필요_회복 = L / (100 − L) × 100. 50% 손실 대입: 50 / (100 − 50) × 100 = 100%. 30% 손실: 30 / 70 × 100 = 42.9%. 80% 손실: 80 / 20 × 100 = 400%. 극단으로 갈수록 비선형이 폭발합니다.

현실의 판돈은 거대합니다. S&P 500은 2007~2009년 금융위기에 고점 대비 약 56% 하락(2007년 10월 → 2009년 3월 종가 기준). 전 고점 회복에 약 127% 상승이 필요했고, 실제 회복은 2013년 3월에 — 약 4년 — 이루어졌습니다. 나스닥은 2000년 3월 → 2002년 10월 닷컴 버블에 약 78% 하락, 회복에 약 355% 상승이 필요했고 — 15년이 걸려 2015년 4월에야 완성됐습니다. 비트코인의 2018년 폭락은 고점 대비 약 84%, 525% 상승이 필요했으며 — 약 3년 만에 회복했습니다.

이 비대칭은 사람들이 본능적으로 가정하는 것보다 위험 관리가 훨씬 중요하다는 것을 의미합니다. 연 표준편차 20% 포트폴리오(전 주식 포트폴리오 전형)는 약 16%의 연도에 20%+ 손실을 경험합니다(정규분포 가정 — 실제 시장은 좌측 꼬리가 더 두껍습니다). 각 그러한 낙폭은 회복만을 위해 25%+ 후속 상승을 요구합니다. 이것이 같은 산술평균이라도 "매끄러운" 수익률이 "들쭉날쭉한" 수익률보다 빠르게 복리되는 수학적 이유입니다. 또한 트레이더들이 단일 포지션 손실을 포트폴리오의 1~2%로 제한하는 이유입니다 — 단일 거래로 50% 포트폴리오 손실은 살아남은 자본을 두 배로 만들어야 하지만, 2% 손실은 ~2.04% 회복만 필요합니다.

실무적 완화법 — (1) 분산은 수익을 비례적으로 줄이지 않으면서 포트폴리오 표준편차를 줄입니다 — Markowitz 평균-분산 최적화(1990 노벨상)가 이를 공식화. (2) 리밸런싱은 손실 후 매수, 이익 후 매도를 강제해 기계적으로 비대칭을 수확. (3) 시간 지평이 중요한 이유는 더 긴 창이 회복을 허용하기 때문 — Vanguard 연구에 따르면 1928년 이후 60/40 포트폴리오의 최악 30년 롤링 기간조차 양의 실질 수익률을 기록. 비대칭 회복 수학은 "buy and hold"가 보유 기간이 길수록 더 잘 작동하는 이유입니다. 교육용일 뿐 — 재무 자문이 아닙니다.`
			},
			code: {
				example: `// Recovery required after a percentage loss
function recoveryNeeded(lossPct) {
  return lossPct / (100 - lossPct) * 100;
}

recoveryNeeded(10);  // 11.11% (modest loss, modest recovery)
recoveryNeeded(30);  // 42.86%
recoveryNeeded(50);  // 100.00% (need to double the remaining)
recoveryNeeded(80);  // 400.00% (5x the remaining)
recoveryNeeded(90);  // 900.00% (10x the remaining)

// Real market drawdowns
recoveryNeeded(56);  // 127.27% — S&P 500 2007-09
recoveryNeeded(78);  // 354.55% — Nasdaq 2000-02
recoveryNeeded(84);  // 525.00% — Bitcoin 2018`
			}
		},
		{
			heading: {
				en: 'Percentage Points vs Percent: The Misuse That Skews News Headlines',
				ko: '퍼센트 포인트 vs 퍼센트 — 뉴스 헤드라인을 왜곡하는 흔한 오용'
			},
			body: {
				en: `When a news headline reports "unemployment rose 1%", the meaning is genuinely ambiguous — and journalists often pick the framing that makes the story sound more dramatic. If unemployment was 4% and it is now 5%, that is a 1 percentage point (pp) increase but a 25% relative increase (1 / 4 = 0.25). Both numbers are mathematically correct; they describe different things. The U.S. Federal Reserve, the Bureau of Labor Statistics, and serious financial press use the term "percentage points" or "basis points" precisely because of this gap.

A basis point (bp) is one-hundredth of a percentage point: 1 bp = 0.01 pp = 0.0001 in decimal. The Federal Reserve announces interest-rate decisions in basis points — a "25 basis point hike" raises the federal funds rate target by 0.25 percentage points. When the Fed raised rates from 4.50% to 4.75% in February 2023, that was 25 bp or 0.25 pp absolute — but it was a 5.6% relative increase (0.25 / 4.50). News reports calling it a "5.6% rate hike" would be technically computing relative change but would mislead readers used to thinking in absolute rate moves.

The confusion costs money in financial products. A credit card offering "0% intro APR for 12 months, then variable APR currently 24.99%" is 24.99 pp higher in absolute terms. A homeowner who saw their mortgage rate offer change from 6.50% to 6.75% experienced a 0.25 pp / 25 bp increase, but a 3.85% relative increase in their interest cost. Both framings are used by mortgage brokers depending on whether they are trying to soothe or alarm the borrower. Reading both numbers — absolute change and relative change — protects you from rhetorical framing.

Polling and surveys hit the same trap. "Candidate A's lead grew from 47% to 51%" is a 4 pp absolute lead change, but Candidate A's vote share grew (51 − 47) / 47 = 8.5% relatively. Margin-of-error language complicates this further: a poll with ±3 pp margin of error means the true value could be anywhere in a 6 pp window, not a 6% relative window. Pew Research Center, Gallup, and other major pollsters explicitly use "percentage points" in methodology sections to avoid the ambiguity. When you see vague "percent" language in a headline, look for the underlying numbers and recompute. Educational content only — for statistical or economic analysis, consult a qualified analyst.`,
				ko: `뉴스 헤드라인이 "실업률이 1% 올랐다"라고 보고할 때 의미는 진정으로 모호합니다 — 그리고 기자들은 종종 이야기를 더 극적으로 들리게 만드는 프레임을 선택합니다. 실업률이 4%에서 5%가 됐다면 — 절대값으로 1 퍼센트 포인트(pp) 증가지만 상대값으로 25% 증가입니다(1 / 4 = 0.25). 두 숫자 모두 수학적으로 정확 — 다른 것을 묘사할 뿐. 미국 연준, 노동통계국(BLS), 진지한 금융 언론은 정확히 이 격차 때문에 "퍼센트 포인트" 또는 "베이시스 포인트" 용어를 사용합니다.

베이시스 포인트(bp)는 퍼센트 포인트의 1/100 — 1 bp = 0.01 pp = 소수점 0.0001. 연준은 금리 결정을 베이시스 포인트로 발표합니다 — "25 베이시스 포인트 인상"은 연방기금금리 목표를 0.25 퍼센트 포인트 올립니다. 2023년 2월 연준이 금리를 4.50%에서 4.75%로 올렸을 때 — 절대값 25 bp / 0.25 pp 인상이지만 상대값 5.6% 인상입니다(0.25 / 4.50). 그것을 "5.6% 금리 인상"이라 부르는 보도는 기술적으로 상대 변화를 계산한 것이지만 — 절대 금리 이동에 익숙한 독자를 오도합니다.

금융 상품에서 이 혼동은 돈으로 이어집니다. "12개월 도입 0% APR, 이후 현재 변동 APR 24.99%"인 신용카드는 절대값 24.99 pp 더 높습니다. 모기지 금리 제안이 6.50%에서 6.75%로 바뀐 차주는 — 절대값 0.25 pp / 25 bp 인상이지만 이자 비용의 3.85% 상대 증가를 경험. 둘 다 모기지 브로커가 — 차주를 안심시키려는지 놀라게 하려는지에 따라 — 사용합니다. 두 숫자(절대 변화와 상대 변화)를 모두 읽는 것이 수사적 프레임에서 보호해 줍니다.

여론조사와 설문도 같은 함정에 걸립니다. "후보 A의 지지율이 47%에서 51%로 상승"은 절대값 4 pp 변화지만 — A의 득표율은 (51 − 47) / 47 = 8.5% 상대 증가. 오차 범위 표현이 이를 더 복잡하게 만듭니다 — ±3 pp 오차 범위 여론조사는 진실값이 6 pp 창 안 어디든 있을 수 있다는 뜻이지 6% 상대 창이 아닙니다. Pew Research Center, Gallup, 그리고 다른 주요 여론조사 기관은 모호성을 피하기 위해 방법론 섹션에서 명시적으로 "퍼센트 포인트"를 사용합니다. 헤드라인에서 모호한 "percent" 언어를 보면 — 기저 숫자를 찾아 재계산하세요. 교육용 콘텐츠일 뿐 — 통계 또는 경제 분석은 자격 있는 분석가와 상담하세요.`
			},
			code: {
				example: `// Same change, two ways to express it
function ppChange(oldPct, newPct) { return newPct - oldPct; }
function relChange(oldPct, newPct) { return (newPct - oldPct) / oldPct * 100; }

// Unemployment 4% -> 5%
ppChange(4, 5);   // 1.0 pp absolute
relChange(4, 5);  // 25% relative — same data, different framing

// Fed funds rate 4.50% -> 4.75% (Feb 2023)
ppChange(4.50, 4.75);   // 0.25 pp = 25 basis points
relChange(4.50, 4.75);  // 5.56% relative increase

// Mortgage rate 6.50% -> 6.75%
ppChange(6.50, 6.75);   // 0.25 pp / 25 bp
relChange(6.50, 6.75);  // 3.85% — what your interest bill actually changes by

// Basis point converter
const bp = 25;  // 25 basis points
const pp = bp / 100;       // 0.25 percentage points
const decimal = bp / 10000; // 0.0025`
			}
		},
		{
			heading: {
				en: 'Compounding Percentages: Why 10% + 10% Does Not Equal 20%',
				ko: '복리 퍼센트 — 왜 10% + 10%는 20%가 아닌가'
			},
			body: {
				en: `Stack two percentage changes and naive arithmetic fails: a 10% increase followed by a 10% decrease does not return to the start, and a 10% increase followed by another 10% increase is not 20%. The correct math is multiplicative: chained percentage changes compose by multiplying their (1 + r) factors, not by adding them. So 10% up then 10% down = 1.10 × 0.90 = 0.99, a net 1% loss. And 10% up twice = 1.10 × 1.10 = 1.21, a net 21% gain — that extra 1 point is the compounding effect that distinguishes simple from compound math.

The asymmetry compounds dramatically over time. A 50% gain followed by a 50% loss = 1.50 × 0.50 = 0.75, a net 25% loss. The same loss-then-gain (1.50 × 0.50 vs 0.50 × 1.50) gives the same answer because multiplication is commutative — but that does not save you. The arithmetic average of +50% and −50% is 0%, but the actual outcome is −25%. This gap between arithmetic mean and geometric mean is called "volatility drag" or "variance drag", and it is roughly equal to σ²/2 for small returns, where σ is the standard deviation. A fund averaging 8% with 20% standard deviation experiences roughly 6% compounded annual growth — the missing 2% is the variance drag.

Stacked discounts are a real-world version that consumers regularly miscount. "30% off, then take an extra 20% off at checkout" sounds like 50% off but is actually 1 − (0.70 × 0.80) = 1 − 0.56 = 44% off. Retailers know this and exploit the headline. Conversely, stacked taxes work the same way: a 7% sales tax plus a 5% local surtax computed on the post-state-tax amount yields 1.07 × 1.05 − 1 = 12.35%, not 12%. The Wall Street Journal and other financial press routinely flag these compounding errors when politicians or marketers use them carelessly.

Inflation does the same. CPI rose 2.0% in 2020, 4.7% in 2021, 8.0% in 2022, 4.1% in 2023, and roughly 2.9% in 2024 (BLS data). Naive sum: 21.7%. Compound reality: 1.020 × 1.047 × 1.080 × 1.041 × 1.029 − 1 = 23.6%. That 1.9 pp gap means a $1,000 price tag in 2019 actually needs $1,236 in 2024 to match — a number worth knowing if you are negotiating a multi-year contract or sizing retirement spending. The longer the chain, the wider the gap. For 30-year planning, the compounding adjustment is large enough to dwarf many "rule of thumb" simplifications. Educational only — consult a CPA or financial advisor for specific tax and inflation calculations.`,
				ko: `두 퍼센트 변화를 쌓으면 단순 산술이 무너집니다 — 10% 증가 후 10% 감소는 출발점으로 돌아가지 않고, 10% 증가를 두 번 하면 20%가 아닙니다. 올바른 수학은 곱셈입니다 — 연쇄 퍼센트 변화는 (1 + r) 인수를 더하는 게 아니라 곱하여 합성됩니다. 그래서 10% 상승 후 10% 하락 = 1.10 × 0.90 = 0.99, 순 1% 손실. 그리고 10% 상승 두 번 = 1.10 × 1.10 = 1.21, 순 21% 이익 — 그 추가 1포인트가 단순과 복리 수학을 구분하는 복리 효과.

비대칭은 시간이 지날수록 극적으로 커집니다. 50% 상승 후 50% 하락 = 1.50 × 0.50 = 0.75, 순 25% 손실. 같은 하락-후-상승(1.50 × 0.50 vs 0.50 × 1.50)도 같은 답을 줍니다 — 곱셈은 교환법칙이 성립 — 그러나 그것이 당신을 구하지는 않습니다. +50%와 −50%의 산술평균은 0%이지만 실제 결과는 −25%입니다. 산술평균과 기하평균의 이 격차를 "변동성 드래그" 또는 "분산 드래그"라 부르며, 작은 수익률에 대해 대략 σ²/2 — σ는 표준편차. 평균 8%에 표준편차 20% 펀드는 연 약 6% 복리 성장 — 사라진 2%가 분산 드래그입니다.

소비자가 정기적으로 잘못 세는 현실 버전이 누적 할인입니다. "30% 할인, 결제 시 추가 20% 할인"은 50% 할인처럼 들리지만 — 실제 1 − (0.70 × 0.80) = 1 − 0.56 = 44% 할인. 소매업자들은 이를 알고 헤드라인을 활용합니다. 반대로 누적 세금도 같은 방식으로 작동합니다 — 7% 판매세에 주 세금 후 금액에 계산된 5% 지방 추가세는 1.07 × 1.05 − 1 = 12.35%, 12%가 아닙니다. The Wall Street Journal과 다른 금융 언론은 정치인이나 마케터가 부주의하게 사용할 때 이러한 복리 오류를 정기적으로 지적합니다.

인플레이션도 똑같이 작동합니다. CPI는 2020년 2.0%, 2021년 4.7%, 2022년 8.0%, 2023년 4.1%, 2024년 약 2.9% 상승(BLS 데이터). 단순 합 — 21.7%. 복리 현실 — 1.020 × 1.047 × 1.080 × 1.041 × 1.029 − 1 = 23.6%. 그 1.9 pp 격차는 — 2019년 $1,000 가격표가 2024년에 동일하게 매치되려면 실제 $1,236이 필요하다는 뜻 — 다년 계약 협상이나 은퇴 지출 계산에 알 가치가 있는 숫자. 체인이 길수록 격차가 벌어집니다. 30년 계획에서는 복리 조정이 많은 "엄지손가락 법칙" 단순화를 압도할 만큼 큽니다. 교육용일 뿐 — 구체적 세금과 인플레이션 계산은 CPA 또는 재무 자문가와 상담하세요.`
			},
			code: {
				example: `// Stacking percentage changes — multiply (1 + r), don't add r
function chain(...rates) {
  return rates.reduce((acc, r) => acc * (1 + r), 1) - 1;
}

chain(0.10, 0.10);     // 0.21 — not 0.20
chain(0.10, -0.10);    // -0.01 — not zero
chain(0.50, -0.50);    // -0.25 — variance drag in action
chain(-0.30, -0.20);   // -0.44 — stacked discounts

// US CPI 2020-2024 cumulative
chain(0.020, 0.047, 0.080, 0.041, 0.029);  // 0.236 (23.6%)
// Naive sum would say 21.7% — off by 1.9 pp

// Variance drag approximation
function varianceDrag(stdev) { return stdev * stdev / 2; }
varianceDrag(0.20);  // 0.02 — 2% drag from 20% volatility`
			}
		}
	];

	const toolContent = {
		about: {
			en: 'A four-in-one percentage calculator: find X% of Y, express X as a percentage of Y, calculate the percentage change between two numbers, and compute discount price plus savings. Percent literally means "per hundred", so all formulas come down to (part / whole) × 100. The discount tool is especially handy for sale shopping and tip math.',
			ko: '한 페이지에서 네 가지 퍼센트 계산을 할 수 있습니다. Y의 X%, X는 Y의 몇 %, 두 값 간 증감률, 그리고 할인가 계산까지 한 번에 처리합니다. "Percent"는 라틴어로 "100당"이라는 뜻이며, 모든 공식은 결국 (부분 / 전체) × 100으로 귀결됩니다. 세일이나 팁 계산에 특히 유용합니다.',
			ja: '1ページで4種類のパーセント計算が可能です。YのX%、XはYの何%か、2値の増減率、割引価格までまとめて処理します。Percentはラテン語で「100あたり」の意味で、すべての式は(部分/全体)×100に帰着します。セールやチップ計算に便利です。',
			zh: '一页支持四种百分比计算：求 Y 的 X%、X 是 Y 的百分之几、两个数值的增减率，以及折扣价与节省金额。百分比即"每百分之几"，所有公式都可归结为（部分 / 总数）× 100。折扣计算尤其适合购物和小费场景。'
		},
		howTo: {
			en: [
				'Choose the calculation type that matches your question.',
				'Type the two numbers into the input fields.',
				'Read the result instantly — no submit button needed.',
				'For percentage change, positive values mean increase, negative means decrease.',
				'For discount, enter the original price and the rate to see savings and final price.'
			],
			ko: [
				'질문 유형에 맞는 카드를 선택합니다.',
				'두 숫자를 입력란에 입력합니다.',
				'결과가 즉시 표시되며 별도의 계산 버튼이 필요 없습니다.',
				'증감률에서 양수는 증가, 음수는 감소를 의미합니다.',
				'할인 계산은 정가와 할인율을 입력해 절약 금액과 최종 가격을 확인합니다.'
			],
			ja: [
				'質問内容に合ったカードを選びます。',
				'2つの数値を入力欄に入力します。',
				'計算ボタンなしで結果が即座に表示されます。',
				'増減率は正の値が増加、負の値が減少を表します。',
				'割引計算では定価と割引率を入力して節約額と最終価格を確認します。'
			],
			zh: [
				'选择对应的计算类型。',
				'在输入框填入两个数字。',
				'结果即时显示，无需点击提交。',
				'增减率为正表示上升，为负表示下降。',
				'折扣计算输入原价和折扣率，可查看节省金额与最终价格。'
			]
		},
		useCases: {
			en: [
				'Calculating restaurant tips and bill splits.',
				'Working out sale prices and seasonal discounts.',
				'Comparing year-over-year revenue or growth.',
				'Tracking weight loss or fitness improvements as a percent.',
				'Checking VAT or sales-tax inclusive prices.'
			],
			ko: [
				'식당에서 팁과 더치페이 금액 계산.',
				'쇼핑 시 세일 가격과 할인율 확인.',
				'전년 대비 매출이나 성장률 비교.',
				'다이어트나 운동 성과를 퍼센트로 추적.',
				'부가세 포함·미포함 가격 빠르게 환산.'
			],
			ja: [
				'レストランでのチップや割り勘の計算。',
				'セール価格や季節の割引率の確認。',
				'前年比の売上や成長率の比較。',
				'ダイエットやトレーニングの進捗をパーセントで管理。',
				'消費税込み・抜き価格の素早い換算。'
			],
			zh: [
				'计算餐厅小费和 AA 制金额。',
				'查看促销价和折扣力度。',
				'比较同比营收或增长率。',
				'以百分比追踪减肥或健身进展。',
				'快速换算含税或不含税价格。'
			]
		},
		faq: {
			en: [
				{ q: 'How is percentage change calculated?', a: 'The formula is ((new − old) / old) × 100. The result is positive for an increase, negative for a decrease.' },
				{ q: 'Why is the result NaN or Infinity?', a: 'You probably divided by zero (e.g., the "whole" or "from" value is 0). Enter a non-zero denominator.' },
				{ q: 'Can I do tax-inclusive math?', a: 'Yes. Use "X% of Y" with the tax rate to get the tax amount, then add to the original price.' },
				{ q: 'Does negative discount mean a markup?', a: 'Yes. A negative discount rate increases the final price beyond the original.' }
			],
			ko: [
				{ q: '증감률은 어떻게 계산되나요?', a: '공식은 ((새 값 − 이전 값) / 이전 값) × 100입니다. 양수면 증가, 음수면 감소를 의미합니다.' },
				{ q: '결과가 NaN이나 Infinity로 나옵니다.', a: '"전체"나 "From" 값에 0을 입력했을 가능성이 큽니다. 분모는 0이 아닌 값이어야 합니다.' },
				{ q: '부가세 포함 가격도 계산할 수 있나요?', a: '네, "Y의 X%"로 세액을 구한 뒤 원래 가격에 더하면 됩니다.' },
				{ q: '음수 할인율은 무엇을 의미하나요?', a: '인상을 의미합니다. 할인율이 음수면 최종 가격이 정가보다 비싸집니다.' }
			]
		},
		related: [
			{ href: '/calculator', label: { en: 'Calculator', ko: '계산기', ja: '計算機', zh: '计算器' } },
			{ href: '/loan-calculator', label: { en: 'Loan Calculator', ko: '대출 계산기', ja: 'ローン計算機', zh: '贷款计算器' } },
			{ href: '/compound-interest', label: { en: 'Compound Interest', ko: '복리 계산기', ja: '複利計算機', zh: '复利计算器' } }
		],
		externalRefs: [
			{ href: 'https://en.wikipedia.org/wiki/Percentage', label: 'Percentage - Wikipedia' },
			{ href: 'https://www.mathsisfun.com/percentage.html', label: 'Math is Fun: Percentages' }
		]
	};

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	// What is X% of Y
	let percent1 = 0;
	let value1 = 0;
	$: result1 = (percent1 / 100) * value1;

	// X is what % of Y
	let partValue = 0;
	let wholeValue = 0;
	$: result2 = wholeValue !== 0 ? (partValue / wholeValue) * 100 : 0;

	// Percentage change from X to Y
	let fromValue = 0;
	let toValue = 0;
	$: percentChange = fromValue !== 0 ? ((toValue - fromValue) / fromValue) * 100 : 0;
	$: isIncrease = percentChange >= 0;

	// Discount calculator
	let originalPrice = 0;
	let discountRate = 0;
	$: discountAmount = (originalPrice * discountRate) / 100;
	$: finalPrice = originalPrice - discountAmount;

	function formatNumber(num: number): string {
		return Number.isInteger(num) ? num.toString() : num.toFixed(2);
	}
</script>

<svelte:head>
	<title>{t('percentage.title')} - SD.gy</title>
	<meta name="description" content={t('percentage.desc')} />
	<link rel="canonical" href="https://sd.gy/{lang}/percentage" />
	<meta property="og:title" content="{t('percentage.title')} - SD.gy" />
	<meta property="og:description" content={t('percentage.desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/percentage" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('percentage.title')} - SD.gy" />
	<meta name="twitter:description" content={t('percentage.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('percentage.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('percentage.desc')}</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<!-- What is X% of Y -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">
				{t('percentage.whatIs')} X% {t('percentage.of')} Y
			</h2>
			<div class="space-y-4">
				<div class="flex items-center gap-2">
					<input
						type="number"
						bind:value={percent1}
						class="w-24 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
					<span class="text-gray-600 dark:text-dark-400">%</span>
					<span class="text-gray-600 dark:text-dark-400">{t('percentage.of')}</span>
					<input
						type="number"
						bind:value={value1}
						class="flex-1 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>
				<div class="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4">
					<span class="text-sm text-gray-600 dark:text-dark-400">{t('percentage.result')}</span>
					<div class="text-2xl font-bold text-violet-600 dark:text-violet-400">{formatNumber(result1)}</div>
				</div>
			</div>
		</div>

		<!-- X is what % of Y -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">
				X {t('percentage.isWhatPercent')} Y
			</h2>
			<div class="space-y-4">
				<div class="flex items-center gap-2">
					<input
						type="number"
						bind:value={partValue}
						class="flex-1 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
					<span class="text-gray-600 dark:text-dark-400">{t('percentage.isWhatPercent')}</span>
					<input
						type="number"
						bind:value={wholeValue}
						class="flex-1 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>
				<div class="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4">
					<span class="text-sm text-gray-600 dark:text-dark-400">{t('percentage.result')}</span>
					<div class="text-2xl font-bold text-violet-600 dark:text-violet-400">{formatNumber(result2)}%</div>
				</div>
			</div>
		</div>

		<!-- Percentage Change -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">
				{t('percentage.change')} X {t('percentage.to')} Y
			</h2>
			<div class="space-y-4">
				<div class="flex items-center gap-2">
					<input
						type="number"
						bind:value={fromValue}
						class="flex-1 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
						placeholder="From"
					/>
					<span class="text-gray-600 dark:text-dark-400">{t('percentage.to')}</span>
					<input
						type="number"
						bind:value={toValue}
						class="flex-1 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
						placeholder="To"
					/>
				</div>
				<div class="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4">
					<span class="text-sm text-gray-600 dark:text-dark-400">{t('percentage.result')}</span>
					<div class="text-2xl font-bold {isIncrease ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}">
						{isIncrease ? '+' : ''}{formatNumber(percentChange)}%
						<span class="text-sm font-normal">({isIncrease ? t('percentage.increase') : t('percentage.decrease')})</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Discount Calculator -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">{t('percentage.discount')}</h2>
			<div class="space-y-4">
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-1">{t('percentage.originalPrice')}</label>
					<input
						type="number"
						bind:value={originalPrice}
						class="w-full px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-1">{t('percentage.discountRate')} (%)</label>
					<input
						type="number"
						bind:value={discountRate}
						class="w-full px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>
				<div class="grid grid-cols-2 gap-3">
					<div class="bg-red-50 dark:bg-red-900/20 rounded-lg p-3">
						<span class="text-sm text-gray-600 dark:text-dark-400">{t('percentage.savings')}</span>
						<div class="text-xl font-bold text-red-600 dark:text-red-400">-{formatNumber(discountAmount)}</div>
					</div>
					<div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
						<span class="text-sm text-gray-600 dark:text-dark-400">{t('percentage.finalPrice')}</span>
						<div class="text-xl font-bold text-green-600 dark:text-green-400">{formatNumber(finalPrice)}</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<ToolContent
		{lang}
		toolName="Percentage Calculator"
		toolUrl="https://sd.gy/{lang}/percentage"
		lastUpdated="2026-04-30"
		category="Daily Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sd.gy/${lang}` },
			{ name: 'Tools', url: `https://sd.gy/${lang}` },
			{ name: 'Percentage Calculator', url: `https://sd.gy/${lang}/percentage` }
		]}
		content={toolContent}
	/>

	<ToolGuide {lang} sections={guideSections} />
</div>
