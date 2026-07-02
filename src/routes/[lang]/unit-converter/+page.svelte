<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'A Metre Defined by Light: The SI System and the 2019 Redefinition',
				ko: '빛으로 정의된 미터 — SI 단위계와 2019년 재정의',
				ja: '光で定義されたメートル — SI単位系と2019年の再定義',
				zh: '用光定义的米：SI 单位制与 2019 年重新定义'
			},
			body: {
				en: `Every conversion this tool performs ultimately leans on the International System of Units (SI), a set of seven base units — the metre, kilogram, second, ampere, kelvin, mole, and candela — from which everything else (newtons, joules, litres, volts) is derived. What most people never hear is that the definitions behind these units were quietly revolutionized within living memory.

The metre began in the 1790s as one ten-millionth of the distance from the North Pole to the equator, then became a platinum-iridium bar kept in Paris, then a count of krypton-86 wavelengths. Since 1983 it has been defined as the distance light travels in a vacuum in exactly 1/299,792,458 of a second — which means the speed of light is no longer measured; it is fixed by definition, and the metre inherits its precision from atomic clocks. The second itself is defined by counting exactly 9,192,631,770 oscillations of radiation from a caesium-133 atom.

The kilogram held out the longest. Until 2019 it was literally a golf-ball-sized platinum-iridium cylinder — the International Prototype Kilogram, nicknamed Le Grand K — stored under three bell jars near Paris. The problem: compared with its official copies, its mass drifted by roughly 50 micrograms over a century. An object that IS the kilogram cannot be wrong, so when the artifact changed, the definition of mass for the entire planet changed with it. On 20 May 2019, the SI abandoned artifacts entirely: the kilogram is now defined by fixing the Planck constant at exactly 6.62607015 × 10⁻³⁴ joule-seconds. Nothing changed for your kitchen scale — the redefinition was engineered to be seamless — but now, for the first time, every unit humans use is anchored to constants of nature rather than to objects that can be scratched, stolen, or slowly gain dust.`,
				ko: `이 도구가 수행하는 모든 변환은 궁극적으로 국제단위계(SI)에 기대고 있습니다. SI는 미터, 킬로그램, 초, 암페어, 켈빈, 몰, 칸델라라는 7개 기본 단위의 집합이며, 그 밖의 모든 단위(뉴턴, 줄, 리터, 볼트)는 여기서 유도됩니다. 대부분의 사람이 모르는 사실은, 이 단위들의 정의가 그리 멀지 않은 과거에 조용히 혁명을 겪었다는 점입니다.

미터는 1790년대에 북극에서 적도까지 거리의 1천만분의 1로 출발해, 파리에 보관된 백금-이리듐 막대가 되었다가, 크립톤-86 파장의 개수가 되었습니다. 1983년부터는 빛이 진공에서 정확히 1/299,792,458초 동안 이동하는 거리로 정의됩니다. 즉 빛의 속도는 더 이상 측정 대상이 아니라 정의로 고정된 값이며, 미터는 원자시계의 정밀도를 물려받습니다. 초 자체는 세슘-133 원자가 내는 복사의 진동을 정확히 9,192,631,770번 세는 것으로 정의됩니다.

킬로그램은 가장 오래 버텼습니다. 2019년까지 킬로그램은 말 그대로 골프공 크기의 백금-이리듐 원기둥 — 국제킬로그램원기, 별명 '르 그랑 K' — 였고, 파리 근교에서 유리 종 세 겹 아래 보관됐습니다. 문제는 공식 복제본들과 비교했을 때 그 질량이 한 세기 동안 약 50마이크로그램 변했다는 것입니다. 킬로그램 '그 자체'인 물체는 틀릴 수 없으므로, 원기가 변하면 지구 전체의 질량 정의가 함께 변하는 셈이었습니다. 2019년 5월 20일, SI는 인공물을 완전히 버렸습니다. 킬로그램은 이제 플랑크 상수를 정확히 6.62607015 × 10⁻³⁴ 줄·초로 고정하는 방식으로 정의됩니다. 주방 저울에는 아무 변화가 없습니다. 재정의는 이음새 없이 이루어지도록 설계됐으니까요. 그러나 역사상 처음으로, 인류가 쓰는 모든 단위가 긁히거나 도난당하거나 서서히 먼지가 쌓일 수 있는 물체가 아니라 자연 상수에 고정되었습니다.`,
				ja: `このツールが行うすべての換算は、突き詰めれば国際単位系（SI）に依拠しています。SIはメートル、キログラム、秒、アンペア、ケルビン、モル、カンデラという7つの基本単位の集合で、それ以外のすべて（ニュートン、ジュール、リットル、ボルト）はここから導かれます。ほとんどの人が知らないのは、これらの単位の定義が、そう遠くない過去に静かな革命を遂げたことです。

メートルは1790年代に北極から赤道までの距離の1000万分の1として出発し、パリに保管された白金イリジウム製の原器になり、その後クリプトン86の波長の数になりました。1983年以降は、光が真空中を正確に1/299,792,458秒間に進む距離と定義されています。つまり光速はもはや測定するものではなく定義で固定された値であり、メートルは原子時計の精度を受け継ぎます。秒そのものは、セシウム133原子の放射の振動をちょうど9,192,631,770回数えることで定義されます。

キログラムは最後まで持ちこたえました。2019年まで、キログラムは文字どおりゴルフボール大の白金イリジウム円柱 — 国際キログラム原器、通称「ル・グラン・K」 — で、パリ近郊でガラスの鐘3重の下に保管されていました。問題は、公式な複製と比べて、その質量が1世紀でおよそ50マイクログラムずれたことです。キログラム「そのもの」である物体は間違いようがないため、原器が変われば地球全体の質量の定義も一緒に変わってしまうのです。2019年5月20日、SIは人工物を完全に捨てました。キログラムは今、プランク定数を正確に 6.62607015 × 10⁻³⁴ ジュール秒に固定することで定義されます。台所のはかりには何の変化もありません。再定義は継ぎ目なく行われるよう設計されました。しかし史上初めて、人類が使うすべての単位が、傷ついたり盗まれたり静かに埃をかぶったりしうる物体ではなく、自然定数に係留されたのです。`,
				zh: `本工具执行的每一次换算，归根结底都依赖国际单位制（SI）——由米、千克、秒、安培、开尔文、摩尔、坎德拉七个基本单位组成，其余一切单位（牛顿、焦耳、升、伏特）都由此导出。大多数人从未听说的是，这些单位背后的定义在不久前经历了一场静悄悄的革命。

米在 18 世纪 90 年代最初被定义为北极到赤道距离的一千万分之一，后来变成保存在巴黎的铂铱合金棒，再后来是氪-86 波长的计数。自 1983 年起，它被定义为光在真空中于精确的 1/299,792,458 秒内走过的距离——这意味着光速不再是被测量的对象，而是由定义固定的值，米也因此继承了原子钟的精度。秒本身的定义，是数出铯-133 原子辐射的精确 9,192,631,770 次振荡。

千克坚持得最久。直到 2019 年，千克实实在在就是一个高尔夫球大小的铂铱圆柱体——国际千克原器，绰号"大 K"——存放在巴黎近郊，罩着三层玻璃钟罩。问题在于：与官方复制品相比，它的质量在一个世纪里漂移了约 50 微克。一个"本身就是千克"的物体不可能出错，所以原器一变，全球的质量定义就跟着变。2019 年 5 月 20 日，SI 彻底抛弃了实物基准：千克如今通过把普朗克常数固定为精确的 6.62607015 × 10⁻³⁴ 焦·秒来定义。你家厨房秤上什么都没变——重新定义被设计得天衣无缝——但人类历史上第一次，我们使用的每一个单位都锚定在自然常数上，而不是锚定在会被刮伤、被盗或慢慢积灰的物体上。`
			}
		},
		{
			heading: {
				en: 'US Customary vs Imperial: Same Names, Different Sizes',
				ko: '미국 단위계와 영국 임페리얼 — 이름은 같아도 크기가 다르다',
				ja: '米国慣用単位と英国のインペリアル — 名前は同じでも大きさが違う',
				zh: '美制与英制：名字相同，大小不同'
			},
			body: {
				en: `The most dangerous conversions are not metric-to-imperial — they are imperial-to-imperial, because "gallon", "pint", and "ton" name different quantities depending on which side of the Atlantic you are on. The UK reorganized its measures in 1824 (the imperial system) while the newly independent United States kept the older definitions (US customary), and the two have disagreed ever since.

Volume is where it bites hardest. A US gallon is 3.785 litres; an imperial gallon is 4.546 litres — 20 percent bigger. That single fact silently distorts fuel economy comparisons: a car achieving 40 miles per imperial gallon is doing only about 33 miles per US gallon. The nesting is stranger still: an imperial pint holds 20 fluid ounces while a US pint holds 16 — yet the US fluid ounce (29.57 mL) is slightly LARGER than the imperial one (28.41 mL). Bigger ounces, but fewer of them, and a smaller pint overall; a "pint" of beer in London (568 mL) genuinely outmeasures one in New York (473 mL).

Weight adds a third trap: the ton. A US short ton is 2,000 pounds (907.2 kg), a British long ton is 2,240 pounds (1,016 kg), and the metric tonne is exactly 1,000 kg. Three units, one word, up to 12 percent apart — which is why shipping contracts and engineering documents always spell out which ton they mean, and why this converter uses the metric ton. When a recipe, spec sheet, or fuel figure crosses the Atlantic, check which system it was written in before you convert.`,
				ko: `가장 위험한 변환은 미터법-야드파운드법 사이가 아니라 야드파운드법끼리의 변환입니다. "갤런", "파인트", "톤"이 대서양의 어느 쪽에 있느냐에 따라 서로 다른 양을 가리키기 때문입니다. 영국은 1824년에 도량형을 재편했고(임페리얼 단위계) 갓 독립한 미국은 더 오래된 정의를 유지해(미국 관용 단위계) 그 뒤로 계속 어긋나 있습니다.

가장 크게 문제가 되는 것은 부피입니다. 미국 갤런은 3.785리터, 임페리얼 갤런은 4.546리터로 20% 더 큽니다. 이 사실 하나가 연비 비교를 조용히 왜곡합니다. 임페리얼 갤런당 40마일을 달리는 차는 미국 갤런 기준으로는 약 33마일에 불과합니다. 내부 구조는 더 이상합니다. 임페리얼 파인트는 20액량온스, 미국 파인트는 16액량온스인데, 정작 미국 액량온스(29.57mL)가 임페리얼(28.41mL)보다 약간 더 '큽니다'. 온스는 더 크지만 개수가 적어 파인트 전체는 더 작습니다. 런던의 맥주 한 '파인트'(568mL)는 뉴욕의 한 파인트(473mL)보다 실제로 더 많습니다.

무게에는 세 번째 함정, 톤이 있습니다. 미국 쇼트톤은 2,000파운드(907.2kg), 영국 롱톤은 2,240파운드(1,016kg), 미터톤은 정확히 1,000kg입니다. 단어 하나에 단위 셋, 차이는 최대 12%. 그래서 해운 계약서와 공학 문서는 어느 톤인지 반드시 명기하며, 이 변환기는 미터톤을 사용합니다. 레시피든 사양서든 연비든 대서양을 건너온 수치라면, 변환하기 전에 어느 체계로 쓰였는지부터 확인하세요.`,
				ja: `最も危険な換算はメートル法とヤード・ポンド法の間ではなく、ヤード・ポンド法同士の換算です。「ガロン」「パイント」「トン」は、大西洋のどちら側にいるかで違う量を指すからです。英国は1824年に度量衡を再編し（インペリアル法）、独立したばかりの米国はより古い定義を維持したため（米国慣用単位）、両者は以来ずっと食い違っています。

最も痛いのは体積です。米ガロンは3.785リットル、英ガロンは4.546リットルで、20％も大きい。この一点が燃費比較を静かに歪めます。英ガロンで40マイル走る車は、米ガロン基準では約33マイルにしかなりません。内部構造はさらに奇妙です。英パイントは20液量オンス、米パイントは16液量オンスなのに、米国の液量オンス（29.57mL）は英国のもの（28.41mL）よりわずかに「大きい」のです。オンスは大きいのに数が少なく、パイント全体では小さくなる。ロンドンのビール1「パイント」（568mL）は、ニューヨークの1パイント（473mL）より本当に多いのです。

重さには3つ目の罠、トンがあります。米ショートトンは2,000ポンド（907.2kg）、英ロングトンは2,240ポンド（1,016kg）、メートル法のトンはちょうど1,000kg。1つの言葉に3つの単位、差は最大12％。だからこそ海運契約や工学文書は必ずどのトンかを明記し、この変換ツールはメートルトンを使っています。レシピでも仕様書でも燃費でも、大西洋を渡ってきた数値なら、換算する前にどの体系で書かれたかを確認してください。`,
				zh: `最危险的换算不是公制换英制，而是英制换英制——因为"加仑""品脱""吨"在大西洋两岸指的是不同的量。英国在 1824 年重组了度量衡（帝国制），而刚独立的美国保留了更早的定义（美国惯用制），从此两者一直不合。

体积是最容易吃亏的地方。美制加仑是 3.785 升，英制加仑是 4.546 升——大了 20%。仅这一点就悄悄扭曲了油耗比较：一辆每英制加仑跑 40 英里的车，按美制加仑只有约 33 英里。嵌套关系更为古怪：英制品脱是 20 液量盎司，美制品脱是 16 液量盎司——但美制液量盎司（29.57 毫升）反而比英制的（28.41 毫升）略"大"。盎司更大，个数更少，整个品脱反而更小；伦敦的一"品脱"啤酒（568 毫升）确实比纽约的一品脱（473 毫升）多。

重量还有第三个陷阱：吨。美制短吨是 2,000 磅（907.2 千克），英制长吨是 2,240 磅（1,016 千克），公吨则是精确的 1,000 千克。一个词，三种单位，相差可达 12%——这就是为什么航运合同和工程文件总要写明用的是哪种吨，也是本转换器采用公吨的原因。当菜谱、规格书或油耗数据跨越大西洋时，换算之前先弄清它是用哪套体系写的。`
			},
			code: {
				example: `Same word, different size:

  gallon:   US 3.785 L   vs  imperial 4.546 L   (+20%)
  pint:     US 473 mL (16 fl oz)  vs  UK 568 mL (20 fl oz)
  fl oz:    US 29.57 mL  vs  imperial 28.41 mL  (US bigger!)
  ton:      short 907 kg | long 1,016 kg | metric 1,000 kg

Fuel economy trap:
  40 mpg (imperial) = 40 x 3.785/4.546 = ~33 mpg (US)`
			}
		},
		{
			heading: {
				en: 'Why You Cannot Ratio Temperatures: Affine, Not Linear',
				ko: '온도는 왜 비율로 환산할 수 없나 — 선형이 아니라 아핀 변환',
				ja: '温度はなぜ比率で換算できないのか — 線形ではなくアフィン変換',
				zh: '温度为什么不能按比例换算：仿射而非线性'
			},
			body: {
				en: `Length, weight, and volume conversions are pure multiplications: double the metres and the feet double too, and zero means the same nothing in every unit. Temperature is the one everyday quantity where this logic breaks, because Celsius and Fahrenheit do not share a zero. Their conversion — F = C × 9/5 + 32 — has an offset term, making it an affine transformation rather than a proportional one, and that single +32 invalidates every ratio-based shortcut you might try.

Concretely: 20 °C is not "twice as hot" as 10 °C. Convert both and the illusion collapses — 68 °F versus 50 °F is a ratio of 1.36, not 2, and on the absolute Kelvin scale (293.15 K vs 283.15 K) the true ratio of thermal energy is a mere 1.035. Ratios of temperatures are only meaningful in kelvin, where zero really is zero: −273.15 °C, the absence of thermal motion, which is also why kelvin takes no degree sign.

The offset also creates a subtle trap with temperature differences. A change of 10 °C corresponds to a change of 18 °F — you multiply by 9/5 but do NOT add the 32, because the offsets cancel when you subtract two temperatures. Weather reports mix these up routinely: "tomorrow will be 5 degrees warmer" translates to 9 °F, not 41 °F.

For a fast mental estimate, double the Celsius and add 30 (25 °C → about 80 °F; the exact value is 77) — good enough for a weather forecast, not for a lab.`,
				ko: `길이, 무게, 부피 변환은 순수한 곱셈입니다. 미터가 두 배면 피트도 두 배이고, 0은 어느 단위에서나 같은 '없음'을 뜻합니다. 온도는 이 논리가 무너지는 유일한 일상 물리량입니다. 섭씨와 화씨는 0점을 공유하지 않기 때문입니다. 변환식 F = C × 9/5 + 32에는 오프셋 항이 있어 비례 변환이 아니라 아핀 변환이 되고, 그 +32 하나가 모든 비율 기반 지름길을 무효로 만듭니다.

구체적으로, 20°C는 10°C보다 "두 배 더운" 것이 아닙니다. 둘 다 변환해 보면 착각이 무너집니다. 68°F 대 50°F의 비율은 2가 아니라 1.36이고, 절대 척도인 켈빈(293.15K 대 283.15K)에서 열에너지의 진짜 비율은 겨우 1.035입니다. 온도의 비율은 0이 진짜 0인 켈빈에서만 의미가 있습니다. −273.15°C, 즉 열운동이 없는 상태 — 켈빈에 도(°) 기호를 붙이지 않는 이유이기도 합니다.

오프셋은 온도 '차이'에서도 미묘한 함정을 만듭니다. 10°C의 변화는 18°F의 변화에 해당합니다. 9/5는 곱하되 32는 더하지 않습니다. 두 온도를 빼면 오프셋이 상쇄되기 때문입니다. 일기예보에서 이 둘은 수시로 뒤섞입니다. "내일은 5도 더 따뜻하겠습니다"는 화씨로 9°F이지 41°F가 아닙니다.

빠른 암산 근사로는 섭씨를 두 배 하고 30을 더하세요(25°C → 약 80°F, 정확한 값은 77). 일기예보에는 충분하고 실험실에는 부족한 정밀도입니다.`,
				ja: `長さ、重さ、体積の換算は純粋な掛け算です。メートルが2倍ならフィートも2倍で、ゼロはどの単位でも同じ「無」を意味します。温度は、この論理が崩れる唯一の日常的な量です。摂氏と華氏はゼロ点を共有していないからです。換算式 F = C × 9/5 + 32 にはオフセット項があり、比例変換ではなくアフィン変換になります。あの +32 ひとつが、比率に基づくあらゆる近道を無効にするのです。

具体的には、20℃は10℃の「2倍暑い」わけではありません。両方を換算すれば錯覚は崩れます。68°F対50°Fの比は2ではなく1.36で、絶対尺度のケルビン（293.15K対283.15K）では熱エネルギーの真の比はわずか1.035です。温度の比率が意味を持つのは、ゼロが本当にゼロであるケルビンだけです。−273.15℃、つまり熱運動が存在しない状態 — ケルビンに度（°）の記号を付けない理由でもあります。

オフセットは温度「差」にも微妙な罠を作ります。10℃の変化は18°Fの変化に相当します。9/5は掛けますが、32は足しません。2つの温度を引き算するとオフセットが打ち消し合うからです。天気予報ではこの2つが日常的に混同されます。「明日は5度暖かくなるでしょう」は華氏では9°Fであって、41°Fではありません。

素早い暗算の近似としては、摂氏を2倍して30を足してください（25℃→約80°F、正確には77）。天気予報には十分、実験室には不十分な精度です。`,
				zh: `长度、重量、体积的换算都是纯粹的乘法：米数翻倍，英尺数也翻倍；零在任何单位里都是同样的"无"。温度是日常量中唯一让这套逻辑失效的：摄氏和华氏不共享零点。它们的换算式 F = C × 9/5 + 32 带有一个偏移项，因此是仿射变换而非比例变换——那个 +32 让一切基于比例的捷径统统作废。

具体说：20°C 并不比 10°C "热一倍"。把两者都换算一下，错觉立刻崩塌——68°F 比 50°F，比值是 1.36 而不是 2；而在绝对的开尔文标尺上（293.15 K 比 283.15 K），热能的真实比值仅为 1.035。温度的比值只有在开尔文下才有意义，因为那里的零才是真正的零：−273.15°C，即热运动完全消失之处——这也是开尔文不带度（°）符号的原因。

偏移项还在温度"差"上埋了一个微妙的陷阱。10°C 的变化对应 18°F 的变化——只乘 9/5，不加 32，因为两个温度相减时偏移量互相抵消。天气报道经常搞混这两者："明天升温 5 度"应译成 9°F，而不是 41°F。

想快速心算，把摄氏度翻倍再加 30（25°C → 约 80°F，精确值是 77）——看天气预报够用，进实验室不够。`
			},
			code: {
				example: `Temperatures need the offset:
  37 C  ->  37 x 9/5 + 32 = 66.6 + 32 = 98.6 F

Temperature DIFFERENCES do not:
  a rise of 10 C  ->  10 x 9/5 = 18 F   (no +32!)

Ratios only work in kelvin:
  20 C / 10 C  "= 2x"?   68 F / 50 F = 1.36x
  293.15 K / 283.15 K = 1.035x  <- physical truth

The scales cross at -40:  -40 C = -40 F`
			}
		},
		{
			heading: {
				en: 'Exact by Definition: 25.4 mm, Rounding Drift, and a Lost Mars Probe',
				ko: '정의상 정확한 값 — 25.4mm, 반올림 누적 오차, 그리고 사라진 화성 탐사선',
				ja: '定義上正確な値 — 25.4mm、丸め誤差の蓄積、そして失われた火星探査機',
				zh: '按定义精确：25.4 毫米、舍入漂移与一台失踪的火星探测器'
			},
			body: {
				en: `A surprising number of unit relationships are not measured approximations but exact by international agreement. Since the International Yard and Pound Agreement of 1959, one inch equals 25.4 millimetres exactly, one foot 0.3048 metres exactly, and one pound 453.59237 grams exactly — the trailing digits do not continue; they are the definition. So when a conversion looks "off", the culprit is rounding, not the factor.

Rounding damage compounds when conversions are chained. Convert 10 metres to feet and round to two decimals: 32.81. Convert that back and you get 9.9989 m — a millimetre lost to a single round trip. Do this through three or four unit hops, or in a spreadsheet that truncates each intermediate cell, and errors creep into the visible digits. The professional rule: convert once, directly from source unit to target unit, and round only the final displayed answer. This tool follows that rule internally — full floating-point precision throughout, rounding only at display time (six decimal places).

Silently wrong conversions have real-world stakes. In 1999, NASA's 327-million-dollar Mars Climate Orbiter disintegrated in the Martian atmosphere because a contractor's software reported thruster impulse in pound-force seconds while the navigation team's software expected newton seconds. The trajectory drifted roughly 170 kilometres too low. No conversion is "small" when nobody notices it is wrong.`,
				ko: `놀랄 만큼 많은 단위 관계가 측정된 근삿값이 아니라 국제 협약으로 '정확하게' 정해진 값입니다. 1959년 국제 야드-파운드 협정 이후 1인치는 정확히 25.4밀리미터, 1피트는 정확히 0.3048미터, 1파운드는 정확히 453.59237그램입니다. 뒤에 숫자가 더 이어지지 않습니다. 이것이 정의 그 자체입니다. 따라서 변환 결과가 "이상해" 보인다면 범인은 환산 계수가 아니라 반올림입니다.

반올림 손상은 변환을 연쇄할 때 누적됩니다. 10미터를 피트로 바꿔 소수 둘째 자리로 반올림하면 32.81. 이를 다시 되돌리면 9.9989m — 왕복 한 번에 1밀리미터가 사라집니다. 서너 단계의 단위 환승을 거치거나, 중간 셀마다 값을 자르는 스프레드시트에서 반복하면 오차가 보이는 자리까지 기어 올라옵니다. 전문가의 규칙은 이렇습니다. 원본 단위에서 목표 단위로 한 번에 직접 변환하고, 최종 표시 값만 반올림하라. 이 도구는 내부적으로 이 규칙을 따릅니다. 전 과정에서 부동소수점 정밀도를 유지하고 표시 시점에만 반올림합니다(소수 6자리).

조용히 틀린 변환에는 현실적인 대가가 따릅니다. 1999년, 3억 2,700만 달러짜리 NASA 화성 기후 궤도선은 화성 대기에서 파괴됐습니다. 하청업체의 소프트웨어가 추진기 충격량을 파운드힘·초로 보고했는데 항법팀의 소프트웨어는 뉴턴·초를 기대했기 때문입니다. 궤도는 약 170킬로미터나 낮게 어긋났습니다. 아무도 틀린 줄 모르는 변환에 "사소한" 것은 없습니다.`,
				ja: `驚くほど多くの単位関係が、測定による近似値ではなく、国際協定で「正確に」定められた値です。1959年の国際ヤード・ポンド協定以来、1インチは正確に25.4ミリメートル、1フィートは正確に0.3048メートル、1ポンドは正確に453.59237グラムです。この先に数字は続きません。これが定義そのものです。だから換算結果が「おかしい」と感じたら、犯人は換算係数ではなく丸めです。

丸めの被害は、換算を連鎖させると累積します。10メートルをフィートに換算して小数第2位で丸めると32.81。それを戻すと9.9989m — 一往復で1ミリメートルが消えます。3〜4段階の単位の乗り継ぎや、中間セルごとに値を切り捨てる表計算でこれを繰り返すと、誤差は見える桁まで這い上がってきます。プロの規則はこうです。元の単位から目的の単位へ一度で直接換算し、最終的な表示値だけを丸めること。このツールは内部でこの規則に従っています。全過程で浮動小数点の精度を保ち、表示時にのみ丸めます（小数6桁）。

静かに間違った換算には現実的な代償が伴います。1999年、3億2,700万ドルのNASA火星気候探査機（Mars Climate Orbiter）は火星の大気中で分解しました。請負業者のソフトウェアがスラスタの力積をポンド力・秒で報告したのに、航法チームのソフトウェアはニュートン・秒を想定していたからです。軌道は約170キロメートルも低くずれました。誰も間違いに気づかない換算に「些細なもの」はありません。`,
				zh: `多得惊人的单位关系并非测量出来的近似值，而是国际协议规定的精确值。自 1959 年《国际码磅协定》以来，1 英寸精确等于 25.4 毫米，1 英尺精确等于 0.3048 米，1 磅精确等于 453.59237 克——后面没有更多小数位，这就是定义本身。所以当某个换算结果看起来"不对劲"时，罪魁祸首从来不是换算系数，而是舍入。

舍入的破坏会在链式换算中累积。把 10 米换成英尺并保留两位小数：32.81；再换回来得到 9.9989 米——一个来回就丢了一毫米。若经过三四次单位中转，或在每个中间单元格都截断数值的电子表格里反复进行，误差就会爬进可见的位数。专业规则是：从源单位到目标单位一次性直接换算，只对最终显示的答案舍入。本工具内部正是这样做的——全程保持浮点精度，仅在显示时舍入（六位小数）。

悄无声息的错误换算有真金白银的代价。1999 年，NASA 价值 3.27 亿美元的火星气候探测器在火星大气中解体，原因是承包商的软件用磅力·秒报告推进器冲量，而导航团队的软件预期的是牛顿·秒。轨道低了约 170 公里。当没有人察觉一次换算错了，就没有"小"换算可言。`
			},
			code: {
				example: `Exact by definition (1959 agreement):
  1 inch = 25.4 mm        1 ft = 0.3048 m
  1 lb   = 453.59237 g    (no more digits — that IS the value)

Round-trip drift from premature rounding:
  10 m -> 32.808399 ft -> round to 32.81
  32.81 ft back to metres = 9.99845 m   (1.5 mm lost)

Rule: convert once, round only the final answer.`
			}
		},
		{
			heading: {
				en: 'Cups, Tablespoons, and 2×4s: Where Everyday Conversions Go Wrong',
				ko: '컵, 큰술, 투바이포 — 일상 변환이 어긋나는 지점들',
				ja: 'カップ、大さじ、ツーバイフォー — 日常の換算がずれる場所',
				zh: '量杯、汤匙与 2×4 木方：日常换算的翻车现场'
			},
			body: {
				en: `The conversions most likely to ruin your evening are not scientific — they are culinary and domestic, because kitchen and workshop units carry unlabeled national assumptions.

Start with the cup, the most treacherous unit in cooking. A US customary cup is 236.6 mL, the US "legal" cup used on nutrition labels is 240 mL, the metric cup used in Australia and New Zealand is 250 mL, and a Japanese cup is only 200 mL. Follow an American baking recipe with a Japanese cup and every volume ingredient silently shrinks by 15 percent. Spoons diverge too: a US tablespoon is 14.8 mL, a metric tablespoon 15 mL — harmless — but an Australian tablespoon is 20 mL, a full third larger, which matters for salt, yeast, and baking powder.

The deeper kitchen error is confusing weight ounces with fluid ounces. An ounce of flour (about 28 grams) and a fluid ounce of flour (about 30 mL of volume) are unrelated quantities that happen to share a name. Volume measurement of powders is inherently unstable anyway — a "cup of flour" weighs anywhere from 120 to 150 grams depending on how it is scooped and settled, a ±20 percent swing. This is why serious baking recipes give grams, and why a 10-dollar kitchen scale beats any conversion chart.

The workshop has its own folklore: a "2×4" stud actually measures 1.5 by 3.5 inches (38 × 89 mm) after drying and planing, and oven instructions cross between 180 °C, 350 °F, and UK gas mark 4 as rough equivalents. The universal lesson: a number without a clearly identified unit — and a clearly identified national convention behind it — is not yet information.`,
				ko: `저녁 시간을 망치기 가장 쉬운 변환은 과학이 아니라 요리와 집안일에 있습니다. 부엌과 작업장의 단위에는 표시되지 않은 나라별 전제가 숨어 있기 때문입니다.

요리에서 가장 위험한 단위인 컵부터 봅시다. 미국 관용 컵은 236.6mL, 영양성분표에 쓰이는 미국 '법정' 컵은 240mL, 호주와 뉴질랜드의 미터법 컵은 250mL, 일본 컵은 겨우 200mL입니다. 미국 베이킹 레시피를 일본 컵으로 따라 하면 모든 부피 재료가 조용히 15%씩 줄어듭니다. 숟가락도 갈라집니다. 미국 큰술은 14.8mL, 미터법 큰술은 15mL로 무해하지만, 호주 큰술은 20mL로 3분의 1이나 더 큽니다. 소금, 이스트, 베이킹파우더에서는 치명적인 차이입니다.

부엌에서 더 근본적인 오류는 무게 온스와 액량 온스의 혼동입니다. 밀가루 1온스(약 28그램)와 밀가루 1액량온스(부피 약 30mL)는 이름만 같을 뿐 무관한 양입니다. 애초에 가루의 부피 계량은 본질적으로 불안정합니다. '밀가루 한 컵'은 푸는 방식과 다져진 정도에 따라 120~150그램 사이를 오갑니다. ±20%의 편차입니다. 진지한 베이킹 레시피가 그램을 쓰는 이유이자, 1만 원짜리 주방 저울이 어떤 환산표보다 나은 이유입니다.

작업장에도 고유한 전설이 있습니다. '투바이포(2×4)' 각재의 실제 치수는 건조와 대패질을 거친 1.5×3.5인치(38×89mm)입니다. 그리고 오븐 온도는 180°C, 350°F, 영국 가스 마크 4가 대략적 등가로 통용됩니다. 보편적인 교훈: 단위가 — 그리고 그 뒤의 국가별 관례가 — 명확히 밝혀지지 않은 숫자는 아직 정보가 아닙니다.`,
				ja: `夜を台無しにしやすい換算は科学の世界ではなく、料理と家庭の世界にあります。台所と作業場の単位には、表示されない国ごとの前提が潜んでいるからです。

料理で最も危険な単位、カップから始めましょう。米国慣用カップは236.6mL、栄養成分表示に使う米国の「法定」カップは240mL、オーストラリアとニュージーランドのメートル法カップは250mL、そして日本のカップはわずか200mLです。アメリカの製菓レシピを日本のカップで再現すると、体積で量る材料がすべて15％ずつ静かに目減りします。スプーンも分岐します。米国の大さじは14.8mL、メートル法の大さじは15mLで実害はありませんが、オーストラリアの大さじは20mLと3分の1も大きく、塩、イースト、ベーキングパウダーでは決定的な差になります。

台所でのより根深い誤りは、重さのオンスと液量オンスの混同です。小麦粉1オンス（約28グラム）と小麦粉1液量オンス（体積約30mL）は、名前が同じだけの無関係な量です。そもそも粉類の体積計量は本質的に不安定です。「小麦粉1カップ」は、すくい方と詰まり具合によって120〜150グラムの間を揺れ動きます。±20％の振れ幅です。本格的な製菓レシピがグラム表記を使う理由であり、1,500円のキッチンスケールがどんな換算表にも勝る理由です。

作業場には作業場の伝承があります。「ツーバイフォー（2×4）」材の実寸は、乾燥と鉋がけを経た1.5×3.5インチ（38×89mm）です。そしてオーブンの温度は180℃、350°F、英国のガスマーク4がおおよその等価として行き来します。普遍的な教訓：単位が — そしてその背後の国ごとの慣例が — 明確に特定されていない数字は、まだ情報ではありません。`,
				zh: `最容易毁掉你一个晚上的换算不在科学领域，而在厨房和家居领域——因为厨房与工坊的单位背后藏着未标明的国别假设。

从烹饪中最险恶的单位——量杯说起。美国惯用杯是 236.6 毫升，营养标签上的美国"法定"杯是 240 毫升，澳大利亚和新西兰的公制杯是 250 毫升，而日本的量杯只有 200 毫升。用日本量杯照做美式烘焙配方，所有按体积计量的原料都会悄悄缩水 15%。勺子也各行其是：美制汤匙 14.8 毫升，公制汤匙 15 毫升——无伤大雅——但澳大利亚汤匙是 20 毫升，整整大了三分之一，对盐、酵母和泡打粉来说事关成败。

厨房里更深层的错误是把重量盎司和液量盎司混为一谈。一盎司面粉（约 28 克）和一液量盎司面粉（约 30 毫升体积）是碰巧同名的两个不相干的量。粉类的体积计量本来就不稳定——"一杯面粉"依据舀取和沉实程度，重量在 120 到 150 克之间浮动，误差达 ±20%。这就是严肃的烘焙配方都给克数的原因，也是一台几十块钱的厨房秤胜过任何换算表的原因。

工坊里也有自己的都市传说："2×4"木方经干燥刨光后实际尺寸是 1.5×3.5 英寸（38×89 毫米）；而烤箱温度在 180°C、350°F 和英国燃气档位 4 之间大致互通。放之四海皆准的教训：一个没有明确标注单位——以及单位背后国别惯例——的数字，还算不上信息。`
			},
			code: {
				example: `"One cup" is not one thing:
  US customary 236.6 mL | US legal 240 mL
  metric (AU/NZ) 250 mL | Japan 200 mL | rice go 180 mL

Tablespoons: US 14.8 mL | metric 15 mL | Australia 20 mL

Flour trap (volume vs weight):
  1 cup of flour = 120-150 g depending on packing (+/-20%)
  1 oz (weight) = 28.35 g  !=  1 fl oz (volume) = 29.57 mL

Oven equivalents: 180 C ~ 350 F ~ gas mark 4
Lumber: a "2x4" actually measures 1.5 x 3.5 inches`
			}
		}
	];

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	type UnitCategory = 'length' | 'weight' | 'temperature';

	let category: UnitCategory = 'length';
	let fromValue = 1;
	let fromUnit = 'm';
	let toUnit = 'ft';

	const units: Record<UnitCategory, { value: string; label: string; toBase: (v: number) => number; fromBase: (v: number) => number }[]> = {
		length: [
			{ value: 'mm', label: 'mm', toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
			{ value: 'cm', label: 'cm', toBase: (v) => v / 100, fromBase: (v) => v * 100 },
			{ value: 'm', label: 'm', toBase: (v) => v, fromBase: (v) => v },
			{ value: 'km', label: 'km', toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
			{ value: 'in', label: 'inch', toBase: (v) => v * 0.0254, fromBase: (v) => v / 0.0254 },
			{ value: 'ft', label: 'feet', toBase: (v) => v * 0.3048, fromBase: (v) => v / 0.3048 },
			{ value: 'yd', label: 'yard', toBase: (v) => v * 0.9144, fromBase: (v) => v / 0.9144 },
			{ value: 'mi', label: 'mile', toBase: (v) => v * 1609.344, fromBase: (v) => v / 1609.344 }
		],
		weight: [
			{ value: 'mg', label: 'mg', toBase: (v) => v / 1000000, fromBase: (v) => v * 1000000 },
			{ value: 'g', label: 'g', toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
			{ value: 'kg', label: 'kg', toBase: (v) => v, fromBase: (v) => v },
			{ value: 't', label: 'ton', toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
			{ value: 'oz', label: 'oz', toBase: (v) => v * 0.0283495, fromBase: (v) => v / 0.0283495 },
			{ value: 'lb', label: 'lb', toBase: (v) => v * 0.453592, fromBase: (v) => v / 0.453592 }
		],
		temperature: [
			{ value: 'c', label: 'Celsius', toBase: (v) => v, fromBase: (v) => v },
			{ value: 'f', label: 'Fahrenheit', toBase: (v) => (v - 32) * 5/9, fromBase: (v) => v * 9/5 + 32 },
			{ value: 'k', label: 'Kelvin', toBase: (v) => v - 273.15, fromBase: (v) => v + 273.15 }
		]
	};

	$: currentUnits = units[category];

	$: {
		if (category === 'length') {
			fromUnit = 'm';
			toUnit = 'ft';
		} else if (category === 'weight') {
			fromUnit = 'kg';
			toUnit = 'lb';
		} else {
			fromUnit = 'c';
			toUnit = 'f';
		}
	}

	$: convertedValue = convert(fromValue, fromUnit, toUnit);

	function convert(value: number, from: string, to: string): number {
		const fromUnitDef = currentUnits.find(u => u.value === from);
		const toUnitDef = currentUnits.find(u => u.value === to);
		if (!fromUnitDef || !toUnitDef) return 0;
		const baseValue = fromUnitDef.toBase(value);
		return toUnitDef.fromBase(baseValue);
	}

	function swapUnits() {
		const temp = fromUnit;
		fromUnit = toUnit;
		toUnit = temp;
	}

	function formatNumber(num: number): string {
		if (Math.abs(num) < 0.0001 || Math.abs(num) >= 1000000) {
			return num.toExponential(4);
		}
		return num.toLocaleString(undefined, { maximumFractionDigits: 6 });
	}
</script>

<svelte:head>
	<title>{t('unit.title')} - SD.gy</title>
	<meta name="description" content={t('unit.desc')} />
	<link rel="canonical" href="https://sd.gy/{lang}/unit-converter" />
	<meta property="og:title" content="{t('unit.title')} - SD.gy" />
	<meta property="og:description" content={t('unit.desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/unit-converter" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('unit.title')} - SD.gy" />
	<meta name="twitter:description" content={t('unit.desc')} />
</svelte:head>

<div class="max-w-2xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('unit.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('unit.desc')}</p>
	</div>

	<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
		<!-- Category Tabs -->
		<div class="flex gap-2 mb-6">
			<button
				on:click={() => category = 'length'}
				class="flex-1 py-2 px-4 rounded-lg font-medium transition-colors {category === 'length' ? 'bg-violet-500 text-white' : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
			>
				{t('unit.length')}
			</button>
			<button
				on:click={() => category = 'weight'}
				class="flex-1 py-2 px-4 rounded-lg font-medium transition-colors {category === 'weight' ? 'bg-violet-500 text-white' : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
			>
				{t('unit.weight')}
			</button>
			<button
				on:click={() => category = 'temperature'}
				class="flex-1 py-2 px-4 rounded-lg font-medium transition-colors {category === 'temperature' ? 'bg-violet-500 text-white' : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
			>
				{t('unit.temperature')}
			</button>
		</div>

		<!-- From -->
		<div class="mb-4">
			<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('unit.from')}</label>
			<div class="flex gap-2">
				<input
					type="number"
					bind:value={fromValue}
					class="flex-1 px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
				/>
				<select
					bind:value={fromUnit}
					class="px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
				>
					{#each currentUnits as unit}
						<option value={unit.value}>{unit.label}</option>
					{/each}
				</select>
			</div>
		</div>

		<!-- Swap Button -->
		<div class="flex justify-center my-4">
			<button
				on:click={swapUnits}
				class="p-3 bg-gray-100 dark:bg-dark-700 rounded-full hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
				aria-label={t('unit.swap')}
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600 dark:text-dark-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
				</svg>
			</button>
		</div>

		<!-- To -->
		<div>
			<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('unit.to')}</label>
			<div class="flex gap-2">
				<div class="flex-1 px-4 py-3 bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl text-xl font-bold text-violet-600 dark:text-violet-400">
					{formatNumber(convertedValue)}
				</div>
				<select
					bind:value={toUnit}
					class="px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
				>
					{#each currentUnits as unit}
						<option value={unit.value}>{unit.label}</option>
					{/each}
				</select>
			</div>
		</div>

		<!-- Conversion Formula -->
		<div class="mt-6 p-4 bg-gray-50 dark:bg-dark-700 rounded-xl text-center">
			<span class="text-gray-600 dark:text-dark-400">
				{fromValue} {currentUnits.find(u => u.value === fromUnit)?.label} = {formatNumber(convertedValue)} {currentUnits.find(u => u.value === toUnit)?.label}
			</span>
		</div>
	</div>

	<ToolGuide {lang} sections={guideSections} />
</div>
