<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'Mid-Market Rate vs Tourist Rate: The Hidden Spread',
				ko: '미드마켓 환율 vs 관광객 환율 — 숨겨진 스프레드',
				ja: '仲値レート vs 観光客向けレート — 隠れたスプレッド',
				zh: '中间价与游客汇率——隐藏的点差'
			},
			body: {
				en: `The exchange rate this calculator displays — and the rate Google or XE shows — is the mid-market rate, also called the interbank rate. It is the literal midpoint between the bid and ask prices at which large institutional banks trade currency with each other in the wholesale FX market. This is not the rate you actually receive at any retail counter. The difference is the spread, and it is the single largest hidden cost of consumer foreign exchange — typically 2% to 8% depending on where you transact.

Concrete numbers from a typical $1,000 USD-to-EUR conversion when the mid-market rate is 1 USD = 0.92 EUR (so $1,000 = €920 mid-market). Airport currency exchange counters routinely quote a 6–10% spread — Travelex at major airports has been measured offering rates of 0.86 to 0.84 EUR per USD, returning €840–860 instead of €920, a hidden $60–80 fee. Hotel front desks are even worse, often 8–12% off mid-market. Major bank wire transfers (Bank of America, Chase, Wells Fargo) typically charge a 3–4% spread plus a $30–50 wire fee. Credit card foreign-currency purchases include both the network's spread (Visa and Mastercard apply roughly 0–1% above mid-market) and the issuer's foreign transaction fee (typically 1–3%, totaling 1–4% all-in).

The Bureau of Consumer Financial Protection's 2017 study on remittance disclosure found that consumers systematically underestimate FX costs because spreads are bundled into the quoted rate rather than displayed as a separate line item. The Dodd-Frank Act required remittance providers to disclose total cost upfront for transfers over $15, but exchange counters and credit card processors operate under different rules and typically do not break out the spread. The European Union's Cross-Border Payments Regulation (Regulation EU 2019/518) went further, mandating that EU banks disclose the percentage markup over ECB reference rates for card and online FX transactions — a model the US has not adopted.

How to find the actual rate you got: compute (amount_received / amount_sent) and compare to the mid-market rate at the time of the transaction. If you sent $1,000 and received €860 when mid-market was 0.92, your effective rate was 0.86 — a 6.5% spread. Banks and exchanges argue the spread covers their currency inventory risk, settlement costs, and profit margin, and that it is not a "hidden fee" because the customer agreed to the displayed rate. Both framings are true. The practical defense is comparison shopping: Wise (formerly TransferWise), Revolut, Charles Schwab debit cards (no foreign transaction fee, mid-market exchange), and Fidelity debit cards consistently charge spreads under 1% — small enough that the savings on a $5,000 conversion can pay for a long weekend. Educational information only — verify current pricing before transacting.`,
				ko: `이 계산기가 표시하는 환율 — 그리고 Google이나 XE가 보여주는 환율 — 은 미드마켓 환율, 또는 인터뱅크 환율이라고 불립니다. 도매 외환 시장에서 대형 기관 은행들이 서로 통화를 거래하는 매수/매도 가격의 정확한 중간점입니다. 이것은 어떤 소매 창구에서도 실제로 받는 환율이 아닙니다. 차이가 스프레드 — 소비자 외환의 단일 최대 숨은 비용 — 이며 거래 장소에 따라 일반적으로 2~8%입니다.

미드마켓 1 USD = 0.92 EUR ($1,000 = €920) 시점의 일반적 $1,000 USD→EUR 변환 구체 사례. 공항 환전 창구는 일상적으로 6~10% 스프레드를 부과 — 주요 공항 Travelex는 USD당 0.86~0.84 EUR로 측정되어 €840~860을 돌려줌 — €920 대신, 숨은 수수료 $60~80. 호텔 프런트 데스크는 더 심함, 종종 미드마켓 대비 8~12%. 주요 은행 송금(BoA, Chase, Wells Fargo)은 보통 3~4% 스프레드 + $30~50 송금 수수료. 신용카드 외화 구매는 네트워크 스프레드(Visa와 Mastercard는 미드마켓 대비 약 0~1%)와 발급사 외화 거래 수수료(보통 1~3%, 합계 1~4%)를 모두 포함.

미국 CFPB의 2017년 송금 공시 연구에 따르면 소비자는 — 스프레드가 별도 라인 아이템이 아니라 호가 환율에 묶여 있기 때문에 — 외환 비용을 체계적으로 과소평가합니다. Dodd-Frank 법은 $15 초과 송금에 대해 송금 제공자가 총 비용을 사전 공시하도록 요구했지만 — 환전 창구와 신용카드 프로세서는 다른 규정에서 운영되며 보통 스프레드를 분리해 표시하지 않습니다. EU의 국경 간 결제 규정(Regulation EU 2019/518)은 더 나아가 — EU 은행이 카드와 온라인 외환 거래에 대해 ECB 기준 환율 대비 마크업 비율을 공시하도록 의무화했으며 — 미국은 채택하지 않은 모델입니다.

실제 받은 환율 확인 방법 — (받은 금액 / 보낸 금액)을 계산해 거래 시점의 미드마켓 환율과 비교. 미드마켓이 0.92일 때 $1,000을 보내고 €860을 받았다면 실효 환율 0.86 — 스프레드 6.5%. 은행과 환전소는 — 스프레드가 통화 재고 위험, 결제 비용, 이익 마진을 커버하며 고객이 표시된 환율에 동의했으므로 "숨은 수수료"가 아니라고 주장. 둘 다 맞습니다. 실무적 방어는 비교 쇼핑 — Wise(구 TransferWise), Revolut, Charles Schwab 직불카드(외화 거래 수수료 없음, 미드마켓 환율), Fidelity 직불카드는 일관되게 1% 미만 스프레드를 부과 — $5,000 환전 시 절감액으로 긴 주말여행이 가능할 만큼 충분합니다. 정보 제공일 뿐 — 거래 전 현재 가격을 확인하세요.`,
				ja: `この計算機が表示する為替レート — そしてGoogleやXEが表示するレート — は、仲値（ミッドマーケットレート）、別名インターバンクレートと呼ばれるものです。これは、大手機関銀行同士が卸売外国為替市場で通貨を取引する際の買値と売値のちょうど中間点です。これは、どの小売窓口でも実際に受け取れるレートではありません。その差がスプレッドであり、消費者向け外国為替における単一で最大の隠れコストです — 取引する場所によって通常2%から8%に及びます。

仲値が1 USD = 0.92 EUR（つまり$1,000 = 仲値で€920）のときの、典型的な$1,000のUSDからEURへの換算の具体的な数字を見てみましょう。空港の両替カウンターは日常的に6〜10%のスプレッドを提示しています — 主要空港のTravelexでは1 USDあたり0.86〜0.84 EURのレートを提示していることが観測されており、€920の代わりに€840〜860しか戻らず、$60〜80の隠れた手数料に相当します。ホテルのフロントデスクはさらに悪く、仲値から8〜12%引かれることも珍しくありません。大手銀行の電信送金（Bank of America、Chase、Wells Fargo）は通常3〜4%のスプレッドに加えて$30〜50の送金手数料を課します。クレジットカードの外貨建て購入には、ネットワークのスプレッド（VisaとMastercardは仲値に対しておよそ0〜1%を上乗せ）と、発行会社の海外取引手数料（通常1〜3%、合計で1〜4%）の両方が含まれます。

米国消費者金融保護局（CFPB）の2017年の送金開示に関する調査では、スプレッドが別項目として表示されず提示レートに組み込まれているために、消費者が外国為替コストを体系的に過小評価していることが判明しました。Dodd-Frank法は$15を超える送金について送金業者に総コストの事前開示を義務付けましたが、両替カウンターやクレジットカード処理業者は別の規則の下で運営されており、通常はスプレッドを分けて表示しません。EUの越境決済規則（Regulation EU 2019/518）はさらに踏み込み、カードおよびオンラインの外国為替取引についてEUの銀行にECB参照レートに対する上乗せ率の開示を義務付けました — 米国は採用していないモデルです。

実際に受け取ったレートの確認方法：（受取金額 ÷ 送金金額）を計算し、取引時点の仲値と比較します。仲値が0.92のときに$1,000を送って€860を受け取ったなら、実効レートは0.86 — スプレッドは6.5%です。銀行や両替所は、スプレッドは通貨在庫リスク、決済コスト、利益マージンをカバーするものであり、顧客が表示されたレートに同意した以上「隠れた手数料」ではないと主張します。どちらの言い分も事実です。実務的な防御策は比較検討です：Wise（旧TransferWise）、Revolut、Charles Schwabのデビットカード（海外取引手数料なし、仲値での両替）、Fidelityのデビットカードは一貫して1%未満のスプレッドしか課しません — $5,000の両替での節約額で長い週末旅行がまかなえるほどの差です。教育目的の情報のみです — 取引前に現在の価格をご確認ください。`,
				zh: `本计算器显示的汇率——以及 Google 或 XE 显示的汇率——是中间价，也称银行间汇率。它是大型机构银行在批发外汇市场上相互交易货币时买入价与卖出价的精确中点。这并不是你在任何零售柜台实际拿到的汇率。两者之间的差额就是点差，它是消费者外汇兑换中最大的一项隐藏成本——根据交易地点不同，通常在 2% 到 8% 之间。

以中间价 1 USD = 0.92 EUR（即 $1,000 按中间价等于 €920）时一笔典型的 $1,000 USD 兑 EUR 换汇为例，来看具体数字。机场货币兑换柜台的点差通常高达 6–10%——在主要机场，Travelex 被实测提供每 USD 0.86 至 0.84 EUR 的汇率，只返还 €840–860 而不是 €920，相当于 $60–80 的隐藏费用。酒店前台更糟，往往比中间价低 8–12%。大型银行电汇（Bank of America、Chase、Wells Fargo）通常收取 3–4% 的点差外加 $30–50 的电汇费。信用卡外币消费则同时包含卡组织的点差（Visa 和 Mastercard 在中间价之上约加收 0–1%）和发卡行的外币交易手续费（通常 1–3%，合计 1–4%）。

美国消费者金融保护局（CFPB）2017 年关于汇款信息披露的研究发现，由于点差被捆绑进报价汇率而不是作为单独条目列示，消费者系统性地低估了外汇成本。Dodd-Frank 法案要求汇款服务商对超过 $15 的转账预先披露总成本，但货币兑换柜台和信用卡处理商适用不同的规则，通常不会单独列出点差。欧盟的跨境支付条例（Regulation EU 2019/518）走得更远，强制要求欧盟银行披露银行卡及线上外汇交易相对于 ECB 参考汇率的加价百分比——这一模式美国尚未采纳。

如何找出你实际拿到的汇率：计算（收到金额 ÷ 汇出金额），再与交易当时的中间价对比。如果中间价为 0.92 时你汇出 $1,000 而收到 €860，你的实际汇率就是 0.86——点差为 6.5%。银行和兑换机构辩称，点差用于覆盖其货币库存风险、清算成本和利润空间，而且既然客户同意了所显示的汇率，它就不算"隐藏费用"。两种说法都成立。务实的防御手段是货比三家：Wise（前身为 TransferWise）、Revolut、Charles Schwab 借记卡（无外币交易手续费、按中间价兑换）以及 Fidelity 借记卡的点差始终低于 1%——差距之大，$5,000 换汇省下的钱足够一次长周末旅行。仅供教育参考——交易前请核实最新价格。`
			},
			code: {
				example: `// Effective FX rate vs mid-market — compute your real spread
function spreadPct(midRate, effectiveRate) {
  return Math.abs(midRate - effectiveRate) / midRate * 100;
}

// $1,000 USD -> EUR. Mid-market: 0.92
spreadPct(0.92, 0.92);   // 0.00% — Wise / Schwab debit
spreadPct(0.92, 0.91);   // 1.09% — most credit cards (network only)
spreadPct(0.92, 0.89);   // 3.26% — typical bank wire
spreadPct(0.92, 0.86);   // 6.52% — airport Travelex
spreadPct(0.92, 0.83);   // 9.78% — hotel front desk

// All-in cost calculator including flat fees
function allInCost(amountSent, amountReceived, midRate, flatFee = 0) {
  const expected = amountSent * midRate;
  const lostToSpread = expected - amountReceived;
  return ((lostToSpread + flatFee) / amountSent * 100).toFixed(2);
}

// $1,000 wire, received €890, mid-market 0.92, $35 wire fee
allInCost(1000, 890, 0.92, 35);  // "6.50" % all-in cost`
			}
		},
		{
			heading: {
				en: 'Why Credit Card FX Fees Are 3% (Visa/Mastercard Math)',
				ko: '신용카드 외화 수수료가 3%인 이유 (Visa/Mastercard 수학)',
				ja: 'クレジットカードの海外手数料が3%である理由（Visa/Mastercardの計算）',
				zh: '信用卡外汇手续费为何是 3%（Visa/Mastercard 的算法）'
			},
			body: {
				en: `When you use a US credit card to pay in euros, the 3% "foreign transaction fee" listed on most card disclosures is actually two separate components stacked together. Understanding the breakdown explains why some cards charge 3% while others charge 0%, and why the merchant's "Dynamic Currency Conversion" prompt is almost always a worse deal.

The first component is the network conversion fee. Visa and Mastercard each operate global authorization systems that convert the merchant's local-currency charge into your card's billing currency at a rate they set daily, typically 0.20% to 1.00% above the wholesale interbank rate. Visa publishes its rates daily at usa.visa.com/support/consumer/travel-support/exchange-rate-calculator.html, and Mastercard publishes at mastercard.us/en-us/personal/get-support/convert-currency.html. American Express and Discover use their own networks with similar conversion methodology. This network fee is unavoidable for any cross-border transaction — it pays for the FX risk and settlement infrastructure the network bears between transaction date and merchant settlement (typically 2–3 days).

The second component is the issuer fee. Each card-issuing bank decides whether to add an additional charge on top of the network conversion. Most US credit cards add 1–3 percentage points; this is pure profit for the issuer, not a payment for any service. The cards that famously charge 0% foreign transaction fees — Capital One Venture, Chase Sapphire (Preferred and Reserve), most premium American Express cards, Schwab Investor Checking debit, Fidelity Cash Management debit, Charles Schwab High Yield Investor Checking — have made a strategic decision to absorb the issuer-side fee as a marketing benefit. The network fee still applies (you cannot escape it on any card), but it ends up running 0.2–1.0% on top of mid-market, which is dramatically better than the 3% all-in cost on standard cards.

Dynamic Currency Conversion (DCC) is the merchant trick to capture even more spread. When a foreign merchant's terminal asks "would you like to pay in your home currency?" and shows the converted amount, accepting that prompt invokes DCC — the merchant or their payment processor (often run by Planet Payment, Fexco, or Elavon) applies their own exchange rate, typically with a 4–8% markup over wholesale. You then pay the marked-up amount in your home currency, and your card issuer skips the network conversion (because the merchant already converted). The result: you pay roughly the same amount you would have paid via DCC's marked-up rate, with the merchant pocketing the spread that the card network would have taken at much lower margin. The unambiguous rule: always select the local currency on foreign card transactions. The Federal Trade Commission and EU consumer protection agencies have repeatedly flagged DCC as a deceptive practice, but it remains legal in most jurisdictions.

Practical guidance: carry one no-FX-fee credit card and one no-FX-fee debit card for international travel. Decline DCC every time. Verify the conversion rate on your statement after the trip — Visa and Mastercard exchange-rate calculators let you back-check what the network applied. Educational information only — check your specific card's terms and current network rates before relying on this for travel budgeting.`,
				ko: `미국 신용카드로 유로 결제를 할 때 — 대부분의 카드 약관에 명시된 3% "외화 거래 수수료"는 실제로는 별도의 두 구성요소가 쌓여 있는 것입니다. 이 분해를 이해하면 어떤 카드는 3%, 어떤 카드는 0%를 부과하는 이유와 가맹점의 "Dynamic Currency Conversion" 프롬프트가 거의 항상 더 나쁜 거래인 이유를 설명합니다.

첫 번째 구성요소는 네트워크 변환 수수료. Visa와 Mastercard는 각각 — 가맹점의 현지 통화 결제 금액을 카드 청구 통화로 매일 정해진 환율(보통 도매 인터뱅크 환율 대비 0.20~1.00% 위)로 변환하는 — 글로벌 승인 시스템을 운영합니다. Visa는 환율을 매일 usa.visa.com/support/consumer/travel-support/exchange-rate-calculator.html 에 공시하고, Mastercard는 mastercard.us/en-us/personal/get-support/convert-currency.html 에 공시합니다. American Express와 Discover는 유사한 변환 방법론으로 자체 네트워크를 사용. 이 네트워크 수수료는 모든 국경 간 거래에서 불가피 — 거래일과 가맹점 정산일(보통 2~3일) 사이에 네트워크가 부담하는 외환 위험과 정산 인프라 비용을 지불.

두 번째 구성요소는 발급사 수수료. 각 카드 발급 은행은 — 네트워크 변환 위에 추가 비용을 더할지 결정합니다. 대부분의 미국 신용카드는 1~3 퍼센트 포인트를 추가 — 이는 어떤 서비스에 대한 결제가 아닌 발급사의 순이익입니다. 외화 거래 수수료 0%로 유명한 카드들 — Capital One Venture, Chase Sapphire (Preferred and Reserve), 대부분의 프리미엄 American Express 카드, Schwab Investor Checking 직불, Fidelity Cash Management 직불, Charles Schwab High Yield Investor Checking — 은 발급사 측 수수료를 마케팅 혜택으로 흡수하는 전략적 결정. 네트워크 수수료는 여전히 적용(어떤 카드에서도 벗어날 수 없음)되지만 — 미드마켓 위에 0.2~1.0%로 끝나며 — 표준 카드의 3% 올인 비용보다 극적으로 좋습니다.

Dynamic Currency Conversion(DCC)은 가맹점이 더 많은 스프레드를 잡아내는 트릭. 해외 가맹점 단말기가 "본국 통화로 결제하시겠습니까?"라고 묻고 변환된 금액을 보여줄 때 — 그 프롬프트를 수락하면 DCC가 발동 — 가맹점 또는 그 결제 처리사(종종 Planet Payment, Fexco, 또는 Elavon이 운영)가 자체 환율을 적용, 보통 도매 환율 대비 4~8% 마크업. 그 다음 본국 통화로 마크업된 금액을 결제 — 카드 발급사는 네트워크 변환을 건너뜀(가맹점이 이미 변환했기 때문). 결과 — DCC의 마크업된 환율로 결제했을 금액과 거의 동일하게 지불하지만 — 카드 네트워크가 훨씬 낮은 마진으로 가져갔을 스프레드를 가맹점이 챙김. 명확한 규칙 — 해외 카드 거래에서는 항상 현지 통화 선택. 미국 FTC와 EU 소비자 보호 기관은 — DCC를 기만적 관행으로 반복 지적했지만 대부분의 관할권에서 합법으로 남아 있음.

실무 가이드 — 국제 여행 시 외화 수수료 없는 신용카드 1장과 외화 수수료 없는 직불카드 1장을 휴대. DCC는 매번 거절. 여행 후 명세서의 변환 환율 확인 — Visa와 Mastercard 환율 계산기로 네트워크가 적용한 것을 역추적. 정보 제공일 뿐 — 여행 예산에 의존하기 전에 본인 카드의 구체 약관과 현재 네트워크 환율을 확인하세요.`,
				ja: `米国のクレジットカードでユーロ建ての支払いをするとき、ほとんどのカード規約に記載されている3%の「海外取引手数料」は、実際には2つの別個の構成要素が積み重なったものです。この内訳を理解すれば、なぜ3%を課すカードと0%のカードがあるのか、そしてなぜ加盟店が表示する「Dynamic Currency Conversion」の案内がほぼ常に損な取引なのかが分かります。

1つ目の構成要素はネットワーク変換手数料です。VisaとMastercardはそれぞれ、加盟店の現地通貨建ての請求をカードの請求通貨へ、自社が日次で設定するレート — 通常は卸売インターバンクレートの0.20%から1.00%上 — で変換するグローバル承認システムを運営しています。Visaはそのレートを毎日 usa.visa.com/support/consumer/travel-support/exchange-rate-calculator.html で公表し、Mastercardは mastercard.us/en-us/personal/get-support/convert-currency.html で公表しています。American ExpressとDiscoverは同様の変換方法論を用いる自社ネットワークを使用しています。このネットワーク手数料はあらゆる越境取引で避けられません — 取引日から加盟店決済（通常2〜3日）までの間にネットワークが負担する為替リスクと決済インフラの対価だからです。

2つ目の構成要素は発行会社手数料です。各カード発行銀行は、ネットワーク変換の上にさらに追加料金を上乗せするかどうかを自ら決めます。ほとんどの米国のクレジットカードは1〜3パーセントポイントを追加します。これは何らかのサービスへの対価ではなく、発行会社の純粋な利益です。海外取引手数料0%で有名なカード — Capital One Venture、Chase Sapphire（PreferredおよびReserve）、大半のプレミアムAmerican Expressカード、Schwab Investor Checkingデビット、Fidelity Cash Managementデビット、Charles Schwab High Yield Investor Checking — は、発行会社側の手数料をマーケティング上の特典として吸収する戦略的な決定を下しています。ネットワーク手数料は依然として適用されます（どのカードでも逃れられません）が、結局は仲値の上0.2〜1.0%に収まり、標準的なカードの3%のオールインコストより劇的に有利です。

Dynamic Currency Conversion（DCC）は、さらに多くのスプレッドを取り込むための加盟店側のトリックです。海外の加盟店の端末が「自国通貨で支払いますか？」と尋ねて換算後の金額を表示するとき、その案内を受け入れるとDCCが発動します — 加盟店またはその決済処理業者（多くはPlanet Payment、Fexco、Elavonが運営）が独自の為替レートを適用し、通常は卸売レートに対して4〜8%の上乗せが加わります。あなたは上乗せされた金額を自国通貨で支払い、カード発行会社はネットワーク変換をスキップします（加盟店がすでに変換済みのため）。その結果、DCCの上乗せレートで支払うことになった金額とほぼ同じ額を支払い、カードネットワークがはるかに低いマージンで取っていたはずのスプレッドを加盟店が懐に入れます。明確なルールはこうです：海外でのカード取引では常に現地通貨を選択すること。米国連邦取引委員会（FTC）とEUの消費者保護機関はDCCを欺瞞的な慣行として繰り返し指摘してきましたが、ほとんどの法域で依然として合法です。

実務的なアドバイス：国際旅行には海外手数料なしのクレジットカード1枚と海外手数料なしのデビットカード1枚を携帯しましょう。DCCは毎回断ること。旅行後には明細書の換算レートを確認しましょう — VisaとMastercardの為替レート計算機で、ネットワークが適用したレートを事後確認できます。教育目的の情報のみです — 旅行予算の根拠にする前に、お手持ちのカードの具体的な条件と現在のネットワークレートをご確認ください。`,
				zh: `当你用美国信用卡以欧元付款时，大多数信用卡条款中列出的 3%"外币交易手续费"实际上是两项独立成本叠加在一起。理解这一拆分，就能明白为什么有些卡收 3% 而另一些收 0%，也能明白为什么商户的"动态货币转换"（Dynamic Currency Conversion）提示几乎总是更亏的选择。

第一项是卡组织转换费。Visa 和 Mastercard 各自运营全球授权系统，将商户的当地货币扣款按其每日设定的汇率转换成你卡片的账单货币，该汇率通常比批发银行间汇率高 0.20% 到 1.00%。Visa 每日在 usa.visa.com/support/consumer/travel-support/exchange-rate-calculator.html 公布其汇率，Mastercard 则在 mastercard.us/en-us/personal/get-support/convert-currency.html 公布。American Express 和 Discover 使用自己的网络，转换方法类似。对任何跨境交易而言，这项网络费用都不可避免——它用于支付卡组织在交易日与商户结算日（通常 2–3 天）之间承担的外汇风险和清算基础设施成本。

第二项是发卡行费用。每家发卡银行自行决定是否在卡组织转换之上再加收费用。大多数美国信用卡会加收 1–3 个百分点；这是发卡行的纯利润，并非任何服务的对价。那些以 0% 外币交易手续费著称的卡——Capital One Venture、Chase Sapphire（Preferred 和 Reserve）、大多数高端 American Express 卡、Schwab Investor Checking 借记卡、Fidelity Cash Management 借记卡、Charles Schwab High Yield Investor Checking——是在战略上决定把发卡行一侧的费用作为营销福利自行吸收。卡组织费用仍然适用（任何卡都逃不掉），但最终只比中间价高 0.2–1.0%，远优于标准卡 3% 的总成本。

动态货币转换（DCC）是商户用来攫取更多点差的把戏。当境外商户的终端询问"要用您的本国货币付款吗？"并显示换算后的金额时，接受该提示就会触发 DCC——商户或其支付处理商（通常由 Planet Payment、Fexco 或 Elavon 运营）会套用自己的汇率，通常比批发汇率加价 4–8%。随后你以本国货币支付被加价后的金额，而发卡行会跳过卡组织转换（因为商户已经完成了转换）。结果是：你支付的金额与按 DCC 加价汇率本应支付的金额大致相同，而本可由卡组织以低得多的利润率赚取的点差被商户收入囊中。毫不含糊的规则：境外刷卡时永远选择当地货币。美国联邦贸易委员会（FTC）和欧盟消费者保护机构屡次将 DCC 列为欺骗性做法，但在大多数司法辖区它仍属合法。

实用建议：国际旅行时携带一张免外汇手续费的信用卡和一张免外汇手续费的借记卡。每次都拒绝 DCC。旅行结束后核对账单上的换算汇率——Visa 和 Mastercard 的汇率计算器可以让你反查卡组织实际适用的汇率。仅供教育参考——在据此规划旅行预算之前，请核实你所持卡片的具体条款和当前的卡组织汇率。`
			},
			code: {
				example: `// Total FX cost = network fee + issuer fee
function totalFxCost(networkFee, issuerFee) {
  // Stack multiplicatively (small numbers, so additive is close)
  return ((1 + networkFee) * (1 + issuerFee) - 1) * 100;
}

// Standard card: ~0.5% network + 3% issuer
totalFxCost(0.005, 0.030);  // ~3.52% all-in

// Chase Sapphire / Capital One Venture: ~0.5% network + 0% issuer
totalFxCost(0.005, 0.000);  // 0.50% all-in (7x cheaper)

// Worst case: standard card + DCC trap (4-8% merchant markup)
function dccCost(networkFee, issuerFee, dccMarkup) {
  return ((1 + dccMarkup) - 1) * 100;
  // DCC bypasses your card's FX layer - merchant rate IS your rate
}
dccCost(0.005, 0.000, 0.060);  // 6.00% from a DCC merchant - even on a "no fee" card!

// €200 dinner. Mid-market 0.92. What you actually pay (USD):
const dinner = 200;
const noFxCard = dinner / 0.92 * 1.005;  // $218.79
const standardCard = dinner / 0.92 * 1.035;  // $225.33
const dccTrap = dinner / 0.86;  // $232.56`
			}
		},
		{
			heading: {
				en: 'Wise vs Banks: Real Cost Comparison (2026 Data)',
				ko: 'Wise vs 은행 — 실제 비용 비교 (2026 데이터)',
				ja: 'Wise vs 銀行 — 実際のコスト比較（2026年データ）',
				zh: 'Wise 与银行：真实成本对比（2026 年数据）'
			},
			body: {
				en: `Wise (formerly TransferWise) built a $11 billion+ business by exposing what banks had been quietly charging on international transfers. The company publishes a real-time price comparison tool at wise.com/us/compare/ showing the all-in cost across major providers — and the gaps remain dramatic in 2026. A worked example clarifies why traditional banks lose this comparison decisively for retail consumers.

Sample transfer: send $5,000 USD to a EUR bank account in Germany. Mid-market rate at the time of comparison: 1 USD = 0.9200 EUR, so the wholesale value is €4,600. Provider-by-provider all-in cost (price plus FX spread):

(1) Wise: ~$25 fixed fee, exchange rate at mid-market (0.9200). Recipient gets approximately €4,577. Total cost about 0.46%. Settlement typically same day for SEPA destinations.

(2) Revolut (Premium tier): $0 fee within plan limits, exchange rate at mid-market on weekdays (1% markup on weekends). Recipient gets approximately €4,600 weekday or €4,554 weekend. Total cost 0% to 1%. Settlement typically minutes for in-network, hours for SEPA.

(3) Bank of America wire: $45 outbound wire fee plus ~3% FX spread. Effective rate roughly 0.8924, so recipient gets approximately €4,440 less the wire fee equivalent — total cost about 4.1%. Settlement typically 1-3 business days.

(4) Chase wire: $50 outbound wire fee plus ~3% FX spread. Recipient gets roughly €4,438. Total cost about 4.2%. Settlement typically 1-3 business days.

(5) Western Union (online to bank): $0-15 stated fee plus 3-5% FX spread depending on corridor and amount. Recipient gets approximately €4,393. Total cost about 4.5%. Settlement typically same day or next day.

(6) PayPal cross-border: 4-5% all-in for personal transfers, plus a ~3% currency conversion if the recipient holds the funds in a different currency than received. Total can hit 8% on small transfers.

The Wise advantage compounds over volume. A US small-business owner paying €100,000/year in European supplier invoices via traditional bank wires loses approximately $4,000 annually to FX spread; routing through Wise Business or a similar fintech reduces that to under $500. The Federal Reserve's Faster Payments initiative and the EU's Single Euro Payments Area (SEPA) reduced settlement friction without addressing FX margins, so the consumer-facing cost gap persists.

Caveats and where banks still win: (1) Large amounts (>$50,000) often qualify for negotiated rates at major banks that approach Wise pricing, especially for treasury customers. (2) Some destination countries lack Wise coverage (notably parts of Africa, Central Asia, and certain sanctioned jurisdictions). (3) Cash pickup in remote areas is not a Wise specialty; Western Union and MoneyGram retain physical-network value there. (4) Legal compliance: Wise applies the same anti-money-laundering checks as banks and may delay or reject suspicious transfers — for legitimate one-off personal transfers this is not a friction, but for unusual flows it can be. Educational only — verify current pricing at the time of any actual transfer; rates and fees change.`,
				ko: `Wise(구 TransferWise)는 은행이 국제 송금에서 조용히 부과해온 비용을 폭로해 110억 달러 이상의 사업을 구축했습니다. 회사는 wise.com/us/compare/ 에서 주요 제공자 전반의 올인 비용을 보여주는 실시간 가격 비교 도구를 공개합니다 — 그리고 2026년에도 격차가 여전히 극적입니다. 사례로 풀어보면 — 전통 은행이 소매 소비자에게 이 비교에서 결정적으로 패배하는 이유가 분명해집니다.

샘플 송금 — 독일 EUR 은행 계좌로 $5,000 USD 송금. 비교 시점 미드마켓 환율 — 1 USD = 0.9200 EUR, 도매 가치 €4,600. 제공자별 올인 비용(가격 + FX 스프레드).

(1) Wise — 약 $25 고정 수수료, 미드마켓 환율(0.9200). 수신자 약 €4,577 수령. 총 비용 약 0.46%. SEPA 도착지에 대해 보통 당일 정산.

(2) Revolut (Premium 등급) — 플랜 한도 내 $0 수수료, 평일 미드마켓 환율(주말 1% 마크업). 수신자 평일 약 €4,600 또는 주말 €4,554. 총 비용 0~1%. 망 내 거래 보통 분 단위, SEPA 시간 단위.

(3) Bank of America 송금 — $45 송금 수수료 + 약 3% FX 스프레드. 실효 환율 약 0.8924, 수신자 약 €4,440 — 송금 수수료 차감 — 총 비용 약 4.1%. 보통 영업일 1~3일 정산.

(4) Chase 송금 — $50 송금 수수료 + 약 3% FX 스프레드. 수신자 약 €4,438. 총 비용 약 4.2%. 보통 영업일 1~3일 정산.

(5) Western Union (온라인-은행) — $0~15 명시 수수료 + 3~5% FX 스프레드(통로와 금액에 따라). 수신자 약 €4,393. 총 비용 약 4.5%. 보통 당일 또는 익일 정산.

(6) PayPal 국경 간 송금 — 개인 송금 올인 4~5% — 수신자가 받은 통화와 다른 통화로 자금을 보유하면 약 3% 통화 변환 추가. 작은 송금에서 8%까지 도달 가능.

Wise의 우위는 거래량에 따라 복리됩니다. 유럽 공급업체 인보이스로 연 €100,000을 전통 은행 송금으로 지불하는 미국 소상공인은 — FX 스프레드로 연 약 $4,000을 잃습니다. Wise Business나 유사 핀테크로 라우팅하면 $500 미만으로 줄어듭니다. 미국 연준의 Faster Payments 이니셔티브와 EU의 단일유로결제권(SEPA)은 — FX 마진을 다루지 않고 정산 마찰만 줄였기 때문에 소비자 측 비용 격차는 지속됩니다.

주의사항과 은행이 여전히 이기는 영역 — (1) 큰 금액(>$50,000)은 종종 — 특히 트레저리 고객에 대해 — Wise 가격에 접근하는 협상된 환율을 주요 은행에서 받을 수 있음. (2) 일부 도착 국가는 Wise 커버리지가 없음(특히 아프리카 일부, 중앙아시아, 특정 제재 관할권). (3) 외딴 지역의 현금 수령은 Wise 전문이 아님 — Western Union과 MoneyGram이 그곳에서 물리적 네트워크 가치를 유지. (4) 법적 컴플라이언스 — Wise는 은행과 동일한 자금세탁방지 검토를 적용하며 의심스러운 송금을 지연하거나 거부할 수 있음 — 정당한 일회성 개인 송금에는 마찰이 아니지만 비정상적 흐름에는 그럴 수 있음. 교육용일 뿐 — 실제 송금 시점의 현재 가격을 확인 — 환율과 수수료는 변합니다.`,
				ja: `Wise（旧TransferWise）は、銀行が国際送金でひそかに課してきたコストを白日の下にさらすことで、110億ドル超の事業を築き上げました。同社は wise.com/us/compare/ で主要プロバイダー全体のオールインコストを示すリアルタイムの価格比較ツールを公開しています — そして2026年になっても格差は依然として劇的です。具体的な計算例を見れば、なぜ従来型の銀行が個人消費者向けのこの比較で決定的に負けるのかが明確になります。

サンプル送金：ドイツのEUR建て銀行口座へ$5,000 USDを送金します。比較時点の仲値：1 USD = 0.9200 EUR、つまり卸売価値は€4,600です。プロバイダーごとのオールインコスト（料金＋為替スプレッド）は次のとおりです。

(1) Wise：約$25の固定手数料、為替レートは仲値（0.9200）。受取人はおよそ€4,577を受け取ります。総コストは約0.46%。SEPA宛の着金は通常当日です。

(2) Revolut（Premiumプラン）：プラン限度内は手数料$0、平日は仲値の為替レート（週末は1%の上乗せ）。受取人は平日およそ€4,600、週末は€4,554を受け取ります。総コストは0%から1%。着金はネットワーク内なら通常数分、SEPAなら数時間です。

(3) Bank of Americaの電信送金：$45の送金手数料に加えて約3%の為替スプレッド。実効レートはおよそ0.8924で、受取人が受け取るのはおよそ€4,440から送金手数料相当額を差し引いた額 — 総コストは約4.1%。着金は通常1〜3営業日です。

(4) Chaseの電信送金：$50の送金手数料に加えて約3%の為替スプレッド。受取人はおよそ€4,438を受け取ります。総コストは約4.2%。着金は通常1〜3営業日です。

(5) Western Union（オンラインから銀行口座へ）：表示手数料$0〜15に加えて、送金経路と金額に応じて3〜5%の為替スプレッド。受取人はおよそ€4,393を受け取ります。総コストは約4.5%。着金は通常当日または翌日です。

(6) PayPalの越境送金：個人送金でオールイン4〜5%、さらに受取人が受け取った通貨と異なる通貨で資金を保有する場合は約3%の通貨変換が加わります。少額送金では合計8%に達することもあります。

Wiseの優位性は取扱量とともに積み上がります。欧州のサプライヤーへの請求書支払いとして年間€100,000を従来型の銀行送金で支払う米国の中小事業者は、為替スプレッドで年間およそ$4,000を失います。Wise Businessや同種のフィンテック経由に切り替えれば、それを$500未満に減らせます。米連邦準備制度のFaster PaymentsイニシアチブとEUの単一ユーロ決済圏（SEPA）は、為替マージンには手を付けずに決済の摩擦だけを減らしたため、消費者向けのコスト格差は残り続けています。

注意点と、銀行が今も勝る領域：(1) 高額送金（$50,000超）は、特にトレジャリー顧客であれば、Wiseの価格に迫る交渉レートを大手銀行で受けられることが多い。(2) 一部の送金先国はWiseの対象外です（特にアフリカの一部、中央アジア、特定の制裁対象法域）。(3) 遠隔地での現金受け取りはWiseの得意分野ではなく、Western UnionとMoneyGramがそこでは物理ネットワークの価値を保っています。(4) 法令遵守：Wiseは銀行と同じマネーロンダリング防止チェックを適用し、疑わしい送金を遅延または拒否することがあります — 正当な単発の個人送金では摩擦になりませんが、通常と異なる資金の流れでは起こり得ます。教育目的のみです — 実際の送金時点で現在の価格を確認してください。レートと手数料は変動します。`,
				zh: `Wise（前身为 TransferWise）通过揭露银行在国际转账中悄悄收取的费用，打造了一家价值超过 110 亿美元的公司。该公司在 wise.com/us/compare/ 提供实时价格对比工具，展示各大服务商的总成本——到 2026 年，差距依然悬殊。通过一个算例就能清楚看到，对零售消费者而言，传统银行为何在这场比较中一败涂地。

示例转账：向德国的一个 EUR 银行账户汇出 $5,000 USD。对比时点的中间价：1 USD = 0.9200 EUR，因此批发价值为 €4,600。各服务商的总成本（费用加外汇点差）逐一如下：

(1) Wise：约 $25 固定费用，汇率为中间价（0.9200）。收款人约收到 €4,577。总成本约 0.46%。SEPA 目的地通常当日到账。

(2) Revolut（Premium 档）：计划额度内 $0 费用，工作日按中间价（周末加价 1%）。收款人工作日约收到 €4,600，周末约 €4,554。总成本 0% 至 1%。网络内通常几分钟到账，SEPA 需数小时。

(3) Bank of America 电汇：$45 汇出电汇费外加约 3% 外汇点差。实际汇率约 0.8924，收款人约收到 €4,440 再减去电汇费的等值金额——总成本约 4.1%。通常 1-3 个工作日到账。

(4) Chase 电汇：$50 汇出电汇费外加约 3% 外汇点差。收款人约收到 €4,438。总成本约 4.2%。通常 1-3 个工作日到账。

(5) Western Union（在线转银行账户）：标称费用 $0-15，另加 3-5% 外汇点差（视汇款通道和金额而定）。收款人约收到 €4,393。总成本约 4.5%。通常当日或次日到账。

(6) PayPal 跨境转账：个人转账总成本 4-5%；若收款人以不同于到账货币的币种持有资金，还要再加约 3% 的货币转换费。小额转账的总成本可能高达 8%。

Wise 的优势会随交易量而不断放大。一位每年通过传统银行电汇支付 €100,000 欧洲供应商货款的美国小企业主，每年约有 $4,000 损失在外汇点差上；改走 Wise Business 或类似金融科技渠道可将其降至 $500 以下。美联储的 Faster Payments 计划和欧盟的单一欧元支付区（SEPA）降低了清算摩擦，却没有触及外汇利润率，因此面向消费者的成本差距依然存在。

注意事项以及银行仍占优的场景：(1) 大额转账（超过 $50,000）通常可在大型银行获得接近 Wise 定价的协商汇率，对资金管理客户尤其如此。(2) 部分目的地国家不在 Wise 覆盖范围内（特别是非洲部分地区、中亚以及某些受制裁的司法辖区）。(3) 偏远地区的现金取款并非 Wise 的强项；Western Union 和 MoneyGram 在那里仍保有实体网点的价值。(4) 合规方面：Wise 与银行执行同样的反洗钱审查，可能推迟或拒绝可疑转账——对正当的一次性个人转账这不构成障碍，但对异常资金流则可能。仅供教育参考——任何实际转账时请核实最新价格；汇率和费用会变化。`
			},
			code: {
				example: `// Send $5,000 USD to EUR — what each provider really delivers
const sendUSD = 5000;
const midRate = 0.9200;  // EUR per USD
const wholesaleEUR = sendUSD * midRate;  // 4,600 EUR

function received(spread, flatFeeUsd) {
  const effectiveRate = midRate * (1 - spread);
  return (sendUSD - flatFeeUsd) * effectiveRate;
}

received(0.000, 25);   // Wise: ~4,577 EUR (cost ~0.46%)
received(0.000, 0);    // Revolut Premium weekday: 4,600 EUR (cost 0%)
received(0.030, 45);   // BofA wire: ~4,440 EUR (cost ~3.5% + $45 fee)
received(0.030, 50);   // Chase wire: ~4,438 EUR (cost ~3.5% + $50 fee)
received(0.045, 0);    // Western Union: ~4,393 EUR (cost ~4.5%)

// Annual loss for €100k/year European supplier payments
const annualEUR = 100000;
const usdEquiv = annualEUR / midRate;  // ~108,696 USD
const wiseLoss = usdEquiv * 0.005;     // ~$543/yr
const bankLoss = usdEquiv * 0.040;     // ~$4,348/yr
// Same business outcome - $3,800/yr difference`
			}
		}
	];

	const toolContent = {
		about: {
			en: 'Convert between major world currencies using daily rates from the European Central Bank via the free Frankfurter API. Supports USD, EUR, GBP, JPY, KRW, CNY, and other top currencies. Rates update once per business day and reflect mid-market values; the actual rate you get from a bank or money exchange will include a spread. For educational purposes only — not financial or trading advice.',
			ko: '유럽중앙은행(ECB) 기준 일일 환율로 주요 국가의 통화를 변환합니다. Frankfurter 무료 API를 사용하며 USD, EUR, GBP, JPY, KRW, CNY 등 주요 통화를 지원합니다. 환율은 영업일 기준 하루 한 번 갱신되고 시중 환율에는 스프레드가 추가되므로 은행이나 환전소의 실제 환율과 다를 수 있습니다. 본 도구는 정보 제공 목적이며 금융·투자 자문이 아닙니다.',
			ja: '欧州中央銀行（ECB）の日次レートを用いて主要通貨を換算します。無料のFrankfurter APIを利用し、USD、EUR、GBP、JPY、KRW、CNYなど主要通貨に対応します。レートは営業日ごとに1回更新され、銀行や両替所の実際レートにはスプレッドが上乗せされます。本ツールは情報提供のみで、金融助言ではありません。',
			zh: '使用欧洲央行（ECB）每日汇率换算主要国家货币，数据来自免费的 Frankfurter API。支持 USD、EUR、GBP、JPY、KRW、CNY 等主流货币。汇率每个工作日更新一次，与银行或货币兑换处的实际汇率会有差异（包含点差）。本工具仅供参考，不构成金融或交易建议。'
		},
		howTo: {
			en: [
				'Type the amount you want to convert.',
				'Choose the source currency in the "From" dropdown.',
				'Choose the target currency in the "To" dropdown.',
				'View the converted amount and the per-unit exchange rate.',
				'Click the swap arrow to reverse the direction instantly.'
			],
			ko: [
				'환전하려는 금액을 입력합니다.',
				'"From"에서 출발 통화를 선택합니다.',
				'"To"에서 도착 통화를 선택합니다.',
				'환산 금액과 1단위당 환율을 확인합니다.',
				'화살표 버튼으로 두 통화의 방향을 즉시 반전합니다.'
			],
			ja: [
				'換算したい金額を入力します。',
				'「From」で元の通貨を選びます。',
				'「To」で換算先の通貨を選びます。',
				'換算金額と1単位あたりの為替レートを確認します。',
				'矢印ボタンで通貨の方向を即座に反転できます。'
			],
			zh: [
				'输入要换算的金额。',
				'在"From"中选择源货币。',
				'在"To"中选择目标货币。',
				'查看换算金额和单位汇率。',
				'点击箭头按钮可立即反转方向。'
			]
		},
		useCases: {
			en: [
				'Estimating the cost of overseas purchases or subscriptions.',
				'Planning travel budgets in the local currency.',
				'Comparing salaries or freelance rates between countries.',
				'Setting expectations before sending a remittance abroad.',
				'Quickly checking how much foreign cash to bring on a trip.'
			],
			ko: [
				'해외직구나 구독 서비스 가격 추정.',
				'해외여행 예산을 현지 통화로 계획.',
				'국가별 연봉이나 프리랜서 단가 비교.',
				'해외 송금 전 예상 금액 확인.',
				'여행에 챙길 외화 환전액 빠르게 확인.'
			],
			ja: [
				'海外通販やサブスクリプション料金の試算。',
				'海外旅行の予算を現地通貨で計画。',
				'国ごとの給与やフリーランス単価の比較。',
				'海外送金前の概算確認。',
				'旅行用に持参する外貨額の確認。'
			],
			zh: [
				'估算海外购物或订阅费用。',
				'按当地货币规划出行预算。',
				'比较不同国家的薪资或自由职业报价。',
				'境外汇款前预估金额。',
				'快速确定旅行需要兑换多少现金。'
			]
		},
		faq: {
			en: [
				{ q: 'Are these real-time rates?', a: 'No. The European Central Bank publishes reference rates once per business day. Forex markets fluctuate continuously throughout the day.' },
				{ q: 'Why is the bank giving me a worse rate?', a: 'Banks and exchanges add a spread (typically 1–4%) plus fees. The mid-market rate shown here is a baseline reference.' },
				{ q: 'Can I rely on this for trading?', a: 'No. This tool is for general information only. Use a licensed broker with live tick data for trading decisions.' },
				{ q: 'Why is my chosen currency missing?', a: 'The Frankfurter API focuses on widely-traded ECB-listed currencies. Niche currencies may not be available.' }
			],
			ko: [
				{ q: '실시간 환율인가요?', a: '아닙니다. 유럽중앙은행은 영업일 기준 하루 한 번 기준 환율을 발표합니다. 실제 외환 시장은 24시간 변동합니다.' },
				{ q: '은행 환율이 더 불리한 이유는?', a: '은행과 환전소는 보통 1~4%의 스프레드와 수수료를 추가합니다. 여기서 보이는 미드마켓 환율은 기준값일 뿐입니다.' },
				{ q: '이 도구로 트레이딩을 해도 되나요?', a: '안 됩니다. 일반 정보 제공용입니다. 매매 결정에는 라이선스 브로커의 실시간 시세를 사용하세요.' },
				{ q: '원하는 통화가 목록에 없습니다.', a: 'Frankfurter API는 ECB 기준 거래량이 많은 통화 위주로 제공합니다. 특수 통화는 지원되지 않을 수 있습니다.' }
			],
			ja: [
				{ q: 'これはリアルタイムのレートですか？', a: 'いいえ。欧州中央銀行（ECB）は営業日ごとに1回、参照レートを公表します。外国為替市場は1日を通して絶えず変動しています。' },
				{ q: '銀行のレートが不利なのはなぜですか？', a: '銀行や両替所はスプレッド（通常1〜4%）と手数料を上乗せします。ここに表示される仲値レートはあくまで基準となる参照値です。' },
				{ q: 'このツールをトレーディングに使えますか？', a: 'いいえ。本ツールは一般的な情報提供のみを目的としています。売買の判断には、ライブのティックデータを提供するライセンス取得済みブローカーをご利用ください。' },
				{ q: '使いたい通貨が見つからないのはなぜですか？', a: 'Frankfurter APIはECBに掲載されている取引量の多い通貨を中心に提供しています。マイナーな通貨は利用できない場合があります。' }
			],
			zh: [
				{ q: '这些是实时汇率吗？', a: '不是。欧洲央行（ECB）每个工作日只公布一次参考汇率。而外汇市场全天持续波动。' },
				{ q: '为什么银行给我的汇率更差？', a: '银行和兑换机构会加上点差（通常 1–4%）以及手续费。此处显示的中间价只是一个基准参考值。' },
				{ q: '我可以依据它来做交易吗？', a: '不可以。本工具仅供一般参考。交易决策请使用持牌经纪商提供的实时行情数据。' },
				{ q: '为什么没有我想要的货币？', a: 'Frankfurter API 主要覆盖 ECB 列出的交易活跃货币，小众货币可能不可用。' }
			]
		},
		related: [
			{ href: '/percentage', label: { en: 'Percentage', ko: '퍼센트 계산기', ja: 'パーセント計算', zh: '百分比' } },
			{ href: '/loan-calculator', label: { en: 'Loan Calculator', ko: '대출 계산기', ja: 'ローン計算機', zh: '贷款计算器' } },
			{ href: '/compound-interest', label: { en: 'Compound Interest', ko: '복리 계산기', ja: '複利計算機', zh: '复利计算器' } }
		],
		externalRefs: [
			{ href: 'https://www.iso.org/iso-4217-currency-codes.html', label: 'ISO 4217 Currency Codes' },
			{ href: 'https://www.xe.com/currencyconverter/', label: 'XE Currency Converter' }
		]
	};

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let amount = 1000;
	let fromCurrency = 'USD';
	let toCurrency = 'KRW';
	let rates: Record<string, number> = {};
	let loading = true;
	let lastUpdated = '';

	const currencies = [
		{ code: 'USD', name: 'US Dollar', symbol: '$' },
		{ code: 'EUR', name: 'Euro', symbol: '€' },
		{ code: 'GBP', name: 'British Pound', symbol: '£' },
		{ code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
		{ code: 'KRW', name: 'Korean Won', symbol: '₩' },
		{ code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
		{ code: 'CAD', name: 'Canadian Dollar', symbol: '$' },
		{ code: 'AUD', name: 'Australian Dollar', symbol: '$' },
		{ code: 'CHF', name: 'Swiss Franc', symbol: 'Fr' },
		{ code: 'HKD', name: 'Hong Kong Dollar', symbol: '$' },
		{ code: 'SGD', name: 'Singapore Dollar', symbol: '$' },
		{ code: 'INR', name: 'Indian Rupee', symbol: '₹' }
	];

	async function fetchRates() {
		loading = true;
		try {
			// Using frankfurter.app - free, no API key needed
			const res = await fetch(`https://api.frankfurter.app/latest?from=${fromCurrency}`);
			const data = await res.json();
			rates = { [fromCurrency]: 1, ...data.rates };
			lastUpdated = data.date;
		} catch (e) {
			console.error('Failed to fetch rates', e);
			// Fallback rates (approximate)
			rates = {
				USD: 1, EUR: 0.92, GBP: 0.79, JPY: 149.5, KRW: 1320,
				CNY: 7.24, CAD: 1.36, AUD: 1.53, CHF: 0.88, HKD: 7.82,
				SGD: 1.34, INR: 83.1
			};
		}
		loading = false;
	}

	$: convertedAmount = amount * (rates[toCurrency] || 1) / (rates[fromCurrency] || 1);
	$: rate = (rates[toCurrency] || 1) / (rates[fromCurrency] || 1);

	function swapCurrencies() {
		[fromCurrency, toCurrency] = [toCurrency, fromCurrency];
	}

	function formatNumber(num: number, decimals = 2): string {
		if (num >= 1000) {
			return new Intl.NumberFormat().format(Math.round(num * 100) / 100);
		}
		return num.toFixed(decimals);
	}

	onMount(() => {
		fetchRates();
	});

	$: if (fromCurrency) fetchRates();
</script>

<svelte:head>
	<title>{t('currency.title')} - SD.gy</title>
	<meta name="description" content={t('currency.desc')} />
	<link rel="canonical" href="https://sd.gy/{lang}/currency-converter" />
	<meta property="og:title" content="{t('currency.title')} - SD.gy" />
	<meta property="og:description" content={t('currency.desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/currency-converter" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('currency.title')} - SD.gy" />
	<meta name="twitter:description" content={t('currency.desc')} />
</svelte:head>

<div class="max-w-2xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('currency.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('currency.desc')}</p>
	</div>

	<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
		<!-- Amount Input -->
		<div class="mb-6">
			<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('currency.amount')}</label>
			<input
				type="number"
				bind:value={amount}
				min="0"
				step="0.01"
				class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 text-2xl font-semibold"
			/>
		</div>

		<!-- Currency Selection -->
		<div class="grid grid-cols-[1fr,auto,1fr] gap-3 items-center mb-6">
			<div>
				<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('currency.from')}</label>
				<select
					bind:value={fromCurrency}
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500"
				>
					{#each currencies as curr}
						<option value={curr.code}>{curr.code} - {curr.name}</option>
					{/each}
				</select>
			</div>

			<button
				on:click={swapCurrencies}
				class="mt-6 p-3 rounded-full bg-violet-100 dark:bg-dark-700 text-violet-500 hover:bg-violet-200 dark:hover:bg-dark-600 transition-colors"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
				</svg>
			</button>

			<div>
				<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('currency.to')}</label>
				<select
					bind:value={toCurrency}
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500"
				>
					{#each currencies as curr}
						<option value={curr.code}>{curr.code} - {curr.name}</option>
					{/each}
				</select>
			</div>
		</div>

		<!-- Result -->
		<div class="bg-gray-50 dark:bg-dark-700 rounded-xl p-6">
			{#if loading}
				<div class="text-center text-gray-500 dark:text-dark-400">{t('common.loading')}</div>
			{:else}
				<div class="text-center">
					<p class="text-sm text-gray-600 dark:text-dark-400 mb-2">
						{formatNumber(amount)} {fromCurrency} =
					</p>
					<p class="text-4xl font-bold text-violet-500">
						{formatNumber(convertedAmount)} {toCurrency}
					</p>
					<p class="text-sm text-gray-500 dark:text-dark-400 mt-4">
						1 {fromCurrency} = {formatNumber(rate, 4)} {toCurrency}
					</p>
				</div>
			{/if}
		</div>

		<!-- Last Updated -->
		{#if lastUpdated}
			<p class="text-xs text-gray-400 dark:text-dark-500 text-center mt-4">
				{t('currency.updated')}: {lastUpdated}
			</p>
		{/if}
	</div>

	<!-- Info -->
	<div class="mt-8 bg-blue-50 dark:bg-dark-800 rounded-xl p-6 border border-blue-200 dark:border-dark-700">
		<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-3">{t('currency.info')}</h2>
		<p class="text-sm text-gray-600 dark:text-dark-400">{t('currency.infoText')}</p>
	</div>

	<ToolContent
		{lang}
		toolName="Currency Converter"
		toolUrl="https://sd.gy/{lang}/currency-converter"
		lastUpdated="2026-04-30"
		category="Daily Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sd.gy/${lang}` },
			{ name: 'Tools', url: `https://sd.gy/${lang}` },
			{ name: 'Currency Converter', url: `https://sd.gy/${lang}/currency-converter` }
		]}
		content={toolContent}
	/>

	<ToolGuide {lang} sections={guideSections} />
</div>
