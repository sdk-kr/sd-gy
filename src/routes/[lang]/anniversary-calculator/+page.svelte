<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'Day 1 or Day 0? Inclusive Counting and the 100-Day Tradition',
				ko: '첫날이 1일일까 0일일까 — 포함 계산과 100일 문화',
				ja: '初日は1日目か0日目か — 起算日の数え方と100日の伝統',
				zh: '第一天算"第1天"还是"第0天"？——包含计数与百日传统'
			},
			body: {
				en: `East Asian milestone culture counts inclusively: the starting date itself is day 1. When Korean couples celebrate their 100일 (100th day), the day they started dating counts as day one, so the anniversary lands 99 days after the start date — not 100. A couple who started dating on January 1 celebrates their 100th day on April 10 in a common year; adding a plain 100 days would give April 11 and an embarrassed apology. The same inclusive convention governs 백일, the traditional 100th-day celebration for newborns held across Korea (백일잔치), China (百日宴), and Japan (お食い初め is held around day 100), and even Buddhist memorial rites: the 49재 ceremony is held on the 49th day counting the day of death as day one.

This calculator shows elapsed days — the start date counts as day 0, matching how most software and legal systems subtract dates. If you want the Korean-style inclusive count, mentally add one to the number shown, or set the start date one day earlier. The milestone list (100 days, 200 days, 1,000 days) is likewise built by adding N days to the start date, so a strict inclusive celebrant should shift each listed date one day earlier.

Neither convention is more correct; what matters is that both people in the relationship use the same one. Korean couple apps such as 썸원 and Between default to inclusive counting, which is why their numbers run one day ahead of a plain date subtraction.`,
				ko: `동아시아의 기념일 문화는 포함 계산을 씁니다. 시작한 날 자체가 1일입니다. 한국 커플이 100일을 기념할 때 사귀기 시작한 날이 1일이므로, 기념일은 시작일로부터 100일이 아니라 99일 뒤에 옵니다. 1월 1일에 사귀기 시작한 커플의 100일은 평년 기준 4월 10일입니다. 단순히 100일을 더하면 4월 11일이 나와 곤란해집니다. 같은 포함 계산 관례가 아기의 백일잔치에도 적용되고, 중국의 백일연(百日宴), 일본의 오쿠이조메(お食い初め, 생후 100일 무렵) 역시 마찬가지입니다. 불교 의례도 같아서, 49재는 돌아가신 날을 1일로 세어 49일째 되는 날에 지냅니다.

이 계산기는 경과 일수를 보여 줍니다. 즉 시작일을 0일로 치는데, 이는 대부분의 소프트웨어와 법률 시스템이 날짜를 빼는 방식과 같습니다. 한국식 포함 계산을 원한다면 표시된 숫자에 1을 더해 읽거나, 시작일을 하루 앞당겨 입력하세요. 기념일 목록(100일, 200일, 1,000일)도 시작일에 N일을 더해 만들어지므로, 엄격한 포함 계산파라면 목록의 각 날짜를 하루씩 앞당겨야 합니다.

어느 관례가 더 옳은 것은 아닙니다. 중요한 것은 두 사람이 같은 방식을 쓰는 것입니다. 썸원, 비트윈 같은 한국 커플 앱은 기본값이 포함 계산이라서, 단순 날짜 빼기보다 숫자가 하루 앞서 갑니다.`,
				ja: `東アジアの記念日文化は「初日を含める」数え方をします。始まった日そのものが1日目です。韓国のカップルが100日（ペギル）を祝うとき、付き合い始めた日が1日目なので、記念日は開始日から100日後ではなく99日後に来ます。1月1日に付き合い始めたカップルの100日目は平年なら4月10日。単純に100日を足すと4月11日になってしまい、気まずい思いをします。同じ包含方式は赤ちゃんの生後100日のお祝いにも使われ、韓国のペギルチャンチ、中国の百日宴、日本のお食い初め（生後100日頃）も同様です。仏教の法要も同じで、四十九日は亡くなった日を1日目として数えて49日目に営みます。

この計算機は経過日数を表示します。つまり開始日を0日目とする方式で、ほとんどのソフトウェアや法制度の日付の引き算と一致します。韓国式の包含計算にしたい場合は、表示された数字に1を足して読むか、開始日を1日早めて入力してください。記念日リスト（100日・200日・1,000日）も開始日にN日を足して作られるため、厳密な包含派はリストの各日付を1日ずつ前にずらす必要があります。

どちらの方式が正しいというものではありません。大切なのは2人が同じ方式を使うことです。韓国のカップルアプリはデフォルトが包含計算なので、単純な日付の引き算より数字が1日先行します。`,
				zh: `东亚的纪念日文化采用"包含式"计数：起始日本身就是第1天。韩国情侣庆祝"100天"纪念日时，开始交往的那天算第一天，所以纪念日落在开始日之后第99天，而不是加100天。1月1日开始交往的情侣，平年的百日纪念是4月10日；直接加100天会得到4月11日，就尴尬了。同样的包含式惯例也适用于新生儿的百日庆：韩国的百日宴（백일잔치）、中国的百日宴、日本在出生约100天举行的"お食い初め"仪式皆是如此。佛教仪轨也一样："四十九日"法事把去世当天算作第1天，在第49天举行。

本计算器显示的是"已经过的天数"——起始日算第0天，与大多数软件和法律体系的日期相减方式一致。如果想要韩式包含计数，请把显示的数字加1来读，或者把起始日期提前一天输入。里程碑列表（100天、200天、1000天）同样是在起始日上加N天生成的，严格的包含式庆祝者应把列表中每个日期提前一天。

两种惯例没有对错之分，关键是两个人用同一种。韩国的情侣App默认使用包含式计数，所以它们的数字总比单纯的日期相减大一天。`
			},
			code: {
				example: `Start date: Jan 1 (couple starts dating)

Exclusive count (this tool):        Inclusive count (Korean 100일):
  Jan 1  = day 0                      Jan 1  = day 1
  Jan 2  = day 1                      Jan 2  = day 2
  ...                                 ...
  Apr 11 = day 100                    Apr 10 = day 100  (common year)

Check: Jan 2-31 (30) + Feb (28) + Mar (31) + Apr 1-10 (10) = 99 days
       elapsed -> inclusive day 100 falls on April 10.

Rule of thumb: inclusive anniversary = start date + (N - 1) days`
			}
		},
		{
			heading: {
				en: 'Wedding Anniversary Names Across Cultures',
				ko: '나라마다 다른 결혼기념일 이름',
				ja: '文化によって異なる結婚記念日の名前',
				zh: '各国不同的结婚周年名称'
			},
			body: {
				en: `The habit of attaching materials to wedding anniversaries is younger than it looks. Silver for 25 years and gold for 50 go back to Germanic central Europe (the silberne and goldene Hochzeit), but the year-by-year ladder — paper for 1, cotton for 2, leather for 3, and so on — was largely codified in 1937, when the American National Retail Jeweler Association published a complete list, unabashedly to sell more gifts. The materials escalate in durability and value as the marriage does: paper, cotton, leather, fruit and flowers, wood at 5, tin at 10, crystal at 15, china at 20, silver at 25, pearl at 30, ruby at 40, gold at 50, and diamond at 60.

The diamond anniversary owes its position to Queen Victoria, whose 1897 Diamond Jubilee marked 60 years on the throne; before that, diamond was sometimes attached to 75 years, and some British lists still carry both. The UK and US lists diverge in small ways elsewhere too — the UK traditionally gives wool for 7 where the US gives copper.

Japan adopted the Western ladder in the Meiji era, and 金婚式 (golden wedding, 50 years) and 銀婚式 (silver, 25) are now standard vocabulary. Korea historically emphasized a single great milestone instead: 회혼례, a re-enactment of the wedding ceremony on the 60th anniversary, echoing the sexagenary cycle that also underlies the 환갑 60th birthday. Modern Korean couples largely follow the Western names, with silver and gold weddings the most commonly celebrated.`,
				ko: `결혼기념일에 재료 이름을 붙이는 관습은 보기보다 역사가 짧습니다. 25주년의 은혼식과 50주년의 금혼식은 중부 유럽 게르만 문화(silberne/goldene Hochzeit)로 거슬러 올라가지만, 1주년 종이, 2주년 면, 3주년 가죽처럼 해마다 이어지는 사다리는 1937년 미국 소매보석상협회가 선물 판매를 위해 완결된 목록을 발표하면서 대체로 정착했습니다. 재료는 결혼 연차와 함께 내구성과 가치가 올라갑니다. 종이, 면, 가죽, 과일과 꽃, 5주년 나무, 10주년 주석, 15주년 크리스털, 20주년 도자기, 25주년 은, 30주년 진주, 40주년 루비, 50주년 금, 60주년 다이아몬드 순입니다.

다이아몬드혼식이 60주년이 된 것은 빅토리아 여왕 덕분입니다. 1897년 즉위 60주년을 다이아몬드 주빌리로 기념했기 때문인데, 그 전에는 다이아몬드가 75주년에 붙기도 했고 일부 영국 목록에는 지금도 둘 다 남아 있습니다. 영국과 미국 목록은 다른 곳에서도 조금씩 갈립니다. 7주년에 영국은 전통적으로 양모를, 미국은 구리를 선물합니다.

일본은 메이지 시대에 서구식 사다리를 받아들여 긴콘시키(金婚式, 50주년)와 긴콘시키(銀婚式, 25주년)가 표준 어휘가 되었습니다. 한국은 전통적으로 단 하나의 큰 이정표를 중시했습니다. 결혼 60주년에 혼례를 재현하는 회혼례로, 환갑과 같은 60갑자 순환에 뿌리를 둡니다. 현대 한국 부부는 대체로 서구식 이름을 따르며 은혼식과 금혼식을 가장 많이 기념합니다.`,
				ja: `結婚記念日に素材の名前を付ける習慣は、見た目より歴史が浅いものです。25年の銀婚式と50年の金婚式は中欧ゲルマン文化圏（silberne/goldene Hochzeit）に遡りますが、1年目は紙、2年目は綿、3年目は革…と毎年続くはしごは、1937年に米国小売宝石商協会が贈り物販売のために完全なリストを発表したことでほぼ定着しました。素材は結婚年数とともに耐久性と価値が上がっていきます。紙、綿、革、花と果実、5年目は木、10年目は錫、15年目は水晶、20年目は磁器、25年目は銀、30年目は真珠、40年目はルビー、50年目は金、60年目はダイヤモンドです。

ダイヤモンド婚が60年になったのはヴィクトリア女王のおかげです。1897年、在位60年をダイヤモンド・ジュビリーとして祝いました。それ以前はダイヤモンドが75年に付くこともあり、英国の一部のリストには今も両方が残っています。英米のリストは他にも細かく異なり、7年目に英国は伝統的に羊毛、米国は銅を贈ります。

日本は明治時代に西洋式のはしごを取り入れ、金婚式（50年）と銀婚式（25年）は今や標準的な言葉になりました。韓国は伝統的にただ一つの大きな節目を重視してきました。結婚60周年に婚礼を再現する「回婚礼」で、還暦と同じ六十干支の循環に根ざしています。現代の韓国の夫婦はおおむね西洋式の名前に従い、銀婚式と金婚式が最もよく祝われています。`,
				zh: `给结婚周年配上材质名称的习俗，比看上去年轻得多。25年银婚、50年金婚可以追溯到中欧日耳曼文化圈（silberne/goldene Hochzeit），但一年纸婚、两年棉婚、三年皮婚这样逐年排列的阶梯，主要是1937年美国零售珠宝商协会为了促销礼品发布完整清单后才定型的。材质随婚龄增长而愈发坚固贵重：纸、棉、皮革、花果，5年木婚，10年锡婚，15年水晶婚，20年瓷婚，25年银婚，30年珍珠婚，40年红宝石婚，50年金婚，60年钻石婚。

钻石婚定在60年要归功于维多利亚女王——1897年她以"钻石庆典"庆祝登基60周年；在那之前钻石有时对应75年，一些英国清单至今两者并存。英美清单在别处也有细微差别：第7年英国传统上送羊毛，美国送铜。

日本在明治时代引入了西式阶梯，金婚式（50年）和银婚式（25年）如今已是标准词汇。韩国历史上则更看重单一的大节点：结婚60周年举行"回婚礼"，重现当年的婚礼仪式，呼应着同样支撑"花甲"60岁生日的六十甲子循环。现代韩国夫妇大体沿用西式名称，银婚和金婚庆祝得最多。`
			}
		},
		{
			heading: {
				en: 'Why Month and Year Milestones Can Land on Odd Dates',
				ko: '월·년 단위 기념일이 이상한 날짜에 떨어지는 이유',
				ja: '月・年単位の記念日が変な日付になる理由',
				zh: '为什么按月、按年的纪念日会落在奇怪的日期上'
			},
			body: {
				en: `Day-based milestones are unambiguous — 1,000 days is 1,000 days — but month and year milestones inherit every quirk of the calendar. The classic problem is a start date near the end of a month. What is "one month after January 31"? There is no February 31, so software must choose: clamp to February 28 (or 29), or overflow into March. JavaScript's built-in date object, which this tool uses, overflows: setting month plus one on January 31 yields March 3 in a common year, because the missing three days spill forward. Financial systems usually clamp instead, which is why a subscription billed on the 31st quietly charges on the 28th in February.

Leap-day starts have the same character. An anniversary of February 29, 2024 lands on March 1 in common years under JavaScript's overflow rule, while many human conventions prefer February 28. If your relationship, sobriety date, or contract began on the 29th, 30th, or 31st of any month, check which convention the other party uses before booking a dinner or expecting a payment.

Two more small effects can shift a listed milestone by a day. Around midnight, the "days left" figure ticks over based on your device clock, so a milestone can read 0 days on one phone and 1 day on another in a different timezone. And in regions with daylight saving time, one day a year is 23 hours long — arithmetic that adds fixed 24-hour blocks (as this tool's day milestones do) can therefore disagree with a wall calendar by a day across a DST boundary.`,
				ko: `일 단위 기념일은 명확합니다. 1,000일은 1,000일입니다. 하지만 월·년 단위 기념일은 달력의 온갖 특성을 그대로 물려받습니다. 고전적인 문제는 월말 근처의 시작일입니다. "1월 31일의 한 달 뒤"는 언제일까요? 2월 31일은 없으므로 소프트웨어는 선택해야 합니다. 2월 28일(또는 29일)로 고정하거나, 3월로 넘치게 두거나. 이 도구가 사용하는 JavaScript의 내장 날짜 객체는 넘치는 쪽입니다. 1월 31일에 한 달을 더하면 평년에는 3월 3일이 나옵니다. 모자란 사흘이 앞으로 흘러넘치기 때문입니다. 반면 금융 시스템은 대개 고정하는 쪽이라, 31일 결제 구독이 2월에는 조용히 28일에 청구됩니다.

윤일 시작도 같은 성격입니다. 2024년 2월 29일의 기념일은 JavaScript의 오버플로 규칙상 평년에는 3월 1일에 떨어지지만, 사람들의 관례는 2월 28일을 선호하는 경우가 많습니다. 연애든 금주든 계약이든 시작일이 29·30·31일이라면, 저녁 예약을 하거나 입금을 기다리기 전에 상대방이 어느 관례를 쓰는지 확인하세요.

목록의 기념일을 하루 옮길 수 있는 작은 효과가 두 가지 더 있습니다. 자정 무렵에는 "남은 일수"가 기기 시계 기준으로 넘어가므로, 시간대가 다른 두 휴대폰에서 같은 기념일이 0일과 1일로 다르게 보일 수 있습니다. 또 서머타임이 있는 지역에서는 1년에 하루가 23시간이라서, 고정된 24시간 블록을 더하는 계산(이 도구의 일 단위 기념일 방식)은 서머타임 경계를 넘을 때 벽걸이 달력과 하루 어긋날 수 있습니다.`,
				ja: `日数ベースの節目は明確です。1,000日は1,000日です。しかし月・年単位の節目は暦のあらゆる癖をそのまま受け継ぎます。古典的な問題は月末近くの開始日です。「1月31日の1か月後」はいつでしょうか。2月31日は存在しないので、ソフトウェアは選択を迫られます。2月28日（または29日）に固定するか、3月にあふれさせるか。このツールが使うJavaScriptの日付オブジェクトはあふれる方式で、1月31日に1か月を足すと平年では3月3日になります。足りない3日分が前にこぼれるからです。一方、金融システムはたいてい固定方式なので、31日払いのサブスクは2月には静かに28日に請求されます。

うるう日開始も同じ性質です。2024年2月29日の記念日はJavaScriptのオーバーフロー規則では平年3月1日に落ちますが、人間の慣習では2月28日を好むことが多いものです。交際・禁酒・契約の開始日が29日・30日・31日なら、ディナーを予約したり入金を待ったりする前に、相手がどちらの慣習を使うか確認しましょう。

リストの節目を1日ずらしうる小さな効果があと2つあります。深夜0時前後には「残り日数」が端末の時計基準で切り替わるため、タイムゾーンの違う2台のスマホで同じ節目が0日と1日に見えることがあります。また、サマータイムのある地域では年に1日だけ23時間の日があり、固定24時間ブロックを足す計算（このツールの日数節目の方式）はサマータイム境界をまたぐとカレンダーと1日食い違うことがあります。`,
				zh: `按天的里程碑毫无歧义——1000天就是1000天——但按月、按年的里程碑会继承日历的所有怪癖。经典问题是起始日靠近月末："1月31日之后一个月"是哪天？2月没有31日，软件必须做出选择：钳制到2月28日（或29日），还是溢出到3月。本工具使用的JavaScript内置日期对象采用溢出方案：给1月31日加一个月，平年会得到3月3日，因为缺少的三天向前漫溢。金融系统通常选择钳制，所以31日扣费的订阅在2月会悄悄改成28日扣款。

闰日起点也是同样性质。2024年2月29日的周年纪念，按JavaScript的溢出规则在平年落在3月1日，而许多人的习惯更倾向于2月28日。如果你的恋爱、戒断或合同起始于某月的29、30或31日，在订晚餐或等待付款之前，先确认对方用的是哪种惯例。

还有两个小因素可能让列表中的里程碑移动一天。午夜前后，"剩余天数"依据设备时钟翻转，同一个纪念日在两部处于不同时区的手机上可能一个显示0天、一个显示1天。在实行夏令时的地区，每年有一天只有23小时——按固定24小时块累加的算法（本工具的按天里程碑正是如此）跨越夏令时边界时，可能与挂历相差一天。`
			},
			code: {
				example: `"One month after Jan 31" — two valid answers:

  Overflow (JavaScript, this tool):
    Jan 31 + 1 month -> Feb 31 (missing) -> Mar 3 (common year)

  Clamp (most billing systems):
    Jan 31 + 1 month -> Feb 28

Leap-day anniversary:
  Start Feb 29, 2024
  + 1 year -> Mar 1, 2025 (overflow) vs Feb 28, 2025 (clamp)
  + 4 years -> Feb 29, 2028 (both agree — leap year again)`
			}
		},
		{
			heading: {
				en: 'Beyond Romance: Sobriety Chips, Quit Dates, and Memorial Customs',
				ko: '연애를 넘어 — 금주 칩, 금연일, 추모 관습',
				ja: '恋愛だけではない — 断酒チップ、禁煙日、追悼の慣習',
				zh: '不止于爱情：戒断纪念币、戒烟日与追思习俗'
			},
			body: {
				en: `Anniversary counting carries real motivational weight outside romance. Alcoholics Anonymous groups hand out physical sobriety chips at 24 hours, then commonly at 30, 60, and 90 days, 6 and 9 months, and a bronze medallion at one year — the 90-day mark matters because early relapse risk is highest in the first three months. Smoking cessation has its own physiological timeline worth counting toward: heart rate drops within 20 minutes of the last cigarette, blood carbon monoxide normalizes within about 12 hours, circulation and lung function begin improving over weeks, and after one smoke-free year the excess risk of coronary heart disease falls to roughly half that of a continuing smoker, according to public health agencies such as the US CDC. Entering a quit date above turns those abstract milestones into concrete calendar dates.

Memorial customs are calendar-sensitive in ways a Gregorian day counter cannot fully capture. Korean death anniversaries (기일) are often observed by the lunar calendar, so the Gregorian date shifts every year — convert the lunar date first, then enter it here. Japanese Buddhist memorials follow a counting tradition where the funeral-year observance is the first: the service called 三回忌, literally "third memorial", is actually held on the second anniversary of death. China traditionally marks the 头七 (seventh day) and anniversaries during Qingming festival.

For any milestone that carries legal or financial consequences — probation periods, warranty expirations, visa windows — treat this tool as a planning aid and verify the controlling date against the contract or statute itself.`,
				ko: `기념일 세기는 연애 밖에서도 실질적인 동기 부여 효과가 있습니다. 익명의 알코올중독자들(AA) 모임은 24시간째에 실물 금주 칩을 주고, 이후 보통 30·60·90일, 6·9개월, 1년째에 청동 메달을 줍니다. 90일이 중요한 이유는 초기 재발 위험이 첫 3개월에 가장 높기 때문입니다. 금연에는 세어 볼 가치가 있는 생리학적 타임라인이 따로 있습니다. 미국 CDC 같은 보건 당국에 따르면 마지막 담배 후 20분 안에 심박수가 떨어지고, 약 12시간 안에 혈중 일산화탄소가 정상화되며, 몇 주에 걸쳐 혈액순환과 폐 기능이 개선되기 시작하고, 금연 1년 뒤에는 관상동맥질환 초과 위험이 계속 피우는 사람의 절반 수준으로 떨어집니다. 위에 금연일을 입력하면 이런 추상적인 이정표가 구체적인 달력 날짜로 바뀝니다.

추모 관습은 그레고리력 일수 계산기로는 다 담을 수 없을 만큼 달력에 민감합니다. 한국의 기일은 음력으로 지내는 경우가 많아 양력 날짜가 해마다 바뀝니다. 음력 날짜를 먼저 양력으로 변환한 뒤 여기에 입력하세요. 일본 불교의 추모 의례는 장례가 있던 해를 첫 번째로 세는 전통을 따라, 글자 그대로 "세 번째 기제"인 산카이키(三回忌)를 실제로는 사망 2주기에 지냅니다. 중국은 전통적으로 두치(头七, 7일째)와 청명절의 성묘로 기일을 챙깁니다.

수습 기간, 보증 만료, 비자 유효 기간처럼 법적·금전적 결과가 걸린 이정표라면, 이 도구는 계획 보조 수단으로만 쓰고 기준 날짜는 계약서나 법령 원문에서 반드시 확인하세요.`,
				ja: `記念日を数えることは、恋愛の外でも実質的なモチベーションになります。アルコホーリクス・アノニマス（AA）のグループは断酒24時間で実物のチップを渡し、その後は通常30・60・90日、6か月・9か月、そして1年で青銅のメダルを授与します。90日が重視されるのは、再飲酒のリスクが最初の3か月に最も高いからです。禁煙には数える価値のある生理学的タイムラインがあります。米国CDCなどの保健当局によれば、最後の1本から20分以内に心拍数が下がり、約12時間で血中一酸化炭素が正常化し、数週間かけて血行と肺機能が改善し始め、禁煙1年後には冠動脈疾患の超過リスクが喫煙を続ける人の約半分まで下がります。上に禁煙日を入力すれば、こうした抽象的な節目が具体的なカレンダーの日付に変わります。

追悼の慣習は、グレゴリオ暦の日数カウンターでは捉えきれないほど暦に敏感です。韓国の命日（キイル）は旧暦で営むことが多く、新暦の日付が毎年変わります。旧暦の日付を先に変換してから入力してください。日本の仏教の年忌法要は葬儀のあった年を1回目と数える伝統に従い、文字どおり「3回目の忌」である三回忌を実際には死後2年目の命日に営みます。中国では伝統的に頭七（7日目）と清明節の墓参りで故人を偲びます。

試用期間、保証の満了、ビザの有効期間など、法的・金銭的な結果を伴う節目については、このツールはあくまで計画の補助として使い、基準となる日付は契約書や法令の原文で必ず確認してください。`,
				zh: `在爱情之外，数纪念日同样具有实实在在的激励作用。匿名戒酒会（AA）在戒酒满24小时时发放实体纪念币，之后通常在30、60、90天，6个月、9个月发放，满一年授予青铜纪念章——90天之所以关键，是因为复饮风险在头三个月最高。戒烟则有一条值得倒数的生理时间线：据美国CDC等公共卫生机构，最后一支烟后20分钟内心率下降，约12小时后血液中一氧化碳恢复正常，数周内血液循环和肺功能开始改善，戒烟满一年后冠心病的额外风险降至持续吸烟者的一半左右。在上方输入戒烟日，这些抽象的里程碑就变成了具体的日历日期。

追思习俗对历法的敏感，是公历天数计数器无法完全覆盖的。韩国的忌日（기일）常按农历举行，公历日期年年不同——请先把农历日期换算成公历再输入。日本佛教的年忌法要沿袭"葬礼当年算第一回"的数法，字面意思是"第三次忌辰"的三回忌，实际在逝后两周年举行。中国传统上则有"头七"，并在清明节扫墓祭奠。

至于试用期、保修到期、签证窗口等带有法律或财务后果的节点，请把本工具当作规划辅助，最终日期务必以合同或法规原文为准。`
			}
		}
	];

	const toolContent = {
		about: {
			en: 'The anniversary calculator counts the days since a meaningful date and lists upcoming day, month, and year milestones. Track relationship anniversaries, sobriety days, work-start dates, or any moment worth celebrating. The tool highlights round-number milestones (100, 200, 1000 days, etc.) within the next year.',
			ko: '기념일 계산기는 의미 있는 날짜로부터 지난 일수를 세어 주고, 다가오는 일·월·년 단위 기념일을 한 번에 보여 줍니다. 연애 기념일, 결혼기념일, 입사일, 금주·금연일 등 무엇이든 기록하세요. 100일, 200일, 1000일처럼 의미 있는 숫자의 기념일을 자동으로 표시합니다.',
			ja: '記念日計算機は、特別な日付から経過した日数を数え、今後の日・月・年単位の記念日を一覧表示します。記念日、入社日、禁煙・禁酒日などに利用できます。100日、200日、1000日など節目の日を自動表示します。',
			zh: '纪念日计算器从一个有意义的日期开始计算已过天数，并列出即将到来的日、月、年纪念日。可用于恋爱纪念日、入职日、戒烟戒酒日等。自动突出 100 天、200 天、1000 天等整数里程碑。'
		},
		howTo: {
			en: [
				'Pick the start date you want to commemorate.',
				'See the total number of days that have passed since that date.',
				'Browse the list of upcoming day, month, and year milestones.',
				'Note dates highlighted as "Today!" so you can celebrate them.',
				'Save the page as a bookmark for quick access throughout the year.'
			],
			ko: [
				'기념하고 싶은 시작 날짜를 선택합니다.',
				'그 날부터 오늘까지의 총 경과 일수를 확인합니다.',
				'다가오는 일·월·년 단위 기념일 목록을 살펴봅니다.',
				'"오늘!"로 표시된 기념일은 빠짐없이 챙겨 보세요.',
				'페이지를 북마크해 두면 일년 내내 편하게 확인할 수 있습니다.'
			],
			ja: [
				'記念したい開始日を選択します。',
				'その日からの経過日数を確認します。',
				'今後の日・月・年単位の記念日リストを確認します。',
				'「今日！」と表示された日は忘れずにお祝いしましょう。',
				'ブックマークしておくと一年中便利に使えます。'
			],
			zh: [
				'选择要纪念的起始日期。',
				'查看从该日期至今的总天数。',
				'浏览即将到来的日、月、年里程碑。',
				'留意标记为"今天！"的纪念日。',
				'将页面加入书签以便随时查看。'
			]
		},
		useCases: {
			en: [
				'Couples tracking dating, engagement, and wedding anniversaries.',
				'Counting sobriety days for personal health milestones.',
				'Marking the day you started a new job or business.',
				'Remembering loss and honoring memorial dates.',
				'Celebrating long friendships, pet adoptions, or moves.'
			],
			ko: [
				'연인의 만난 날, 결혼기념일, 약혼 기념일 관리.',
				'금연·금주 일수 기록 및 동기 부여.',
				'입사일, 창업일, 개업일 기념.',
				'추모일, 기일을 잊지 않고 챙기기.',
				'반려동물 입양일, 이사한 날 등 일상의 기념일.'
			],
			ja: [
				'交際、結婚、婚約などの記念日管理。',
				'禁酒・禁煙の継続日数の記録。',
				'入社日、創業日のお祝い。',
				'命日や記念日を忘れないために。',
				'ペットの誕生日、引越し日など日常の記念日。'
			],
			zh: [
				'记录恋爱、订婚、结婚纪念日。',
				'追踪戒烟戒酒天数。',
				'纪念入职日或创业日。',
				'追思故人，铭记纪念日。',
				'记录宠物领养日、搬家日等生活里程碑。'
			]
		},
		faq: {
			en: [
				{ q: 'Can I save multiple anniversaries?', a: 'Currently the tool computes one date at a time. Bookmark the page with the date filled in or store dates in your calendar app.' },
				{ q: 'Why are some milestones missing from the list?', a: 'Only milestones that fall within the upcoming year (or two years for yearly milestones) are shown to keep the list focused.' },
				{ q: 'Does it support lunar calendar dates?', a: 'No, the calculator works with the Gregorian calendar. Convert lunar dates first if needed.' },
				{ q: 'Why is the count off by one day sometimes?', a: 'Time zone differences and daylight-saving boundaries can cause a one-day shift around midnight.' }
			],
			ko: [
				{ q: '여러 기념일을 동시에 저장할 수 있나요?', a: '현재는 한 번에 하나씩만 계산합니다. 날짜를 채운 상태로 북마크하거나 캘린더 앱에 저장해 두세요.' },
				{ q: '일부 기념일이 목록에 보이지 않습니다.', a: '리스트가 너무 길어지지 않도록 다가올 1년(연 단위는 2년) 안의 기념일만 표시합니다.' },
				{ q: '음력 기념일도 지원하나요?', a: '양력 기준으로만 계산됩니다. 음력 날짜는 양력으로 변환한 뒤 입력해 주세요.' },
				{ q: '하루씩 차이가 나는 경우가 있어요.', a: '자정 무렵에는 시간대와 서머타임의 영향으로 하루 정도 차이가 날 수 있습니다.' }
			]
		},
		related: [
			{ href: '/date-calculator', label: { en: 'Date Calculator', ko: '날짜 계산기', ja: '日付計算機', zh: '日期计算器' } },
			{ href: '/age-calculator', label: { en: 'Age Calculator', ko: '나이 계산기', ja: '年齢計算機', zh: '年龄计算器' } },
			{ href: '/career-calculator', label: { en: 'Career Calculator', ko: '경력 계산기', ja: 'キャリア計算機', zh: '工龄计算器' } }
		],
		externalRefs: [
			{ href: 'https://en.wikipedia.org/wiki/Anniversary', label: 'Anniversary - Wikipedia' },
			{ href: 'https://www.timeanddate.com/date/', label: 'Time and Date: Date Calculators' }
		]
	};

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let startDate = '';
	const today = new Date();

	$: daysSince = startDate
		? Math.floor((today.getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24))
		: 0;

	interface Anniversary {
		label: string;
		date: Date;
		daysLeft: number;
	}

	function calculateAnniversaries(start: string): Anniversary[] {
		if (!start) return [];

		const startDateObj = new Date(start);
		const results: Anniversary[] = [];
		const now = new Date();

		// Day anniversaries (100, 200, 300, 500, 1000, etc.)
		const dayMilestones = [100, 200, 300, 365, 500, 1000, 2000, 3000, 5000, 10000];
		for (const days of dayMilestones) {
			const date = new Date(startDateObj);
			date.setDate(date.getDate() + days);
			const daysLeft = Math.floor((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
			if (daysLeft >= 0 && daysLeft <= 365) {
				results.push({
					label: `${days}${t('anniversary.daysAnniversary')}`,
					date,
					daysLeft
				});
			}
		}

		// Month anniversaries (1-12 months)
		for (let m = 1; m <= 12; m++) {
			const date = new Date(startDateObj);
			date.setMonth(date.getMonth() + m);
			const daysLeft = Math.floor((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
			if (daysLeft >= 0 && daysLeft <= 365) {
				results.push({
					label: `${m}${t('anniversary.monthsAnniversary')}`,
					date,
					daysLeft
				});
			}
		}

		// Year anniversaries (1-10 years)
		for (let y = 1; y <= 10; y++) {
			const date = new Date(startDateObj);
			date.setFullYear(date.getFullYear() + y);
			const daysLeft = Math.floor((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
			if (daysLeft >= 0 && daysLeft <= 730) {
				results.push({
					label: `${y}${t('anniversary.yearsAnniversary')}`,
					date,
					daysLeft
				});
			}
		}

		// Sort by days left
		return results.sort((a, b) => a.daysLeft - b.daysLeft).slice(0, 10);
	}

	$: anniversaries = calculateAnniversaries(startDate);

	function formatDate(date: Date): string {
		return date.toLocaleDateString(
			lang === 'ko' ? 'ko-KR' : lang === 'ja' ? 'ja-JP' : lang === 'zh' ? 'zh-CN' : 'en-US',
			{ year: 'numeric', month: 'long', day: 'numeric' }
		);
	}
</script>

<svelte:head>
	<title>{t('anniversary.title')} - SD.gy</title>
	<meta name="description" content={t('anniversary.desc')} />
	<link rel="canonical" href="https://sd.gy/{lang}/anniversary-calculator" />
	<meta property="og:title" content="{t('anniversary.title')} - SD.gy" />
	<meta property="og:description" content={t('anniversary.desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/anniversary-calculator" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('anniversary.title')} - SD.gy" />
	<meta name="twitter:description" content={t('anniversary.desc')} />
</svelte:head>

<div class="max-w-2xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('anniversary.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('anniversary.desc')}</p>
	</div>

	<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
		<!-- Start Date -->
		<div class="mb-6">
			<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('anniversary.startDate')}</label>
			<input
				type="date"
				bind:value={startDate}
				class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 text-lg"
			/>
		</div>

		<!-- Days Since -->
		{#if startDate}
			<div class="bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl p-6 text-center text-white mb-6">
				<p class="text-sm opacity-90 mb-1">{t('anniversary.daysSince')}</p>
				<p class="text-5xl font-bold">{daysSince.toLocaleString()}</p>
				<p class="text-sm opacity-90 mt-1">{t('anniversary.days')}</p>
			</div>

			<!-- Upcoming Anniversaries -->
			{#if anniversaries.length > 0}
				<div class="mt-6">
					<h3 class="text-sm font-semibold text-gray-700 dark:text-dark-300 mb-4">{t('anniversary.upcoming')}</h3>
					<div class="space-y-3">
						{#each anniversaries as ann}
							<div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-700 rounded-xl">
								<div>
									<p class="font-semibold text-gray-900 dark:text-dark-100">{ann.label}</p>
									<p class="text-sm text-gray-500 dark:text-dark-400">{formatDate(ann.date)}</p>
								</div>
								<div class="text-right">
									{#if ann.daysLeft === 0}
										<span class="px-3 py-1 bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
											{lang === 'ko' ? '오늘!' : lang === 'ja' ? '今日！' : lang === 'zh' ? '今天！' : 'Today!'}
										</span>
									{:else}
										<p class="text-2xl font-bold text-violet-500">{ann.daysLeft}</p>
										<p class="text-xs text-gray-500 dark:text-dark-400">{t('anniversary.daysLeft')}</p>
									{/if}
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/if}
		{/if}
	</div>

	<ToolContent
		{lang}
		toolName="Anniversary Calculator"
		toolUrl="https://sd.gy/{lang}/anniversary-calculator"
		lastUpdated="2026-04-30"
		category="Daily Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sd.gy/${lang}` },
			{ name: 'Tools', url: `https://sd.gy/${lang}` },
			{ name: 'Anniversary Calculator', url: `https://sd.gy/${lang}/anniversary-calculator` }
		]}
		content={toolContent}
	/>

	<ToolGuide {lang} sections={guideSections} />
</div>
