<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'How HR Departments Actually Count Career Years',
				ko: '인사팀은 경력을 실제로 어떻게 세는가',
				ja: '人事部はキャリア年数を実際どう数えるか',
				zh: 'HR部门实际如何计算工龄'
			},
			body: {
				en: `Total experience is not one number — it is several, depending on who is asking. In Korean hiring, the anchor document is the 경력증명서 (career certificate) each former employer issues, stating your exact start and end dates; recruiters and HR add these periods in year-month units and typically drop leftover days. Watch the ordinal convention: 연차 counts the year you are in, so someone with 2 years and 3 months of employment is in their 3년차 (third year) but has 경력 2년 (two full years of experience). Quoting "3년차" when a job posting demands "경력 3년 이상" overstates you by up to a year, and salary bands (and 호봉 steps in seniority-pay systems) are keyed to full years completed. Statutory tenure normally includes probation (수습) from day one, since Korean law treats it as part of the employment relationship.

Japan draws a sharp line between 勤続年数 — continuous years at one company, which drives retirement allowances and long-service benefits — and total career experience listed period by period in the 職務経歴書. English-market resumes and applicant tracking systems care about a third framing: "5+ years of X", where recruiters usually count only time actually doing X, not total time employed.

Before a salary negotiation, compute your total with exact dates from your certificates rather than from memory. A candidate who says "about four years" invites rounding down; one who says "3 years 11 months across two companies, verifiable" leaves no room for it.`,
				ko: `총 경력은 하나의 숫자가 아닙니다. 누가 묻느냐에 따라 여러 개입니다. 한국 채용에서 기준 문서는 전 직장들이 발급하는 경력증명서로, 정확한 입사일과 퇴사일이 적혀 있습니다. 리크루터와 인사팀은 이 기간들을 연·월 단위로 합산하고 남는 일수는 보통 버립니다. 서수 관례를 조심하세요. 연차는 지금 몇 년째인지를 세므로, 근속 2년 3개월인 사람은 3년차지만 경력은 만 2년입니다. 공고가 "경력 3년 이상"을 요구할 때 "3년차"라고 답하면 최대 1년을 부풀리는 셈이 되고, 연봉 밴드와 호봉제의 호봉도 만으로 채운 연수에 걸려 있습니다. 수습 기간은 한국 법이 근로관계의 일부로 보므로 원칙적으로 첫날부터 재직기간에 포함됩니다.

일본은 한 회사에서의 연속 근속연수(勤続年数)와 직무경력서(職務経歴書)에 기간별로 나열하는 총 경력을 뚜렷이 구분합니다. 근속연수는 퇴직금과 장기근속 혜택을 좌우합니다. 영어권 이력서와 지원자 추적 시스템(ATS)은 세 번째 프레임을 봅니다. "X 경력 5년 이상"에서 리크루터는 보통 고용된 총 기간이 아니라 실제로 X를 수행한 기간만 셉니다.

연봉 협상 전에는 기억이 아니라 경력증명서의 정확한 날짜로 총합을 계산하세요. "4년쯤 됩니다"라고 말하는 후보는 깎아 내릴 여지를 주지만, "두 회사 합산 3년 11개월, 증빙 가능합니다"라고 말하는 후보에게는 그럴 틈이 없습니다.`,
				ja: `総経験年数は1つの数字ではありません。誰が尋ねるかによって複数あります。韓国の採用で基準となる書類は各前職が発行する経歴証明書で、正確な入社日と退社日が記載されています。リクルーターと人事はこれらの期間を年・月単位で合算し、端数の日は普通切り捨てます。序数の慣習に注意してください。「年次」は今何年目かを数えるので、勤続2年3か月の人は3年目ですが、経験は満2年です。求人が「経験3年以上」を求めるときに「3年目です」と答えると最大1年水増しになり、給与バンドや年功給の号俸も満で満たした年数に紐づいています。試用期間は法律上、雇用関係の一部として原則初日から在職期間に含まれます。

日本は1つの会社での連続した勤続年数と、職務経歴書に期間ごとに並べる総経験を明確に区別します。勤続年数は退職金や永年勤続の恩恵を左右します。英語圏の履歴書と採用管理システム（ATS）は第3の枠組みで見ます。「X の経験5年以上」では、リクルーターは通常、雇用されていた総期間ではなく実際にXをしていた期間だけを数えます。

給与交渉の前には、記憶ではなく証明書の正確な日付で合計を計算しましょう。「4年くらいです」と言う候補者は切り下げの余地を与えますが、「2社合算で3年11か月、証明可能です」と言う候補者にはその隙がありません。`,
				zh: `总工龄不是一个数字，而是好几个——取决于是谁在问。在韩国招聘中，基准文件是每家前雇主开具的"经历证明书"（경력증명서），上面写着精确的入职与离职日期；招聘方和HR按年、月单位累加这些区间，零头天数通常舍去。要小心序数惯例：韩语的"年次"（연차）数的是你正处于第几年，工作满2年3个月的人是"第3年"，但经历只有满2年。当招聘要求"3年以上经验"时回答"第3年"，等于虚报了将近一年；薪酬档位（以及年功序列中的号俸）也都挂钩于已满的整年数。试用期在韩国法律上属于劳动关系的一部分，原则上从第一天起计入工龄。

日本则严格区分在一家公司连续的"勤续年数"——它决定退职金和长期服务福利——与在《职务经历书》中逐段列出的总经验。英语市场的简历和ATS筛选系统关心第三种口径："5年以上X经验"里，招聘者通常只数你实际从事X的时间，而非受雇总时长。

薪资谈判前，请用证明文件上的精确日期计算总数，而不是凭记忆。说"大概四年"的候选人给了对方向下取整的空间；说"两家公司合计3年11个月，可查证"的候选人则不留余地。`
			}
		},
		{
			heading: {
				en: '365-Day Years vs Calendar Counting: Why Totals Differ',
				ko: '365일 환산과 달력 계산 — 합계가 달라지는 이유',
				ja: '365日換算とカレンダー計算 — 合計が食い違う理由',
				zh: '365天折算与日历计数：合计为何不同'
			},
			body: {
				en: `This tool works in a deliberately simple way: it counts the exact number of days in each position, sums them, then converts using 365 days per year and 30 days per month. That is ideal for a quick resume figure, but it is not how payroll and legal systems count, and the differences are worth understanding.

Calendar (anniversary-based) counting, which HR systems use, anchors to dates: employment from March 1, 2023 to February 29, 2024 is "11 months and 29 days" by day-count conversion, but a system that checks whether the anniversary date has been reached may call it a few days short of one year — and that distinction can decide whether a one-year benefit threshold is met. Conversely, day-count conversion quietly accumulates drift: 366-day leap years each donate an extra day, so ten calendar years of continuous service converts to 10 years and 2–3 "days" here.

The second difference is the inclusive final day. Legal tenure in most jurisdictions runs through the last working day inclusive: a contract from January 1 to December 31 is one full year, 365 days. A plain subtraction of the two dates yields 364, one short. This calculator subtracts dates, so if your goal is legal service length, set the end date to the day after the final working day, or simply expect the result to read one day low per position.

For contracts, severance, or litigation, always restate the question in exact calendar dates and let the governing document define the counting rule — the convenient conversion here is an estimate, not an authority.`,
				ko: `이 도구는 의도적으로 단순하게 동작합니다. 각 직책의 정확한 일수를 세어 모두 더한 뒤 1년 = 365일, 1개월 = 30일로 환산합니다. 이력서에 쓸 빠른 수치로는 이상적이지만, 급여·법률 시스템이 세는 방식은 아니므로 차이를 알아 둘 가치가 있습니다.

인사 시스템이 쓰는 달력(기념일 기준) 계산은 날짜에 고정됩니다. 2023년 3월 1일부터 2024년 2월 29일까지의 근무는 일수 환산으로는 "11개월 29일"이지만, 입사 기념일 도달 여부를 확인하는 시스템은 1년에서 며칠 모자란다고 판정할 수 있고, 그 차이가 1년 기준 수급 요건의 충족 여부를 가를 수 있습니다. 반대로 일수 환산은 조용히 오차를 누적합니다. 366일짜리 윤년이 하루씩을 더 보태므로, 달력으로 딱 10년 연속 근속은 여기서 10년 2~3"일"로 환산됩니다.

두 번째 차이는 마지막 날 포함 여부입니다. 대부분 법제에서 재직기간은 마지막 근무일을 포함해 계산합니다. 1월 1일부터 12월 31일까지의 계약은 온전한 1년, 365일입니다. 그런데 두 날짜를 단순히 빼면 하루 모자란 364가 나옵니다. 이 계산기는 날짜를 빼는 방식이므로, 법적 재직기간이 목적이라면 종료일을 마지막 근무일 다음 날로 입력하거나, 직책마다 하루씩 적게 나온다고 감안하세요.

계약, 퇴직금, 분쟁이 걸린 문제라면 항상 질문을 정확한 달력 날짜로 다시 쓰고, 계산 규칙은 근거 문서가 정하게 하세요. 여기의 간편한 환산은 추정치이지 권위가 아닙니다.`,
				ja: `このツールは意図的にシンプルに動きます。各職歴の正確な日数を数えて合計し、1年＝365日、1か月＝30日で換算します。履歴書用の素早い数字には理想的ですが、給与・法律システムの数え方とは違うので、その差異を知っておく価値があります。

人事システムが使うカレンダー（応当日基準）計算は日付に固定されます。2023年3月1日から2024年2月29日までの勤務は日数換算では「11か月29日」ですが、入社応当日に達したかを確認するシステムは1年に数日足りないと判定することがあり、その差が勤続1年を条件とする給付の可否を分けることがあります。逆に日数換算は静かに誤差を蓄積します。366日のうるう年が1日ずつ余分に加わるため、暦でちょうど10年の連続勤務はここでは10年と2〜3「日」に換算されます。

2つ目の違いは最終日を含めるかどうかです。ほとんどの法制度で在職期間は最終勤務日を含めて計算します。1月1日から12月31日までの契約はまるまる1年、365日です。ところが2つの日付を単純に引き算すると1日足りない364になります。この計算機は日付の引き算方式なので、法的な勤続期間が目的なら終了日を最終勤務日の翌日にして入力するか、職歴ごとに1日少なく出ると見込んでください。

契約・退職金・紛争が絡む問題では、必ず質問を正確な暦の日付で言い直し、数え方のルールは根拠となる文書に決めさせましょう。ここでの手軽な換算は推定値であって、権威ではありません。`,
				zh: `本工具刻意保持简单：数出每段职位的准确天数，全部相加，再按每年365天、每月30天折算。做简历上的速算数字很理想，但这不是薪资和法律系统的数法，其中的差异值得了解。

HR系统使用的日历（周年日）计数锚定在日期上：2023年3月1日至2024年2月29日的工作，按天数折算是"11个月29天"，而检查是否到达入职周年日的系统可能判定还差几天不满一年——这个差别可能直接决定某项"满一年"待遇是否达标。反过来，天数折算会悄悄累积漂移：每个366天的闰年都多贡献一天，日历上整整十年的连续工龄在这里会折算成10年零2–3"天"。

第二个差异是末日是否包含。多数法域的法定工龄算到最后工作日当天（含）：1月1日到12月31日的合同是完整的一年、365天。但两个日期直接相减得到364，少了一天。本计算器采用日期相减，所以如果你要的是法定工龄，请把结束日期填成最后工作日的次日，或者预期每段职位的结果少一天。

涉及合同、离职补偿或诉讼时，务必把问题还原成精确的日历日期，并让相关文件来定义计数规则——这里的便捷折算只是估算，不是权威。`
			},
			code: {
				example: `Position A: 2020-03-02 -> 2022-08-31   = 912 days
Position B: 2022-10-04 -> today (2026-07-02) = 1,367 days
                                        ---------------
Total                                   = 2,279 days

Conversion used by this tool:
  2279 / 365          = 6 years, remainder 89 days
  89 / 30             = 2 months, remainder 29 days
  Result              = 6y 2m 29d

Inclusive-last-day counting (legal style) would add
1 day to Position A -> totals can differ by a day per job.`
			}
		},
		{
			heading: {
				en: 'Overlaps, Gaps, and What Counts as Experience',
				ko: '기간 중복, 공백기, 그리고 무엇이 경력인가',
				ja: '期間の重複・ブランク・何が経験に数えられるか',
				zh: '时段重叠、空档期与什么才算经验'
			},
			body: {
				en: `Each position row above is summed independently, which has one important consequence: overlapping periods are double-counted. If you freelanced from June to December while still holding a full-time job, entering both as-is credits you those seven months twice. For a resume total that a background check must survive, merge overlapping intervals first — count each calendar day at most once — and keep the side work as a separate line item described in text instead.

Gaps work the other way: they simply do not accumulate, and nothing here penalizes them. The scrutiny gaps receive is human, not arithmetic. Most recruiters ignore short breaks between jobs; gaps beyond roughly six months tend to draw a question in interviews, and the strongest answer is a factual one-liner (care work, study, relocation, a shipped side project) rather than an apology. Note that some formal processes — Korean public-sector 경력 환산 tables are an example — recognize certain non-employment periods differently from private recruiters, so the same history can convert to different totals in different systems.

What to include is a judgment call that depends on the audience. Internships, military service, part-time work, and freelancing all legitimately belong in a total when they involved the skill being claimed; some HR schemes convert part-time periods at a ratio (for instance, half credit for half-time) rather than full length. The honest pattern is to compute two numbers with this tool: total time employed, and time actually doing the work the posting asks for. Quote the second in applications; keep the first for forms that ask for raw employment history.`,
				ko: `위의 직책 행들은 각각 독립적으로 합산됩니다. 여기에는 중요한 결과가 하나 따릅니다. 겹치는 기간은 이중으로 계산됩니다. 정규직을 다니면서 6월부터 12월까지 프리랜서 일을 했다면, 둘을 그대로 입력할 경우 그 일곱 달이 두 번 인정됩니다. 평판 조회를 통과해야 하는 이력서 합계라면 먼저 겹치는 구간을 병합해 달력상 하루를 최대 한 번만 세고, 부업은 별도 항목으로 글로 설명하는 편이 안전합니다.

공백기는 반대로 작동합니다. 그저 누적되지 않을 뿐, 여기서 불이익을 주는 것은 없습니다. 공백기가 받는 검증은 산술이 아니라 사람의 몫입니다. 대부분의 리크루터는 이직 사이의 짧은 휴식을 문제 삼지 않고, 대략 6개월을 넘는 공백은 면접에서 질문을 부르는 경향이 있습니다. 가장 강한 답은 사과가 아니라 사실 한 줄(간병, 학업, 이주, 완성해 낸 사이드 프로젝트)입니다. 한국 공공기관의 경력 환산표처럼 일부 공식 절차는 특정 비고용 기간을 민간 리크루터와 다르게 인정하므로, 같은 이력도 시스템에 따라 다른 합계로 환산될 수 있습니다.

무엇을 포함할지는 청중에 달린 판단의 문제입니다. 인턴, 군 복무, 아르바이트, 프리랜서 기간도 주장하는 기술과 관련이 있었다면 합계에 정당하게 들어갑니다. 일부 인사 제도는 시간제 기간을 전체 길이가 아니라 비율(예: 반일 근무는 절반 인정)로 환산합니다. 정직한 방법은 이 도구로 두 숫자를 계산하는 것입니다. 고용된 총 기간, 그리고 공고가 요구하는 일을 실제로 한 기간. 지원서에는 두 번째를 쓰고, 첫 번째는 순수 고용 이력을 묻는 서식용으로 남겨 두세요.`,
				ja: `上の職歴の行はそれぞれ独立に合算されます。これには重要な帰結が1つあります。重複する期間は二重に数えられるのです。正社員を続けながら6月から12月までフリーランスの仕事をしていた場合、両方をそのまま入力するとその7か月が2回加算されます。経歴照会に耐えるべき履歴書の合計なら、まず重複区間を統合して暦の1日を最大1回だけ数え、副業は別項目として文章で説明する方が安全です。

ブランクは逆の働き方をします。単に加算されないだけで、ここで不利益を与えるものはありません。ブランクへの詮索は算術ではなく人間によるものです。ほとんどのリクルーターは転職間の短い休みを気にしませんが、おおよそ6か月を超えるブランクは面接で質問を招きがちです。最良の答えは謝罪ではなく事実の一行（介護、学業、転居、完成させたサイドプロジェクト）です。韓国の公共機関の経歴換算表のように、一部の公式手続きは特定の非雇用期間を民間と異なる形で認定するため、同じ経歴でもシステムによって合計が変わりえます。

何を含めるかは相手次第の判断です。インターン、兵役、アルバイト、フリーランスの期間も、主張するスキルに関わっていたなら合計に正当に入ります。一部の人事制度はパートタイム期間を全期間ではなく比率（例えば半日勤務は半分）で換算します。誠実なやり方は、このツールで2つの数字を計算することです。雇用されていた総期間と、募集が求める仕事を実際にしていた期間。応募書類には後者を書き、前者は純粋な雇用履歴を尋ねる書式のために取っておきましょう。`,
				zh: `上面的每一行职位是独立累加的，这带来一个重要后果：重叠的时段会被重复计算。如果你在全职工作的同时于6月到12月接了自由职业项目，两段原样输入会让这七个月被算两次。若这个总数要经得起背景调查，请先合并重叠区间——每个日历日最多计一次——把兼职作为单独条目用文字说明。

空档期则相反：它只是不累积，这里不会因此扣分。对空档的审视来自人而非算术。多数招聘者不在意跳槽之间的短暂休息；超过大约六个月的空档往往会在面试中被问起，而最有力的回答是实事求是的一句话（照顾家人、进修、搬迁、做完并上线的个人项目），而不是道歉。注意某些正式流程——例如韩国公共部门的工龄折算表——对特定非就业时期的认定与民间招聘不同，同一段履历在不同体系里可能折算出不同总数。

包含哪些经历取决于受众。实习、兵役、兼职、自由职业，只要涉及你所主张的技能，都可以正当计入；有些HR制度按比例折算兼职时段（如半职按一半认定），而非全长。诚实的做法是用本工具算出两个数字：受雇总时长，以及实际从事岗位所要求工作的时长。求职时引用后者；前者留给要求完整就业履历的表格。`
			}
		},
		{
			heading: {
				en: 'Tenure Thresholds That Pay: Severance, Leave, and Benefits',
				ko: '돈이 되는 근속 기준선 — 퇴직금, 연차, 복리후생',
				ja: 'お金になる勤続の節目 — 退職金・有給・福利厚生',
				zh: '与钱挂钩的工龄门槛：离职补偿、年假与福利'
			},
			body: {
				en: `Exact tenure is worth money at specific thresholds, and knowing where they sit turns this calculator into a planning tool. In Korea, statutory severance pay (퇴직금) equals roughly 30 days of average wages per year of continuous service, but only vests after one full year of employment at 15 or more hours per week — resigning at 11 months forfeits it entirely. Annual paid leave follows the Labor Standards Act: 15 days upon completing one year, one additional day per two further years, capped at 25; during the first year, workers accrue one day per completed month, up to 11.

Japan's Labor Standards Act grants 10 paid leave days after six months of service (with 80% attendance), scaling to 20 days at six and a half years. Retirement allowances there reward long tenure through taxation: the retirement-income deduction accumulates at 400,000 yen per year of service for the first 20 years and 700,000 yen per year beyond that, which is one reason Japanese career advice still treats the 20-year mark as meaningful. China's Labor Contract Law entitles employees to economic compensation of one month's wage per year of service on qualifying terminations, with half a month for periods of six months or less, and paid annual leave starts at 5 days after one cumulative year. The US, by contrast, mandates no severance or paid leave federally; tenure instead gates things like 401(k) employer-match vesting, commonly on cliffs of up to three years.

Rules like these change and carve out exceptions, so treat the dates you compute here as a checklist prompt, and confirm current law or your employment contract — or ask a labor attorney or your HR department — before making a resignation date decision that hangs on a threshold.`,
				ko: `정확한 근속 기간은 특정 기준선에서 돈이 됩니다. 그 기준선이 어디인지 알면 이 계산기는 계획 도구가 됩니다. 한국의 법정 퇴직금은 계속근로 1년당 평균임금 약 30일분이지만, 주 15시간 이상 근무로 만 1년을 채워야 발생합니다. 11개월 만에 퇴사하면 전액을 잃습니다. 연차 유급휴가는 근로기준법을 따릅니다. 1년을 채우면 15일, 이후 2년마다 1일씩 추가되어 최대 25일이고, 첫해에는 개근한 달마다 1일씩 최대 11일이 생깁니다.

일본 노동기준법은 근속 6개월(출근율 80% 이상)에 유급휴가 10일을 주고, 6년 반에 20일까지 늘립니다. 퇴직금은 세제를 통해 장기 근속을 우대합니다. 퇴직소득공제가 근속 첫 20년은 연 40만 엔, 그 이후는 연 70만 엔씩 쌓이므로, 일본의 커리어 조언이 아직도 20년 차를 의미 있게 여기는 이유 중 하나입니다. 중국 노동계약법은 요건을 충족하는 계약 종료 시 근속 1년당 월급 1개월분의 경제보상금을 주고 6개월 이하 기간은 반 달분으로 계산하며, 유급 연차는 누적 근속 1년 후 5일부터 시작합니다. 반면 미국은 연방 차원의 퇴직금·유급휴가 의무가 없고, 근속은 대신 401(k) 회사 매칭의 권리 확정(베스팅) 같은 것을 좌우하는데 최대 3년의 클리프가 흔합니다.

이런 규정은 바뀌고 예외도 많습니다. 여기서 계산한 날짜는 점검 목록의 신호로 삼고, 기준선에 걸린 퇴사일을 결정하기 전에는 현행 법령이나 근로계약서를 확인하거나 노무사·인사팀에 문의하세요.`,
				ja: `正確な勤続期間は特定の節目でお金になります。その節目がどこにあるかを知れば、この計算機は計画ツールになります。韓国の法定退職金は継続勤務1年につき平均賃金の約30日分ですが、週15時間以上の勤務で丸1年を満たして初めて発生します。11か月で退職すると全額を失います。年次有給休暇は勤労基準法に従い、1年を満たすと15日、以後2年ごとに1日追加で上限25日、最初の1年は皆勤した月ごとに1日ずつ最大11日です。

日本の労働基準法は勤続6か月（出勤率8割以上）で有給休暇10日を与え、6年半で20日まで増えます。退職金は税制を通じて長期勤続を優遇します。退職所得控除が勤続最初の20年は年40万円、それ以降は年70万円ずつ積み上がるため、日本のキャリア論が今も勤続20年を意味のある節目として扱う理由の一つです。中国の労働契約法は要件を満たす契約終了時に勤続1年につき月給1か月分の経済補償を定め、6か月以下の期間は半月分で計算し、有給年休は通算勤続1年で5日から始まります。一方、米国には連邦レベルの退職金・有給休暇の義務はなく、勤続は代わりに401(k)の会社マッチング分の権利確定（ベスティング）などを左右し、最長3年のクリフが一般的です。

こうしたルールは変わりますし例外も多いので、ここで計算した日付はチェックリストの合図とみなし、節目にかかる退職日を決める前には現行法や雇用契約書を確認するか、社会保険労務士や人事部に相談してください。`,
				zh: `精确的工龄在特定门槛上就是钱，知道门槛在哪里，这个计算器就成了规划工具。在韩国，法定离职金（퇴직금）约为每满一年连续工龄支付30天平均工资，但必须以每周15小时以上的工作满整整一年才产生——干满11个月辞职将分文没有。带薪年假依《劳动基准法》：满一年15天，此后每满两年加一天，上限25天；第一年里每出满勤一个月获得一天，最多11天。

日本《劳动基准法》规定工作满六个月（出勤率80%以上）享10天带薪假，六年半后增至20天。退职金则通过税制奖励长期任职：退职所得扣除额前20年每年累积40万日元，之后每年70万日元——这也是日本职涯建议至今仍看重"满20年"的原因之一。中国《劳动合同法》规定，符合条件的解除或终止劳动合同时，经济补偿按每满一年支付一个月工资，六个月以下按半个月计；带薪年假在累计工作满一年后从5天起步。相比之下，美国联邦层面不强制离职补偿或带薪假，工龄影响的是401(k)雇主匹配的归属权（vesting）等，最长三年的"悬崖式"归属很常见。

这类规则会修订、也充满例外。请把在这里算出的日期当作检查清单的提示，在做任何压在门槛上的离职日期决定之前，核对现行法律或你的劳动合同，或咨询劳动法律师、HR部门。`
			}
		}
	];

	const toolContent = {
		about: {
			en: 'The career calculator adds up your work experience across multiple positions and shows the total in years, months, and days. Add as many roles as you need, mark your current job, and let the tool handle overlaps and gaps. Perfect for resumes, job applications, and salary negotiations where exact tenure matters.',
			ko: '경력 계산기는 여러 회사·직책의 근무 기간을 합산해 총 경력 연차를 연·월·일 단위로 보여 줍니다. 현재 재직 중인 직책은 체크박스로 표시할 수 있고, 직책을 자유롭게 추가·삭제할 수 있습니다. 이력서, 입사 지원서, 연봉 협상 등에서 정확한 경력이 필요한 상황에 유용합니다.',
			ja: 'キャリア計算機は、複数の職歴の勤務期間を合算し、総経験年数を年・月・日で表示します。現在在籍中のポジションはチェックボックスで指定でき、職歴の追加・削除も自由に行えます。履歴書や転職、給与交渉に役立ちます。',
			zh: '工龄计算器可累加多段工作经历的时长，按年、月、日显示总工龄。可勾选当前在职岗位，并自由增删职位条目。适用于简历填写、求职申请、薪资谈判等需要精确工龄的场景。'
		},
		howTo: {
			en: [
				'Enter the start date of your first position.',
				'If still employed there, check "Current" — otherwise enter the end date.',
				'Click "Add Position" for each additional role.',
				'Review the total experience displayed in years, months, and days.',
				'Adjust dates anytime to see how breaks or new roles change your total.'
			],
			ko: [
				'첫 직책의 입사일을 입력합니다.',
				'재직 중이면 "현재" 체크박스를 선택하고, 아니면 퇴사일을 입력합니다.',
				'추가 직책마다 "직책 추가" 버튼을 누릅니다.',
				'합산된 총 경력 연차(연·월·일)를 확인합니다.',
				'날짜를 바꿔 가며 공백기·신규 경력이 합산에 미치는 영향을 살펴봅니다.'
			],
			ja: [
				'最初の職歴の入社日を入力します。',
				'在職中の場合は「現在」をチェック、それ以外は退職日を入力します。',
				'追加の職歴ごとに「職歴を追加」ボタンを押します。',
				'合計経験を年・月・日で確認します。',
				'日付を変更して、ブランクや新しい職歴の影響を確認します。'
			],
			zh: [
				'输入第一段工作的入职日期。',
				'若仍在职勾选"当前"，否则填写离职日期。',
				'每段经历点击"添加职位"按钮。',
				'查看以年、月、日显示的总工龄。',
				'调整日期以查看空档或新经历对总工龄的影响。'
			]
		},
		useCases: {
			en: [
				'Filling out the experience section on a resume or LinkedIn profile.',
				'Calculating eligibility for promotions, awards, or seniority benefits.',
				'Preparing for salary negotiations with a precise tenure number.',
				'Verifying minimum-experience requirements for job postings.',
				'Tracking total industry experience across changes of employer.'
			],
			ko: [
				'이력서나 LinkedIn 경력란 작성.',
				'승진, 표창, 호봉 등 연차에 따른 자격 확인.',
				'정확한 경력 수치를 들고 연봉 협상 준비.',
				'채용 공고의 최소 경력 요건 충족 여부 확인.',
				'이직 이력을 포함한 업계 총 경력 관리.'
			],
			ja: [
				'履歴書やLinkedInのキャリア欄記入。',
				'昇進、表彰、年功制度の対象確認。',
				'給与交渉のための正確な勤続年数の準備。',
				'求人の最低経験要件の確認。',
				'転職を含む業界総経験の管理。'
			],
			zh: [
				'填写简历或 LinkedIn 经历部分。',
				'确认晋升、表彰或年资福利资格。',
				'准备薪资谈判时的精确工龄数据。',
				'核对招聘启事的最低经验要求。',
				'追踪跨公司变动的行业总工龄。'
			]
		},
		faq: {
			en: [
				{ q: 'How are overlapping positions counted?', a: 'Each position is counted independently and added together. For accurate non-overlapping totals, avoid duplicating the same period across two positions.' },
				{ q: 'How is "1 year" defined here?', a: '365 days. The tool then groups remaining days into 30-day months for readability — useful for resumes but not for legal contracts.' },
				{ q: 'Does it count internships and contract work?', a: 'Yes. Add them as separate positions. You decide what counts as "career experience" for your purpose.' },
				{ q: 'Why are the totals slightly different from my HR system?', a: 'HR systems often use exact calendar months and may exclude probation or unpaid leave. This tool uses fixed 365-day years and 30-day months for a quick estimate.' }
			],
			ko: [
				{ q: '기간이 겹치는 직책은 어떻게 합산되나요?', a: '각 직책을 독립적으로 합산하므로, 같은 기간이 두 직책에 들어 있으면 중복 계산됩니다. 정확한 합계를 원하면 겹치지 않게 입력하세요.' },
				{ q: '"1년"의 기준은?', a: '365일을 1년으로, 남은 일수는 30일을 1개월로 환산해 표시합니다. 이력서용 빠른 추산에는 적합하지만, 법적 계약에는 정확한 캘린더 기준이 별도로 필요합니다.' },
				{ q: '인턴이나 계약직도 계산되나요?', a: '직책을 따로 추가하면 모두 합산됩니다. 어떤 경력을 포함할지는 본인의 판단에 맡깁니다.' },
				{ q: '회사 인사 시스템과 결과가 약간 다릅니다.', a: '인사 시스템은 정확한 달력 월을 사용하거나 수습·휴직을 제외하기도 합니다. 이 도구는 빠른 추산을 위해 365일·30일 기준을 사용합니다.' }
			]
		},
		related: [
			{ href: '/date-calculator', label: { en: 'Date Calculator', ko: '날짜 계산기', ja: '日付計算機', zh: '日期计算器' } },
			{ href: '/age-calculator', label: { en: 'Age Calculator', ko: '나이 계산기', ja: '年齢計算機', zh: '年龄计算器' } },
			{ href: '/salary-calculator', label: { en: 'Salary Calculator', ko: '급여 계산기', ja: '給与計算機', zh: '薪资计算器' } }
		],
		externalRefs: [
			{ href: 'https://www.bls.gov/ooh/', label: 'BLS: Occupational Outlook Handbook' },
			{ href: 'https://en.wikipedia.org/wiki/Career', label: 'Career - Wikipedia' }
		]
	};

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	interface Position {
		id: number;
		startDate: string;
		endDate: string;
		isCurrent: boolean;
	}

	let positions: Position[] = [
		{ id: 1, startDate: '2020-01-01', endDate: '', isCurrent: true }
	];

	let nextId = 2;

	function addPosition() {
		positions = [...positions, { id: nextId++, startDate: '', endDate: '', isCurrent: false }];
	}

	function removePosition(id: number) {
		positions = positions.filter(p => p.id !== id);
	}

	function toggleCurrent(id: number) {
		positions = positions.map(p => ({
			...p,
			isCurrent: p.id === id ? !p.isCurrent : p.isCurrent,
			endDate: p.id === id && !p.isCurrent ? '' : p.endDate
		}));
	}

	function calculateExperience(positions: Position[]): { years: number; months: number; days: number } {
		let totalDays = 0;
		const today = new Date();

		for (const pos of positions) {
			if (!pos.startDate) continue;

			const start = new Date(pos.startDate);
			const end = pos.isCurrent ? today : (pos.endDate ? new Date(pos.endDate) : today);

			if (end >= start) {
				const diff = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
				totalDays += diff;
			}
		}

		const years = Math.floor(totalDays / 365);
		const months = Math.floor((totalDays % 365) / 30);
		const days = totalDays % 30;

		return { years, months, days };
	}

	$: experience = calculateExperience(positions);
</script>

<svelte:head>
	<title>{t('career.title')} - SD.gy</title>
	<meta name="description" content={t('career.desc')} />
	<link rel="canonical" href="https://sd.gy/{lang}/career-calculator" />
	<meta property="og:title" content="{t('career.title')} - SD.gy" />
	<meta property="og:description" content={t('career.desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/career-calculator" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('career.title')} - SD.gy" />
	<meta name="twitter:description" content={t('career.desc')} />
</svelte:head>

<div class="max-w-2xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('career.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('career.desc')}</p>
	</div>

	<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
		<!-- Positions -->
		<div class="space-y-6">
			{#each positions as pos, i (pos.id)}
				<div class="p-4 bg-gray-50 dark:bg-dark-700 rounded-xl relative">
					<div class="flex items-center justify-between mb-4">
						<span class="text-sm font-medium text-gray-700 dark:text-dark-300">
							{t('career.position')} {i + 1}
						</span>
						{#if positions.length > 1}
							<button
								on:click={() => removePosition(pos.id)}
								class="text-red-500 hover:text-red-600 text-sm"
							>
								{t('career.removePosition')}
							</button>
						{/if}
					</div>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('career.startDate')}</label>
							<input
								type="date"
								bind:value={pos.startDate}
								class="w-full px-4 py-3 bg-white dark:bg-dark-600 border border-gray-200 dark:border-dark-500 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500"
							/>
						</div>
						<div>
							<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('career.endDate')}</label>
							{#if pos.isCurrent}
								<div class="px-4 py-3 bg-violet-100 dark:bg-violet-500/20 border border-violet-200 dark:border-violet-500/30 rounded-xl text-violet-600 dark:text-violet-300 text-center">
									{t('career.current')}
								</div>
							{:else}
								<input
									type="date"
									bind:value={pos.endDate}
									class="w-full px-4 py-3 bg-white dark:bg-dark-600 border border-gray-200 dark:border-dark-500 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500"
								/>
							{/if}
						</div>
					</div>

					<label class="flex items-center gap-2 mt-4 cursor-pointer">
						<input
							type="checkbox"
							checked={pos.isCurrent}
							on:change={() => toggleCurrent(pos.id)}
							class="w-4 h-4 text-violet-500 rounded focus:ring-violet-500"
						/>
						<span class="text-sm text-gray-600 dark:text-dark-400">{t('career.current')}</span>
					</label>
				</div>
			{/each}
		</div>

		<!-- Add Position Button -->
		<button
			on:click={addPosition}
			class="w-full mt-4 py-3 border-2 border-dashed border-gray-300 dark:border-dark-600 rounded-xl text-gray-500 dark:text-dark-400 hover:border-violet-400 hover:text-violet-500 transition-colors"
		>
			+ {t('career.addPosition')}
		</button>

		<!-- Results -->
		<div class="mt-6 bg-violet-50 dark:bg-violet-500/10 rounded-xl p-6 text-center">
			<p class="text-sm text-gray-600 dark:text-dark-400 mb-2">{t('career.totalExperience')}</p>
			<div class="text-4xl font-bold text-violet-500">
				{#if experience.years > 0}
					<span>{experience.years}</span>
					<span class="text-lg font-normal">{lang === 'ko' ? '년' : lang === 'ja' ? '年' : lang === 'zh' ? '年' : 'y'}</span>
				{/if}
				{#if experience.months > 0 || experience.years > 0}
					<span class="ml-2">{experience.months}</span>
					<span class="text-lg font-normal">{lang === 'ko' ? '개월' : lang === 'ja' ? 'ヶ月' : lang === 'zh' ? '个月' : 'm'}</span>
				{/if}
				{#if experience.days > 0 || (experience.years === 0 && experience.months === 0)}
					<span class="ml-2">{experience.days}</span>
					<span class="text-lg font-normal">{lang === 'ko' ? '일' : lang === 'ja' ? '日' : lang === 'zh' ? '天' : 'd'}</span>
				{/if}
			</div>
		</div>
	</div>

	<ToolGuide {lang} sections={guideSections} />

	<ToolContent
		{lang}
		toolName="Career Calculator"
		toolUrl="https://sd.gy/{lang}/career-calculator"
		lastUpdated="2026-04-30"
		category="Daily Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sd.gy/${lang}` },
			{ name: 'Tools', url: `https://sd.gy/${lang}` },
			{ name: 'Career Calculator', url: `https://sd.gy/${lang}/career-calculator` }
		]}
		content={toolContent}
	/>
</div>
