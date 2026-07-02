<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'Mifflin-St Jeor vs Harris-Benedict: The Actual Equations',
				ko: 'Mifflin-St Jeor vs Harris-Benedict — 실제 공식 비교',
				ja: 'ミフリン・セントジョー式 vs ハリス・ベネディクト式 — 実際の数式',
				zh: 'Mifflin-St Jeor 与 Harris-Benedict：公式实拆'
			},
			body: {
				en: `Every calorie calculator starts from a basal metabolic rate (BMR) equation, and the choice of equation changes the answer by meaningful amounts. This tool uses Mifflin-St Jeor, published in 1990 from measurements of 498 adults: for men, BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age + 5; for women the final constant is −161 instead of +5. The American Dietetic Association's 2005 systematic review compared the popular equations against measured resting metabolism and found Mifflin-St Jeor predicted within 10% of the true value more often than any rival, which is why it has become the clinical default.

The older alternative you will still meet everywhere is Harris-Benedict, derived in 1919 from a small early-20th-century cohort and revised by Roza and Shizgal in 1984. The revised male form is BMR = 88.362 + 13.397 × weight + 4.799 × height − 5.677 × age; the female form is 447.593 + 9.247 × weight + 3.098 × height − 4.330 × age. Harris-Benedict tends to overestimate modern sedentary adults by roughly 5%, partly because its reference population was leaner and more active.

For the same 30-year-old, 175 cm, 70 kg man, Mifflin-St Jeor gives 1,649 kcal and revised Harris-Benedict gives 1,696 kcal — a 47 kcal/day spread that compounds to about 17,000 kcal per year. A third formula, Katch-McArdle (370 + 21.6 × lean mass in kg), ignores total weight entirely and is the better choice if you know your body-fat percentage from a DEXA or InBody scan, especially for very muscular or very lean people whom weight-based formulas misjudge.`,
				ko: `모든 칼로리 계산기는 기초대사량(BMR) 공식에서 출발하며, 어떤 공식을 고르느냐에 따라 결과가 의미 있게 달라집니다. 이 도구는 1990년 성인 498명의 측정으로 발표된 Mifflin-St Jeor 공식을 사용합니다. 남성은 BMR = 10 × 체중(kg) + 6.25 × 키(cm) − 5 × 나이 + 5이고, 여성은 마지막 상수가 +5 대신 −161입니다. 미국영양사협회(ADA)의 2005년 체계적 문헌고찰이 유명 공식들을 실측 안정시대사량과 비교했는데, Mifflin-St Jeor가 참값의 10% 이내로 예측하는 빈도가 가장 높았습니다. 임상 기본값이 된 이유입니다.

여전히 곳곳에서 만나게 되는 더 오래된 대안은 Harris-Benedict입니다. 1919년 20세기 초의 소규모 집단에서 도출되었고 1984년 Roza와 Shizgal이 수정했습니다. 수정판 남성 공식은 BMR = 88.362 + 13.397 × 체중 + 4.799 × 키 − 5.677 × 나이, 여성 공식은 447.593 + 9.247 × 체중 + 3.098 × 키 − 4.330 × 나이입니다. Harris-Benedict는 현대의 좌식 생활 성인을 약 5% 과대평가하는 경향이 있는데, 기준 집단이 더 마르고 활동적이었던 것이 한 원인입니다.

같은 30세, 175cm, 70kg 남성에 대해 Mifflin-St Jeor는 1,649kcal, 수정 Harris-Benedict는 1,696kcal을 내놓습니다. 하루 47kcal 차이는 1년이면 약 17,000kcal로 불어납니다. 세 번째 공식인 Katch-McArdle(370 + 21.6 × 제지방량 kg)은 총 체중을 아예 무시하므로, DEXA나 인바디로 체지방률을 아는 경우, 특히 체중 기반 공식이 잘못 판단하는 아주 근육질이거나 아주 마른 사람에게 더 나은 선택입니다.`,
				ja: `どのカロリー計算機も基礎代謝量（BMR）の数式から出発し、どの式を選ぶかで結果は無視できないほど変わります。このツールは1990年に成人498人の測定から発表されたミフリン・セントジョー式を使います。男性は BMR = 10 × 体重(kg) + 6.25 × 身長(cm) − 5 × 年齢 + 5、女性は最後の定数が +5 ではなく −161 です。米国栄養士会（ADA）の2005年の系統的レビューが主要な式を実測の安静時代謝と比較したところ、ミフリン・セントジョー式が真の値の10％以内に収まる頻度が最も高く、これが臨床の標準になった理由です。

今もあちこちで見かける古い代替はハリス・ベネディクト式です。1919年に20世紀初頭の小規模な集団から導かれ、1984年にRozaとShizgalが改訂しました。改訂版の男性式は BMR = 88.362 + 13.397 × 体重 + 4.799 × 身長 − 5.677 × 年齢、女性式は 447.593 + 9.247 × 体重 + 3.098 × 身長 − 4.330 × 年齢 です。ハリス・ベネディクト式は現代の座りがちな成人を約5％過大評価する傾向があり、基準集団がより痩せて活動的だったことが一因です。

同じ30歳・175cm・70kgの男性で、ミフリン・セントジョー式は1,649kcal、改訂ハリス・ベネディクト式は1,696kcalを返します。1日47kcalの差は1年で約17,000kcalに膨らみます。第3の式であるカッチ・マカードル式（370 + 21.6 × 除脂肪体重kg）は総体重を完全に無視するため、DEXAやInBodyで体脂肪率が分かっている場合、特に体重ベースの式が誤りやすい筋肉質の人や非常に痩せた人には、より良い選択です。`,
				zh: `每个卡路里计算器都从基础代谢率（BMR）公式出发，公式的选择会让结果产生不小的差异。本工具采用1990年基于498名成人测量数据发表的Mifflin-St Jeor公式：男性 BMR = 10 × 体重(kg) + 6.25 × 身高(cm) − 5 × 年龄 + 5；女性末尾常数为 −161 而非 +5。美国营养师协会2005年的系统综述将各流行公式与实测静息代谢对比，发现Mifflin-St Jeor落在真实值±10%以内的频率高于所有对手——这正是它成为临床默认公式的原因。

你仍会到处遇到的老牌替代品是Harris-Benedict公式，1919年从20世纪初的小样本推导而来，1984年经Roza和Shizgal修订。修订版男性公式为 BMR = 88.362 + 13.397 × 体重 + 4.799 × 身高 − 5.677 × 年龄；女性公式为 447.593 + 9.247 × 体重 + 3.098 × 身高 − 4.330 × 年龄。Harris-Benedict对现代久坐成人往往高估约5%，部分原因是其参照人群更瘦、更好动。

同一位30岁、175cm、70kg的男性，Mifflin-St Jeor给出1,649千卡，修订版Harris-Benedict给出1,696千卡——每天47千卡的差距，一年累计约17,000千卡。第三个公式Katch-McArdle（370 + 21.6 × 瘦体重kg）完全不看总体重；如果你通过DEXA或InBody知道自己的体脂率，尤其是体重公式容易误判的极健壮或极瘦人群，它是更好的选择。`
			},
			code: {
				example: `Male, 30 years, 175 cm, 70 kg

Mifflin-St Jeor:
  10 x 70          =  700.00
  + 6.25 x 175     = 1093.75
  - 5 x 30         = -150.00
  + 5              =    5.00
  BMR              = 1648.75  ->  ~1649 kcal/day

Harris-Benedict (1984 revision):
  88.362 + 13.397 x 70 + 4.799 x 175 - 5.677 x 30
  = 88.362 + 937.79 + 839.825 - 170.31
  = 1695.67        ->  ~1696 kcal/day  (+47 vs MSJ)`
			}
		},
		{
			heading: {
				en: 'Activity Multipliers: Where Most Estimates Go Wrong',
				ko: '활동 계수 — 대부분의 추정이 틀어지는 지점',
				ja: '活動係数 — 多くの推定が狂うポイント',
				zh: '活动系数：大多数估算出错的地方'
			},
			body: {
				en: `BMR is only what your body burns lying still; total daily energy expenditure (TDEE) multiplies it by an activity factor. The standard ladder — 1.2 sedentary, 1.375 lightly active (1–3 workouts/week), 1.55 moderately active (3–5), 1.725 very active (6–7), 1.9 for physical jobs plus training — descends from mid-20th-century nutrition research and FAO/WHO energy requirement reports. The single most common mistake is grading yourself one rung too high: an office worker who lifts weights three evenings a week feels "very active" but arithmetically lands at 1.375–1.55, because 45 minutes of exercise cannot outweigh 15 sedentary waking hours. When in doubt, pick the lower factor, run it for three or four weeks, and let the scale arbitrate.

The wildcard the multipliers compress is NEAT — non-exercise activity thermogenesis, the energy of walking, standing, fidgeting, and household work. Research by James Levine at the Mayo Clinic showed NEAT can differ by many hundreds of kilocalories per day between two people with identical BMR and gym habits, which is why a delivery courier and a programmer of the same size need genuinely different multipliers, not the same "moderate" label.

Be equally skeptical of gadget numbers: a 2017 Stanford evaluation of seven consumer wrist wearables found heart-rate tracking respectable but energy-expenditure estimates off by 27% to 93%. Using the example from the previous section, a 1,649 kcal BMR at the 1.55 multiplier yields a TDEE near 2,556 kcal — that number is a starting hypothesis to test against real-world weight change, not a verdict.`,
				ko: `BMR은 가만히 누워만 있을 때 태우는 열량일 뿐이고, 하루 총 에너지 소비량(TDEE)은 여기에 활동 계수를 곱해 구합니다. 표준 사다리 — 좌식 1.2, 가벼운 활동(주 1~3회 운동) 1.375, 보통 활동(주 3~5회) 1.55, 높은 활동(주 6~7회) 1.725, 육체노동에 훈련까지 하면 1.9 — 는 20세기 중반 영양학 연구와 FAO/WHO 에너지 필요량 보고서에서 내려온 것입니다. 가장 흔한 실수는 자신을 한 단계 높게 매기는 것입니다. 주 3회 저녁에 웨이트를 하는 사무직은 스스로 "활동량 많음"이라고 느끼지만, 45분의 운동이 깨어 있는 15시간의 좌식 생활을 이길 수 없으므로 산술적으로는 1.375~1.55에 해당합니다. 애매하면 낮은 계수를 골라 3~4주 돌려 보고 체중계가 판정하게 하세요.

활동 계수가 뭉뚱그리는 변수가 NEAT — 비운동성 활동 열생성, 즉 걷기, 서 있기, 꼼지락거림, 집안일의 에너지 — 입니다. 메이오 클리닉 James Levine의 연구는 BMR과 운동 습관이 동일한 두 사람 사이에서도 NEAT가 하루 수백 kcal씩 차이 날 수 있음을 보여 줬습니다. 체격이 같은 배달 기사와 프로그래머에게 같은 "보통" 딱지가 아니라 정말로 다른 계수가 필요한 이유입니다.

기기가 주는 숫자도 똑같이 의심하세요. 2017년 스탠퍼드의 소비자용 손목 웨어러블 7종 평가에서 심박수 추적은 준수했지만 에너지 소비 추정은 27~93%나 빗나갔습니다. 앞 절의 예를 이어 가면, BMR 1,649kcal에 계수 1.55를 곱한 TDEE는 약 2,556kcal입니다. 이 숫자는 실제 체중 변화로 검증할 출발 가설이지 판결이 아닙니다.`,
				ja: `BMRはじっと横になっているときに燃える熱量にすぎず、1日の総エネルギー消費量（TDEE）はこれに活動係数を掛けて求めます。標準のはしご — 座りがち1.2、軽い活動（週1〜3回運動）1.375、中程度（週3〜5回）1.55、高活動（週6〜7回）1.725、肉体労働＋トレーニングで1.9 — は20世紀半ばの栄養学研究とFAO/WHOのエネルギー必要量報告に由来します。最も多い間違いは自分を1段高く評価することです。週3回夜にウェイトをする会社員は「かなり活動的」と感じますが、45分の運動は起きている15時間の座位生活に勝てないため、計算上は1.375〜1.55に収まります。迷ったら低い方の係数を選び、3〜4週間続けて体重計に判定させましょう。

活動係数が押しつぶしている変数がNEAT — 非運動性活動熱産生、つまり歩行・立位・そわそわした動き・家事のエネルギー — です。メイヨークリニックのJames Levineの研究は、BMRと運動習慣が同じ2人の間でもNEATが1日数百kcal違いうることを示しました。同じ体格の配達員とプログラマーに同じ「中程度」のラベルではなく、本当に異なる係数が必要な理由です。

ガジェットの数字も同様に疑ってください。2017年のスタンフォード大学による民生用リストバンド7種の評価では、心拍計測はまずまずでしたが、エネルギー消費の推定は27〜93％も外れていました。前節の例を続けると、BMR 1,649kcalに係数1.55を掛けたTDEEは約2,556kcalです。この数字は実際の体重変化で検証すべき出発点の仮説であって、判決ではありません。`,
				zh: `BMR只是静卧时消耗的热量；每日总能量消耗（TDEE）要在其上乘一个活动系数。标准阶梯——久坐1.2，轻度活动（每周锻炼1–3次）1.375，中度（3–5次）1.55，高度（6–7次）1.725，体力劳动加训练1.9——源自20世纪中叶的营养学研究和FAO/WHO能量需求报告。最常见的错误是把自己高估一档：每周三晚撸铁的上班族自我感觉"非常活跃"，但45分钟的锻炼抵不过清醒时15个小时的久坐，算下来只在1.375–1.55之间。拿不准时选较低的系数，执行三四周，让体重秤来裁决。

活动系数掩盖的最大变量是NEAT——非运动性活动产热，即走路、站立、小动作和家务的能量。梅奥诊所James Levine的研究表明，即使两个人BMR和健身习惯完全相同，NEAT每天也可能相差数百千卡。这就是为什么体型相同的外卖骑手和程序员需要的是真正不同的系数，而不是同一个"中度"标签。

对设备给出的数字同样要保持怀疑：2017年斯坦福对七款消费级手环的评测发现，心率监测尚可，但能量消耗估算偏差达27%到93%。接着上一节的例子：1,649千卡的BMR乘以1.55系数，TDEE约为2,556千卡——这个数字是有待用真实体重变化检验的初始假设，不是最终裁定。`
			}
		},
		{
			heading: {
				en: 'The 3,500-Calorie Rule and Its Limits',
				ko: '3,500kcal 법칙과 그 한계',
				ja: '「3,500kcal＝0.45kg」ルールとその限界',
				zh: '3500千卡法则及其局限'
			},
			body: {
				en: `The weight-loss and weight-gain targets above apply a plus-or-minus 500 kcal adjustment, which comes from the famous rule that one pound (0.45 kg) of body fat stores about 3,500 kcal: a 500 kcal daily deficit should therefore melt one pound per week. The rule traces to a 1958 paper by Max Wishnofsky, and it is approximately right — but only for the first weeks, and only on average.

Two effects bend the line. First, the initial drop is exaggerated by water: each gram of stored glycogen binds roughly 3 grams of water, so depleting carbohydrate stores in week one can shed a fast kilogram that is not fat and returns just as fast. Second, metabolic adaptation kicks in: as you lose weight, a smaller body burns less, and the body additionally down-regulates beyond what the size change predicts. The famous 2016 follow-up study of "The Biggest Loser" contestants found their resting metabolism about 500 kcal/day below expectation six years after the show. A static 500-kcal deficit therefore produces a decelerating curve, not a straight line — which is why the US NIH built its Body Weight Planner around a dynamic model instead.

Sensible pacing guidelines: aim to lose no more than 0.5–1% of body weight per week, avoid eating chronically below your calculated BMR, and prioritize protein (commonly cited targets run around 1.2–1.6 g per kg of body weight during a deficit) to protect muscle. If progress stalls for three or more weeks, recalculate — your BMR is now that of a lighter person — rather than slashing further.`,
				ko: `위의 감량·증량 목표는 ±500kcal 조정을 적용한 값입니다. 이는 체지방 1파운드(0.45kg)에 약 3,500kcal이 저장되어 있으므로 하루 500kcal 결손이면 주당 1파운드가 빠진다는 유명한 법칙에서 나왔습니다. 이 법칙은 1958년 Max Wishnofsky의 논문으로 거슬러 올라가며, 대략은 맞습니다. 단, 첫 몇 주 동안, 그리고 평균적으로만 그렇습니다.

두 가지 효과가 이 직선을 구부립니다. 첫째, 초반 감량은 수분 때문에 과장됩니다. 저장 글리코겐 1g은 약 3g의 물과 결합하므로, 첫 주에 탄수화물 저장고가 비면 지방이 아닌 1kg이 빠르게 빠졌다가 그만큼 빠르게 돌아옵니다. 둘째, 대사 적응이 시작됩니다. 체중이 줄면 작아진 몸이 덜 태우는 데다, 몸은 체격 변화로 예측되는 것 이상으로 대사를 추가로 낮춥니다. 2016년 미국 TV 프로그램 "The Biggest Loser" 참가자 추적 연구는 방송 6년 뒤에도 안정시대사량이 예상보다 하루 약 500kcal 낮았다고 보고했습니다. 그래서 고정된 500kcal 결손은 직선이 아니라 점점 느려지는 곡선을 만들고, 미국 NIH가 정적 법칙 대신 동적 모델 기반의 Body Weight Planner를 만든 이유이기도 합니다.

합리적인 속도 지침은 이렇습니다. 주당 체중의 0.5~1% 이상 감량하지 않기, 계산된 BMR보다 낮게 만성적으로 먹지 않기, 근육 보호를 위해 단백질 우선하기(감량기에는 체중 1kg당 1.2~1.6g이 흔히 인용되는 목표입니다). 3주 이상 정체되면 더 줄이는 대신 다시 계산하세요. 지금의 BMR은 더 가벼워진 사람의 것입니다.`,
				ja: `上の減量・増量目標は±500kcalの調整を適用した値です。これは体脂肪1ポンド（0.45kg）には約3,500kcalが蓄えられているため、1日500kcalの赤字なら週に1ポンド減るはずだという有名なルールに由来します。このルールは1958年のMax Wishnofskyの論文にさかのぼり、おおよそは正しいのですが、最初の数週間だけ、しかも平均としてだけです。

2つの効果がこの直線を曲げます。第一に、序盤の減少は水分で誇張されます。貯蔵グリコーゲン1gは約3gの水と結合するため、最初の週に炭水化物の貯蔵が枯渇すると、脂肪ではない1kgが素早く落ち、同じ速さで戻ってきます。第二に、代謝適応が始まります。体重が減れば小さくなった体は消費が減るうえ、体はサイズ変化から予測される以上に代謝をさらに下げます。2016年の米TV番組「The Biggest Loser」出場者の追跡研究では、放送から6年後も安静時代謝が予測より1日約500kcal低いままでした。固定500kcalの赤字は直線ではなく減速する曲線を生むわけで、米NIHが静的なルールの代わりに動的モデルに基づくBody Weight Plannerを作ったのもこのためです。

現実的なペースの目安は次のとおりです。週に体重の0.5〜1％を超えて減らさない、計算上のBMRを慢性的に下回る食事をしない、筋肉を守るためにタンパク質を優先する（減量中は体重1kgあたり1.2〜1.6gがよく引用される目標です）。3週間以上停滞したら、さらに削るのではなく再計算を。今のBMRはより軽くなった人のものだからです。`,
				zh: `上方的减重/增重目标采用了±500千卡的调整，出处是那个著名法则：一磅（0.45kg）体脂约储存3500千卡，因此每天500千卡的缺口应当每周减掉一磅。该法则可追溯到Max Wishnofsky在1958年的论文，大体上没错——但只在最初几周成立，而且只是平均而言。

有两个效应会让这条直线弯曲。其一，初期的下降被水分夸大了：每克糖原约结合3克水，第一周耗尽碳水储备可以快速掉一公斤——但那不是脂肪，回来得也一样快。其二，代谢适应开始发挥作用：体重下降后，变小的身体消耗更少，而且身体还会在体型变化的预测值之外进一步下调代谢。2016年对美国真人秀"The Biggest Loser"选手的著名追踪研究发现，节目结束六年后，他们的静息代谢仍比预期低约500千卡/天。固定的500千卡缺口画出的是一条不断减速的曲线而非直线——这也是美国NIH改用动态模型开发Body Weight Planner的原因。

合理的节奏参考：每周减重不超过体重的0.5%–1%；不要长期吃得低于计算出的BMR；优先保证蛋白质（减脂期常见的推荐量约为每公斤体重1.2–1.6克）以保住肌肉。若三周以上停滞，与其继续砍热量，不如重新计算——你现在的BMR已经是一个更轻的人的了。`
			},
			code: {
				example: `TDEE 2556 kcal, target: lose ~0.5 kg/week

  Deficit:   2556 - 500 = 2056 kcal/day
  Weekly:    500 x 7    = 3500 kcal  ~  0.45 kg of fat

Reality check over 12 weeks (why the line bends):
  Week 1 : -1.4 kg  (fat + glycogen water, feels amazing)
  Week 4 : -0.5 kg  (mostly fat, on script)
  Week 12: -0.3 kg  (lighter body + adaptation burns less)
  Fix    : recalculate BMR at the new weight, adjust deficit`
			}
		},
		{
			heading: {
				en: 'Accuracy, Tracking Error, and When to See a Professional',
				ko: '정확도, 기록 오차, 그리고 전문가를 찾아야 할 때',
				ja: '精度・記録誤差・専門家に相談すべきとき',
				zh: '准确度、记录误差与何时求助专业人士'
			},
			body: {
				en: `Every number in this pipeline carries error, and the errors stack. The BMR equation itself is ±10% for most people, so a displayed 1,649 kcal legitimately spans roughly 1,480 to 1,810. Food labels add more: US FDA rules tolerate up to 20% deviation in stated calories, restaurant portions vary batch to batch, and dietary-intake research consistently finds people under-report what they eat — commonly by 20–30%, more among heavier participants. Stack a 10% formula error on a 20% logging error and honest-looking arithmetic can be off by several hundred kilocalories a day.

The productive response is not more decimal places but better feedback loops. Weigh yourself under consistent conditions (same time of day, same clothing state), average over a week to smooth water noise, and compare the trend against your target; adjust intake in 100–200 kcal steps every few weeks rather than lurching. Recalculate here after every 4–5 kg of change, and when your training volume or job activity shifts.

Some situations belong with professionals rather than calculators. If you are pregnant or breastfeeding, under 18, over 65, managing diabetes, thyroid disease, or another metabolic condition, or have any history of disordered eating, generic TDEE arithmetic can be misleading or actively harmful. The figures on this page are population-level estimates for general information — they are not medical or nutritional advice, and a physician or registered dietitian can tailor targets to blood work, medication, and history in a way no formula can.`,
				ko: `이 계산 과정의 모든 숫자에는 오차가 있고, 오차는 겹겹이 쌓입니다. BMR 공식 자체가 대부분의 사람에게 ±10%이므로, 표시된 1,649kcal은 사실상 약 1,480~1,810kcal 범위입니다. 식품 라벨이 오차를 더합니다. 미국 FDA 규정은 표기 열량의 최대 20% 편차를 허용하고, 식당 음식은 조리 회차마다 다르며, 식이 섭취 연구들은 사람들이 먹는 양을 일관되게 20~30% 정도, 체중이 많이 나가는 참가자일수록 더 많이 축소 보고한다는 것을 반복해서 확인했습니다. 공식의 10% 오차 위에 기록의 20% 오차가 얹히면, 정직해 보이는 계산도 하루 수백 kcal씩 어긋날 수 있습니다.

생산적인 대응은 소수점을 늘리는 게 아니라 피드백 루프를 개선하는 것입니다. 일정한 조건(같은 시각, 같은 복장 상태)에서 체중을 재고, 수분 노이즈를 걸러내기 위해 주 단위 평균을 내고, 그 추세를 목표와 비교하세요. 섭취량은 몇 주 간격으로 100~200kcal씩 조정하고 급격히 바꾸지 마세요. 체중이 4~5kg 변할 때마다, 그리고 훈련량이나 직업 활동이 바뀔 때마다 여기서 다시 계산하세요.

계산기가 아니라 전문가에게 맡겨야 할 상황도 있습니다. 임신·수유 중이거나, 18세 미만이나 65세 초과, 당뇨병·갑상샘 질환 등 대사 질환을 관리 중이거나, 섭식장애 병력이 있다면 일반적인 TDEE 산술은 오해를 부르거나 실제로 해로울 수 있습니다. 이 페이지의 수치는 일반 정보 제공을 위한 인구 수준의 추정치이며 의학적·영양학적 조언이 아닙니다. 의사나 임상영양사는 혈액검사, 복용 약, 병력에 맞춰 어떤 공식도 할 수 없는 방식으로 목표를 조정해 줄 수 있습니다.`,
				ja: `この計算過程のすべての数字には誤差があり、誤差は積み重なります。BMRの数式自体がほとんどの人で±10％なので、表示された1,649kcalは実質的におよそ1,480〜1,810kcalの幅を持ちます。食品表示が誤差を上乗せします。米FDAの規則は表示カロリーの最大20％の偏差を許容し、外食の量は作るたびに変わり、食事摂取の研究では人は食べた量を一貫して20〜30％ほど、体重の重い参加者ほど大きく過少申告することが繰り返し確認されています。数式の10％の誤差に記録の20％の誤差が重なれば、正直に見える計算でも1日数百kcalずれえます。

生産的な対応は小数点を増やすことではなく、フィードバックループを良くすることです。一定の条件（同じ時刻、同じ服装状態）で体重を測り、水分のノイズをならすために週単位で平均し、その傾向を目標と比較しましょう。摂取量の調整は数週間ごとに100〜200kcalずつにとどめ、急激に変えないこと。体重が4〜5kg変わるたび、またトレーニング量や仕事の活動量が変わったときは、ここで再計算してください。

計算機ではなく専門家に任せるべき状況もあります。妊娠中・授乳中、18歳未満、65歳超、糖尿病や甲状腺疾患などの代謝性疾患を管理中、あるいは摂食障害の既往がある場合、一般的なTDEEの算術は誤解を招いたり、実際に有害になったりしえます。このページの数値は一般的な情報提供のための集団レベルの推定値であり、医学的・栄養学的助言ではありません。医師や管理栄養士は血液検査・服薬・既往歴に合わせて、どんな数式にもできない形で目標を調整してくれます。`,
				zh: `这条计算链上的每个数字都带着误差，而且误差会叠加。BMR公式本身对多数人有±10%的误差，所以显示的1,649千卡实际上覆盖约1,480到1,810千卡。食品标签再添一层：美国FDA规则允许标示热量偏差最多20%，餐馆出品每批不同，膳食摄入研究也一再发现人们会系统性少报进食量——通常少报20–30%，体重较大的参与者偏差更大。公式的10%误差叠加记录的20%误差，看似严谨的算术每天可能偏离数百千卡。

正确的应对不是追求更多小数位，而是建立更好的反馈回路：在一致的条件下称重（同一时段、同样着装状态），按周取平均以滤除水分噪声，再将趋势与目标对比；每隔几周以100–200千卡的幅度微调摄入，而不是猛增猛减。体重每变化4–5公斤，或训练量、工作活动量改变时，回到这里重新计算。

有些情形应该交给专业人士而不是计算器。如果你在孕期或哺乳期、未满18岁、超过65岁、正在管理糖尿病或甲状腺疾病等代谢问题，或有饮食失调史，通用的TDEE算术可能产生误导甚至有害。本页数字是面向大众的群体水平估算，仅供参考，不构成医疗或营养建议；医生或注册营养师能结合血液检查、用药和病史为你定制目标——这是任何公式都做不到的。`
			}
		}
	];

	const toolContent = {
		about: {
			en: 'This calorie calculator estimates your daily energy needs using the Mifflin-St Jeor equation, the most accurate BMR formula in common use. It returns your basal metabolic rate (BMR), maintenance calories (TDEE), and weight-loss/gain targets adjusted by ±500 kcal. Results are estimates for informational purposes only and are not medical advice — consult a doctor or registered dietitian for a tailored plan.',
			ko: '이 칼로리 계산기는 가장 정확하다고 알려진 Mifflin-St Jeor 공식을 사용해 하루 에너지 소비량을 추정합니다. 기초대사량(BMR), 유지 칼로리(TDEE), ±500kcal로 조정된 감량·증량 목표 칼로리를 보여 줍니다. 결과는 정보 제공 목적의 추정치이며 의학적 자문이 아닙니다. 개인 맞춤 식단은 의사나 영양사와 상담하세요.',
			ja: 'このカロリー計算機は、もっとも精度が高いとされるMifflin-St Jeor式を用いて1日の必要カロリーを推定します。基礎代謝量（BMR）、維持カロリー（TDEE）、±500kcalで調整した減量・増量目標を表示します。結果は情報提供のための推定値であり、医学的助言ではありません。個別の指導は医師や栄養士にご相談ください。',
			zh: '本卡路里计算器使用 Mifflin-St Jeor 公式估算每日能量需求，包括基础代谢率（BMR）、维持热量（TDEE）以及减重 / 增重目标（±500 kcal）。结果仅供参考，不构成医疗建议。如需个性化饮食方案，请咨询医生或注册营养师。'
		},
		howTo: {
			en: [
				'Choose your gender (the BMR formula differs slightly).',
				'Enter your age, height in cm, and weight in kg.',
				'Pick the activity level that best matches your weekly routine.',
				'Read your BMR, maintenance, weight-loss, and weight-gain calorie values.',
				'Use the maintenance value as a baseline; adjust gradually rather than drastically.'
			],
			ko: [
				'성별을 선택합니다(BMR 공식이 약간 다릅니다).',
				'나이, 키(cm), 몸무게(kg)를 입력합니다.',
				'평소 활동 수준에 가장 가까운 항목을 선택합니다.',
				'기초대사량, 유지 칼로리, 감량/증량 목표 칼로리를 확인합니다.',
				'유지 칼로리를 기준으로 잡고, 급격한 변화 대신 점진적으로 조절하세요.'
			],
			ja: [
				'性別を選びます（BMR式がわずかに異なります）。',
				'年齢、身長（cm）、体重（kg）を入力します。',
				'普段の活動レベルに最も近い項目を選びます。',
				'BMR、維持カロリー、減量／増量目標を確認します。',
				'維持カロリーを基準に、急激ではなく段階的に調整しましょう。'
			],
			zh: [
				'选择性别（BMR 公式略有不同）。',
				'输入年龄、身高（cm）和体重（kg）。',
				'选择最符合日常活动水平的选项。',
				'查看 BMR、维持、减重和增重目标卡路里。',
				'以维持热量为基准，循序渐进地调整。'
			]
		},
		useCases: {
			en: [
				'Setting a daily calorie target for weight loss or muscle gain.',
				'Estimating energy needs before planning weekly meals.',
				'Adjusting macros and portions when starting a new fitness program.',
				'Comparing your needs across different activity weeks.',
				'Sharing baseline numbers with a trainer or nutritionist.'
			],
			ko: [
				'다이어트나 근육 증량을 위한 일일 칼로리 목표 설정.',
				'주간 식단 계획 전 필요 에너지 파악.',
				'새 운동 프로그램 시작 시 끼니별 양 조정.',
				'활동량이 다른 주별로 필요량 비교.',
				'트레이너나 영양사와 공유할 기초 수치 확인.'
			],
			ja: [
				'ダイエットや筋肉増量の1日カロリー目標設定。',
				'週ごとの食事プラン作成前の必要エネルギーの把握。',
				'新しい運動プログラム開始時の食事量調整。',
				'活動量が異なる週ごとの比較。',
				'トレーナーや栄養士との基礎数値の共有。'
			],
			zh: [
				'设定减脂或增肌的每日卡路里目标。',
				'制定周膳食计划前估算能量需求。',
				'开始新运动计划时调整餐量。',
				'比较不同活动量周的能量需求。',
				'与教练或营养师分享基础数值。'
			]
		},
		faq: {
			en: [
				{ q: 'Should I consult a doctor before starting a calorie plan?', a: 'Yes, especially if you have medical conditions, are pregnant, under 18, over 65, or have a history of eating disorders. This tool is informational only.' },
				{ q: 'Why does the formula need my gender?', a: 'Average lean mass differs between sexes, which changes BMR. Mifflin-St Jeor uses different constants for men and women.' },
				{ q: 'Is 500 kcal deficit the right pace for weight loss?', a: 'It targets roughly 0.5 kg / 1 lb per week, considered safe for most adults. Larger deficits may be unsustainable or unsafe.' },
				{ q: 'Why is my real calorie burn different from this estimate?', a: 'BMR formulas have ±10% error. Real expenditure depends on body composition, NEAT, exercise efficiency, and other factors.' }
			],
			ko: [
				{ q: '식단을 시작하기 전 의사 상담이 필요한가요?', a: '지병이 있거나 임산부, 18세 미만, 65세 이상, 섭식장애 병력이 있다면 반드시 의사와 상담하세요. 이 도구는 정보 제공 목적입니다.' },
				{ q: '왜 성별을 입력해야 하나요?', a: '평균 제지방량이 성별에 따라 다르기 때문에 Mifflin-St Jeor 공식은 남녀에 다른 상수를 사용합니다.' },
				{ q: '500kcal 감량 페이스가 적절한가요?', a: '주당 약 0.5kg 감량을 목표로 한 수치로, 대부분 성인에게 안전하다고 알려져 있습니다. 더 큰 결손은 지속하기 어렵거나 위험할 수 있습니다.' },
				{ q: '실제 소비 칼로리와 차이가 나는 이유는?', a: 'BMR 공식 자체에 ±10% 오차가 있고, 체구성, 비운동성 활동(NEAT), 운동 효율 등이 영향을 줍니다.' }
			]
		},
		related: [
			{ href: '/bmi-calculator', label: { en: 'BMI Calculator', ko: 'BMI 계산기', ja: 'BMI計算機', zh: 'BMI 计算器' } },
			{ href: '/percentage', label: { en: 'Percentage', ko: '퍼센트 계산기', ja: 'パーセント計算', zh: '百分比' } },
			{ href: '/calculator', label: { en: 'Calculator', ko: '계산기', ja: '計算機', zh: '计算器' } }
		],
		externalRefs: [
			{ href: 'https://www.who.int/news-room/fact-sheets/detail/healthy-diet', label: 'WHO: Healthy diet' },
			{ href: 'https://www.dietaryguidelines.gov/', label: 'Dietary Guidelines for Americans' }
		]
	};

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let age = 30;
	let gender: 'male' | 'female' = 'male';
	let height = 170; // cm
	let weight = 70; // kg
	let activity = 1.55; // moderate

	const activityLevels = [
		{ value: 1.2, label: 'calorie.sedentary' },
		{ value: 1.375, label: 'calorie.light' },
		{ value: 1.55, label: 'calorie.moderate' },
		{ value: 1.725, label: 'calorie.active' },
		{ value: 1.9, label: 'calorie.veryActive' }
	];

	// Mifflin-St Jeor Equation
	$: bmr = gender === 'male'
		? 10 * weight + 6.25 * height - 5 * age + 5
		: 10 * weight + 6.25 * height - 5 * age - 161;

	$: tdee = bmr * activity;
	$: weightLoss = tdee - 500;
	$: weightGain = tdee + 500;
</script>

<svelte:head>
	<title>{t('calorie.title')} - SD.gy</title>
	<meta name="description" content={t('calorie.desc')} />
	<link rel="canonical" href="https://sd.gy/{lang}/calorie-calculator" />
	<meta property="og:title" content="{t('calorie.title')} - SD.gy" />
	<meta property="og:description" content={t('calorie.desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/calorie-calculator" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('calorie.title')} - SD.gy" />
	<meta name="twitter:description" content={t('calorie.desc')} />
</svelte:head>

<div class="max-w-2xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('calorie.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('calorie.desc')}</p>
	</div>

	<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
		<!-- Gender Selection -->
		<div class="mb-6">
			<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('calorie.gender')}</label>
			<div class="grid grid-cols-2 gap-3">
				<button
					class="px-4 py-3 rounded-xl font-medium transition-colors {gender === 'male' ? 'bg-violet-500 text-white' : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300'}"
					on:click={() => gender = 'male'}
				>
					{t('calorie.male')}
				</button>
				<button
					class="px-4 py-3 rounded-xl font-medium transition-colors {gender === 'female' ? 'bg-violet-500 text-white' : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300'}"
					on:click={() => gender = 'female'}
				>
					{t('calorie.female')}
				</button>
			</div>
		</div>

		<!-- Input Fields -->
		<div class="grid grid-cols-2 gap-4 mb-6">
			<div>
				<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('calorie.age')}</label>
				<input
					type="number"
					bind:value={age}
					min="15"
					max="100"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 text-lg"
				/>
			</div>
			<div>
				<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('bmi.height')} (cm)</label>
				<input
					type="number"
					bind:value={height}
					min="100"
					max="250"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 text-lg"
				/>
			</div>
			<div class="col-span-2">
				<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('bmi.weight')} (kg)</label>
				<input
					type="number"
					bind:value={weight}
					min="30"
					max="200"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 text-lg"
				/>
			</div>
		</div>

		<!-- Activity Level -->
		<div class="mb-6">
			<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('calorie.activity')}</label>
			<select
				bind:value={activity}
				class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 text-lg"
			>
				{#each activityLevels as level}
					<option value={level.value}>{t(level.label)}</option>
				{/each}
			</select>
		</div>

		<!-- Results -->
		<div class="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 space-y-4">
			<div class="text-center pb-4 border-b border-gray-200 dark:border-dark-600">
				<p class="text-sm text-gray-600 dark:text-dark-400 mb-1">{t('calorie.bmr')}</p>
				<p class="text-2xl font-bold text-gray-900 dark:text-dark-100">{Math.round(bmr)} kcal</p>
			</div>

			<div class="text-center pb-4 border-b border-gray-200 dark:border-dark-600">
				<p class="text-sm text-gray-600 dark:text-dark-400 mb-1">{t('calorie.maintenance')}</p>
				<p class="text-3xl font-bold text-violet-500">{Math.round(tdee)} kcal</p>
			</div>

			<div class="grid grid-cols-2 gap-4 pt-2">
				<div class="text-center">
					<p class="text-sm text-gray-600 dark:text-dark-400 mb-1">{t('calorie.lose')}</p>
					<p class="text-xl font-semibold text-blue-500">{Math.round(weightLoss)} kcal</p>
				</div>
				<div class="text-center">
					<p class="text-sm text-gray-600 dark:text-dark-400 mb-1">{t('calorie.gain')}</p>
					<p class="text-xl font-semibold text-green-500">{Math.round(weightGain)} kcal</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Info Section -->
	<div class="mt-8 bg-yellow-50 dark:bg-dark-800 rounded-xl p-6 border border-yellow-200 dark:border-dark-700">
		<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-3">{t('calorie.info')}</h2>
		<p class="text-sm text-gray-600 dark:text-dark-400">{t('calorie.infoText')}</p>
	</div>

	<ToolContent
		{lang}
		toolName="Calorie Calculator"
		toolUrl="https://sd.gy/{lang}/calorie-calculator"
		lastUpdated="2026-04-30"
		category="Daily Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sd.gy/${lang}` },
			{ name: 'Tools', url: `https://sd.gy/${lang}` },
			{ name: 'Calorie Calculator', url: `https://sd.gy/${lang}/calorie-calculator` }
		]}
		content={toolContent}
	/>

	<ToolGuide {lang} sections={guideSections} />
</div>
