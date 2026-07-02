<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'Why 2 + 3 × 4 Can Equal 20: Immediate vs Algebraic Logic',
				ko: '2 + 3 × 4가 20이 될 수 있는 이유 — 즉시 계산과 수식 계산',
				ja: '2 + 3 × 4 が20になる理由 — 逐次計算と数式計算',
				zh: '为什么 2 + 3 × 4 可能等于20：即时运算与代数运算'
			},
			body: {
				en: `Hand a math teacher the expression 2 + 3 × 4 and the answer is 14: multiplication binds tighter than addition under the standard order of operations (PEMDAS in the US, BODMAS in the UK and much of Asia). Hand it to a typical desk calculator — or to this one — and you will get 20. Neither device is broken; they implement different execution models.

Simple four-function calculators use immediate execution: every time you press an operator, the pending operation is resolved first. Keying 2 + 3 × 4 therefore computes 2 + 3 = 5 the instant you press ×, then 5 × 4 = 20. Scientific calculators use algebraic (formula) logic instead: they hold the whole expression and apply precedence rules, returning 14. Casio and Sharp desk calculators for accounting are deliberately immediate-execution because bookkeepers chain operations left to right; TI and Casio scientific models are algebraic because students need textbook behavior.

This split is behind the periodic internet fights over expressions like 6 ÷ 2(1 + 2). Strict left-to-right evaluation with explicit multiplication gives 9, but many people — and some older calculators — treat implied multiplication next to parentheses as binding tighter, giving 1. The expression is genuinely ambiguous as written; professional style guides tell you to add parentheses rather than rely on precedence.

Practical rule for this tool: it chains left to right, so enter one operation at a time in the order you want it performed. For 2 + (3 × 4), key 3 × 4 first, then add 2.`,
				ko: `수학 선생님에게 2 + 3 × 4를 물으면 답은 14입니다. 표준 연산 순서(미국의 PEMDAS, 영국과 아시아 상당수의 BODMAS)에서 곱셈이 덧셈보다 먼저이기 때문입니다. 그런데 흔한 탁상용 계산기 — 그리고 이 계산기 — 에 입력하면 20이 나옵니다. 어느 쪽도 고장이 아닙니다. 실행 모델이 다를 뿐입니다.

단순 사칙연산 계산기는 즉시 계산 방식을 씁니다. 연산자를 누를 때마다 대기 중인 연산이 먼저 처리됩니다. 2 + 3 × 4를 입력하면 ×를 누르는 순간 2 + 3 = 5가 계산되고, 이어 5 × 4 = 20이 됩니다. 반면 공학용 계산기는 수식(대수) 방식으로 전체 식을 보관했다가 우선순위 규칙을 적용해 14를 돌려줍니다. 회계용 카시오·샤프 탁상 계산기가 일부러 즉시 계산인 이유는 경리 업무가 왼쪽에서 오른쪽으로 연산을 이어 가기 때문이고, 학생용 공학 계산기가 수식 방식인 이유는 교과서와 같은 답이 필요하기 때문입니다.

이 차이가 6 ÷ 2(1 + 2) 같은 식을 둘러싼 주기적인 인터넷 논쟁의 배경입니다. 곱셈 기호를 명시하고 왼쪽부터 계산하면 9지만, 괄호에 붙은 암시적 곱셈을 더 강하게 묶는 사람과 일부 구형 계산기는 1을 내놓습니다. 이 식은 쓰인 그대로는 정말로 모호하며, 전문 표기 지침은 우선순위에 기대지 말고 괄호를 추가하라고 권합니다.

이 도구의 실용 규칙은 이렇습니다. 왼쪽에서 오른쪽으로 이어 계산하므로, 원하는 순서대로 한 번에 한 연산씩 입력하세요. 2 + (3 × 4)를 원하면 3 × 4를 먼저 누르고 나서 2를 더하면 됩니다.`,
				ja: `数学の先生に 2 + 3 × 4 を尋ねれば答えは14です。標準的な演算順序（米国のPEMDAS、英国やアジアの多くで使われるBODMAS）では乗算が加算より優先されるからです。ところが一般的な電卓 — そしてこの計算機 — に入力すると20になります。どちらも故障ではなく、実行モデルが違うだけです。

単純な四則演算電卓は逐次実行方式です。演算子を押すたびに、保留中の演算が先に処理されます。2 + 3 × 4 と打つと、×を押した瞬間に 2 + 3 = 5 が計算され、続いて 5 × 4 = 20 になります。一方、関数電卓は数式（代数）方式で、式全体を保持して優先順位ルールを適用し、14を返します。経理用のカシオやシャープの電卓があえて逐次実行なのは、簿記の作業が左から右へ演算をつなぐからで、学生向けの関数電卓が数式方式なのは教科書どおりの答えが必要だからです。

この違いが、6 ÷ 2(1 + 2) のような式をめぐる周期的なネット論争の背景です。乗算記号を明示して左から計算すれば9ですが、括弧に隣接した暗黙の乗算を強く結合させる流儀の人や一部の古い電卓は1を返します。この式は書かれたままでは本当に曖昧で、専門的な表記ガイドは優先順位に頼らず括弧を追加するよう勧めています。

このツールの実用ルールは次のとおりです。左から右へ順に計算するので、実行したい順序で1つずつ演算を入力してください。2 + (3 × 4) なら、先に 3 × 4 を計算してから2を足します。`,
				zh: `把 2 + 3 × 4 交给数学老师，答案是14：按照标准运算顺序（美国的PEMDAS、英国及亚洲多数地区的BODMAS），乘法优先于加法。但把它输入一台普通桌面计算器——或本计算器——你会得到20。两者都没有坏，只是执行模型不同。

简单的四则计算器采用"即时执行"：每按一次运算符，就先结算挂起的运算。输入 2 + 3 × 4 时，按下 × 的瞬间先算出 2 + 3 = 5，接着 5 × 4 = 20。科学计算器则采用代数（公式）逻辑：保留整个表达式并应用优先级规则，返回14。卡西欧、夏普的会计用桌面计算器刻意采用即时执行，因为记账工作就是从左到右连续运算；而面向学生的科学计算器采用代数逻辑，因为需要与教科书一致的结果。

这种分裂正是 6 ÷ 2(1 + 2) 之类表达式周期性引发网络争论的根源。严格从左到右、把乘号写明会得到9；但不少人——以及一些老式计算器——认为紧贴括号的隐式乘法结合得更紧，于是得到1。这个式子按原样书写确实有歧义，专业写作规范的建议是加括号，而不是依赖优先级。

使用本工具的实用规则：它从左到右连续计算，请按你希望的执行顺序逐个输入运算。想算 2 + (3 × 4)，先按 3 × 4，再加2。`
			},
			code: {
				example: `Same keystrokes, two machines:

  2 + 3 x 4 =

  Immediate execution (desk calculators, this tool):
    press x  ->  2 + 3 = 5
    press =  ->  5 x 4 = 20

  Algebraic logic (scientific calculators):
    whole expression parsed -> 2 + (3 x 4) = 14

To get 14 here: key  3 x 4 =  (12), then  + 2 =  (14).`
			}
		},
		{
			heading: {
				en: '0.1 + 0.2 = 0.30000000000000004: Floating Point Explained',
				ko: '0.1 + 0.2 = 0.30000000000000004 — 부동소수점의 원리',
				ja: '0.1 + 0.2 = 0.30000000000000004 — 浮動小数点の仕組み',
				zh: '0.1 + 0.2 = 0.30000000000000004：浮点数原理'
			},
			body: {
				en: `Type 0.1 + 0.2 into almost any programming language and the answer is 0.30000000000000004. This is not a bug in JavaScript or in this calculator — it is a property of IEEE 754 double-precision floating point, the number format used by virtually every CPU made since the 1980s.

Computers store numbers in binary, and 0.1 has no exact binary representation, for the same reason 1/3 has no exact decimal one. In base 10, one tenth is a clean 0.1; in base 2 it is 0.0001100110011... repeating forever. A 64-bit double keeps 52 fractional bits, so the repetition is cut off and 0.1 is actually stored as 0.1000000000000000055511151231257827... Add two such approximations and the tiny errors can surface in the visible digits.

The consequences show up in real money handling. Summing 0.1 ten times gives 0.9999999999999999, not 1 — a naive equality check fails. Financial software therefore never stores currency as floating-point dollars: it works in integer cents (or uses decimal libraries), so 10 cents is exactly 10 with no rounding at all. Some languages expose this directly: banker's rounding (round-half-to-even), the IEEE default, rounds 2.5 to 2 rather than 3 to avoid systematic upward bias across millions of transactions.

For everyday use of this calculator, the practical advice is simple: expect the 16th decimal place to be noise, round displayed results to the precision you need, and when checking money by hand, count in the smallest unit — cents, 원, 円, 分 — rather than in decimal fractions.`,
				ko: `거의 모든 프로그래밍 언어에서 0.1 + 0.2를 계산하면 0.30000000000000004가 나옵니다. JavaScript나 이 계산기의 버그가 아니라, 1980년대 이후 만들어진 사실상 모든 CPU가 쓰는 숫자 형식인 IEEE 754 배정밀도 부동소수점의 속성입니다.

컴퓨터는 숫자를 이진법으로 저장하는데, 1/3을 십진법으로 정확히 쓸 수 없는 것과 같은 이유로 0.1은 정확한 이진 표현이 없습니다. 십진법에서 10분의 1은 깔끔한 0.1이지만, 이진법에서는 0.0001100110011...이 무한히 반복됩니다. 64비트 double은 소수부를 52비트만 저장하므로 반복이 잘려 나가고, 0.1은 실제로 0.1000000000000000055511151231257827...로 저장됩니다. 이런 근삿값 두 개를 더하면 미세한 오차가 보이는 자리까지 올라올 수 있습니다.

이 결과는 실제 돈 계산에서 드러납니다. 0.1을 열 번 더하면 1이 아니라 0.9999999999999999가 나와서 단순 동등 비교가 실패합니다. 그래서 금융 소프트웨어는 통화를 부동소수점 달러로 저장하지 않고 정수 센트 단위(또는 십진 라이브러리)로 계산합니다. 10센트는 반올림이 전혀 없는 정확한 10입니다. IEEE 기본값인 은행가 반올림(짝수 쪽 반올림)은 수백만 건의 거래에서 위쪽으로 쏠리는 편향을 막기 위해 2.5를 3이 아닌 2로 반올림합니다.

이 계산기를 일상적으로 쓸 때의 실용 조언은 간단합니다. 소수점 16번째 자리쯤은 노이즈로 여기고, 표시된 결과는 필요한 정밀도로 반올림하고, 돈을 손으로 검산할 때는 소수가 아니라 최소 단위 — 센트, 원, 엔, 펀(分) — 로 세세요.`,
				ja: `ほぼすべてのプログラミング言語で 0.1 + 0.2 を計算すると 0.30000000000000004 になります。これはJavaScriptやこの計算機のバグではなく、1980年代以降のほぼすべてのCPUが使う数値形式、IEEE 754倍精度浮動小数点の性質です。

コンピュータは数を2進法で保存しますが、1/3を10進法で正確に書けないのと同じ理由で、0.1には正確な2進表現がありません。10進法では10分の1はきれいな0.1ですが、2進法では 0.0001100110011... と無限に繰り返します。64ビットのdoubleは小数部を52ビットしか保持しないため繰り返しが打ち切られ、0.1は実際には 0.1000000000000000055511151231257827... として保存されます。こうした近似値を2つ足すと、微小な誤差が見える桁まで浮上することがあります。

この影響は実際のお金の計算に現れます。0.1を10回足すと1ではなく 0.9999999999999999 になり、単純な等値比較は失敗します。そのため金融ソフトウェアは通貨を浮動小数点のドルで保存せず、整数のセント単位（または10進ライブラリ）で計算します。10セントは丸めのない正確な10です。IEEEの既定である銀行家の丸め（偶数への丸め）は、何百万件もの取引で上方向に偏るのを防ぐため、2.5を3ではなく2に丸めます。

この計算機を日常的に使ううえでの実用的な助言はシンプルです。小数第16位あたりはノイズとみなし、表示結果は必要な精度に丸め、お金を手で検算するときは小数ではなく最小単位 — セント、ウォン、円、分 — で数えましょう。`,
				zh: `在几乎任何编程语言里输入 0.1 + 0.2，答案都是 0.30000000000000004。这不是JavaScript或本计算器的bug，而是IEEE 754双精度浮点数的固有性质——上世纪80年代以来几乎所有CPU都采用这种数字格式。

计算机用二进制存储数字，而0.1没有精确的二进制表示，就像1/3没有精确的十进制表示一样。十进制里十分之一是干净的0.1；二进制里它是 0.0001100110011... 无限循环。64位double只保留52位小数，循环被截断后，0.1实际存储为 0.1000000000000000055511151231257827...。两个这样的近似值相加，微小的误差就可能浮现到可见的位数上。

后果会体现在真实的金钱处理中。把0.1累加十次得到的是 0.9999999999999999 而不是1——朴素的相等判断会失败。因此金融软件从不用浮点"元"存储货币，而是用整数的分（或十进制小数库）计算：10分就是精确的10，完全没有舍入。IEEE默认的"银行家舍入"（四舍六入五取偶）会把2.5舍入为2而非3，以避免亿万笔交易累积出系统性向上偏差。

日常使用本计算器的实用建议很简单：把第16位小数当作噪声，把显示结果四舍五入到你需要的精度；手工核对金额时，请用最小单位——分、원、円——而不是小数来计数。`
			},
			code: {
				example: `0.1 + 0.2            = 0.30000000000000004   (not 0.3)
0.1 x 10 (by adding) = 0.9999999999999999    (not 1)
0.3 - 0.1            = 0.19999999999999998   (not 0.2)

Why: 0.1 in binary = 0.000110011001100... (repeats forever)
     a 64-bit float keeps only 52 fraction bits

Money-safe approach: work in the smallest unit
  $1.10 + $2.20  ->  110 + 220 = 330 cents  ->  $3.30 exactly`
			}
		},
		{
			heading: {
				en: 'The % Key Does Different Things on Different Calculators',
				ko: '% 키는 계산기마다 다르게 동작한다',
				ja: '％キーは電卓によって動作が違う',
				zh: '不同计算器的 % 键行为并不相同'
			},
			body: {
				en: `The percent key is the least standardized button in calculator history. On many desk calculators, 200 + 10 % yields 220, because the machine interprets it as "add 10 percent of 200". On others, and in this tool, % simply divides the current entry by 100, so 10 % becomes 0.1 and what you do with it is up to you. Knowing which convention a calculator follows prevents real billing mistakes.

Three worked patterns cover most daily needs. Discount: a 25% off jacket listed at 79,000 (in any currency) is 79000 × 0.75 = 59,250 — multiplying by what remains (0.75) is one keystroke shorter than computing the discount and subtracting. Tip: 15% on a 48.60 restaurant bill is 48.60 × 0.15 = 7.29, total 55.89. Tax-inclusive prices are the one that trips people up: Korea and Japan quote 10% VAT/consumption tax, and extracting the pre-tax amount from a tax-inclusive 22,000 requires dividing by 1.1 (= 20,000), not multiplying by 0.9 (= 19,800, wrong by 200). The error happens because 10% of the smaller pre-tax base is less than 10% of the gross.

Percentage-point confusion deserves a mention too: an interest rate rising from 2% to 3% has increased by one percentage point but by 50 percent. News headlines mix these constantly. When you need chained or reverse percentage work — what percent X is of Y, percentage change between two values — the dedicated percentage tool linked below handles those forms directly.`,
				ko: `퍼센트 키는 계산기 역사상 가장 표준화가 안 된 버튼입니다. 많은 탁상용 계산기에서 200 + 10 %는 220이 됩니다. 기계가 이를 "200의 10퍼센트를 더하라"로 해석하기 때문입니다. 다른 계산기, 그리고 이 도구에서 %는 현재 입력값을 100으로 나눌 뿐이라 10 %는 0.1이 되고, 그걸 어떻게 쓸지는 사용자의 몫입니다. 쓰는 계산기가 어느 관례를 따르는지 알아 두면 실제 청구 실수를 막을 수 있습니다.

세 가지 계산 패턴이면 일상 대부분을 처리할 수 있습니다. 할인: 79,000원짜리 재킷의 25% 할인가는 79000 × 0.75 = 59,250원입니다. 남는 비율(0.75)을 바로 곱하는 편이 할인액을 구해 빼는 것보다 한 단계 짧습니다. 팁: 48.60짜리 식사의 15%는 48.60 × 0.15 = 7.29, 합계 55.89입니다. 사람들이 가장 많이 틀리는 것은 세금 포함 가격입니다. 한국과 일본의 부가가치세/소비세는 10%인데, 부가세 포함 22,000원에서 공급가액을 구하려면 1.1로 나눠야(= 20,000원) 하지, 0.9를 곱하면(= 19,800원) 200원이 틀립니다. 공급가액이라는 더 작은 기준의 10%는 총액의 10%보다 작기 때문에 생기는 오류입니다.

퍼센트 포인트 혼동도 짚어 둘 만합니다. 금리가 2%에서 3%로 오르면 1퍼센트 포인트 상승이지만 증가율은 50퍼센트입니다. 뉴스 헤드라인은 이 둘을 수시로 섞어 씁니다. X가 Y의 몇 퍼센트인지, 두 값 사이의 변화율 같은 연쇄·역방향 퍼센트 계산이 필요하면 아래에 연결된 전용 퍼센트 계산기가 그런 형태를 바로 처리합니다.`,
				ja: `パーセントキーは電卓の歴史上、最も標準化されていないボタンです。多くの卓上電卓では 200 + 10 % は220になります。機械がこれを「200の10パーセントを足す」と解釈するからです。別の電卓、そしてこのツールでは、％は現在の入力値を100で割るだけなので、10 % は0.1になり、それをどう使うかは利用者次第です。使う電卓がどちらの流儀かを知っておくと、実際の請求ミスを防げます。

3つの計算パターンで日常のほとんどをカバーできます。割引：79,000円のジャケットの25％オフは 79000 × 0.75 = 59,250円。残る割合（0.75）を直接掛ける方が、割引額を求めて引くより一手短くなります。チップ：48.60の食事の15％は 48.60 × 0.15 = 7.29、合計55.89。人がつまずくのは税込価格です。日本と韓国の消費税/付加価値税は10％ですが、税込22,000円から税抜金額を求めるには1.1で割る（= 20,000円）必要があり、0.9を掛けると（= 19,800円）200円ずれます。税抜という小さい方の基準の10％は、総額の10％より小さいために起きる誤りです。

パーセントポイントの混同にも触れておきましょう。金利が2％から3％に上がったら、上昇は1パーセントポイントですが、増加率は50パーセントです。ニュースの見出しはこの2つを絶えず混ぜて使います。XはYの何％か、2つの値の間の変化率といった連鎖・逆方向のパーセント計算が必要なら、下にリンクした専用のパーセント計算機がそのまま処理してくれます。`,
				zh: `百分号键是计算器历史上最缺乏标准的按键。在许多桌面计算器上，200 + 10 % 得到220，因为机器把它理解为"加上200的10%"。在另一些计算器上——包括本工具——% 只是把当前输入除以100，10 % 变成0.1，怎么用由你决定。弄清手头计算器遵循哪种惯例，能避免真实的账单错误。

三个算例足以覆盖大部分日常需求。折扣：标价79,000的外套打75折（25% off）是 79000 × 0.75 = 59,250——直接乘以剩余比例(0.75)比先算折扣额再相减少按一步。小费：48.60的餐费给15%小费是 48.60 × 0.15 = 7.29，合计55.89。最容易栽跟头的是含税价：韩国和日本的增值税/消费税是10%，要从含税22,000中还原税前金额，必须除以1.1（= 20,000），而不是乘以0.9（= 19,800，差了200）。错误的根源在于：较小的税前基数的10%，少于总额的10%。

"百分点"的混淆也值得一提：利率从2%升到3%，是上升了1个百分点，却是增长了50%。新闻标题常年混用这两个概念。如果你需要连锁或反向的百分比运算——X占Y的百分之几、两个数值之间的变化率——下方链接的专用百分比工具可以直接处理这些形式。`
			},
			code: {
				example: `VAT trap (10% tax-inclusive price of 22,000):

  Correct:   22000 / 1.1  = 20000  pre-tax
             20000 x 0.1  =  2000  tax      (20000 + 2000 = 22000 ok)

  Wrong:     22000 x 0.9  = 19800  "pre-tax"
             19800 x 1.1  = 21780  (does not rebuild 22000!)

Discount vs tip on this calculator (% divides by 100):
  25% off 79000:   79000 x 0.75 = 59250
  15% tip on 48.6: 48.6  x 0.15 = 7.29`
			}
		},
		{
			heading: {
				en: 'Division by Zero, Chained Equals, and Keyboard Tips',
				ko: '0으로 나누기, 연속 계산, 키보드 활용법',
				ja: 'ゼロ除算・連続計算・キーボード活用術',
				zh: '除以零、连续运算与键盘技巧'
			},
			body: {
				en: `Division by zero is undefined in ordinary arithmetic — there is no number that, multiplied by 0, gives 8 — and calculators have handled the impossibility differently across the decades. Classic desk calculators lock up with an E or Error indicator that must be cleared; raw JavaScript evaluates 8 / 0 to the special value Infinity and 0 / 0 to NaN (not-a-number); spreadsheet software shows #DIV/0!. This calculator takes a fourth path and returns 0, a deliberate design choice that keeps the display and the history panel usable instead of wedging the machine. The mathematical truth is unchanged: treat any division-by-zero result as "check your input", not as an answer.

The history panel on the right stores your last ten completed operations in plain text, which is more useful than it looks: it serves as a paper-tape substitute for reconciling a column of figures, and because each entry shows both operands, you can spot a mistyped digit after the fact instead of re-running everything. All of it lives only in your browser's memory and disappears on reload — nothing is transmitted anywhere.

Keyboard support makes repeated work markedly faster than clicking: digits and the decimal point enter numbers, the four operator keys chain operations, Enter or = evaluates, Backspace deletes the last digit, and Escape clears everything. One habit worth adopting from professional ten-key operators: enter long sums in a steady rhythm without watching the display, then verify the total once at the end against the history — it is faster and catches more errors than checking every intermediate result.`,
				ko: `0으로 나누기는 일반 산술에서 정의되지 않습니다. 0에 곱해서 8이 되는 수는 존재하지 않기 때문입니다. 계산기들은 이 불가능을 수십 년에 걸쳐 저마다 다르게 처리해 왔습니다. 고전 탁상용 계산기는 E나 Error 표시를 띄우고 지우기 전까지 잠기고, 순수 JavaScript는 8 / 0을 특수값 Infinity로, 0 / 0을 NaN(숫자 아님)으로 평가하며, 스프레드시트는 #DIV/0!을 보여 줍니다. 이 계산기는 네 번째 길을 택해 0을 반환합니다. 기계를 멈추는 대신 화면과 히스토리 패널을 계속 쓸 수 있게 하려는 의도적인 설계입니다. 수학적 진실은 변하지 않습니다. 0으로 나눈 결과는 답이 아니라 "입력을 확인하라"는 신호로 받아들이세요.

오른쪽 히스토리 패널은 최근 완료된 계산 10개를 평문으로 보관하는데, 보기보다 유용합니다. 숫자 열을 대조할 때 감열지 영수증 테이프의 대용이 되고, 각 항목에 두 피연산자가 모두 표시되므로 전체를 다시 계산하지 않고도 잘못 누른 숫자를 나중에 찾아낼 수 있습니다. 모든 기록은 브라우저 메모리에만 존재하고 새로고침하면 사라지며, 어디로도 전송되지 않습니다.

키보드를 쓰면 반복 작업이 클릭보다 눈에 띄게 빨라집니다. 숫자와 소수점 키로 입력하고, 사칙연산 키로 계산을 잇고, Enter나 =로 평가하고, Backspace로 마지막 자리를 지우고, Esc로 전체를 초기화합니다. 전문 텐키 타이피스트에게서 배울 만한 습관 하나: 긴 합산은 화면을 보지 않고 일정한 리듬으로 입력한 뒤, 마지막에 히스토리와 대조해 총액을 한 번만 검증하세요. 중간 결과를 일일이 확인하는 것보다 빠르고 오류도 더 잘 잡습니다.`,
				ja: `ゼロ除算は通常の算術では定義されていません。0に掛けて8になる数は存在しないからです。電卓はこの不可能を何十年にもわたってそれぞれ違う方法で処理してきました。古典的な卓上電卓はEやErrorを表示してクリアするまでロックされ、素のJavaScriptは 8 / 0 を特殊値Infinityに、0 / 0 をNaN（非数）に評価し、表計算ソフトは #DIV/0! を表示します。この計算機は第4の道を選び、0を返します。機械を止める代わりに画面と履歴パネルを使い続けられるようにする意図的な設計です。数学的な真実は変わりません。ゼロ除算の結果は答えではなく「入力を確認せよ」というサインとして扱ってください。

右側の履歴パネルは直近10件の計算を平文で保存しており、見た目以上に役立ちます。数字の列を照合するときのレシートテープ代わりになり、各項目に両方のオペランドが表示されるため、すべてを計算し直さなくても打ち間違いを後から見つけられます。記録はすべてブラウザのメモリ内だけに存在し、再読み込みで消え、どこにも送信されません。

キーボードを使えば、繰り返し作業はクリックより格段に速くなります。数字と小数点キーで入力、四則演算キーで計算をつなぎ、Enterか＝で評価、Backspaceで最後の桁を削除、Escで全消去です。プロのテンキー入力者から学べる習慣を一つ：長い合計は画面を見ずに一定のリズムで入力し、最後に履歴と照らして総額を一度だけ検証しましょう。途中結果を逐一確認するより速く、誤りもよく見つかります。`,
				zh: `在普通算术中，除以零没有定义——不存在乘以0能得到8的数——几十年来各种计算器对这一"不可能"的处理方式各不相同。经典桌面计算器会显示E或Error并锁定，直到清除为止；原生JavaScript把 8 / 0 计算为特殊值Infinity，把 0 / 0 计算为NaN（非数）；电子表格软件显示 #DIV/0!。本计算器选择了第四条路：返回0。这是有意的设计，让显示屏和历史面板保持可用，而不是卡死。但数学事实没有改变：任何除以零的结果都应当理解为"请检查输入"，而不是答案。

右侧的历史面板以纯文本保存最近十条完成的运算，比看上去有用得多：核对一列数字时它可以充当纸带打印机的替代品；由于每条记录都显示两个操作数，你可以事后发现敲错的数字，而不必全部重算。这一切只存在于浏览器内存中，刷新即消失——不会向任何地方传输。

键盘操作能让重复计算明显快于点击：数字键和小数点输入数字，四个运算符键连续运算，Enter或=求值，Backspace删除最后一位，Esc全部清空。还有一个值得借鉴的专业数字键盘操作员习惯：录入长串加法时保持稳定节奏、不盯着屏幕，最后对照历史记录一次性核对总数——这比逐项检查中间结果更快，也更容易发现错误。`
			}
		}
	];

	const toolContent = {
		about: {
			en: 'A simple online calculator that handles the four basic arithmetic operations — addition, subtraction, multiplication, and division — plus percentage and sign toggle. Calculations are done locally in your browser, so no data is sent to a server. A history panel keeps the last ten results so you can revisit recent computations.',
			ko: '온라인 사칙연산 계산기입니다. 더하기, 빼기, 곱하기, 나누기와 함께 퍼센트, 부호 변환 기능을 지원합니다. 모든 계산은 브라우저 안에서 처리되므로 데이터가 서버로 전송되지 않습니다. 최근 10개의 계산 기록을 우측 패널에서 확인할 수 있습니다.',
			ja: 'シンプルなオンライン四則演算計算機です。加減乗除に加え、パーセントや符号反転にも対応します。計算はすべてブラウザ内で行われ、サーバーに送信されません。直近10件の履歴を右側パネルで確認できます。',
			zh: '简洁的在线计算器，支持加减乘除四则运算以及百分比和正负号切换。所有计算均在浏览器本地完成，数据不会上传服务器。右侧面板保留最近 10 条计算记录，方便回顾。'
		},
		howTo: {
			en: [
				'Click number buttons or type with your keyboard.',
				'Choose an operator (+, −, ×, ÷) to chain operations.',
				'Press = or Enter to see the result.',
				'Use C to clear everything, CE to clear only the current entry.',
				'Check the right-side panel for your recent calculation history.'
			],
			ko: [
				'화면의 숫자 버튼이나 키보드 숫자 키를 눌러 입력합니다.',
				'+, −, ×, ÷ 중 원하는 연산자를 선택합니다.',
				'= 키 또는 Enter 키를 눌러 결과를 확인합니다.',
				'C로 전체 초기화, CE로 현재 입력값만 지웁니다.',
				'오른쪽 히스토리 패널에서 최근 계산 기록을 확인할 수 있습니다.'
			],
			ja: [
				'画面の数字ボタンまたはキーボードで入力します。',
				'演算子（+、−、×、÷）を選びます。',
				'＝キーまたはEnterで結果を表示します。',
				'Cで全消去、CEで現在の入力のみ消去します。',
				'右側の履歴パネルで直近の計算を確認できます。'
			],
			zh: [
				'点击数字按钮或使用键盘输入数字。',
				'选择运算符（+、−、×、÷）进行连续运算。',
				'按 = 或回车键查看结果。',
				'C 键清空全部，CE 仅清除当前输入。',
				'右侧面板可查看最近计算记录。'
			]
		},
		useCases: {
			en: [
				'Quick everyday math like splitting a bill or calculating change.',
				'Verifying spreadsheet formulas with a manual cross-check.',
				'Helping kids learn arithmetic with an on-screen calculator.',
				'Calculating discount percentages while shopping online.',
				'Doing quick conversions and basic engineering checks.'
			],
			ko: [
				'식당 더치페이 등 일상의 간단한 계산.',
				'스프레드시트 결과를 손으로 검증.',
				'어린이의 사칙연산 학습 보조.',
				'온라인 쇼핑 중 할인율 계산.',
				'간단한 단위 환산 및 엔지니어링 검토.'
			],
			ja: [
				'割り勘などの日常計算。',
				'スプレッドシートの結果を手計算で検証。',
				'子供の算数学習サポート。',
				'オンラインショッピングでの割引計算。',
				'簡単な単位換算や設計チェック。'
			],
			zh: [
				'日常算账，如餐费 AA 制。',
				'手动核对电子表格公式结果。',
				'帮助孩子学习算术。',
				'购物时计算折扣。',
				'快速换算和工程估算。'
			]
		},
		faq: {
			en: [
				{ q: 'Are calculations sent to your servers?', a: 'No. Everything runs in your browser using JavaScript. Nothing leaves your device.' },
				{ q: 'Why does dividing by zero show 0?', a: 'Division by zero is mathematically undefined. The calculator returns 0 to avoid breaking the display.' },
				{ q: 'Can I use my keyboard?', a: 'Yes. Number keys, operators, Enter (=), Escape (clear), and Backspace are all supported.' },
				{ q: 'Why are some long decimals slightly off?', a: 'JavaScript uses IEEE-754 floating point, so values like 0.1 + 0.2 may show tiny rounding artifacts.' }
			],
			ko: [
				{ q: '계산 결과가 서버로 전송되나요?', a: '아닙니다. 모든 계산은 브라우저에서 JavaScript로 처리되며 외부로 전송되지 않습니다.' },
				{ q: '0으로 나누면 왜 0이 나오나요?', a: '수학적으로 정의되지 않기 때문에 화면이 깨지지 않도록 0으로 처리합니다.' },
				{ q: '키보드로도 입력할 수 있나요?', a: '네, 숫자 키, 연산자, Enter(=), Esc(초기화), Backspace를 모두 지원합니다.' },
				{ q: '소수점 계산이 미세하게 어긋나는 이유는?', a: 'JavaScript의 IEEE-754 부동소수점 특성상 0.1 + 0.2 같은 계산에서 미세한 반올림 오차가 발생할 수 있습니다.' }
			]
		},
		related: [
			{ href: '/percentage', label: { en: 'Percentage', ko: '퍼센트 계산기', ja: 'パーセント計算', zh: '百分比' } },
			{ href: '/loan-calculator', label: { en: 'Loan Calculator', ko: '대출 계산기', ja: 'ローン計算機', zh: '贷款计算器' } },
			{ href: '/compound-interest', label: { en: 'Compound Interest', ko: '복리 계산기', ja: '複利計算機', zh: '复利计算器' } }
		],
		externalRefs: [
			{ href: 'https://en.wikipedia.org/wiki/Calculator', label: 'Calculator - Wikipedia' },
			{ href: 'https://en.wikipedia.org/wiki/Order_of_operations', label: 'Order of operations - Wikipedia' }
		]
	};

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let display = '0';
	let previousValue = '';
	let operation = '';
	let waitingForOperand = false;
	let history: string[] = [];

	function inputDigit(digit: string) {
		if (waitingForOperand) {
			display = digit;
			waitingForOperand = false;
		} else {
			display = display === '0' ? digit : display + digit;
		}
	}

	function inputDecimal() {
		if (waitingForOperand) {
			display = '0.';
			waitingForOperand = false;
			return;
		}
		if (!display.includes('.')) {
			display = display + '.';
		}
	}

	function clearDisplay() {
		display = '0';
		previousValue = '';
		operation = '';
		waitingForOperand = false;
	}

	function clearEntry() {
		display = '0';
	}

	function toggleSign() {
		display = String(-parseFloat(display));
	}

	function inputPercent() {
		display = String(parseFloat(display) / 100);
	}

	function performOperation(nextOperation: string) {
		const inputValue = parseFloat(display);

		if (previousValue === '') {
			previousValue = display;
		} else if (operation) {
			const currentValue = parseFloat(previousValue);
			let result = 0;

			switch (operation) {
				case '+':
					result = currentValue + inputValue;
					break;
				case '-':
					result = currentValue - inputValue;
					break;
				case '*':
					result = currentValue * inputValue;
					break;
				case '/':
					result = inputValue !== 0 ? currentValue / inputValue : 0;
					break;
			}

			const historyEntry = `${previousValue} ${operation} ${display} = ${result}`;
			history = [historyEntry, ...history].slice(0, 10);

			display = String(result);
			previousValue = display;
		}

		waitingForOperand = true;
		operation = nextOperation;
	}

	function calculate() {
		if (!operation || previousValue === '') return;

		const inputValue = parseFloat(display);
		const currentValue = parseFloat(previousValue);
		let result = 0;

		switch (operation) {
			case '+':
				result = currentValue + inputValue;
				break;
			case '-':
				result = currentValue - inputValue;
				break;
			case '*':
				result = currentValue * inputValue;
				break;
			case '/':
				result = inputValue !== 0 ? currentValue / inputValue : 0;
				break;
		}

		const historyEntry = `${previousValue} ${operation} ${display} = ${result}`;
		history = [historyEntry, ...history].slice(0, 10);

		display = String(result);
		previousValue = '';
		operation = '';
		waitingForOperand = true;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key >= '0' && e.key <= '9') {
			inputDigit(e.key);
		} else if (e.key === '.') {
			inputDecimal();
		} else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
			performOperation(e.key);
		} else if (e.key === 'Enter' || e.key === '=') {
			calculate();
		} else if (e.key === 'Escape') {
			clearDisplay();
		} else if (e.key === 'Backspace') {
			display = display.length > 1 ? display.slice(0, -1) : '0';
		}
	}

	const buttons = [
		['C', 'CE', '%', '/'],
		['7', '8', '9', '*'],
		['4', '5', '6', '-'],
		['1', '2', '3', '+'],
		['+/-', '0', '.', '=']
	];

	function handleButton(btn: string) {
		switch (btn) {
			case 'C':
				clearDisplay();
				break;
			case 'CE':
				clearEntry();
				break;
			case '%':
				inputPercent();
				break;
			case '+/-':
				toggleSign();
				break;
			case '.':
				inputDecimal();
				break;
			case '=':
				calculate();
				break;
			case '+':
			case '-':
			case '*':
			case '/':
				performOperation(btn);
				break;
			default:
				inputDigit(btn);
		}
	}

	function getButtonClass(btn: string): string {
		if (btn === '=') return 'bg-violet-500 hover:bg-violet-600 text-white';
		if (['+', '-', '*', '/'].includes(btn)) return 'bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 hover:bg-violet-200 dark:hover:bg-violet-900/50';
		if (['C', 'CE', '%', '+/-'].includes(btn)) return 'bg-gray-200 dark:bg-dark-600 text-gray-700 dark:text-dark-200 hover:bg-gray-300 dark:hover:bg-dark-500';
		return 'bg-white dark:bg-dark-700 text-gray-900 dark:text-dark-100 hover:bg-gray-100 dark:hover:bg-dark-600';
	}
</script>

<svelte:head>
	<title>{t('calculator.title')} - SD.gy</title>
	<meta name="description" content={t('calculator.desc')} />
	<link rel="canonical" href="https://sd.gy/{lang}/calculator" />
	<meta property="og:title" content="{t('calculator.title')} - SD.gy" />
	<meta property="og:description" content={t('calculator.desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/calculator" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('calculator.title')} - SD.gy" />
	<meta name="twitter:description" content={t('calculator.desc')} />
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('calculator.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('calculator.desc')}</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<!-- Calculator -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<!-- Display -->
			<div class="bg-gray-100 dark:bg-dark-900 rounded-xl p-4 mb-4">
				<div class="text-right text-sm text-gray-500 dark:text-dark-400 h-5">
					{previousValue} {operation}
				</div>
				<div class="text-right text-4xl font-mono font-bold text-gray-900 dark:text-dark-100 overflow-x-auto">
					{display}
				</div>
			</div>

			<!-- Buttons -->
			<div class="grid grid-cols-4 gap-2">
				{#each buttons as row}
					{#each row as btn}
						<button
							on:click={() => handleButton(btn)}
							class="h-14 text-xl font-semibold rounded-xl transition-colors {getButtonClass(btn)} border border-gray-200 dark:border-dark-600"
						>
							{btn}
						</button>
					{/each}
				{/each}
			</div>
		</div>

		<!-- History -->
		<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
			<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">{t('calculator.history')}</h2>
			{#if history.length === 0}
				<p class="text-gray-500 dark:text-dark-400 text-center py-8">{t('calculator.noHistory')}</p>
			{:else}
				<div class="space-y-2 max-h-80 overflow-y-auto">
					{#each history as entry}
						<div class="bg-gray-50 dark:bg-dark-700 rounded-lg p-3 font-mono text-sm text-gray-700 dark:text-dark-300">
							{entry}
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>

	<ToolContent
		{lang}
		toolName="Calculator"
		toolUrl="https://sd.gy/{lang}/calculator"
		lastUpdated="2026-04-30"
		category="Daily Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sd.gy/${lang}` },
			{ name: 'Tools', url: `https://sd.gy/${lang}` },
			{ name: 'Calculator', url: `https://sd.gy/${lang}/calculator` }
		]}
		content={toolContent}
	/>

	<ToolGuide {lang} sections={guideSections} />
</div>
