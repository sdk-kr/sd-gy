<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'From Amida Buddha to Office Lunch: A Short History of the Ladder Game',
				ko: '아미타불에서 점심 내기까지 — 사다리타기의 짧은 역사',
				ja: '阿弥陀様からランチの奢りまで — あみだくじ小史',
				zh: '从阿弥陀佛到办公室午餐：梯子游戏简史'
			},
			body: {
				en: `The ladder game most Koreans know as 사다리타기 goes by many names: amidakuji (阿弥陀籤) in Japan, ghost leg or 畫鬼腳 in China and Taiwan, and "ladder lottery" in mathematics papers. The Japanese name is the oldest documented one and carries a surprising origin. In the Muromachi period (14th–16th centuries), lots were drawn not with parallel lines but with lines radiating from a center, like the halo drawn behind Amida Buddha in Buddhist iconography — participants paid different hidden amounts written at the center, and the radial "kuji" (lottery) decided who paid what. The halo shape gave the game its name centuries before it straightened into today's ladder of vertical rails and horizontal rungs.

The modern form spread through East Asian schoolyards and offices in the 20th century precisely because it needs nothing but a scrap of paper: draw one vertical line per person, add horizontal rungs at random while the outcomes are hidden, fold the bottom over, and let everyone trace their path. It is a randomizer, a small ritual, and a piece of theater at once — the slow trace down the ladder builds suspense in a way a die roll cannot.

Interestingly, the game barely exists in Western tradition, where drawing straws or flipping coins fills the same niche. That makes amidakuji one of the clearest examples of a "cultural algorithm": a mathematically nontrivial procedure — as the next section shows, it secretly performs permutation composition — preserved and transmitted purely as folk custom.`,
				ko: `한국인에게 사다리타기로 통하는 이 놀이는 이름이 많습니다. 일본에서는 아미다쿠지(阿弥陀籤), 중국과 대만에서는 화귀각(畫鬼腳, ghost leg), 수학 논문에서는 ladder lottery입니다. 가장 오래 기록된 이름은 일본 것이고, 그 유래가 뜻밖입니다. 무로마치 시대(14~16세기)의 제비뽑기는 지금처럼 평행선이 아니라 중심에서 사방으로 뻗는 방사선으로 그렸는데, 그 모양이 불교 미술에서 아미타불 뒤에 그리는 후광과 닮아 있었습니다. 참가자들은 중심에 숨겨 적힌 서로 다른 금액을 부담했고, 방사형 "쿠지"(제비)가 누가 얼마를 낼지 정했습니다. 후광 모양이 게임에 이름을 남긴 뒤 수백 년이 지나서야 오늘날의 세로 기둥과 가로 발판으로 곧게 펴졌습니다.

현대의 형태는 20세기에 동아시아의 교실과 사무실로 퍼졌는데, 종이 한 조각만 있으면 된다는 점이 결정적이었습니다. 사람 수만큼 세로줄을 긋고, 결과를 가린 채 가로줄을 아무렇게나 추가하고, 아래를 접어 두었다가 각자 자기 길을 따라 내려가게 하면 끝입니다. 이것은 추첨 도구이자 작은 의식이며 동시에 한 편의 연극입니다. 사다리를 천천히 따라 내려가는 과정은 주사위 굴리기가 줄 수 없는 긴장감을 만들어 냅니다.

흥미롭게도 이 놀이는 서양 전통에는 거의 존재하지 않습니다. 같은 자리를 지푸라기 뽑기나 동전 던지기가 채우고 있죠. 그래서 아미다쿠지는 "문화적 알고리즘"의 가장 선명한 사례 중 하나입니다. 다음 절에서 보듯 순열 합성이라는 수학적으로 만만치 않은 절차가, 순전히 민간 풍습으로 보존되고 전승된 것입니다.`,
				ja: `韓国で사다리타기として知られるこの遊びには多くの名前があります。日本ではあみだくじ（阿弥陀籤）、中国や台湾では画鬼脚（ghost leg）、数学の論文ではladder lotteryです。最も古く記録された名前は日本のもので、その由来は意外です。室町時代（14〜16世紀）のくじは、今のような平行線ではなく中心から放射状に線を引くもので、その形が仏教美術で阿弥陀如来の背後に描かれる後光に似ていました。参加者は中心に隠して書かれた異なる金額を負担し、放射状の「くじ」が誰がいくら払うかを決めたのです。後光の形が名前を残してから数百年を経て、今日の縦線と横線の梯子形にまっすぐ整えられました。

現代の形が20世紀に東アジアの教室やオフィスに広まった決め手は、紙切れ一枚あれば足りることでした。人数分の縦線を引き、結果を隠したまま横線を適当に加え、下を折っておいて、各自に自分の道をたどらせれば終わりです。これは抽選装置であり、小さな儀式であり、同時に一幕の演劇でもあります。梯子をゆっくりたどり降りる過程は、サイコロには出せない緊張感を生み出します。

興味深いことに、この遊びは西洋の伝統にはほとんど存在しません。同じ役割はストロー引きやコイン投げが担っています。だからこそあみだくじは「文化的アルゴリズム」の最も鮮やかな例の一つなのです。次節で見るように、順列の合成という数学的に軽くない手続きが、純粋に民間の風習として保存され、伝承されてきました。`,
				zh: `这个韩国人称为사다리타기的游戏有许多名字：日本叫阿弥陀签（あみだくじ），中国大陆和台湾叫画鬼脚，数学论文里叫ladder lottery（梯子抽签）。有据可查的最古老名称来自日本，其起源出人意料。在室町时代（14—16世纪），抽签画的不是平行线，而是从中心向四周辐射的线条，形状酷似佛教绘画中阿弥陀佛身后的光环——参与者分摊写在中心、被遮住的不同金额，由这张辐射状的"签"决定谁出多少钱。光环的形状为游戏留下了名字，又过了几百年才拉直成今天的竖轨加横杠的梯子。

现代形态在20世纪传遍东亚的教室和办公室，关键就在于它只需要一张纸片：每人画一条竖线，在遮住结果的情况下随手添几条横线，把底部折起来，然后让每个人顺着自己的路径往下走。它既是随机装置，又是小小的仪式，还是一出戏——沿着梯子慢慢下行的过程制造出掷骰子给不了的悬念。

有趣的是，这个游戏在西方传统中几乎不存在，同样的位置被抽签棒和抛硬币占据着。这使阿弥陀签成为"文化算法"最鲜明的例子之一：一个数学上并不平凡的过程——下一节会讲到，它悄悄执行着置换的复合运算——竟纯粹作为民间习俗被保存并流传了下来。`
			}
		},
		{
			heading: {
				en: 'Why Nobody Ever Shares a Prize: The Bijection Hidden in the Ladder',
				ko: '왜 결과가 절대 겹치지 않을까 — 사다리에 숨은 일대일 대응',
				ja: 'なぜ結果は絶対に重ならないのか — 梯子に隠れた全単射',
				zh: '为什么结果永远不会撞车：梯子里隐藏的双射'
			},
			body: {
				en: `Play the ladder game a thousand times and you will never see two players land on the same outcome, no matter how carelessly the rungs were drawn. This is not luck — it is a theorem, and the proof fits in a paragraph.

Consider what one horizontal rung does. A path arriving at either of the two rails it connects crosses to the other rail; paths on all other rails pass straight through. In the language of permutations, one rung is a transposition of two adjacent elements — it swaps exactly two positions and touches nothing else. A swap is trivially reversible and one-to-one. A full ladder is just a stack of these swaps applied top to bottom, and a composition of one-to-one maps is itself one-to-one. Therefore any ladder, with any number of rungs in any arrangement, defines a bijection: every player reaches exactly one outcome and every outcome is reached by exactly one player. Collisions are structurally impossible, which is precisely why the game works with the results hidden.

There is an elegant converse, too: every possible assignment of n players to n outcomes — all n! permutations — can be built from adjacent swaps, so a sufficiently rich ladder can realize any of them. (This is the same fact that makes bubble sort correct, since bubble sort only ever swaps neighbors.) The minimum number of rungs needed to realize a given permutation equals its inversion count — the number of pairs that finish in reversed order — with a maximum of n(n−1)/2 for a full reversal. A trace is deterministic chaos: fixed rungs give a fixed answer; the randomness enters only through what you cannot see.`,
				ko: `사다리타기를 천 번 해도 두 사람이 같은 결과에 도착하는 일은 절대 없습니다. 가로줄을 아무리 되는대로 그렸어도 말이죠. 이것은 운이 아니라 정리(theorem)이고, 증명은 한 문단이면 충분합니다.

가로줄 하나가 하는 일을 생각해 봅시다. 그 줄이 잇는 두 기둥 중 한쪽으로 내려온 경로는 반대쪽 기둥으로 건너가고, 나머지 기둥의 경로들은 그대로 통과합니다. 순열의 언어로 말하면 가로줄 하나는 인접한 두 원소의 자리바꿈(transposition)입니다. 정확히 두 위치만 맞바꾸고 나머지는 건드리지 않죠. 맞바꿈은 자명하게 가역적이고 일대일입니다. 사다리 전체는 이런 맞바꿈들을 위에서 아래로 쌓아 차례로 적용한 것일 뿐이고, 일대일 함수들의 합성은 그 자체로 일대일입니다. 따라서 가로줄이 몇 개든 어떻게 배치되었든, 모든 사다리는 일대일 대응(bijection)을 정의합니다. 모든 참가자는 정확히 하나의 결과에 도착하고, 모든 결과는 정확히 한 참가자에게 도달합니다. 충돌은 구조적으로 불가능하며, 바로 그래서 결과를 가려 놓고도 이 게임이 성립하는 것입니다.

우아한 역방향 사실도 있습니다. n명의 참가자를 n개의 결과에 배정하는 모든 경우 — n!가지 순열 전부 — 는 인접 맞바꿈만으로 만들 수 있으므로, 가로줄이 충분히 많은 사다리는 그중 어떤 것이든 구현할 수 있습니다. (이는 이웃끼리만 맞바꾸는 버블 정렬이 올바르게 동작하는 것과 같은 원리입니다.) 주어진 순열을 구현하는 데 필요한 최소 가로줄 수는 그 순열의 반전 수 — 순서가 뒤집혀 끝나는 쌍의 개수 — 와 같고, 완전히 뒤집는 경우 최대 n(n−1)/2개입니다. 경로 추적은 결정론적입니다. 가로줄이 정해지면 답도 정해지며, 무작위성은 오직 보이지 않는 부분에서만 들어옵니다.`,
				ja: `あみだくじを千回やっても、2人が同じ結果にたどり着くことは絶対にありません。横線をどれほど適当に引いてもです。これは運ではなく定理であり、証明は一段落で足ります。

横線1本が何をするか考えてみましょう。その線が結ぶ2本の縦線のどちらかに到達した経路は反対側へ渡り、他の縦線上の経路はそのまま通過します。順列の言葉で言えば、横線1本は隣接する2要素の互換（transposition）です。ちょうど2つの位置だけを入れ替え、他には触れません。入れ替えは自明に可逆で一対一です。梯子全体はこうした入れ替えを上から下へ積み重ねて順に適用したものにすぎず、一対一写像の合成はそれ自体が一対一です。したがって、横線が何本でもどんな配置でも、あらゆる梯子は全単射（bijection）を定義します。すべての参加者はちょうど1つの結果に到達し、すべての結果はちょうど1人の参加者に到達されます。衝突は構造的に不可能であり、だからこそ結果を隠したままでもこのゲームが成立するのです。

エレガントな逆向きの事実もあります。n人の参加者をn個の結果に割り当てるすべての場合 — n!通りの順列すべて — は隣接互換だけで構成できるので、横線が十分に多い梯子はそのどれでも実現できます。（これは隣同士しか交換しないバブルソートが正しく動くのと同じ事実です。）与えられた順列の実現に必要な最小の横線数はその順列の転倒数 — 順序が逆転して終わるペアの数 — に等しく、完全な逆順なら最大 n(n−1)/2 本です。経路のトレースは決定論的です。横線が決まれば答えも決まり、ランダム性は見えない部分からだけ入り込みます。`,
				zh: `就算玩一千次梯子游戏，也绝不会看到两个人落在同一个结果上——无论横杠画得多么随意。这不是运气，而是一条定理，证明只需一段话。

想想一条横杠做了什么：沿它连接的两条竖轨之一走下来的路径会横跨到另一条竖轨，其余竖轨上的路径原样通过。用置换的语言说，一条横杠就是相邻两个元素的对换（transposition）——恰好交换两个位置，其余一概不动。对换显然可逆且一一对应。整架梯子不过是把这些对换自上而下依次叠加，而一一映射的复合仍是一一映射。因此，无论横杠有多少条、怎样排布，任何梯子都定义了一个双射：每个玩家恰好到达一个结果，每个结果恰好被一个玩家到达。撞车在结构上就不可能发生——这正是结果可以遮起来玩的原因。

还有一个漂亮的反向结论：把n个玩家分配到n个结果的所有方案——全部n!种置换——都能由相邻对换构造出来，所以横杠足够多的梯子可以实现其中任何一种。（这与只交换相邻元素的冒泡排序之所以正确是同一个事实。）实现给定置换所需的最少横杠数等于它的逆序数——最终顺序颠倒的元素对的个数——完全倒序时最多为 n(n−1)/2。沿梯子下行是确定性的：横杠固定，答案就固定；随机性只从你看不见的地方进入。`
			},
			code: {
				example: `4 rails (A B C D), 3 rungs, traced top to bottom:

  A   B   C   D
  |---|   |   |     rung 1 swaps A,B   -> B A C D
  |   |---|   |     rung 2 swaps A,C   -> B C A D
  |   |   |---|     rung 3 swaps A,D   -> B C D A
  1   2   3   4

  A->4  B->1  C->2  D->3   (a bijection: no outcome repeats)

Each rung = one adjacent swap (transposition).
Any of the n! assignments is reachable with enough rungs;
minimum rungs for a permutation = its inversion count
(full reversal of n rails needs n(n-1)/2 rungs).`
			}
		},
		{
			heading: {
				en: 'Is a Hand-Drawn Ladder Actually Fair? Rung Count and Probability Bias',
				ko: '손으로 그린 사다리는 정말 공정할까 — 가로줄 개수와 확률 편향',
				ja: '手描きのあみだくじは本当に公平か — 横線の本数と確率の偏り',
				zh: '手画的梯子真的公平吗？横杠数量与概率偏差'
			},
			body: {
				en: `Here is the uncomfortable truth about paper ladders: a bijection is not the same thing as a fair lottery. The ladder guarantees everyone gets a different outcome, but it says nothing about all outcomes being equally likely — and with few rungs, they are not even close.

The extreme case makes it obvious. Zero rungs means player 1 gets outcome 1 with certainty. Add one rung and only two players' fates change. In general, a player's path can migrate at most one rail per rung it meets, so reaching an outcome k rails away requires at least k well-placed rungs. Simulations and analysis of ladder lotteries show that with a typical hand-drawn ladder (roughly 1.5 to 2 rungs per rail), each player's distribution stays strongly peaked near their own starting column — you are far more likely to land directly below where you started than at the far end. Studies of randomly-placed-rung ladders find the probability matrix approaches uniform only slowly as rungs grow; getting close to truly equal odds takes on the order of n² or more rungs for n players, far beyond what anyone draws by hand.

Paper players exploit this, consciously or not: picking the column directly above a desirable visible outcome is a real edge on a sparse ladder. The countermeasures are the folk fixes everyone half-knows — hide the outcomes before columns are chosen, let each participant add extra rungs after choosing, or shuffle which outcome label goes where. This digital version cuts the knot differently: it does not simulate rungs at all, but directly shuffles the outcome list with Math.random(), giving every player a genuine 1/n chance at every outcome — the distribution a hand ladder only approximates.`,
				ko: `종이 사다리에 관한 불편한 진실이 있습니다. 일대일 대응과 공정한 추첨은 같은 말이 아닙니다. 사다리는 모두가 서로 다른 결과를 받는 것은 보장하지만, 모든 결과가 똑같이 나올 확률까지 보장하지는 않습니다. 가로줄이 적으면 비슷하지도 않습니다.

극단적인 경우를 보면 명백해집니다. 가로줄이 0개면 1번 참가자는 확실하게 1번 결과를 받습니다. 가로줄을 하나 더하면 두 사람의 운명만 바뀝니다. 일반적으로 경로는 가로줄을 하나 만날 때마다 최대 한 칸씩만 옆으로 이동할 수 있으므로, k칸 떨어진 결과에 도달하려면 적절한 위치의 가로줄이 최소 k개 필요합니다. 사다리 추첨에 대한 시뮬레이션과 분석에 따르면, 손으로 그린 전형적인 사다리(기둥당 대략 1.5~2개의 가로줄)에서는 각자의 확률 분포가 자기 시작 열 근처에 강하게 몰려 있습니다. 반대편 끝보다 자기가 출발한 자리 바로 아래에 도착할 가능성이 훨씬 높습니다. 가로줄을 무작위로 배치한 사다리 연구에서도 확률 행렬은 가로줄이 늘어나야 서서히 균등에 다가가며, 참가자 n명에서 진짜 균등에 가까워지려면 n² 규모 이상의 가로줄이 필요합니다. 손으로 그릴 수 있는 수준을 한참 넘어서죠.

종이로 할 때는 의식했든 아니든 이를 악용할 수 있습니다. 눈에 보이는 좋은 결과 바로 위의 열을 고르는 것은 가로줄이 성긴 사다리에서 실제로 유리합니다. 대응책은 누구나 어렴풋이 아는 민간 처방들입니다. 열을 고르기 전에 결과를 가리고, 각자 고른 뒤 가로줄을 더 긋게 하고, 결과 라벨의 위치를 섞는 것이죠. 이 디지털 버전은 매듭을 다르게 자릅니다. 가로줄을 시뮬레이션하는 대신 Math.random()으로 결과 목록 자체를 직접 섞어, 모든 참가자에게 모든 결과에 대한 진짜 1/n 확률을 줍니다. 손 사다리는 이 분포에 근사할 수 있을 뿐입니다.`,
				ja: `紙のあみだくじには不都合な真実があります。全単射と公平な抽選は同じものではありません。梯子は全員が違う結果を受け取ることは保証しますが、すべての結果が等確率で出ることまでは保証しません。横線が少なければ、近くさえありません。

極端な場合を見れば明らかです。横線が0本なら、1番の参加者は確実に1番の結果を受け取ります。横線を1本足しても2人の運命しか変わりません。一般に、経路は横線に出会うたびに最大1列しか横に移動できないので、k列離れた結果に到達するには適切な位置の横線が最低k本必要です。ladder lotteryのシミュレーションと解析によれば、手描きの典型的な梯子（縦線1本あたりおよそ1.5〜2本の横線）では、各自の確率分布は自分の開始列の近くに強く偏ります。反対側の端よりも、自分が出発した真下に着く可能性の方がはるかに高いのです。横線をランダムに配置した梯子の研究でも、確率行列は横線が増えてようやくゆっくり一様に近づき、参加者n人で本当に等確率に近づくにはn²規模以上の横線が必要です。手で描ける範囲をはるかに超えています。

紙でやるとき、人は意識的にせよ無意識にせよこれを突けます。見えている良い結果の真上の列を選ぶのは、横線がまばらな梯子では実際に有利です。対策は誰もが半ば知っている民間の知恵です。列を選ぶ前に結果を隠す、選んだ後に各自が横線を描き足す、結果ラベルの位置をシャッフルする、などです。このデジタル版は結び目を別の方法で断ち切ります。横線をシミュレートする代わりに、Math.random()で結果リストそのものを直接シャッフルし、全参加者にすべての結果への本物の1/nの確率を与えます。手描きの梯子はこの分布に近似できるだけです。`,
				zh: `关于纸上梯子有个令人不安的真相：双射并不等于公平抽签。梯子保证每个人得到不同的结果，却完全不保证所有结果出现的概率相等——横杠少的时候，差得还很远。

极端情形一看便知：零条横杠时，1号玩家必然得到1号结果；加一条横杠也只改变两个人的命运。一般地，路径每遇到一条横杠最多横移一列，所以要到达k列之外的结果，至少需要k条位置合适的横杠。对梯子抽签的模拟和分析表明，典型的手画梯子（每条竖轨约1.5到2条横杠）中，每个人的概率分布强烈地集中在自己起始列附近——你落在出发点正下方的可能性远高于落到最远端。对随机布杠梯子的研究也发现，概率矩阵只会随横杠增加而缓慢趋近均匀；n个玩家要接近真正的等概率，需要n²量级甚至更多的横杠，远超任何人手画的规模。

玩纸上版的人会有意无意地利用这一点：在横杠稀疏的梯子上，选正对着可见好结果上方的那一列，是实实在在的优势。对策就是大家似懂非懂的那些土办法——选列之前先遮住结果、每人选完后再补画几条横杠、把结果标签的位置打乱。这个数字版本则从根上斩断了问题：它根本不模拟横杠，而是直接用 Math.random() 洗牌结果列表，让每个玩家对每个结果都拥有货真价实的 1/n 概率——手画梯子只能逼近这个分布。`
			},
			code: {
				example: `4 players, rungs drawn between random neighbors.
Rough chance that player 1 ends at their own column:

  0 rungs   -> 100%
  2 rungs   -> ~55%
  5 rungs   -> ~35%
  many      -> approaches 25% (= 1/4, the fair value)

Sparse ladders favor "straight down".
Fair play checklist for paper ladders:
  1. hide outcomes BEFORE columns are picked
  2. everyone may add rungs after picking
  3. shuffle the outcome labels too

This tool skips the ladder: it shuffles outcomes directly,
so every assignment is 1/n from the start.`
			}
		},
		{
			heading: {
				en: 'Ladders, Braids, and Bubble Sort: Where Amidakuji Shows Up in Science',
				ko: '사다리, 브레이드, 버블 정렬 — 과학 속에 등장하는 아미다쿠지',
				ja: '梯子・ブレイド・バブルソート — 科学に現れるあみだくじ',
				zh: '梯子、辫群与冒泡排序：阿弥陀签在科学中的身影'
			},
			body: {
				en: `A children's lottery turns out to be a respectable mathematical object. Combinatorists study "ladder lotteries" as a structure in their own right: a classic result identifies optimal ladders — those realizing a permutation with the fewest possible rungs — with reduced decompositions of the permutation into adjacent transpositions, and researchers have counted and enumerated them and built algorithms that list every optimal ladder for the reverse permutation. The number of rungs you need is governed by the inversion count mentioned earlier, and sliding a rung past its neighbors corresponds to the braid relations from knot theory: amidakuji diagrams are essentially braid diagrams with the over/under crossing information forgotten.

The same picture appears across disciplines. In physics, the world lines of particles that scatter off each other trace an amidakuji pattern through spacetime. In sorting theory, a bubble sort execution is literally a ladder: each comparison-and-swap of neighbors is one rung, and sorting networks used in parallel hardware are ladders with rungs arranged so any input permutation exits sorted. In music theory, voice-leading diagrams that track how chord tones move between voices form the same crossing diagrams.

For a puzzle-flavored taste of the mathematics, try this with pen and paper: draw a 3-rail ladder that sends A to 3, B to 1, and C to 2. You will find it needs exactly two rungs — that permutation is a 3-cycle with two inversions — and no arrangement with a single rung can do it. Then try swapping only A and C while leaving B fixed: the minimum is three rungs, because the middle rail must be crossed twice.`,
				ko: `아이들 추첨 놀이가 알고 보니 어엿한 수학적 대상입니다. 조합론자들은 "ladder lottery"를 독립된 구조로 연구합니다. 고전적인 결과는 최적 사다리 — 주어진 순열을 가장 적은 가로줄로 구현하는 사다리 — 를 그 순열을 인접 자리바꿈으로 분해하는 축약 분해(reduced decomposition)와 동일시하며, 연구자들은 이를 세고 열거하고, 역순 순열의 모든 최적 사다리를 나열하는 알고리즘도 만들었습니다. 필요한 가로줄 수는 앞서 말한 반전 수가 지배하고, 가로줄을 이웃 가로줄 너머로 밀어 옮기는 조작은 매듭 이론의 브레이드 관계식에 대응합니다. 아미다쿠지 그림은 본질적으로 교차의 위아래 정보를 지운 브레이드 다이어그램입니다.

같은 그림이 여러 분야에 등장합니다. 물리학에서는 서로 산란하는 입자들의 세계선이 시공간에 아미다쿠지 무늬를 그립니다. 정렬 이론에서 버블 정렬의 실행 과정은 문자 그대로 사다리입니다. 이웃 비교·교환 한 번이 가로줄 하나이고, 병렬 하드웨어에 쓰이는 정렬 네트워크는 어떤 입력 순열이든 정렬되어 나오도록 가로줄을 배치한 사다리입니다. 음악 이론에서는 화음의 구성음이 성부 사이를 어떻게 이동하는지 추적하는 성부 진행 다이어그램이 같은 교차 그림을 이룹니다.

퍼즐 맛이 나는 수학을 직접 느껴 보려면 펜과 종이로 이것을 시도해 보세요. A를 3으로, B를 1로, C를 2로 보내는 3기둥 사다리를 그려 보세요. 정확히 두 개의 가로줄이 필요하다는 것을 알게 될 겁니다. 이 순열은 반전이 두 개인 3-순환이라 가로줄 하나로는 어떤 배치로도 불가능합니다. 다음에는 B를 고정한 채 A와 C만 맞바꿔 보세요. 최소 가로줄은 세 개입니다. 가운데 기둥을 두 번 건너야 하기 때문입니다.`,
				ja: `子どもの抽選遊びが、実は立派な数学的対象だと分かります。組合せ論の研究者は「ladder lottery」を独立した構造として研究しています。古典的な結果は、最適な梯子 — 与えられた順列を最少本数の横線で実現する梯子 — を、その順列の隣接互換への簡約分解（reduced decomposition）と同一視します。研究者はこれを数え上げ、列挙し、逆順順列のすべての最適梯子を列挙するアルゴリズムも構築しました。必要な横線の本数は先述の転倒数が支配し、横線を隣の横線を越えて滑らせる操作は結び目理論のブレイド関係式に対応します。あみだくじの図は本質的に、交差の上下情報を忘れたブレイド図なのです。

同じ図式が分野を越えて現れます。物理学では、互いに散乱する粒子の世界線が時空にあみだくじ模様を描きます。ソート理論では、バブルソートの実行過程は文字通り梯子です。隣接要素の比較・交換1回が横線1本にあたり、並列ハードウェアで使われるソーティングネットワークは、どんな入力順列も整列されて出てくるように横線を配置した梯子です。音楽理論では、和音の構成音が声部間をどう移動するかを追う声部連結の図が同じ交差図になります。

パズル風味の数学を味わうには、ペンと紙でこれを試してください。Aを3へ、Bを1へ、Cを2へ送る3本柱の梯子を描いてみましょう。ちょうど2本の横線が必要だと分かるはずです。この順列は転倒が2つある3-サイクルなので、横線1本ではどんな配置でも不可能です。次にBを固定したままAとCだけを入れ替えてみてください。最少は3本です。真ん中の柱を2回横切らなければならないからです。`,
				zh: `一个孩子们的抽签游戏，竟是一个堂堂正正的数学对象。组合数学家把"梯子抽签"当作独立结构来研究：一个经典结果把最优梯子——用尽可能少的横杠实现某个置换的梯子——与该置换分解为相邻对换的既约分解一一对应起来；研究者对它们计数、枚举，还设计了列出逆序置换全部最优梯子的算法。所需横杠数由前面提到的逆序数决定，而把一条横杠滑过相邻横杠的操作，恰好对应纽结理论中的辫群关系式：阿弥陀签图本质上就是抹去了交叉上下信息的辫子图。

同样的图景横跨多个学科。物理学中，相互散射的粒子的世界线在时空里画出阿弥陀签图案。排序理论中，冒泡排序的执行过程就是一架不折不扣的梯子：每次相邻比较交换是一条横杠，并行硬件使用的排序网络则是横杠排布得让任何输入置换都能有序输出的梯子。音乐理论中，追踪和弦音在各声部间移动的声部进行图，画出来也是同样的交叉图。

想亲手尝一口带谜题味道的数学，拿纸笔试试：画一架3轨梯子，把A送到3、B送到1、C送到2。你会发现恰好需要两条横杠——这个置换是有两个逆序的3-循环，单条横杠无论怎么放都办不到。再试试固定B、只交换A和C：最少要三条横杠，因为中间那条轨必须被穿越两次。`
			},
			code: {
				example: `Puzzle 1: send A->3, B->1, C->2  (needs exactly 2 rungs)

  A   B   C
  |---|   |      swap A,B  -> B A C
  |   |---|      swap A,C  -> B C A
  1   2   3      A->3, B->1, C->2  done

Puzzle 2: swap A and C, keep B fixed (minimum 3 rungs)

  A   B   C
  |---|   |      -> B A C
  |   |---|      -> B C A
  |---|   |      -> C B A
  1   2   3      A->3, C->1, B->2 ... B is back home

Fewer than 3 is impossible: A and C must each
cross the middle rail, and every crossing is a rung.`
			}
		},
		{
			heading: {
				en: 'Running a Good Draw: Etiquette, Group Psychology, and When Not to Use a Ladder',
				ko: '좋은 추첨 진행법 — 에티켓, 집단 심리, 사다리를 쓰지 말아야 할 때',
				ja: 'よい抽選の進め方 — エチケット・集団心理・あみだくじを使うべきでない場面',
				zh: '把抽签办好：礼仪、群体心理，以及不该用梯子的时候'
			},
			body: {
				en: `Random selection is social technology. The reason teams reach for a ladder instead of letting the manager assign the unpleasant task is procedural fairness: research on how people judge decisions consistently finds that outcomes feel more acceptable when the process is visibly neutral, even to the person who loses. A ladder draw is neutral, transparent, and — crucially — theatrical enough that everyone witnesses the same result at the same moment. That shared moment is what kills the post-hoc grumbling a private coin flip invites.

A few practices keep digital draws clean. Decide the stakes before pressing start, and write them into the result labels themselves ("buys coffee", "presents first") so the outcome is unarguable. Agree in advance that the first run is final — re-rolling "best of three" after seeing a result is the classic way fairness dies. For recurring duties like cleaning rotations, consider excluding last week's loser from this week's worst slot; a memoryless 1/n draw will occasionally hand the same person the chore three weeks running, which is statistically normal (probability 1/n² for two repeats, not astronomical for small groups) but socially corrosive.

Know the tool's limits, too. A ladder assigns n people to n distinct outcomes — a permutation. It is the wrong shape when you need one winner from many (use a single "win" label among blanks, which works but wastes the structure), weighted odds (someone should carry double chance), or team splitting into unequal groups. And for anything with real money or legal weight, folk randomizers are inappropriate altogether: regulated lotteries exist precisely because stakes change how much fairness must be provable, not just felt.`,
				ko: `무작위 선택은 일종의 사회적 기술입니다. 팀이 불쾌한 일을 관리자 지명 대신 사다리타기로 정하는 이유는 절차적 공정성 때문입니다. 사람들이 결정을 어떻게 받아들이는지에 대한 연구들은 과정이 눈에 보이게 중립적일 때, 지는 사람에게조차 결과가 더 수용 가능하게 느껴진다는 것을 일관되게 발견합니다. 사다리 추첨은 중립적이고 투명하며, 결정적으로 모두가 같은 순간에 같은 결과를 목격할 만큼 연극적입니다. 그 공유된 순간이, 몰래 한 동전 던지기가 불러오는 사후 뒷말을 잠재웁니다.

디지털 추첨을 깔끔하게 유지하는 몇 가지 관행이 있습니다. 시작 버튼을 누르기 전에 내기 내용을 정하고, 그것을 결과 라벨 자체에 적으세요("커피 사기", "첫 번째 발표"). 그러면 결과에 토를 달 수 없습니다. 첫 판이 최종이라는 것도 미리 합의하세요. 결과를 보고 나서 "삼세판"으로 다시 돌리는 것이 공정성이 죽는 고전적인 경로입니다. 청소 당번 같은 반복 업무라면 지난주에 걸린 사람을 이번 주 최악의 자리에서 빼 주는 것도 고려하세요. 기억이 없는 1/n 추첨은 가끔 같은 사람에게 3주 연속 당번을 안기는데, 통계적으로는 정상이지만(2연속 확률은 1/n²로 작은 모임에서는 드물지 않음) 관계에는 해롭습니다.

도구의 한계도 알아 두세요. 사다리는 n명을 n개의 서로 다른 결과에 배정하는 순열입니다. 여럿 중 한 명의 당첨자만 뽑을 때(빈칸들 사이에 "당첨" 하나를 넣으면 되지만 구조가 아깝습니다), 가중 확률이 필요할 때(누군가 두 배의 확률을 져야 할 때), 인원이 다른 팀으로 나눌 때는 맞지 않는 모양입니다. 그리고 실제 돈이나 법적 무게가 걸린 일에는 민간 추첨 도구 자체가 부적절합니다. 규제된 복권 제도가 존재하는 이유는, 판돈이 커지면 공정성이 느껴지는 것만으로는 부족하고 증명 가능해야 하기 때문입니다.`,
				ja: `無作為選択は一種の社会的技術です。チームが嫌な仕事を上司の指名ではなくあみだくじで決めるのは、手続き的公正のためです。人が決定をどう受け止めるかの研究は、プロセスが目に見えて中立なとき、負けた本人にとってさえ結果がより受け入れやすくなることを一貫して見出しています。あみだくじは中立で透明、そして決定的に、全員が同じ瞬間に同じ結果を目撃できるだけの演劇性があります。その共有された瞬間こそが、こっそり行うコイン投げが招く事後の不平を封じるのです。

デジタル抽選をきれいに保つ習慣がいくつかあります。スタートを押す前に賭けの内容を決め、それを結果ラベル自体に書き込みましょう（「コーヒーを奢る」「最初に発表」）。そうすれば結果に異論の余地がありません。最初の1回が最終だと事前に合意しておくことも大切です。結果を見てから「三本勝負」とやり直すのは、公正さが死ぬ古典的な道筋です。掃除当番のような繰り返しの義務なら、先週当たった人を今週の最悪の枠から除外することも検討しましょう。記憶を持たない1/n抽選は、ときに同じ人に3週連続で当番を割り当てます。統計的には正常ですが（2連続の確率は1/n²で、小さな集団では珍しくない）、人間関係には有害です。

ツールの限界も知っておきましょう。あみだくじはn人をn個の異なる結果に割り当てる順列です。大勢から1人の当選者だけを選ぶとき（空白の中に「当たり」を1つ入れれば動きますが構造がもったいない）、重み付き確率が必要なとき（誰かが2倍の確率を負うべきとき）、人数の違うチーム分けには不向きな形です。そして実際のお金や法的な重みが関わることには、民間の抽選道具そのものが不適切です。規制された宝くじ制度が存在するのは、賭け金が大きくなると公正さは感じられるだけでは足りず、証明可能でなければならないからです。`,
				zh: `随机选择是一种社会技术。团队宁愿用梯子抽签也不让主管直接指派苦差，原因在于程序公正：关于人们如何评判决定的研究一再发现，当过程明显中立时，即使是输的那个人也更容易接受结果。梯子抽签中立、透明，而且关键在于足够有"戏剧性"——所有人在同一时刻见证同一结果。正是这个共同见证的瞬间，消解了私下抛硬币必然招来的事后抱怨。

几条实践能让数字抽签清清爽爽。按开始之前先定好赌注，并把它直接写进结果标签（"请咖啡""第一个发言"），结果就无可争辩。事先约定第一把定胜负——看到结果后再"三局两胜"重抽，是公平性消亡的经典路径。对于打扫值日这类周期性任务，可以考虑让上周中招的人豁免本周最差的位置；无记忆的1/n抽签偶尔会让同一个人连中三周，统计上完全正常（连中两次的概率是1/n²，小团体里并不罕见），但对关系有腐蚀性。

也要了解工具的边界。梯子把n个人分配到n个不同结果——一个置换。当你要从多人中只抽一个赢家（在空白项里放一个"中奖"也行，但浪费了结构）、需要加权概率（某人应承担双倍机会）、或要把人分成人数不等的小组时，它就不是合适的形状。而凡是涉及真金白银或法律效力的事情，民间随机工具一概不合适：受监管的彩票制度之所以存在，正是因为赌注一大，公平就不能只是被感受到，而必须可以被证明。`
			}
		}
	];

	const toolContent = {
		about: {
			en: 'A digital ladder game (also known as Amidakuji or Ghost Leg) randomly assigns each participant to one of the result options. Originating in Japan, the game is widely used in Korea ("사다리타기") and Asia for fair, fun random selection. Each result is mathematically equally likely to fall on each participant — perfect for splitting tasks, picking winners, or deciding who pays.',
			ko: '전통적인 종이 사다리타기를 디지털로 옮긴 도구입니다. 일본의 아미다쿠지에서 유래했으며 한국에서도 친구 모임, 회사 점심값 정하기, 청소 당번 등 공정하고 재미있는 무작위 선택에 자주 쓰입니다. 수학적으로 각 참가자가 각 결과를 받을 확률이 정확히 1/N로 동일합니다.',
			ja: '伝統的な紙のあみだくじをデジタル化したツールです。日本発祥で、韓国でも「사다리타기」として広く使われています。罰ゲーム決め、当番決め、ランチ代の負担決めなど、公平で楽しい抽選に最適です。各参加者が各結果を引く確率は数学的に1/Nで等しくなります。',
			zh: '将传统纸上画梯子（梯子游戏）数字化的工具，源自日本的"阿弥陀签"。在韩国（사다리타기）和亚洲广泛使用，常用于聚会决定输家、分担清洁任务、决定饭钱等公平有趣的随机选择。每位参与者抽中各结果的概率在数学上是相等的 1/N。'
		},
		howTo: {
			en: [
				'Edit or add the names of the participants on the left.',
				'Edit or add the result options on the right (must equal participant count).',
				'Click "Start" to randomly assign one result to each participant.',
				'Watch the matches reveal one by one with a smooth animation.',
				'Click "Reset" to clear results and play again with the same lineup.'
			],
			ko: [
				'왼쪽에 참가자 이름을 수정하거나 추가합니다.',
				'오른쪽에 결과 항목을 수정하거나 추가합니다(참가자 수와 동일해야 함).',
				'"시작" 버튼을 누르면 각 참가자에게 결과가 무작위로 배정됩니다.',
				'결과가 한 명씩 부드럽게 공개됩니다.',
				'"리셋" 버튼으로 같은 명단을 유지한 채 다시 돌릴 수 있습니다.'
			],
			ja: [
				'左側に参加者名を編集または追加します。',
				'右側に結果項目を編集または追加します（参加者と同数）。',
				'「スタート」を押すと結果が無作為に割り当てられます。',
				'結果が1人ずつアニメーションで表示されます。',
				'「リセット」で同じメンバーで再抽選できます。'
			],
			zh: [
				'在左侧编辑或添加参与者名字。',
				'在右侧编辑或添加结果项（数量需与参与者一致）。',
				'点击"开始"，每位参与者会被随机分配一个结果。',
				'结果会以动画形式逐个揭晓。',
				'点击"重置"可保留名单重新抽签。'
			]
		},
		useCases: {
			en: [
				'Deciding who buys lunch or coffee for the group.',
				'Assigning chores or chores rotation among roommates.',
				'Picking a presentation order at school or work.',
				'Choosing a winner for a small giveaway or game.',
				'Splitting party planning roles among friends.'
			],
			ko: [
				'점심값, 커피값 누가 낼지 정하기.',
				'룸메이트끼리 청소 당번 정하기.',
				'학교나 회사에서 발표 순서 결정.',
				'간단한 추첨 이벤트 당첨자 뽑기.',
				'모임 준비 역할 분담.'
			],
			ja: [
				'ランチやコーヒー代の負担者決め。',
				'ルームメイト間の掃除当番決め。',
				'学校や職場でのプレゼン順序決定。',
				'小さな抽選イベントの当選者選び。',
				'パーティー準備の役割分担。'
			],
			zh: [
				'决定谁请午餐或咖啡。',
				'室友间分配打扫值日。',
				'决定学校或职场的演讲顺序。',
				'小型抽奖活动选出获胜者。',
				'派对筹备时分配任务。'
			]
		},
		faq: {
			en: [
				{ q: 'Is each outcome truly random?', a: 'Yes. The tool uses JavaScript\'s Math.random() to shuffle results. Each participant has a 1/N chance for any given result.' },
				{ q: 'Why must participants and results have the same count?', a: 'A ladder game is a one-to-one mapping (a permutation). Mismatched counts would leave participants unmatched.' },
				{ q: 'Can I save or share the result?', a: 'You can take a screenshot, but the page does not store data. Re-running will produce a different random outcome.' },
				{ q: 'How many participants are supported?', a: 'Up to 10 to keep the layout readable. For larger groups, run multiple rounds.' }
			],
			ko: [
				{ q: '결과가 정말 무작위인가요?', a: '네. JavaScript의 Math.random()으로 셔플하므로 각 참가자가 특정 결과를 받을 확률은 정확히 1/N입니다.' },
				{ q: '참가자와 결과 수가 같아야 하는 이유는?', a: '사다리타기는 일대일 대응(순열)이므로 수가 다르면 매칭되지 않는 항목이 생깁니다.' },
				{ q: '결과를 저장하거나 공유할 수 있나요?', a: '스크린샷으로 저장할 수 있습니다. 페이지에 데이터가 저장되지 않으며, 다시 돌리면 다른 결과가 나옵니다.' },
				{ q: '몇 명까지 지원하나요?', a: '레이아웃 가독성을 위해 최대 10명까지 지원합니다. 더 많은 인원은 여러 라운드로 나누어 진행하세요.' }
			]
		},
		related: [
			{ href: '/calculator', label: { en: 'Calculator', ko: '계산기', ja: '計算機', zh: '计算器' } },
			{ href: '/percentage', label: { en: 'Percentage', ko: '퍼센트 계산기', ja: 'パーセント計算', zh: '百分比' } },
			{ href: '/presentation-timer', label: { en: 'Presentation Timer', ko: '프레젠테이션 타이머', ja: 'プレゼンタイマー', zh: '演讲计时器' } }
		],
		externalRefs: [
			{ href: 'https://en.wikipedia.org/wiki/Ghost_Leg', label: 'Ghost Leg (Ladder Game) - Wikipedia' },
			{ href: 'https://en.wikipedia.org/wiki/Random_number_generation', label: 'Random number generation - Wikipedia' }
		]
	};

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let participants = ['A', 'B', 'C', 'D'];
	let results = ['1', '2', '3', '4'];
	let newParticipant = '';
	let newResult = '';
	let gameResult: { participant: string; result: string }[] = [];
	let isPlaying = false;

	function addParticipant() {
		if (newParticipant.trim() && participants.length < 10) {
			participants = [...participants, newParticipant.trim()];
			newParticipant = '';
		}
	}

	function removeParticipant(index: number) {
		if (participants.length > 2) {
			participants = participants.filter((_, i) => i !== index);
		}
	}

	function addResult() {
		if (newResult.trim() && results.length < 10) {
			results = [...results, newResult.trim()];
			newResult = '';
		}
	}

	function removeResult(index: number) {
		if (results.length > 2) {
			results = results.filter((_, i) => i !== index);
		}
	}

	async function startGame() {
		if (participants.length !== results.length) {
			alert(lang === 'ko' ? '참가자 수와 결과 수가 같아야 합니다.' :
				lang === 'ja' ? '参加者数と結果数は同じである必要があります。' :
				lang === 'zh' ? '参与者数量必须与结果数量相同。' :
				'Number of participants must match number of results.');
			return;
		}

		isPlaying = true;
		gameResult = [];

		// Shuffle results
		const shuffledResults = [...results].sort(() => Math.random() - 0.5);

		// Animate reveal
		for (let i = 0; i < participants.length; i++) {
			await new Promise(resolve => setTimeout(resolve, 500));
			gameResult = [...gameResult, { participant: participants[i], result: shuffledResults[i] }];
		}

		isPlaying = false;
	}

	function reset() {
		gameResult = [];
	}
</script>

<svelte:head>
	<title>{t('ladder.title')} - SD.gy</title>
	<meta name="description" content={t('ladder.desc')} />
	<link rel="canonical" href="https://sd.gy/{lang}/ladder-game" />
	<meta property="og:title" content="{t('ladder.title')} - SD.gy" />
	<meta property="og:description" content={t('ladder.desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/ladder-game" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('ladder.title')} - SD.gy" />
	<meta name="twitter:description" content={t('ladder.desc')} />
</svelte:head>

<div class="max-w-2xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('ladder.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('ladder.desc')}</p>
	</div>

	<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
		<div class="grid grid-cols-2 gap-6">
			<!-- Participants -->
			<div>
				<h3 class="text-sm font-semibold text-gray-700 dark:text-dark-300 mb-3">{t('ladder.participants')}</h3>
				<div class="space-y-2">
					{#each participants as p, i}
						<div class="flex items-center gap-2">
							<input
								type="text"
								bind:value={participants[i]}
								class="flex-1 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500"
							/>
							{#if participants.length > 2}
								<button
									on:click={() => removeParticipant(i)}
									class="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg"
								>
									<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							{/if}
						</div>
					{/each}
				</div>
				{#if participants.length < 10}
					<div class="flex items-center gap-2 mt-2">
						<input
							type="text"
							bind:value={newParticipant}
							placeholder={lang === 'ko' ? '이름 입력' : lang === 'ja' ? '名前を入力' : lang === 'zh' ? '输入名字' : 'Enter name'}
							on:keypress={(e) => e.key === 'Enter' && addParticipant()}
							class="flex-1 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500"
						/>
						<button
							on:click={addParticipant}
							class="px-4 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600"
						>
							{t('ladder.addParticipant')}
						</button>
					</div>
				{/if}
			</div>

			<!-- Results -->
			<div>
				<h3 class="text-sm font-semibold text-gray-700 dark:text-dark-300 mb-3">{t('ladder.results')}</h3>
				<div class="space-y-2">
					{#each results as r, i}
						<div class="flex items-center gap-2">
							<input
								type="text"
								bind:value={results[i]}
								class="flex-1 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500"
							/>
							{#if results.length > 2}
								<button
									on:click={() => removeResult(i)}
									class="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg"
								>
									<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							{/if}
						</div>
					{/each}
				</div>
				{#if results.length < 10}
					<div class="flex items-center gap-2 mt-2">
						<input
							type="text"
							bind:value={newResult}
							placeholder={lang === 'ko' ? '결과 입력' : lang === 'ja' ? '結果を入力' : lang === 'zh' ? '输入结果' : 'Enter result'}
							on:keypress={(e) => e.key === 'Enter' && addResult()}
							class="flex-1 px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500"
						/>
						<button
							on:click={addResult}
							class="px-4 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600"
						>
							{t('ladder.addResult')}
						</button>
					</div>
				{/if}
			</div>
		</div>

		<!-- Buttons -->
		<div class="flex gap-3 mt-6">
			<button
				on:click={startGame}
				disabled={isPlaying || participants.length !== results.length}
				class="flex-1 py-3 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-xl font-semibold hover:from-violet-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
			>
				{isPlaying ? '...' : t('ladder.start')}
			</button>
			<button
				on:click={reset}
				class="px-6 py-3 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
			>
				{t('ladder.reset')}
			</button>
		</div>

		<!-- Game Result -->
		{#if gameResult.length > 0}
			<div class="mt-6">
				<h3 class="text-sm font-semibold text-gray-700 dark:text-dark-300 mb-3">{t('ladder.result')}</h3>
				<div class="space-y-3">
					{#each gameResult as gr, i}
						<div
							class="flex items-center justify-between p-4 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-500/10 dark:to-purple-500/10 rounded-xl border border-violet-200 dark:border-violet-500/20 animate-fade-in"
							style="animation-delay: {i * 100}ms"
						>
							<span class="font-semibold text-gray-900 dark:text-dark-100">{gr.participant}</span>
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
							<span class="font-bold text-violet-600 dark:text-violet-400">{gr.result}</span>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>

	<ToolContent
		{lang}
		toolName="Ladder Game"
		toolUrl="https://sd.gy/{lang}/ladder-game"
		lastUpdated="2026-04-30"
		category="Daily Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sd.gy/${lang}` },
			{ name: 'Tools', url: `https://sd.gy/${lang}` },
			{ name: 'Ladder Game', url: `https://sd.gy/${lang}/ladder-game` }
		]}
		content={toolContent}
	/>

	<ToolGuide {lang} sections={guideSections} />
</div>

<style>
	@keyframes fade-in {
		from { opacity: 0; transform: translateY(-10px); }
		to { opacity: 1; transform: translateY(0); }
	}

	.animate-fade-in {
		animation: fade-in 0.3s ease-out forwards;
		opacity: 0;
	}
</style>
