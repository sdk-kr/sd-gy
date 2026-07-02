<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'How Progressive Brackets Actually Work: A $60,000 Walkthrough',
				ko: '누진세는 실제로 어떻게 계산되나 — 6만 달러로 따라가 보기',
				ja: '累進課税は実際どう計算されるのか — 6万ドルで追ってみる',
				zh: '累进税率到底怎么算：以 6 万美元逐步演算'
			},
			body: {
				en: `A progressive income tax does not apply a single rate to your entire income. Instead, the tax authority slices your taxable income into brackets, and each slice is taxed at its own rate. Only the portion of income that falls inside a bracket pays that bracket's rate — the dollars below it keep their lower rates forever.

Walk through a concrete case using the 2024 US federal brackets for a single filer with 60,000 dollars of taxable income. The first 11,600 dollars is taxed at 10 percent, producing 1,160. The next slice, from 11,600 up to 47,150 — that is 35,550 dollars — is taxed at 12 percent, producing 4,266. Only the final slice, from 47,150 up to 60,000 — 12,850 dollars — reaches the 22 percent rate, producing 2,827. The total is 8,253 dollars.

Notice what did not happen: the whole 60,000 was never multiplied by 22 percent, which would have given 13,200 — an overstatement of almost 5,000 dollars. Being "in the 22 percent bracket" only describes the rate on your last slice of income, not on all of it. Divide the real tax (8,253) by total income (60,000) and you get 13.8 percent — the effective rate, and the number that actually describes your tax burden. This calculator performs exactly this slice-by-slice computation for the US, South Korea, and Japan, and shows both figures so you can see the gap for yourself.`,
				ko: `누진 소득세는 전체 소득에 단일 세율을 곱하는 방식이 아닙니다. 과세당국은 과세표준을 구간(과표 구간)으로 나누고, 각 구간에 해당하는 금액에만 그 구간의 세율을 적용합니다. 아래 구간에 속하는 금액은 소득이 아무리 늘어도 계속 낮은 세율을 유지합니다.

2024년 미국 연방 세율(단독 신고자)로 과세소득 60,000달러를 따라가 봅시다. 처음 11,600달러에는 10%가 적용되어 1,160달러입니다. 다음 구간인 11,600~47,150달러, 즉 35,550달러에는 12%가 적용되어 4,266달러입니다. 마지막 구간인 47,150~60,000달러의 12,850달러만 22% 세율에 도달해 2,827달러가 됩니다. 합계는 8,253달러입니다.

여기서 일어나지 않은 일에 주목하세요. 60,000달러 전체에 22%를 곱하지 않았다는 점입니다. 그렇게 계산했다면 13,200달러로, 실제보다 거의 5,000달러나 과대평가됩니다. "22% 구간에 속한다"는 말은 마지막 소득 구간에 적용되는 세율을 뜻할 뿐, 소득 전체의 세율이 아닙니다. 실제 세액(8,253)을 총소득(60,000)으로 나누면 13.8% — 이것이 실효세율이며, 실제 세부담을 설명하는 숫자입니다. 이 계산기는 미국·한국·일본에 대해 정확히 이 구간별 계산을 수행하고 두 수치를 모두 보여 주므로 그 차이를 직접 확인할 수 있습니다.`,
				ja: `累進所得税は、所得全体に単一の税率を掛ける仕組みではありません。課税当局は課税所得を段階（ブラケット）に区切り、それぞれの段階に入る金額にだけ、その段階の税率を適用します。下の段階に属する金額は、所得がいくら増えてもずっと低い税率のままです。

2024年の米国連邦税率（単身申告）で、課税所得60,000ドルを追ってみましょう。最初の11,600ドルには10％が適用され1,160ドル。次の11,600〜47,150ドルの区間、つまり35,550ドルには12％が適用され4,266ドル。最後の47,150〜60,000ドルの12,850ドルだけが22％に達し、2,827ドルになります。合計は8,253ドルです。

ここで起きなかったことに注目してください。60,000ドル全体に22％を掛けてはいません。そうすると13,200ドルとなり、実際より約5,000ドルも過大になります。「22％のブラケットにいる」とは、所得の最後の一区切りに適用される税率のことであって、所得全体の税率ではありません。実際の税額（8,253）を総所得（60,000）で割ると13.8％ — これが実効税率であり、実際の税負担を表す数字です。この計算機は米国・韓国・日本についてまさにこの区間ごとの計算を行い、両方の数値を表示するので、その差を自分の目で確かめられます。`,
				zh: `累进所得税并不是把一个税率套在你的全部收入上。税务机关会把应税所得切成若干级距，每一段只按该段自己的税率征税——落在低级距里的那部分钱，无论收入涨到多高，都永远保持低税率。

用 2024 年美国联邦税率（单身申报）算一笔应税所得 60,000 美元的账。最初的 11,600 美元按 10% 征税，得 1,160；接下来 11,600 到 47,150 美元这一段，即 35,550 美元，按 12% 征税，得 4,266；只有最后一段 47,150 到 60,000 美元的 12,850 美元才触及 22% 税率，得 2,827。合计 8,253 美元。

请注意什么事没有发生：60,000 美元从来没有整体乘以 22%——那样会得到 13,200，比实际多算了将近 5,000 美元。"处于 22% 税档"只描述你最后一段收入的税率，而不是全部收入的税率。用实际税款（8,253）除以总收入（60,000），得到 13.8%——这才是实际税率，也是真正描述税负的数字。本计算器对美国、韩国、日本执行的正是这种逐段计算，并同时显示两个数字，让你亲眼看到差距。`
			},
			code: {
				example: `US 2024 single filer, taxable income $60,000:

  Slice 1:      0 - 11,600  ->  11,600 x 10% = 1,160
  Slice 2: 11,600 - 47,150  ->  35,550 x 12% = 4,266
  Slice 3: 47,150 - 60,000  ->  12,850 x 22% = 2,827
                                -----------------
  Total tax                                  = 8,253

  Wrong (flat 22% on everything): 60,000 x 22% = 13,200
  Marginal rate  = 22%   (rate on the NEXT dollar)
  Effective rate = 8,253 / 60,000 = 13.8%`
			}
		},
		{
			heading: {
				en: 'The Bracket Myth: Why a Raise Can Never Shrink Your Paycheck',
				ko: '세율 구간에 대한 오해 — 연봉 인상으로 실수령액이 줄어들 수 없는 이유',
				ja: 'ブラケットの誤解 — 昇給で手取りが減ることはあり得ない理由',
				zh: '税档迷思：为什么加薪永远不会让到手工资变少'
			},
			body: {
				en: `One of the most persistent money myths goes: "Don't take that raise — it will push you into a higher bracket and you'll take home less." Under a marginal bracket system, this is mathematically impossible. Crossing a bracket threshold changes the rate only on the dollars above the threshold, never on the dollars below it.

Run the numbers. A US single filer earning 47,000 dollars of taxable income sits just below the 22 percent threshold at 47,150. A 1,000-dollar raise moves them to 48,000. The first 150 dollars of that raise is still taxed at 12 percent (18 dollars); only the remaining 850 dollars is taxed at 22 percent (187 dollars). Total extra tax: 205 dollars. Take-home from the raise: 795 dollars — decidedly positive. There is no income level at which earning one more dollar costs you more than one dollar in income tax.

Where does the myth come from? Real cliff effects do exist — just not in the bracket table. Means-tested benefits can vanish abruptly: health-insurance subsidies, childcare support, housing assistance, and student-aid formulas often use hard income cutoffs where one extra dollar of income eliminates hundreds or thousands in benefits. Economists call the combined effect the implicit marginal tax rate, and near certain thresholds it can genuinely exceed 100 percent. If you are near such a cutoff, the thing to check is the benefit rule, not the tax bracket. The income tax itself is always smooth: each bracket applies only to its own slice.`,
				ko: `가장 끈질긴 돈 관련 속설 중 하나가 이것입니다. "연봉 인상 받지 마세요. 세율 구간이 올라가서 실수령액이 오히려 줄어요." 한계세율 구간 방식에서 이것은 수학적으로 불가능합니다. 구간 경계를 넘어도 세율이 바뀌는 것은 경계 위의 금액뿐이고, 경계 아래의 금액에는 절대 영향이 없습니다.

숫자로 확인해 봅시다. 과세소득 47,000달러인 미국 단독 신고자는 22% 구간 경계인 47,150달러 바로 아래에 있습니다. 1,000달러 인상으로 48,000달러가 되면, 인상분 중 처음 150달러는 여전히 12%(18달러)로 과세되고, 나머지 850달러만 22%(187달러)로 과세됩니다. 추가 세금 합계는 205달러, 인상분의 실수령액은 795달러 — 분명한 플러스입니다. 1달러를 더 벌었을 때 소득세가 1달러 넘게 늘어나는 소득 수준은 존재하지 않습니다.

그럼 이 속설은 어디서 왔을까요? 실제 '절벽 효과'는 존재합니다. 다만 세율표가 아니라 다른 곳에 있습니다. 소득 기준 복지 혜택은 갑자기 사라질 수 있습니다. 건강보험 보조금, 보육 지원, 주거 지원, 학자금 지원 산식은 소득이 1원만 넘어도 수십·수백만 원의 혜택이 없어지는 경성 컷오프를 쓰는 경우가 많습니다. 경제학자들은 이 결합 효과를 암묵적 한계세율이라 부르며, 특정 경계 근처에서는 실제로 100%를 넘을 수 있습니다. 그런 컷오프 근처에 있다면 확인할 것은 세율 구간이 아니라 해당 혜택의 규정입니다. 소득세 자체는 항상 매끄럽게 움직입니다. 각 구간은 자기 몫의 조각에만 적용되니까요.`,
				ja: `最もしつこいお金の俗説の一つがこれです。「昇給は受けるな。税率の段階が上がって手取りがかえって減るぞ」。限界税率方式では、これは数学的に不可能です。ブラケットの境界を越えても、税率が変わるのは境界より上の金額だけで、下の金額には一切影響しません。

数字で確かめましょう。課税所得47,000ドルの米国単身申告者は、22％の境界である47,150ドルのすぐ下にいます。1,000ドルの昇給で48,000ドルになると、昇給分のうち最初の150ドルは引き続き12％（18ドル）で課税され、残りの850ドルだけが22％（187ドル）で課税されます。追加の税金は合計205ドル、昇給分の手取りは795ドル — 明らかにプラスです。1ドル多く稼ぐと所得税が1ドル以上増える所得水準は存在しません。

では俗説はどこから来たのでしょうか。本物の「崖効果」は存在します。ただし税率表の中ではありません。所得制限つきの給付は突然消えることがあります。医療保険の補助、保育支援、住宅補助、奨学金の算定式は、所得が1ドル超えただけで数百〜数千ドルの給付が消える硬直的な足切りを使うことが少なくありません。経済学者はこの複合効果を暗黙の限界税率と呼び、特定の境界付近では本当に100％を超えることがあります。そうした足切りの近くにいるなら、確認すべきは給付の規定であって税率の段階ではありません。所得税そのものは常に滑らかで、各ブラケットは自分の取り分にしか適用されません。`,
				zh: `流传最广的理财谣言之一是："别接受加薪——你会被推进更高的税档，到手反而更少。"在边际税率制度下，这在数学上是不可能的。跨过税档门槛，只改变门槛以上那部分钱的税率，门槛以下的钱丝毫不受影响。

算一笔账。一位应税所得 47,000 美元的美国单身申报者，正好在 22% 税档门槛 47,150 美元下方。加薪 1,000 美元后达到 48,000：加薪中的前 150 美元仍按 12% 征税（18 美元），只有剩余 850 美元按 22% 征税（187 美元）。额外税款合计 205 美元，加薪到手 795 美元——明明白白的正数。不存在任何一个收入水平，会让你多挣 1 美元却多缴超过 1 美元的所得税。

那谣言从何而来？真正的"悬崖效应"确实存在——只是不在税率表里。按收入审查的福利可能骤然消失：医保补贴、育儿补助、住房援助、助学金公式常常使用硬性收入线，收入多出一美元就可能损失成百上千的福利。经济学家把这种叠加效应称为隐性边际税率，在某些门槛附近确实可能超过 100%。如果你正处在这类收入线附近，该核查的是福利规则，而不是税档。所得税本身永远是平滑的：每一档只作用于属于它的那一段。`
			},
			code: {
				example: `Raise from $47,000 to $48,000 (crossing the 22% line at 47,150):

  First   150 of the raise: still 12%  ->  18 tax
  Next    850 of the raise: now  22%   -> 187 tax
                                          --------
  Extra tax on the 1,000 raise         = 205
  Extra take-home                      = 795  (never negative)

The dollars below 47,150 keep their old rates unchanged.`
			}
		},
		{
			heading: {
				en: 'Income Tax Is Only Half the Story: VAT vs Sales Tax Around the World',
				ko: '소득세는 절반의 이야기 — 세계의 부가가치세와 판매세',
				ja: '所得税は話の半分にすぎない — 世界のVATと売上税',
				zh: '所得税只是一半：世界各地的增值税与销售税'
			},
			body: {
				en: `Governments tax you twice: once when you earn (income tax, what this calculator models) and again when you spend (consumption tax). The two dominant designs behave very differently at the checkout counter.

Most of the world uses a value-added tax (VAT). It is collected in stages along the supply chain — each business charges VAT on sales and reclaims VAT paid on inputs — and, crucially for shoppers, it is baked into the sticker price. A 24.20-euro price tag in Germany already contains the 19 percent VAT. Rates vary widely: Germany 19 percent, the UK 20, France 20, Sweden 25, Hungary 27 (the highest in the EU), while South Korea and Japan sit at a comparatively gentle 10 percent, and Japan applies a reduced 8 percent to groceries.

The United States is the outlier: no national VAT, only state and local sales taxes added at the register. The shelf says 9.99 but you pay 10.88 in a 8.875 percent locality like New York City. Rates range from zero (Oregon, Delaware, Montana, New Hampshire) to combined rates above 10 percent in parts of Louisiana and Washington state.

The classic arithmetic trap is extracting tax from a tax-inclusive price. To find the pre-tax amount inside a 10-percent-inclusive 22,000, divide by 1.1 to get 20,000 — do not multiply by 0.9, which gives 19,800 and silently loses 200. The error exists because 10 percent of the smaller pre-tax base is less than 10 percent of the gross.`,
				ko: `정부는 우리에게 세금을 두 번 걷습니다. 벌 때 한 번(소득세 — 이 계산기가 다루는 것), 쓸 때 또 한 번(소비세)입니다. 두 가지 대표적인 방식은 계산대 앞에서 아주 다르게 동작합니다.

세계 대부분은 부가가치세(VAT)를 씁니다. 공급망의 각 단계에서 걷히는 세금으로 — 각 사업자는 매출에 부가세를 부과하고 매입 시 낸 부가세를 공제받습니다 — 소비자 입장에서 중요한 점은 표시 가격에 이미 포함되어 있다는 것입니다. 독일에서 24.20유로 가격표에는 19% 부가세가 이미 들어 있습니다. 세율은 나라마다 크게 다릅니다. 독일 19%, 영국 20%, 프랑스 20%, 스웨덴 25%, 헝가리 27%(EU 최고)이고, 한국과 일본은 상대적으로 낮은 10%이며 일본은 식료품에 8% 경감세율을 적용합니다.

미국은 예외입니다. 국가 단위 부가세가 없고, 계산대에서 주·지방 판매세가 추가됩니다. 진열대에는 9.99라고 쓰여 있어도 뉴욕시처럼 8.875%인 지역에서는 10.88을 냅니다. 세율은 0%(오리건, 델라웨어, 몬태나, 뉴햄프셔)부터 루이지애나·워싱턴주 일부의 10% 이상까지 다양합니다.

고전적인 계산 함정은 세금 포함 가격에서 세금을 역산하는 것입니다. 부가세 10% 포함 22,000원에서 공급가액을 구하려면 1.1로 나눠 20,000원을 얻어야 합니다. 0.9를 곱하면 19,800원이 되어 조용히 200원이 어긋납니다. 더 작은 공급가액의 10%는 총액의 10%보다 작기 때문에 생기는 오류입니다.`,
				ja: `政府は私たちに二度課税します。稼ぐとき（所得税 — この計算機が扱うもの）と、使うとき（消費課税）です。代表的な2つの方式は、レジの前でまったく違う振る舞いをします。

世界の大半は付加価値税（VAT）を使っています。サプライチェーンの各段階で徴収される税で — 各事業者は売上にVATを課し、仕入れで払ったVATの控除を受けます — 買い物客にとって重要なのは、表示価格にすでに含まれている点です。ドイツで24.20ユーロの値札には19％のVATがすでに入っています。税率は国によって大きく異なります。ドイツ19％、英国20％、フランス20％、スウェーデン25％、ハンガリー27％（EU最高）。韓国と日本は比較的低い10％で、日本は食料品に8％の軽減税率を適用しています。

米国は例外です。国レベルのVATはなく、レジで州・地方の売上税が加算されます。棚には9.99と書いてあっても、ニューヨーク市のように8.875％の地域では10.88を払います。税率はゼロ（オレゴン、デラウェア、モンタナ、ニューハンプシャー）から、ルイジアナ州やワシントン州の一部の10％超までさまざまです。

古典的な計算の罠は、税込価格から税額を逆算することです。10％税込の22,000円から税抜金額を求めるには、1.1で割って20,000円を得ます。0.9を掛けると19,800円になり、気づかぬうちに200円ずれます。小さい方の税抜ベースの10％は、総額の10％より小さいために起きる誤りです。`,
				zh: `政府会对你征两次税：挣钱时一次（所得税，即本计算器模拟的部分），花钱时再一次（消费课税）。两种主流设计在收银台前的表现截然不同。

世界大多数国家采用增值税（VAT）。它沿供应链分段征收——每个企业对销售额收取增值税，同时抵扣进项税——对消费者而言关键在于：它已经包含在标价里。在德国，24.20 欧元的价签中已含 19% 的增值税。各国税率差异很大：德国 19%、英国 20%、法国 20%、瑞典 25%、匈牙利 27%（欧盟最高）；韩国和日本则相对温和，为 10%，日本对食品适用 8% 的轻减税率。

美国是个例外：没有全国性增值税，只有在收银台加收的州和地方销售税。货架上写 9.99，在纽约市这样税率 8.875% 的地方你要付 10.88。税率从零（俄勒冈、特拉华、蒙大拿、新罕布什尔）到路易斯安那州和华盛顿州部分地区的 10% 以上不等。

经典的算术陷阱是从含税价中反推税额。要从含 10% 税的 22,000 中求出税前金额，应除以 1.1 得到 20,000——而不是乘以 0.9 得到 19,800，那样会悄悄差掉 200。错误的根源在于：较小的税前基数的 10%，少于含税总额的 10%。`
			},
			code: {
				example: `Extracting 10% VAT from a tax-inclusive price of 22,000:

  Correct:  22,000 / 1.1 = 20,000 pre-tax
            20,000 x 0.10 = 2,000 tax   (20,000 + 2,000 = 22,000 ok)

  Wrong:    22,000 x 0.9 = 19,800
            19,800 x 1.1 = 21,780       (does not rebuild 22,000!)

US-style sales tax goes the other way (added at register):
  shelf 9.99 x 1.08875 = 10.88 paid in New York City`
			}
		},
		{
			heading: {
				en: 'Korea as a Case Study: The 종합소득세 Ladder and the Flat 10% VAT',
				ko: '한국 사례로 보기 — 종합소득세 누진 구조와 10% 부가가치세',
				ja: 'ケーススタディとしての韓国 — 総合所得税の累進構造と一律10％のVAT',
				zh: '以韩国为例：综合所得税阶梯与统一 10% 增值税'
			},
			body: {
				en: `South Korea makes a tidy case study because its two main personal taxes sit at opposite ends of the design spectrum: a steeply progressive income tax and a completely flat consumption tax.

The comprehensive income tax (종합소득세) ladder used by this calculator runs through eight brackets, from 6 percent on the first 14 million won up to 45 percent on income above 1 billion won — one of the wider spans among OECD countries. Work an example: on a taxable income of 50,000,000 won, the first 14,000,000 is taxed at 6 percent (840,000 won) and the remaining 36,000,000 at 15 percent (5,400,000 won), totalling 6,240,000 won — an effective rate of about 12.5 percent, even though the taxpayer "is in the 15 percent bracket". On top of the national tax, a local income tax adds a further 10 percent of the computed income tax (not of income), effectively turning 6-to-45 percent into roughly 6.6-to-49.5 percent.

The consumption side could not be more different: a single 10 percent VAT rate, unchanged since its introduction in 1977, applied to most goods and services and always included in displayed consumer prices. Freelancers and businesses see it explicitly on tax invoices (세금계산서), splitting every transaction into 공급가액 (supply value) and 부가세 (VAT).

One caveat applies to every figure above: brackets, thresholds, deductions, and surtaxes are amended almost every year in Korea, as everywhere else. Treat these numbers as a teaching illustration, and confirm current rules with the National Tax Service or a licensed tax accountant (세무사) before filing anything.`,
				ko: `한국은 깔끔한 사례 연구 대상입니다. 개인에게 부과되는 두 가지 주요 세금이 설계 스펙트럼의 양 끝에 있기 때문입니다. 가파른 누진 구조의 소득세와 완전히 평평한 소비세가 그것입니다.

이 계산기가 사용하는 종합소득세 누진 구조는 8개 구간으로, 첫 1,400만 원에 대한 6%부터 10억 원 초과분에 대한 45%까지 이어집니다. OECD 국가 중에서도 폭이 넓은 편입니다. 예를 들어 과세표준 5,000만 원이라면, 처음 1,400만 원에 6%(84만 원), 나머지 3,600만 원에 15%(540만 원)가 적용되어 합계 624만 원 — 실효세율 약 12.5%입니다. "15% 구간"에 속해 있는데도 말이죠. 국세 위에 지방소득세가 산출된 소득세액의 10%(소득의 10%가 아님)만큼 더해져, 실질적으로 6~45%는 약 6.6~49.5%가 됩니다.

소비세 쪽은 이보다 더 다를 수 없습니다. 1977년 도입 이후 변하지 않은 단일 10% 부가가치세율이 대부분의 재화와 용역에 적용되며, 소비자 표시 가격에 항상 포함되어 있습니다. 프리랜서와 사업자는 세금계산서에서 이를 명시적으로 보게 되며, 모든 거래가 공급가액과 부가세로 나뉩니다.

위의 모든 수치에는 한 가지 단서가 붙습니다. 한국도 다른 나라처럼 구간, 기준 금액, 공제, 부가 세목이 거의 매년 개정됩니다. 이 숫자들은 교육용 예시로 받아들이고, 실제 신고 전에는 국세청 자료나 세무사를 통해 현행 규정을 반드시 확인하세요.`,
				ja: `韓国はきれいなケーススタディです。個人に課される2つの主要な税が、設計スペクトルの両端にあるからです。急勾配の累進所得税と、完全にフラットな消費税です。

この計算機が使う総合所得税の累進構造は8段階で、最初の1,400万ウォンに対する6％から、10億ウォン超に対する45％まで続きます。OECD諸国の中でも幅が広い部類です。例を計算してみましょう。課税標準5,000万ウォンなら、最初の1,400万ウォンに6％（84万ウォン）、残りの3,600万ウォンに15％（540万ウォン）が適用され、合計624万ウォン — 実効税率は約12.5％です。「15％のブラケット」にいるにもかかわらず、です。国税の上に、地方所得税が算出された所得税額の10％（所得の10％ではない）だけ加わり、実質的に6〜45％は約6.6〜49.5％になります。

消費税側はこれ以上ないほど対照的です。1977年の導入以来変わらない一律10％のVATが、ほとんどの財・サービスに適用され、消費者向け表示価格に常に含まれています。フリーランサーや事業者は税金計算書（세금계산서）で明示的にこれを目にし、すべての取引が供給価額とVATに分かれます。

上のすべての数字には一つの但し書きが付きます。韓国も他国と同じく、ブラケット、基準額、控除、付加税目がほぼ毎年改正されます。これらの数字は教材としての例示と考え、実際の申告前には国税庁の資料や税理士（韓国では세무사）で現行規定を必ず確認してください。`,
				zh: `韩国是一个干净利落的案例，因为它对个人征收的两大税种恰好位于设计光谱的两端：陡峭累进的所得税和完全平坦的消费税。

本计算器采用的综合所得税阶梯共八档，从最初 1,400 万韩元的 6%，一直到超过 10 亿韩元部分的 45%——在 OECD 国家中跨度也算大的。算个例子：应税所得 5,000 万韩元，最初 1,400 万按 6% 征税（84 万韩元），其余 3,600 万按 15% 征税（540 万韩元），合计 624 万韩元——实际税率约 12.5%，尽管纳税人"处于 15% 税档"。在国税之上，地方所得税再加征所得税额的 10%（是税额的 10%，不是收入的 10%），实际把 6% 到 45% 变成约 6.6% 到 49.5%。

消费税一侧则截然相反：单一的 10% 增值税率，自 1977 年开征以来从未变过，适用于绝大多数商品和服务，并且始终包含在面向消费者的标价中。自由职业者和企业会在税务发票（세금계산서）上明确看到它，每笔交易都拆分为供给价额和增值税。

以上所有数字都附带同一个提醒：和其他国家一样，韩国的税档、起征点、扣除项和附加税几乎每年都在修订。请把这些数字当作教学示例，实际申报前务必通过国税厅或持牌税务师（세무사）确认现行规定。`
			},
			code: {
				example: `Korea, taxable income 50,000,000 KRW (2024 brackets):

  First 14,000,000 x  6% =   840,000
  Next  36,000,000 x 15% = 5,400,000
                           ----------
  National income tax    = 6,240,000  (effective 12.5%)
  Local income tax (+10% of the tax) =   624,000
  Combined               = 6,864,000  (~13.7% of income)

VAT side: a 22,000 KRW consumer price =
  공급가액 20,000 + 부가세 2,000 (flat 10% since 1977)`
			}
		},
		{
			heading: {
				en: 'What This Calculator Leaves Out — and Why Your Real Bill Differs',
				ko: '이 계산기가 반영하지 않는 것 — 실제 세액이 달라지는 이유',
				ja: 'この計算機が反映していないもの — 実際の税額が違ってくる理由',
				zh: '本计算器未纳入的因素——你的实际税单为何不同'
			},
			body: {
				en: `This tool answers one narrow question well: given a taxable income and a national bracket table, what does the progressive formula produce? A real tax return sits on top of many layers this page deliberately omits.

First, the input itself. The number you type here is taxable income, which is usually far below what you earn. In the US, the 2024 standard deduction alone removes 14,600 dollars for a single filer before the brackets even start; Korea and Japan apply employment income deductions, personal allowances, and pension and insurance deductions that routinely cut the taxable base by 20 to 40 percent for salaried workers. Entering your gross salary here will overstate your tax.

Second, everything after the brackets. Tax credits (child credits, earned income credits, dividend credits) subtract directly from the computed tax. Separate schedules apply to capital gains, dividends, and retirement income. Social insurance contributions — US payroll taxes of 7.65 percent, Korean four major insurances of roughly 9 percent of salary, Japanese social insurance around 15 percent — are not income tax at all yet often exceed it for middle earners. Sub-national layers (US state income taxes up to 13.3 percent in California, Japan's roughly 10 percent resident tax, Korea's 10 percent local surcharge) stack on top.

Third, time. Every figure on this page reflects one snapshot of law; parliaments adjust brackets, thresholds, and deductions almost every year, sometimes retroactively. Use this calculator to build intuition about how progressive taxation behaves — and use a licensed professional (CPA, 세무사, 税理士) for any decision with money attached.`,
				ko: `이 도구는 한 가지 좁은 질문에 정확히 답합니다. 과세표준과 국가별 세율표가 주어졌을 때 누진 공식이 내놓는 값은 얼마인가? 실제 세금 신고는 이 페이지가 의도적으로 생략한 여러 층 위에 놓여 있습니다.

첫째, 입력값 자체입니다. 여기에 입력하는 숫자는 과세표준으로, 보통 실제 버는 금액보다 훨씬 작습니다. 미국에서는 2024년 표준공제만으로 단독 신고자 기준 14,600달러가 구간 계산 전에 빠집니다. 한국과 일본은 근로소득공제, 인적공제, 연금·보험료 공제를 적용해 급여 생활자의 과세 기반을 통상 20~40% 줄입니다. 여기에 세전 연봉을 그대로 입력하면 세금이 과대 추정됩니다.

둘째, 구간 계산 이후의 모든 것입니다. 세액공제(자녀 세액공제, 근로장려금, 배당 세액공제)는 산출 세액에서 직접 차감됩니다. 양도소득, 배당, 퇴직소득에는 별도의 계산 체계가 적용됩니다. 사회보험료 — 미국 급여세 7.65%, 한국 4대 보험 약 9%, 일본 사회보험 약 15% — 는 소득세가 아니지만 중간 소득자에게는 소득세보다 큰 경우가 많습니다. 지방 단위 세금(캘리포니아 최고 13.3%의 주 소득세, 일본의 약 10% 주민세, 한국의 지방소득세 10% 가산)도 그 위에 쌓입니다.

셋째, 시간입니다. 이 페이지의 모든 숫자는 법의 한 시점을 반영합니다. 의회는 거의 매년, 때로는 소급해서 구간·기준·공제를 조정합니다. 이 계산기는 누진세가 어떻게 동작하는지 직관을 기르는 용도로 쓰고, 돈이 걸린 결정에는 반드시 공인 전문가(CPA, 세무사, 税理士)를 이용하세요.`,
				ja: `このツールは一つの狭い問いに正確に答えます。課税所得と国別の税率表が与えられたとき、累進計算式は何を返すか？　実際の確定申告は、このページが意図的に省いた多くの層の上に成り立っています。

第一に、入力値そのものです。ここに入力する数字は課税所得であり、通常は実際の収入よりずっと小さくなります。米国では2024年の標準控除だけで、単身申告者は14,600ドルがブラケット計算の前に差し引かれます。日本と韓国では給与所得控除、基礎控除・人的控除、年金・保険料控除により、給与所得者の課税ベースは通常20〜40％縮小します。ここに額面年収をそのまま入力すると、税額は過大に見積もられます。

第二に、ブラケット計算の後のすべてです。税額控除（児童関連の控除、勤労所得控除、配当控除）は算出税額から直接差し引かれます。譲渡所得、配当、退職所得には別の計算体系が適用されます。社会保険料 — 米国の給与税7.65％、韓国の4大保険約9％、日本の社会保険約15％ — は所得税ではありませんが、中間所得層ではしばしば所得税を上回ります。地方レベルの税（カリフォルニア州の最高13.3％の州所得税、日本の約10％の住民税、韓国の10％の地方所得税加算）もその上に積み重なります。

第三に、時間です。このページのすべての数字は、ある一時点の法律を反映したものです。議会はほぼ毎年、ときには遡及的に、ブラケット・基準額・控除を調整します。この計算機は累進課税の振る舞いについて直観を養うために使い、お金が絡む決定には必ず資格を持つ専門家（CPA、税理士、韓国では세무사）を頼ってください。`,
				zh: `这个工具只精确回答一个狭窄的问题：给定应税所得和一国的税率表，累进公式会算出多少？真实的纳税申报建立在本页有意省略的许多层之上。

第一，输入值本身。你在这里输入的是应税所得，通常远低于你的实际收入。在美国，仅 2024 年的标准扣除就让单身申报者在进入税档计算前先减去 14,600 美元；韩国和日本的工薪所得扣除、人身扣除、养老金与保险扣除，通常能把工薪族的税基压缩 20% 到 40%。如果直接输入税前年薪，税额会被高估。

第二，税档计算之后的一切。税收抵免（子女抵免、劳动所得抵免、股息抵免）直接从算出的税额中扣减。资本利得、股息、退休所得适用单独的计算体系。社会保险缴费——美国工资税 7.65%、韩国四大保险约占工资 9%、日本社会保险约 15%——根本不算所得税，但对中等收入者而言往往比所得税还高。地方层级的税（加州最高 13.3% 的州所得税、日本约 10% 的住民税、韩国 10% 的地方所得税附加）还要再叠加上去。

第三，时间。本页所有数字都只反映法律的一个瞬间快照；议会几乎每年都会调整税档、起征点和扣除项，有时还溯及既往。请用这个计算器来培养对累进税制的直觉——凡是涉及真金白银的决定，请交给持牌专业人士（CPA、税务师、税理士）。`
			}
		}
	];

	const toolContent = {
		about: {
			en: 'A simplified income tax calculator for the United States, South Korea, and Japan based on 2024 federal/national income brackets. It applies progressive marginal rates to your taxable income to estimate the total tax, effective rate, and after-tax amount. Many real-world deductions, credits, and state/local taxes are not modeled. For educational purposes only — not legal or tax advice.',
			ko: '미국·한국·일본의 2024년 기준 종합소득세를 단순화해 계산해 주는 도구입니다. 누진세율을 과세표준에 적용해 총 세액, 실효세율, 세후 소득을 추정합니다. 인적공제, 세액공제, 주민세·지방세 등 실제 항목은 반영되지 않습니다. 본 도구는 교육 목적의 정보 제공이며 법률·세무 자문이 아닙니다.',
			ja: '米国・韓国・日本の2024年基準の所得税を簡略化した計算ツールです。累進税率を課税所得に適用し、税額・実効税率・税引後所得を推定します。各種控除や住民税などは反映されていません。本ツールは教育目的の情報提供であり、法律・税務助言ではありません。',
			zh: '基于美国、韩国、日本 2024 年综合所得税阶梯的简化计算器。对应税所得套用累进税率，估算税款、实际税率与税后金额。多数个人扣除项与地方税未纳入计算。本工具仅供教育参考，不构成法律或税务建议。'
		},
		howTo: {
			en: [
				'Choose the country: United States, South Korea, or Japan.',
				'Enter your annual taxable income in the local currency.',
				'View your estimated tax, effective rate, and after-tax income.',
				'Scroll down to see the bracket-by-bracket marginal rates used.',
				'Compare different income levels to see how brackets stack.'
			],
			ko: [
				'국가를 선택합니다(미국, 한국, 일본).',
				'해당 통화로 연간 과세 소득을 입력합니다.',
				'예상 세액, 실효세율, 세후 소득을 확인합니다.',
				'아래에서 단계별 한계세율 표를 확인합니다.',
				'소득 금액을 바꿔 가며 누진세 효과를 비교합니다.'
			],
			ja: [
				'国を選びます（米国、韓国、日本）。',
				'各通貨で年間課税所得を入力します。',
				'推定税額、実効税率、税引後所得を確認します。',
				'下部の段階別限界税率表を確認します。',
				'所得を変えて累進税の効果を比較します。'
			],
			zh: [
				'选择国家：美国、韩国或日本。',
				'输入对应货币的年度应税所得。',
				'查看预估税款、实际税率与税后所得。',
				'查看下方各级边际税率表。',
				'调整收入金额，比较累进税效果。'
			]
		},
		useCases: {
			en: [
				'Comparing how the same income is taxed across countries.',
				'Estimating self-employment quarterly tax payments.',
				'Understanding the difference between marginal and effective rates.',
				'Sanity-checking the tax line on a contract or offer letter.',
				'Educational discussions about progressive taxation.'
			],
			ko: [
				'동일 소득이 국가별로 어떻게 과세되는지 비교.',
				'사업·프리랜서 분기 예납 추정.',
				'한계세율과 실효세율의 차이 이해.',
				'계약서·오퍼레터의 세금 항목 검증.',
				'누진세 개념 교육 자료.'
			],
			ja: [
				'同じ所得が国ごとにどう課税されるかを比較。',
				'個人事業主の四半期予定納税額の試算。',
				'限界税率と実効税率の違いを理解。',
				'契約書やオファーレターの税金項目を確認。',
				'累進課税の教材として活用。'
			],
			zh: [
				'比较同等收入在各国的税负。',
				'估算自雇人士的季度预缴税款。',
				'理解边际税率与实际税率的区别。',
				'核对合同或聘书中的税项。',
				'用于讲解累进税制的教育素材。'
			]
		},
		faq: {
			en: [
				{ q: 'Are state, local, or filing-status differences included?', a: 'No. The calculator uses single-filer federal/national brackets only. State, prefectural, and local taxes are not modeled.' },
				{ q: 'Why is my actual tax different?', a: 'Real returns include deductions, credits, payroll-withheld amounts, and special situations (capital gains, AMT, etc.) that this tool does not handle.' },
				{ q: 'What is the difference between marginal and effective rates?', a: 'Marginal is the rate on your next dollar; effective is total tax divided by total income — usually lower than the top marginal rate.' },
				{ q: 'Is this legal or tax advice?', a: 'No. Always consult a licensed tax professional (CPA / 세무사 / 税理士) for binding decisions.' }
			],
			ko: [
				{ q: '주·지방세나 신고 유형 차이가 반영되나요?', a: '아닙니다. 미국은 연방 단일 신고자, 한국·일본은 종합소득 누진세만 반영합니다. 주·도·시군구세는 별도로 계산해야 합니다.' },
				{ q: '실제 세액과 다른 이유는?', a: '실제 신고에는 각종 공제, 세액공제, 원천징수, 양도소득·AMT 등 특수 항목이 포함되어 이 도구로는 모두 반영할 수 없습니다.' },
				{ q: '한계세율과 실효세율의 차이는?', a: '한계세율은 다음 1원에 적용되는 세율, 실효세율은 총 세금 ÷ 총 소득입니다. 보통 실효세율이 최상위 한계세율보다 낮습니다.' },
				{ q: '이 결과가 법률·세무 자문인가요?', a: '아닙니다. 실제 신고나 결정은 반드시 세무사(CPA, 세무사, 税理士)와 상담하세요.' }
			]
		},
		related: [
			{ href: '/salary-calculator', label: { en: 'Salary Calculator', ko: '급여 계산기', ja: '給与計算機', zh: '薪资计算器' } },
			{ href: '/percentage', label: { en: 'Percentage', ko: '퍼센트 계산기', ja: 'パーセント計算', zh: '百分比' } },
			{ href: '/currency-converter', label: { en: 'Currency Converter', ko: '환율 변환', ja: '通貨換算', zh: '货币换算' } }
		],
		externalRefs: [
			{ href: 'https://www.irs.gov/', label: 'IRS: Internal Revenue Service' },
			{ href: 'https://www.investopedia.com/terms/i/incometax.asp', label: 'Investopedia: Income Tax' }
		]
	};

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let income = 50000;
	let country = 'us';

	// Simplified tax brackets (2024)
	const taxBrackets: Record<string, { brackets: { min: number; max: number; rate: number }[]; currency: string }> = {
		us: {
			currency: 'USD',
			brackets: [
				{ min: 0, max: 11600, rate: 10 },
				{ min: 11600, max: 47150, rate: 12 },
				{ min: 47150, max: 100525, rate: 22 },
				{ min: 100525, max: 191950, rate: 24 },
				{ min: 191950, max: 243725, rate: 32 },
				{ min: 243725, max: 609350, rate: 35 },
				{ min: 609350, max: Infinity, rate: 37 }
			]
		},
		kr: {
			currency: 'KRW',
			brackets: [
				{ min: 0, max: 14000000, rate: 6 },
				{ min: 14000000, max: 50000000, rate: 15 },
				{ min: 50000000, max: 88000000, rate: 24 },
				{ min: 88000000, max: 150000000, rate: 35 },
				{ min: 150000000, max: 300000000, rate: 38 },
				{ min: 300000000, max: 500000000, rate: 40 },
				{ min: 500000000, max: 1000000000, rate: 42 },
				{ min: 1000000000, max: Infinity, rate: 45 }
			]
		},
		jp: {
			currency: 'JPY',
			brackets: [
				{ min: 0, max: 1950000, rate: 5 },
				{ min: 1950000, max: 3300000, rate: 10 },
				{ min: 3300000, max: 6950000, rate: 20 },
				{ min: 6950000, max: 9000000, rate: 23 },
				{ min: 9000000, max: 18000000, rate: 33 },
				{ min: 18000000, max: 40000000, rate: 40 },
				{ min: 40000000, max: Infinity, rate: 45 }
			]
		}
	};

	const countries = [
		{ code: 'us', name: 'United States' },
		{ code: 'kr', name: 'South Korea' },
		{ code: 'jp', name: 'Japan' }
	];

	function calculateTax(income: number, countryCode: string) {
		const { brackets } = taxBrackets[countryCode] || taxBrackets.us;
		let tax = 0;
		let remaining = income;

		for (const bracket of brackets) {
			if (remaining <= 0) break;
			const taxable = Math.min(remaining, bracket.max - bracket.min);
			tax += taxable * (bracket.rate / 100);
			remaining -= taxable;
		}

		return tax;
	}

	$: tax = calculateTax(income, country);
	$: effectiveRate = income > 0 ? (tax / income) * 100 : 0;
	$: afterTax = income - tax;
	$: currency = taxBrackets[country]?.currency || 'USD';

	function formatCurrency(value: number): string {
		return new Intl.NumberFormat(lang === 'ko' ? 'ko-KR' : lang === 'ja' ? 'ja-JP' : 'en-US', {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		}).format(value);
	}

	$: currentBrackets = taxBrackets[country]?.brackets || taxBrackets.us.brackets;
</script>

<svelte:head>
	<title>{t('tax.title')} - SD.gy</title>
	<meta name="description" content={t('tax.desc')} />
	<link rel="canonical" href="https://sd.gy/{lang}/tax-calculator" />
	<meta property="og:title" content="{t('tax.title')} - SD.gy" />
	<meta property="og:description" content={t('tax.desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/tax-calculator" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('tax.title')} - SD.gy" />
	<meta name="twitter:description" content={t('tax.desc')} />
</svelte:head>

<div class="max-w-2xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('tax.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('tax.desc')}</p>
	</div>

	<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
		<!-- Country Selection -->
		<div class="mb-6">
			<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('tax.country')}</label>
			<select
				bind:value={country}
				class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 text-lg"
			>
				{#each countries as c}
					<option value={c.code}>{c.name}</option>
				{/each}
			</select>
		</div>

		<!-- Income Input -->
		<div class="mb-6">
			<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('tax.income')} ({currency})</label>
			<input
				type="number"
				bind:value={income}
				min="0"
				step="1000"
				class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 text-2xl font-semibold"
			/>
		</div>

		<!-- Results -->
		<div class="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 space-y-4">
			<div class="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-dark-600">
				<span class="text-gray-600 dark:text-dark-400">{t('tax.income')}</span>
				<span class="text-xl font-semibold text-gray-900 dark:text-dark-100">{formatCurrency(income)} {currency}</span>
			</div>
			<div class="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-dark-600">
				<span class="text-gray-600 dark:text-dark-400">{t('tax.estimated')}</span>
				<span class="text-xl font-semibold text-red-500">-{formatCurrency(tax)} {currency}</span>
			</div>
			<div class="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-dark-600">
				<span class="text-gray-600 dark:text-dark-400">{t('tax.effectiveRate')}</span>
				<span class="text-xl font-semibold text-orange-500">{effectiveRate.toFixed(1)}%</span>
			</div>
			<div class="flex justify-between items-center">
				<span class="text-gray-600 dark:text-dark-400">{t('tax.afterTax')}</span>
				<span class="text-2xl font-bold text-green-500">{formatCurrency(afterTax)} {currency}</span>
			</div>
		</div>

		<!-- Tax Brackets -->
		<div class="mt-6">
			<h3 class="text-sm font-semibold text-gray-700 dark:text-dark-300 mb-3">{t('tax.brackets')}</h3>
			<div class="space-y-2">
				{#each currentBrackets.slice(0, -1) as bracket, i}
					<div class="flex justify-between text-sm">
						<span class="text-gray-600 dark:text-dark-400">
							{formatCurrency(bracket.min)} - {formatCurrency(bracket.max)} {currency}
						</span>
						<span class="font-medium text-gray-900 dark:text-dark-100">{bracket.rate}%</span>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Disclaimer -->
	<div class="mt-8 bg-yellow-50 dark:bg-dark-800 rounded-xl p-6 border border-yellow-200 dark:border-dark-700">
		<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-3">{t('tax.disclaimer')}</h2>
		<p class="text-sm text-gray-600 dark:text-dark-400">{t('tax.disclaimerText')}</p>
	</div>

	<ToolContent
		{lang}
		toolName="Tax Calculator"
		toolUrl="https://sd.gy/{lang}/tax-calculator"
		lastUpdated="2026-04-30"
		category="Daily Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sd.gy/${lang}` },
			{ name: 'Tools', url: `https://sd.gy/${lang}` },
			{ name: 'Tax Calculator', url: `https://sd.gy/${lang}/tax-calculator` }
		]}
		content={toolContent}
	/>

	<ToolGuide {lang} sections={guideSections} />
</div>
