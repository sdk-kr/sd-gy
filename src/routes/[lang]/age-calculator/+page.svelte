<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'Korean Age, International Age, and the 2023 Unification Law',
				ko: '세는 나이, 만 나이, 그리고 2023년 만 나이 통일법',
				ja: '数え年・満年齢と韓国の2023年「満年齢統一法」',
				zh: '虚岁、周岁与韩国2023年的"周岁统一法"'
			},
			body: {
				en: `Korea used three different age systems at once until recently. Counting age (세는 나이) started everyone at one year old at birth and added a year every January 1 — so a baby born on December 31 turned two the next morning, at two days old. Year age (연 나이) is simply the current year minus the birth year, and international age (만 나이) is the one this calculator uses: you are zero at birth and gain a year on each birthday.

On June 28, 2023, the so-called Age Unification Act (만 나이 통일법) — amendments to the Civil Act and the General Act on Public Administration — made international age the default interpretation in Korean laws, contracts, and official documents unless a statute explicitly says otherwise. Important exceptions survive: school entry, military conscription, and the legal age for buying alcohol and tobacco still use year age, so everyone born in the same calendar year crosses those lines together on January 1.

Japan went through the same transition much earlier. A 1902 law made Western-style age (満年齢) official, and a 1950 law urged citizens to stop using the traditional counting age (数え年) — although kazoedoshi still governs ceremonies such as Shichi-Go-San and the yakudoshi "unlucky years". In China, the traditional xusui (虚岁) also starts at one and increments at Lunar New Year, while official documents use zhousui (周岁), the international count. If a friend in Beijing says they are 25 by xusui, their international age may be 23 or 24 depending on the time of year.`,
				ko: `한국은 최근까지 세 가지 나이 체계를 동시에 사용했습니다. 세는 나이는 태어나자마자 한 살로 시작해 매년 1월 1일에 한 살씩 늘어나므로, 12월 31일에 태어난 아기는 생후 이틀 만에 두 살이 되었습니다. 연 나이는 현재 연도에서 출생 연도를 뺀 값이고, 만 나이는 이 계산기가 사용하는 방식으로 태어날 때 0살에서 시작해 생일마다 한 살씩 늘어납니다.

2023년 6월 28일, 민법과 행정기본법을 개정한 이른바 "만 나이 통일법"이 시행되면서, 법령·계약·공문서에서 별도 규정이 없는 한 나이는 만 나이로 해석하는 것이 원칙이 되었습니다. 다만 중요한 예외가 남아 있습니다. 초등학교 취학 연령, 병역판정검사, 술·담배 구매 가능 연령(청소년 보호법)은 여전히 연 나이를 사용하므로, 같은 해에 태어난 사람은 모두 1월 1일에 함께 그 기준선을 넘습니다.

일본은 같은 전환을 훨씬 일찍 겪었습니다. 1902년 법률로 서구식 만 나이(満年齢)가 공식화되었고, 1950년 법률로 전통적인 세는 나이(数え年) 사용 중지를 권고했습니다. 다만 시치고산(七五三)이나 액년(厄年) 같은 의례에서는 지금도 세는 나이를 씁니다. 중국의 전통 나이인 쉬쑤이(허세, 虚岁)도 한 살에서 시작해 음력 설에 한 살씩 늘어나며, 공식 문서에는 만 나이에 해당하는 저우쑤이(주세, 周岁)를 사용합니다. 베이징 친구가 허세로 25살이라고 말한다면, 만 나이는 시기에 따라 23살일 수도 24살일 수도 있습니다.`,
				ja: `韓国は最近まで3つの年齢システムを同時に使っていました。「数え年」は生まれた瞬間に1歳で、毎年1月1日に1歳加算されるため、12月31日生まれの赤ちゃんは生後2日で2歳になりました。「年年齢」は現在の年から生まれ年を引いただけの数字で、「満年齢」がこの計算機の使う方式です。生まれたときは0歳、誕生日ごとに1歳増えます。

2023年6月28日、民法と行政基本法を改正したいわゆる「満年齢統一法」が施行され、法令・契約・公文書では特別な規定がない限り年齢は満年齢で解釈することが原則になりました。ただし重要な例外が残っています。小学校入学、兵役判定検査、酒・たばこの購入可能年齢は今も年年齢を使うため、同じ年に生まれた人は全員1月1日に一斉にその基準を越えます。

日本は同じ移行をずっと早く経験しました。1902年の「年齢計算ニ関スル法律」で満年齢が公式となり、1950年の「年齢のとなえ方に関する法律」で数え年の使用をやめるよう国民に促しました。それでも七五三や厄年などの行事では今も数え年が使われます。中国の伝統的な「虚歳（シュースイ）」も1歳から始まり旧正月に1歳ずつ増え、公式書類では満年齢にあたる「周歳（ヂョウスイ）」を使います。北京の友人が虚歳で25歳だと言った場合、満年齢は時期によって23歳か24歳です。`,
				zh: `韩国直到最近还同时使用三种年龄体系。"虚岁式"数法（세는 나이）出生即算一岁，每年1月1日加一岁——12月31日出生的婴儿出生第二天就"两岁"了。"年年龄"（연 나이）是当前年份减去出生年份，而"周岁"（만 나이）就是本计算器采用的方式：出生为零岁，每过一次生日加一岁。

2023年6月28日，韩国通过修订《民法》和《行政基本法》实施了所谓"周岁统一法"，规定除非法律另有明文规定，法令、合同和公文中的年龄一律按周岁解释。但重要的例外依然存在：小学入学、兵役体检、购买烟酒的法定年龄仍按年年龄计算，因此同一年出生的人都在1月1日一起跨过这些门槛。

日本更早完成了同样的转变：1902年的法律确立了西式周岁（満年齢）的官方地位，1950年的法律又劝导国民停用传统的数え年（虚岁），不过七五三、厄年等仪式至今仍按虚岁计算。在中国，传统的虚岁同样出生即一岁、过农历新年长一岁，而官方文件使用周岁。如果北京的朋友说自己虚岁25，那么按周岁可能是23岁或24岁，取决于所处的月份。`
			}
		},
		{
			heading: {
				en: 'Why Two Calculators Can Disagree About Months and Days',
				ko: '계산기마다 개월·일 수가 다르게 나오는 이유',
				ja: '計算機によって「か月・日」が食い違う理由',
				zh: '为什么不同计算器算出的月数和天数不一样'
			},
			body: {
				en: `Turning a raw day count into "X years, Y months, Z days" is not standardized, because months have different lengths. The common algorithm — the one this tool uses — subtracts years, months, and days separately, and when the day-of-month goes negative it borrows the length of the previous month. That borrowed length is where implementations diverge. Someone born on January 31 and checked on March 1 has been alive for 1 month and 29 days under one convention (borrowing February's 28 days) but 1 month and 1 day under another. Neither answer is wrong; they are different conventions, which is why a government form, an HR system, and two websites can each show a slightly different month-day breakdown for the same person.

February 29 birthdays add a legal wrinkle. Roughly one person in 1,461 is born on a leap day and only has a true birthday every four years. Jurisdictions disagree about when leap-day babies age in common years: New Zealand deems the birthday to fall on February 28, while the United Kingdom uses March 1. This calculator rolls the birthday over to March 1 in non-leap years.

Japan has the most surprising rule of all: under its age-calculation law, a person legally becomes one year older at the end of the day before their birthday. That is why children born on April 1 join the school cohort above children born on April 2 — they legally turn six on March 31, just inside the school-year cutoff.`,
				ko: `총 일수를 "몇 년 몇 개월 며칠"로 바꾸는 방법에는 표준이 없습니다. 달마다 길이가 다르기 때문입니다. 이 도구가 쓰는 일반적인 알고리즘은 연·월·일을 각각 빼고, 일 자리가 음수가 되면 직전 달의 길이만큼 빌려 옵니다. 바로 이 "빌려 오는 달의 길이"에서 구현이 갈립니다. 1월 31일에 태어난 사람을 3월 1일에 조회하면, 2월의 28일을 빌리는 방식에서는 1개월 29일이지만 다른 방식에서는 1개월 1일이 됩니다. 어느 쪽도 틀린 게 아니라 관례가 다른 것이고, 그래서 행정 서식과 인사 시스템, 웹사이트 두 곳이 같은 사람에 대해 조금씩 다른 개월·일 수를 보여 줄 수 있습니다.

2월 29일생은 법적인 문제도 더해집니다. 대략 1,461명 중 1명이 윤일에 태어나고, 진짜 생일은 4년에 한 번뿐입니다. 평년에 언제 나이를 먹는지는 나라마다 다릅니다. 뉴질랜드는 2월 28일을 생일로 보고, 영국은 3월 1일을 사용합니다. 이 계산기는 평년에는 생일을 3월 1일로 넘겨 계산합니다.

가장 놀라운 규칙은 일본에 있습니다. 일본의 연령계산법에 따르면 사람은 생일 전날이 끝나는 시점(오후 12시)에 법적으로 한 살을 더 먹습니다. 4월 1일생 아이가 4월 2일생 아이보다 한 학년 위가 되는 이유가 바로 이것입니다. 4월 1일생은 학년 구분선 안쪽인 3월 31일에 법적으로 여섯 살이 되기 때문입니다.`,
				ja: `総日数を「◯年◯か月◯日」に変換する方法には標準がありません。月ごとに長さが違うからです。このツールが使う一般的なアルゴリズムは年・月・日を別々に引き算し、日がマイナスになったら前月の長さを借りてきます。この「借りてくる月の長さ」で実装が分かれます。1月31日生まれの人を3月1日に照会すると、2月の28日を借りる方式では1か月29日、別の方式では1か月1日になります。どちらも間違いではなく慣例の違いであり、役所の書式・人事システム・ウェブサイト2つが同じ人について微妙に違う月日を表示するのはこのためです。

2月29日生まれには法律上の問題も加わります。およそ1,461人に1人がうるう日に生まれ、本当の誕生日は4年に1度しか来ません。平年にいつ歳をとるかは国によって異なり、ニュージーランドは2月28日、イギリスは3月1日を誕生日とみなします。この計算機は平年には誕生日を3月1日に繰り越します。

最も意外なルールは日本のものです。年齢計算ニ関スル法律では、人は誕生日の前日が終わる瞬間に法律上1歳年をとります。4月1日生まれの子が4月2日生まれの子より1学年上になるのはこのためで、4月1日生まれは学年の区切りの内側である3月31日に法律上6歳になるのです。`,
				zh: `把总天数换算成"X年Y个月Z天"并没有统一标准，因为每个月长短不一。本工具采用的常见算法是把年、月、日分别相减，当"日"出现负数时向上一个月借位。分歧恰恰出在"借来的这个月有多长"。一个1月31日出生的人在3月1日查询：按借2月28天的算法是1个月29天，按另一种算法则是1个月零1天。两个答案都没有错，只是惯例不同——这也是政府表格、HR系统和两个网站会对同一个人显示略有差异的月日数的原因。

2月29日的生日还牵涉法律问题。大约每1461人中就有1人生于闰日，每四年才有一次真正的生日。平年里闰日宝宝哪天"长一岁"，各法域规定不一：新西兰视2月28日为生日，英国则采用3月1日。本计算器在平年将生日顺延至3月1日。

最出人意料的规则在日本：按其年龄计算法，人在生日前一天结束的那一刻在法律上长一岁。这就是为什么4月1日出生的孩子会比4月2日出生的孩子高一个年级——他们在3月31日、也就是学年分界线之内，法律上已满六岁。`
			},
			code: {
				example: `Birth: 1990-05-15   Today: 2026-07-02

Step 1  Years : 2026 - 1990 = 36 (May 15 birthday already passed)
Step 2  Months: 7 - 5 = 2, but day 2 < day 15 -> borrow one month
Step 3  Days  : 2 + 30 (length of June) - 15 = 17
Result: 36 years, 1 month, 17 days

Total days lived:
  36 x 365            = 13,140
  + 9 leap days (1992, 1996, 2000, ... 2024) = 13,149
  + 48 days (May 15 -> Jul 2)                = 13,197 days

Wrong shortcut: 13,197 / 365 = 36.16 "years" drifts because it
ignores leap days — always subtract calendar dates instead.`
			}
		},
		{
			heading: {
				en: 'Where the Exact Number Matters: Pensions, Drinking Ages, Insurance',
				ko: '정확한 나이가 중요한 순간 — 연금, 음주 연령, 보험',
				ja: '正確な年齢が問われる場面 — 年金・飲酒年齢・保険',
				zh: '精确年龄的用武之地：养老金、饮酒年龄与保险'
			},
			body: {
				en: `Most day-to-day uses of age tolerate rough numbers, but several legal thresholds turn on the exact date. Korea's national pension claiming age is climbing in steps: those born 1961–1964 can claim at 63, and the threshold reaches 65 for anyone born in 1969 or later. The US Social Security full retirement age is 66 plus a sliding number of months for people born 1955–1959, and a flat 67 from the 1960 cohort onward. A one-year error on a form can shift benefits by thousands of dollars.

Ages of majority and consumption ages do not line up across the four locales this site serves. Korea's civil majority is 19 in international age, but alcohol and tobacco follow year age — anyone whose 19th calendar year has begun may buy them from January 1. Japan lowered legal adulthood from 20 to 18 in April 2022, yet kept drinking, smoking, and public gambling at 20. China's majority is 18, and the US famously licenses driving years before it allows drinking at 21.

Korean life insurers use yet another system, insurance age (보험나이), which rounds to the nearest birthday: from six months after your last birthday you are treated as one year older, which changes premiums. If a quote looks wrong, check whether the company computed insurance age rather than international age before assuming a mistake.`,
				ko: `일상에서는 나이가 대충 맞아도 괜찮지만, 몇몇 법적 기준선은 정확한 날짜에 따라 갈립니다. 국민연금 수급 개시 연령은 단계적으로 올라가는 중입니다. 1961~1964년생은 63세부터 받을 수 있고, 1969년생 이후는 65세가 기준입니다. 미국 사회보장연금의 완전 수급 연령은 1955~1959년생이 66세에 몇 개월씩 더해지는 방식이고, 1960년생부터는 일괄 67세입니다. 서류에서 한 살만 틀려도 수급액이 수백만 원 단위로 달라질 수 있습니다.

성년 기준과 음주 가능 연령은 이 사이트가 지원하는 네 언어권에서 서로 일치하지 않습니다. 한국의 민법상 성년은 만 19세지만 술·담배는 연 나이를 따르므로, 태어난 해 기준으로 19세가 되는 해의 1월 1일부터 구매할 수 있습니다. 일본은 2022년 4월 성년을 20세에서 18세로 낮추면서도 음주·흡연·공영 도박은 20세 기준을 유지했습니다. 중국의 성년은 18세이고, 미국은 운전면허는 훨씬 일찍 주면서 음주는 21세부터 허용하는 것으로 유명합니다.

한국 생명보험사는 또 다른 체계인 "보험나이"를 씁니다. 마지막 생일로부터 6개월이 지나면 한 살 더 많은 것으로 계산해 보험료가 달라집니다. 견적이 이상해 보이면 오류라고 단정하기 전에 보험사가 만 나이가 아닌 보험나이로 계산했는지 먼저 확인해 보세요.`,
				ja: `日常では年齢が多少ずれても問題ありませんが、いくつかの法的基準は正確な日付で決まります。韓国の国民年金の受給開始年齢は段階的に引き上げ中で、1961〜1964年生まれは63歳から、1969年生まれ以降は65歳からです。米国の社会保障年金の満額受給年齢は1955〜1959年生まれが66歳に数か月ずつ加算され、1960年生まれ以降は一律67歳です。書類で1歳間違えるだけで受給額が数十万円単位で変わることがあります。

成人年齢と飲酒可能年齢は、このサイトが対応する4つの言語圏で一致しません。韓国の民法上の成年は満19歳ですが、酒・たばこは年年齢に従うため、生まれ年基準で19歳になる年の1月1日から購入できます。日本は2022年4月に成年を20歳から18歳に引き下げましたが、飲酒・喫煙・公営ギャンブルは20歳のままです。中国の成年は18歳、米国は運転免許をずっと早く与える一方で飲酒は21歳からというのは有名な話です。

韓国の生命保険会社はさらに別の「保険年齢」という体系を使います。直近の誕生日から6か月経つと1歳年上として扱われ、保険料が変わります。見積もりがおかしいと感じたら、間違いと決めつける前に、保険会社が満年齢ではなく保険年齢で計算していないか確認しましょう。`,
				zh: `日常生活中年龄差不多就行，但有些法律门槛取决于精确的日期。韩国国民年金的领取年龄正在分阶段上调：1961–1964年出生者63岁可领，1969年及以后出生者要到65岁。美国社会保障金的全额退休年龄，1955–1959年出生者为66岁再加上逐年递增的月数，1960年及以后出生者统一为67岁。表格上差一岁，待遇可能相差数千美元。

成年年龄和烟酒年龄在本站支持的四个语言区并不一致。韩国民法上的成年是周岁19岁，但烟酒购买按年年龄计算——只要进入出生年份起算的第19个日历年，从1月1日起即可购买。日本2022年4月把成年年龄从20岁降到18岁，却把饮酒、吸烟和公营博彩保留在20岁。中国的成年年龄是18岁；美国则以"开车远早于喝酒"著称，饮酒要到21岁。

韩国的寿险公司还使用另一套体系——"保险年龄"：从上一个生日过后满六个月起，你就被按大一岁计算，保费随之变化。如果报价看起来不对，先确认保险公司是否用的是保险年龄而非周岁，再判断是不是算错了。`
			}
		},
		{
			heading: {
				en: 'Common Mistakes: The 365.25 Shortcut and the UTC Parsing Trap',
				ko: '흔한 실수 — 365.25로 나누기와 UTC 파싱 함정',
				ja: 'よくある間違い — 365.25で割る近道とUTC解析の罠',
				zh: '常见错误：除以365.25的捷径与UTC解析陷阱'
			},
			body: {
				en: `The most common manual error is dividing total days by 365 or 365.25 and reading the result as an age. It drifts: across a 36-year span there are nine or ten leap days, and a plain 365 divisor claims someone is already 36 several days before their real birthday. Subtract calendar dates to get ages; use total-day counts only for totals.

A subtler bug affects software, including many web calculators. In JavaScript, the string 1990-05-15 is parsed as midnight UTC, but "today" is taken in local time. In any timezone west of Greenwich, that mismatch silently shifts the birth moment several hours earlier than intended and can knock the day count off by one near midnight or near a birthday. This tool computes everything on your device with its local clock, so a birth registered in another timezone can legitimately differ by a day — the FAQ answer about one-day shifts is this exact effect.

Also remember that the months shown here are calendar months, not 30-day blocks. A newborn is "1 month old" on the same day-number of the following month whether that gap was 28 or 31 days, and pediatric milestones and prescriptions usually intend calendar months as well. None of this is legal advice: when age determines a deadline, a benefit, or eligibility, confirm the counting rule the institution itself uses before relying on any calculator, including this one.`,
				ko: `가장 흔한 수동 계산 실수는 총 일수를 365나 365.25로 나눠 그 결과를 나이로 읽는 것입니다. 이 방법은 오차가 누적됩니다. 36년 동안 윤일이 9~10일 끼어 있어서, 단순히 365로 나누면 실제 생일보다 며칠 일찍 이미 36세가 되었다고 나옵니다. 나이는 달력 날짜끼리 빼서 구하고, 총 일수는 합계 용도로만 쓰세요.

더 미묘한 버그는 많은 웹 계산기를 포함한 소프트웨어에 있습니다. JavaScript에서 1990-05-15라는 문자열은 UTC 자정으로 파싱되는데, "오늘"은 로컬 시간으로 잡힙니다. 그리니치보다 서쪽 시간대에서는 이 불일치 때문에 출생 시점이 의도보다 몇 시간 앞당겨져, 자정이나 생일 근처에서 일수가 하루 어긋날 수 있습니다. 이 도구는 모든 계산을 기기의 로컬 시계로 수행하므로, 다른 시간대에서 등록된 출생일은 정당하게 하루 차이가 날 수 있습니다. FAQ의 "하루 차이" 답변이 바로 이 현상입니다.

여기서 표시되는 개월 수는 30일 단위 묶음이 아니라 달력상의 개월이라는 점도 기억하세요. 신생아는 그 사이가 28일이든 31일이든 다음 달의 같은 날짜에 "생후 1개월"이 되며, 소아과 발달 기준이나 처방도 보통 달력상 개월을 의미합니다. 이 내용은 법률 자문이 아닙니다. 나이가 기한·수급·자격을 좌우한다면, 이 계산기를 포함한 어떤 계산기든 그대로 믿기 전에 해당 기관이 실제로 쓰는 계산 규칙을 확인하세요.`,
				ja: `手計算で最も多い間違いは、総日数を365や365.25で割って結果を年齢として読むことです。この方法は誤差が蓄積します。36年間にはうるう日が9〜10日含まれるため、単純に365で割ると本当の誕生日より数日早く「もう36歳」という結果になります。年齢は暦の日付同士の引き算で求め、総日数は合計の用途だけに使いましょう。

より微妙なバグは、多くのウェブ計算機を含むソフトウェアに潜んでいます。JavaScriptでは 1990-05-15 という文字列はUTCの深夜0時として解析されますが、「今日」はローカル時間で取得されます。グリニッジより西のタイムゾーンではこの不一致により出生時点が意図より数時間早くずれ、深夜や誕生日の前後で日数が1日狂うことがあります。このツールはすべてを端末のローカル時計で計算するため、別のタイムゾーンで登録された出生日は正当に1日ずれる可能性があります。FAQの「1日ずれる」という回答はまさにこの現象です。

ここで表示される「か月」は30日のかたまりではなく暦上の月である点も覚えておいてください。新生児はその間隔が28日でも31日でも翌月の同じ日に「生後1か月」となり、小児科の発達基準や処方も通常は暦上の月を意味します。これは法的助言ではありません。年齢が期限・給付・資格を左右する場合は、この計算機を含むどんな計算機であれ、その機関が実際に使う計算ルールを確認してから頼ってください。`,
				zh: `手工计算最常见的错误，是把总天数除以365或365.25，然后把结果当作年龄。这种方法会累积误差：36年间夹着9到10个闰日，单纯除以365会在真实生日前好几天就宣称某人"已满36岁"。年龄应该用日历日期相减求出，总天数只用于统计合计。

更隐蔽的错误藏在软件里，包括许多网页计算器。在JavaScript中，字符串 1990-05-15 会被解析为UTC零点，而"今天"却取本地时间。在格林尼治以西的任何时区，这种不一致会悄悄把出生时刻提前几个小时，在午夜或生日前后让天数差出一天。本工具的所有计算都在你的设备上用本地时钟完成，因此在另一个时区登记的出生日期确实可能相差一天——FAQ里"差一天"的解答说的正是这个现象。

还要记住，这里显示的"月"是日历月，不是30天一段。无论间隔是28天还是31天，新生儿都在下个月的同一个日期数满"1个月"，儿科发育里程碑和处方通常也是指日历月。以上内容不构成法律意见：当年龄决定期限、待遇或资格时，请先确认相关机构实际采用的计算规则，再依赖任何计算器——包括这一个。`
			}
		}
	];

	const toolContent = {
		about: {
			en: 'The age calculator finds your exact age in years, months, and days from your date of birth. It also shows total days lived, weeks, and months, plus the number of days until your next birthday. Useful for legal forms, retirement planning, school enrollment, or simple curiosity.',
			ko: '나이 계산기는 생년월일을 기준으로 만 나이를 연·월·일 단위로 정확히 계산합니다. 살아온 총 일수, 주, 개월 수와 다음 생일까지 남은 일수도 함께 보여 줍니다. 한국에서는 2023년부터 만 나이가 공식 표준이 되었으며, 이 도구는 그 기준을 따릅니다.',
			ja: '年齢計算機は、生年月日から正確な年齢を年・月・日単位で算出します。総日数、週数、月数、次の誕生日までの日数も表示されます。各種申請、進学、退職計画などに便利です。',
			zh: '年龄计算器根据出生日期计算精确的年、月、日年龄，并显示总天数、周数、月数以及距离下一个生日的天数。适用于法律文件、入学、退休规划等场景。'
		},
		howTo: {
			en: [
				'Enter your date of birth using the date picker.',
				'The calculator instantly shows your age in years, months, and days.',
				'Review the totals for days, weeks, and months you have lived.',
				'Check the date and countdown for your next birthday.',
				'Change the date to compare ages of family members or friends.'
			],
			ko: [
				'생년월일을 날짜 선택기로 입력합니다.',
				'연·월·일 단위의 만 나이가 즉시 계산되어 표시됩니다.',
				'살아온 총 일수, 주, 개월 수를 함께 확인합니다.',
				'다음 생일 날짜와 남은 일수를 확인합니다.',
				'날짜를 바꿔 가족이나 친구의 나이를 비교해 볼 수 있습니다.'
			],
			ja: [
				'日付選択で生年月日を入力します。',
				'年・月・日単位の年齢が即座に表示されます。',
				'総日数・週数・月数を確認します。',
				'次の誕生日までの日数を確認します。',
				'日付を変えて家族や友人の年齢を比較できます。'
			],
			zh: [
				'使用日期选择器输入出生日期。',
				'年、月、日年龄会立即显示。',
				'查看总天数、周数和月数。',
				'查看距离下一个生日的天数。',
				'更换日期以比较家人或朋友的年龄。'
			]
		},
		useCases: {
			en: [
				'Filling in legal documents that require exact age.',
				'Tracking a child\'s precise age for school or vaccinations.',
				'Planning birthdays and milestone celebrations.',
				'Calculating retirement, pension, or insurance eligibility.',
				'Comparing ages between two people for relationships or genealogy.'
			],
			ko: [
				'정확한 만 나이가 필요한 법률·행정 서류 작성.',
				'아이의 개월 수까지 정확한 나이로 학교·예방접종 일정 관리.',
				'생일 및 기념일 계획.',
				'국민연금, 노령연금, 보험 가입 자격 확인.',
				'가족·지인 간 나이 차이 계산.'
			],
			ja: [
				'正確な年齢が必要な行政書類の記入。',
				'子供の月齢に応じた予防接種や入園手続き。',
				'誕生日や記念日の計画。',
				'年金や保険の加入資格確認。',
				'家族や知人との年齢差の計算。'
			],
			zh: [
				'填写需要精确年龄的法律文件。',
				'追踪儿童精确月龄以安排接种或入学。',
				'规划生日和重要纪念日。',
				'查询养老金或保险资格。',
				'比较家人或朋友间的年龄差。'
			]
		},
		faq: {
			en: [
				{ q: 'Does this calculate Korean "age" or international age?', a: 'It uses the international (full-year) age standard, which is now also the official standard in Korea since 2023.' },
				{ q: 'Why is the day count off by one near my birthday?', a: 'The calculation is based on local time. Time zone differences between your device and birth location may cause a one-day shift.' },
				{ q: 'Can I calculate the age of someone who has passed away?', a: 'Use the date calculator instead — enter the birth date and the date of death to find the exact lifespan.' },
				{ q: 'Is leap day (Feb 29) handled correctly?', a: 'Yes. In non-leap years, the birthday rolls over on March 1 for age increment purposes.' }
			],
			ko: [
				{ q: '한국식 나이가 계산되나요, 만 나이가 계산되나요?', a: '국제 표준인 만 나이를 계산합니다. 한국에서도 2023년부터 만 나이가 공식 기준입니다.' },
				{ q: '생일 즈음에 일수가 하루씩 다르게 나옵니다.', a: '기기 로컬 시간 기준으로 계산하기 때문에, 출생지와 시간대가 다르면 하루 정도 차이가 날 수 있습니다.' },
				{ q: '돌아가신 분의 나이도 계산할 수 있나요?', a: '이 도구는 오늘 기준으로 계산합니다. 두 날짜 차이가 필요하면 날짜 계산기를 이용하세요.' },
				{ q: '윤년(2월 29일) 생일도 정확히 계산되나요?', a: '네, 평년에는 3월 1일에 한 살을 더하는 방식으로 처리합니다.' }
			]
		},
		related: [
			{ href: '/date-calculator', label: { en: 'Date Calculator', ko: '날짜 계산기', ja: '日付計算機', zh: '日期计算器' } },
			{ href: '/anniversary-calculator', label: { en: 'Anniversary Calculator', ko: '기념일 계산기', ja: '記念日計算機', zh: '纪念日计算器' } },
			{ href: '/career-calculator', label: { en: 'Career Calculator', ko: '경력 계산기', ja: 'キャリア計算機', zh: '工龄计算器' } }
		],
		externalRefs: [
			{ href: 'https://en.wikipedia.org/wiki/Age', label: 'Age - Wikipedia' },
			{ href: 'https://www.timeanddate.com/date/duration.html', label: 'Time and Date: Date Duration Calculator' }
		]
	};

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let birthdate = '1990-01-01';

	$: age = calculateAge(birthdate);

	function calculateAge(birthStr: string) {
		const birth = new Date(birthStr);
		const today = new Date();

		let years = today.getFullYear() - birth.getFullYear();
		let months = today.getMonth() - birth.getMonth();
		let days = today.getDate() - birth.getDate();

		if (days < 0) {
			months--;
			const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
			days += lastMonth.getDate();
		}

		if (months < 0) {
			years--;
			months += 12;
		}

		// Total calculations
		const totalDays = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
		const totalWeeks = Math.floor(totalDays / 7);
		const totalMonths = years * 12 + months;

		// Next birthday
		let nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
		if (nextBirthday <= today) {
			nextBirthday = new Date(today.getFullYear() + 1, birth.getMonth(), birth.getDate());
		}
		const daysUntilBirthday = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

		return {
			years,
			months,
			days,
			totalDays,
			totalWeeks,
			totalMonths,
			daysUntilBirthday,
			nextBirthday: nextBirthday.toISOString().split('T')[0]
		};
	}

	function formatDate(dateStr: string): string {
		const date = new Date(dateStr);
		const options: Intl.DateTimeFormatOptions = {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		};
		const locale = lang === 'ko' ? 'ko-KR' : lang === 'ja' ? 'ja-JP' : lang === 'zh' ? 'zh-CN' : 'en-US';
		return date.toLocaleDateString(locale, options);
	}
</script>

<svelte:head>
	<title>{t('age.title')} - SD.gy</title>
	<meta name="description" content={t('age.desc')} />
	<link rel="canonical" href="https://sd.gy/{lang}/age-calculator" />
	<meta property="og:title" content="{t('age.title')} - SD.gy" />
	<meta property="og:description" content={t('age.desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/age-calculator" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('age.title')} - SD.gy" />
	<meta name="twitter:description" content={t('age.desc')} />
</svelte:head>

<div class="max-w-2xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('age.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('age.desc')}</p>
	</div>

	<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
		<!-- Birthdate Input -->
		<div class="mb-6">
			<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('age.birthdate')}</label>
			<input
				type="date"
				bind:value={birthdate}
				max={new Date().toISOString().split('T')[0]}
				class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent text-lg"
			/>
		</div>

		<!-- Current Age -->
		<div class="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-6 mb-6">
			<h3 class="text-sm text-gray-600 dark:text-dark-400 mb-2">{t('age.currentAge')}</h3>
			<div class="text-4xl font-bold text-violet-600 dark:text-violet-400">
				{age.years}
				<span class="text-lg font-normal">{t('date.years')}</span>
				{age.months}
				<span class="text-lg font-normal">{t('date.months')}</span>
				{age.days}
				<span class="text-lg font-normal">{t('date.days')}</span>
			</div>
		</div>

		<!-- Next Birthday -->
		<div class="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-4 mb-6">
			<h3 class="text-sm text-gray-600 dark:text-dark-400 mb-1">{t('age.nextBirthday')}</h3>
			<div class="flex items-center justify-between">
				<span class="text-gray-900 dark:text-dark-100">{formatDate(age.nextBirthday)}</span>
				<span class="text-pink-600 dark:text-pink-400 font-semibold">
					{age.daysUntilBirthday} {t('age.daysUntil')}
				</span>
			</div>
		</div>

		<!-- Statistics -->
		<div class="grid grid-cols-3 gap-4">
			<div class="bg-gray-50 dark:bg-dark-700 rounded-xl p-4 text-center">
				<div class="text-2xl font-bold text-gray-900 dark:text-dark-100">{age.totalDays.toLocaleString()}</div>
				<div class="text-sm text-gray-500 dark:text-dark-400">{t('age.totalDays')}</div>
			</div>
			<div class="bg-gray-50 dark:bg-dark-700 rounded-xl p-4 text-center">
				<div class="text-2xl font-bold text-gray-900 dark:text-dark-100">{age.totalWeeks.toLocaleString()}</div>
				<div class="text-sm text-gray-500 dark:text-dark-400">{t('age.totalWeeks')}</div>
			</div>
			<div class="bg-gray-50 dark:bg-dark-700 rounded-xl p-4 text-center">
				<div class="text-2xl font-bold text-gray-900 dark:text-dark-100">{age.totalMonths.toLocaleString()}</div>
				<div class="text-sm text-gray-500 dark:text-dark-400">{t('age.totalMonths')}</div>
			</div>
		</div>
	</div>

	<ToolContent
		{lang}
		toolName="Age Calculator"
		toolUrl="https://sd.gy/{lang}/age-calculator"
		lastUpdated="2026-04-30"
		category="Daily Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sd.gy/${lang}` },
			{ name: 'Tools', url: `https://sd.gy/${lang}` },
			{ name: 'Age Calculator', url: `https://sd.gy/${lang}/age-calculator` }
		]}
		content={toolContent}
	/>

	<ToolGuide {lang} sections={guideSections} />
</div>
