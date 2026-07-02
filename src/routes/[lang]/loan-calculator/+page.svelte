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
				ko: '자동차 대출 vs 리스 — 평생 비용 수학',
				ja: '自動車ローン vs リース — 生涯コストの計算',
				zh: '汽车贷款 vs 租赁 — 全生命周期成本的数学'
			},
			body: {
				en: `On the surface, leasing looks cheaper: monthly payments are typically 30–50% lower than financing the same vehicle. The catch is that the lease payment buys you depreciation plus rent, while the loan payment buys you the entire car. Run a 3-year window on a $35,000 mid-size sedan to see what the math actually looks like.

Lease scenario: assume a 36-month, 36k-mile lease with money factor 0.0015 (≈ 3.6% APR equivalent — multiply by 2400 to convert money factor to APR), residual value 58% ($20,300), and an acquisition fee of $695. Capitalized cost reduction (down payment) of $0. Depreciation = ($35,000 − $20,300) / 36 = $408.33/month. Rent charge = ($35,000 + $20,300) × 0.0015 = $82.95/month. Pre-tax monthly = $491.28. Add 8% sales tax (varies by state) → $530.58. Over 36 months you pay $19,790 — and you return the keys with nothing.

Loan scenario: same $35,000, $0 down, 60-month note at 7.5% APR. Monthly payment via the amortization formula M = P · r · (1+r)^n / ((1+r)^n − 1) = $701.40. Over 36 months you have paid $25,250 in payments. Of that, roughly $16,800 went to principal and $8,450 to interest. The car at month 36 is worth approximately $20,300 (same residual). Net worth position: $25,250 paid out, $20,300 asset, plus a remaining balance of $18,200 you still owe. Equity = $20,300 − $18,200 = $2,100.

Side by side at month 36: lease costs $19,790 with nothing to show; loan costs $25,250 paid plus $18,200 still owed but with $2,100 in equity. The lease is $5,460 cheaper out of pocket but leaves you with no asset and no transportation. The loan path requires another 24 months to own free and clear — and once you cross year 5, the per-month cost of ownership drops to insurance, fuel, and maintenance. Over a 10-year horizon, owning typically wins by $5,000–$15,000, depending on residual values, interest rates, and how long you actually keep cars. Lease loses if you keep cars more than 4 years; lease wins if you trade every 3 years and value the latest features. Educational only — confirm specific lease/loan terms in writing with your dealer and lender.`,
				ko: `표면적으로 리스는 싸 보입니다 — 월 납입금이 같은 차량을 할부로 살 때보다 보통 30~50% 낮습니다. 함정은, 리스료는 감가상각과 임대료를 사는 것이고 할부 납입금은 차 전체를 사는 것이라는 점입니다. $35,000 중형 세단의 3년 시나리오로 실제 수학을 비교해 봅시다.

리스 시나리오 — 36개월, 36k 마일, 머니팩터 0.0015 (≈ APR 3.6%, 머니팩터 × 2400 = APR 환산), 잔존가치 58% ($20,300), 취득수수료 $695, 선납금 $0 가정. 감가상각 = ($35,000 − $20,300) / 36 = $408.33/월. 임대 비용 = ($35,000 + $20,300) × 0.0015 = $82.95/월. 세전 월 = $491.28. 8% 판매세(주마다 다름) 가산 → $530.58. 36개월간 $19,790 지불 — 그리고 차 키를 반납하고 끝.

할부 시나리오 — 동일한 $35,000, 선납 $0, 60개월 7.5% APR. 원리금균등상환 공식 M = P · r · (1+r)^n / ((1+r)^n − 1) = $701.40/월. 36개월간 $25,250 납입. 이 중 약 $16,800은 원금, $8,450은 이자. 36개월 시점 차량 가치는 약 $20,300 (동일 잔존가치). 순자산 위치 — $25,250 지출, $20,300 자산, 잔여 대출 $18,200. 순 자본 = $20,300 − $18,200 = $2,100.

36개월 시점 비교 — 리스 $19,790 지출, 잔존 자산 0. 할부 $25,250 지출 + $18,200 부채, 순 자본 $2,100. 리스가 현금 흐름상 $5,460 저렴하지만 자산도 차량도 남지 않습니다. 할부는 24개월 더 내야 완전히 소유합니다 — 그 5년차를 넘기면 월 보유 비용이 보험, 연료, 정비로 줄어듭니다. 10년 시야에서는 보통 소유가 $5,000~$15,000 정도 유리합니다 (잔존가치, 금리, 실제 보유 기간에 따라 다름). 차량을 4년 이상 타면 리스가 손해, 3년마다 바꾸고 최신 기능을 중시하면 리스가 유리합니다. 교육용이며 — 구체적인 리스/대출 조건은 딜러와 대출기관과 서면으로 확인하세요.`,
				ja: `表面的にはリースの方が安く見えます。月々の支払いは、同じ車両をローンで購入する場合より通常30〜50%低くなります。落とし穴は、リース料で買っているのは減価償却分と賃借料であるのに対し、ローンの支払いで買っているのは車そのものだという点です。$35,000のミッドサイズセダンについて3年間のウィンドウで計算し、実際の数字がどうなるかを見てみましょう。

リースのシナリオ：36か月・36,000マイルのリースで、マネーファクター0.0015（APR換算で約3.6%——マネーファクターに2400を掛けるとAPRに換算できます）、残存価値58%（$20,300）、取得手数料$695を想定します。頭金（キャピタライズドコストの減額）は$0。減価償却 = ($35,000 − $20,300) / 36 = $408.33/月。レントチャージ = ($35,000 + $20,300) × 0.0015 = $82.95/月。税抜きの月額 = $491.28。8%の売上税（州により異なります）を加えると → $530.58。36か月で$19,790を支払い——そして鍵を返却して、手元には何も残りません。

ローンのシナリオ：同じ$35,000、頭金$0、60か月・APR 7.5%のローンです。元利均等返済の公式 M = P · r · (1+r)^n / ((1+r)^n − 1) により、月々の返済額は$701.40。36か月間の支払総額は$25,250。このうち約$16,800が元金に、$8,450が利息に充てられています。36か月目の車両価値は約$20,300（同じ残存価値）。純資産ポジションは、$25,250を支払い、$20,300の資産を保有し、さらに$18,200の残債が残っている状態です。エクイティ（純持分）= $20,300 − $18,200 = $2,100。

36か月時点での比較：リースは$19,790を支払って手元に何も残らず、ローンは$25,250を支払い、$18,200の残債があるものの$2,100のエクイティが残ります。リースは現金支出では$5,460安いですが、資産も移動手段も残りません。ローンの道は完全に所有するまでさらに24か月かかります——しかし5年目を越えれば、月あたりの保有コストは保険・燃料・整備費だけに下がります。10年の視野で見ると、残存価値・金利・実際に車を保有する期間にもよりますが、所有の方が通常$5,000〜$15,000有利になります。車を4年以上乗り続けるならリースは損で、3年ごとに乗り換えて最新機能を重視するならリースが有利です。本内容は教育目的のみです——具体的なリース／ローン条件は、必ずディーラーおよび貸し手と書面で確認してください。`,
				zh: `表面上看，租赁更便宜：月付款通常比贷款购买同一辆车低 30–50%。陷阱在于，租赁付款买到的只是折旧加租金，而贷款付款买到的是整辆车。以一辆 $35,000 的中型轿车做一个 3 年期的测算，看看数学上实际是什么样子。

租赁方案：假设 36 个月、36,000 英里的租约，货币系数（money factor）为 0.0015（约相当于 3.6% 年利率——货币系数乘以 2400 即可换算为 APR），残值 58%（$20,300），另有 $695 的开办费。首付（资本化成本抵减）为 $0。折旧 = ($35,000 − $20,300) / 36 = $408.33/月。租金费用 = ($35,000 + $20,300) × 0.0015 = $82.95/月。税前月付 = $491.28。加上 8% 销售税（各州不同）→ $530.58。36 个月共支付 $19,790——然后交还钥匙，什么都不剩。

贷款方案：同样 $35,000，首付 $0，60 个月、年利率 7.5% 的贷款。按摊销公式 M = P · r · (1+r)^n / ((1+r)^n − 1) 计算，月供为 $701.40。36 个月共支付 $25,250，其中约 $16,800 用于本金，$8,450 用于利息。第 36 个月时车辆价值约为 $20,300（同样的残值）。净资产状况：支出 $25,250，持有 $20,300 的资产，另有 $18,200 的剩余贷款。净值 = $20,300 − $18,200 = $2,100。

第 36 个月并排比较：租赁花费 $19,790，什么都没留下；贷款支付了 $25,250，还欠 $18,200，但拥有 $2,100 的净值。租赁在现金支出上便宜 $5,460，却让你既没有资产也没有代步工具。贷款路线还需再还 24 个月才能完全拥有——而一旦跨过第 5 年，每月的持有成本就降为保险、油费和保养。放在 10 年的视野下，拥有通常能占优 $5,000–$15,000，具体取决于残值、利率以及你实际持有车辆的时间。如果你一辆车开 4 年以上，租赁吃亏；如果每 3 年换车并看重最新配置，租赁占优。本内容仅供教育参考——具体的租赁/贷款条款请与经销商和贷款机构以书面形式确认。`
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
				ko: '개인 대출 APR vs 신용카드 APR — 언제 통합해야 하는가',
				ja: '個人ローンのAPR vs クレジットカードのAPR（いつおまとめすべきか）',
				zh: '个人贷款年利率 vs 信用卡年利率（何时该做债务整合）'
			},
			body: {
				en: `Credit card debt and personal loan debt are both unsecured consumer credit, yet the average rates differ wildly: as of early 2026, the Federal Reserve's G.19 release reports the average commercial bank credit card APR at roughly 22%, while average 24-month personal loan APR sits closer to 12%. That ten-percentage-point gap is the entire reason the debt consolidation industry exists — and also the reason it can backfire if you do the math wrong.

The case where consolidation clearly wins: $15,000 in credit card debt at 24% APR, paying the minimum (typically interest plus 1% of balance, about $325/month). At that pace you would take roughly 17 years to pay off and spend approximately $14,300 in interest alone. Refinance into a 5-year personal loan at 12% APR via the standard amortization formula M = P · r · (1+r)^n / ((1+r)^n − 1): monthly payment $333.67, total interest paid $5,020. Switching saves $9,280 in interest and you are debt-free in 60 months instead of 200. The break-even depends on how disciplined you are about not running the cards back up.

The case where consolidation backfires: same $15,000 at 24% APR, but instead of paying minimums you were already paying $500/month — that schedule clears the debt in 47 months with about $8,300 interest. Now refinance to a 7-year personal loan at 12% APR: monthly drops to $264.81, total interest jumps to $7,244 over 84 months. You "saved" $1,000 in interest only by stretching the term to 7 years. Worse, the 24% credit card line stays open and frequently gets re-utilized — about 60% of debt consolidation borrowers run their card balances back up within 24 months, per the Consumer Financial Protection Bureau's 2017 report on debt consolidation outcomes.

Three rules of thumb. (1) Consolidate only if the new APR is at least 5 percentage points lower than the weighted average APR of what you are replacing — fees and origination charges erode smaller spreads. (2) Keep or shorten the payoff term; never extend it. If you were 4 years from payoff at minimum payments, target a 3-year personal loan. (3) Close or freeze the credit card lines you just paid off to remove the temptation. Look at hardship programs from the original creditor first — they can sometimes drop your APR to 9–12% without a new loan or hard credit pull. This is general educational content; for a personalized assessment, talk to a non-profit credit counselor accredited by the NFCC (nfcc.org).`,
				ko: `신용카드 부채와 개인 대출 부채는 둘 다 무담보 소비자 신용이지만 평균 금리는 크게 다릅니다 — 2026년 초 기준 미국 연준 G.19 발표에 따르면 시중은행 신용카드 평균 APR은 약 22%, 24개월 개인 대출 평균 APR은 약 12%입니다. 이 10%p 격차가 부채 통합 산업이 존재하는 이유이며, 동시에 잘못 계산하면 역효과가 날 수 있는 이유입니다.

통합이 명확히 이기는 경우 — 신용카드 잔액 $15,000, APR 24%, 최소 결제(보통 이자 + 잔액의 1%, 약 $325/월) 납입. 이 속도로는 약 17년 걸리고 이자만 약 $14,300 지불. 표준 원리금균등상환 공식 M = P · r · (1+r)^n / ((1+r)^n − 1)으로 5년 12% APR 개인 대출로 차환하면 — 월 $333.67, 총 이자 $5,020. 차환으로 이자 $9,280 절감, 200개월이 아닌 60개월에 부채 청산. 손익분기는 카드를 다시 쓰지 않는 자제력에 달려 있습니다.

통합이 역효과인 경우 — 같은 $15,000 / 24% APR이지만 최소 결제 대신 이미 월 $500을 내고 있던 상황. 이 일정이면 47개월에 약 $8,300 이자로 청산됩니다. 여기서 12% APR 7년 개인 대출로 바꾸면 — 월 $264.81, 총 이자 $7,244 (84개월 동안). 이자 "절감"은 $1,000에 불과한데 기간을 7년으로 늘려서 얻은 것입니다. 더 나쁜 건, 24% 카드 라인은 그대로 열려 있고 자주 재사용된다는 점입니다 — 미국 CFPB 2017년 부채 통합 결과 보고서에 따르면 부채 통합 차주의 약 60%가 24개월 내 카드 잔액을 다시 늘립니다.

세 가지 경험칙. (1) 새 APR이 대체할 가중 평균 APR보다 최소 5%p 낮을 때만 통합 — 수수료와 개시 비용이 작은 스프레드를 잠식합니다. (2) 상환 기간을 유지하거나 줄이세요, 절대 늘리지 말 것. 최소 결제로 4년 남았다면 3년 개인 대출을 목표로. (3) 방금 갚은 카드 라인은 닫거나 동결해 유혹을 제거. 새 대출과 신용 조회 없이 원 채권자의 헬프 프로그램이 APR을 9~12%로 낮춰주는 경우도 있으니 먼저 알아보세요. 본 콘텐츠는 일반 교육용 — 개인 맞춤 평가는 미국 NFCC(nfcc.org) 인증 비영리 신용상담사와 상담하세요.`,
				ja: `クレジットカード債務も個人ローン債務も、どちらも無担保の消費者信用ですが、平均金利は大きく異なります。2026年初頭時点で、米連邦準備制度（FRB）のG.19統計によれば、商業銀行のクレジットカード平均APRは約22%である一方、24か月物個人ローンの平均APRは12%前後です。この10パーセントポイントの差こそが、債務のおまとめ（債務統合）業界が存在する理由のすべてであり——同時に、計算を誤れば逆効果になりうる理由でもあります。

おまとめが明確に有利なケース：APR 24%のクレジットカード債務$15,000を、最低支払額（通常は利息＋残高の1%、約$325/月）で返済している場合です。このペースでは完済までおよそ17年かかり、利息だけで約$14,300を支払うことになります。標準的な元利均等返済の公式 M = P · r · (1+r)^n / ((1+r)^n − 1) を使ってAPR 12%の5年物個人ローンに借り換えると、月々の支払いは$333.67、支払利息の総額は$5,020になります。切り替えることで利息を$9,280節約でき、200か月ではなく60か月で借金から解放されます。損益分岐点は、カードの残高を再び膨らませない自制心にかかっています。

おまとめが裏目に出るケース：同じ$15,000・APR 24%でも、最低支払額ではなく既に月$500を支払っていた場合です。そのスケジュールなら47か月で完済し、利息は約$8,300で済みます。ここでAPR 12%の7年物個人ローンに借り換えると、月々の支払いは$264.81に下がる一方、支払利息の総額は84か月で$7,244に跳ね上がります。利息を$1,000「節約」できたのは、返済期間を7年に引き延ばしたからにすぎません。さらに悪いことに、24%のクレジットカード枠は開いたままで、しばしば再び使われてしまいます——米消費者金融保護局（CFPB）の2017年の債務統合の結果に関する報告書によれば、債務をまとめた借り手の約60%が24か月以内にカード残高を再び増やしています。

3つの経験則。（1）新しいAPRが、置き換える債務の加重平均APRより少なくとも5パーセントポイント低い場合にのみ、おまとめすること——手数料や組成費用は小さな金利差を食いつぶします。（2）返済期間は維持するか短縮すること。決して延ばしてはいけません。最低支払額で完済まで4年だったなら、3年物の個人ローンを目標にしましょう。（3）返済し終えたクレジットカードの枠は解約または凍結して、誘惑を断つこと。まずは元の債権者のハードシップ（救済）プログラムを確認しましょう——新規ローンやハードな信用照会なしで、APRを9〜12%まで下げてくれる場合があります。本コンテンツは一般的な教育目的の内容です。個別の評価が必要な場合は、NFCC（nfcc.org）認定の非営利クレジットカウンセラーにご相談ください。`,
				zh: `信用卡债务和个人贷款债务同属无抵押消费信贷，但平均利率相差悬殊：截至 2026 年初，美联储 G.19 报告显示商业银行信用卡平均年利率约为 22%，而 24 个月期个人贷款的平均年利率接近 12%。这 10 个百分点的差距正是债务整合行业存在的全部理由——也是算错账就会适得其反的原因。

整合明显划算的情形：$15,000 信用卡债务，年利率 24%，只还最低还款额（通常为利息加余额的 1%，约 $325/月）。按这个节奏，大约需要 17 年才能还清，仅利息就要支付约 $14,300。用标准摊销公式 M = P · r · (1+r)^n / ((1+r)^n − 1) 再融资为年利率 12% 的 5 年期个人贷款：月供 $333.67，总利息 $5,020。转换后可节省 $9,280 的利息，并在 60 个月而不是 200 个月内摆脱债务。盈亏平衡取决于你能否自律地不再把卡刷回去。

整合适得其反的情形：同样是 $15,000、年利率 24%，但你原本还的不是最低额，而是每月 $500——照此计划 47 个月即可还清，利息约 $8,300。此时再融资为年利率 12% 的 7 年期个人贷款：月供降到 $264.81，总利息却在 84 个月里跳升至 $7,244。你"省下"的 $1,000 利息，只是靠把期限拉长到 7 年换来的。更糟的是，那条 24% 的信用卡额度仍然敞开着，而且经常被重新用掉——根据美国消费者金融保护局（CFPB）2017 年关于债务整合结果的报告，约 60% 的债务整合借款人会在 24 个月内把卡债重新刷回去。

三条经验法则。（1）只有当新利率比被替换债务的加权平均利率至少低 5 个百分点时才整合——各类手续费和放款费会侵蚀较小的利差。（2）保持或缩短还清期限，绝不要延长。如果按最低还款还有 4 年还清，就以 3 年期个人贷款为目标。（3）关闭或冻结刚还清的信用卡额度，消除诱惑。先了解原债权人的困难援助计划——它们有时能在不办新贷款、不做硬查询的情况下把你的年利率降到 9–12%。本内容为一般教育性内容；如需个性化评估，请咨询经 NFCC（nfcc.org）认证的非营利信用咨询师。`
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
				ko: '연대 보증 수학 — 당신이 실제로 약속하는 것',
				ja: '連帯保証（コサイン）の数学 — あなたが実際に約束しているもの',
				zh: '共同签署的数学 — 你实际承诺的是什么'
			},
			body: {
				en: `When a parent co-signs a $30,000 student loan or a friend co-signs a $20,000 auto loan, what they sign is not a "vouch" or a "reference" — they sign a joint and several liability contract. The lender can demand the entire balance from the co-signer the day after the primary borrower misses a payment, and they often do. The Consumer Financial Protection Bureau's data shows roughly 38% of co-signers ultimately have to pay some or all of the loan, and 28% see their credit score drop because of it.

The math your credit report sees is brutal. The full loan balance counts toward your debt-to-income (DTI) ratio for any future mortgage, auto loan, or refinance application. Co-sign a $30,000 student loan with a $300/month payment, and Fannie Mae underwriters add that $300 to your monthly obligations even though you have never made a payment — that single line item can cost you about $50,000 of borrowing capacity on a 30-year mortgage at 7%. The loan also lives on your credit report. A single 30-day late by the primary borrower drops a co-signer's FICO score by 50–100 points; a 90-day late drops it by another 50–80. Recovery takes 24 months minimum and the negative mark stays on the report for 7 years.

Worse, "co-signer release" — the lender's option to formally remove you after the primary borrower makes 12–48 on-time payments — is far less reliable than borrowers assume. Sallie Mae approves roughly 5% of co-signer release requests; SoFi and other private lenders reportedly approve 10–25%. The borrower must demonstrate income that independently supports the loan, hit a credit score threshold (often 700+), and apply during a narrow window. Practical reality: assume the obligation is permanent unless you refinance the loan into the borrower's name alone.

If you must co-sign, three protections meaningfully reduce risk. (1) Demand monthly statement access — federal law requires lenders to provide statements to all named borrowers, but in practice you have to ask. Set up account alerts in your own name so you find out about late payments before they hit credit. (2) Set a written agreement with the primary borrower that funds you a "reserve" equal to 3 months of payments, held in your own account, available if they miss. (3) Push hard for a clear refinance/release timeline — document an expectation that the loan is refinanced into the borrower's sole name within 24–36 months once their credit qualifies. None of this changes the legal obligation; it only manages the downside. Educational information only; consult a licensed attorney before signing.`,
				ko: `부모가 $30,000 학자금 대출에 연대 보증을 서거나 친구가 $20,000 자동차 대출에 연대 보증을 설 때, 그들이 서명하는 것은 "추천서"나 "참조"가 아닙니다 — 연대보증(joint and several liability) 계약입니다. 채권자는 주차주가 한 번이라도 연체하면 그 다음날부터 잔액 전액을 보증인에게 청구할 수 있고, 실제로 자주 그렇게 합니다. 미국 CFPB 데이터에 따르면 연대보증인의 약 38%가 결국 일부 또는 전액을 갚게 되고, 28%는 신용점수 하락을 경험합니다.

신용보고서가 보는 수학은 가혹합니다. 대출 잔액 전체가 향후 주택담보대출, 자동차 대출, 차환 신청 시 부채/소득 비율(DTI)에 잡힙니다. 월 $300인 $30,000 학자금 대출에 보증을 서면 — 한 번도 갚은 적이 없어도 — Fannie Mae 언더라이터는 그 $300을 월 의무로 가산합니다. 그 한 줄이 30년 7% 모기지에서 대출 한도를 약 $50,000 깎아먹습니다. 대출은 신용보고서에도 올라갑니다. 주차주가 한 번 30일 연체하면 보증인의 FICO 점수가 50~100점 하락하고, 90일 연체면 추가 50~80점 하락. 회복에 최소 24개월, 부정 기록은 7년 동안 남습니다.

게다가 "보증인 해제(co-signer release)" — 주차주가 12~48회 정상 상환한 뒤 채권자가 보증인을 공식 제외하는 옵션 — 은 차주들이 기대하는 것보다 훨씬 신뢰할 수 없습니다. Sallie Mae는 보증인 해제 신청의 약 5%를 승인하고, SoFi 등 사설 대출기관은 10~25% 정도로 보고됩니다. 차주가 대출을 독립적으로 감당할 소득을 입증하고, 신용점수 임계(보통 700+)를 넘고, 좁은 신청 창 내에 신청해야 합니다. 현실적으로 — 대출이 차주 단독 명의로 차환되지 않는 한 의무가 영구적이라고 가정하세요.

꼭 보증을 서야 한다면 세 가지 보호 장치가 실질적인 위험을 줄입니다. (1) 월별 명세서 접근권을 요구하세요 — 연방법은 대출기관이 모든 명시 차주에게 명세서를 제공하도록 의무화하지만 실제로는 요청해야 합니다. 본인 명의 계정 알림을 설정해 신용 기록 전에 연체를 발견하세요. (2) 주차주와 서면 합의를 만들어 본인 계좌에 3개월치 상환금 상당액을 "예비금"으로 적립하게 하세요. (3) 차환/해제 일정을 강하게 밀어붙이세요 — 차주의 신용이 충족되면 24~36개월 내 단독 명의로 차환하는 것을 문서로 명시. 어느 것도 법적 의무를 바꾸지는 않으며 — 하방 위험만 관리합니다. 본 콘텐츠는 교육 정보일 뿐 — 서명 전 면허 있는 변호사와 상담하세요.`,
				ja: `親が$30,000の学生ローンに、あるいは友人が$20,000の自動車ローンに連帯保証（コサイン）するとき、彼らが署名しているのは「推薦」や「身元照会」ではありません——連帯債務（joint and several liability）契約に署名しているのです。主債務者が支払いを1回滞納した翌日から、貸し手は連帯保証人に残高全額を請求でき、実際にそうすることも珍しくありません。米消費者金融保護局（CFPB）のデータによれば、連帯保証人の約38%が最終的にローンの一部または全額を支払うことになり、28%はそれが原因で信用スコアの低下を経験しています。

あなたの信用報告書が見る数字は容赦がありません。ローン残高の全額が、将来の住宅ローン、自動車ローン、借り換え申請における返済負担率（DTI）に算入されます。月々$300の$30,000の学生ローンに連帯保証すると、あなたが一度も支払ったことがなくても、Fannie Maeの審査担当者はその$300をあなたの月々の債務に加算します——このたった1行の項目が、金利7%の30年住宅ローンで約$50,000分の借入余力を奪いかねません。このローンはあなたの信用報告書にも載り続けます。主債務者が一度30日延滞すると連帯保証人のFICOスコアは50〜100ポイント下がり、90日延滞ならさらに50〜80ポイント下がります。回復には最低でも24か月かかり、ネガティブな記録は報告書に7年間残ります。

さらに悪いことに、「保証人の解除（コサイナーリリース）」——主債務者が12〜48回の期日どおりの支払いを行った後に、貸し手があなたを正式に外すオプション——は、借り手が想定するよりはるかに当てになりません。Sallie Maeが承認する保証人解除申請は約5%で、SoFiなどの民間貸し手の承認率は10〜25%程度と報告されています。借り手は、単独でローンを支えられる収入を証明し、信用スコアの基準（多くは700以上）を満たし、狭い期間内に申請しなければなりません。現実的には、ローンが借り手の単独名義に借り換えられない限り、義務は恒久的なものと想定すべきです。

それでも連帯保証しなければならない場合、3つの防御策がリスクを実質的に減らします。（1）毎月の明細へのアクセスを要求すること——連邦法は貸し手に対し、名義に載っているすべての借り手へ明細を提供するよう義務付けていますが、実際には自分から求める必要があります。自分名義でアカウント通知を設定し、延滞が信用情報に載る前に把握しましょう。（2）主債務者との間で書面の合意を結び、3か月分の支払額に相当する「予備資金」をあなた自身の口座に積み立てさせ、滞納時に使えるようにすること。（3）明確な借り換え／解除のタイムラインを強く求めること——借り手の信用が要件を満たしたら、24〜36か月以内にローンを借り手の単独名義へ借り換えるという期待を文書化しましょう。これらはいずれも法的義務そのものを変えるわけではなく、下振れリスクを管理するだけです。教育目的の情報にすぎません。署名する前に、資格を持つ弁護士にご相談ください。`,
				zh: `当父母为一笔 $30,000 的学生贷款共同签署，或朋友为一笔 $20,000 的车贷共同签署时，他们签的不是"担保推荐"或"介绍信"——他们签的是一份连带责任（joint and several liability）合同。主借款人只要漏还一期，贷款机构第二天就可以向共同签署人追讨全部余额，而且他们经常这样做。美国消费者金融保护局（CFPB）的数据显示，约 38% 的共同签署人最终不得不偿还部分或全部贷款，28% 的人因此信用评分下降。

你的信用报告看到的数学很残酷。整笔贷款余额都会计入你未来申请房贷、车贷或再融资时的债务收入比（DTI）。为一笔月供 $300 的 $30,000 学生贷款共同签署后，即使你从未还过一分钱，Fannie Mae 的审贷员也会把这 $300 加进你的月度负债——仅这一个条目就可能让你在利率 7% 的 30 年期房贷上损失约 $50,000 的借款能力。这笔贷款还会一直挂在你的信用报告上。主借款人一次逾期 30 天，共同签署人的 FICO 评分会下降 50–100 分；逾期 90 天再降 50–80 分。恢复至少需要 24 个月，负面记录会在报告上保留 7 年。

更糟的是，"共同签署人解除"（co-signer release）——即主借款人按时还款 12–48 期后，贷款机构正式将你除名的选项——远不如借款人想象的可靠。Sallie Mae 批准的共同签署人解除申请约为 5%；据报道，SoFi 及其他私人贷款机构的批准率为 10–25%。借款人必须证明其收入足以独立支撑这笔贷款，达到信用评分门槛（通常 700 分以上），并在狭窄的时间窗口内提出申请。现实情况是：除非贷款以借款人单独名义再融资，否则应假定这项义务是永久性的。

如果你必须共同签署，有三项保护措施能切实降低风险。（1）要求获得每月账单的查看权限——联邦法律要求贷款机构向所有列名借款人提供账单，但实际上你得主动提出。以自己的名义设置账户提醒，在逾期影响信用之前就能发现。（2）与主借款人签订书面协议，让对方在你自己的账户中存入相当于 3 个月还款额的"储备金"，供其漏还时使用。（3）强力争取明确的再融资/解除时间表——以书面形式确定预期：一旦借款人信用达标，在 24–36 个月内将贷款再融资为其单独名义。这些都不会改变法律义务本身，只是管理下行风险。本内容仅为教育信息；签署前请咨询持牌律师。`
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
			],
			ja: [
				{ q: '税金や保険、手数料は含まれますか？', a: 'いいえ。計算対象は元金と利息のみです。住宅ローンの返済額には、これに加えて固定資産税や保険のエスクローが含まれることがよくあります。' },
				{ q: '返済初期に利息の割合が大きいのはなぜですか？', a: '元利均等返済のローンでは、利息は残高に対して課されます。初期は残高が大きいため利息も大きく、時間の経過とともに元金の割合が増えていきます。' },
				{ q: '変動金利は計算できますか？', a: 'いいえ。本ツールは固定APRを前提としています。変動金利型（ARM）の場合は、金利改定のたびに新しい金利と残高で再計算してください。' },
				{ q: 'これは金融・法律上の助言ですか？', a: 'いいえ。ローン契約に署名する前に、必ず資格を持つファイナンシャルアドバイザーまたは法律専門家にご相談ください。' }
			],
			zh: [
				{ q: '是否包含税费、保险或手续费？', a: '不包含。计算仅涵盖本金和利息。实际房贷月供往往还包括房产税和保险托管等额外费用。' },
				{ q: '为什么前期还款中利息占比这么高？', a: '在摊销型贷款中，利息按剩余余额计收。前期余额大，利息就多；随着时间推移，本金占比会逐渐增加。' },
				{ q: '可以模拟浮动利率吗？', a: '不可以。本工具假设固定年利率。对于浮动利率贷款（ARM），请在每次利率调整后用新利率和剩余余额重新计算。' },
				{ q: '这是金融或法律建议吗？', a: '不是。签署贷款合同前，请务必咨询持牌财务顾问或法律专业人士。' }
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
