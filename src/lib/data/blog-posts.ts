import type { Locale } from '$lib/i18n';

export interface BlogPost {
	slug: string;
	title: Record<Locale, string>;
	description: Record<Locale, string>;
	content: Record<Locale, string>;
	date: string;
	category: string;
}

export const blogPosts: BlogPost[] = [
	{
		slug: 'compound-interest-magic',
		title: {
			en: 'The Magic of Compound Interest',
			ko: '복리 계산의 마법',
			ja: '複利計算の魔法',
			zh: '复利计算的魔力'
		},
		description: {
			en: 'Discover how compound interest can grow your wealth exponentially over time.',
			ko: '복리가 어떻게 시간이 지남에 따라 자산을 기하급수적으로 증가시키는지 알아보세요.',
			ja: '複利が時間とともにどのように資産を指数関数的に増やすかを発見しましょう。',
			zh: '了解复利如何随时间指数级增长您的财富。'
		},
		content: {
			en: `Compound interest is often called the eighth wonder of the world. Let's explore why.

## What is Compound Interest?

Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. Unlike simple interest, which only earns interest on the principal, compound interest earns interest on interest.

## The Compound Interest Formula

**A = P(1 + r/n)^(nt)**

Where:
- A = Final amount
- P = Principal (initial investment)
- r = Annual interest rate (decimal)
- n = Number of times interest compounds per year
- t = Time in years

## Real-World Example

If you invest $10,000 at 7% annual interest:

| Years | Simple Interest | Compound Interest |
|-------|----------------|-------------------|
| 10 | $17,000 | $19,672 |
| 20 | $24,000 | $38,697 |
| 30 | $31,000 | $76,123 |

## The Rule of 72

A quick way to estimate how long it takes to double your money:

**Years to double = 72 / Interest Rate**

At 8% interest, your money doubles in approximately 9 years.

## Key Takeaways

1. **Start early**: Time is your greatest ally
2. **Be consistent**: Regular contributions compound too
3. **Reinvest**: Always reinvest your earnings
4. **Be patient**: The real magic happens over decades

Use our Compound Interest Calculator to plan your financial future.`,
			ko: `복리는 종종 세계 8대 불가사의라고 불립니다. 그 이유를 알아봅시다.

## 복리란?

복리는 원금과 이전 기간에 누적된 이자 모두에 대해 계산되는 이자입니다. 원금에 대해서만 이자가 붙는 단리와 달리, 복리는 이자에 대해서도 이자가 붙습니다.

## 복리 계산 공식

**A = P(1 + r/n)^(nt)**

여기서:
- A = 최종 금액
- P = 원금 (초기 투자금)
- r = 연이율 (소수)
- n = 연간 이자 복리 횟수
- t = 기간 (년)

## 실제 예시

10,000달러를 연 7% 이자로 투자한 경우:

| 년수 | 단리 | 복리 |
|-----|------|------|
| 10년 | $17,000 | $19,672 |
| 20년 | $24,000 | $38,697 |
| 30년 | $31,000 | $76,123 |

## 72의 법칙

돈이 두 배가 되는 데 걸리는 시간을 빠르게 추정하는 방법:

**두 배 소요 기간 = 72 / 이자율**

8% 이자율에서 돈은 약 9년 만에 두 배가 됩니다.

## 핵심 포인트

1. **일찍 시작하세요**: 시간이 가장 큰 동맹입니다
2. **꾸준히 하세요**: 정기적인 추가 투자도 복리 효과가 있습니다
3. **재투자하세요**: 항상 수익을 재투자하세요
4. **인내심을 가지세요**: 진정한 마법은 수십 년에 걸쳐 일어납니다

복리 계산기를 사용하여 재정 계획을 세워보세요.`,
			ja: `複利はしばしば世界の第8の不思議と呼ばれます。その理由を探りましょう。

## 複利とは？

複利とは、元本と過去の期間に蓄積された利息の両方に対して計算される利息です。元本にのみ利息がつく単利とは異なり、複利は利息にも利息がつきます。

## 複利計算の公式

**A = P(1 + r/n)^(nt)**

ここで：
- A = 最終金額
- P = 元本（初期投資額）
- r = 年利率（小数）
- n = 年間の複利回数
- t = 期間（年）

## 実例

10,000ドルを年利7%で投資した場合：

| 年数 | 単利 | 複利 |
|-----|------|------|
| 10年 | $17,000 | $19,672 |
| 20年 | $24,000 | $38,697 |
| 30年 | $31,000 | $76,123 |

## 72の法則

お金が2倍になるまでの期間を素早く見積もる方法：

**2倍になる年数 = 72 / 金利**

8%の金利では、約9年でお金が2倍になります。

## 重要なポイント

1. **早く始める**: 時間は最大の味方です
2. **継続する**: 定期的な追加投資も複利効果があります
3. **再投資する**: 常に収益を再投資しましょう
4. **忍耐強く**: 本当の魔法は数十年かけて起こります

複利計算機を使って、財務計画を立てましょう。`,
			zh: `复利通常被称为世界第八大奇迹。让我们来探索原因。

## 什么是复利？

复利是根据本金和以前期间累积的利息计算的利息。与只对本金产生利息的单利不同，复利是利滚利。

## 复利计算公式

**A = P(1 + r/n)^(nt)**

其中：
- A = 最终金额
- P = 本金（初始投资）
- r = 年利率（小数）
- n = 每年复利次数
- t = 时间（年）

## 实际示例

以 7% 年利率投资 10,000 美元：

| 年数 | 单利 | 复利 |
|-----|------|------|
| 10年 | $17,000 | $19,672 |
| 20年 | $24,000 | $38,697 |
| 30年 | $31,000 | $76,123 |

## 72法则

快速估算资金翻倍所需时间的方法：

**翻倍年数 = 72 / 利率**

在 8% 利率下，您的资金大约 9 年翻倍。

## 关键要点

1. **尽早开始**: 时间是您最大的盟友
2. **保持一致**: 定期追加投资也有复利效应
3. **再投资**: 始终将收益再投资
4. **保持耐心**: 真正的魔力发生在数十年之后

使用我们的复利计算器规划您的财务未来。`
		},
		date: '2025-01-20',
		category: 'finance'
	},
	{
		slug: 'bmi-health-management',
		title: {
			en: 'BMI Calculation and Health Management',
			ko: 'BMI 계산과 건강 관리',
			ja: 'BMI計算と健康管理',
			zh: 'BMI 计算与健康管理'
		},
		description: {
			en: 'Learn how to calculate and interpret BMI for better health awareness.',
			ko: 'BMI를 계산하고 해석하여 건강 인식을 높이는 방법을 알아보세요.',
			ja: 'BMIの計算と解釈方法を学び、健康意識を高めましょう。',
			zh: '学习如何计算和解读 BMI，提高健康意识。'
		},
		content: {
			en: `BMI (Body Mass Index) is a simple tool to assess whether you're at a healthy weight.

## What is BMI?

BMI is a measure of body fat based on height and weight that applies to adult men and women.

## How to Calculate BMI

**BMI = weight (kg) / height (m)²**

Or in imperial units:
**BMI = weight (lb) × 703 / height (in)²**

## BMI Categories

| BMI | Category |
|-----|----------|
| Below 18.5 | Underweight |
| 18.5 - 24.9 | Normal weight |
| 25.0 - 29.9 | Overweight |
| 30.0 and above | Obese |

## BMI Calculation Examples

**Example 1**: 70 kg, 175 cm
- BMI = 70 / (1.75)² = 22.9 (Normal)

**Example 2**: 85 kg, 170 cm
- BMI = 85 / (1.70)² = 29.4 (Overweight)

## Limitations of BMI

BMI doesn't account for:
- Muscle mass (athletes may have high BMI)
- Age and gender differences
- Fat distribution
- Bone density

## Beyond BMI

Consider these additional metrics:
- **Waist circumference**: Indicates abdominal fat
- **Waist-to-hip ratio**: Shows fat distribution
- **Body fat percentage**: More accurate fat measure

## Healthy Weight Tips

1. Maintain balanced nutrition
2. Exercise regularly (150+ minutes/week)
3. Get adequate sleep (7-9 hours)
4. Manage stress
5. Stay hydrated

Use our BMI Calculator to check your current status.`,
			ko: `BMI(체질량지수)는 건강한 체중인지 평가하는 간단한 도구입니다.

## BMI란?

BMI는 성인 남녀에게 적용되는 키와 체중을 기반으로 한 체지방 측정치입니다.

## BMI 계산 방법

**BMI = 체중(kg) / 키(m)²**

## BMI 카테고리

| BMI | 분류 |
|-----|------|
| 18.5 미만 | 저체중 |
| 18.5 - 24.9 | 정상 |
| 25.0 - 29.9 | 과체중 |
| 30.0 이상 | 비만 |

## BMI 계산 예시

**예시 1**: 70kg, 175cm
- BMI = 70 / (1.75)² = 22.9 (정상)

**예시 2**: 85kg, 170cm
- BMI = 85 / (1.70)² = 29.4 (과체중)

## BMI의 한계

BMI는 다음을 고려하지 않습니다:
- 근육량 (운동선수는 BMI가 높을 수 있음)
- 나이와 성별 차이
- 지방 분포
- 골밀도

## BMI 외의 지표

추가로 고려할 지표:
- **허리둘레**: 복부 지방을 나타냄
- **허리-엉덩이 비율**: 지방 분포를 보여줌
- **체지방률**: 더 정확한 지방 측정

## 건강한 체중 관리 팁

1. 균형 잡힌 영양 섭취
2. 규칙적인 운동 (주 150분 이상)
3. 충분한 수면 (7-9시간)
4. 스트레스 관리
5. 충분한 수분 섭취

BMI 계산기를 사용하여 현재 상태를 확인하세요.`,
			ja: `BMI（体格指数）は、健康的な体重かどうかを評価するシンプルなツールです。

## BMIとは？

BMIは、成人男女に適用される身長と体重に基づく体脂肪の測定値です。

## BMIの計算方法

**BMI = 体重(kg) / 身長(m)²**

## BMIカテゴリー

| BMI | カテゴリー |
|-----|----------|
| 18.5未満 | 低体重 |
| 18.5 - 24.9 | 普通体重 |
| 25.0 - 29.9 | 過体重 |
| 30.0以上 | 肥満 |

## BMI計算例

**例1**: 70kg、175cm
- BMI = 70 / (1.75)² = 22.9（普通）

**例2**: 85kg、170cm
- BMI = 85 / (1.70)² = 29.4（過体重）

## BMIの限界

BMIは以下を考慮しません：
- 筋肉量（アスリートはBMIが高い場合がある）
- 年齢と性別の違い
- 脂肪の分布
- 骨密度

## BMI以外の指標

追加で考慮すべき指標：
- **ウエスト周囲径**: 腹部脂肪を示す
- **ウエストヒップ比**: 脂肪分布を示す
- **体脂肪率**: より正確な脂肪測定

## 健康的な体重管理のコツ

1. バランスの取れた栄養摂取
2. 定期的な運動（週150分以上）
3. 十分な睡眠（7-9時間）
4. ストレス管理
5. 十分な水分補給

BMI計算機を使って、現在の状態をチェックしましょう。`,
			zh: `BMI（身体质量指数）是评估体重是否健康的简单工具。

## 什么是 BMI？

BMI 是基于身高和体重的体脂测量，适用于成年男女。

## 如何计算 BMI

**BMI = 体重(kg) / 身高(m)²**

## BMI 分类

| BMI | 分类 |
|-----|------|
| 低于 18.5 | 体重过轻 |
| 18.5 - 24.9 | 正常体重 |
| 25.0 - 29.9 | 超重 |
| 30.0 及以上 | 肥胖 |

## BMI 计算示例

**示例 1**: 70公斤，175厘米
- BMI = 70 / (1.75)² = 22.9（正常）

**示例 2**: 85公斤，170厘米
- BMI = 85 / (1.70)² = 29.4（超重）

## BMI 的局限性

BMI 不考虑：
- 肌肉量（运动员可能 BMI 较高）
- 年龄和性别差异
- 脂肪分布
- 骨密度

## BMI 之外的指标

额外考虑的指标：
- **腰围**: 表示腹部脂肪
- **腰臀比**: 显示脂肪分布
- **体脂率**: 更准确的脂肪测量

## 健康体重管理建议

1. 保持均衡营养
2. 定期运动（每周 150 分钟以上）
3. 充足睡眠（7-9 小时）
4. 管理压力
5. 保持水分摄入

使用我们的 BMI 计算器检查您的当前状态。`
		},
		date: '2025-01-19',
		category: 'health'
	},
	{
		slug: 'percentage-calculations',
		title: {
			en: 'Percentage Calculations Made Easy',
			ko: '퍼센트 계산 쉽게 하기',
			ja: 'パーセント計算を簡単に',
			zh: '百分比计算变简单'
		},
		description: {
			en: 'Master percentage calculations with simple formulas and practical examples.',
			ko: '간단한 공식과 실용적인 예제로 퍼센트 계산을 마스터하세요.',
			ja: '簡単な公式と実用的な例でパーセント計算をマスターしましょう。',
			zh: '用简单的公式和实际示例掌握百分比计算。'
		},
		content: {
			en: `Percentages are everywhere in daily life. Let's master the calculations.

## Basic Percentage Formulas

### Finding a Percentage of a Number
**X% of Y = (X/100) × Y**

Example: 25% of 80 = (25/100) × 80 = 20

### Finding What Percentage X is of Y
**Percentage = (X/Y) × 100**

Example: What % is 15 of 60? = (15/60) × 100 = 25%

### Finding the Whole from a Percentage
**Whole = (Part × 100) / Percentage**

Example: 30 is 20% of what? = (30 × 100) / 20 = 150

## Common Percentage Problems

### Discount Calculation
Original price: $80, Discount: 25%
- Discount amount = $80 × 0.25 = $20
- Final price = $80 - $20 = $60

### Price Increase
Original: $50, Increase: 15%
- Increase = $50 × 0.15 = $7.50
- New price = $50 + $7.50 = $57.50

### Percentage Change
Old value: 200, New value: 250
- Change = ((250-200)/200) × 100 = 25% increase

## Mental Math Tricks

- **10%**: Move decimal one place left
- **5%**: Half of 10%
- **15%**: 10% + 5%
- **20%**: Double 10%
- **25%**: Divide by 4
- **50%**: Divide by 2

## Real-Life Applications

1. **Shopping**: Calculate discounts and sales tax
2. **Finance**: Interest rates, returns, tips
3. **Grades**: Test scores and GPA
4. **Cooking**: Recipe scaling
5. **Statistics**: Data analysis

Use our Percentage Calculator for instant results.`,
			ko: `퍼센트는 일상생활 곳곳에 있습니다. 계산법을 마스터해봅시다.

## 기본 퍼센트 공식

### 숫자의 퍼센트 구하기
**Y의 X% = (X/100) × Y**

예: 80의 25% = (25/100) × 80 = 20

### X가 Y의 몇 퍼센트인지 구하기
**퍼센트 = (X/Y) × 100**

예: 15는 60의 몇 %? = (15/60) × 100 = 25%

### 퍼센트에서 전체 구하기
**전체 = (부분 × 100) / 퍼센트**

예: 30이 20%라면 전체는? = (30 × 100) / 20 = 150

## 일반적인 퍼센트 문제

### 할인 계산
원래 가격: 80,000원, 할인: 25%
- 할인 금액 = 80,000 × 0.25 = 20,000원
- 최종 가격 = 80,000 - 20,000 = 60,000원

### 가격 인상
원래: 50,000원, 인상: 15%
- 인상분 = 50,000 × 0.15 = 7,500원
- 새 가격 = 50,000 + 7,500 = 57,500원

### 변화율
이전 값: 200, 새 값: 250
- 변화 = ((250-200)/200) × 100 = 25% 증가

## 암산 팁

- **10%**: 소수점을 왼쪽으로 한 칸 이동
- **5%**: 10%의 절반
- **15%**: 10% + 5%
- **20%**: 10%의 두 배
- **25%**: 4로 나누기
- **50%**: 2로 나누기

## 실생활 응용

1. **쇼핑**: 할인 및 세금 계산
2. **금융**: 이자율, 수익률, 팁
3. **성적**: 시험 점수와 평점
4. **요리**: 레시피 조절
5. **통계**: 데이터 분석

퍼센트 계산기를 사용하여 즉시 결과를 얻으세요.`,
			ja: `パーセントは日常生活のあらゆる場所にあります。計算をマスターしましょう。

## 基本的なパーセント公式

### 数値のパーセントを求める
**YのX% = (X/100) × Y**

例：80の25% = (25/100) × 80 = 20

### XがYの何パーセントかを求める
**パーセント = (X/Y) × 100**

例：15は60の何%？ = (15/60) × 100 = 25%

### パーセントから全体を求める
**全体 = (部分 × 100) / パーセント**

例：30が20%なら全体は？ = (30 × 100) / 20 = 150

## 一般的なパーセント問題

### 割引計算
元の価格：8,000円、割引：25%
- 割引額 = 8,000 × 0.25 = 2,000円
- 最終価格 = 8,000 - 2,000 = 6,000円

### 価格上昇
元：5,000円、上昇：15%
- 上昇分 = 5,000 × 0.15 = 750円
- 新価格 = 5,000 + 750 = 5,750円

### 変化率
旧値：200、新値：250
- 変化 = ((250-200)/200) × 100 = 25%増加

## 暗算のコツ

- **10%**: 小数点を左に1つ移動
- **5%**: 10%の半分
- **15%**: 10% + 5%
- **20%**: 10%の2倍
- **25%**: 4で割る
- **50%**: 2で割る

## 実生活での応用

1. **ショッピング**: 割引と税金の計算
2. **金融**: 金利、収益率、チップ
3. **成績**: テストの点数とGPA
4. **料理**: レシピの調整
5. **統計**: データ分析

パーセント計算機を使って、すぐに結果を得ましょう。`,
			zh: `百分比在日常生活中无处不在。让我们掌握计算方法。

## 基本百分比公式

### 求一个数的百分比
**Y 的 X% = (X/100) × Y**

例：80 的 25% = (25/100) × 80 = 20

### 求 X 是 Y 的百分之几
**百分比 = (X/Y) × 100**

例：15 是 60 的百分之几？ = (15/60) × 100 = 25%

### 从百分比求整体
**整体 = (部分 × 100) / 百分比**

例：30 是 20%，整体是多少？ = (30 × 100) / 20 = 150

## 常见百分比问题

### 折扣计算
原价：80元，折扣：25%
- 折扣金额 = 80 × 0.25 = 20元
- 最终价格 = 80 - 20 = 60元

### 价格上涨
原价：50元，上涨：15%
- 上涨金额 = 50 × 0.15 = 7.50元
- 新价格 = 50 + 7.50 = 57.50元

### 变化率
旧值：200，新值：250
- 变化 = ((250-200)/200) × 100 = 25% 增长

## 心算技巧

- **10%**: 小数点左移一位
- **5%**: 10% 的一半
- **15%**: 10% + 5%
- **20%**: 10% 的两倍
- **25%**: 除以 4
- **50%**: 除以 2

## 实际应用

1. **购物**: 计算折扣和税费
2. **金融**: 利率、收益率、小费
3. **成绩**: 考试分数和 GPA
4. **烹饪**: 调整食谱
5. **统计**: 数据分析

使用我们的百分比计算器获得即时结果。`
		},
		date: '2025-01-18',
		category: 'math'
	},
	{
		slug: 'date-calculations',
		title: {
			en: 'Date Calculation Tips and Tricks',
			ko: '날짜 계산 활용법',
			ja: '日付計算のコツとテクニック',
			zh: '日期计算技巧'
		},
		description: {
			en: 'Learn various date calculation methods for planning and scheduling.',
			ko: '계획 및 일정 관리를 위한 다양한 날짜 계산 방법을 알아보세요.',
			ja: '計画やスケジュール管理のためのさまざまな日付計算方法を学びましょう。',
			zh: '学习各种日期计算方法，用于规划和安排。'
		},
		content: {
			en: `Date calculations are essential for planning, scheduling, and project management.

## Common Date Calculations

### Days Between Two Dates
Simply count the days or use a calculator:
- Start: January 15
- End: March 10
- Days: 54 days (in non-leap year)

### Add/Subtract Days from a Date
Starting from March 1, add 45 days:
- March has 31 days: 31 - 1 = 30 days remaining
- 45 - 30 = 15 days into April
- Result: April 15

### Weeks and Days
90 days = how many weeks and days?
- 90 ÷ 7 = 12 weeks and 6 days

## Working Days Calculation

### Excluding Weekends
To find working days in a month:
1. Count total days
2. Count weekend days (Saturdays and Sundays)
3. Subtract: Total - Weekends = Working days

Example: January 2025
- Total days: 31
- Weekends: 8 (4 Saturdays + 4 Sundays)
- Working days: 23

## Special Date Calculations

### Due Date from Weeks
Pregnancy due date (40 weeks from last period):
- Last period: January 1
- Due date: October 8

### Countdown
Days until an event:
- Today: January 15
- Event: December 25
- Days remaining: 344 days

## Date Formulas

### Leap Year Check
A year is a leap year if:
- Divisible by 4, AND
- Not divisible by 100, OR
- Divisible by 400

### Days in Each Month
"30 days has September, April, June, and November..."

Use our Date Calculator for accurate calculations.`,
			ko: `날짜 계산은 계획, 일정 관리, 프로젝트 관리에 필수적입니다.

## 일반적인 날짜 계산

### 두 날짜 사이의 일수
단순히 일수를 세거나 계산기를 사용하세요:
- 시작: 1월 15일
- 종료: 3월 10일
- 일수: 54일 (윤년이 아닌 해)

### 날짜에서 일수 더하기/빼기
3월 1일부터 45일 추가:
- 3월은 31일: 31 - 1 = 30일 남음
- 45 - 30 = 4월의 15일
- 결과: 4월 15일

### 주와 일
90일 = 몇 주 며칠?
- 90 ÷ 7 = 12주 6일

## 근무일 계산

### 주말 제외
한 달의 근무일 찾기:
1. 총 일수 계산
2. 주말 일수 계산 (토요일과 일요일)
3. 빼기: 총일수 - 주말 = 근무일

예: 2025년 1월
- 총 일수: 31
- 주말: 8일 (토요일 4일 + 일요일 4일)
- 근무일: 23일

## 특별한 날짜 계산

### 주 단위 예정일
임신 출산 예정일 (마지막 생리일로부터 40주):
- 마지막 생리: 1월 1일
- 예정일: 10월 8일

### 카운트다운
이벤트까지 남은 일수:
- 오늘: 1월 15일
- 이벤트: 12월 25일
- 남은 일수: 344일

## 날짜 공식

### 윤년 확인
다음 조건을 만족하면 윤년:
- 4로 나누어지고, 그리고
- 100으로 나누어지지 않거나, 또는
- 400으로 나누어짐

### 각 달의 일수
"9월, 4월, 6월, 11월은 30일..."

정확한 계산을 위해 날짜 계산기를 사용하세요.`,
			ja: `日付計算は、計画、スケジュール管理、プロジェクト管理に不可欠です。

## 一般的な日付計算

### 2つの日付間の日数
単純に日数を数えるか、計算機を使用：
- 開始：1月15日
- 終了：3月10日
- 日数：54日（うるう年でない場合）

### 日付に日数を足す/引く
3月1日から45日を追加：
- 3月は31日：31 - 1 = 30日残り
- 45 - 30 = 4月の15日
- 結果：4月15日

### 週と日
90日 = 何週間と何日？
- 90 ÷ 7 = 12週間と6日

## 営業日計算

### 週末を除く
1ヶ月の営業日を求める：
1. 総日数を数える
2. 週末の日数を数える（土曜日と日曜日）
3. 引く：総日数 - 週末 = 営業日

例：2025年1月
- 総日数：31
- 週末：8日（土曜4日 + 日曜4日）
- 営業日：23日

## 特別な日付計算

### 週単位の予定日
妊娠出産予定日（最終月経から40週）：
- 最終月経：1月1日
- 予定日：10月8日

### カウントダウン
イベントまでの日数：
- 今日：1月15日
- イベント：12月25日
- 残り日数：344日

## 日付の公式

### うるう年の確認
以下の条件を満たすとうるう年：
- 4で割り切れる、かつ
- 100で割り切れない、または
- 400で割り切れる

### 各月の日数
「30日あるのは9月、4月、6月、11月...」

正確な計算には日付計算機を使いましょう。`,
			zh: `日期计算对于规划、日程安排和项目管理至关重要。

## 常见日期计算

### 两个日期之间的天数
简单地数天数或使用计算器：
- 开始：1月15日
- 结束：3月10日
- 天数：54天（非闰年）

### 日期加减天数
从3月1日起加45天：
- 3月有31天：31 - 1 = 剩余30天
- 45 - 30 = 4月的第15天
- 结果：4月15日

### 周和天
90天 = 多少周零几天？
- 90 ÷ 7 = 12周零6天

## 工作日计算

### 排除周末
计算一个月的工作日：
1. 计算总天数
2. 计算周末天数（周六和周日）
3. 相减：总天数 - 周末 = 工作日

示例：2025年1月
- 总天数：31
- 周末：8天（4个周六 + 4个周日）
- 工作日：23天

## 特殊日期计算

### 周数预产期
怀孕预产期（末次月经后40周）：
- 末次月经：1月1日
- 预产期：10月8日

### 倒计时
距离活动的天数：
- 今天：1月15日
- 活动：12月25日
- 剩余天数：344天

## 日期公式

### 闰年判断
满足以下条件为闰年：
- 能被4整除，且
- 不能被100整除，或
- 能被400整除

### 每月天数
"三十天的月份有九月、四月、六月和十一月..."

使用我们的日期计算器进行准确计算。`
		},
		date: '2025-01-17',
		category: 'date'
	},
	{
		slug: 'unit-conversion-guide',
		title: {
			en: 'Unit Conversion Complete Guide',
			ko: '단위 변환 완벽 정리',
			ja: '単位変換完全ガイド',
			zh: '单位换算完整指南'
		},
		description: {
			en: 'Master common unit conversions for length, weight, temperature, and more.',
			ko: '길이, 무게, 온도 등 일반적인 단위 변환을 마스터하세요.',
			ja: '長さ、重さ、温度などの一般的な単位変換をマスターしましょう。',
			zh: '掌握长度、重量、温度等常见单位换算。'
		},
		content: {
			en: `Unit conversion is a fundamental skill for science, cooking, travel, and daily life.

## Length Conversions

### Metric System
- 1 kilometer (km) = 1,000 meters (m)
- 1 meter (m) = 100 centimeters (cm)
- 1 centimeter (cm) = 10 millimeters (mm)

### Imperial to Metric
- 1 inch = 2.54 cm
- 1 foot = 30.48 cm
- 1 yard = 0.9144 m
- 1 mile = 1.609 km

## Weight Conversions

### Metric System
- 1 kilogram (kg) = 1,000 grams (g)
- 1 gram (g) = 1,000 milligrams (mg)

### Imperial to Metric
- 1 ounce (oz) = 28.35 g
- 1 pound (lb) = 453.6 g = 0.4536 kg

## Temperature Conversions

### Formulas
**Celsius to Fahrenheit**:
F = (C × 9/5) + 32

**Fahrenheit to Celsius**:
C = (F - 32) × 5/9

### Quick Reference
| Celsius | Fahrenheit |
|---------|------------|
| 0°C | 32°F (freezing) |
| 20°C | 68°F (room temp) |
| 37°C | 98.6°F (body temp) |
| 100°C | 212°F (boiling) |

## Volume Conversions

### Metric
- 1 liter (L) = 1,000 milliliters (mL)

### Imperial
- 1 gallon = 3.785 L
- 1 cup = 236.6 mL

## Quick Conversion Tips

1. **Km to Miles**: Multiply by 0.62
2. **Miles to Km**: Multiply by 1.6
3. **Kg to Lbs**: Multiply by 2.2
4. **Lbs to Kg**: Divide by 2.2

Use our Unit Converter for instant, accurate conversions.`,
			ko: `단위 변환은 과학, 요리, 여행, 일상생활에서 기본적인 기술입니다.

## 길이 변환

### 미터법
- 1 킬로미터(km) = 1,000 미터(m)
- 1 미터(m) = 100 센티미터(cm)
- 1 센티미터(cm) = 10 밀리미터(mm)

### 야드파운드법 → 미터법
- 1 인치 = 2.54 cm
- 1 피트 = 30.48 cm
- 1 야드 = 0.9144 m
- 1 마일 = 1.609 km

## 무게 변환

### 미터법
- 1 킬로그램(kg) = 1,000 그램(g)
- 1 그램(g) = 1,000 밀리그램(mg)

### 야드파운드법 → 미터법
- 1 온스(oz) = 28.35 g
- 1 파운드(lb) = 453.6 g = 0.4536 kg

## 온도 변환

### 공식
**섭씨 → 화씨**:
F = (C × 9/5) + 32

**화씨 → 섭씨**:
C = (F - 32) × 5/9

### 빠른 참조
| 섭씨 | 화씨 |
|------|------|
| 0°C | 32°F (어는점) |
| 20°C | 68°F (실온) |
| 37°C | 98.6°F (체온) |
| 100°C | 212°F (끓는점) |

## 부피 변환

### 미터법
- 1 리터(L) = 1,000 밀리리터(mL)

### 야드파운드법
- 1 갤런 = 3.785 L
- 1 컵 = 236.6 mL

## 빠른 변환 팁

1. **Km → 마일**: 0.62 곱하기
2. **마일 → Km**: 1.6 곱하기
3. **Kg → 파운드**: 2.2 곱하기
4. **파운드 → Kg**: 2.2로 나누기

단위 변환기를 사용하여 즉시 정확하게 변환하세요.`,
			ja: `単位変換は、科学、料理、旅行、日常生活で基本的なスキルです。

## 長さの変換

### メートル法
- 1キロメートル(km) = 1,000メートル(m)
- 1メートル(m) = 100センチメートル(cm)
- 1センチメートル(cm) = 10ミリメートル(mm)

### ヤード・ポンド法 → メートル法
- 1インチ = 2.54 cm
- 1フィート = 30.48 cm
- 1ヤード = 0.9144 m
- 1マイル = 1.609 km

## 重さの変換

### メートル法
- 1キログラム(kg) = 1,000グラム(g)
- 1グラム(g) = 1,000ミリグラム(mg)

### ヤード・ポンド法 → メートル法
- 1オンス(oz) = 28.35 g
- 1ポンド(lb) = 453.6 g = 0.4536 kg

## 温度の変換

### 公式
**摂氏 → 華氏**：
F = (C × 9/5) + 32

**華氏 → 摂氏**：
C = (F - 32) × 5/9

### クイックリファレンス
| 摂氏 | 華氏 |
|------|------|
| 0°C | 32°F（凍結点）|
| 20°C | 68°F（室温）|
| 37°C | 98.6°F（体温）|
| 100°C | 212°F（沸点）|

## 体積の変換

### メートル法
- 1リットル(L) = 1,000ミリリットル(mL)

### ヤード・ポンド法
- 1ガロン = 3.785 L
- 1カップ = 236.6 mL

## クイック変換のコツ

1. **Km → マイル**: 0.62を掛ける
2. **マイル → Km**: 1.6を掛ける
3. **Kg → ポンド**: 2.2を掛ける
4. **ポンド → Kg**: 2.2で割る

単位変換機を使って、即座に正確な変換を行いましょう。`,
			zh: `单位换算是科学、烹饪、旅行和日常生活的基本技能。

## 长度换算

### 公制
- 1 千米(km) = 1,000 米(m)
- 1 米(m) = 100 厘米(cm)
- 1 厘米(cm) = 10 毫米(mm)

### 英制 → 公制
- 1 英寸 = 2.54 cm
- 1 英尺 = 30.48 cm
- 1 码 = 0.9144 m
- 1 英里 = 1.609 km

## 重量换算

### 公制
- 1 千克(kg) = 1,000 克(g)
- 1 克(g) = 1,000 毫克(mg)

### 英制 → 公制
- 1 盎司(oz) = 28.35 g
- 1 磅(lb) = 453.6 g = 0.4536 kg

## 温度换算

### 公式
**摄氏 → 华氏**：
F = (C × 9/5) + 32

**华氏 → 摄氏**：
C = (F - 32) × 5/9

### 快速参考
| 摄氏 | 华氏 |
|------|------|
| 0°C | 32°F（冰点）|
| 20°C | 68°F（室温）|
| 37°C | 98.6°F（体温）|
| 100°C | 212°F（沸点）|

## 体积换算

### 公制
- 1 升(L) = 1,000 毫升(mL)

### 英制
- 1 加仑 = 3.785 L
- 1 杯 = 236.6 mL

## 快速换算技巧

1. **千米 → 英里**: 乘以 0.62
2. **英里 → 千米**: 乘以 1.6
3. **千克 → 磅**: 乘以 2.2
4. **磅 → 千克**: 除以 2.2

使用我们的单位换算器进行即时、准确的换算。`
		},
		date: '2025-01-16',
		category: 'conversion'
	},
	{
		slug: 'loan-interest-calculation',
		title: {
			en: 'How to Calculate Loan Interest',
			ko: '대출 이자 계산 방법',
			ja: 'ローン利息の計算方法',
			zh: '如何计算贷款利息'
		},
		description: {
			en: 'Understand different loan interest calculation methods and repayment options.',
			ko: '다양한 대출 이자 계산 방법과 상환 옵션을 이해하세요.',
			ja: 'さまざまなローン利息計算方法と返済オプションを理解しましょう。',
			zh: '了解不同的贷款利息计算方法和还款选项。'
		},
		content: {
			en: `Understanding loan interest helps you make better financial decisions.

## Types of Interest

### Simple Interest
Interest calculated only on the principal amount.

**Formula**: I = P × r × t
- I = Interest
- P = Principal
- r = Annual rate
- t = Time in years

### Compound Interest
Interest calculated on principal plus accumulated interest.

**Formula**: A = P(1 + r/n)^(nt)

## Loan Repayment Methods

### Equal Principal Payment
- Principal payment is constant
- Interest decreases over time
- Total payment decreases each month

### Equal Total Payment (Amortization)
- Monthly payment stays the same
- Early payments are mostly interest
- Later payments are mostly principal

## Example Calculation

**Loan**: $100,000
**Interest**: 5% annual
**Term**: 30 years

### Monthly Payment (Amortization)
M = P × [r(1+r)^n] / [(1+r)^n - 1]
- M = $536.82/month
- Total paid: $193,256
- Total interest: $93,256

## APR vs Interest Rate

- **Interest Rate**: Base cost of borrowing
- **APR**: Includes fees and other costs
- APR gives a more accurate total cost

## Tips for Borrowers

1. Compare APRs, not just interest rates
2. Consider shorter terms for less total interest
3. Check for prepayment penalties
4. Understand fixed vs variable rates
5. Factor in all fees and closing costs

Use our Loan Calculator to plan your borrowing.`,
			ko: `대출 이자를 이해하면 더 나은 재정 결정을 내릴 수 있습니다.

## 이자의 종류

### 단리
원금에 대해서만 계산되는 이자.

**공식**: I = P × r × t
- I = 이자
- P = 원금
- r = 연이율
- t = 기간(년)

### 복리
원금과 누적 이자에 대해 계산되는 이자.

**공식**: A = P(1 + r/n)^(nt)

## 대출 상환 방식

### 원금균등상환
- 원금 상환액이 일정
- 이자는 시간이 지남에 따라 감소
- 총 상환액이 매월 감소

### 원리금균등상환
- 월 상환액이 동일
- 초기 상환금은 대부분 이자
- 후기 상환금은 대부분 원금

## 계산 예시

**대출금**: 1억원
**이자율**: 연 5%
**기간**: 30년

### 월 상환액 (원리금균등)
M = P × [r(1+r)^n] / [(1+r)^n - 1]
- M = 약 537,000원/월
- 총 상환액: 약 1억 9,300만원
- 총 이자: 약 9,300만원

## APR vs 이자율

- **이자율**: 기본 차입 비용
- **APR**: 수수료 및 기타 비용 포함
- APR이 더 정확한 총 비용을 제공

## 차입자를 위한 팁

1. 이자율만이 아닌 APR을 비교하세요
2. 총 이자를 줄이려면 짧은 기간을 고려하세요
3. 조기상환 수수료를 확인하세요
4. 고정금리 vs 변동금리를 이해하세요
5. 모든 수수료와 마감 비용을 고려하세요

대출 계산기를 사용하여 차입을 계획하세요.`,
			ja: `ローン利息を理解することで、より良い財務判断ができます。

## 利息の種類

### 単利
元本に対してのみ計算される利息。

**公式**: I = P × r × t
- I = 利息
- P = 元本
- r = 年利率
- t = 期間（年）

### 複利
元本と蓄積された利息に対して計算される利息。

**公式**: A = P(1 + r/n)^(nt)

## ローン返済方法

### 元金均等返済
- 元金返済額が一定
- 利息は時間とともに減少
- 総返済額が毎月減少

### 元利均等返済
- 月々の返済額が同じ
- 初期の返済は主に利息
- 後期の返済は主に元金

## 計算例

**ローン額**: 1,000万円
**金利**: 年5%
**期間**: 30年

### 月々の返済額（元利均等）
M = P × [r(1+r)^n] / [(1+r)^n - 1]
- M = 約53,700円/月
- 総返済額: 約1,930万円
- 総利息: 約930万円

## APR vs 金利

- **金利**: 借入の基本コスト
- **APR**: 手数料やその他のコストを含む
- APRはより正確な総コストを提供

## 借り手へのアドバイス

1. 金利だけでなくAPRを比較する
2. 総利息を減らすには短い期間を検討
3. 繰上返済手数料を確認
4. 固定金利 vs 変動金利を理解する
5. すべての手数料と諸費用を考慮

ローン計算機を使って、借入計画を立てましょう。`,
			zh: `了解贷款利息有助于您做出更好的财务决策。

## 利息类型

### 单利
仅根据本金计算的利息。

**公式**: I = P × r × t
- I = 利息
- P = 本金
- r = 年利率
- t = 时间（年）

### 复利
根据本金和累计利息计算的利息。

**公式**: A = P(1 + r/n)^(nt)

## 贷款还款方式

### 等额本金
- 本金还款额固定
- 利息随时间递减
- 每月总还款额递减

### 等额本息
- 每月还款额相同
- 早期还款主要是利息
- 后期还款主要是本金

## 计算示例

**贷款额**: 100万元
**利率**: 年5%
**期限**: 30年

### 月还款额（等额本息）
M = P × [r(1+r)^n] / [(1+r)^n - 1]
- M = 约5,368元/月
- 总还款额: 约193万元
- 总利息: 约93万元

## APR vs 利率

- **利率**: 基本借贷成本
- **APR**: 包括费用和其他成本
- APR 提供更准确的总成本

## 借款人提示

1. 比较 APR，而不仅是利率
2. 考虑较短期限以减少总利息
3. 检查提前还款罚款
4. 了解固定利率与浮动利率
5. 考虑所有费用和交割成本

使用我们的贷款计算器规划您的借款。`
		},
		date: '2025-01-15',
		category: 'finance'
	},
	{
		slug: 'tip-calculation-etiquette',
		title: {
			en: 'Tip Calculation Etiquette Around the World',
			ko: '팁 계산 에티켓',
			ja: 'チップ計算のエチケット',
			zh: '小费计算礼仪'
		},
		description: {
			en: 'Learn tipping customs and how to calculate tips in different countries.',
			ko: '다양한 국가의 팁 관습과 팁 계산 방법을 알아보세요.',
			ja: '各国のチップ習慣とチップの計算方法を学びましょう。',
			zh: '了解不同国家的小费习俗和计算方法。'
		},
		content: {
			en: `Tipping customs vary greatly around the world. Here's your guide.

## United States

### Standard Rates
- **Restaurants**: 15-20% (before tax)
- **Bars**: $1-2 per drink or 15-20%
- **Taxis**: 15-20%
- **Hotels**: $2-5 per bag, $2-5 per night housekeeping
- **Hair salons**: 15-20%

### Quick Mental Math
- 10%: Move decimal left
- 15%: 10% + half of 10%
- 20%: 10% × 2

## Europe

### General Guidelines
- **UK**: 10-15% (often included)
- **France**: Service included, round up
- **Germany**: Round up or 5-10%
- **Italy**: Round up or small amount
- **Spain**: Round up, no tip expected

## Asia

### Country-Specific
- **Japan**: No tipping (can be offensive)
- **Korea**: No tipping expected
- **China**: Not customary, changing in cities
- **Thailand**: 10% appreciated

## Calculating Tips

### On Pre-tax Amount
Bill: $80, Tax: $8, Tip 20%:
- Tip on pre-tax: $80 × 0.20 = $16
- Total: $80 + $8 + $16 = $104

### Splitting Bills
Total bill: $150, 4 people, 20% tip:
- Tip: $150 × 0.20 = $30
- Total with tip: $180
- Per person: $180 / 4 = $45

## When Not to Tip

- Service charge already included
- Fast food/self-service
- Countries where it's not customary

Use our Tip Calculator for easy calculations.`,
			ko: `팁 관습은 세계적으로 크게 다릅니다. 가이드를 확인하세요.

## 미국

### 표준 비율
- **레스토랑**: 15-20% (세금 전)
- **바**: 음료당 $1-2 또는 15-20%
- **택시**: 15-20%
- **호텔**: 가방당 $2-5, 하우스키핑 1박당 $2-5
- **미용실**: 15-20%

### 빠른 암산
- 10%: 소수점을 왼쪽으로 이동
- 15%: 10% + 10%의 절반
- 20%: 10% × 2

## 유럽

### 일반 가이드라인
- **영국**: 10-15% (종종 포함됨)
- **프랑스**: 서비스료 포함, 올림
- **독일**: 올림 또는 5-10%
- **이탈리아**: 올림 또는 소액
- **스페인**: 올림, 팁 기대 안 함

## 아시아

### 국가별
- **일본**: 팁 없음 (무례할 수 있음)
- **한국**: 팁 기대 안 함
- **중국**: 관습 아님, 도시에서 변화 중
- **태국**: 10% 감사

## 팁 계산

### 세전 금액 기준
계산서: $80, 세금: $8, 팁 20%:
- 세전 팁: $80 × 0.20 = $16
- 총액: $80 + $8 + $16 = $104

### 더치페이
총 계산서: $150, 4명, 팁 20%:
- 팁: $150 × 0.20 = $30
- 팁 포함 총액: $180
- 1인당: $180 / 4 = $45

## 팁을 주지 않는 경우

- 서비스료가 이미 포함된 경우
- 패스트푸드/셀프서비스
- 관습이 아닌 국가

팁 계산기를 사용하여 쉽게 계산하세요.`,
			ja: `チップの習慣は世界中で大きく異なります。ガイドをご覧ください。

## アメリカ

### 標準レート
- **レストラン**: 15-20%（税抜き）
- **バー**: ドリンク1杯につき$1-2または15-20%
- **タクシー**: 15-20%
- **ホテル**: 荷物1つにつき$2-5、ハウスキーピング1泊$2-5
- **美容院**: 15-20%

### 素早い暗算
- 10%: 小数点を左に移動
- 15%: 10% + 10%の半分
- 20%: 10% × 2

## ヨーロッパ

### 一般的なガイドライン
- **イギリス**: 10-15%（含まれていることが多い）
- **フランス**: サービス料込み、端数切り上げ
- **ドイツ**: 端数切り上げまたは5-10%
- **イタリア**: 端数切り上げまたは少額
- **スペイン**: 端数切り上げ、チップは期待されない

## アジア

### 国別
- **日本**: チップなし（失礼になることも）
- **韓国**: チップは期待されない
- **中国**: 習慣ではない、都市部で変化中
- **タイ**: 10%が感謝される

## チップの計算

### 税抜き金額で
請求書: $80、税金: $8、チップ20%:
- 税抜きチップ: $80 × 0.20 = $16
- 合計: $80 + $8 + $16 = $104

### 割り勘
合計請求書: $150、4人、チップ20%:
- チップ: $150 × 0.20 = $30
- チップ込み合計: $180
- 1人あたり: $180 / 4 = $45

## チップを渡さない場合

- サービス料がすでに含まれている
- ファストフード/セルフサービス
- 習慣ではない国

チップ計算機を使って簡単に計算しましょう。`,
			zh: `小费习俗在世界各地差异很大。这是您的指南。

## 美国

### 标准比例
- **餐厅**: 15-20%（税前）
- **酒吧**: 每杯 $1-2 或 15-20%
- **出租车**: 15-20%
- **酒店**: 每件行李 $2-5，客房服务每晚 $2-5
- **美发沙龙**: 15-20%

### 快速心算
- 10%: 小数点左移
- 15%: 10% + 10% 的一半
- 20%: 10% × 2

## 欧洲

### 一般指南
- **英国**: 10-15%（通常已包含）
- **法国**: 服务费已包含，取整
- **德国**: 取整或 5-10%
- **意大利**: 取整或小额
- **西班牙**: 取整，不期望小费

## 亚洲

### 各国情况
- **日本**: 不给小费（可能被视为冒犯）
- **韩国**: 不期望小费
- **中国**: 非习俗，城市正在改变
- **泰国**: 10% 会受欢迎

## 计算小费

### 按税前金额
账单: $80，税: $8，小费 20%:
- 税前小费: $80 × 0.20 = $16
- 总计: $80 + $8 + $16 = $104

### 分摊账单
总账单: $150，4 人，小费 20%:
- 小费: $150 × 0.20 = $30
- 含小费总计: $180
- 每人: $180 / 4 = $45

## 何时不给小费

- 已包含服务费
- 快餐/自助服务
- 没有这种习俗的国家

使用我们的小费计算器轻松计算。`
		},
		date: '2025-01-14',
		category: 'lifestyle'
	},
	{
		slug: 'age-calculator-uses',
		title: {
			en: 'Age Calculator: More Than Just Your Birthday',
			ko: '나이 계산기 사용법',
			ja: '年齢計算機の使い方',
			zh: '年龄计算器使用方法'
		},
		description: {
			en: 'Discover various uses of age calculators beyond simple age calculation.',
			ko: '단순한 나이 계산 이상의 나이 계산기의 다양한 활용법을 알아보세요.',
			ja: '単純な年齢計算以上の年齢計算機のさまざまな使い方を発見しましょう。',
			zh: '发现年龄计算器在简单年龄计算之外的各种用途。'
		},
		content: {
			en: `Age calculators have many practical applications beyond knowing your age.

## Basic Age Calculation

### Exact Age
From January 15, 1990 to January 27, 2025:
- Years: 35
- Months: 0
- Days: 12

### Age in Different Units
- Total months: 420
- Total weeks: 1,828
- Total days: 12,796

## Practical Applications

### 1. Legal Age Verification
- Voting age (18 in most countries)
- Drinking age (varies by country)
- Driving age
- Retirement age

### 2. Healthcare
- Pediatric age milestones
- Vaccination schedules
- Health screening recommendations
- Insurance eligibility

### 3. Education
- School enrollment cutoffs
- Grade placement
- Age-appropriate testing

### 4. Employment
- Minimum working age
- Retirement planning
- Pension eligibility

## Korean Age vs International Age

### Korean Age
- Born = 1 year old
- Add 1 on New Year's Day

### International Age
- Born = 0 years old
- Add 1 on birthday

### Conversion
Korean age is typically 1-2 years higher than international age.

## Fun Facts

Calculate interesting milestones:
- 10,000 days old
- 1 billion seconds old
- Half birthday
- Golden birthday (turning your birth date)

Use our Age Calculator for precise calculations.`,
			ko: `나이 계산기는 나이를 아는 것 이상의 많은 실용적인 용도가 있습니다.

## 기본 나이 계산

### 정확한 나이
1990년 1월 15일부터 2025년 1월 27일까지:
- 년: 35
- 월: 0
- 일: 12

### 다른 단위로 나이
- 총 개월: 420
- 총 주: 1,828
- 총 일: 12,796

## 실용적인 활용

### 1. 법적 연령 확인
- 투표 연령 (대부분 국가에서 18세)
- 음주 연령 (국가마다 다름)
- 운전 연령
- 퇴직 연령

### 2. 의료
- 소아 발달 이정표
- 예방접종 일정
- 건강검진 권장사항
- 보험 자격

### 3. 교육
- 학교 입학 기준일
- 학년 배치
- 연령 적합 시험

### 4. 고용
- 최소 근로 연령
- 퇴직 계획
- 연금 자격

## 한국 나이 vs 만 나이

### 한국 나이
- 태어나면 = 1살
- 새해에 1살 추가

### 만 나이
- 태어나면 = 0살
- 생일에 1살 추가

### 변환
한국 나이는 일반적으로 만 나이보다 1-2살 높습니다.

## 재미있는 사실

흥미로운 이정표 계산:
- 10,000일째
- 10억 초째
- 반 생일
- 황금 생일 (생일 날짜와 나이가 같아지는 날)

나이 계산기를 사용하여 정확한 계산을 하세요.`,
			ja: `年齢計算機は、年齢を知る以上の多くの実用的な用途があります。

## 基本的な年齢計算

### 正確な年齢
1990年1月15日から2025年1月27日まで：
- 年：35
- 月：0
- 日：12

### 異なる単位での年齢
- 総月数：420
- 総週数：1,828
- 総日数：12,796

## 実用的な活用

### 1. 法的年齢確認
- 投票年齢（ほとんどの国で18歳）
- 飲酒年齢（国によって異なる）
- 運転年齢
- 退職年齢

### 2. 医療
- 小児発達のマイルストーン
- 予防接種スケジュール
- 健康診断の推奨事項
- 保険資格

### 3. 教育
- 学校入学の締め切り
- 学年配置
- 年齢適切なテスト

### 4. 雇用
- 最低労働年齢
- 退職計画
- 年金資格

## 日本の数え年 vs 満年齢

### 数え年
- 生まれた時 = 1歳
- 正月に1歳追加

### 満年齢
- 生まれた時 = 0歳
- 誕生日に1歳追加

### 変換
数え年は通常、満年齢より1〜2歳高くなります。

## 面白い事実

興味深いマイルストーンを計算：
- 10,000日目
- 10億秒目
- ハーフバースデー
- ゴールデンバースデー（誕生日の日付と年齢が同じになる日）

年齢計算機を使って正確な計算を行いましょう。`,
			zh: `年龄计算器有很多实际用途，不仅仅是知道年龄。

## 基本年龄计算

### 精确年龄
从 1990年1月15日 到 2025年1月27日：
- 年：35
- 月：0
- 日：12

### 不同单位的年龄
- 总月数：420
- 总周数：1,828
- 总天数：12,796

## 实际应用

### 1. 法定年龄验证
- 投票年龄（大多数国家 18 岁）
- 饮酒年龄（各国不同）
- 驾驶年龄
- 退休年龄

### 2. 医疗保健
- 儿科年龄里程碑
- 疫苗接种时间表
- 健康筛查建议
- 保险资格

### 3. 教育
- 入学截止日期
- 年级分配
- 适龄测试

### 4. 就业
- 最低工作年龄
- 退休规划
- 养老金资格

## 虚岁 vs 周岁

### 虚岁
- 出生 = 1岁
- 新年加 1 岁

### 周岁
- 出生 = 0岁
- 生日加 1 岁

### 换算
虚岁通常比周岁大 1-2 岁。

## 有趣的事实

计算有趣的里程碑：
- 第 10,000 天
- 第 10 亿秒
- 半岁生日
- 黄金生日（年龄与出生日期相同的那天）

使用我们的年龄计算器进行精确计算。`
		},
		date: '2025-01-13',
		category: 'lifestyle'
	},
	{
		slug: 'work-experience-calculation',
		title: {
			en: 'Work Experience Calculation Tips',
			ko: '경력 계산 팁',
			ja: '勤続年数計算のコツ',
			zh: '工作经验计算技巧'
		},
		description: {
			en: 'Learn how to accurately calculate and present your work experience.',
			ko: '경력을 정확하게 계산하고 표현하는 방법을 알아보세요.',
			ja: '勤続年数を正確に計算し、表現する方法を学びましょう。',
			zh: '学习如何准确计算和展示您的工作经验。'
		},
		content: {
			en: `Calculating work experience accurately is crucial for resumes and career planning.

## Basic Calculation

### Total Experience
Add up all employment periods:
- Job 1: 2 years, 6 months
- Job 2: 3 years, 8 months
- Job 3: 1 year, 4 months
- **Total: 7 years, 6 months**

### Handling Overlaps
If you had two jobs simultaneously:
- Count the overlapping period only once
- Or specify "concurrent employment"

## Presentation Formats

### Years Only
- "7+ years of experience"
- Best for senior positions

### Years and Months
- "7 years and 6 months"
- Most precise for applications

### Date Range
- "January 2018 - Present"
- Standard resume format

## Special Situations

### Employment Gaps
- Be honest about gaps
- Explain constructively (education, caregiving, etc.)
- Focus on skills maintained or gained

### Part-Time Work
- Can count as full experience
- Or specify "X years part-time"

### Freelance/Contract
- Sum all project durations
- Or list as "X years freelance/consulting"

## Industry-Specific Tips

### Tech Industry
- Emphasize recent experience
- List technologies and versions

### Healthcare
- Include clinical hours
- Specify certifications

### Academia
- Count teaching and research separately
- Include post-doc periods

## Resume Tips

1. Round to nearest half year for totals
2. Be consistent in format
3. Don't exaggerate
4. Update regularly

Use our Work Experience Calculator for accurate totals.`,
			ko: `경력을 정확하게 계산하는 것은 이력서와 경력 계획에 중요합니다.

## 기본 계산

### 총 경력
모든 근무 기간을 더합니다:
- 직장 1: 2년 6개월
- 직장 2: 3년 8개월
- 직장 3: 1년 4개월
- **총: 7년 6개월**

### 중복 처리
두 직장을 동시에 다녔다면:
- 중복 기간은 한 번만 계산
- 또는 "동시 근무"로 명시

## 표현 형식

### 년수만
- "7년 이상 경력"
- 시니어 직급에 적합

### 년과 월
- "7년 6개월"
- 지원서에 가장 정확함

### 날짜 범위
- "2018년 1월 - 현재"
- 표준 이력서 형식

## 특수 상황

### 경력 공백
- 공백에 대해 솔직하게
- 건설적으로 설명 (교육, 돌봄 등)
- 유지하거나 얻은 기술에 집중

### 파트타임 근무
- 전체 경력으로 계산 가능
- 또는 "X년 파트타임"으로 명시

### 프리랜서/계약직
- 모든 프로젝트 기간 합산
- 또는 "X년 프리랜서/컨설팅"으로 기재

## 업계별 팁

### IT 업계
- 최근 경력을 강조
- 기술과 버전을 나열

### 의료
- 임상 시간 포함
- 자격증 명시

### 학계
- 교육과 연구를 별도로 계산
- 포스트닥 기간 포함

## 이력서 팁

1. 총 경력은 반년 단위로 반올림
2. 형식의 일관성 유지
3. 과장하지 않기
4. 정기적으로 업데이트

경력 계산기를 사용하여 정확한 총계를 확인하세요.`,
			ja: `勤続年数を正確に計算することは、履歴書やキャリア計画に重要です。

## 基本計算

### 総経験
すべての雇用期間を足します：
- 職場1：2年6ヶ月
- 職場2：3年8ヶ月
- 職場3：1年4ヶ月
- **合計：7年6ヶ月**

### 重複の処理
2つの仕事を同時に持っていた場合：
- 重複期間は1回だけカウント
- または「同時雇用」と明記

## 表現形式

### 年数のみ
- 「7年以上の経験」
- シニアポジションに最適

### 年と月
- 「7年6ヶ月」
- 応募書類で最も正確

### 日付範囲
- 「2018年1月〜現在」
- 標準的な履歴書形式

## 特殊な状況

### 空白期間
- 空白について正直に
- 建設的に説明（教育、介護など）
- 維持または獲得したスキルに焦点

### パートタイム勤務
- フル経験としてカウント可能
- または「Xヶ月パートタイム」と明記

### フリーランス/契約
- すべてのプロジェクト期間を合計
- または「Xヶ月フリーランス/コンサルティング」と記載

## 業界別のコツ

### IT業界
- 最近の経験を強調
- テクノロジーとバージョンをリスト

### 医療
- 臨床時間を含める
- 資格を明記

### 学術
- 教育と研究を別々にカウント
- ポストドク期間を含める

## 履歴書のコツ

1. 合計は半年単位で四捨五入
2. フォーマットの一貫性を保つ
3. 誇張しない
4. 定期的に更新

勤続年数計算機を使って正確な合計を確認しましょう。`,
			zh: `准确计算工作经验对于简历和职业规划至关重要。

## 基本计算

### 总经验
将所有工作期间相加：
- 工作 1：2年6个月
- 工作 2：3年8个月
- 工作 3：1年4个月
- **总计：7年6个月**

### 处理重叠
如果同时有两份工作：
- 重叠期间只计算一次
- 或注明"同时就业"

## 展示格式

### 仅年数
- "7年以上经验"
- 最适合高级职位

### 年和月
- "7年6个月"
- 申请时最精确

### 日期范围
- "2018年1月 - 至今"
- 标准简历格式

## 特殊情况

### 就业空白
- 对空白期诚实
- 建设性地解释（教育、照顾等）
- 专注于保持或获得的技能

### 兼职工作
- 可以算作全职经验
- 或注明"X年兼职"

### 自由职业/合同工
- 汇总所有项目时长
- 或列为"X年自由职业/咨询"

## 行业特定提示

### 科技行业
- 强调近期经验
- 列出技术和版本

### 医疗保健
- 包括临床小时数
- 指定证书

### 学术界
- 分别计算教学和研究
- 包括博士后期间

## 简历技巧

1. 总计四舍五入到半年
2. 保持格式一致
3. 不要夸大
4. 定期更新

使用我们的工作经验计算器获得准确的总计。`
		},
		date: '2025-01-12',
		category: 'career'
	},
	{
		slug: 'anniversary-management',
		title: {
			en: 'The Importance of Anniversary Management',
			ko: '기념일 관리의 중요성',
			ja: '記念日管理の重要性',
			zh: '纪念日管理的重要性'
		},
		description: {
			en: 'Learn why tracking anniversaries matters and how to never forget important dates.',
			ko: '기념일을 추적하는 것이 왜 중요한지, 중요한 날짜를 잊지 않는 방법을 알아보세요.',
			ja: '記念日を追跡することがなぜ重要か、重要な日付を忘れない方法を学びましょう。',
			zh: '了解为什么跟踪纪念日很重要，以及如何永远不忘记重要日期。'
		},
		content: {
			en: `Managing anniversaries helps maintain relationships and create meaningful memories.

## Types of Anniversaries

### Personal
- Wedding anniversaries
- Dating anniversaries
- Birthdays
- Memorial days

### Professional
- Work anniversaries
- Company founding dates
- Project milestones
- Contract renewals

### Cultural
- National holidays
- Religious observances
- Traditional celebrations

## Why Track Anniversaries?

### Relationship Benefits
1. Shows you care and remember
2. Strengthens emotional bonds
3. Creates opportunities for celebration
4. Builds positive memories

### Professional Benefits
1. Employee recognition
2. Customer appreciation
3. Partnership milestone celebrations
4. Brand awareness opportunities

## Anniversary Calculation Methods

### Count-Up (D+)
Days since an event:
- First date: January 1, 2020
- Today: January 27, 2025
- D+1,852

### Count-Down (D-)
Days until an event:
- Wedding: March 15, 2025
- Today: January 27, 2025
- D-47

### Milestone Tracking
- 100 days
- 1 year
- 1,000 days
- 5 years
- 10 years

## Tips for Never Forgetting

1. **Use digital calendars** with reminders
2. **Set multiple alerts** (1 week, 1 day before)
3. **Create recurring events**
4. **Use anniversary apps**
5. **Plan ahead** for gifts and celebrations

## Anniversary Gift Ideas by Year

### Traditional (Marriage)
- 1st: Paper
- 5th: Wood
- 10th: Tin/Aluminum
- 25th: Silver
- 50th: Gold

## Making It Special

- Plan surprise celebrations
- Create photo albums/videos
- Write heartfelt letters
- Plan meaningful experiences
- Involve family and friends

Use our Date Calculator to track your important anniversaries.`,
			ko: `기념일을 관리하면 관계를 유지하고 의미 있는 추억을 만드는 데 도움이 됩니다.

## 기념일의 종류

### 개인적
- 결혼 기념일
- 연애 기념일
- 생일
- 기일

### 직업적
- 근속 기념일
- 회사 설립일
- 프로젝트 마일스톤
- 계약 갱신일

### 문화적
- 국경일
- 종교 기념일
- 전통 명절

## 왜 기념일을 추적해야 할까요?

### 관계적 이점
1. 관심과 기억을 보여줌
2. 정서적 유대를 강화
3. 축하 기회를 만듦
4. 긍정적인 추억을 쌓음

### 직업적 이점
1. 직원 인정
2. 고객 감사
3. 파트너십 마일스톤 축하
4. 브랜드 인지도 기회

## 기념일 계산 방법

### 카운트업 (D+)
이벤트 이후 일수:
- 첫 만남: 2020년 1월 1일
- 오늘: 2025년 1월 27일
- D+1,852

### 카운트다운 (D-)
이벤트까지 남은 일수:
- 결혼식: 2025년 3월 15일
- 오늘: 2025년 1월 27일
- D-47

### 마일스톤 추적
- 100일
- 1주년
- 1,000일
- 5주년
- 10주년

## 절대 잊지 않는 팁

1. **디지털 캘린더** 사용 (알림 설정)
2. **여러 알림 설정** (1주 전, 1일 전)
3. **반복 일정 만들기**
4. **기념일 앱 사용**
5. **선물과 축하 미리 계획**

## 연차별 선물 아이디어

### 전통 (결혼)
- 1주년: 종이
- 5주년: 나무
- 10주년: 주석/알루미늄
- 25주년: 은
- 50주년: 금

## 특별하게 만들기

- 깜짝 축하 계획
- 사진 앨범/영상 제작
- 진심 어린 편지 작성
- 의미 있는 경험 계획
- 가족과 친구 참여

날짜 계산기를 사용하여 중요한 기념일을 추적하세요.`,
			ja: `記念日を管理することは、関係を維持し、意味のある思い出を作るのに役立ちます。

## 記念日の種類

### 個人的
- 結婚記念日
- 交際記念日
- 誕生日
- 命日

### 仕事関係
- 勤続記念日
- 会社設立日
- プロジェクトマイルストーン
- 契約更新日

### 文化的
- 国民の祝日
- 宗教的な祝日
- 伝統的なお祝い

## なぜ記念日を追跡するのか？

### 関係上のメリット
1. 気にかけていることを示す
2. 感情的な絆を強化
3. お祝いの機会を作る
4. ポジティブな思い出を築く

### 仕事上のメリット
1. 従業員の表彰
2. 顧客への感謝
3. パートナーシップのマイルストーン祝い
4. ブランド認知度向上の機会

## 記念日計算方法

### カウントアップ（D+）
イベントからの日数：
- 初デート：2020年1月1日
- 今日：2025年1月27日
- D+1,852

### カウントダウン（D-）
イベントまでの日数：
- 結婚式：2025年3月15日
- 今日：2025年1月27日
- D-47

### マイルストーン追跡
- 100日
- 1周年
- 1,000日
- 5周年
- 10周年

## 忘れないためのコツ

1. **デジタルカレンダー**を使用（リマインダー付き）
2. **複数のアラートを設定**（1週間前、1日前）
3. **繰り返しイベントを作成**
4. **記念日アプリを使用**
5. **ギフトとお祝いを事前に計画**

## 年数別ギフトアイデア

### 伝統的（結婚）
- 1年目：紙
- 5年目：木
- 10年目：錫/アルミニウム
- 25年目：銀
- 50年目：金

## 特別にする方法

- サプライズのお祝いを計画
- フォトアルバム/ビデオを作成
- 心のこもった手紙を書く
- 意味のある体験を計画
- 家族や友人を巻き込む

日付計算機を使って、大切な記念日を追跡しましょう。`,
			zh: `管理纪念日有助于维护关系和创造有意义的回忆。

## 纪念日类型

### 个人
- 结婚纪念日
- 恋爱纪念日
- 生日
- 忌日

### 职业
- 工作周年
- 公司成立日
- 项目里程碑
- 合同续签日

### 文化
- 国定假日
- 宗教节日
- 传统庆典

## 为什么要跟踪纪念日？

### 关系益处
1. 显示你的关心和记忆
2. 加强情感纽带
3. 创造庆祝机会
4. 建立积极回忆

### 职业益处
1. 员工认可
2. 客户感谢
3. 合作伙伴里程碑庆祝
4. 品牌知名度机会

## 纪念日计算方法

### 正计时（D+）
事件后的天数：
- 第一次约会：2020年1月1日
- 今天：2025年1月27日
- D+1,852

### 倒计时（D-）
距离事件的天数：
- 婚礼：2025年3月15日
- 今天：2025年1月27日
- D-47

### 里程碑追踪
- 100天
- 1周年
- 1,000天
- 5周年
- 10周年

## 永不忘记的技巧

1. **使用数字日历**并设置提醒
2. **设置多个提醒**（提前1周、1天）
3. **创建重复事件**
4. **使用纪念日应用**
5. **提前计划**礼物和庆祝活动

## 按年份的礼物建议

### 传统（结婚）
- 第1年：纸
- 第5年：木
- 第10年：锡/铝
- 第25年：银
- 第50年：金

## 让它变得特别

- 计划惊喜庆祝
- 制作相册/视频
- 写真挚的信
- 计划有意义的体验
- 邀请家人和朋友参与

使用我们的日期计算器追踪您重要的纪念日。`
		},
		date: '2025-01-11',
		category: 'lifestyle'
	}
];

export function getBlogPost(slug: string): BlogPost | undefined {
	return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
	return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
