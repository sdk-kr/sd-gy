<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'Gross vs Net: Why Your Contract Number Is Not Your Bank Number',
				ko: '세전과 세후 — 계약서의 숫자가 통장의 숫자가 아닌 이유',
				ja: '額面と手取り — 契約書の数字が銀行口座の数字にならない理由',
				zh: '税前与到手：为什么合同上的数字不等于银行里的数字'
			},
			body: {
				en: `Every payroll system in the world runs on the same two-number structure: a gross figure that appears in your contract, and a net figure that reaches your bank account after mandatory deductions. The gap between them is what economists call the tax wedge, and it is large everywhere. Across OECD countries, the average single worker loses roughly a quarter to a third of labor cost to income tax and social contributions; Belgium and Germany sit near the top, while Korea's wedge is comparatively moderate — but still very noticeable on a payslip.

In Korea the deductions fall into two families. The four major social insurances (4대보험) — national pension, health insurance with its long-term care surcharge, and employment insurance — are flat-rate contributions on your pay. Then come income tax and its companion local income tax, which are progressive: the rate climbs with income. Both families are withheld by your employer before you ever see the money, which is why the monthly shock is invisible until your first payslip.

A uniquely Korean trap is the 연봉 (annual salary) to monthly conversion. Most contracts divide the annual figure by 12, but some companies historically folded bonuses in and divided by 13 or more, and severance pay (퇴직금) — legally about one month's pay per year of service — is sometimes quoted inside the annual number for contractors, inflating it. Two offers with the same 연봉 can therefore differ by hundreds of thousands of won per month. Before comparing offers, always ask three questions: is severance inside or outside the number, how many installments is it paid in, and how much of the pay is non-taxable allowances.`,
				ko: `세계의 모든 급여 시스템은 같은 두 숫자 구조로 돌아갑니다. 계약서에 적히는 세전 금액과, 의무 공제를 거쳐 통장에 도착하는 세후 금액입니다. 이 둘의 간격을 경제학자들은 조세 격차(tax wedge)라고 부르며, 어디서나 큽니다. OECD 국가 전체에서 평균적인 독신 근로자는 노동 비용의 대략 4분의 1에서 3분의 1을 소득세와 사회보험료로 잃습니다. 벨기에와 독일이 최상위권이고, 한국의 격차는 상대적으로 온건한 편이지만 급여명세서에서는 여전히 확연히 느껴집니다.

한국의 공제는 두 계열로 나뉩니다. 4대보험 — 국민연금, 건강보험과 그에 딸린 장기요양보험료, 고용보험 — 은 급여에 정률로 매겨지는 기여금입니다. 다음이 근로소득세와 그 짝인 지방소득세인데, 이쪽은 누진적이라 소득이 오를수록 세율이 올라갑니다. 두 계열 모두 돈을 만져 보기도 전에 회사가 원천징수하므로, 첫 급여명세서를 받기 전까지는 이 월간 충격이 보이지 않습니다.

한국 특유의 함정은 연봉의 월급 환산입니다. 대부분의 계약은 연봉을 12로 나누지만, 일부 회사는 과거 상여금을 연봉에 접어 넣고 13 이상으로 나눴고, 법적으로 근속 1년당 약 한 달치 급여인 퇴직금을 계약직에게는 연봉 숫자 안에 넣어 부풀려 부르는 경우도 있습니다. 같은 연봉의 두 오퍼가 월 수십만 원씩 차이 날 수 있는 이유입니다. 오퍼를 비교하기 전에 반드시 세 가지를 물어보세요. 퇴직금이 숫자 안에 있는가 밖에 있는가, 몇 번에 나눠 지급되는가, 그리고 급여 중 비과세 수당이 얼마인가.`,
				ja: `世界のあらゆる給与システムは、同じ2つの数字の構造で動いています。契約書に載る額面と、法定控除を経て銀行口座に届く手取りです。この差を経済学者はタックスウェッジ（税のくさび）と呼び、どこの国でも大きいものです。OECD諸国全体で、平均的な単身労働者は労働コストのおよそ4分の1から3分の1を所得税と社会保険料で失います。ベルギーとドイツが最上位圏で、韓国のくさびは比較的穏やかな方ですが、それでも給与明細でははっきり感じられます。

韓国の控除は2つの系統に分かれます。4大保険 — 国民年金、健康保険とそれに付随する長期療養保険料、雇用保険 — は給与に定率で課される拠出金です。次が勤労所得税とその相棒の地方所得税で、こちらは累進的、つまり所得が上がるほど税率が上がります。どちらの系統も、お金に触れる前に会社が源泉徴収するため、最初の給与明細を受け取るまでこの毎月の衝撃は見えません。

韓国特有の落とし穴は、年俸（연봉）の月給換算です。ほとんどの契約は年俸を12で割りますが、一部の会社はかつて賞与を年俸に織り込んで13以上で割っていましたし、法律上勤続1年あたり約1か月分の給与にあたる退職金を、契約社員には年俸の数字の中に含めて水増しして提示する場合もあります。同じ年俸の2つのオファーが月に数十万ウォンも違い得る理由です。オファーを比較する前に、必ず3つ尋ねてください。退職金はその数字の内か外か、何回に分けて支給されるのか、給与のうち非課税手当はいくらか。`,
				zh: `世界上所有的薪资系统都建立在同一个"两个数字"的结构上：写进合同的税前数字，和经过强制扣缴后到达银行账户的税后数字。二者之差被经济学家称为"税收楔子"，而且在哪儿都不小。在OECD国家中，平均单身劳动者约有四分之一到三分之一的劳动成本流向所得税和社会保险；比利时和德国居于榜首，韩国的楔子相对温和——但在工资单上依然十分醒目。

在韩国，扣缴分为两大类。四大社会保险（4대보험）——国民年金、健康保险及其附加的长期护理保险、雇佣保险——按工资的固定比例缴纳。然后是所得税及其搭档地方所得税，这一类是累进的：收入越高税率越高。两类都由雇主在你见到钱之前代扣代缴，所以在拿到第一张工资单之前，这种每月的落差是看不见的。

韩国特有的陷阱是"年薪"（연봉）到月薪的换算。多数合同把年薪除以12，但有些公司历史上把奖金折进年薪再除以13甚至更多；而法律规定每工作满一年约折合一个月工资的离职金（퇴직금），对合同工有时会被算进年薪数字里，把数字撑大。因此两份相同年薪的offer，每月实际到手可能相差几十万韩元。比较offer之前务必问清三件事：离职金在数字之内还是之外、分几次发放、以及薪资中有多少属于非课税补贴。`
			}
		},
		{
			heading: {
				en: 'The Four Major Insurances: Where 9-Plus Percent of Your Pay Goes First',
				ko: '4대보험 — 월급의 9% 남짓이 가장 먼저 가는 곳',
				ja: '4大保険 — 給与の9%あまりが最初に向かう先',
				zh: '四大保险：工资里先被拿走的那9%多'
			},
			body: {
				en: `Before any income tax is computed, Korean payroll deducts the employee share of four social insurance programs, and understanding each one demystifies most of the payslip. National pension (국민연금) takes 4.5% from the employee, matched by another 4.5% from the employer, on income up to a monthly cap that is revised each July — earnings above the cap contribute nothing more, which is why high earners see this line flatten. Health insurance (건강보험) takes roughly 3.5% from the employee (matched by the employer), and riding on top of it is long-term care insurance (장기요양보험), calculated not on your salary but as a percentage of the health premium itself — a surcharge on a premium, which is why its line looks oddly small. Employment insurance (고용보험) takes 0.9% for the unemployment benefit fund; the employer pays that plus additional job-stability levies. Industrial accident insurance, the fourth pillar, is employer-paid only, so it never appears on your side of the slip.

Add it up and the employee side comes to roughly 9 to 9.5% of gross pay, with the employer paying a similar or larger amount on top of your salary — the true cost of employing you is about 10% higher than your gross. One caveat matters more than any exact figure: these rates change. Pension reform debates, annual health-insurance rate announcements, and cap adjustments mean the percentages drift almost every year (the health rate alone has crept up repeatedly over the past decade). Treat the numbers here as a snapshot, and check the official 4대보험 portals for the current year before making decisions.`,
				ko: `소득세를 계산하기 전에, 한국의 급여 체계는 네 가지 사회보험의 근로자 부담분을 먼저 공제합니다. 각각을 이해하면 급여명세서의 대부분이 풀립니다. 국민연금은 근로자에게서 4.5%를 떼고 회사가 4.5%를 매칭하는데, 매년 7월에 조정되는 월 기준소득 상한까지만 적용됩니다. 상한을 넘는 소득에는 더 부과되지 않아 고소득자의 이 항목은 평평해집니다. 건강보험은 근로자에게서 약 3.5%를 떼고(회사 매칭), 그 위에 장기요양보험이 올라탑니다. 이것은 월급이 아니라 건강보험료 자체에 대한 비율로 계산되는, 보험료 위의 추가 보험료라서 금액이 유난히 작아 보입니다. 고용보험은 실업급여 재원으로 0.9%를 떼고, 회사는 그만큼에 고용안정 부담금을 더해 냅니다. 네 번째 기둥인 산재보험은 전액 회사 부담이라 명세서의 근로자 쪽에는 아예 나타나지 않습니다.

전부 더하면 근로자 부담은 세전 급여의 대략 9~9.5%이고, 회사는 당신의 월급 위에 비슷하거나 더 큰 금액을 얹어 냅니다. 당신을 고용하는 진짜 비용은 세전 급여보다 약 10% 높은 셈입니다. 어떤 정확한 수치보다 중요한 단서가 하나 있습니다. 이 요율들은 변합니다. 연금 개혁 논의, 매년 발표되는 건강보험료율, 상한액 조정 때문에 비율은 거의 해마다 움직입니다(건강보험료율만 해도 지난 십 년간 반복해서 올랐습니다). 여기의 숫자는 스냅숏으로 여기고, 결정을 내리기 전에는 4대보험 공식 사이트에서 당해 연도 요율을 확인하세요.`,
				ja: `所得税を計算する前に、韓国の給与システムは4つの社会保険の労働者負担分を先に控除します。それぞれを理解すれば給与明細の大部分は謎が解けます。国民年金は労働者から4.5%を徴収し、会社が4.5%をマッチングしますが、毎年7月に改定される月額基準所得の上限までしか適用されません。上限を超える所得には課されないため、高所得者ではこの項目が頭打ちになります。健康保険は労働者から約3.5%（会社がマッチング）を徴収し、その上に長期療養保険が乗ります。これは給与ではなく健康保険料そのものに対する割合で計算される、保険料の上の追加保険料なので、金額が妙に小さく見えるのです。雇用保険は失業給付の財源として0.9%を徴収し、会社は同額に加えて雇用安定の賦課金も払います。4本目の柱である労災保険は全額会社負担なので、明細の労働者側には一切現れません。

すべて合計すると労働者負担は額面のおよそ9〜9.5%で、会社はあなたの給与の上に同等かそれ以上の金額を上乗せして払っています。あなたを雇う本当のコストは額面より約10%高いのです。どんな正確な数字よりも重要な注意点が一つあります。これらの料率は変わります。年金改革の議論、毎年発表される健康保険料率、上限額の調整により、割合はほぼ毎年動きます（健康保険料率だけでも過去10年で繰り返し上がってきました）。ここの数字はスナップショットとみなし、意思決定の前には4大保険の公式サイトで当該年度の料率を確認してください。`,
				zh: `在计算所得税之前，韩国的工资系统先扣除四项社会保险的雇员负担部分，弄懂每一项，工资单的大部分谜团就解开了。国民年金从雇员工资中扣4.5%，雇主再配缴4.5%，但只对不超过月度基准收入上限的部分征收（上限每年7月调整）——超过上限的收入不再多缴，所以高收入者的这一栏会封顶。健康保险从雇员扣约3.5%（雇主配缴），其上还骑着长期护理保险：它不按工资计算，而是按健康保险费本身的一个百分比计收——保费之上的附加费，所以这一行的金额显得格外小。雇佣保险扣0.9%作为失业给付基金；雇主除配缴外还要缴纳就业稳定等附加费。第四根支柱工伤保险完全由雇主承担，因此从不出现在工资单的雇员一侧。

加总起来，雇员一侧约占税前工资的9%到9.5%，而雇主在你的工资之外还要再付相近或更多的金额——雇用你的真实成本比你的税前工资高约10%。有一条注意事项比任何精确数字都重要：这些费率会变。年金改革的争论、每年公布的健康保险费率、缴费上限的调整，使得这些百分比几乎年年在动（仅健康保险费率在过去十年就多次上调）。请把这里的数字当作快照，做决定前先到四大保险官方网站核实当年费率。`
			},
			code: {
				example: `Employee-side rates used by this tool (2026 snapshot;
rates change nearly every year - always verify):

  national pension      4.5%  of pay (up to monthly cap)
  health insurance      3.545% of pay
  long-term care        12.95% OF the health premium
  employment insurance  0.9%  of pay
  --------------------------------------------
  total                 ~9.4% of gross (employer pays
                        a similar amount again on top)

Example, 3,000,000 KRW taxable monthly pay:
  pension     135,000
  health      106,350
  care         13,772   (= 106,350 x 0.1295)
  employment   27,000
  ------------------------
  insurances  282,122  (~9.4%)  before any income tax`
			}
		},
		{
			heading: {
				en: 'Withholding Tables and the Year-End Settlement: How Korean Income Tax Actually Arrives',
				ko: '간이세액표와 연말정산 — 근로소득세가 실제로 걷히는 방식',
				ja: '簡易税額表と年末調整 — 勤労所得税が実際に徴収される仕組み',
				zh: '简易税额表与年末精算：韩国所得税实际是怎么收的'
			},
			body: {
				en: `The income tax line on a Korean payslip is not a live calculation of your true annual tax — it is a lookup. Employers withhold monthly amounts from the 간이세액표 (simplified withholding tax table) published by the National Tax Service, a grid indexed by monthly pay and number of dependents that approximates what someone with your profile will owe over the year. This calculator mirrors that logic in simplified form: it annualizes your pay, applies the earned-income deduction (a formula that shields a large fraction of low and middle wages), subtracts personal exemptions of 1.5 million won per dependent and your pension contributions, runs the result through the progressive brackets from 6% up to 45%, applies the earned-income tax credit and child credits, then divides by 12. Local income tax is then a clean 10% surcharge on the income tax — if you know one, you know the other.

Because the monthly table is only an approximation, Korea reconciles everything each spring in the 연말정산 (year-end tax settlement), where actual deductions — credit-card spending, medical costs, education, housing, donations — replace the table's assumptions. Roughly two thirds of employees get money back; the rest pay in. Employees can even elect to have 80% or 120% of the table amount withheld monthly, trading cash flow now against the size of the settlement later.

The practical reading: your monthly income tax line is a deposit, not a verdict. If it looks slightly different from this calculator, the cause is usually rounding rules in the official table, a different dependent count on file, or company-specific taxable items — not an error in either place.`,
				ko: `한국 급여명세서의 소득세 항목은 당신의 진짜 연간 세금을 실시간으로 계산한 값이 아니라, 표에서 찾은 값입니다. 회사는 국세청이 고시하는 간이세액표 — 월급 구간과 공제대상 가족 수로 찾아 들어가는 격자표 — 에 따라 매달 원천징수하는데, 이는 당신 같은 조건의 사람이 한 해 동안 낼 세금의 근사치입니다. 이 계산기는 그 논리를 단순화해 재현합니다. 월급을 연 환산하고, 낮고 중간인 임금의 상당 부분을 가려 주는 근로소득공제 산식을 적용하고, 부양가족 1인당 150만 원의 인적공제와 국민연금 납입액을 빼고, 6%에서 45%까지의 누진 구간에 통과시키고, 근로소득세액공제와 자녀세액공제를 적용한 뒤 12로 나눕니다. 지방소득세는 소득세의 깔끔한 10% 부가세라서, 한쪽을 알면 다른 쪽도 아는 셈입니다.

월 단위 표는 근사치일 뿐이므로, 한국은 매년 봄 연말정산으로 전부를 정산합니다. 신용카드 사용액, 의료비, 교육비, 주택, 기부금 같은 실제 공제가 표의 가정을 대체하죠. 대략 직장인 3분의 2가 환급을 받고 나머지는 추가 납부합니다. 근로자는 매달 표 금액의 80% 또는 120%를 원천징수하도록 선택할 수도 있어, 지금의 현금 흐름과 나중 정산의 크기를 맞바꿀 수 있습니다.

실용적인 독법은 이렇습니다. 매달의 소득세 항목은 판결이 아니라 예치금입니다. 이 계산기와 조금 다르게 보인다면 원인은 대개 공식 표의 반올림 규칙, 회사에 등록된 부양가족 수의 차이, 회사 고유의 과세 항목이지, 어느 쪽의 오류가 아닙니다.`,
				ja: `韓国の給与明細の所得税の行は、あなたの本当の年間税額をリアルタイムで計算した値ではなく、表から引いた値です。会社は国税庁が告示する簡易税額表 — 月給の区分と扶養家族数で引く格子状の表 — に従って毎月源泉徴収します。これはあなたと同じ条件の人が1年間に納めるであろう税額の近似値です。この計算機はその論理を簡略化して再現しています。月給を年換算し、低・中所得の大部分を覆う勤労所得控除の算式を適用し、扶養家族1人あたり150万ウォンの人的控除と国民年金の納付額を差し引き、6%から45%までの累進税率区分に通し、勤労所得税額控除と子女税額控除を適用してから12で割ります。地方所得税は所得税のちょうど10%の付加税なので、一方が分かればもう一方も分かります。

月次の表は近似にすぎないため、韓国では毎年春の年末調整（연말정산）ですべてを精算します。クレジットカードの利用額、医療費、教育費、住宅、寄付金といった実際の控除が表の仮定に取って代わるのです。おおよそ会社員の3分の2が還付を受け、残りは追加納付します。労働者は毎月、表の金額の80%または120%を源泉徴収するよう選ぶこともでき、今のキャッシュフローと後の精算の大きさを交換できます。

実用的な読み方はこうです。毎月の所得税の行は判決ではなく預け金です。この計算機と少し違って見えるなら、原因はたいてい公式の表の丸め規則、会社に登録された扶養家族数の違い、会社固有の課税項目であって、どちらかの誤りではありません。`,
				zh: `韩国工资单上的所得税一栏，不是对你真实年度税负的实时计算，而是查表得来的。雇主按国税厅发布的简易税额表（간이세액표）逐月代扣——那是一张按月薪区间和被扶养人数索引的表格，近似估计与你条件相同的人全年应缴的税。本计算器以简化形式复刻了这套逻辑：把月薪年化，套用勤劳所得扣除公式（它为中低工资挡掉很大一块），减去每位被扶养人150万韩元的人员扣除和你的年金缴费，将结果代入6%到45%的累进税率档，再应用勤劳所得税额抵免与子女抵免，最后除以12。地方所得税则是所得税之上干净利落的10%附加——知道其一便知其二。

由于月度税表只是近似，韩国每年春天用年末精算（연말정산）来对总账：信用卡消费、医疗费、教育费、住房、捐赠等实际扣除项取代税表的假设。约三分之二的上班族能拿到退税，其余则需补缴。雇员甚至可以选择每月按税表金额的80%或120%代扣，用眼下的现金流换取来年精算金额的大小。

实用的解读是：每月的所得税栏是一笔押金，不是判决。如果它与本计算器略有出入，原因通常是官方税表的舍入规则、公司登记的被扶养人数不同、或公司特有的应税项目——而不是哪一边算错了。`
			}
		},
		{
			heading: {
				en: 'Non-Taxable Allowances: The 200,000 Won That Punches Above Its Weight',
				ko: '비과세 수당 — 몸값보다 세게 일하는 20만 원',
				ja: '非課税手当 — 額面以上に効く20万ウォン',
				zh: '非课税补贴：以小博大的那20万韩元'
			},
			body: {
				en: `Buried in Korean payroll law is a short list of allowances that are exempt from both income tax and, in most cases, social insurance assessment — and because they escape every rate at once, each exempt won is worth more than a taxable one. The workhorse is the meal allowance (식대), exempt up to 200,000 won per month since the limit was doubled from 100,000 in 2023. Others include a vehicle maintenance allowance up to 200,000 won for employees who use their own car for company business, childcare allowance up to 200,000 won per month for parents of children under six, certain research allowances for R&D staff and teachers, and overtime pay for lower-wage production workers within annual limits.

The arithmetic is what makes this section worth reading. Shifting 200,000 won of a 3,000,000 won salary from taxable base pay into meal allowance does not change gross pay at all, but it removes that slice from pension, health, care, employment, and income-tax bases simultaneously. At a combined marginal bite of roughly 15–25% for a middle-income earner, that is roughly 30,000–50,000 won of extra net pay every month — 360,000 to 600,000 won a year — for a line-item relabel. This is why this calculator asks for your non-taxable amount as a separate input, and why two identical gross salaries can produce different take-home figures.

There are trade-offs worth knowing: a smaller pension base today means slightly smaller pension credits accruing for retirement, and allowances must reflect reality (a meal allowance paired with a company-provided free cafeteria can be challenged in audits). Exemption ceilings are also revised over the years, so verify current limits before restructuring anything.`,
				ko: `한국 급여 법제에는 소득세가 면제되고 대부분의 경우 사회보험 산정에서도 빠지는 수당의 짧은 목록이 숨어 있습니다. 모든 요율을 한꺼번에 피해 가기 때문에, 비과세 1원은 과세 1원보다 가치가 큽니다. 주력은 식대로, 2023년에 한도가 10만 원에서 두 배로 오른 뒤 월 20만 원까지 비과세입니다. 그 밖에 본인 차량을 업무에 쓰는 직원의 자가운전보조금 월 20만 원, 6세 이하 자녀를 둔 부모의 육아수당(출산·보육수당) 월 20만 원, 연구개발 인력과 교원의 일부 연구활동비, 저임금 생산직 근로자의 연간 한도 내 연장근로수당 등이 있습니다.

이 절을 읽을 가치가 있게 만드는 것은 산수입니다. 월급 300만 원 중 20만 원을 과세 기본급에서 식대로 옮겨도 세전 총액은 전혀 변하지 않지만, 그 조각은 국민연금, 건강, 장기요양, 고용보험, 소득세의 기반에서 동시에 빠져나갑니다. 중간 소득자의 한계 부담률을 합쳐서 대략 15~25%로 잡으면, 항목 이름 하나 바꾼 대가로 매달 약 3만~5만 원, 연간 36만~60만 원의 실수령액이 늘어나는 셈입니다. 이 계산기가 비과세 금액을 별도 입력으로 받는 이유이자, 똑같은 세전 월급 둘이 서로 다른 실수령액을 만들 수 있는 이유입니다.

알아 둘 만한 트레이드오프도 있습니다. 오늘 연금 기반이 작아지면 노후에 쌓이는 연금 수급액도 조금 작아지고, 수당은 실체를 반영해야 합니다(무료 구내식당이 있는 회사의 식대는 세무조사에서 다툼거리가 될 수 있습니다). 비과세 한도 역시 해를 거치며 개정되므로, 무엇이든 재구성하기 전에 현행 한도를 확인하세요.`,
				ja: `韓国の給与法制には、所得税が免除され、多くの場合社会保険の算定からも外れる手当の短いリストが埋め込まれています。すべての料率を一度に逃れるため、非課税の1ウォンは課税される1ウォンより価値が大きいのです。主力は食事手当（식대）で、2023年に上限が10万ウォンから倍増されて以来、月20万ウォンまで非課税です。ほかに、自家用車を業務に使う従業員の車両維持手当が月20万ウォンまで、6歳以下の子を持つ親の保育手当が月20万ウォンまで、研究開発人員や教員の一部研究活動費、低賃金の生産職労働者の年間限度内の残業手当などがあります。

この節を読む価値を生むのは算数です。月給300万ウォンのうち20万ウォンを課税対象の基本給から食事手当に移しても額面総額は全く変わりませんが、その一切れは国民年金・健康・長期療養・雇用保険・所得税の基盤から同時に抜け落ちます。中間所得者の限界負担率を合計でおよそ15〜25%とすれば、項目名を一つ書き換えるだけで毎月約3万〜5万ウォン、年間36万〜60万ウォンの手取りが増える計算です。この計算機が非課税額を別の入力として尋ねる理由であり、同じ額面の月給が異なる手取りを生み得る理由でもあります。

知っておくべきトレードオフもあります。今日の年金基盤が小さくなれば老後に積み上がる年金受給額もわずかに小さくなりますし、手当は実態を反映していなければなりません（無料の社員食堂がある会社の食事手当は税務調査で争点になり得ます）。非課税の上限も年月とともに改定されるので、何かを組み替える前に現行の限度を確認してください。`,
				zh: `韩国薪资法规里藏着一张简短的清单：这些补贴免征所得税，多数情况下也不计入社保基数——因为同时躲过了所有费率，每一元非课税的钱都比应税的钱更值钱。主力是餐费补贴（식대），自2023年上限从10万韩元翻倍后，每月20万韩元以内免税。其他还有：用私车办公事的员工每月20万韩元以内的车辆维护补贴、六岁以下儿童父母每月20万韩元以内的保育补贴、研发人员和教师的部分研究活动费，以及低工资生产岗位工人年度限额内的加班费。

让这一节值得一读的是算术。把300万韩元月薪中的20万从应税基本工资挪成餐补，税前总额分毫不变，但这一块同时从年金、健康、护理、雇佣保险和所得税的基数中消失了。按中等收入者合计约15%–25%的边际负担率计算，仅仅给一个条目改个名字，每月就能多拿约3万到5万韩元，一年多36万到60万——这就是本计算器把非课税金额设为单独输入项的原因，也是两份相同税前工资能算出不同到手数字的原因。

值得了解的代价也有：今天的年金基数变小，意味着为退休累积的年金权益略微缩水；补贴还必须名实相符（公司已提供免费食堂却又发餐补，税务稽查时可能被质疑）。免税上限也会逐年修订，调整任何薪资结构前请先核实现行限额。`
			},
			code: {
				example: `Same 3,000,000 KRW gross, two structures:

  A) all taxable            B) 200,000 as meal allowance
     taxable base 3,000,000    taxable base 2,800,000

  Insurance + tax apply to the taxable base only.
  At a combined marginal rate of ~20%:

     B saves  200,000 x 0.20 = ~40,000 KRW/month
              = ~480,000 KRW/year in extra net pay

  Common non-taxable items (limits as of 2026):
     meal allowance          <= 200,000 /month
     own-car business use    <= 200,000 /month
     childcare (child < 6)   <= 200,000 /month`
			}
		},
		{
			heading: {
				en: 'A Full Worked Example — and How Other Countries Do the Same Math',
				ko: '전체 계산 예제 — 그리고 다른 나라들의 같은 계산',
				ja: '完全な計算例 — そして他国での同じ計算',
				zh: '一个完整算例——以及其他国家怎么做同一道题'
			},
			body: {
				en: `Walk one case end to end. A single employee, gross 3,000,000 won per month, 200,000 of it non-taxable meal allowance, one dependent (self), no children. The taxable base is 2,800,000. The four insurances take about 263,000 won (pension 126,000, health 99,260, long-term care about 12,850, employment 25,200). Income tax from the simplified logic lands in the neighborhood of 30,000 won with the local surcharge adding a tenth of that — modest, because the earned-income deduction and credits absorb most of the liability at this level. Net pay comes out around 2.67 million won, or roughly 89% of gross. The pattern generalizes: around the 3 million mark most of the wedge is social insurance, not tax; push toward 8–10 million and progressive income tax overtakes the insurances as the dominant deduction, with the pension line frozen at the cap.

The same machinery, with different labels, runs everywhere. A US payslip shows FICA (6.2% Social Security under a wage cap plus 1.45% Medicare) alongside federal and state withholding driven by a W-4 form. Japan deducts 社会保険 (health, pension at 9.15% employee share, employment) plus withheld income tax, reconciled by the employer's 年末調整 — the direct ancestor of Korea's year-end settlement. Germany's Lohnsteuer plus roughly 20% employee social contributions produce one of the OECD's largest wedges. The universal lesson holds across all of them: negotiate gross, but budget net.

Finally, keep this page in its lane: it is an educational estimator using a snapshot of rates that change nearly every year, and it cannot see your overtime rules, bonuses, or year-end deductions. For decisions that matter — a job offer, a loan application, a visa income requirement — verify with the official National Tax Service calculators or a licensed tax professional.`,
				ko: `한 사례를 끝까지 걸어가 봅시다. 독신 근로자, 세전 월 300만 원, 그중 20만 원은 비과세 식대, 부양가족은 본인 1명, 자녀 없음. 과세 기준은 280만 원입니다. 4대보험이 약 26만 3천 원을 가져갑니다(국민연금 126,000원, 건강보험 99,260원, 장기요양 약 12,850원, 고용보험 25,200원). 간이 논리로 계산한 소득세는 3만 원 안팎에 지방소득세가 그 10분의 1을 더합니다. 이 소득 구간에서는 근로소득공제와 세액공제가 부담 대부분을 흡수하기 때문에 소박한 수준입니다. 실수령액은 약 267만 원, 세전의 대략 89%로 나옵니다. 이 패턴은 일반화됩니다. 300만 원 언저리에서는 격차의 대부분이 세금이 아니라 사회보험이고, 800만~1,000만 원으로 올라가면 누진 소득세가 보험료를 제치고 지배적인 공제가 되며 연금 항목은 상한에서 얼어붙습니다.

같은 기계 장치가 이름표만 바꿔 어디서나 돌아갑니다. 미국 급여명세서에는 FICA(임금 상한이 있는 사회보장세 6.2%와 메디케어 1.45%)가 W-4 서식에 따른 연방·주 원천징수와 나란히 찍힙니다. 일본은 사회보험(건강보험, 근로자 부담 9.15%의 후생연금, 고용보험)과 원천 소득세를 떼고 회사의 연말조정으로 정산하는데, 이것이 한국 연말정산의 직계 조상입니다. 독일의 근로소득세에 약 20%의 근로자 사회보험료가 더해져 OECD 최대급의 격차를 만듭니다. 모든 나라를 관통하는 교훈은 같습니다. 협상은 세전으로 하되, 생활 예산은 세후로 짜세요.

끝으로 이 페이지의 분수를 지키겠습니다. 이것은 거의 해마다 바뀌는 요율의 스냅숏을 쓰는 교육용 추정기이며, 당신의 연장근로 규정, 상여금, 연말정산 공제까지 볼 수는 없습니다. 이직 제안, 대출 심사, 비자 소득 요건처럼 중요한 결정이라면 국세청 공식 계산기나 세무사 같은 전문가에게 확인하세요.`,
				ja: `一つのケースを最後まで歩いてみましょう。単身の労働者、額面月300万ウォン、うち20万ウォンは非課税の食事手当、扶養家族は本人1名、子どもなし。課税ベースは280万ウォンです。4大保険が約26万3千ウォンを持っていきます（国民年金126,000ウォン、健康保険99,260ウォン、長期療養約12,850ウォン、雇用保険25,200ウォン）。簡易ロジックで計算した所得税は3万ウォン前後で、地方所得税がその10分の1を加えます。この所得帯では勤労所得控除と税額控除が負担の大部分を吸収するため、控えめな水準です。手取りは約267万ウォン、額面のおよそ89%になります。このパターンは一般化できます。300万ウォン前後ではくさびの大部分は税金ではなく社会保険であり、800万〜1,000万ウォンへ上がると累進所得税が保険料を追い越して支配的な控除になり、年金の行は上限で凍りつきます。

同じ機械装置が、ラベルを替えて世界中で動いています。米国の給与明細にはFICA（賃金上限付きの社会保障税6.2%とメディケア1.45%）が、W-4様式に基づく連邦・州の源泉徴収と並んで印字されます。日本は社会保険（健康保険、労働者負担9.15%の厚生年金、雇用保険）と源泉所得税を控除し、会社の年末調整で精算します。これは韓国の年末精算の直系の祖先です。ドイツの賃金税に約20%の労働者社会保険料が加わり、OECD最大級のくさびを生みます。すべての国を貫く教訓は同じです。交渉は額面で、生活の予算は手取りで。

最後に、このページの分をわきまえておきます。これはほぼ毎年変わる料率のスナップショットを使う教育用の見積もりツールであり、あなたの残業規定、賞与、年末調整の控除までは見えません。転職オファー、ローン審査、ビザの所得要件のような重要な決定では、国税庁の公式計算機や税理士などの専門家に確認してください。`,
				zh: `把一个案例从头走到尾。单身雇员，税前月薪300万韩元，其中20万是非课税餐补，被扶养人1名（本人），无子女。应税基数为280万。四大保险拿走约26.3万韩元（年金126,000、健康保险99,260、长期护理约12,850、雇佣保险25,200）。按简化逻辑算出的所得税在3万韩元上下，地方所得税再加其十分之一——数额不大，因为在这个收入档，勤劳所得扣除和税额抵免吸收了大部分税负。到手约267万韩元，约为税前的89%。这个模式可以推广：在300万左右，楔子的大头是社保而非税；升到800万–1000万时，累进所得税就会超过保险费成为最大扣除项，而年金一栏则冻结在缴费上限上。

同一套机器换个标签在全世界运转。美国工资单上是FICA（有工资上限的6.2%社会保障税加1.45%医疗保险税），旁边是按W-4表驱动的联邦和州预扣税。日本扣除社会保险（健康保险、雇员负担9.15%的厚生年金、雇佣保险）加源泉所得税，由雇主的年末调整来结算——那正是韩国年末精算的直系祖先。德国的工资税加上约20%的雇员社保，造就了OECD最大的楔子之一。贯穿所有国家的教训相同：谈判谈税前，过日子按税后。

最后，让本页守好本分：它是一个教育用途的估算器，使用的是几乎年年变动的费率快照，也看不到你的加班规则、奖金和年末扣除项。凡是要紧的决定——一份offer、一笔贷款申请、签证的收入要求——请以国税厅官方计算器或持牌税务师的核算为准。`
			},
			code: {
				example: `Worked example: single, 3,000,000 gross, 200,000 non-taxable

  taxable base                  2,800,000
  national pension    4.5%       -126,000
  health insurance    3.545%      -99,260
  long-term care      12.95% of h -12,850
  employment ins.     0.9%        -25,200
  income tax (simplified table)  ~-30,000
  local income tax    10% of tax  ~-3,000
  ---------------------------------------
  net pay                      ~2,670,000  (~89% of gross)

Same idea, other countries (employee side, approx.):
  US    FICA 7.65% + federal/state withholding (W-4)
  Japan shakai hoken ~14-15% + withheld tax (nenmatsu chosei)
  Germany ~20% social + Lohnsteuer

Estimates only - rates change yearly; confirm with the
National Tax Service (hometax) or a licensed tax professional.`
			}
		}
	];

	const toolContent = {
		about: {
			en: 'A Korean salary calculator for 2026 that converts your gross monthly pay into estimated take-home pay. It deducts the four major social insurance contributions (national pension, health, long-term care, employment) plus income tax and local income tax, accounting for dependents and children. Provided for educational purposes only — not financial, tax, or legal advice.',
			ko: '2026년 기준 한국 급여 계산기입니다. 월 총급여(세전)에서 4대보험(국민연금, 건강보험, 장기요양, 고용보험)과 근로소득세, 지방소득세를 공제해 실수령액을 추정합니다. 부양가족 수와 20세 이하 자녀 수에 따른 인적공제와 자녀세액공제도 반영합니다. 본 도구는 교육 목적의 정보 제공이며 금융·세무·법률 자문이 아닙니다.',
			ja: '2026年基準の韓国給与計算機です。月額総支給額から国民年金・健康保険・長期療養保険・雇用保険、所得税、地方所得税を控除して手取り額を推定します。扶養家族数や20歳以下の子女数に応じた人的控除・子女税額控除も反映します。本ツールは教育目的の情報提供であり、金融・税務・法律助言ではありません。',
			zh: '2026 年韩国工资计算器。从月度税前收入中扣除四大社会保险（国民年金、健康保险、长期护理保险、雇佣保险）以及综合所得税与地方所得税，估算实际到手工资。同时考虑赡养家属和 20 岁以下子女的扣除项目。本工具仅供教育参考，不构成金融、税务或法律建议。'
		},
		howTo: {
			en: [
				'Enter your gross monthly salary in KRW.',
				'Set the non-taxable portion (e.g., meal allowance up to ₩200,000).',
				'Set the number of dependents (yourself counts as 1).',
				'Set the number of children under 20 for the child tax credit.',
				'Read the net (take-home) salary and the deduction breakdown.'
			],
			ko: [
				'세전 월급(원)을 입력합니다.',
				'비과세 항목(식대 등 최대 20만 원) 금액을 입력합니다.',
				'부양가족 수를 입력합니다(본인 포함 1명).',
				'20세 이하 자녀 수를 입력해 자녀세액공제를 반영합니다.',
				'실수령액과 항목별 공제 내역을 확인합니다.'
			],
			ja: [
				'税引前の月給（ウォン）を入力します。',
				'非課税項目（食事手当など最大20万ウォン）を入力します。',
				'扶養家族数を入力します（本人を含めて1名以上）。',
				'20歳以下の子女数を入力すると子女税額控除が反映されます。',
				'手取り額と控除内訳を確認します。'
			],
			zh: [
				'输入税前月薪（韩元）。',
				'输入非课税部分（如餐补最高 20 万韩元）。',
				'输入赡养家属人数（包含本人）。',
				'输入 20 岁以下子女数以适用子女税额扣除。',
				'查看实际到手工资及各项扣除明细。'
			]
		},
		useCases: {
			en: [
				'Estimating take-home pay before accepting a Korean job offer.',
				'Checking how a raise actually affects your monthly cash.',
				'Comparing salary structures with and without meal allowances.',
				'Planning a family budget around a known net income.',
				'Verifying your payslip against the standard deduction rates.'
			],
			ko: [
				'이직 제안을 받았을 때 실수령액 추정.',
				'연봉 인상이 실제 월 실수령액에 미치는 영향 확인.',
				'식대 비과세 적용 여부에 따른 차이 비교.',
				'실수령액 기준 가계 예산 계획.',
				'급여명세서의 공제 항목을 표준 요율과 대조.'
			],
			ja: [
				'転職オファー時の手取り額試算。',
				'昇給が実際の手取りにどう影響するかを確認。',
				'食事手当の有無による給与構造の比較。',
				'手取りベースでの家計予算計画。',
				'給与明細の控除項目を標準料率と照合。'
			],
			zh: [
				'接受韩国职位前估算实际到手工资。',
				'查看加薪后月度现金的实际变化。',
				'比较是否包含餐补的薪资结构。',
				'按净收入规划家庭预算。',
				'核对工资单上的扣除项目是否合理。'
			]
		},
		faq: {
			en: [
				{ q: 'Are these the latest 2026 rates?', a: 'Yes, but Korean social insurance rates can change mid-year via government notice. Verify with the National Tax Service or 4대보험 사이트 for the latest values.' },
				{ q: 'Why does my actual payslip differ slightly?', a: 'Year-end tax settlement, additional deductions (insurance, donations, housing), and bonus rules can shift the monthly tax. This tool gives a baseline estimate.' },
				{ q: 'Does this support self-employed or freelance taxes?', a: 'No. The calculator targets salaried workers under the standard payroll system. Self-employed taxes use different forms.' },
				{ q: 'Is this legal or tax advice?', a: 'No. Always consult a licensed tax accountant (세무사) or your HR department for binding figures.' }
			],
			ko: [
				{ q: '2026년 최신 요율이 맞나요?', a: '네, 다만 4대보험 요율은 연중 고시로 바뀔 수 있습니다. 정확한 값은 국세청이나 4대보험 사이트에서 확인하세요.' },
				{ q: '실제 급여명세서와 약간 다릅니다.', a: '연말정산, 추가 소득공제(보험·기부·주택), 상여 규정 등이 매월 세금에 영향을 줍니다. 이 도구는 표준 추정치를 제공합니다.' },
				{ q: '프리랜서나 사업소득도 계산되나요?', a: '아닙니다. 이 도구는 근로소득자(직장인) 기준입니다. 사업소득은 별도 신고 양식과 세율을 따릅니다.' },
				{ q: '이 결과가 법률·세무 자문인가요?', a: '아닙니다. 정확한 금액은 세무사나 회사 인사팀에 확인하세요.' }
			]
		},
		related: [
			{ href: '/tax-calculator', label: { en: 'Tax Calculator', ko: '세금 계산기', ja: '税金計算機', zh: '税金计算器' } },
			{ href: '/career-calculator', label: { en: 'Career Calculator', ko: '경력 계산기', ja: 'キャリア計算機', zh: '工龄计算器' } },
			{ href: '/loan-calculator', label: { en: 'Loan Calculator', ko: '대출 계산기', ja: 'ローン計算機', zh: '贷款计算器' } }
		],
		externalRefs: [
			{ href: 'https://www.bls.gov/oes/', label: 'BLS: Occupational Employment Statistics' },
			{ href: 'https://www.investopedia.com/terms/s/salary.asp', label: 'Investopedia: Salary' }
		]
	};

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let monthlySalary = 3000000;
	let nonTaxableAmount = 200000;
	let dependents = 1;
	let childrenUnder20 = 0;

	// 2026 Korean social insurance rates (employee portion)
	const NATIONAL_PENSION_RATE = 0.045;
	const NATIONAL_PENSION_MONTHLY_CAP = 5900000;
	const HEALTH_INSURANCE_RATE = 0.03545;
	const LONG_TERM_CARE_RATE = 0.1295; // of health insurance
	const EMPLOYMENT_INSURANCE_RATE = 0.009;

	$: taxableIncome = Math.max(0, monthlySalary - nonTaxableAmount);

	// National Pension (capped)
	$: nationalPension = Math.round(Math.min(taxableIncome, NATIONAL_PENSION_MONTHLY_CAP) * NATIONAL_PENSION_RATE);

	// Health Insurance
	$: healthInsurance = Math.round(taxableIncome * HEALTH_INSURANCE_RATE);

	// Long-term Care Insurance
	$: longTermCare = Math.round(healthInsurance * LONG_TERM_CARE_RATE);

	// Employment Insurance
	$: employmentInsurance = Math.round(taxableIncome * EMPLOYMENT_INSURANCE_RATE);

	// Income Tax calculation (simplified bracket method)
	$: incomeTax = calculateIncomeTax(taxableIncome, dependents, childrenUnder20);

	// Local Income Tax (10% of income tax)
	$: localIncomeTax = Math.round(incomeTax * 0.1);

	// Totals
	$: totalDeductions = nationalPension + healthInsurance + longTermCare + employmentInsurance + incomeTax + localIncomeTax;
	$: netSalary = monthlySalary - totalDeductions;

	// Ratio for chart
	$: netRatio = monthlySalary > 0 ? (netSalary / monthlySalary) * 100 : 100;
	$: deductionRatio = monthlySalary > 0 ? (totalDeductions / monthlySalary) * 100 : 0;

	function calculateIncomeTax(monthlyTaxable: number, deps: number, children: number): number {
		if (monthlyTaxable <= 0) return 0;

		// Annual gross salary
		const annualGross = monthlyTaxable * 12;

		// 근로소득공제 (Earned Income Deduction)
		let earnedIncomeDeduction = 0;
		if (annualGross <= 5000000) {
			earnedIncomeDeduction = annualGross * 0.7;
		} else if (annualGross <= 15000000) {
			earnedIncomeDeduction = 3500000 + (annualGross - 5000000) * 0.4;
		} else if (annualGross <= 45000000) {
			earnedIncomeDeduction = 7500000 + (annualGross - 15000000) * 0.15;
		} else if (annualGross <= 100000000) {
			earnedIncomeDeduction = 12000000 + (annualGross - 45000000) * 0.05;
		} else {
			earnedIncomeDeduction = 14750000 + (annualGross - 100000000) * 0.02;
		}

		const earnedIncome = annualGross - earnedIncomeDeduction;

		// 인적공제 (Personal Exemption): 1인당 150만원
		const personalExemption = deps * 1500000;

		// 국민연금 공제
		const annualPension = nationalPension * 12;

		// 과세표준
		const taxBase = Math.max(0, earnedIncome - personalExemption - annualPension);

		// 산출세액 (Tax brackets)
		let calculatedTax = 0;
		if (taxBase <= 14000000) {
			calculatedTax = taxBase * 0.06;
		} else if (taxBase <= 50000000) {
			calculatedTax = 840000 + (taxBase - 14000000) * 0.15;
		} else if (taxBase <= 88000000) {
			calculatedTax = 6240000 + (taxBase - 50000000) * 0.24;
		} else if (taxBase <= 150000000) {
			calculatedTax = 15360000 + (taxBase - 88000000) * 0.35;
		} else if (taxBase <= 300000000) {
			calculatedTax = 37060000 + (taxBase - 150000000) * 0.38;
		} else if (taxBase <= 500000000) {
			calculatedTax = 94060000 + (taxBase - 300000000) * 0.40;
		} else if (taxBase <= 1000000000) {
			calculatedTax = 174060000 + (taxBase - 500000000) * 0.42;
		} else {
			calculatedTax = 384060000 + (taxBase - 1000000000) * 0.45;
		}

		// 근로소득세액공제 (Earned Income Tax Credit)
		let taxCredit = 0;
		if (calculatedTax <= 1300000) {
			taxCredit = calculatedTax * 0.55;
		} else {
			taxCredit = 715000 + (calculatedTax - 1300000) * 0.30;
		}
		// Cap
		if (annualGross <= 33000000) {
			taxCredit = Math.min(taxCredit, 740000);
		} else if (annualGross <= 70000000) {
			taxCredit = Math.min(taxCredit, 660000);
		} else {
			taxCredit = Math.min(taxCredit, 500000);
		}

		// 자녀세액공제 (Child Tax Credit)
		let childCredit = 0;
		if (children === 1) childCredit = 150000;
		else if (children === 2) childCredit = 350000;
		else if (children >= 3) childCredit = 350000 + (children - 2) * 300000;

		const annualTax = Math.max(0, calculatedTax - taxCredit - childCredit);
		return Math.round(annualTax / 12);
	}

	function formatKRW(amount: number): string {
		return amount.toLocaleString('ko-KR');
	}

	// SEO structured data
	$: jsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		name: t('salary.title'),
		description: t('salary.seoDesc'),
		url: `https://sd.gy/${lang}/salary-calculator`,
		applicationCategory: 'FinanceApplication',
		operatingSystem: 'Any',
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'USD'
		}
	});
</script>

<svelte:head>
	<title>{t('salary.title')} - SD.gy</title>
	<meta name="description" content={t('salary.seoDesc')} />
	<meta name="keywords" content={t('salary.seoKeywords')} />
	<link rel="canonical" href="https://sd.gy/{lang}/salary-calculator" />
	<meta property="og:title" content="{t('salary.title')} - SD.gy" />
	<meta property="og:description" content={t('salary.seoDesc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/salary-calculator" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('salary.title')} - SD.gy" />
	<meta name="twitter:description" content={t('salary.seoDesc')} />
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('salary.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('salary.desc')}</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<!-- Input Section -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<div class="space-y-5">
				<!-- Monthly Salary -->
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('salary.monthlySalary')} ({t('salary.currency')})</label>
					<input
						type="number"
						bind:value={monthlySalary}
						min="0"
						step="100000"
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
					<input
						type="range"
						bind:value={monthlySalary}
						min="1000000"
						max="20000000"
						step="100000"
						class="w-full mt-2 accent-violet-500"
					/>
					<div class="text-sm text-gray-500 dark:text-dark-400 mt-1">{formatKRW(monthlySalary)}{t('salary.currency')}</div>
				</div>

				<!-- Non-taxable Amount -->
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('salary.nonTaxable')} ({t('salary.currency')})</label>
					<input
						type="number"
						bind:value={nonTaxableAmount}
						min="0"
						step="10000"
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
					<input
						type="range"
						bind:value={nonTaxableAmount}
						min="0"
						max="500000"
						step="10000"
						class="w-full mt-2 accent-violet-500"
					/>
				</div>

				<!-- Dependents -->
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('salary.dependents')}</label>
					<input
						type="number"
						bind:value={dependents}
						min="1"
						max="20"
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>

				<!-- Children under 20 -->
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('salary.children')}</label>
					<input
						type="number"
						bind:value={childrenUnder20}
						min="0"
						max="20"
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>
			</div>
		</div>

		<!-- Results Section -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<div class="space-y-4">
				<!-- Net Salary Highlight -->
				<div class="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-5">
					<div class="text-sm text-gray-600 dark:text-dark-400">{t('salary.netSalary')}</div>
					<div class="text-4xl font-bold text-violet-600 dark:text-violet-400">{formatKRW(netSalary)}<span class="text-lg ml-1">{t('salary.currency')}</span></div>
				</div>

				<!-- Deduction Breakdown -->
				<div class="space-y-2">
					<div class="flex justify-between text-sm py-1.5 border-b border-gray-100 dark:border-dark-700">
						<span class="text-gray-600 dark:text-dark-400">{t('salary.nationalPension')}</span>
						<span class="text-gray-900 dark:text-dark-100 font-medium">{formatKRW(nationalPension)}{t('salary.currency')}</span>
					</div>
					<div class="flex justify-between text-sm py-1.5 border-b border-gray-100 dark:border-dark-700">
						<span class="text-gray-600 dark:text-dark-400">{t('salary.healthInsurance')}</span>
						<span class="text-gray-900 dark:text-dark-100 font-medium">{formatKRW(healthInsurance)}{t('salary.currency')}</span>
					</div>
					<div class="flex justify-between text-sm py-1.5 border-b border-gray-100 dark:border-dark-700">
						<span class="text-gray-600 dark:text-dark-400">{t('salary.longTermCare')}</span>
						<span class="text-gray-900 dark:text-dark-100 font-medium">{formatKRW(longTermCare)}{t('salary.currency')}</span>
					</div>
					<div class="flex justify-between text-sm py-1.5 border-b border-gray-100 dark:border-dark-700">
						<span class="text-gray-600 dark:text-dark-400">{t('salary.employmentInsurance')}</span>
						<span class="text-gray-900 dark:text-dark-100 font-medium">{formatKRW(employmentInsurance)}{t('salary.currency')}</span>
					</div>
					<div class="flex justify-between text-sm py-1.5 border-b border-gray-100 dark:border-dark-700">
						<span class="text-gray-600 dark:text-dark-400">{t('salary.incomeTax')}</span>
						<span class="text-gray-900 dark:text-dark-100 font-medium">{formatKRW(incomeTax)}{t('salary.currency')}</span>
					</div>
					<div class="flex justify-between text-sm py-1.5 border-b border-gray-100 dark:border-dark-700">
						<span class="text-gray-600 dark:text-dark-400">{t('salary.localIncomeTax')}</span>
						<span class="text-gray-900 dark:text-dark-100 font-medium">{formatKRW(localIncomeTax)}{t('salary.currency')}</span>
					</div>
					<div class="flex justify-between text-sm py-2 font-bold">
						<span class="text-red-600 dark:text-red-400">{t('salary.totalDeductions')}</span>
						<span class="text-red-600 dark:text-red-400">{formatKRW(totalDeductions)}{t('salary.currency')}</span>
					</div>
				</div>

				<!-- Ratio Bar -->
				<div class="bg-gray-50 dark:bg-dark-700 rounded-xl p-4">
					<div class="flex h-4 rounded-full overflow-hidden">
						<div
							class="bg-violet-500"
							style="width: {netRatio}%"
						></div>
						<div
							class="bg-red-400"
							style="width: {deductionRatio}%"
						></div>
					</div>
					<div class="flex justify-between text-xs mt-2">
						<span class="text-violet-600 dark:text-violet-400">{t('salary.netSalary')}: {netRatio.toFixed(1)}%</span>
						<span class="text-red-600 dark:text-red-400">{t('salary.deductions')}: {deductionRatio.toFixed(1)}%</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Info Section for SEO -->
	<div class="mt-6 bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
		<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-3">{t('salary.infoTitle')}</h2>
		<div class="text-sm text-gray-600 dark:text-dark-400 space-y-2">
			<p>{t('salary.infoText1')}</p>
			<div class="overflow-x-auto mt-3">
				<table class="w-full text-sm">
					<thead>
						<tr class="border-b border-gray-200 dark:border-dark-600">
							<th class="py-2 px-3 text-left text-gray-600 dark:text-dark-400">{t('salary.item')}</th>
							<th class="py-2 px-3 text-right text-gray-600 dark:text-dark-400">{t('salary.rate')}</th>
						</tr>
					</thead>
					<tbody>
						<tr class="border-b border-gray-100 dark:border-dark-700">
							<td class="py-2 px-3">{t('salary.nationalPension')}</td>
							<td class="py-2 px-3 text-right">4.5%</td>
						</tr>
						<tr class="border-b border-gray-100 dark:border-dark-700">
							<td class="py-2 px-3">{t('salary.healthInsurance')}</td>
							<td class="py-2 px-3 text-right">3.545%</td>
						</tr>
						<tr class="border-b border-gray-100 dark:border-dark-700">
							<td class="py-2 px-3">{t('salary.longTermCare')}</td>
							<td class="py-2 px-3 text-right">{t('salary.longTermCareRate')}</td>
						</tr>
						<tr class="border-b border-gray-100 dark:border-dark-700">
							<td class="py-2 px-3">{t('salary.employmentInsurance')}</td>
							<td class="py-2 px-3 text-right">0.9%</td>
						</tr>
						<tr class="border-b border-gray-100 dark:border-dark-700">
							<td class="py-2 px-3">{t('salary.incomeTax')}</td>
							<td class="py-2 px-3 text-right">{t('salary.incomeTaxRate')}</td>
						</tr>
						<tr class="border-b border-gray-100 dark:border-dark-700">
							<td class="py-2 px-3">{t('salary.localIncomeTax')}</td>
							<td class="py-2 px-3 text-right">{t('salary.localIncomeTaxRate')}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p class="mt-3 text-xs text-gray-500 dark:text-dark-500">{t('salary.disclaimer')}</p>
		</div>
	</div>

	<ToolContent
		{lang}
		toolName="Salary Calculator"
		toolUrl="https://sd.gy/{lang}/salary-calculator"
		lastUpdated="2026-04-30"
		category="Daily Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sd.gy/${lang}` },
			{ name: 'Tools', url: `https://sd.gy/${lang}` },
			{ name: 'Salary Calculator', url: `https://sd.gy/${lang}/salary-calculator` }
		]}
		content={toolContent}
	/>

	<ToolGuide {lang} sections={guideSections} />
</div>
