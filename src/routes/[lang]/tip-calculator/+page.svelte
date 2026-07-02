<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'Tipping Norms by Country: From 20% to Zero',
				ko: '나라별 팁 문화 — 20%부터 0%까지',
				ja: '国別チップ事情 — 20％からゼロまで',
				zh: '各国小费惯例：从 20% 到零'
			},
			body: {
				en: `Tipping is one of the few everyday customs where doing the polite thing in one country would be a faux pas in another, so the right percentage depends entirely on where the table is.

In the United States, tipping at sit-down restaurants is effectively mandatory: 15 percent is the traditional floor, 18 to 20 percent is now the mainstream expectation, and in large cities 20 to 22 percent is common. The reason is structural — under federal law, employers may pay tipped staff a cash wage as low as 2.13 dollars per hour and count expected tips toward the minimum wage, so the tip is the server's income, not a bonus. Canada tracks the US closely at 15 to 20 percent.

The United Kingdom expects 10 to 12.5 percent at table-service restaurants, though many London venues add a 12.5 percent service charge automatically — in which case nothing more is expected. Across most of continental Europe, service is legally included in the price ("service compris" in France), and locals simply round up or leave 5 to 10 percent for good service.

Then there are the no-tip cultures. In Japan, tipping is not practiced and can cause genuine confusion; staff may chase you down to return "forgotten" money. Good service is considered part of the job, and the polite response is a verbal thank-you. South Korea is similar — no tipping at restaurants, cafes, or taxis, with some luxury hotels adding a 10 percent service charge to the bill instead. In China tipping is generally not expected outside tour guides and high-end international hotels.`,
				ko: `팁은 한 나라에서는 예의인 행동이 다른 나라에서는 결례가 되는 몇 안 되는 일상 관습입니다. 그래서 적절한 퍼센트는 전적으로 그 식탁이 어느 나라에 있느냐에 달려 있습니다.

미국의 테이블 서비스 식당에서 팁은 사실상 의무입니다. 15%가 전통적인 하한선이고, 18~20%가 현재 주류 기대치이며, 대도시에서는 20~22%도 흔합니다. 이유는 구조적입니다. 연방법상 고용주는 팁을 받는 직원에게 시급을 2.13달러까지만 현금으로 지급하고 예상 팁을 최저임금에 산입할 수 있습니다. 즉 팁은 보너스가 아니라 서버의 소득입니다. 캐나다는 미국과 비슷하게 15~20%입니다.

영국의 테이블 서비스 식당은 10~12.5%를 기대하지만, 런던의 많은 업소는 12.5% 서비스 차지를 자동으로 붙입니다. 이 경우 추가 팁은 필요 없습니다. 유럽 대륙 대부분에서는 서비스 요금이 법적으로 가격에 포함되어 있어("service compris" — 프랑스), 현지인들은 반올림하거나 좋은 서비스에 5~10% 정도를 남기는 정도입니다.

그리고 팁이 없는 문화권이 있습니다. 일본에서는 팁 관습이 없고 오히려 진짜 혼란을 일으킬 수 있습니다. 직원이 "두고 간" 돈을 돌려주러 쫓아오기도 합니다. 좋은 서비스는 일의 일부로 여겨지며, 예의 바른 반응은 말로 하는 감사 인사입니다. 한국도 비슷합니다. 식당, 카페, 택시에서 팁을 주지 않으며, 일부 고급 호텔이 대신 계산서에 10% 봉사료를 추가합니다. 중국에서는 투어 가이드와 고급 국제 호텔을 제외하면 일반적으로 팁을 기대하지 않습니다.`,
				ja: `チップは、ある国では礼儀正しい行為が別の国では失礼になりうる、数少ない日常習慣の一つです。だから適切なパーセントは、そのテーブルがどの国にあるかで完全に決まります。

米国のテーブルサービスのレストランでは、チップは事実上の義務です。15％が伝統的な下限で、いまは18〜20％が主流の期待値、大都市では20〜22％も一般的です。理由は構造的なものです。連邦法では、雇用主はチップを受け取る従業員に時給2.13ドルまでしか現金で払わず、見込みチップを最低賃金に算入できます。つまりチップはボーナスではなく、サーバーの収入そのものです。カナダも米国とほぼ同じ15〜20％です。

英国のテーブルサービスの店では10〜12.5％が期待されますが、ロンドンの多くの店は12.5％のサービス料を自動的に加算します。その場合、追加のチップは不要です。ヨーロッパ大陸の大半では、サービス料は法的に価格に含まれており（フランスの「service compris」）、地元の人は端数を切り上げるか、良いサービスに5〜10％を置く程度です。

そしてチップのない文化圏があります。日本にはチップの習慣がなく、むしろ本気で戸惑わせてしまうことがあります。店員が「忘れ物」のお金を返しに追いかけてくることさえあります。良いサービスは仕事の一部と考えられており、礼儀正しい応答は言葉でのお礼です。韓国も同様で、レストラン、カフェ、タクシーでチップは渡さず、一部の高級ホテルが代わりに10％のサービス料を請求書に加えます。中国では、ツアーガイドや高級国際ホテルを除き、チップは一般に期待されません。`,
				zh: `小费是少数几种"在一国是礼貌、在另一国却是失礼"的日常习俗之一，所以合适的百分比完全取决于餐桌摆在哪个国家。

在美国，堂食餐厅的小费实际上是强制性的：15% 是传统底线，18% 到 20% 是如今的主流预期，大城市里 20% 到 22% 也很常见。原因是结构性的——根据联邦法律，雇主可以只给拿小费的员工低至每小时 2.13 美元的现金工资，把预期小费计入最低工资，因此小费是服务员的收入，而非奖励。加拿大与美国接近，为 15% 到 20%。

英国的堂食餐厅期待 10% 到 12.5%，不过伦敦很多店会自动加收 12.5% 的服务费——这种情况下无需再给。在欧洲大陆大部分地区，服务费依法已含在价格里（法国的"service compris"），当地人只是把账单凑个整，或为出色服务留 5% 到 10%。

还有不给小费的文化圈。在日本，没有给小费的习惯，塞钱反而可能引起真正的困惑；店员甚至会追出来归还你"落下"的钱。优质服务被视为工作的一部分，礼貌的回应是口头道谢。韩国类似——餐厅、咖啡店、出租车都不给小费，部分高级酒店会改为在账单上加收 10% 服务费。在中国，除导游和高端国际酒店外通常不需要小费。`
			}
		},
		{
			heading: {
				en: 'Pre-Tax or Post-Tax? The Base You Tip On Matters',
				ko: '세전인가 세후인가 — 팁을 계산하는 기준 금액이 중요하다',
				ja: '税抜きか税込みか — チップの基準額で差が出る',
				zh: '税前还是税后？小费的计算基数很重要'
			},
			body: {
				en: `In the US, the same 20 percent produces two different tips depending on which line of the receipt you apply it to, and etiquette guides are unanimous: the tip is customarily calculated on the pre-tax subtotal, because sales tax is money that goes to the state, not a service the staff provided.

The difference is small per meal but real. Take an 80-dollar food subtotal in New York City, where combined sales tax is 8.875 percent: the receipt total is 87.10. Twenty percent of the pre-tax amount is 16.00; twenty percent of the post-tax total is 17.42 — a gap of 1.42 dollars, or 1.8 percent of the food bill. A household dining out weekly at that level quietly pays about 74 dollars more per year by tipping on the total. Neither choice is wrong — many diners deliberately tip on the total as a generosity — but you should know which one you are doing rather than letting the receipt decide for you.

Two practical wrinkles. First, tip-suggestion lines printed at the bottom of US receipts are frequently computed on the post-tax total (and sometimes on the amount after a discount was applied to your food but not to the suggestion). Reading which base was used takes five seconds and is worth it. Second, in VAT countries such as Korea, Japan, Germany, or the UK, the menu price already includes consumption tax, so the pre-tax question disappears entirely — whatever tipping norm exists is applied to the price as displayed. This calculator applies your chosen percentage to whatever amount you enter, so enter the pre-tax subtotal if that is your intended base.`,
				ko: `미국에서는 같은 20%라도 영수증의 어느 줄에 적용하느냐에 따라 팁이 달라집니다. 에티켓 가이드들의 입장은 일치합니다. 팁은 관례상 세전 소계를 기준으로 계산합니다. 판매세는 주 정부로 가는 돈이지 직원이 제공한 서비스가 아니기 때문입니다.

식사 한 끼로는 작지만 실재하는 차이입니다. 합산 판매세율이 8.875%인 뉴욕시에서 음식 소계 80달러를 예로 들면, 영수증 합계는 87.10달러입니다. 세전 금액의 20%는 16.00달러, 세후 합계의 20%는 17.42달러 — 1.42달러, 즉 음식값의 1.8% 차이입니다. 이 수준으로 매주 외식하는 가정은 합계 기준으로 팁을 주는 것만으로 연간 약 74달러를 조용히 더 지출합니다. 어느 쪽도 틀린 것은 아닙니다. 일부러 합계 기준으로 후하게 주는 사람도 많습니다. 다만 영수증이 대신 결정하게 두지 말고, 자신이 어느 기준을 쓰는지 알고 선택해야 합니다.

실전에서 주의할 점 두 가지. 첫째, 미국 영수증 하단에 인쇄된 팁 제안 금액은 세후 합계 기준으로 계산된 경우가 많습니다(음식에는 할인이 적용됐는데 제안 금액에는 반영되지 않는 경우도 있습니다). 어떤 기준으로 계산됐는지 확인하는 데는 5초면 충분하고, 그만한 가치가 있습니다. 둘째, 한국, 일본, 독일, 영국 같은 부가가치세 국가에서는 메뉴 가격에 소비세가 이미 포함되어 있어 세전·세후 문제 자체가 사라집니다. 팁 관습이 있다면 표시된 가격 그대로에 적용하면 됩니다. 이 계산기는 입력한 금액에 선택한 퍼센트를 적용하므로, 세전 기준을 원한다면 세전 소계를 입력하세요.`,
				ja: `米国では、同じ20％でもレシートのどの行に適用するかでチップの額が変わります。エチケットガイドの見解は一致しています。チップは慣習として税抜きの小計に対して計算します。売上税は州に納める金額であって、スタッフが提供したサービスではないからです。

1食あたりの差は小さいものの、確かに存在します。合算売上税率8.875％のニューヨーク市で、料理の小計80ドルを例にすると、レシートの合計は87.10ドル。税抜き額の20％は16.00ドル、税込み合計の20％は17.42ドル — 差は1.42ドル、料理代の1.8％です。このレベルで毎週外食する世帯は、合計基準でチップを払うだけで年間約74ドルを静かに余分に支出します。どちらが間違いというわけではありません。あえて合計基準で気前よく払う人も大勢います。ただ、レシート任せにせず、自分がどちらの基準を使っているかを知ったうえで選ぶべきです。

実践上の注意点が2つあります。第一に、米国のレシート下部に印字されるチップ提案額は、税込み合計を基準に計算されていることが少なくありません（料理には割引が適用されたのに、提案額には反映されていないことさえあります）。どの基準で計算されたかを読むのは5秒で済み、その価値があります。第二に、日本、韓国、ドイツ、英国のようなVAT（消費税）の国では、メニュー価格にすでに税が含まれているため、税抜きか税込みかという問題自体が消えます。チップの慣習がある場合は、表示価格にそのまま適用すればよいのです。この計算機は入力した金額に選んだパーセントを適用するので、税抜き基準にしたい場合は税抜きの小計を入力してください。`,
				zh: `在美国，同样是 20%，套在收据的哪一行上会得出两个不同的小费。礼仪指南的观点是一致的：小费按惯例以税前小计为基数计算，因为销售税是交给州政府的钱，不是员工提供的服务。

每顿饭的差额不大，但确实存在。以纽约市为例，综合销售税率 8.875%，餐费小计 80 美元，收据总额为 87.10 美元。税前金额的 20% 是 16.00 美元；税后总额的 20% 是 17.42 美元——相差 1.42 美元，即餐费的 1.8%。按这个水平每周外出就餐的家庭，仅仅因为按总额给小费，每年就悄悄多付约 74 美元。两种做法都不算错——不少食客有意按总额给以示慷慨——但你应该清楚自己用的是哪种基数，而不是让收据替你决定。

实践中有两个细节。第一，美国收据底部印的小费建议金额，常常是按税后总额算的（有时你的餐费打了折，建议金额却没有随之调整）。花五秒钟看清用的是哪个基数，很值得。第二，在韩国、日本、德国、英国等增值税国家，菜单价格已含消费税，税前税后的问题根本不存在——如有小费惯例，直接按标价计算即可。本计算器会把你选定的百分比套用在你输入的任何金额上，所以若想以税前为基数，请输入税前小计。`
			},
			code: {
				example: `New York City dinner, food subtotal $80.00, tax 8.875%:

  Receipt total: 80.00 x 1.08875 = 87.10

  20% tip on pre-tax subtotal:  80.00 x 0.20 = 16.00
  20% tip on post-tax total:    87.10 x 0.20 = 17.42
                                 difference   =  1.42

  Once a week for a year: 1.42 x 52 = ~$74 extra
  Custom: etiquette says tip the PRE-TAX line.`
			}
		},
		{
			heading: {
				en: 'Service Charge, Auto-Gratuity, and the Double-Tip Trap',
				ko: '서비스 차지, 자동 봉사료, 그리고 이중 팁의 함정',
				ja: 'サービス料、自動チップ、そして二重チップの罠',
				zh: '服务费、自动小费与"重复给小费"的陷阱'
			},
			body: {
				en: `A tip and a service charge look identical on a bill but are legally and practically different things, and confusing them is the most expensive tipping mistake a diner can make.

A tip (gratuity) is a voluntary payment that, in the US, legally belongs to the employee. A service charge is a mandatory fee set by the business — and because it is compulsory, US law treats it as the restaurant's revenue, which the house may keep, share with staff, or use however it likes. The label matters: an "18 percent service charge" line does not guarantee your server sees any of it, which is why some diners quietly add a small cash tip on top when they know the house keeps the charge.

The double-tip trap arises where the two systems overlap. Many US restaurants add an automatic gratuity of 18 to 20 percent for parties of six or more; if you then tip your usual 20 percent on the total line, you have paid roughly 40 percent extra without noticing. The fix is a two-second scan of the bill for lines named "service charge", "gratuity", "auto-grat", or "large party fee" before touching the tip line. The same applies in London (12.5 percent service charge is standard), in tourist-heavy areas of Europe, and on room-service and resort bills where fees stack.`,
				ko: `팁과 서비스 차지는 계산서에서 똑같아 보이지만 법적으로나 실무적으로 다른 것이며, 이 둘을 혼동하는 것이 외식에서 가장 비싼 팁 실수입니다.

팁(gratuity)은 자발적 지불이며 미국에서는 법적으로 직원의 것입니다. 서비스 차지는 업소가 정한 의무 요금입니다. 강제성이 있기 때문에 미국 법은 이를 식당의 매출로 취급하며, 업소는 이를 가지거나 직원과 나누거나 마음대로 쓸 수 있습니다. 명칭이 중요합니다. "18% 서비스 차지" 항목이 있어도 담당 서버에게 한 푼이라도 간다는 보장이 없습니다. 그래서 업소가 차지를 가져간다는 걸 아는 일부 손님은 조용히 소액의 현금 팁을 따로 얹기도 합니다.

이중 팁의 함정은 두 시스템이 겹치는 곳에서 생깁니다. 미국의 많은 식당은 6인 이상 단체에 18~20%의 자동 봉사료를 부과합니다. 이때 합계 줄에 평소처럼 20% 팁을 또 주면, 자기도 모르게 약 40%를 추가로 낸 셈이 됩니다. 해결책은 팁 줄을 만지기 전에 계산서에서 "service charge", "gratuity", "auto-grat", "large party fee" 같은 항목을 2초간 훑어보는 것입니다. 런던(12.5% 서비스 차지가 표준), 유럽의 관광지, 수수료가 겹겹이 쌓이는 룸서비스·리조트 계산서에서도 마찬가지입니다.`,
				ja: `チップとサービス料は請求書上では同じに見えますが、法的にも実務的にも別物です。この2つの混同こそ、外食で最も高くつくチップの失敗です。

チップ（gratuity）は自発的な支払いで、米国では法的に従業員のものです。サービス料は店が定めた強制的な料金です。強制である以上、米国の法律はこれをレストランの売上として扱い、店はそれを自分のものにしても、スタッフと分けても、好きに使ってもかまいません。名目が重要です。「18％サービス料」という行があっても、担当のサーバーに1セントでも渡る保証はありません。だからこそ、店がサービス料を取ることを知っている客の中には、少額の現金チップをそっと上乗せする人もいます。

二重チップの罠は、2つの仕組みが重なる場所で生じます。米国の多くのレストランは6人以上のグループに18〜20％の自動チップ（auto-gratuity）を加算します。そこで合計行にいつもどおり20％のチップを払うと、気づかないまま約40％も余分に払ったことになります。対策は、チップ欄に手を付ける前に、請求書に「service charge」「gratuity」「auto-grat」「large party fee」といった行がないか2秒間確認することです。ロンドン（12.5％のサービス料が標準）、ヨーロッパの観光地、料金が積み重なるルームサービスやリゾートの請求書でも同じです。`,
				zh: `小费和服务费在账单上看起来一模一样，但在法律和实务上是两回事，混淆它们是食客可能犯的最昂贵的小费错误。

小费（gratuity）是自愿支付的款项，在美国法律上属于员工。服务费则是商家设定的强制性收费——正因为是强制的，美国法律将其视为餐厅的营业收入，店家可以自留、与员工分享，或随意支配。名目很关键："18% 服务费"这一行并不能保证你的服务员能拿到分毫，因此一些知道店家自留服务费的食客，会悄悄另加一点现金小费。

"重复给小费"的陷阱出现在两套体系重叠的地方。美国许多餐厅对六人及以上的用餐团体自动加收 18% 到 20% 的服务费；如果你再按惯例对总额给 20% 小费，就在不知不觉中多付了约 40%。对策是在动笔填小费栏之前，花两秒扫一眼账单上有没有"service charge""gratuity""auto-grat""large party fee"之类的行。同样的道理适用于伦敦（12.5% 服务费是标准配置）、欧洲的旅游区，以及费用层层叠加的客房送餐和度假村账单。`
			}
		},
		{
			heading: {
				en: 'Splitting the Bill Without Drama',
				ko: '얼굴 붉히지 않고 계산서 나누기',
				ja: 'もめずに割り勘するために',
				zh: '优雅地分摊账单'
			},
			body: {
				en: `Most tip-calculator arguments are really bill-splitting arguments, and there are only two honest methods: the even split and the itemized split.

The even split — total including tip, divided by headcount — is what this calculator's per-person panel computes, and it is the right default when everyone ordered within the same rough range. It is fast, it feels friendly, and it avoids the sad arithmetic of auditing who had the extra side dish. The classic failure case is the drinker/non-drinker table: if four people share a 200-dollar bill of which one person's wine was 60 dollars, an even split makes each teetotaler subsidize the wine by 15 dollars. The widely accepted fix is that the person with the outlier order volunteers to pay the difference before anyone has to ask.

The itemized split — each person pays their own items plus a proportional share of tip and any tax — is fairer for uneven orders and painless now that payment apps let one person pay the restaurant and collect exact amounts from the others. Etiquette note that survives every era: whoever puts their card down should be repaid the tip-inclusive amount, not the pre-tip one.

Work a full example: an 87.40-dollar bill for four, tipping 18 percent. The tip is 15.73, the total 103.13, and the even split is 25.78 each. In cash, the practical move is rounding each share up to 26 — the extra 22 cents per person absorbs rounding and slightly pads the tip, which is always the polite direction to err. One more convention worth naming: rounding should favor the server, never the payer, because the alternative leaves the card-holder covering everyone else's rounding.`,
				ko: `팁 계산기를 둘러싼 다툼의 대부분은 사실 계산서 나누기 다툼이며, 정직한 방법은 두 가지뿐입니다. 균등 분할과 항목별 분할입니다.

균등 분할 — 팁 포함 총액을 인원수로 나누는 방식 — 은 이 계산기의 1인당 패널이 계산해 주는 것으로, 모두가 비슷한 가격대로 주문했다면 올바른 기본값입니다. 빠르고, 훈훈하고, 누가 사이드 메뉴를 하나 더 시켰는지 따지는 서글픈 산수를 피하게 해 줍니다. 고전적인 실패 사례는 술을 마시는 사람과 안 마시는 사람이 섞인 테이블입니다. 4명이 200달러 계산서를 나누는데 그중 한 사람의 와인이 60달러라면, 균등 분할은 술을 안 마신 사람마다 와인값 15달러씩을 보조하게 만듭니다. 널리 받아들여지는 해법은, 튀는 주문을 한 사람이 누가 말을 꺼내기 전에 먼저 차액을 내겠다고 자청하는 것입니다.

항목별 분할 — 각자 자기가 주문한 것에 팁과 세금의 비례 몫을 더해 내는 방식 — 은 주문이 불균등할 때 더 공정하며, 한 사람이 식당에 결제하고 나머지에게 정확한 금액을 송금받는 결제 앱 덕분에 이제 번거롭지도 않습니다. 시대가 바뀌어도 유효한 에티켓: 카드를 내민 사람에게는 팁 포함 금액을 갚아야지, 팁 빼고 갚으면 안 됩니다.

전체 예를 계산해 봅시다. 4명이 87.40달러 계산서에 18% 팁을 준다면, 팁은 15.73달러, 총액은 103.13달러, 균등 분할은 1인당 25.78달러입니다. 현금이라면 각자 26달러로 올림하는 것이 실용적입니다. 1인당 22센트의 여유가 반올림 오차를 흡수하고 팁을 살짝 두툼하게 만드는데, 오차를 낼 거라면 항상 그쪽이 예의 바른 방향입니다. 이름 붙일 가치가 있는 관례 하나 더: 반올림은 서버에게 유리하게 해야지 지불자에게 유리하게 하면 안 됩니다. 그 반대는 카드 주인이 모두의 반올림 오차를 떠안게 만들기 때문입니다.`,
				ja: `チップ計算機をめぐる言い争いの大半は、実は割り勘をめぐる言い争いです。そして誠実な方法は2つしかありません。均等割りと、注文別精算です。

均等割り — チップ込みの総額を人数で割る方式 — は、この計算機の1人あたりパネルが計算してくれるもので、全員が同じような価格帯で注文したなら正しいデフォルトです。速く、感じが良く、誰がサイドディッシュを1品多く頼んだかを監査する物悲しい算数を避けられます。古典的な失敗例は、飲む人と飲まない人が混ざったテーブルです。4人で200ドルの請求書を割るとき、1人のワインが60ドルなら、均等割りは下戸1人につき15ドルずつワイン代を負担させることになります。広く受け入れられている解決策は、突出した注文をした人が、誰かに言われる前に自分から差額を払うと申し出ることです。

注文別精算 — 各自が自分の注文分に、チップと税の比例配分を加えて払う方式 — は注文に偏りがあるとき、より公平です。1人が店に支払い、他の人から正確な金額を送金してもらえる決済アプリのおかげで、手間もかかりません。どの時代にも通用するエチケットを一つ。カードを出した人には、チップ込みの金額を返すべきで、チップ抜きではいけません。

具体例を最後まで計算してみましょう。4人で87.40ドルの請求書、チップは18％。チップは15.73ドル、総額は103.13ドル、均等割りは1人25.78ドルです。現金なら、各自26ドルに切り上げるのが実用的です。1人あたり22セントの余裕が丸め誤差を吸収し、チップをわずかに厚くします。誤差を出すなら、常にそちらが礼儀正しい方向です。名前を付ける価値のある慣例をもう一つ。丸めはサーバーに有利に、支払う側に有利にしてはいけません。逆にすると、カードを出した人が全員分の丸め誤差をかぶることになるからです。`,
				zh: `围绕小费计算器的争执，多半其实是分账之争，而诚实的方法只有两种：均摊和按单结算。

均摊——含小费的总额除以人数——正是本计算器"每人"面板计算的内容。当大家点的东西价位相近时，它是正确的默认选择：快捷、友好，还能免去清算谁多点了一份配菜的尴尬算术。经典的失败场景是喝酒与不喝酒的人同桌：四个人分 200 美元的账单，其中一人的葡萄酒占 60 美元，均摊会让每位不喝酒的人为那瓶酒补贴 15 美元。被广泛认可的解法是：点了"离群"订单的人在别人开口之前，主动提出补上差额。

按单结算——每人支付自己点的菜品，外加按比例分摊的小费和税——在点单差距大时更公平。如今支付应用让一个人先向餐厅付款、再向其他人收取精确金额，操作毫不费事。有一条历久弥新的礼仪：还钱给刷卡的人时，应还含小费的金额，而不是不含小费的金额。

完整算一个例子：四人分摊 87.40 美元的账单，小费 18%。小费为 15.73 美元，总额 103.13 美元，均摊每人 25.78 美元。用现金时，实用做法是每人凑整到 26 美元——每人多出的 22 美分吸收了取整误差，还略微加厚了小费，而"宁多勿少"永远是更礼貌的出错方向。还有一条值得点名的惯例：取整应向服务员倾斜，而不是向付款人倾斜，否则刷卡的人就得替所有人垫付零头。`
			},
			code: {
				example: `Bill $87.40, tip 18%, party of 4:

  Tip:    87.40 x 0.18 = 15.73
  Total:  87.40 + 15.73 = 103.13
  Split:  103.13 / 4    = 25.78 per person

  Cash-friendly: round each share UP to 26.00
    4 x 26.00 = 104.00  ->  tip becomes 16.60 (19%)

  Rule of thumb: rounding favors the server,
  never the person whose card is on the table.`
			}
		},
		{
			heading: {
				en: 'Mental Math: Estimating a Tip Without Your Phone',
				ko: '암산으로 팁 계산하기 — 휴대폰 없이도',
				ja: '暗算でチップを出す — スマホなしで',
				zh: '心算小费：不用手机也能算'
			},
			body: {
				en: `The whole toolkit for tipping arithmetic is one move: 10 percent means shifting the decimal point one place left. Everything else is built from that.

From a 62.80 bill, 10 percent is 6.28. Double it for 20 percent: 12.56. Halve the 10 percent and add it back for 15 percent: 6.28 plus 3.14 is 9.42. For 18 percent, take 20 percent and subtract a tenth of it: 12.56 minus 1.26 is about 11.30. None of this requires more precision than the nearest dime, because tips are social gestures, not invoices — rounding 62.80 to 63 or even 60 before you start makes the mental load lighter and changes the tip by cents.

Two US-specific shortcuts are worth knowing. The double-the-tax trick: where sales tax runs 8 to 9 percent (New York City, Los Angeles, Seattle), doubling the tax line on the receipt lands between 16 and 18 percent — a respectable tip computed in one glance. It fails in low-tax states (Colorado's base rate is 2.9 percent) and in the five states with no sales tax at all, so know your locality before leaning on it. The second is round-to-a-clean-total: pick a tip that makes the final amount a round number, like turning 87.40 into an even 105.00 — a 20.1 percent tip that is easy to verify on the card slip and easy to spot later on a statement. And when several tricks need combining at once — odd percentages, big groups, splitting — that is exactly the moment this calculator exists for.`,
				ko: `팁 계산의 모든 도구는 결국 한 가지 동작입니다. 10%는 소수점을 왼쪽으로 한 칸 옮기는 것. 나머지는 전부 여기서 파생됩니다.

62.80달러 계산서에서 10%는 6.28달러입니다. 두 배로 하면 20%인 12.56달러. 10%의 절반을 더하면 15%로, 6.28 더하기 3.14는 9.42달러입니다. 18%는 20%에서 그 10분의 1을 빼면 됩니다. 12.56 빼기 1.26은 약 11.30달러. 이 모든 계산에 10센트 이상의 정밀도는 필요 없습니다. 팁은 청구서가 아니라 사회적 표현이니까요. 시작 전에 62.80을 63이나 아예 60으로 반올림하면 머릿속 부담은 줄고 팁 차이는 몇 센트에 불과합니다.

미국에서 유용한 지름길 두 가지를 알아 둘 만합니다. 첫째는 세금 두 배 트릭입니다. 판매세가 8~9%인 지역(뉴욕시, 로스앤젤레스, 시애틀)에서는 영수증의 세금 줄을 두 배 하면 16~18%가 되어, 한눈에 계산되는 준수한 팁이 됩니다. 다만 저세율 주(콜로라도 기본세율 2.9%)나 판매세가 아예 없는 5개 주에서는 통하지 않으니, 그 지역 세율을 알고 써야 합니다. 둘째는 깔끔한 총액 만들기입니다. 최종 금액이 딱 떨어지는 숫자가 되도록 팁을 정하는 방법으로, 87.40달러를 딱 105.00달러로 만들면 20.1% 팁이 됩니다. 카드 전표에서 검산하기 쉽고 나중에 명세서에서 알아보기도 쉽습니다. 그리고 이 요령들을 여러 개 조합해야 할 때 — 어중간한 퍼센트, 대인원, 분할 — 바로 그 순간을 위해 이 계산기가 존재합니다.`,
				ja: `チップ計算の道具箱は、結局ひとつの動作に尽きます。10％とは小数点を左に1桁ずらすこと。あとはすべてその応用です。

62.80ドルの請求書なら、10％は6.28ドル。2倍して20％なら12.56ドル。10％の半分を足せば15％で、6.28足す3.14は9.42ドル。18％なら20％からその10分の1を引きます。12.56引く1.26で約11.30ドル。どの計算も10セント単位より細かい精度は不要です。チップは請求書ではなく社交上の表現だからです。始める前に62.80を63、いっそ60に丸めれば、頭の負担は軽くなり、チップの差は数セントにとどまります。

米国限定の近道を2つ知っておくと便利です。1つ目は「税金2倍」の技。売上税が8〜9％の地域（ニューヨーク市、ロサンゼルス、シアトル）では、レシートの税額行を2倍すると16〜18％になり、一目で計算できる立派なチップになります。ただし低税率の州（コロラド州の基本税率は2.9％）や売上税自体がない5つの州では通用しないので、その土地の税率を知ってから頼りましょう。2つ目は「きりのいい総額」方式。最終金額がきりのいい数字になるようにチップを決める方法で、87.40ドルをちょうど105.00ドルにすれば20.1％のチップです。カード伝票で検算しやすく、後で明細を見返すときにも見つけやすくなります。そして、これらの技を複数組み合わせる必要があるとき — 半端なパーセント、大人数、割り勘 — そのときこそ、この計算機の出番です。`,
				zh: `小费算术的全部工具其实就一招：10% 等于把小数点左移一位。其余一切都由此衍生。

账单 62.80 美元，10% 是 6.28。翻倍得 20%：12.56。把 10% 减半再加回去得 15%：6.28 加 3.14 等于 9.42。要算 18%，用 20% 减去它的十分之一：12.56 减 1.26 约为 11.30。这些计算都不需要精确到一角以下，因为小费是社交表示，不是发票——开算之前把 62.80 凑成 63 甚至 60，心算负担更轻，小费只差几美分。

有两个美国特有的捷径值得掌握。其一是"税额翻倍"法：在销售税 8% 到 9% 的地方（纽约市、洛杉矶、西雅图），把收据上的税额行翻倍，正好落在 16% 到 18% 之间——扫一眼就算出一笔体面的小费。但它在低税率州（科罗拉多州基础税率仅 2.9%）和完全没有销售税的五个州会失灵，用之前先了解当地税率。其二是"凑整总额"法：挑一个能让最终金额变成整数的小费，比如把 87.40 凑成整整 105.00——相当于 20.1% 的小费，在签单时容易核对，日后看账单也一眼认出。而当这些技巧需要叠加使用时——零碎的百分比、大团体、分账——那正是本计算器存在的意义。`
			},
			code: {
				example: `Bill $62.80 — build every tip from the 10% move:

  10%: shift decimal        ->  6.28
  20%: double the 10%       -> 12.56
  15%: 10% + half of 10%    ->  6.28 + 3.14 = 9.42
  18%: 20% - a tenth of it  -> 12.56 - 1.26 = 11.30

  Double-the-tax (where tax is 8-9%):
    tax line 5.57 x 2 = 11.14  (~17.7% tip)

  Clean-total: tip 17.60 -> total exactly 105.00 on 87.40`
			}
		}
	];

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let billAmount = 50;
	let tipPercent = 15;
	let customTip = false;
	let numPeople = 2;

	const presetTips = [10, 15, 18, 20, 25];

	$: tipAmount = (billAmount * tipPercent) / 100;
	$: totalAmount = billAmount + tipAmount;
	$: perPersonTip = numPeople > 0 ? tipAmount / numPeople : 0;
	$: perPersonTotal = numPeople > 0 ? totalAmount / numPeople : 0;

	function selectTip(percent: number) {
		tipPercent = percent;
		customTip = false;
	}

	function formatCurrency(amount: number): string {
		return amount.toFixed(2);
	}
</script>

<svelte:head>
	<title>{t('tip.title')} - SD.gy</title>
	<meta name="description" content={t('tip.desc')} />
	<link rel="canonical" href="https://sd.gy/{lang}/tip-calculator" />
	<meta property="og:title" content="{t('tip.title')} - SD.gy" />
	<meta property="og:description" content={t('tip.desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/tip-calculator" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('tip.title')} - SD.gy" />
	<meta name="twitter:description" content={t('tip.desc')} />
</svelte:head>

<div class="max-w-2xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('tip.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('tip.desc')}</p>
	</div>

	<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
		<!-- Bill Amount -->
		<div class="mb-6">
			<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('tip.billAmount')}</label>
			<div class="relative">
				<span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-dark-400 text-lg">$</span>
				<input
					type="number"
					bind:value={billAmount}
					min="0"
					step="0.01"
					class="w-full pl-8 pr-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent text-xl"
				/>
			</div>
		</div>

		<!-- Tip Percentage -->
		<div class="mb-6">
			<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('tip.tipPercent')}</label>
			<div class="grid grid-cols-6 gap-2">
				{#each presetTips as preset}
					<button
						on:click={() => selectTip(preset)}
						class="py-3 rounded-xl font-semibold transition-colors {tipPercent === preset && !customTip ? 'bg-violet-500 text-white' : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
					>
						{preset}%
					</button>
				{/each}
				<button
					on:click={() => customTip = true}
					class="py-3 rounded-xl font-semibold transition-colors {customTip ? 'bg-violet-500 text-white' : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
				>
					{t('tip.custom')}
				</button>
			</div>
			{#if customTip}
				<div class="mt-3 flex items-center gap-2">
					<input
						type="number"
						bind:value={tipPercent}
						min="0"
						max="100"
						class="w-24 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
					<span class="text-gray-600 dark:text-dark-400">%</span>
				</div>
			{/if}
		</div>

		<!-- Number of People -->
		<div class="mb-6">
			<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('tip.people')}</label>
			<div class="flex items-center gap-4">
				<button
					on:click={() => numPeople = Math.max(1, numPeople - 1)}
					class="w-12 h-12 rounded-xl bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600 text-xl font-bold"
				>
					-
				</button>
				<input
					type="number"
					bind:value={numPeople}
					min="1"
					class="w-20 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-center text-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
				/>
				<button
					on:click={() => numPeople++}
					class="w-12 h-12 rounded-xl bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600 text-xl font-bold"
				>
					+
				</button>
			</div>
		</div>

		<!-- Results -->
		<div class="space-y-4">
			<div class="grid grid-cols-2 gap-4">
				<div class="bg-gray-50 dark:bg-dark-700 rounded-xl p-4">
					<div class="text-sm text-gray-600 dark:text-dark-400">{t('tip.tipAmount')}</div>
					<div class="text-2xl font-bold text-gray-900 dark:text-dark-100">${formatCurrency(tipAmount)}</div>
				</div>
				<div class="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-4">
					<div class="text-sm text-gray-600 dark:text-dark-400">{t('tip.total')}</div>
					<div class="text-2xl font-bold text-violet-600 dark:text-violet-400">${formatCurrency(totalAmount)}</div>
				</div>
			</div>

			{#if numPeople > 1}
				<div class="border-t border-gray-200 dark:border-dark-600 pt-4">
					<div class="text-sm text-gray-600 dark:text-dark-400 mb-3">{t('tip.perPerson')} ({numPeople})</div>
					<div class="grid grid-cols-2 gap-4">
						<div class="bg-gray-50 dark:bg-dark-700 rounded-xl p-4">
							<div class="text-sm text-gray-600 dark:text-dark-400">{t('tip.tipAmount')}</div>
							<div class="text-xl font-bold text-gray-900 dark:text-dark-100">${formatCurrency(perPersonTip)}</div>
						</div>
						<div class="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-4">
							<div class="text-sm text-gray-600 dark:text-dark-400">{t('tip.total')}</div>
							<div class="text-xl font-bold text-teal-600 dark:text-teal-400">${formatCurrency(perPersonTotal)}</div>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>

	<ToolGuide {lang} sections={guideSections} />
</div>
