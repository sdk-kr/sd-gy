<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'Why BMI Misclassifies Athletes (Body Composition Truth)',
				ko: 'BMI가 운동선수를 잘못 분류하는 이유 (체성분의 진실)'
			},
			body: {
				en: `BMI = weight (kg) / height (m)^2 was popularized by 19th-century Belgian statistician Adolphe Quetelet to describe populations, not individuals. The formula contains zero information about what the weight is made of. Skeletal muscle has a density of roughly 1.06 g/cm^3, while adipose tissue (fat) has a density of about 0.9 g/cm^3 — that 18% density gap means a lean, muscular body weighs more for the same volume than a fatter body. So a 95 kg, 180 cm rugby player at 12% body fat scores BMI 29.3 (CDC "overweight, near obese"), while a 95 kg, 180 cm sedentary office worker at 32% body fat scores the exact same 29.3. The number is identical. The cardiovascular risk profile is opposite.

Direct body composition methods exist and are dramatically more informative. DEXA (dual-energy X-ray absorptiometry) is considered the clinical gold standard, with typical errors of ±1–2 percentage points of body fat — it scans bone, lean mass, and fat separately. BIA (bioelectrical impedance analysis), the technology used by smart scales like the Withings Body+ or InBody, sends a tiny current through the body and estimates fat from electrical resistance; accuracy is sensitive to hydration status (drink a liter of water and your reading shifts) but trends across weeks are useful. Hydrostatic (underwater) weighing exploits the density gap between fat and lean tissue directly via Archimedes' principle and is highly accurate but inconvenient. Skinfold calipers, when used by a trained technician across 7 sites (Jackson-Pollock protocol), come within ±3% of DEXA at a fraction of the cost.

Waist-to-hip ratio (WHR) and waist-to-height ratio (WHtR) are the two simplest BMI complements that anyone can measure with a tape. The World Health Organization defines abdominal obesity as WHR ≥ 0.90 in men and ≥ 0.85 in women. WHtR ≥ 0.5 — meaning your waist is at least half your height — is the threshold associated with elevated metabolic risk in multiple meta-analyses, including Ashwell et al. (2012, BMJ Open). Visceral fat, the deep abdominal fat that surrounds organs, is metabolically active and far more strongly linked to type 2 diabetes and cardiovascular disease than subcutaneous fat — and BMI does not see it.

The bottom line: use BMI as a population-level screening tool and a starting flag, never as a diagnosis. If your BMI flags you as overweight but your waist is small, you carry visible muscle, and your blood markers are normal, BMI is wrong about you specifically. If your BMI is "normal" but you have a large waist, low muscle mass, and elevated blood glucose ("normal-weight obesity" or TOFI — thin-outside-fat-inside), BMI is also wrong about you. This is informational only; consult a healthcare professional for assessment of individual risk.`,
				ko: `BMI = 체중(kg) / 키(m)^2 공식은 19세기 벨기에 통계학자 Adolphe Quetelet이 인구 집단을 묘사하기 위해 만든 것이지 개인을 진단하기 위한 것이 아니었습니다. 공식 자체에는 그 체중이 무엇으로 이루어졌는지에 대한 정보가 전혀 없습니다. 골격근의 밀도는 약 1.06 g/cm^3, 지방 조직은 약 0.9 g/cm^3 — 이 18%의 밀도 차이 때문에, 같은 부피라도 근육질 몸이 지방질 몸보다 더 무겁습니다. 95 kg, 180 cm의 럭비 선수(체지방 12%)와 95 kg, 180 cm의 좌식 사무직(체지방 32%)은 동일한 BMI 29.3 — CDC 기준 "과체중, 비만 직전" — 으로 분류됩니다. 숫자는 같은데 심혈관 위험 프로필은 정반대입니다.

직접적인 체성분 측정법은 훨씬 많은 정보를 제공합니다. DEXA(이중 에너지 X선 흡수계측법)는 체지방률 오차 ±1~2%p로 임상 표준이며, 골량/제지방량/지방량을 따로 측정합니다. BIA(생체전기저항분석법)는 Withings Body+나 InBody 같은 스마트 체중계가 사용하는 기술로, 미세 전류를 몸에 흘려 전기저항으로 지방을 추정합니다 — 수분 상태에 민감해서 물 1리터를 마시면 수치가 바뀌지만 주 단위 추세 추적에는 유용합니다. 수중 체중 측정법은 아르키메데스 원리로 지방과 제지방의 밀도 차이를 직접 이용하며 정확하지만 번거롭습니다. 7부위 Jackson-Pollock 프로토콜로 훈련된 측정자가 캘리퍼로 측정하면 DEXA 대비 ±3% 이내에 들어옵니다.

허리-엉덩이 비율(WHR)과 허리-키 비율(WHtR)은 줄자만 있으면 누구나 측정할 수 있는 가장 간단한 BMI 보완 지표입니다. 세계보건기구(WHO)는 복부 비만을 남성 WHR ≥ 0.90, 여성 ≥ 0.85로 정의합니다. WHtR ≥ 0.5 — 허리둘레가 키의 절반 이상 — 은 Ashwell et al. (2012, BMJ Open)을 포함한 여러 메타분석에서 대사 위험 상승과 연관된 임계값으로 확인됐습니다. 장기를 둘러싼 깊은 복부 지방인 내장지방은 대사적으로 활성도가 높아 피하지방보다 훨씬 강하게 제2형 당뇨병과 심혈관 질환에 연관되며, BMI는 이를 전혀 측정하지 않습니다.

결론은 — BMI는 인구 단위 스크리닝 도구이자 출발점 플래그로만 사용하고 진단 도구로 사용하지 마세요. BMI가 과체중이라 해도 허리가 가늘고, 근육이 보이고, 혈액 지표가 정상이라면 BMI가 당신에게 틀린 것입니다. 반대로 BMI가 정상이지만 허리가 굵고 근육이 적고 혈당이 높다면 — "정상체중 비만" 또는 TOFI(겉마른 속비만) — 이때도 BMI는 틀립니다. 본 콘텐츠는 정보 제공 목적이며, 개인 위험 평가는 의료 전문가와 상담하세요.`
			},
			code: {
				example: `// Two bodies, identical BMI, opposite risk profiles
const player  = { kg: 95, m: 1.80, bodyFatPct: 12 }; // muscular athlete
const sitter  = { kg: 95, m: 1.80, bodyFatPct: 32 }; // sedentary worker
const bmi = (b) => b.kg / (b.m * b.m);
bmi(player); // 29.32 -> CDC "overweight"
bmi(sitter); // 29.32 -> CDC "overweight" (identical!)

// Waist-to-Height Ratio: a better single-tape signal
function whtr(waistCm, heightCm) { return waistCm / heightCm; }
whtr(95, 180);  // 0.527 -> elevated metabolic risk (Ashwell threshold 0.5)
whtr(78, 180);  // 0.433 -> low risk

// Body fat density vs muscle density (kg per liter)
const muscleDensity = 1.06;  // g/cm^3
const fatDensity    = 0.90;  // g/cm^3
// Same volume, muscle weighs ~18% more`
			}
		},
		{
			heading: {
				en: 'BMI Cutoffs Vary by Ethnicity (Asian vs Western)',
				ko: 'BMI 기준은 인종별로 다르다 (아시아 vs 서구)'
			},
			body: {
				en: `The familiar WHO cutoffs — underweight under 18.5, normal 18.5–24.9, overweight 25–29.9, obese 30+ — were derived from cohorts that were predominantly white European and North American. They do not apply uniformly across ethnicities, and pretending they do produces serious clinical errors.

In 2004, after the WHO Expert Consultation reviewed evidence from East Asian, South Asian, and Pacific populations, a separate set of "Asian-specific cutoffs" was published: overweight starts at BMI 23, and obese starts at BMI 27.5 (WHO 2004, Lancet 363:157–163). The reason is metabolic, not cosmetic — for a given BMI, Asian populations tend to carry higher percentage body fat and more visceral fat, particularly around the abdomen, and develop type 2 diabetes and cardiovascular disease at substantially lower BMI than European-descent populations. The Korean Society for the Study of Obesity (KSSO) explicitly uses BMI 23 as the overweight threshold and 25 as the obese threshold, even more conservative than the WHO Asian cutoffs.

Black populations face the opposite calibration problem in the other direction. African and African-American adults at the same BMI tend to have higher lean mass and lower visceral fat than white peers, meaning the standard 25 and 30 thresholds may slightly over-flag risk. South Asian populations (Indian, Pakistani, Bangladeshi) carry the highest visceral fat per BMI of any major group studied — UK NICE guidelines (2013, updated 2023) recommend BMI 23 overweight / 27.5 obese for South Asian, Chinese, other Asian, Middle Eastern, Black African, and African-Caribbean adults living in the UK. Polynesian and Pacific Islander populations, by contrast, often have higher lean mass and bone density, making 30 a less reliable obesity flag.

Practical implication: the result this calculator shows uses the standard WHO cutoffs. If you are of East or South Asian descent, mentally subtract roughly 2 BMI points from each threshold. If your BMI is 24 and you are Korean, Chinese, or Indian, your risk profile is closer to what BMI 26 implies for someone of European ancestry. This is not a reason to panic — it is a reason to look at additional markers (waist circumference, fasting glucose, HbA1c, lipid panel) and to discuss with a doctor familiar with ethnicity-specific risk thresholds. Educational information only; not medical advice.`,
				ko: `익숙한 WHO 기준 — 저체중 18.5 미만, 정상 18.5~24.9, 과체중 25~29.9, 비만 30+ — 는 주로 백인 유럽계와 북미 인구를 대상으로 도출됐습니다. 모든 인종에 동일하게 적용되지 않으며, 그렇게 가정하면 심각한 임상적 오류로 이어집니다.

2004년 WHO 전문가 자문위원회가 동아시아, 남아시아, 태평양 인구의 증거를 검토한 뒤 "아시아 특이 기준"을 별도로 발표했습니다 — 과체중은 BMI 23부터, 비만은 BMI 27.5부터 (WHO 2004, Lancet 363:157–163). 이유는 미용이 아니라 대사적입니다. 같은 BMI에서 아시아 인구는 체지방률, 특히 복부 내장지방 비율이 더 높고, 유럽계보다 훨씬 낮은 BMI에서 제2형 당뇨병과 심혈관 질환이 발병합니다. 대한비만학회(KSSO)는 명시적으로 BMI 23을 과체중, 25를 비만 임계값으로 사용하며, 이는 WHO 아시아 기준보다도 더 엄격합니다.

흑인 인구는 반대 방향의 보정 문제를 겪습니다. 같은 BMI에서 아프리카계 성인은 백인보다 제지방량이 더 많고 내장지방이 더 적은 경향이 있어, 25와 30이라는 표준 임계값이 위험을 약간 과대 평가할 수 있습니다. 남아시아 인구(인도, 파키스탄, 방글라데시)는 연구된 모든 주요 집단 중 BMI 대비 내장지방이 가장 많습니다 — 영국 NICE 가이드라인(2013, 2023 개정)은 영국 거주 남아시아인, 중국인, 기타 아시아인, 중동인, 흑인 아프리카인, 카리브계 흑인 성인에게 BMI 23 과체중 / 27.5 비만을 권고합니다. 반면 폴리네시아와 태평양 도서민은 제지방량과 골밀도가 높은 경우가 많아 30이 비만 지표로 신뢰성이 떨어집니다.

실무적 함의 — 이 계산기가 보여주는 결과는 표준 WHO 기준을 사용합니다. 동아시아 또는 남아시아 혈통이라면 각 임계값에서 약 2 BMI 포인트를 빼고 해석하세요. BMI가 24이고 한국인, 중국인, 인도인이라면 위험 프로필은 유럽계의 BMI 26과 가깝습니다. 패닉할 이유는 아닙니다 — 추가 지표(허리둘레, 공복혈당, HbA1c, 지질 검사)를 같이 보고, 인종별 위험 임계값에 익숙한 의사와 상담할 이유입니다. 교육용 정보일 뿐 의학적 조언이 아닙니다.`
			},
			code: {
				example: `// Standard WHO vs WHO-Asian vs Korean (KSSO) cutoffs
function classify(bmi, scheme = 'who') {
  const cuts = {
    who:     { over: 25.0, obese: 30.0 },  // WHO standard
    asian:   { over: 23.0, obese: 27.5 },  // WHO 2004 Asian
    korean:  { over: 23.0, obese: 25.0 }   // KSSO (more conservative)
  }[scheme];
  if (bmi < 18.5)            return 'underweight';
  if (bmi < cuts.over)       return 'normal';
  if (bmi < cuts.obese)      return 'overweight';
  return 'obese';
}

const myBmi = 24.0;
classify(myBmi, 'who');    // 'normal'
classify(myBmi, 'asian');  // 'overweight'
classify(myBmi, 'korean'); // 'overweight'`
			}
		},
		{
			heading: {
				en: 'Childhood BMI: Why It Uses Percentiles, Not Numbers',
				ko: '소아 BMI — 왜 절대 숫자가 아닌 백분위수를 쓰는가'
			},
			body: {
				en: `Adult BMI categories are absolute — 25 means overweight whether you are 25 or 75 years old. Childhood BMI is different in a fundamental way: a 6-year-old's body composition is not even loosely comparable to a 14-year-old's, so the same BMI number means dramatically different things at different ages and between sexes. The CDC and WHO therefore use sex-specific BMI-for-age percentiles for everyone aged 2–19, not numeric categories.

The CDC growth charts (cdc.gov/growthcharts) plot BMI against age in months, separately for boys and girls, with reference curves drawn at the 5th, 10th, 25th, 50th, 75th, 85th, 90th, 95th, and 97th percentiles. The official categorization: underweight is BMI below the 5th percentile, healthy weight is 5th to under 85th, overweight is 85th to under 95th, and obesity is 95th percentile or above. Severe obesity in children is often defined as ≥120% of the 95th percentile or ≥35 BMI absolute (whichever is lower). These cutoffs were chosen so that around 5% of the reference population would fall into each tail, defining "outlier" statistically rather than mechanistically.

The reference data matters. CDC charts are based on US NHANES survey data from 1963–1980 and 1988–1994 (the agency deliberately used pre-obesity-epidemic data so the curves represent a historically healthier baseline). WHO charts, by contrast, use a multi-country sample of breastfed infants and children raised under "optimal" conditions, and tend to flag a slightly different population as underweight in the youngest ages. Pediatricians in the US typically follow CDC for ages 2+ and WHO for under 2. The exact percentile is normally reported by the pediatric EHR, computed via the LMS method (Cole and Green 1992) which transforms skewed BMI distributions into a normal distribution using three age- and sex-specific parameters: lambda (skewness), mu (median), sigma (coefficient of variation).

Practical bottom line for parents using this calculator: the BMI number this tool shows is the same calculation, but interpreting it for a child requires looking at percentile curves, not the adult color bar. A 9-year-old girl with BMI 21 might be at the 92nd percentile (overweight), while a 14-year-old girl with the exact same BMI 21 might sit at the 65th percentile (healthy). Always defer to the percentile curve printed on the CDC or WHO chart, or — better — let the pediatrician interpret it. This is informational, not diagnostic; for any concern about a child's growth, see a pediatrician or family physician.`,
				ko: `성인 BMI 카테고리는 절대값입니다 — 25는 25살이든 75살이든 동일하게 과체중입니다. 그러나 소아 BMI는 근본적으로 다릅니다. 6세 아이의 체성분은 14세 아이와 비교 자체가 어렵기 때문에, 같은 BMI 숫자라도 연령과 성별에 따라 의미가 극적으로 달라집니다. 그래서 CDC와 WHO는 2~19세 모두에게 성별 분리 BMI-for-age 백분위수를 사용하지 절대 카테고리를 사용하지 않습니다.

CDC 성장 도표(cdc.gov/growthcharts)는 BMI를 개월 단위 연령에 대해 남아·여아 별도로 그리며, 5/10/25/50/75/85/90/95/97 백분위 기준 곡선을 표시합니다. 공식 분류는 — 저체중은 5백분위 미만, 정상은 5~85 미만, 과체중은 85~95 미만, 비만은 95백분위 이상. 소아 고도비만은 보통 95백분위의 120% 이상 또는 절대 BMI 35 이상(둘 중 낮은 쪽)으로 정의합니다. 이 임계값들은 참조 인구의 약 5%가 각 꼬리에 들어가도록 선택된 것 — 통계적 "이상치"이지 기계적 임계가 아닙니다.

참조 데이터가 중요합니다. CDC 차트는 1963~1980, 1988~1994년 미국 NHANES 조사 데이터를 기반으로 합니다 (질병통제예방센터가 의도적으로 비만 유행 이전 데이터를 써서 역사적으로 건강한 기준선을 유지). WHO 차트는 "최적" 조건에서 자란 모유 수유 영아와 아동의 다국가 표본을 사용하며, 영아기에서 약간 다른 인구를 저체중으로 표시하는 경향이 있습니다. 미국 소아과의는 보통 2세 이상에 CDC, 2세 미만에 WHO를 사용합니다. 정확한 백분위는 LMS 방법(Cole and Green 1992)으로 계산되며, 비대칭 BMI 분포를 람다(왜도), 뮤(중앙값), 시그마(변이계수)라는 세 가지 연령·성별 매개변수로 정규분포로 변환합니다.

이 계산기를 쓰는 부모를 위한 실무 결론 — 이 도구가 보여주는 BMI 숫자 자체는 동일한 계산이지만, 아이의 BMI 해석에는 성인용 컬러바가 아니라 백분위 곡선이 필요합니다. BMI 21인 9세 여아는 92백분위(과체중)일 수 있고, 동일한 BMI 21의 14세 여아는 65백분위(정상)일 수 있습니다. 항상 CDC 또는 WHO 차트의 백분위 곡선을 우선시하거나, 더 나아가 소아과의에게 해석을 맡기세요. 본 콘텐츠는 정보 제공이며 진단이 아닙니다 — 아이의 성장에 대한 우려가 있다면 소아과 또는 가정의학과를 방문하세요.`
			},
			code: {
				example: `// Same BMI, very different percentile depending on age and sex.
// Real percentile lookup uses CDC/WHO LMS tables; this is illustrative.
const child = { ageMonths: 108, sex: 'F', bmi: 21.0 }; // 9-year-old girl
// CDC 2000 LMS table lookup -> roughly 92nd percentile (overweight)

const teen  = { ageMonths: 168, sex: 'F', bmi: 21.0 }; // 14-year-old girl
// CDC 2000 LMS table lookup -> roughly 65th percentile (healthy)

// Categories used for children (CDC):
//   < 5th  percentile  : underweight
//   5-84.9 percentile  : healthy weight
//   85-94.9 percentile : overweight
//   >= 95  percentile  : obesity
//   >= 120% of 95th OR >=35 BMI : severe obesity`
			}
		}
	];

	const toolContent = {
		about: {
			en: 'BMI (Body Mass Index) is a screening number that compares weight to height (kg / m²). It is widely used to flag potential weight-related health risks for adults aged 20 and older. BMI does not measure body fat directly and ignores muscle mass, bone density, age, gender, and ethnicity. This tool is for informational purposes only and is not medical advice.',
			ko: 'BMI(체질량지수)는 몸무게를 키의 제곱으로 나눈 수치(kg/㎡)로, 성인의 체중 관련 건강 위험을 빠르게 가늠하는 지표입니다. 근육량, 골밀도, 나이, 성별, 인종을 반영하지 않으므로 정확한 체지방 측정은 아닙니다. 이 도구는 정보 제공 목적이며 의학적 진단을 대체하지 않습니다.',
			ja: 'BMI（体格指数）は体重（kg）を身長（m）の二乗で割った数値で、成人の体重関連の健康リスクを大まかに把握する指標です。筋肉量、骨密度、年齢、性別、人種を反映しないため、体脂肪の正確な測定ではありません。本ツールは情報提供のみで、医学的助言ではありません。',
			zh: 'BMI（身体质量指数）是体重（kg）除以身高（m）平方的数值，常用于评估成人体重相关的健康风险。BMI 不直接测量体脂，也不考虑肌肉量、骨密度、年龄、性别和种族差异。本工具仅供参考，不构成医疗建议。'
		},
		howTo: {
			en: [
				'Enter your height in centimeters using the input or slider.',
				'Enter your weight in kilograms.',
				'Read your BMI value and category (underweight / normal / overweight / obese).',
				'Compare your value against the WHO reference ranges shown on the scale.',
				'If your result is outside the normal range, consider consulting a doctor.'
			],
			ko: [
				'키를 센티미터(cm) 단위로 입력하거나 슬라이더로 조절합니다.',
				'몸무게를 킬로그램(kg) 단위로 입력합니다.',
				'BMI 수치와 분류(저체중/정상/과체중/비만)를 확인합니다.',
				'WHO 기준 표를 참고해 자신의 위치를 확인합니다.',
				'정상 범위를 벗어난다면 의사와 상담을 고려해 보세요.'
			],
			ja: [
				'身長をセンチメートル（cm）で入力またはスライダーで調整します。',
				'体重をキログラム（kg）で入力します。',
				'BMI値と分類（低体重／普通／過体重／肥満）を確認します。',
				'WHO基準と照らし合わせて自分の位置を確認します。',
				'正常範囲外であれば医師への相談を検討してください。'
			],
			zh: [
				'输入身高（厘米）或使用滑块调整。',
				'输入体重（千克）。',
				'查看 BMI 数值与分类（偏瘦／正常／超重／肥胖）。',
				'对照 WHO 标准查看自己所在的范围。',
				'若超出正常范围，建议咨询医生。'
			]
		},
		useCases: {
			en: [
				'Quickly checking whether your weight is in the recommended range.',
				'Tracking changes during a weight-loss or fitness program.',
				'Sharing a baseline measurement with a doctor or trainer.',
				'Filling out general health screening questionnaires.',
				'Comparing values across family members for general awareness.'
			],
			ko: [
				'현재 체중이 권장 범위 안에 있는지 빠르게 확인.',
				'다이어트나 운동 프로그램 진행 중 변화 추적.',
				'병원이나 트레이너에게 기초 수치 공유.',
				'건강검진 문진표 작성.',
				'가족 구성원 간 비교를 통한 건강 인식.'
			],
			ja: [
				'体重が推奨範囲内かを素早く確認。',
				'ダイエットや運動プログラム中の変化追跡。',
				'医師やトレーナーに基礎数値を共有。',
				'健康診断の問診票記入。',
				'家族間で比較して健康意識を高める。'
			],
			zh: [
				'快速判断体重是否在推荐范围。',
				'追踪减肥或健身计划的变化。',
				'与医生或教练分享基础数值。',
				'填写健康问卷。',
				'家庭成员间比较以增强健康意识。'
			]
		},
		faq: {
			en: [
				{ q: 'Should I consult a doctor based on this result?', a: 'Yes, if your BMI is well outside the normal range or you have other risk factors, talk to a healthcare professional. BMI alone is not a diagnosis.' },
				{ q: 'Is BMI accurate for athletes or muscular people?', a: 'Not very. Muscle weighs more than fat, so athletes often score "overweight" while having healthy body composition.' },
				{ q: 'Does BMI work for children or pregnant women?', a: 'No. Children have age-and-sex-specific percentiles, and pregnancy changes weight in ways BMI cannot interpret.' },
				{ q: 'What is a healthy BMI range?', a: 'The WHO defines 18.5 – 24.9 as normal, but the ideal range may differ slightly by ethnicity and individual factors.' }
			],
			ko: [
				{ q: '이 결과만 보고 병원에 가야 할까요?', a: 'BMI가 정상 범위에서 크게 벗어나거나 다른 위험 요인이 있다면 의사와 상담하세요. BMI 자체가 진단은 아닙니다.' },
				{ q: '운동선수나 근육이 많은 사람에게도 정확한가요?', a: '근육은 지방보다 무겁기 때문에 운동선수는 체지방이 정상이어도 "과체중"으로 나올 수 있습니다.' },
				{ q: '어린이나 임산부에게도 적용되나요?', a: '아닙니다. 어린이는 연령·성별 백분위수, 임산부는 별도 기준을 사용해야 합니다.' },
				{ q: '건강한 BMI 범위는?', a: 'WHO 기준으로 18.5~24.9가 정상입니다. 인종과 개인 차이에 따라 이상 범위는 조금씩 다를 수 있습니다.' }
			]
		},
		related: [
			{ href: '/calorie-calculator', label: { en: 'Calorie Calculator', ko: '칼로리 계산기', ja: 'カロリー計算機', zh: '卡路里计算器' } },
			{ href: '/calculator', label: { en: 'Calculator', ko: '계산기', ja: '計算機', zh: '计算器' } },
			{ href: '/percentage', label: { en: 'Percentage', ko: '퍼센트', ja: 'パーセント', zh: '百分比' } }
		],
		externalRefs: [
			{ href: 'https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight', label: 'WHO: Obesity and overweight' },
			{ href: 'https://www.cdc.gov/healthyweight/assessing/bmi/index.html', label: 'CDC: About Adult BMI' }
		]
	};

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let height = 170; // cm
	let weight = 70; // kg

	$: bmi = weight / Math.pow(height / 100, 2);
	$: bmiCategory = getBmiCategory(bmi);
	$: bmiColor = getBmiColor(bmi);

	function getBmiCategory(bmi: number): string {
		if (bmi < 18.5) return t('bmi.underweight');
		if (bmi < 25) return t('bmi.normal');
		if (bmi < 30) return t('bmi.overweight');
		return t('bmi.obese');
	}

	function getBmiColor(bmi: number): string {
		if (bmi < 18.5) return 'text-blue-500';
		if (bmi < 25) return 'text-green-500';
		if (bmi < 30) return 'text-yellow-500';
		return 'text-red-500';
	}

	function getBmiBarPosition(bmi: number): number {
		// Scale BMI to percentage (15-40 range)
		const min = 15;
		const max = 40;
		const clamped = Math.min(Math.max(bmi, min), max);
		return ((clamped - min) / (max - min)) * 100;
	}

	const bmiRanges = [
		{ label: 'bmi.underweight', range: '< 18.5', color: 'bg-blue-400' },
		{ label: 'bmi.normal', range: '18.5 - 24.9', color: 'bg-green-400' },
		{ label: 'bmi.overweight', range: '25 - 29.9', color: 'bg-yellow-400' },
		{ label: 'bmi.obese', range: '>= 30', color: 'bg-red-400' }
	];
</script>

<svelte:head>
	<title>{t('bmi.title')} - SD.gy</title>
	<meta name="description" content={t('bmi.desc')} />
	<link rel="canonical" href="https://sd.gy/{lang}/bmi-calculator" />
	<meta property="og:title" content="{t('bmi.title')} - SD.gy" />
	<meta property="og:description" content={t('bmi.desc')} />
	<meta property="og:url" content="https://sd.gy/{lang}/bmi-calculator" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SD.gy" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{t('bmi.title')} - SD.gy" />
	<meta name="twitter:description" content={t('bmi.desc')} />
</svelte:head>

<div class="max-w-2xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('bmi.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('bmi.desc')}</p>
	</div>

	<div class="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-dark-700">
		<!-- Input Fields -->
		<div class="grid grid-cols-2 gap-4 mb-6">
			<div>
				<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('bmi.height')} (cm)</label>
				<input
					type="number"
					bind:value={height}
					min="100"
					max="250"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent text-lg"
				/>
				<input
					type="range"
					bind:value={height}
					min="100"
					max="250"
					class="w-full mt-2 accent-violet-500"
				/>
			</div>
			<div>
				<label class="block text-sm text-gray-600 dark:text-dark-400 mb-2">{t('bmi.weight')} (kg)</label>
				<input
					type="number"
					bind:value={weight}
					min="30"
					max="200"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-violet-500 focus:border-transparent text-lg"
				/>
				<input
					type="range"
					bind:value={weight}
					min="30"
					max="200"
					class="w-full mt-2 accent-violet-500"
				/>
			</div>
		</div>

		<!-- BMI Result -->
		<div class="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 mb-6">
			<h3 class="text-sm text-gray-600 dark:text-dark-400 mb-2">{t('bmi.yourBmi')}</h3>
			<div class="flex items-baseline gap-3">
				<span class="text-5xl font-bold {bmiColor}">{bmi.toFixed(1)}</span>
				<span class="text-xl {bmiColor}">{bmiCategory}</span>
			</div>
		</div>

		<!-- BMI Scale -->
		<div class="mb-6">
			<div class="relative h-4 rounded-full overflow-hidden flex">
				<div class="flex-1 bg-blue-400"></div>
				<div class="flex-1 bg-green-400"></div>
				<div class="flex-1 bg-yellow-400"></div>
				<div class="flex-1 bg-red-400"></div>
			</div>
			<div
				class="relative -mt-1"
				style="left: {getBmiBarPosition(bmi)}%"
			>
				<div class="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-gray-900 dark:border-b-white transform -translate-x-1/2"></div>
			</div>
			<div class="flex justify-between text-xs text-gray-500 dark:text-dark-400 mt-2">
				<span>15</span>
				<span>18.5</span>
				<span>25</span>
				<span>30</span>
				<span>40</span>
			</div>
		</div>

		<!-- BMI Ranges -->
		<div>
			<h3 class="text-sm text-gray-600 dark:text-dark-400 mb-3">{t('bmi.range')}</h3>
			<div class="grid grid-cols-2 gap-2">
				{#each bmiRanges as range}
					<div class="flex items-center gap-2 p-2 rounded-lg bg-gray-50 dark:bg-dark-700">
						<div class="w-3 h-3 rounded-full {range.color}"></div>
						<span class="text-sm text-gray-700 dark:text-dark-300">{t(range.label)}</span>
						<span class="text-xs text-gray-500 dark:text-dark-400 ml-auto">{range.range}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<ToolContent
		{lang}
		toolName="BMI Calculator"
		toolUrl="https://sd.gy/{lang}/bmi-calculator"
		lastUpdated="2026-04-30"
		category="Daily Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sd.gy/${lang}` },
			{ name: 'Tools', url: `https://sd.gy/${lang}` },
			{ name: 'BMI Calculator', url: `https://sd.gy/${lang}/bmi-calculator` }
		]}
		content={toolContent}
	/>

	<ToolGuide {lang} sections={guideSections} />
</div>
