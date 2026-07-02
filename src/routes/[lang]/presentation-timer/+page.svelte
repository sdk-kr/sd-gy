<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import AdSense from '$lib/components/AdSense.svelte';
	import ToolContent from '$lib/components/ToolContent.svelte';
	import ToolGuide from '$lib/components/ToolGuide.svelte';
	import { onDestroy } from 'svelte';

	const guideSections = [
		{
			heading: {
				en: 'The Science of 120–160 Words per Minute',
				ko: '분당 120~160단어의 과학',
				ja: '毎分120〜160語の科学',
				zh: '每分钟120–160个单词的科学'
			},
			body: {
				en: `Decades of measurement converge on a narrow band: comfortable English speech for a listening audience runs at roughly 120 to 160 words per minute. Everyday conversation is faster, often 160 to 200 wpm, because dialogue lets a confused listener interrupt. Presentation speech must be slower — the audience gets exactly one pass at every sentence, and comprehension research consistently shows retention dropping as rates push past the mid-100s for unfamiliar material. Professional norms cluster inside the band: audiobook narrators are directed to 150–160 wpm, US radio announcers read news around 150–175, and TED coaches nudge speakers toward the slower half for idea-dense talks.

The great speeches sit strikingly low. Analyses of Martin Luther King's "I Have a Dream" put its opening sections near 90–100 wpm, accelerating as the speech builds. Rapid speakers exist — John F. Kennedy was once clocked near the top of the range — but note the direction of the exceptions: speakers slow down for weight, not speed up.

Character-counted languages have their own equivalents. Korean broadcast and presentation guidance falls around 250–300 syllables (roughly characters) per minute; Japanese NHK announcer training famously targets about 300 characters per minute for news reading; Mandarin news reading commonly runs 240–300 characters per minute. That is why this tool's normal setting sits at 130 wpm or 270 cpm: it is the planning midpoint of what real, comprehensible delivery looks like. Nervous speakers reliably drift 10–20% faster than rehearsal, so a script timed at the "normal" rate leaves exactly the cushion you will need on stage.`,
				ko: `수십 년의 측정 결과는 좁은 구간으로 수렴합니다. 청중이 듣기 편안한 영어 발화 속도는 대략 분당 120~160단어입니다. 일상 대화는 더 빨라서 160~200단어에 이르곤 하는데, 대화에서는 못 알아들은 사람이 끼어들어 되물을 수 있기 때문입니다. 발표는 더 느려야 합니다. 청중은 모든 문장을 딱 한 번만 들을 수 있고, 이해도 연구들은 낯선 내용에서 속도가 분당 140~150단어를 넘어서면 기억률이 떨어진다는 것을 일관되게 보여 줍니다. 전문 직군의 기준도 이 구간 안에 몰려 있습니다. 오디오북 내레이터는 150~160단어로 지시받고, 미국 라디오 아나운서는 뉴스를 150~175단어 안팎으로 읽으며, TED 코치들은 아이디어 밀도가 높은 강연일수록 느린 쪽으로 유도합니다.

위대한 연설들은 눈에 띄게 느립니다. 마틴 루서 킹의 "나에게는 꿈이 있습니다" 분석에 따르면 도입부는 분당 90~100단어 수준이고, 연설이 고조되며 빨라집니다. 빠른 연사도 있습니다. 존 F. 케네디는 이 범위의 최상단 근처로 측정된 적이 있죠. 하지만 예외들의 방향에 주목하세요. 연사들은 무게를 싣기 위해 느려지지, 빨라지지 않습니다.

글자로 세는 언어에는 그에 상응하는 기준이 있습니다. 한국의 방송·발표 지침은 분당 250~300음절(대략 글자 수) 안팎이고, 일본 NHK 아나운서 훈련은 뉴스 낭독 기준 분당 약 300자를 목표로 하는 것으로 유명하며, 표준 중국어 뉴스 낭독은 보통 분당 240~300자입니다. 이 도구의 "보통" 설정이 분당 130단어 또는 270자인 이유가 그것입니다. 실제로 알아들을 수 있는 전달 속도의 계획용 중간값이죠. 긴장한 연사는 연습 때보다 어김없이 10~20% 빨라지므로, "보통" 속도로 시간을 잰 원고는 무대에서 필요하게 될 여유분을 정확히 남겨 줍니다.`,
				ja: `数十年にわたる測定は狭い帯域に収束しています。聴衆にとって聞き取りやすい英語の発話速度は、おおよそ毎分120〜160語です。日常会話はもっと速く、160〜200語に達することもありますが、それは対話なら聞き逃した側が割り込んで聞き返せるからです。プレゼンはより遅くなければなりません。聴衆はすべての文を一度しか聞けず、理解度の研究は、なじみのない内容では速度が毎分140〜150語を超えると記憶保持が落ちることを一貫して示しています。プロの基準もこの帯域内に集まっています。オーディオブックのナレーターは150〜160語で指示され、米国のラジオアナウンサーはニュースを150〜175語前後で読み、TEDのコーチはアイデア密度の高い講演ほど遅い側へ誘導します。

偉大な演説は際立って遅いのです。キング牧師の「私には夢がある」の分析では、冒頭部は毎分90〜100語程度で、演説が高まるにつれて加速します。速い話者もいます。ジョン・F・ケネディはこの範囲の上限近くで計測されたことがあります。しかし例外の向きに注目してください。話者は重みを乗せるために遅くなるのであって、速くなるのではありません。

文字で数える言語には対応する基準があります。韓国の放送・発表の指針は毎分250〜300音節（ほぼ文字数）前後、日本のNHKアナウンサー訓練はニュース読みで毎分約300字を目標とすることで有名で、標準中国語のニュース読みは通常毎分240〜300字です。このツールの「普通」設定が毎分130語または270字なのはそのためです。実際に理解できる発話速度の、計画用の中間値なのです。緊張した話者は練習時より確実に10〜20%速くなるので、「普通」の速度で計った原稿は、本番でまさに必要になる余裕をちょうど残してくれます。`,
				zh: `几十年的测量结果汇聚到一个狭窄区间：让听众听得舒服的英语演讲速度大约是每分钟120到160个单词。日常对话更快，常达160–200 wpm，因为对话中没听懂的人可以随时打断追问。演讲必须更慢——听众对每句话只有一次机会，而理解力研究一致表明，对陌生内容而言，语速一旦超过每分钟140–150词，记忆留存率就会下降。专业规范也聚集在这个区间内：有声书旁白被要求控制在150–160 wpm，美国电台播音员的新闻语速约为150–175，TED的教练则会把信息密度高的演讲者往慢的那一半引导。

伟大的演讲慢得惊人。对马丁·路德·金《我有一个梦想》的分析显示，其开篇部分接近每分钟90–100词，随着演讲推进才逐渐加速。语速快的演说家也存在——肯尼迪曾被测到接近区间上限——但请注意例外的方向：演讲者为了分量而放慢，而不是为了效率而加快。

按字符计数的语言有自己的对应标准。韩国的广播与演讲指南约在每分钟250–300个音节（大致等于字数）；日本NHK播音员训练以新闻朗读每分钟约300字著称；普通话新闻播读通常为每分钟240–300字。这正是本工具"正常"档设为130 wpm或270字/分的原因：它是真实、可听懂的表达速度的规划中位值。紧张的演讲者上台后语速普遍比排练快10–20%，所以按"正常"速度计时的讲稿，恰好为你留出了台上会用到的缓冲。`
			},
			code: {
				example: `Reference speaking rates (English, words/min):

  audiobook narration      150-160
  US radio news            150-175
  conversational speech    160-200
  presentations (target)   120-160
  MLK "I Have a Dream"      ~90-100 (opening)

Character-counted languages (chars or syllables/min):
  Korean broadcast          ~250-300
  Japanese NHK news          ~300
  Mandarin news             ~240-300

This tool: slow 100 wpm / 200 cpm
           normal 130 / 270   <- planning midpoint
           fast 160 / 340`
			}
		},
		{
			heading: {
				en: 'From Word Count to Wall Clock: Budgeting a Talk That Fits Its Slot',
				ko: '단어 수에서 실제 시간으로 — 주어진 시간에 꼭 맞는 발표 설계',
				ja: '語数から実時間へ — 持ち時間にぴったり収まる発表の設計',
				zh: '从字数到时钟：设计一场刚好塞进时段的演讲'
			},
			body: {
				en: `The raw conversion is simple division — 1,950 words at 130 wpm is 15 minutes — but a talk is not a read-through, and the difference is where schedules die. Everything you do that is not speaking still consumes the slot: advancing and orienting on slides (comfortably 5–15 seconds each), a live demo, drinking water, waiting out laughter, fielding a mid-talk question. Slide-heavy decks are the biggest hidden cost; that is why this tool lets you add per-slide minutes on top of the text estimate rather than pretending narration is the whole story.

Working speakers budget backwards from the slot instead of forward from the script. A robust rule is to plan content for about 90% of the allotted time: for a 20-minute slot, script roughly 18 minutes, or about 2,300 words at 130 wpm. If questions are taken inside your slot — standard at academic conferences, where a "15-minute talk" is often 12 minutes plus 3 for Q&A — subtract that first, before the 90% rule. Chronic overrun has a social cost that is easy to underestimate: at any multi-speaker event, your extra four minutes are stolen from the next presenter or from the audience's break, and session chairs remember.

Build in a cut plan as well. Mark one section of the script as droppable in advance — a second example, a digression, an extra case study — so that when the 5-minutes-left card appears you excise cleanly instead of accelerating into a mumble. Speeding up rescues almost nothing: a 15% rate increase saves barely two minutes on a 15-minute talk while measurably damaging comprehension. Cutting content works; compressing delivery does not.`,
				ko: `순수 변환은 단순한 나눗셈입니다. 분당 130단어로 1,950단어면 15분이죠. 하지만 발표는 낭독이 아니며, 그 차이에서 일정이 무너집니다. 말하기가 아닌 모든 행동도 시간을 소모합니다. 슬라이드를 넘기고 방향을 잡는 것(넉넉히 장당 5~15초), 라이브 데모, 물 마시기, 웃음이 잦아들길 기다리기, 중간 질문에 답하기. 슬라이드가 많은 자료가 가장 큰 숨은 비용이며, 이 도구가 텍스트 추정치 위에 슬라이드당 시간을 따로 더하도록 만들어진 이유입니다. 내레이션이 전부인 척하지 않는 것이죠.

실전 연사들은 원고에서 앞으로가 아니라 주어진 시간에서 거꾸로 예산을 짭니다. 튼튼한 규칙은 배정 시간의 약 90%만큼만 내용을 준비하는 것입니다. 20분 슬롯이라면 원고는 약 18분, 분당 130단어 기준 약 2,300단어입니다. 질의응답이 슬롯 안에 포함된다면 — "15분 발표"가 실제로는 12분 발표 + 3분 질의인 학술 대회의 표준처럼 — 90% 규칙보다 먼저 그 시간부터 빼세요. 상습적인 시간 초과의 사회적 비용은 과소평가하기 쉽습니다. 여러 명이 발표하는 행사에서 당신이 넘긴 4분은 다음 발표자나 청중의 휴식에서 훔쳐 온 것이고, 좌장들은 기억합니다.

자르기 계획도 미리 세워 두세요. 원고에서 버려도 되는 구간 — 두 번째 예시, 여담, 추가 사례 — 을 사전에 표시해 두면, "5분 남음" 팻말이 올라왔을 때 웅얼거림으로 가속하는 대신 깔끔하게 도려낼 수 있습니다. 빨리 말하기로는 거의 아무것도 구하지 못합니다. 속도를 15% 올려도 15분 발표에서 겨우 2분을 벌 뿐이며 이해도는 측정 가능하게 손상됩니다. 내용을 자르는 것은 통하지만, 전달을 압축하는 것은 통하지 않습니다.`,
				ja: `生の換算は単純な割り算です。毎分130語で1,950語なら15分。しかし発表は朗読ではなく、その差でスケジュールは崩壊します。話す以外のすべての行為も持ち時間を消費します。スライドを送って位置を確かめる（余裕を見て1枚5〜15秒）、ライブデモ、水を飲む、笑いが収まるのを待つ、途中の質問への対応。スライドの多い資料が最大の隠れコストであり、このツールがテキストの推定に加えてスライドあたりの時間を別途足せるようになっているのはそのためです。ナレーションがすべてであるかのような前提を置かないのです。

現場の話者は原稿から前向きにではなく、持ち時間から逆向きに予算を立てます。頑健なルールは、割り当て時間の約90%分だけ内容を用意することです。20分の枠なら原稿は約18分、毎分130語なら約2,300語です。質疑応答が枠内に含まれるなら — 「15分の発表」が実際には12分の発表＋3分の質疑である学会の標準のように — 90%ルールの前にまずその時間を引いてください。慢性的な時間超過の社会的コストは過小評価されがちです。複数の登壇者がいるイベントであなたが超過した4分は、次の発表者か聴衆の休憩から盗んだものであり、座長は覚えています。

削るための計画も組み込んでおきましょう。原稿の中で落としてもよい区間 — 2つ目の例、脱線、追加のケーススタディ — に事前に印を付けておけば、「残り5分」のカードが上がったとき、早口のもごもごに加速する代わりにきれいに切除できます。速く話しても救えるものはほとんどありません。速度を15%上げても15分の発表でせいぜい2分を稼ぐだけで、理解度は測定可能なほど損なわれます。内容を削るのは効きますが、伝達を圧縮するのは効かないのです。`,
				zh: `裸换算只是简单的除法——1,950个词按130 wpm是15分钟——但演讲不是通读稿件，差别正是时间表阵亡的地方。你做的一切非说话的事都在消耗时段：切换幻灯片并定位（每张宽裕地算5–15秒）、现场演示、喝水、等笑声平息、回应中途提问。幻灯片密集的演示文稿是最大的隐性成本，这也是本工具允许在文本估算之外单独叠加每张幻灯片时间的原因——而不是假装旁白就是全部。

有经验的演讲者从时段倒推预算，而不是从讲稿正推。一条可靠的规则是：内容只准备到给定时间的约90%。20分钟的时段，讲稿约18分钟，按130 wpm约2,300词。如果提问包含在你的时段内——学术会议的常态，"15分钟报告"往往是12分钟报告加3分钟问答——那要在90%规则之前先扣掉它。长期超时的社交代价很容易被低估：在任何多人演讲的活动上，你多讲的4分钟是从下一位讲者或听众的休息里偷来的，而会议主持人都记得。

还要预设"砍稿方案"。事先在讲稿里标出一段可舍弃的内容——第二个例子、一段闲笔、一个补充案例——这样当"剩5分钟"的提示牌举起时，你可以干净利落地切除，而不是加速成含混的嘟囔。加快语速几乎救不了场：语速提高15%，在15分钟的演讲里也只省下约两分钟，却会实打实地损害理解。砍内容有效；压缩表达无效。`
			},
			code: {
				example: `Budgeting a 20-minute conference slot:

  slot                     20:00
  Q&A inside slot?        - 3:00
  safety margin (90%)     - 1:42
  speakable time          ~15:18

  words at 130 wpm  = 15.3 x 130 = ~1,990 words
  15 slides x 15s of transitions = 3:45  <- comes OUT of the 15:18
  net narration ~11:30  ->  script ~1,500 words

Speeding up does not save you:
  1,990 words at 150 wpm = 13:16  (saves ~2 min,
  costs comprehension) -> cut content instead`
			}
		},
		{
			heading: {
				en: 'Rehearsal That Actually Works: Why Silent Reading Lies to You',
				ko: '진짜 효과 있는 리허설 — 눈으로 읽는 연습이 당신을 속이는 이유',
				ja: '本当に効くリハーサル — 黙読があなたを欺く理由',
				zh: '真正有效的排练：为什么默读会骗你'
			},
			body: {
				en: `The most common timing mistake is rehearsing with your eyes. Silent reading runs at 200–300 words per minute — roughly double speaking pace — so a script that "reads in eight minutes" is a fifteen-minute talk. Worse, silent reading skips everything that makes delivery slow: breathing, pausing, walking, clicking, and the small recoveries after a stumble. The only rehearsal that produces a trustworthy number is out loud, standing, at performance volume, with the actual slides. That is what the countdown timer on this page is for: paste the script for the estimate, then verify it with a spoken run.

Rehearsal quality follows well-studied learning principles. Spaced practice beats cramming — three run-throughs across three days outperform six in one evening, a spacing effect replicated across a century of memory research. The testing effect applies too: reciting from memory and checking afterward strengthens recall far more than re-reading. Record one full run on your phone; speakers systematically mis-hear their own pace and filler-word rate ("um", "so", "like" — or 그, 어, えーと, 那个), and a recording is the cheapest honest coach available.

How many full rehearsals is enough? Coaches converge on a range: below three, timing estimates are unstable; somewhere past ten, delivery risks flattening into recitation for non-professionals. A practical ladder: first run for content (expect it to be ugly and long), second and third against the clock, cutting after each, a fourth in front of one honest listener. Rehearse the opening and the closing disproportionately — they anchor the audience's impression, and they are what nerves attack first.`,
				ko: `가장 흔한 시간 계산 실수는 눈으로 리허설하는 것입니다. 묵독 속도는 분당 200~300단어로 말하기의 대략 두 배라서, "8분이면 읽히는" 원고는 실제로는 15분짜리 발표입니다. 더 나쁜 것은, 묵독은 전달을 느리게 만드는 모든 요소 — 호흡, 멈춤, 이동, 클릭, 말이 꼬인 뒤의 작은 수습 — 를 건너뛴다는 점입니다. 신뢰할 수 있는 숫자를 주는 유일한 리허설은 소리 내어, 서서, 실제 성량으로, 진짜 슬라이드와 함께 하는 것입니다. 이 페이지의 카운트다운 타이머가 그 용도입니다. 원고를 붙여 넣어 추정치를 얻고, 소리 내어 한 번 돌려 검증하세요.

리허설의 질은 잘 연구된 학습 원리를 따릅니다. 분산 연습이 몰아치기를 이깁니다. 사흘에 걸친 세 번의 전체 연습이 하룻저녁 여섯 번보다 낫다는 간격 효과는 한 세기에 걸친 기억 연구에서 반복 검증되었습니다. 시험 효과도 적용됩니다. 기억으로 암송한 뒤 확인하는 쪽이 다시 읽기보다 회상을 훨씬 강하게 만듭니다. 휴대폰으로 전체 연습 한 번을 녹음하세요. 연사들은 자신의 속도와 군말 빈도("음", "그", "어" — 영어라면 um, so, like)를 체계적으로 잘못 듣는데, 녹음은 구할 수 있는 가장 저렴하고 정직한 코치입니다.

전체 리허설은 몇 번이면 충분할까요? 코치들의 답은 한 구간으로 수렴합니다. 세 번 미만이면 시간 추정이 불안정하고, 열 번을 훌쩍 넘기면 비전문가의 전달은 암송처럼 납작해질 위험이 있습니다. 실용적인 사다리는 이렇습니다. 1회차는 내용 확인용(엉망이고 길 것을 각오하세요), 2~3회차는 시계를 놓고 돌리며 매번 잘라 내고, 4회차는 솔직한 청자 한 명 앞에서. 오프닝과 클로징은 유난히 많이 연습하세요. 청중의 인상을 고정하는 부분이자, 긴장이 가장 먼저 공격하는 부분입니다.`,
				ja: `最もよくある時間見積もりの失敗は、目でリハーサルすることです。黙読は毎分200〜300語で、話す速度のほぼ2倍。「8分で読める」原稿は実際には15分の発表です。さらに悪いことに、黙読は伝達を遅くするすべての要素 — 呼吸、間、移動、クリック、言い淀んだ後の小さな立て直し — を飛ばしてしまいます。信頼できる数字を出す唯一のリハーサルは、声に出して、立って、本番の声量で、実際のスライドとともに行うものです。このページのカウントダウンタイマーはそのためにあります。原稿を貼り付けて推定値を得たら、声に出した通しで検証してください。

リハーサルの質は、よく研究された学習原理に従います。分散練習は詰め込みに勝ちます。3日間にわたる3回の通しは一晩の6回を上回る — この間隔効果は1世紀にわたる記憶研究で再現されてきました。テスト効果も当てはまります。記憶から暗唱して後で確認する方が、読み直すよりはるかに強く想起を鍛えます。スマートフォンで通しを1回録音しましょう。話者は自分のペースとフィラー語の頻度（「えーと」「あの」— 英語ならum、so、like）を系統的に聞き違えており、録音は手に入る最も安価で正直なコーチです。

通しのリハーサルは何回で十分でしょうか。コーチたちの答えはある範囲に収束します。3回未満では時間の見積もりが不安定で、10回を大きく超えると、プロでない話者の伝達は暗唱のように平板になる危険があります。実用的な段階はこうです。1回目は内容の確認（ひどく長くなるのを覚悟して）、2〜3回目は時計を相手に回して毎回削り、4回目は正直な聞き手1人の前で。オープニングとクロージングは不釣り合いなほど多く練習してください。聴衆の印象を固定する部分であり、緊張が最初に襲う部分でもあります。`,
				zh: `最常见的计时错误是用眼睛排练。默读速度为每分钟200–300词，约是口语的两倍，所以一份"八分钟能读完"的讲稿，实际是一场十五分钟的演讲。更糟的是，默读跳过了所有拖慢表达的东西：呼吸、停顿、走动、翻页，以及口误后的小小补救。唯一能给出可信数字的排练是：出声、站立、用正式音量、配合真实幻灯片。本页的倒计时器就是为此准备的——先粘贴讲稿获得估算，再用一次出声的完整演练来验证。

排练的质量遵循被充分研究的学习规律。分散练习胜过突击——分三天做三次完整演练，效果优于一晚上连做六次，这个"间隔效应"在一个世纪的记忆研究中被反复验证。"测试效应"同样适用：凭记忆复述再对照检查，比反复阅读更能强化回忆。用手机录下一次完整演练；演讲者对自己的语速和口头禅频率（"嗯""那个""就是"——英语则是um、so、like）存在系统性误判，而录音是你能找到的最便宜、最诚实的教练。

完整排练多少次才够？教练们的答案收敛在一个区间：少于三次，时间估计不稳定；远超十次，非职业演讲者的表达可能扁平成背诵。一个实用的阶梯：第一遍过内容（做好又乱又长的心理准备），第二、三遍对着时钟并每遍删减，第四遍讲给一位敢说真话的听众。开场和结尾要不成比例地多练——它们锚定听众的印象，也是怯场最先攻击的地方。`
			},
			code: {
				example: `Why silent reading misleads:

  2,000-word script
  silent reading  ~250 wpm  ->  8 min   "feels fine"
  spoken delivery ~130 wpm  -> 15:23    actual talk
                                + slides, pauses, nerves

Rehearsal ladder (spaced over several days):
  run 1  content pass      (will run long - fine)
  run 2  vs the clock      cut what overflows
  run 3  vs the clock      cut again, record it
  run 4  live listener     fix what they flag
  extra  opening + closing until automatic`
			}
		},
		{
			heading: {
				en: 'The Pause Is Part of the Speech: Silence, Fillers, and Breathing',
				ko: '침묵도 연설의 일부다 — 멈춤, 군말, 호흡',
				ja: '沈黙もスピーチの一部 — 間・フィラー・呼吸',
				zh: '停顿也是演讲的一部分：沉默、口头禅与呼吸'
			},
			body: {
				en: `Word-per-minute numbers hide a surprising fact: in natural speech, silence occupies a large share of the clock. Pause research distinguishes short syntactic pauses at clause boundaries (a few tenths of a second), sentence pauses (around half a second to a second), and rhetorical pauses — the deliberate two-to-three-second silences great speakers deploy before or after a key line. Audiences consistently rate speakers who pause as more confident and more intelligible, yet from the stage a two-second silence feels like an eternity; closing that perception gap is one of the main things rehearsal buys you.

Pauses also do mechanical work. They are when you breathe — running out of air mid-sentence forces audible gasps and rising pitch — and they are when the audience thinks. Cognitive load research on lectures suggests listeners need processing gaps after dense propositions; a pause after your key claim is not dead air, it is the time in which the claim lands. Speakers who fear silence backfill it with fillers, and the fix is mechanical rather than moral: fillers spike at planning boundaries, so knowing your transitions cold removes most of them. Recording yourself once (as suggested above) typically reveals a filler rate two to three times higher than you would have guessed.

Rate variation is the final pacing instrument. A uniform 130 wpm is comprehensible but hypnotic; skilled speakers slow to near 100 for definitions and conclusions, and let anecdotes run quicker. The practical encoding: mark your script — underline what must be slow, bracket what can be fast — and let the average, not every sentence, hit the target rate this tool assumes.`,
				ko: `분당 단어 수라는 숫자는 놀라운 사실 하나를 감춥니다. 자연스러운 발화에서 침묵은 시계의 큰 몫을 차지합니다. 멈춤 연구는 절 경계의 짧은 통사적 멈춤(십분의 몇 초), 문장 사이 멈춤(대략 0.5~1초), 그리고 수사적 멈춤 — 뛰어난 연사가 핵심 문장 앞뒤에 배치하는 의도적인 2~3초의 침묵 — 을 구분합니다. 청중은 멈추는 연사를 일관되게 더 자신 있고 더 알아듣기 쉽다고 평가하지만, 무대 위에서 2초의 침묵은 영원처럼 느껴집니다. 이 지각 격차를 좁히는 것이 리허설이 사 주는 가장 큰 것 중 하나입니다.

멈춤은 기계적인 일도 합니다. 멈춤은 숨 쉬는 시간입니다. 문장 중간에 숨이 떨어지면 들리는 헐떡임과 올라가는 음조를 피할 수 없죠. 그리고 멈춤은 청중이 생각하는 시간입니다. 강의에 대한 인지 부하 연구는 밀도 높은 명제 뒤에 청자에게 처리할 틈이 필요하다고 시사합니다. 핵심 주장 뒤의 멈춤은 죽은 공기가 아니라 주장이 착지하는 시간입니다. 침묵이 두려운 연사는 그 자리를 군말로 메우는데, 처방은 도덕이 아니라 기계적인 것입니다. 군말은 다음 말을 계획하는 경계 지점에서 폭증하므로, 전환부를 완전히 몸에 익히면 대부분 사라집니다. 앞서 권한 대로 한 번 녹음해 보면 군말 빈도가 짐작의 2~3배라는 것이 대개 드러납니다.

속도 변화는 마지막 완급 조절 도구입니다. 균일한 분당 130단어는 알아들을 수는 있지만 최면적입니다. 능숙한 연사는 정의와 결론에서 100 가까이로 늦추고, 일화는 더 빠르게 흘려보냅니다. 실용적인 기록법은 이렇습니다. 원고에 표시하세요. 반드시 느려야 할 곳에 밑줄을, 빨라도 되는 곳에 괄호를. 그리고 모든 문장이 아니라 평균이 이 도구가 가정하는 목표 속도에 닿게 하세요.`,
				ja: `毎分語数という数字は、驚くべき事実を隠しています。自然な発話では、沈黙が時計の大きな割合を占めるのです。ポーズの研究は、節の境界での短い統語的ポーズ（コンマ数秒）、文間のポーズ（約0.5〜1秒）、そして修辞的ポーズ — 優れた話者が決めの一文の前後に置く意図的な2〜3秒の沈黙 — を区別します。聴衆は間を取る話者を一貫して、より自信があり、より聞き取りやすいと評価します。ところが壇上では2秒の沈黙が永遠に感じられます。この知覚のずれを縮めることこそ、リハーサルが買ってくれる主要なものの一つです。

間は機械的な仕事もします。間は息を吸う時間です。文の途中で息が切れると、聞こえる喘ぎと上ずった声を避けられません。そして間は聴衆が考える時間です。講義に関する認知負荷の研究は、密度の高い命題の後に聞き手には処理の隙間が必要だと示唆します。核心の主張の後の間は死んだ空気ではなく、主張が着地する時間なのです。沈黙を恐れる話者はそこをフィラーで埋めますが、処方は道徳ではなく機械的です。フィラーは次の発話を計画する境界で急増するので、つなぎの部分を完全に体に入れればほとんど消えます。先に勧めたとおり一度録音してみると、フィラーの頻度が想像の2〜3倍だと大抵判明します。

速度の変化が最後の緩急の道具です。均一な毎分130語は理解できますが催眠的です。熟練した話者は定義や結論では100近くまで落とし、逸話はより速く流します。実用的な記法はこうです。原稿に印を付けましょう。必ず遅くすべき箇所に下線を、速くてよい箇所に括弧を。そして、すべての文ではなく平均が、このツールの想定する目標速度に届くようにするのです。`,
				zh: `"每分钟词数"掩盖了一个惊人的事实：在自然言语中，沉默占据了时钟的很大份额。停顿研究区分三类：从句边界的短句法停顿（零点几秒）、句间停顿（约半秒到一秒），以及修辞性停顿——出色的演讲者在关键句前后刻意留出的两到三秒沉默。听众一致认为善于停顿的演讲者更自信、更易听懂；可是站在台上，两秒的沉默漫长如永恒——缩小这种感知落差，正是排练买来的最重要的东西之一。

停顿还承担着机械功能。停顿是你呼吸的时刻——句子中途断气会带来可闻的喘息和发飘的音调；停顿也是听众思考的时刻。关于讲课的认知负荷研究表明，信息密集的论断之后，听者需要加工的空隙；关键论点后的停顿不是冷场，而是论点落地的时间。害怕沉默的演讲者用口头禅回填空隙，而解药是机械性的，与意志力无关：口头禅在组织下一句话的边界处激增，所以把过渡句练到滚瓜烂熟就能消除大半。按前文建议录一次音，通常会发现口头禅频率是你猜测的两三倍。

语速变化是最后一件调节节奏的乐器。匀速的130 wpm能听懂，却有催眠效果；熟练的演讲者在下定义和收尾时放慢到接近100，讲轶事时则加快。实用的标记法：在讲稿上做记号——必须慢的地方划线，可以快的地方加括号——让平均值而不是每个句子去命中本工具假设的目标语速。`
			}
		},
		{
			heading: {
				en: 'Formats Around the World: TED, PechaKucha, Lightning Talks, and the Academic 15',
				ko: '세계의 발표 형식 — TED, 페차쿠차, 라이트닝 토크, 학회의 15분',
				ja: '世界の発表フォーマット — TED・ペチャクチャ・LT・学会の15分',
				zh: '世界各地的演讲形式：TED、PechaKucha、闪电演讲与学术15分钟'
			},
			body: {
				en: `Time limits are not arbitrary — each famous format encodes a theory of attention. TED caps talks at 18 minutes, a length its curators defend as long enough for a serious idea and short enough to hold undivided attention. PechaKucha, invented by architects in Tokyo in 2003, is stricter still: exactly 20 slides that auto-advance every 20 seconds, 6 minutes 40 seconds total, a format designed to cure architects of rambling. Its corporate cousin Ignite uses 20 slides at 15 seconds. Lightning talks at tech conferences run 5 minutes with a hard cut; academic conferences typically allot 12–20 minutes including questions; a Japanese business 報告 or a Korean 업무보고 may be expected to land in three. Toastmasters, the global speaking club, builds its whole pedagogy around 5-to-7-minute speeches with visible traffic-light timing.

The uniting lesson is that constraint improves talks. Auto-advancing formats force rehearsal because winging it is impossible; short formats force ruthless prioritization of one idea. Speakers who train on a 6:40 PechaKucha routinely report their 30-minute talks improving too.

To practice any of these with this page: type the format's total time as a manual count trick — or simply paste your script, pick a speed, and check the estimate against the format's ceiling before you rehearse against the countdown. If the estimate says 8:30 for a lightning talk, do not rehearse hoping to go faster; cut a third of the script first. The timer will tell you the truth either way; the only question is whether you hear it before the audience does.`,
				ko: `발표 시간 제한은 임의가 아닙니다. 유명한 형식 하나하나가 주의력에 대한 이론을 담고 있습니다. TED는 강연을 18분으로 제한하는데, 큐레이터들은 이것이 진지한 아이디어를 담기에 충분히 길면서 온전한 집중을 붙들 만큼 짧은 길이라고 설명합니다. 2003년 도쿄의 건축가들이 만든 페차쿠차는 더 엄격합니다. 정확히 20장의 슬라이드가 20초마다 자동으로 넘어가 총 6분 40초. 건축가들의 장광설을 고치려고 설계된 형식입니다. 기업형 사촌인 이그나이트는 슬라이드 20장에 장당 15초를 씁니다. 기술 콘퍼런스의 라이트닝 토크는 5분에 강제 종료이고, 학술 대회는 보통 질의 포함 12~20분을 배정하며, 일본의 업무 호코쿠(報告)나 한국의 업무보고는 3분 안에 끝내기를 기대받기도 합니다. 세계적 스피치 클럽인 토스트마스터스는 신호등 색으로 시간을 보여 주는 5~7분 연설을 교육 전체의 뼈대로 삼습니다.

관통하는 교훈은 제약이 발표를 좋게 만든다는 것입니다. 자동으로 넘어가는 형식은 즉흥이 불가능하므로 리허설을 강제하고, 짧은 형식은 하나의 아이디어로의 무자비한 우선순위 정리를 강제합니다. 6분 40초짜리 페차쿠차로 훈련한 연사들은 30분짜리 발표도 좋아졌다고 흔히 보고합니다.

이 페이지로 이런 형식들을 연습하려면, 원고를 붙여 넣고 속도를 고른 뒤 카운트다운으로 연습하기 전에 추정치를 형식의 상한과 대조하세요. 라이트닝 토크인데 추정치가 8분 30초라면, 더 빨리 말하기를 바라며 연습하지 마세요. 먼저 원고의 3분의 1을 잘라 내야 합니다. 타이머는 어느 쪽이든 진실을 말해 줍니다. 문제는 청중보다 먼저 그 진실을 들을 것인가뿐입니다.`,
				ja: `発表の制限時間は恣意的ではありません。有名なフォーマットの一つひとつが、注意力についての理論を体現しています。TEDは講演を18分に制限し、キュレーターたちはこれを、本格的なアイデアを収めるのに十分長く、途切れない集中を保てるほど短い長さだと説明します。2003年に東京の建築家たちが生んだペチャクチャはさらに厳格です。ちょうど20枚のスライドが20秒ごとに自動で進み、合計6分40秒。建築家の長話を治すために設計されたフォーマットです。企業版の従兄弟であるIgniteはスライド20枚を1枚15秒で使います。技術カンファレンスのライトニングトークは5分で強制終了、学会は通常、質疑込みで12〜20分を割り当て、日本のビジネスの報告や韓国の業務報告は3分で収めることを期待されることもあります。世界的なスピーチクラブのトーストマスターズは、信号機の色で時間を示す5〜7分のスピーチを教育全体の骨格にしています。

貫かれる教訓は、制約が発表を良くするということです。自動送りのフォーマットはその場しのぎを不可能にするのでリハーサルを強制し、短いフォーマットは一つのアイデアへの容赦ない優先順位付けを強制します。6分40秒のペチャクチャで鍛えた話者は、30分の講演も良くなったとしばしば報告します。

このページでこれらの形式を練習するには、原稿を貼り付けて速度を選び、カウントダウンで練習する前に、推定値をフォーマットの上限と突き合わせてください。ライトニングトークなのに推定が8分30秒なら、速く話せることを祈りながら練習してはいけません。まず原稿の3分の1を削るのです。タイマーはどちらにせよ真実を告げます。問題はただ一つ、聴衆より先にそれを聞くかどうかです。`,
				zh: `时间限制并非随意设定——每种著名形式都编码着一套关于注意力的理论。TED把演讲上限定为18分钟，策展人认为这个长度足以容纳一个严肃的想法，又短到能锁住全程注意力。2003年由东京的建筑师发明的PechaKucha更严苛：恰好20张幻灯片、每20秒自动切换、总共6分40秒——这个形式就是为治好建筑师的絮叨而设计的。它的企业表亲Ignite用20张幻灯片、每张15秒。技术大会的闪电演讲5分钟到点即停；学术会议通常分配12–20分钟（含提问）；日本的业务"報告"或韩国的업무보고可能被期望三分钟内讲完。全球演讲俱乐部Toastmasters则把整套教学建立在5–7分钟、用红绿灯计时牌提示的演讲之上。

贯穿其中的教训是：约束让演讲变好。自动切换的形式让即兴发挥彻底不可能，从而强制排练；短形式则强制围绕一个想法做无情的取舍。用6分40秒的PechaKucha训练过的演讲者，普遍反馈他们的30分钟演讲也变好了。

想用本页练习这些形式：粘贴讲稿、选择语速，先把估算值与形式的上限对照，再对着倒计时排练。如果闪电演讲的估算显示8分30秒，不要指望练得更快——先砍掉三分之一的稿子。无论如何，计时器都会说出真相；唯一的问题是，你是在听众之前听到它，还是之后。`
			},
			code: {
				example: `Famous formats and their word budgets (at ~130 wpm):

  PechaKucha   20 slides x 20s = 6:40   ->  ~850 words
  Ignite       20 slides x 15s = 5:00   ->  ~650 words
  Lightning    5:00 hard stop           ->  ~650 words
  Toastmasters 5-7 min                  ->  650-900 words
  Academic     15:00 (12 talk + 3 Q&A)  ->  ~1,550 words
  TED          18:00 max                ->  ~2,300 words

Workflow on this page:
  paste script -> read estimate -> over the ceiling?
  cut FIRST, then rehearse with the countdown timer.`
			}
		}
	];

	const toolContent = {
		about: {
			en: 'Estimate how long your presentation will take by pasting the script. The tool counts words (English) or characters (Korean / Japanese / Chinese), then applies a slow / normal / fast speaking rate. Add slide transition time, then practice with the live countdown timer. Helpful for keeping conference talks, lectures, or speeches within their allotted time.',
			ko: '발표 원고를 붙여넣으면 예상 발표 시간을 계산합니다. 영어는 단어 수, 한국어·일본어·중국어는 글자 수를 기준으로 느림/보통/빠름의 말하기 속도를 적용합니다. 슬라이드별 소요 시간도 포함할 수 있고, 실시간 카운트다운 타이머로 연습할 수 있습니다. 학회 발표, 강의, 연설 등 정해진 시간에 맞춰야 하는 상황에 유용합니다.',
			ja: '原稿を貼り付けるだけで発表時間を見積もります。英語は単語数、日本語・韓国語・中国語は文字数を基準にゆっくり／普通／速いの3段階の話速を適用します。スライド時間も加算でき、リアルタイムのカウントダウンで練習できます。学会発表、講義、スピーチなど時間制限がある場面に便利です。',
			zh: '粘贴讲稿即可估算演讲时长。英文按单词数、中日韩按字符数计算，并支持慢 / 正常 / 快三档语速。可加入幻灯片时间，并通过倒计时器进行实战练习。适合学术演讲、课程、致辞等需要严格控时的场合。'
		},
		howTo: {
			en: [
				'Paste your speech text into the box (or check "manual" to enter a count).',
				'Choose word-counting (English) or character-counting (CJK).',
				'Pick a speaking speed: slow, normal, or fast.',
				'Optionally add the number of slides and minutes per slide.',
				'Read the estimated total, then start the timer to practice.'
			],
			ko: [
				'발표 텍스트를 입력란에 붙여넣습니다(또는 "직접 입력" 체크).',
				'영어는 단어, 한국어·일본어·중국어는 글자 모드를 선택합니다.',
				'느림/보통/빠름 중 발표 속도를 선택합니다.',
				'필요하면 슬라이드 수와 슬라이드당 시간을 추가합니다.',
				'예상 시간을 확인하고 타이머로 실제 연습을 시작합니다.'
			],
			ja: [
				'スピーチテキストを貼り付けます（または「手動入力」をチェック）。',
				'英語は単語、日本語・韓国語・中国語は文字モードを選びます。',
				'ゆっくり／普通／速いから話速を選びます。',
				'必要に応じてスライド数と1枚あたりの時間を追加します。',
				'推定時間を確認し、タイマーで練習を開始します。'
			],
			zh: [
				'粘贴讲稿到输入框（或勾选"手动输入"）。',
				'英文选单词模式，中日韩选字符模式。',
				'选择慢 / 正常 / 快的语速。',
				'可选填入幻灯片数量和每张时长。',
				'查看预计时长，然后开始计时进行练习。'
			]
		},
		useCases: {
			en: [
				'Trimming a conference talk to fit a 20-minute slot.',
				'Practicing a wedding toast or graduation speech.',
				'Coaching students for debate or oral exams.',
				'Pacing a podcast script segment to a target length.',
				'Estimating sermon, lecture, or storytime duration.'
			],
			ko: [
				'학회 발표를 20분 시간에 맞춰 분량 조정.',
				'결혼식 축사나 졸업 연설 사전 연습.',
				'학생들의 토론·구술시험 대비 코칭.',
				'팟캐스트 스크립트 분량을 목표 시간에 맞추기.',
				'설교, 강의, 동화 구연 시간 추정.'
			],
			ja: [
				'学会発表を20分枠に合わせて調整。',
				'結婚式の祝辞や卒業スピーチの練習。',
				'生徒のディベートや口述試験のコーチング。',
				'ポッドキャスト原稿の長さ調整。',
				'説教、講義、読み聞かせの時間見積もり。'
			],
			zh: [
				'调整学术演讲以契合 20 分钟时段。',
				'练习婚礼祝词或毕业致辞。',
				'指导学生准备辩论或口试。',
				'按目标时长调整播客脚本片段。',
				'估算讲道、讲座或故事时间。'
			]
		},
		faq: {
			en: [
				{ q: 'Why does the timer differ from my actual delivery?', a: 'Speaking rates vary by speaker, language, and content. Use the estimate as a baseline and adjust based on your own pace.' },
				{ q: 'What rates does the tool use?', a: 'Slow ~100 wpm / 200 cpm, normal ~130 / 270, fast ~160 / 340. Real-world averages are similar.' },
				{ q: 'Should I count CJK characters or English words?', a: 'Match the language: characters for Korean/Japanese/Chinese, words for English. Mixing texts? Use the dominant language.' },
				{ q: 'Can I save settings between visits?', a: 'No, the tool does not store data. Reload starts a fresh session.' }
			],
			ko: [
				{ q: '실제 발표 시간과 차이가 나는 이유는?', a: '말하기 속도는 사람·언어·내용에 따라 다릅니다. 추정치를 기준으로 자신의 페이스에 맞게 조정하세요.' },
				{ q: '어떤 속도 기준을 사용하나요?', a: '느림 약 100단어/분(200자/분), 보통 약 130(270), 빠름 약 160(340)입니다. 실제 평균과 비슷한 수준입니다.' },
				{ q: '한국어 발표는 글자 수와 단어 수 중 무엇으로 세야 하나요?', a: '한국어·일본어·중국어는 글자 모드를, 영어는 단어 모드를 선택하세요. 혼용 시에는 주된 언어를 기준으로 합니다.' },
				{ q: '설정이 저장되나요?', a: '아닙니다. 페이지를 새로고침하면 초기 상태로 돌아갑니다.' }
			]
		},
		related: [
			{ href: '/calculator', label: { en: 'Calculator', ko: '계산기', ja: '計算機', zh: '计算器' } },
			{ href: '/date-calculator', label: { en: 'Date Calculator', ko: '날짜 계산기', ja: '日付計算機', zh: '日期计算器' } },
			{ href: '/ladder-game', label: { en: 'Ladder Game', ko: '사다리타기', ja: 'あみだくじ', zh: '梯子游戏' } }
		],
		externalRefs: [
			{ href: 'https://en.wikipedia.org/wiki/Presentation', label: 'Presentation - Wikipedia' },
			{ href: 'https://hbr.org/2013/06/how-to-give-a-killer-presentation', label: 'HBR: How to Give a Killer Presentation' }
		]
	};

	$: lang = ($page.params.lang || 'en') as Locale;

	const translations: Record<string, Record<string, string>> = {
		en: {
			title: 'Presentation Timer',
			desc: 'Calculate speech duration from text and practice with a countdown timer.',
			textInput: 'Speech Text',
			textPlaceholder: 'Paste your speech or presentation text here...',
			manualInput: 'Or enter count manually',
			wordCount: 'Word Count',
			charCount: 'Character Count',
			countLang: 'Counting Method',
			english: 'English (words)',
			asian: 'Asian (characters)',
			speed: 'Speaking Speed',
			slow: 'Slow',
			normal: 'Normal',
			fast: 'Fast',
			wpm: 'wpm',
			cpm: 'cpm',
			slides: 'Slide Count',
			slideTime: 'Minutes per Slide',
			results: 'Estimated Duration',
			totalWords: 'Total Words',
			totalChars: 'Total Characters',
			speakingRate: 'Speaking Rate',
			textTime: 'Text Duration',
			slideTimeLabel: 'Slide Duration',
			totalTime: 'Total Estimated Time',
			practice: 'Practice Timer',
			start: 'Start',
			stop: 'Stop',
			reset: 'Reset',
			timeUp: 'Time is up!',
			useSlides: 'Include slide time',
			breakdown: 'Time Breakdown'
		},
		ko: {
			title: '발표시간 계산기',
			desc: '텍스트로 발표 시간을 계산하고 카운트다운 타이머로 연습하세요.',
			textInput: '발표 텍스트',
			textPlaceholder: '발표 또는 연설 텍스트를 붙여넣으세요...',
			manualInput: '또는 직접 입력',
			wordCount: '단어 수',
			charCount: '글자 수',
			countLang: '계산 방식',
			english: '영어 (단어)',
			asian: '아시아어 (글자)',
			speed: '말하기 속도',
			slow: '느림',
			normal: '보통',
			fast: '빠름',
			wpm: '단어/분',
			cpm: '글자/분',
			slides: '슬라이드 수',
			slideTime: '슬라이드당 시간(분)',
			results: '예상 소요 시간',
			totalWords: '총 단어 수',
			totalChars: '총 글자 수',
			speakingRate: '말하기 속도',
			textTime: '텍스트 소요 시간',
			slideTimeLabel: '슬라이드 소요 시간',
			totalTime: '총 예상 시간',
			practice: '연습 타이머',
			start: '시작',
			stop: '정지',
			reset: '초기화',
			timeUp: '시간 종료!',
			useSlides: '슬라이드 시간 포함',
			breakdown: '시간 분석'
		},
		ja: {
			title: 'プレゼン時間計算',
			desc: 'テキストからスピーチ時間を計算し、カウントダウンタイマーで練習しましょう。',
			textInput: 'スピーチテキスト',
			textPlaceholder: 'スピーチやプレゼンのテキストを貼り付けてください...',
			manualInput: 'または手動で入力',
			wordCount: '単語数',
			charCount: '文字数',
			countLang: 'カウント方法',
			english: '英語（単語）',
			asian: 'アジア語（文字）',
			speed: '話す速度',
			slow: 'ゆっくり',
			normal: '普通',
			fast: '速い',
			wpm: '語/分',
			cpm: '字/分',
			slides: 'スライド数',
			slideTime: 'スライドあたりの時間（分）',
			results: '推定所要時間',
			totalWords: '総単語数',
			totalChars: '総文字数',
			speakingRate: '話す速度',
			textTime: 'テキスト所要時間',
			slideTimeLabel: 'スライド所要時間',
			totalTime: '合計推定時間',
			practice: '練習タイマー',
			start: 'スタート',
			stop: 'ストップ',
			reset: 'リセット',
			timeUp: '時間切れ！',
			useSlides: 'スライド時間を含む',
			breakdown: '時間内訳'
		},
		zh: {
			title: '演讲时间计算器',
			desc: '从文本计算演讲时间，并使用倒计时器进行练习。',
			textInput: '演讲文本',
			textPlaceholder: '在此粘贴您的演讲或演示文本...',
			manualInput: '或手动输入',
			wordCount: '单词数',
			charCount: '字符数',
			countLang: '计算方式',
			english: '英语（单词）',
			asian: '亚洲语言（字符）',
			speed: '语速',
			slow: '慢',
			normal: '正常',
			fast: '快',
			wpm: '词/分',
			cpm: '字/分',
			slides: '幻灯片数',
			slideTime: '每张幻灯片时间（分钟）',
			results: '预计时长',
			totalWords: '总单词数',
			totalChars: '总字符数',
			speakingRate: '语速',
			textTime: '文本时长',
			slideTimeLabel: '幻灯片时长',
			totalTime: '总预计时间',
			practice: '练习计时器',
			start: '开始',
			stop: '停止',
			reset: '重置',
			timeUp: '时间到！',
			useSlides: '包含幻灯片时间',
			breakdown: '时间分析'
		}
	};

	$: t = (key: string) => translations[lang]?.[key] || translations['en'][key] || key;

	// State
	let text = '';
	let manualCount = 0;
	let useManual = false;
	let countMode: 'words' | 'chars' = lang === 'ko' || lang === 'ja' || lang === 'zh' ? 'chars' : 'words';
	let speedLevel: 'slow' | 'normal' | 'fast' = 'normal';
	let slideCount = 0;
	let minutesPerSlide = 3;
	let useSlides = false;

	// Timer
	let timerSeconds = 0;
	let timerRunning = false;
	let timerInterval: ReturnType<typeof setInterval> | null = null;
	let timeUp = false;

	const speedLevels: Array<'slow' | 'normal' | 'fast'> = ['slow', 'normal', 'fast'];

	const speeds: Record<string, { wpm: number; cpm: number }> = {
		slow: { wpm: 100, cpm: 200 },
		normal: { wpm: 130, cpm: 270 },
		fast: { wpm: 160, cpm: 340 }
	};

	$: wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
	$: charCount = text.trim() ? text.replace(/\s/g, '').length : 0;
	$: activeCount = useManual ? manualCount : (countMode === 'words' ? wordCount : charCount);
	$: currentSpeed = countMode === 'words' ? speeds[speedLevel].wpm : speeds[speedLevel].cpm;
	$: speedUnit = countMode === 'words' ? t('wpm') : t('cpm');
	$: textTimeSeconds = activeCount > 0 ? Math.round((activeCount / currentSpeed) * 60) : 0;
	$: slideTimeSeconds = useSlides ? slideCount * minutesPerSlide * 60 : 0;
	$: totalTimeSeconds = textTimeSeconds + slideTimeSeconds;

	function formatTime(seconds: number): string {
		const m = Math.floor(seconds / 60);
		const s = seconds % 60;
		return `${m}:${s.toString().padStart(2, '0')}`;
	}

	function startTimer() {
		if (totalTimeSeconds <= 0) return;
		if (!timerRunning) {
			if (timerSeconds <= 0) timerSeconds = totalTimeSeconds;
			timeUp = false;
			timerRunning = true;
			timerInterval = setInterval(() => {
				if (timerSeconds > 0) {
					timerSeconds--;
				} else {
					stopTimer();
					timeUp = true;
				}
			}, 1000);
		}
	}

	function stopTimer() {
		timerRunning = false;
		if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
	}

	function resetTimer() {
		stopTimer();
		timerSeconds = totalTimeSeconds;
		timeUp = false;
	}

	onDestroy(() => { if (timerInterval) clearInterval(timerInterval); });
</script>

<svelte:head>
	<title>{t('title')} - SD.gy</title>
	<meta name="description" content={t('desc')} />
	<link rel="canonical" href="https://sd.gy/{lang}/presentation-timer" />
	<meta property="og:title" content="{t('title')} - SD.gy" />
	<meta property="og:description" content={t('desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/presentation-timer" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('title')} - SD.gy" />
	<meta name="twitter:description" content={t('desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('desc')}</p>
	</div>

	<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
		<!-- Left: Input -->
		<div class="space-y-6">
			<!-- Text Input -->
			<div class="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl p-6">
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('textInput')}</label>
				<textarea
					bind:value={text}
					placeholder={t('textPlaceholder')}
					rows="6"
					disabled={useManual}
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 placeholder-gray-400 dark:placeholder-dark-500 focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none disabled:opacity-50"
				></textarea>
				<div class="mt-4">
					<label class="flex items-center gap-2 text-sm text-gray-600 dark:text-dark-400 cursor-pointer">
						<input type="checkbox" bind:checked={useManual} class="rounded border-gray-300 dark:border-dark-600 text-violet-500 focus:ring-violet-500" />
						{t('manualInput')}
					</label>
					{#if useManual}
						<input
							type="number"
							bind:value={manualCount}
							min="0"
							class="mt-2 w-full px-4 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent"
							placeholder={countMode === 'words' ? t('wordCount') : t('charCount')}
						/>
					{/if}
				</div>
			</div>

			<!-- Counting Method -->
			<div class="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl p-6">
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-3">{t('countLang')}</label>
				<div class="flex gap-3">
					<button on:click={() => countMode = 'words'} class="flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors {countMode === 'words' ? 'bg-violet-500 text-white' : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}">
						{t('english')}
					</button>
					<button on:click={() => countMode = 'chars'} class="flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors {countMode === 'chars' ? 'bg-violet-500 text-white' : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}">
						{t('asian')}
					</button>
				</div>
			</div>

			<!-- Speaking Speed -->
			<div class="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl p-6">
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-3">{t('speed')}</label>
				<div class="flex gap-3">
					{#each speedLevels as level}
						<button
							on:click={() => speedLevel = level}
							class="flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors {speedLevel === level ? 'bg-violet-500 text-white' : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-600'}"
						>
							<div>{t(level)}</div>
							<div class="text-xs mt-1 opacity-75">
								{countMode === 'words' ? speeds[level].wpm : speeds[level].cpm} {speedUnit}
							</div>
						</button>
					{/each}
				</div>
			</div>

			<!-- Slides -->
			<div class="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl p-6">
				<label class="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-dark-300 mb-3 cursor-pointer">
					<input type="checkbox" bind:checked={useSlides} class="rounded border-gray-300 dark:border-dark-600 text-violet-500 focus:ring-violet-500" />
					{t('useSlides')}
				</label>
				{#if useSlides}
					<div class="grid grid-cols-2 gap-4">
						<div>
							<label class="block text-xs text-gray-500 dark:text-dark-400 mb-1">{t('slides')}</label>
							<input type="number" bind:value={slideCount} min="0" class="w-full px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent" />
						</div>
						<div>
							<label class="block text-xs text-gray-500 dark:text-dark-400 mb-1">{t('slideTime')}</label>
							<input type="number" bind:value={minutesPerSlide} min="1" max="10" class="w-full px-3 py-2 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent" />
						</div>
					</div>
				{/if}
			</div>
		</div>

		<!-- Right: Results & Timer -->
		<div class="space-y-6">
			<!-- Results -->
			<div class="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl p-6">
				<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">{t('results')}</h2>
				<div class="text-center py-6 mb-4 bg-violet-50 dark:bg-violet-500/10 rounded-xl">
					<div class="text-5xl font-bold text-violet-600 dark:text-violet-400 font-mono">{formatTime(totalTimeSeconds)}</div>
					<div class="text-sm text-violet-500 mt-2">{t('totalTime')}</div>
				</div>
				<h3 class="text-sm font-medium text-gray-700 dark:text-dark-300 mb-3">{t('breakdown')}</h3>
				<div class="space-y-3">
					<div class="flex justify-between items-center py-2 border-b border-gray-100 dark:border-dark-700">
						<span class="text-sm text-gray-600 dark:text-dark-400">{countMode === 'words' ? t('totalWords') : t('totalChars')}</span>
						<span class="font-medium text-gray-900 dark:text-dark-100">{activeCount.toLocaleString()}</span>
					</div>
					<div class="flex justify-between items-center py-2 border-b border-gray-100 dark:border-dark-700">
						<span class="text-sm text-gray-600 dark:text-dark-400">{t('speakingRate')}</span>
						<span class="font-medium text-gray-900 dark:text-dark-100">{currentSpeed} {speedUnit}</span>
					</div>
					<div class="flex justify-between items-center py-2 border-b border-gray-100 dark:border-dark-700">
						<span class="text-sm text-gray-600 dark:text-dark-400">{t('textTime')}</span>
						<span class="font-medium text-gray-900 dark:text-dark-100">{formatTime(textTimeSeconds)}</span>
					</div>
					{#if useSlides}
						<div class="flex justify-between items-center py-2 border-b border-gray-100 dark:border-dark-700">
							<span class="text-sm text-gray-600 dark:text-dark-400">{t('slideTimeLabel')}</span>
							<span class="font-medium text-gray-900 dark:text-dark-100">{formatTime(slideTimeSeconds)}</span>
						</div>
					{/if}
				</div>
			</div>

			<!-- Practice Timer -->
			<div class="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl p-6">
				<h2 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-4">{t('practice')}</h2>
				<div class="text-center py-6 mb-4 rounded-xl {timeUp ? 'bg-red-50 dark:bg-red-500/10' : 'bg-gray-50 dark:bg-dark-700'}">
					<div class="text-5xl font-bold font-mono {timeUp ? 'text-red-500' : timerRunning ? 'text-green-500' : 'text-gray-900 dark:text-dark-100'}">
						{formatTime(timerSeconds > 0 ? timerSeconds : totalTimeSeconds)}
					</div>
					{#if timeUp}
						<div class="text-sm text-red-500 mt-2 font-medium">{t('timeUp')}</div>
					{/if}
				</div>
				<div class="flex gap-3">
					{#if !timerRunning}
						<button on:click={startTimer} disabled={totalTimeSeconds <= 0} class="flex-1 py-3 px-4 bg-violet-500 hover:bg-violet-600 disabled:bg-gray-300 dark:disabled:bg-dark-600 text-white rounded-xl font-medium transition-colors disabled:cursor-not-allowed">
							{t('start')}
						</button>
					{:else}
						<button on:click={stopTimer} class="flex-1 py-3 px-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-medium transition-colors">
							{t('stop')}
						</button>
					{/if}
					<button on:click={resetTimer} class="py-3 px-6 bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-700 dark:text-dark-300 rounded-xl font-medium transition-colors">
						{t('reset')}
					</button>
				</div>
			</div>
		</div>
	</div>

	<div class="mt-8">
		<AdSense type="horizontal" />
	</div>

	<ToolContent
		{lang}
		toolName="Presentation Timer"
		toolUrl="https://sd.gy/{lang}/presentation-timer"
		lastUpdated="2026-04-30"
		category="Daily Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sd.gy/${lang}` },
			{ name: 'Tools', url: `https://sd.gy/${lang}` },
			{ name: 'Presentation Timer', url: `https://sd.gy/${lang}/presentation-timer` }
		]}
		content={toolContent}
	/>

	<ToolGuide {lang} sections={guideSections} />
</div>
