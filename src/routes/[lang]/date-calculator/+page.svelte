<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'Inclusive or Exclusive? The Fencepost Problem in Every Date Count',
				ko: '초일 산입이냐 불산입이냐 — 모든 날짜 계산에 숨은 울타리 기둥 문제',
				ja: '初日を入れるか入れないか — あらゆる日数計算に潜む「柵の柱」問題',
				zh: '算头还是算尾？每一次日期计算里的"栅栏柱"问题'
			},
			body: {
				en: `Ask two people how many days there are from Monday to Friday and you may get two answers: 4 if you count the gap, 5 if you count the days themselves. Neither is wrong — they are answering different questions. Mathematicians call this the fencepost problem: a fence with 5 posts has only 4 sections between them. Nearly every dispute about a date calculation traces back to whether the first day is included.

Exclusive counting (end minus start) is what this tool computes, and it is the right model for elapsed time: hotel nights, interest accrual, and "how many days until my exam" all count the gaps, not the endpoints. A stay checking in on the 10th and out on the 13th is 3 nights, even though it touches 4 calendar dates.

Inclusive counting adds one, and it is the right model whenever both endpoints are "used": rental car days, medication courses ("take for 7 days starting today"), and event durations. Korean law formalizes the split: the Civil Code's 초일불산입 principle (Article 157) excludes the first day when computing legal periods, so a 30-day notice served on March 1 starts counting from March 2 and expires at the end of March 31. Yet everyday Korean customs go the other way — a baby's 백일 (100th-day celebration) counts the birth date itself as day 1, which is why it lands 99 days after birth by exclusive arithmetic. When a contract deadline, visa window, or return period matters, do not guess: check which convention the document uses, then add or do not add the one day deliberately.`,
				ko: `월요일부터 금요일까지 며칠이냐고 두 사람에게 물으면 두 가지 답이 나올 수 있습니다. 간격을 세면 4일, 날짜 자체를 세면 5일입니다. 어느 쪽도 틀리지 않았습니다. 서로 다른 질문에 답한 것뿐입니다. 수학자들은 이를 울타리 기둥(fencepost) 문제라고 부릅니다. 기둥이 5개인 울타리의 칸은 4개뿐입니다. 날짜 계산을 둘러싼 거의 모든 다툼은 결국 첫날을 포함하느냐의 문제로 귀결됩니다.

이 도구가 계산하는 것은 배제 방식(종료일 빼기 시작일)이며, 경과 시간에는 이것이 올바른 모델입니다. 호텔 숙박 일수, 이자 계산, "시험까지 며칠 남았나"는 모두 끝점이 아니라 간격을 셉니다. 10일에 체크인해 13일에 체크아웃하면 달력 날짜는 4개에 걸치지만 숙박은 3박입니다.

포함 방식은 하루를 더하며, 양 끝점을 모두 "사용"할 때 올바른 모델입니다. 렌터카 대여 일수, 복약 기간("오늘부터 7일간 복용"), 행사 기간이 그렇습니다. 한국 법은 이 구분을 명문화했습니다. 민법 제157조의 초일불산입 원칙은 기간 계산에서 첫날을 제외하므로, 3월 1일에 통지한 30일 기간은 3월 2일부터 기산해 3월 31일이 끝나는 시점에 만료됩니다. 반면 일상 관습은 반대로 갑니다. 아기의 백일은 태어난 날을 1일로 세기 때문에, 배제 방식으로 계산하면 출생 후 99일째 되는 날이 백일입니다. 계약 기한, 비자 기간, 반품 기한처럼 중요한 날짜라면 추측하지 마세요. 문서가 어떤 관례를 쓰는지 확인한 뒤, 하루를 더할지 말지를 의식적으로 결정해야 합니다.`,
				ja: `月曜から金曜まで何日かと2人に尋ねると、2つの答えが返ってくることがあります。間隔を数えれば4日、日付そのものを数えれば5日です。どちらも間違いではなく、違う質問に答えているだけです。数学者はこれを「柵の柱（fencepost）問題」と呼びます。柱が5本の柵の区間は4つしかありません。日数計算をめぐる争いのほとんどは、結局初日を含めるかどうかに行き着きます。

このツールが計算するのは排他方式（終了日引く開始日）で、経過時間にはこれが正しいモデルです。ホテルの宿泊数、利息の計算、「試験まであと何日」は、いずれも端点ではなく間隔を数えます。10日にチェックインして13日にチェックアウトすれば、カレンダー上は4つの日付に触れますが宿泊は3泊です。

包含方式は1日を加えるもので、両端の日をどちらも「使う」場合に正しいモデルです。レンタカーの利用日数、服薬期間（「今日から7日間服用」）、イベントの開催期間がそうです。日本の民法第140条にも「初日不算入」の原則があり、期間計算では原則として初日を除きます。韓国民法第157条も同じ考え方で、3月1日に通知した30日の期間は3月2日から起算して3月31日の終了で満了します。一方、日常の習慣は逆方向のこともあります。韓国では赤ちゃんの「百日（ペギル）」は誕生日当日を1日目と数えるため、排他方式で計算すると生後99日目が百日になります。契約期限、ビザの期間、返品期限のような重要な日付では推測は禁物です。文書がどちらの流儀かを確認し、1日を足すかどうかを意識的に決めてください。`,
				zh: `问两个人"从周一到周五有几天"，可能得到两个答案：数间隔是4天，数日期本身是5天。谁都没错——他们回答的是不同的问题。数学家称之为"栅栏柱问题"：一道有5根柱子的栅栏只有4段栏板。几乎所有关于日期计算的争议，追根溯源都是"第一天算不算"的问题。

本工具计算的是排除式（结束日减开始日），这是"经过时间"的正确模型：酒店住几晚、利息累计、"离考试还有几天"，数的都是间隔而不是端点。10日入住、13日退房，虽然跨了4个日历日期，却只住了3晚。

包含式要加1天，凡是首尾两天都被"使用"的场合就该用它：租车天数、疗程用药（"从今天起连服7天"）、活动持续时间。韩国法律把这种区分写进了条文：民法第157条的"初日不算入"原则规定计算法定期间时不含首日，因此3月1日送达的30天通知从3月2日起算，到3月31日结束时届满。中国民法典第201条同样规定按日计算期间时起算日不计入。但日常习俗又反过来：韩国婴儿的"百日"把出生当天算作第1天，所以按排除式算，百日其实落在出生后第99天。遇到合同期限、签证窗口、退货期限这类要紧日期时不要靠猜：先确认文件采用哪种惯例，再有意识地决定要不要加那一天。`
			},
			code: {
				example: `Monday -> Friday, same week:

  Exclusive (end - start):        4 days   "days between"
  Inclusive (end - start + 1):    5 days   "days covered"

Hotel: check-in 10th, check-out 13th
  nights = 13 - 10 = 3            (exclusive: correct)

Korean legal notice (Civil Code Art. 157, first day excluded):
  30-day notice served Mar 1
  count starts Mar 2  ->  period ends Mar 31 (24:00)

Baby's 100th day (baek-il, birth date = day 1):
  born Jan 1  ->  day 100 = Jan 1 + 99 days = Apr 10 (non-leap year)`
			}
		},
		{
			heading: {
				en: 'Leap Years and Unequal Months: Why the Calendar Refuses to Be Simple',
				ko: '윤년과 들쭉날쭉한 달 — 달력이 단순해질 수 없는 이유',
				ja: 'うるう年と長さの違う月 — 暦が単純になれない理由',
				zh: '闰年与长短不一的月份：日历为什么注定不简单'
			},
			body: {
				en: `A tropical year — one full trip of Earth around the Sun — lasts about 365.2422 days, and that awkward fraction is the root of every calendar complication. The Julian calendar of 45 BC patched it with a leap day every 4 years, overshooting by roughly 11 minutes per year; by the 16th century the accumulated drift had pushed the equinox 10 days off. The Gregorian reform of 1582 fixed the rule to the one we use now: a year is a leap year if divisible by 4, except century years, unless divisible by 400. So 2000 and 2024 are leap years, while 1900 and 2100 are not. The residual error is about one day in 3,300 years.

This matters for date arithmetic in two concrete ways. First, any span crossing February 29 is one day longer than the same-looking span in a common year: January 15 to March 15 is 59 days in 2025 but 60 days in 2024. Second, "one month" and "one year" are not fixed quantities — months run 28 to 31 days, and adding "one month" to January 31 has no obvious answer (most software clamps to February 28 or 29).

This tool sidesteps the ambiguity by keeping day counts exact while treating weeks, months, and years as quick approximations: weeks are days divided by 7, months days divided by 30, years days divided by 365. That is ideal for estimation, but for legally exact calendar months or precise age in years-months-days, use the dedicated age calculator, which walks the real calendar instead of dividing.`,
				ko: `태양년 — 지구가 태양을 한 바퀴 도는 시간 — 은 약 365.2422일이고, 이 어중간한 소수가 모든 달력 문제의 근원입니다. 기원전 45년의 율리우스력은 4년마다 하루를 더해 이를 보정했지만 해마다 약 11분씩 초과했고, 16세기에는 누적 오차로 춘분이 10일이나 밀려났습니다. 1582년 그레고리력 개혁이 지금 우리가 쓰는 규칙을 확정했습니다. 4로 나누어지면 윤년이되, 100으로 나누어지는 세기말 해는 평년이고, 다시 400으로 나누어지면 윤년입니다. 그래서 2000년과 2024년은 윤년이지만 1900년과 2100년은 아닙니다. 남은 오차는 약 3,300년에 하루 수준입니다.

이것이 날짜 계산에 미치는 영향은 구체적으로 두 가지입니다. 첫째, 2월 29일을 지나는 구간은 평년의 같은 구간보다 하루 깁니다. 1월 15일부터 3월 15일까지는 2025년에는 59일이지만 2024년에는 60일입니다. 둘째, "한 달"과 "일 년"은 고정된 양이 아닙니다. 달은 28일에서 31일까지 다양하고, 1월 31일에 "한 달"을 더한 결과는 자명한 답이 없습니다(대부분의 소프트웨어는 2월 28일 또는 29일로 잘라 맞춥니다).

이 도구는 일수는 정확하게 세되 주·월·년은 빠른 근사치로 처리해 이 모호함을 비켜 갑니다. 주는 일수 나누기 7, 월은 나누기 30, 년은 나누기 365입니다. 어림 계산에는 이상적이지만, 법적으로 정확한 역월(曆月) 계산이나 년·월·일 단위의 정밀한 나이가 필요하면, 나눗셈 대신 실제 달력을 따라가는 전용 나이 계산기를 사용하세요.`,
				ja: `太陽年 — 地球が太陽を一周する時間 — は約365.2422日で、この中途半端な端数があらゆる暦の複雑さの根源です。紀元前45年のユリウス暦は4年ごとの閏日でこれを補正しましたが、毎年約11分ずつ行き過ぎ、16世紀には累積誤差で春分が10日もずれていました。1582年のグレゴリオ改暦が現在の規則を定めました。4で割り切れる年は閏年、ただし100で割り切れる世紀年は平年、さらに400で割り切れれば閏年です。したがって2000年と2024年は閏年ですが、1900年と2100年は違います。残る誤差は約3,300年に1日程度です。

これが日付計算に効いてくる場面は具体的に2つあります。第一に、2月29日をまたぐ期間は平年の同じ見た目の期間より1日長くなります。1月15日から3月15日までは2025年では59日ですが、2024年では60日です。第二に、「1か月」と「1年」は固定量ではありません。月は28日から31日まであり、1月31日に「1か月」を足した結果に自明な答えはありません（多くのソフトウェアは2月28日か29日に切り詰めます）。

このツールは日数を正確に数えつつ、週・月・年は素早い近似として扱うことで、この曖昧さを回避しています。週は日数÷7、月は÷30、年は÷365です。概算には最適ですが、法的に正確な暦月の計算や年・月・日単位の正確な年齢が必要なら、割り算ではなく実際の暦をたどる専用の年齢計算機を使ってください。`,
				zh: `一个回归年——地球绕太阳一整圈——约为365.2422天，正是这个别扭的小数造就了历法的一切麻烦。公元前45年的儒略历用每4年加一个闰日来修补，但每年多算了约11分钟；到16世纪，累积偏差已让春分点偏移了10天。1582年的格里高利改历确立了我们今天的规则：能被4整除的年份是闰年，但整百年除外，除非能被400整除。所以2000年和2024年是闰年，而1900年和2100年不是。剩余误差约为每3300年差1天。

这对日期运算有两个具体影响。第一，任何跨过2月29日的区间都比平年里看似相同的区间多1天：1月15日到3月15日在2025年是59天，在2024年却是60天。第二，"一个月"和"一年"不是固定量——月份从28天到31天不等，给1月31日"加一个月"没有显而易见的答案（多数软件会收缩到2月28日或29日）。

本工具的做法是绕开这种歧义：天数精确计算，而周、月、年只作快速近似——周是天数除以7，月是除以30，年是除以365。用来估算非常合适；但若需要法律意义上精确的日历月，或精确到年-月-日的年龄，请使用专门的年龄计算器，它会沿真实日历逐月推算，而不是做除法。`
			},
			code: {
				example: `Gregorian leap year rule:
  divisible by 4    -> leap     (2024 yes)
  ...but by 100     -> common   (1900, 2100 no)
  ...but by 400     -> leap     (2000 yes)

Same-looking span, different length:
  2025-01-15 -> 2025-03-15 = 59 days  (common year)
  2024-01-15 -> 2024-03-15 = 60 days  (crosses Feb 29)

"Add one month" is ambiguous:
  Jan 31 + 1 month = Feb 28? Feb 29? Mar 2/3?
  (most software clamps to the last day of February)`
			}
		},
		{
			heading: {
				en: 'Midnight, Time Zones, and the Missing Hour: Where Day Counts Go Wrong',
				ko: '자정, 시간대, 사라진 한 시간 — 날짜 계산이 어긋나는 지점',
				ja: '真夜中・タイムゾーン・消えた1時間 — 日数計算が狂うポイント',
				zh: '午夜、时区与消失的一小时：天数计算出错的地方'
			},
			body: {
				en: `A "day" feels like the most solid unit imaginable, but software usually implements it as 86,400 seconds — and that assumption quietly breaks. In regions that observe daylight saving time, one day each spring lasts only 23 hours and one each autumn lasts 25. A program that adds 30 × 86,400 seconds to a spring date in New York or Berlin can land at 23:00 on the previous calendar day, off by one from what any human would answer. Korea, Japan, and China do not currently observe DST, which is one reason date bugs surface mostly in code written for or by users elsewhere. Robust software adds days on the calendar, not on the clock.

Time zones create a second trap. The same instant is Tuesday in Seoul and still Monday in Los Angeles, so "days until launch" legitimately differs by one depending on where you ask. This tool uses your device's local midnight as the day boundary, which matches human intuition — but if you compare its countdown against a server, an app, or a friend abroad, a one-day disagreement usually means a time-zone difference, not a bug.

There is also a subtle programming wrinkle worth knowing: in JavaScript, a bare date string like 2026-07-02 is parsed as midnight UTC, while the current time is local. For users east of Greenwich the local clock is already past UTC midnight, and naive subtractions can drift by several hours. The practical takeaway is the same in every language: anchor both endpoints to the same convention — both local midnights or both UTC — before subtracting.`,
				ko: `"하루"는 세상에서 가장 견고한 단위처럼 느껴지지만, 소프트웨어는 보통 이를 86,400초로 구현합니다. 그리고 이 가정은 조용히 깨집니다. 서머타임(일광절약시간)을 시행하는 지역에서는 봄에 하루가 23시간, 가을에 하루가 25시간인 날이 하나씩 생깁니다. 뉴욕이나 베를린의 봄 날짜에 30 × 86,400초를 더하는 프로그램은 전날 23시에 도착해, 사람이라면 누구나 내놓을 답과 하루가 어긋날 수 있습니다. 한국, 일본, 중국은 현재 서머타임을 시행하지 않으므로, 날짜 버그가 주로 다른 지역 사용자를 위한 코드에서 드러나는 이유이기도 합니다. 견고한 소프트웨어는 시계가 아니라 달력 위에서 날짜를 더합니다.

시간대는 두 번째 함정입니다. 같은 순간이 서울에서는 화요일이고 로스앤젤레스에서는 아직 월요일이므로, "출시까지 며칠"이라는 답은 묻는 장소에 따라 정당하게 하루씩 달라질 수 있습니다. 이 도구는 기기의 로컬 자정을 하루의 경계로 사용해 사람의 직관과 일치합니다. 다만 이 카운트다운을 서버, 앱, 해외 친구와 비교했을 때 하루가 어긋난다면 보통 버그가 아니라 시간대 차이입니다.

알아 둘 만한 미묘한 프로그래밍 문제도 있습니다. JavaScript에서 2026-07-02 같은 날짜 문자열은 UTC 자정으로 해석되는 반면 현재 시각은 로컬 기준입니다. 그리니치 동쪽 사용자의 로컬 시계는 이미 UTC 자정을 지나 있어, 단순 뺄셈은 몇 시간씩 어긋날 수 있습니다. 어떤 언어에서든 실용적 결론은 같습니다. 빼기 전에 양 끝점을 같은 기준 — 둘 다 로컬 자정이든 둘 다 UTC든 — 에 고정하세요.`,
				ja: `「1日」はこの上なく堅固な単位に思えますが、ソフトウェアは通常これを86,400秒として実装します。そしてこの前提はひっそりと崩れます。夏時間（サマータイム）を実施する地域では、春に23時間しかない日が、秋に25時間ある日が1日ずつ生じます。ニューヨークやベルリンの春の日付に 30 × 86,400秒 を足すプログラムは、前日の23時に着地して、人間なら誰でも出す答えと1日ずれることがあります。韓国・日本・中国は現在夏時間を実施していないため、日付バグが主に他地域向けのコードで表面化するのはこのためでもあります。堅牢なソフトウェアは時計ではなく暦の上で日数を足します。

タイムゾーンは第二の罠です。同じ瞬間がソウルでは火曜日、ロサンゼルスではまだ月曜日なので、「リリースまであと何日」の答えは尋ねる場所によって正当に1日変わり得ます。このツールは端末のローカルな真夜中を日の境界として使い、人間の直感と一致します。ただし、このカウントダウンをサーバーやアプリ、海外の友人と比べて1日食い違うなら、それはたいていバグではなくタイムゾーンの差です。

知っておく価値のある微妙なプログラミング上の癖もあります。JavaScriptでは 2026-07-02 のような日付文字列はUTCの真夜中として解釈される一方、現在時刻はローカル基準です。グリニッジより東のユーザーのローカル時計はすでにUTCの真夜中を過ぎており、素朴な引き算は数時間ずれることがあります。どの言語でも実用的な結論は同じです。引き算の前に、両端を同じ基準 — 両方ローカルの真夜中か、両方UTCか — に揃えてください。`,
				zh: `"一天"听起来是最牢靠的单位，但软件通常把它实现为86,400秒——这个假设会悄悄失效。在实行夏令时的地区，每年春天有一天只有23小时，秋天有一天长达25小时。给纽约或柏林的春季日期加上 30 × 86,400 秒的程序，可能落在前一个日历日的23:00，与任何人的直觉答案差了一天。韩国、日本和中国目前都不实行夏令时，这也是日期类bug多出现在面向其他地区用户的代码中的原因之一。健壮的软件在日历上加天数，而不是在时钟上加秒数。

时区是第二个陷阱。同一时刻在首尔是周二，在洛杉矶还是周一，所以"距发布还有几天"的答案会因提问地点不同而合理地相差一天。本工具以设备的本地午夜作为日期边界，符合人类直觉——但如果你把它的倒计时与服务器、App或国外朋友对比后发现差一天，那通常是时区差异，不是bug。

还有一个值得了解的编程细节：在JavaScript中，像 2026-07-02 这样的纯日期字符串会被解析为UTC午夜，而当前时间用的是本地时区。对格林尼治以东的用户来说，本地时钟早已过了UTC午夜，朴素的相减可能偏差好几个小时。无论用什么语言，实用结论都一样：相减之前，把两个端点锚定到同一基准——要么都是本地午夜，要么都是UTC。`
			}
		},
		{
			heading: {
				en: 'ISO 8601: The One Date Format That Never Gets Misread',
				ko: 'ISO 8601 — 절대 오독되지 않는 유일한 날짜 형식',
				ja: 'ISO 8601 — 決して読み違えられない唯一の日付形式',
				zh: 'ISO 8601：唯一不会被误读的日期格式'
			},
			body: {
				en: `What date is 03/04/05? An American reads March 4, 2005; a Brit reads 3 April 2005; and in Korea, Japan, or China the natural reading is April 5, 2003, because East Asian convention runs year-month-day. Every one of those readings is locally correct, which is exactly the problem — dates written in slash formats are ambiguous the moment they cross a border, an email thread, or a filename.

ISO 8601, the international standard, resolves this by mandating largest-unit-first with fixed widths: YYYY-MM-DD, so 2026-07-02 can only mean July 2, 2026. The design has a bonus property engineers love: because the components are ordered by significance and zero-padded, plain alphabetical sorting of ISO dates is also chronological sorting. Name your files 2026-07-02-report and they line up in date order in any file manager with no special logic. The standard also defines week numbering (the famous "week 27"), durations, and combined date-times with time-zone offsets.

East Asian date order matches ISO almost by accident of tradition — 2026년 7월 2일 and 2026年7月2日 are already year-month-day — which is why the format feels natural in Seoul and Tokyo but took decades to spread in the US. The date pickers on this page read and write ISO format under the hood, as do HTML date inputs everywhere. Practical habit worth adopting: whenever a date leaves your head for someone else's — contracts, tickets, spreadsheets, file names — write it ISO style or spell out the month, and the ambiguity disappears entirely.`,
				ko: `03/04/05는 무슨 날짜일까요? 미국인은 2005년 3월 4일로 읽고, 영국인은 2005년 4월 3일로 읽으며, 한국·일본·중국에서는 연-월-일 순서가 자연스러워 2003년 4월 5일로 읽습니다. 이 세 해석 모두 각자의 지역에서는 옳다는 것이 바로 문제입니다. 슬래시로 쓴 날짜는 국경, 이메일 스레드, 파일 이름을 넘는 순간 모호해집니다.

국제 표준인 ISO 8601은 큰 단위부터 고정 자릿수로 쓰도록 규정해 이를 해결합니다. YYYY-MM-DD 형식에서 2026-07-02는 2026년 7월 2일 외에 다른 뜻이 될 수 없습니다. 이 설계에는 엔지니어들이 사랑하는 덤이 있습니다. 구성 요소가 중요도 순으로 배열되고 0으로 자릿수가 채워지므로, ISO 날짜의 단순 사전순 정렬이 곧 시간순 정렬입니다. 파일 이름을 2026-07-02-보고서처럼 지으면 어떤 파일 관리자에서도 특별한 로직 없이 날짜순으로 정렬됩니다. 이 표준은 주차 번호(그 유명한 "27주차"), 기간, 시간대 오프셋이 붙은 날짜-시각 표기도 정의합니다.

동아시아의 날짜 순서는 전통의 우연으로 ISO와 거의 일치합니다. 2026년 7월 2일은 이미 연-월-일이므로 이 형식이 서울과 도쿄에서는 자연스럽게 느껴지는 반면, 미국에서는 확산에 수십 년이 걸렸습니다. 이 페이지의 날짜 선택기도, 모든 HTML 날짜 입력도 내부적으로 ISO 형식을 읽고 씁니다. 들일 만한 실용 습관 하나: 계약서, 티켓, 스프레드시트, 파일 이름처럼 날짜가 내 머리를 떠나 다른 사람에게 갈 때는 ISO 형식으로 쓰거나 월 이름을 풀어 쓰세요. 모호함이 완전히 사라집니다.`,
				ja: `03/04/05は何の日付でしょうか。アメリカ人は2005年3月4日と読み、イギリス人は2005年4月3日と読み、韓国・日本・中国では年-月-日の順が自然なので2003年4月5日と読みます。この3つの読み方がどれも地元では正しい、というのがまさに問題です。スラッシュ区切りの日付は、国境やメールのスレッド、ファイル名を越えた瞬間に曖昧になります。

国際標準のISO 8601は、大きい単位から固定桁数で書くことを義務付けてこれを解決します。YYYY-MM-DD形式では 2026-07-02 は2026年7月2日以外の意味になり得ません。この設計にはエンジニアが愛するおまけがあります。要素が重要度順に並び、ゼロ埋めされているため、ISO日付の単純なアルファベット順ソートがそのまま時系列ソートになるのです。ファイル名を 2026-07-02-report とすれば、どのファイルマネージャでも特別な仕組みなしに日付順に並びます。この標準は週番号（有名な「第27週」）、期間、タイムゾーンオフセット付きの日時表記も定義しています。

東アジアの日付の順序は伝統の偶然でISOとほぼ一致します。2026年7月2日はもともと年-月-日なので、この形式がソウルや東京では自然に感じられる一方、アメリカでの普及には数十年かかりました。このページの日付ピッカーも、あらゆるHTMLの日付入力も、内部ではISO形式で読み書きしています。身につける価値のある実用的な習慣を一つ。契約書、チケット、スプレッドシート、ファイル名など、日付が自分の頭を離れて他人に渡るときは、ISO形式で書くか月名を綴りましょう。曖昧さが完全に消えます。`,
				zh: `03/04/05 是哪一天？美国人读作2005年3月4日；英国人读作2005年4月3日；而在韩国、日本和中国，年-月-日的顺序更自然，读作2003年4月5日。这三种读法在各自的地区都是对的——这恰恰就是问题所在：斜杠格式的日期一旦跨越国界、邮件往来或文件名，立刻变得模棱两可。

国际标准ISO 8601的解决办法是强制"大单位在前、固定位数"：YYYY-MM-DD，于是 2026-07-02 只能表示2026年7月2日。这个设计还有一个工程师们钟爱的副产品：由于各部分按重要性排序且补零对齐，对ISO日期做普通的字典序排序，结果恰好就是时间顺序。把文件命名为 2026-07-02-report，任何文件管理器都会自动按日期排列，无需任何特殊逻辑。该标准还定义了周编号（著名的"第27周"）、时间段，以及带时区偏移的日期时间组合格式。

东亚的日期顺序几乎是因传统的巧合而与ISO一致——2026년 7월 2일 和 2026年7月2日 本来就是年-月-日——这也是这种格式在首尔和东京让人觉得理所当然、在美国却花了几十年才推广开的原因。本页的日期选择器和所有HTML日期输入框在底层读写的都是ISO格式。一个值得养成的实用习惯：凡是日期要离开你的脑袋交给别人——合同、票据、表格、文件名——就用ISO格式书写，或把月份拼写出来，歧义便荡然无存。`
			},
			code: {
				example: `The same string, three readings:
  03/04/05  ->  Mar 4 2005 (US)  |  3 Apr 2005 (UK)  |  2003 Apr 5 (East Asia)

ISO 8601 is unambiguous AND sorts correctly:
  2026-07-02-notes.txt
  2026-07-10-notes.txt
  2026-11-03-notes.txt      <- alphabetical = chronological

Compare non-ISO file names (alphabetical order, WRONG chronology):
  02-07-2026.txt
  03-11-2026.txt
  10-07-2026.txt`
			}
		},
		{
			heading: {
				en: 'Worked Examples and the Mistakes People Actually Make',
				ko: '실전 계산 예제와 사람들이 실제로 저지르는 실수',
				ja: '実践的な計算例と、実際によくある間違い',
				zh: '实战算例与人们真正常犯的错误'
			},
			body: {
				en: `The fastest way to build date-arithmetic intuition is to work a few real cases end to end. Project deadline: a contract signed on 2026-07-02 with a 90-day delivery window. Exclusive counting from the signing date lands on 2026-09-30 — use the add-days panel with +90 to verify, and note that July and August both having 31 days is what keeps the result in September. Visa math: a 90-days-per-180 rule (used by the EU's Schengen area) is a rolling window, so this tool can count days between entry and exit, but you must sum multiple stays yourself. Salary anniversary: someone hired 2024-02-29 has a start date that exists only every four years; HR systems typically credit February 28 in common years.

The recurring mistakes are worth naming. Off-by-one from mixing conventions: booking 7 hotel nights but blocking 8 calendar days off work, or the reverse. Weekday drift: shifting a date by exactly n weeks never changes the weekday (7 divides evenly), so if your "+28 days" result lands on a different weekday than the start, the input was wrong. Business-day confusion: this tool counts every calendar day; a "10 business day" shipping promise spans at least 14 calendar days and more with holidays, which differ by country — Chuseok, Golden Week, and Thanksgiving all move or cluster differently. And month approximation: the months figure here divides by 30, so 365 days shows as 12 months and 5 days' worth of remainder is folded away — fine for planning, but for a rent contract measured in calendar months, count on the calendar itself.`,
				ko: `날짜 계산 감각을 기르는 가장 빠른 길은 실제 사례 몇 개를 끝까지 계산해 보는 것입니다. 프로젝트 마감: 2026-07-02에 서명한 계약의 납품 기한이 90일이라면, 서명일부터 배제 방식으로 세어 2026-09-30에 도착합니다. 더하기 패널에 +90을 넣어 검증해 보세요. 7월과 8월이 모두 31일이라는 점이 결과를 9월 안에 붙들어 둡니다. 비자 계산: EU 셰겐 지역의 180일 중 90일 규칙은 이동 창(rolling window)이므로, 이 도구로 입국일과 출국일 사이의 일수는 셀 수 있지만 여러 번의 체류 합산은 직접 해야 합니다. 입사 기념일: 2024-02-29에 입사한 사람의 입사일은 4년에 한 번만 존재합니다. 인사 시스템은 보통 평년에는 2월 28일로 처리합니다.

반복되는 실수에는 이름을 붙여 둘 만합니다. 관례 혼용에 의한 하루 오차: 호텔 7박을 예약하고 회사에는 8일 휴가를 내거나 그 반대. 요일 어긋남: 정확히 n주를 더하면 요일은 절대 바뀌지 않으므로(7로 나누어떨어지므로), "+28일" 결과가 시작일과 다른 요일이라면 입력이 잘못된 것입니다. 영업일 혼동: 이 도구는 모든 달력 날짜를 셉니다. "영업일 10일" 배송 약속은 최소 14일이 걸리고 공휴일이 끼면 더 길어지는데, 공휴일은 나라마다 다릅니다. 추석, 일본의 골든위크, 미국의 추수감사절은 각기 다르게 움직이거나 몰려 있습니다. 그리고 월 근사: 여기의 개월 수는 30으로 나눈 값이라 365일이 12개월로 표시되고 5일치 나머지는 접혀 사라집니다. 계획용으로는 충분하지만, 역월 단위로 정한 임대차 계약이라면 달력 자체로 세세요.`,
				ja: `日付計算の勘を養う最速の方法は、実際のケースをいくつか最後まで計算してみることです。プロジェクトの締切：2026-07-02に署名した契約の納期が90日なら、署名日から排他方式で数えて2026-09-30に着地します。加算パネルに+90を入れて検証してみてください。7月と8月がどちらも31日あることが、結果を9月内にとどめています。ビザの計算：EUシェンゲン圏の「180日中90日」ルールはローリングウィンドウなので、このツールで入国日と出国日の間の日数は数えられますが、複数回の滞在の合算は自分で行う必要があります。入社記念日：2024-02-29入社の人の入社日は4年に1度しか存在しません。人事システムは通常、平年では2月28日として扱います。

繰り返される間違いには名前を付けておく価値があります。流儀の混在によるオフバイワン：ホテルを7泊予約したのに会社には8日の休暇を申請する、あるいはその逆。曜日のずれ：ちょうどn週間ずらしても曜日は絶対に変わらない（7で割り切れる）ので、「+28日」の結果が開始日と違う曜日なら入力が間違っています。営業日の混同：このツールはすべての暦日を数えます。「営業日10日」の配送約束は最低14暦日かかり、祝日が挟まればさらに延びます。祝日は国ごとに違い、韓国の秋夕、日本のゴールデンウィーク、米国の感謝祭はそれぞれ違う動き方をします。そして月の近似：ここの月数は30で割った値なので、365日は12か月と表示され、5日分の端数は畳み込まれて消えます。計画には十分ですが、暦月で定めた賃貸契約なら暦そのもので数えてください。`,
				zh: `培养日期运算直觉的最快方法，是把几个真实案例从头算到尾。项目截止日：2026-07-02签署的合同约定90天交付，从签署日按排除式计数落在2026-09-30——用加天数面板输入+90即可验证；正是7月和8月都有31天，才把结果留在了9月。签证计算：欧盟申根区的"每180天内90天"规则是滚动窗口，本工具能算出入境与出境之间的天数，但多次停留的累加需要你自己完成。入职周年：2024-02-29入职的人，其入职日期每四年才存在一次；人事系统通常在平年按2月28日处理。

反复出现的错误值得点名。惯例混用导致的差一错误：订了7晚酒店却向公司请了8天假，或者反过来。星期漂移：把日期精确移动n周，星期几永远不变（能被7整除），所以如果"+28天"的结果与起始日不是同一个星期几，说明输入错了。工作日混淆：本工具计算的是所有日历日；"10个工作日"的发货承诺至少横跨14个日历日，遇到节假日还会更长，而节假日因国而异——韩国的秋夕、日本的黄金周、美国的感恩节，分布方式各不相同。还有月份近似：这里的月数是除以30得出的，365天会显示为12个月，5天的余数被折叠掉了——用于规划没问题，但按日历月计的租房合同，请直接在日历上数。`
			},
			code: {
				example: `Contract: signed 2026-07-02, deliver within 90 days
  Jul 3..31 = 29 days
  Aug       = 31 days   (running total 60)
  Sep 1..30 = 30 days   (running total 90)
  -> due 2026-09-30

Sanity check with weeks:
  +28 days = exactly 4 weeks -> SAME weekday as start
  (different weekday? re-check your input)

Business days vs calendar days:
  "10 business days" >= 14 calendar days (2 weekends)
  + national holidays (Chuseok / Golden Week / Thanksgiving...)`
			}
		}
	];

	const toolContent = {
		about: {
			en: 'A three-in-one date utility: count down to a future event (D-day), measure the gap between any two dates in days/weeks/months/years, or add and subtract days from a starting date. All calculations run instantly in your browser using local time. Useful for project deadlines, event planning, contract terms, and personal milestones.',
			ko: '한 페이지에서 세 가지 날짜 계산을 할 수 있습니다. 미래 일정까지 남은 D-day 카운트, 두 날짜 사이의 일·주·월·년 간격, 그리고 기준 날짜에 일수를 더하거나 빼는 기능을 제공합니다. 모든 계산은 브라우저의 로컬 시간으로 즉시 처리됩니다. 프로젝트 마감, 이벤트 준비, 계약 기간, 개인 일정 관리에 유용합니다.',
			ja: '1ページで3種類の日付計算が可能です。将来の予定までのD-dayカウント、2つの日付間の日・週・月・年の間隔、基準日への加算・減算に対応します。すべての計算はブラウザのローカル時間で即座に処理されます。プロジェクト締切、イベント準備、契約期間、個人の予定管理に便利です。',
			zh: '一页可完成三种日期运算：倒数计时（D-day）、两日期间隔（日 / 周 / 月 / 年）、基于起始日加减天数。所有计算在浏览器本地时间下即时完成。适合项目截止日、活动准备、合同期限和个人日程管理。'
		},
		howTo: {
			en: [
				'For D-day countdown, set your target date and read D-N or D+N.',
				'For date difference, enter both start and end dates to see the spans.',
				'For add/subtract, choose a base date and type a positive or negative number of days.',
				'Use the formatted date with weekday for quick verification.',
				'Bookmark the page with your dates pre-filled in the URL.'
			],
			ko: [
				'D-day는 목표 날짜를 입력하면 D-N, D+N으로 표시됩니다.',
				'날짜 차이는 시작·종료 날짜를 입력하면 일·주·월·년 단위로 보여 줍니다.',
				'더하기·빼기는 기준 날짜와 더할(또는 뺄) 일수를 입력합니다.',
				'결과에 표시되는 요일까지 활용해 빠르게 검증합니다.',
				'자주 쓰는 날짜 조합은 페이지를 북마크해 두세요.'
			],
			ja: [
				'D-dayは目標日を入力するとD-N／D+Nで表示されます。',
				'日付間隔は開始日と終了日を入力すると日・週・月・年で表示されます。',
				'加減算は基準日と加える（または引く）日数を入力します。',
				'曜日も表示されるので素早く確認できます。',
				'よく使う日付はページをブックマークしておくと便利です。'
			],
			zh: [
				'倒数计时填入目标日期即显示 D-N 或 D+N。',
				'日期差填入起始与结束日期，按日 / 周 / 月 / 年显示。',
				'加减天数填入基准日和正负天数。',
				'结果同时显示星期，方便快速核对。',
				'常用日期可将页面加入书签。'
			]
		},
		useCases: {
			en: [
				'Counting down to exam day, project deadline, or wedding.',
				'Computing the number of nights for a hotel stay or rental.',
				'Calculating contract duration or notice periods.',
				'Estimating delivery dates by adding shipping days.',
				'Planning a sprint, vacation, or marathon training schedule.'
			],
			ko: [
				'시험일, 프로젝트 마감, 결혼식 등 D-day 카운트.',
				'호텔 숙박 일수 또는 렌트 기간 계산.',
				'계약 기간이나 통지 기간 계산.',
				'배송일에 일수를 더해 도착 예상일 추정.',
				'스프린트, 휴가, 마라톤 훈련 일정 계획.'
			],
			ja: [
				'試験日、プロジェクト締切、結婚式までのカウントダウン。',
				'ホテルやレンタルの宿泊日数の計算。',
				'契約期間や通知期間の算出。',
				'配送日に日数を加えて到着予想日を推定。',
				'スプリントや休暇、マラソントレーニングの計画。'
			],
			zh: [
				'倒数考试、项目截止、婚礼等重要日子。',
				'计算酒店或租赁的入住天数。',
				'计算合同期或通知期。',
				'根据物流天数估算到货日期。',
				'规划冲刺、假期或马拉松训练日程。'
			]
		},
		faq: {
			en: [
				{ q: 'How are months and years calculated?', a: 'Months are approximated as 30 days and years as 365 days for quick estimation. For exact calendar months, use the age calculator.' },
				{ q: 'Why does today show as D-1 in some time zones?', a: 'The countdown uses your device\'s local midnight. Crossing midnight or different time zones can shift the count.' },
				{ q: 'Can I add a negative number of days?', a: 'Yes. Negative numbers subtract days from the base date.' },
				{ q: 'Are weekends excluded?', a: 'No, all days are counted. Use a business-day calculator if you need to exclude weekends.' }
			],
			ko: [
				{ q: '월수와 연수는 어떻게 계산되나요?', a: '간단한 추정을 위해 한 달은 30일, 한 해는 365일로 환산합니다. 정확한 달력 월·년이 필요하면 나이 계산기를 사용하세요.' },
				{ q: '오늘인데 D-1로 보이는 경우가 있어요.', a: '기기의 로컬 자정을 기준으로 계산하기 때문에, 시간대나 자정 부근에서는 하루 차이가 날 수 있습니다.' },
				{ q: '음수 일수도 입력할 수 있나요?', a: '네, 음수를 입력하면 기준일에서 그만큼 빼서 계산합니다.' },
				{ q: '주말은 제외되나요?', a: '아닙니다. 모든 일수를 셈에 포함합니다. 영업일만 계산하려면 별도의 영업일 계산기가 필요합니다.' }
			]
		},
		related: [
			{ href: '/age-calculator', label: { en: 'Age Calculator', ko: '나이 계산기', ja: '年齢計算機', zh: '年龄计算器' } },
			{ href: '/anniversary-calculator', label: { en: 'Anniversary Calculator', ko: '기념일 계산기', ja: '記念日計算機', zh: '纪念日计算器' } },
			{ href: '/career-calculator', label: { en: 'Career Calculator', ko: '경력 계산기', ja: 'キャリア計算機', zh: '工龄计算器' } }
		],
		externalRefs: [
			{ href: 'https://en.wikipedia.org/wiki/ISO_8601', label: 'ISO 8601 - Wikipedia' },
			{ href: 'https://www.timeanddate.com/date/', label: 'Time and Date: Date Calculators' }
		]
	};

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	// D-Day Calculator
	let targetDate = new Date().toISOString().split('T')[0];
	$: daysUntilTarget = Math.ceil((new Date(targetDate).getTime() - new Date().setHours(0,0,0,0)) / (1000 * 60 * 60 * 24));

	// Date Difference
	let startDate = new Date().toISOString().split('T')[0];
	let endDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
	$: dateDiff = calculateDateDiff(startDate, endDate);

	function calculateDateDiff(start: string, end: string) {
		const startD = new Date(start);
		const endD = new Date(end);
		const diffTime = Math.abs(endD.getTime() - startD.getTime());
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		return {
			days: diffDays,
			weeks: Math.floor(diffDays / 7),
			months: Math.floor(diffDays / 30),
			years: Math.floor(diffDays / 365)
		};
	}

	// Add/Subtract Days
	let baseDate = new Date().toISOString().split('T')[0];
	let daysToAdd = 30;
	$: resultDate = new Date(new Date(baseDate).getTime() + daysToAdd * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

	function formatDate(dateStr: string): string {
		const date = new Date(dateStr);
		const options: Intl.DateTimeFormatOptions = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			weekday: 'long'
		};
		const locale = lang === 'ko' ? 'ko-KR' : lang === 'ja' ? 'ja-JP' : lang === 'zh' ? 'zh-CN' : 'en-US';
		return date.toLocaleDateString(locale, options);
	}
</script>

<svelte:head>
	<title>{t('date.title')} - SD.gy</title>
	<meta name="description" content={t('date.desc')} />
	<link rel="canonical" href="https://sd.gy/{lang}/date-calculator" />
	<meta property="og:title" content="{t('date.title')} - SD.gy" />
	<meta property="og:description" content={t('date.desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/date-calculator" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('date.title')} - SD.gy" />
	<meta name="twitter:description" content={t('date.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('date.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('date.desc')}</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<!-- D-Day Calculator -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">{t('date.dday')}</h2>
			<div class="space-y-4">
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('date.targetDate')}</label>
					<input
						type="date"
						bind:value={targetDate}
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>
				<div class="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-6 text-center">
					{#if daysUntilTarget === 0}
						<div class="text-4xl font-bold text-violet-600 dark:text-violet-400">D-Day</div>
						<div class="text-gray-600 dark:text-dark-400 mt-2">{t('date.today')}</div>
					{:else if daysUntilTarget > 0}
						<div class="text-4xl font-bold text-violet-600 dark:text-violet-400">D-{daysUntilTarget}</div>
						<div class="text-gray-600 dark:text-dark-400 mt-2">{daysUntilTarget} {t('date.daysLeft')}</div>
					{:else}
						<div class="text-4xl font-bold text-gray-500 dark:text-dark-400">D+{Math.abs(daysUntilTarget)}</div>
						<div class="text-gray-600 dark:text-dark-400 mt-2">{Math.abs(daysUntilTarget)} {t('date.daysAgo')}</div>
					{/if}
				</div>
				<div class="text-center text-sm text-gray-500 dark:text-dark-400">
					{formatDate(targetDate)}
				</div>
			</div>
		</div>

		<!-- Date Difference -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">{t('date.difference')}</h2>
			<div class="space-y-4">
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('date.startDate')}</label>
					<input
						type="date"
						bind:value={startDate}
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('date.endDate')}</label>
					<input
						type="date"
						bind:value={endDate}
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>
				<div class="grid grid-cols-2 gap-3">
					<div class="bg-gray-50 dark:bg-dark-700 rounded-lg p-3 text-center">
						<div class="text-2xl font-bold text-gray-900 dark:text-dark-100">{dateDiff.days}</div>
						<div class="text-sm text-gray-500 dark:text-dark-400">{t('date.days')}</div>
					</div>
					<div class="bg-gray-50 dark:bg-dark-700 rounded-lg p-3 text-center">
						<div class="text-2xl font-bold text-gray-900 dark:text-dark-100">{dateDiff.weeks}</div>
						<div class="text-sm text-gray-500 dark:text-dark-400">{t('date.weeks')}</div>
					</div>
					<div class="bg-gray-50 dark:bg-dark-700 rounded-lg p-3 text-center">
						<div class="text-2xl font-bold text-gray-900 dark:text-dark-100">{dateDiff.months}</div>
						<div class="text-sm text-gray-500 dark:text-dark-400">{t('date.months')}</div>
					</div>
					<div class="bg-gray-50 dark:bg-dark-700 rounded-lg p-3 text-center">
						<div class="text-2xl font-bold text-gray-900 dark:text-dark-100">{dateDiff.years}</div>
						<div class="text-sm text-gray-500 dark:text-dark-400">{t('date.years')}</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Add/Subtract Days -->
		<div class="md:col-span-2 bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">{t('date.addSubtract')}</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('date.baseDate')}</label>
					<input
						type="date"
						bind:value={baseDate}
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('date.daysToAdd')}</label>
					<input
						type="number"
						bind:value={daysToAdd}
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
					/>
				</div>
				<div>
					<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('date.resultDate')}</label>
					<div class="px-4 py-3 bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl text-violet-600 dark:text-violet-400 font-semibold">
						{formatDate(resultDate)}
					</div>
				</div>
			</div>
		</div>
	</div>

	<ToolContent
		{lang}
		toolName="Date Calculator"
		toolUrl="https://sd.gy/{lang}/date-calculator"
		lastUpdated="2026-04-30"
		category="Daily Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sd.gy/${lang}` },
			{ name: 'Tools', url: `https://sd.gy/${lang}` },
			{ name: 'Date Calculator', url: `https://sd.gy/${lang}/date-calculator` }
		]}
		content={toolContent}
	/>

	<ToolGuide {lang} sections={guideSections} />
</div>
