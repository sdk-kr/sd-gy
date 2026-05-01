import type { L10nString } from '$lib/i18n';

export interface BlogPost {
	slug: string;
	title: L10nString;
	description: L10nString;
	content: L10nString;
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
	},
	{
		slug: 'how-to-calculate-compound-interest',
		title: {
			en: 'How to Calculate Compound Interest: A Step-by-Step Guide',
			ko: '복리 이자 계산 방법: 단계별 가이드',
			ja: '複利の計算方法：ステップバイステップガイド',
			zh: '如何计算复利：分步指南',
			es: 'Cómo calcular el interés compuesto: guía paso a paso'
		},
		description: {
			en: 'Learn exactly how compound interest works, how to calculate it manually, and strategies to maximize your returns over time.',
			ko: '복리가 정확히 어떻게 작동하는지, 수동으로 계산하는 방법, 시간이 지남에 따라 수익을 극대화하는 전략을 알아보세요.',
			ja: '複利の仕組み、手動での計算方法、長期的にリターンを最大化する戦略を学びましょう。',
			zh: '了解复利的确切运作方式、手动计算方法以及随时间推移最大化回报的策略。',
			es: 'Aprenda exactamente cómo funciona el interés compuesto, cómo calcularlo manualmente y estrategias para maximizar sus rendimientos.'
		},
		content: {
			en: `Compound interest is the single most powerful force in personal finance. Understanding how to calculate it gives you a major advantage in planning your financial future.

## What Makes Compound Interest Different?

Simple interest is calculated only on the original principal. Compound interest, however, is calculated on the principal PLUS all previously accumulated interest. This creates an exponential growth curve that accelerates over time.

**Simple Interest Example**: $10,000 at 5% for 10 years = $10,000 + ($500 x 10) = $15,000

**Compound Interest Example**: $10,000 at 5% compounded annually for 10 years = $16,288.95

That is $1,288.95 more, just from earning interest on your interest.

## The Compound Interest Formula Explained

**A = P(1 + r/n)^(nt)**

Let us break down each variable:

- **A** = the future value of the investment
- **P** = the principal (initial deposit)
- **r** = the annual interest rate (as a decimal, so 5% = 0.05)
- **n** = number of times interest compounds per year (12 for monthly, 4 for quarterly, 1 for annually)
- **t** = number of years

## Step-by-Step Calculation

Suppose you invest $5,000 at 6% annual interest, compounded monthly, for 15 years.

1. Convert the rate: r = 0.06
2. Identify compounding frequency: n = 12
3. Calculate r/n: 0.06/12 = 0.005
4. Calculate nt: 12 x 15 = 180
5. Calculate (1 + r/n)^nt: (1.005)^180 = 2.4541
6. Multiply by P: $5,000 x 2.4541 = **$12,270.47**

Your $5,000 more than doubled, earning $7,270.47 in interest alone.

## How Compounding Frequency Matters

The more frequently interest compounds, the more you earn. Here is $10,000 at 8% for 20 years:

| Compounding | Final Amount | Interest Earned |
|-------------|-------------|-----------------|
| Annually | $46,609.57 | $36,609.57 |
| Quarterly | $48,010.21 | $38,010.21 |
| Monthly | $48,754.39 | $38,754.39 |
| Daily | $49,530.32 | $39,530.32 |

## Five Strategies to Maximize Compound Interest

1. **Start as early as possible** - Even small amounts grow dramatically over decades
2. **Increase your contributions regularly** - Add to your principal whenever you can
3. **Choose higher compounding frequencies** - Monthly or daily compounding beats annual
4. **Reinvest all dividends and interest** - Do not withdraw your earnings
5. **Be patient and consistent** - The biggest gains come in the later years

## The Impact of Starting Early

Consider two people who both invest at 7% annually:

- **Person A** starts at age 25, invests $200/month until age 65 = **$525,415**
- **Person B** starts at age 35, invests $200/month until age 65 = **$244,692**

Person A invested only $24,000 more but ended up with $280,723 more. That is the power of an extra decade of compounding.

## Common Mistakes to Avoid

- Ignoring inflation when calculating real returns
- Not accounting for taxes on investment gains
- Withdrawing interest instead of reinvesting
- Waiting for the "perfect time" to start investing

Use our [Compound Interest Calculator](/en/compound-interest) to run your own scenarios and see how your money can grow over time.`,
			ko: `복리는 개인 재무에서 가장 강력한 힘입니다. 복리를 계산하는 방법을 이해하면 재정 미래를 계획하는 데 큰 이점이 됩니다.

## 복리가 다른 점은 무엇인가요?

단리는 원금에 대해서만 계산됩니다. 그러나 복리는 원금에 이전에 누적된 모든 이자를 더한 금액에 대해 계산됩니다. 이로 인해 시간이 지남에 따라 가속화되는 지수 성장 곡선이 만들어집니다.

**단리 예시**: 1,000만원을 5%로 10년간 = 1,000만원 + (50만원 x 10) = 1,500만원

**복리 예시**: 1,000만원을 연 5% 복리로 10년간 = 1,628만 8,950원

이자에 대한 이자를 받는 것만으로 128만 8,950원이 더 늘어납니다.

## 복리 계산 공식 설명

**A = P(1 + r/n)^(nt)**

각 변수를 살펴봅시다:

- **A** = 투자의 미래 가치
- **P** = 원금 (초기 예치금)
- **r** = 연이율 (소수로, 5% = 0.05)
- **n** = 연간 이자 복리 횟수 (월별 12, 분기별 4, 연별 1)
- **t** = 년수

## 단계별 계산

500만원을 연 6% 이자, 월 복리로 15년간 투자한다고 가정합시다.

1. 이율 변환: r = 0.06
2. 복리 빈도 확인: n = 12
3. r/n 계산: 0.06/12 = 0.005
4. nt 계산: 12 x 15 = 180
5. (1 + r/n)^nt 계산: (1.005)^180 = 2.4541
6. P를 곱하기: 500만원 x 2.4541 = **1,227만 470원**

500만원이 두 배 이상으로 늘어나, 이자만으로 727만 470원을 벌었습니다.

## 복리 빈도가 중요한 이유

이자가 더 자주 복리 될수록 더 많이 벌 수 있습니다. 1,000만원을 8%로 20년간:

| 복리 빈도 | 최종 금액 | 이자 수익 |
|-----------|----------|----------|
| 연 복리 | 4,660만원 | 3,660만원 |
| 분기 복리 | 4,801만원 | 3,801만원 |
| 월 복리 | 4,875만원 | 3,875만원 |
| 일 복리 | 4,953만원 | 3,953만원 |

## 복리를 극대화하는 5가지 전략

1. **가능한 한 일찍 시작하세요** - 작은 금액도 수십 년에 걸쳐 극적으로 성장합니다
2. **정기적으로 기여금을 늘리세요** - 가능할 때마다 원금에 추가하세요
3. **더 높은 복리 빈도를 선택하세요** - 월별 또는 일별 복리가 연별보다 유리합니다
4. **모든 배당금과 이자를 재투자하세요** - 수익을 인출하지 마세요
5. **인내심을 갖고 꾸준히 하세요** - 가장 큰 이익은 후반에 옵니다

## 일찍 시작하는 것의 영향

연 7%로 투자하는 두 사람을 비교해봅시다:

- **사람 A** 25세에 시작, 월 20만원씩 65세까지 = **약 5억 2,500만원**
- **사람 B** 35세에 시작, 월 20만원씩 65세까지 = **약 2억 4,500만원**

사람 A는 2,400만원만 더 투자했지만 약 2억 8,000만원이나 더 많은 결과를 얻었습니다. 이것이 10년 추가 복리의 힘입니다.

[복리 계산기](/ko/compound-interest)를 사용하여 직접 시나리오를 실행하고 돈이 시간에 따라 어떻게 성장하는지 확인하세요.`,
			ja: `複利は個人財務において最も強力な力です。複利の計算方法を理解することで、財務計画において大きなアドバンテージを得ることができます。

## 複利の何が違うのか？

単利は元本に対してのみ計算されます。しかし、複利は元本に以前に蓄積されたすべての利息を加えた金額に対して計算されます。これにより、時間とともに加速する指数関数的成長曲線が生まれます。

**単利の例**: 100万円を5%で10年間 = 100万円 + (5万円 x 10) = 150万円

**複利の例**: 100万円を年5%複利で10年間 = 162万8,895円

利息に対する利息を得るだけで、12万8,895円多くなります。

## 複利計算式の説明

**A = P(1 + r/n)^(nt)**

各変数を見てみましょう：

- **A** = 投資の将来価値
- **P** = 元本（初期預金）
- **r** = 年利率（小数で、5% = 0.05）
- **n** = 年間の複利回数（月次12、四半期4、年次1）
- **t** = 年数

## ステップバイステップの計算

50万円を年利6%、月次複利で15年間投資するとします。

1. 利率の変換: r = 0.06
2. 複利頻度の確認: n = 12
3. r/nの計算: 0.06/12 = 0.005
4. ntの計算: 12 x 15 = 180
5. (1 + r/n)^ntの計算: (1.005)^180 = 2.4541
6. Pを掛ける: 50万円 x 2.4541 = **122万7,047円**

50万円が2倍以上に増え、利息だけで72万7,047円を得ました。

## 複利頻度が重要な理由

利息がより頻繁に複利計算されるほど、より多く稼げます。100万円を8%で20年間：

| 複利頻度 | 最終金額 | 利息収入 |
|---------|---------|---------|
| 年次複利 | 466万円 | 366万円 |
| 四半期複利 | 480万円 | 380万円 |
| 月次複利 | 487万円 | 387万円 |
| 日次複利 | 495万円 | 395万円 |

## 複利を最大化する5つの戦略

1. **できるだけ早く始める** - 少額でも数十年で劇的に成長します
2. **定期的に拠出金を増やす** - できるときに元本に追加しましょう
3. **より高い複利頻度を選ぶ** - 月次や日次の複利が年次より有利です
4. **すべての配当金と利息を再投資する** - 収益を引き出さないでください
5. **忍耐強く一貫性を持つ** - 最大の利益は後半に訪れます

[複利計算機](/ja/compound-interest)を使って、ご自身のシナリオを実行し、お金が時間とともにどのように成長するか確認してみてください。`,
			zh: `复利是个人理财中最强大的力量。了解如何计算复利将为您规划财务未来提供巨大优势。

## 复利有什么不同？

单利仅根据原始本金计算。然而，复利是根据本金加上所有先前累积的利息来计算的。这创造了一条随时间加速的指数增长曲线。

**单利示例**：10,000元以5%利率投资10年 = 10,000 + (500 x 10) = 15,000元

**复利示例**：10,000元以年化5%复利投资10年 = 16,288.95元

仅仅通过赚取利息的利息，就多出了1,288.95元。

## 复利公式详解

**A = P(1 + r/n)^(nt)**

让我们分解每个变量：

- **A** = 投资的未来价值
- **P** = 本金（初始存款）
- **r** = 年利率（以小数表示，5% = 0.05）
- **n** = 每年复利次数（月度12，季度4，年度1）
- **t** = 年数

## 逐步计算

假设您投资5,000元，年利率6%，按月复利，期限15年。

1. 转换利率：r = 0.06
2. 确定复利频率：n = 12
3. 计算r/n：0.06/12 = 0.005
4. 计算nt：12 x 15 = 180
5. 计算(1 + r/n)^nt：(1.005)^180 = 2.4541
6. 乘以P：5,000 x 2.4541 = **12,270.47元**

您的5,000元翻了一倍多，仅利息就赚了7,270.47元。

## 复利频率的重要性

利息复利的频率越高，您赚得越多。10,000元以8%利率投资20年：

| 复利方式 | 最终金额 | 利息收入 |
|---------|---------|---------|
| 年度复利 | 46,609元 | 36,609元 |
| 季度复利 | 48,010元 | 38,010元 |
| 月度复利 | 48,754元 | 38,754元 |
| 日度复利 | 49,530元 | 39,530元 |

## 最大化复利的5个策略

1. **尽早开始** - 即使是小额资金，经过几十年也会显著增长
2. **定期增加投入** - 尽可能增加本金
3. **选择更高的复利频率** - 月度或日度复利优于年度
4. **将所有股息和利息再投资** - 不要提取收益
5. **保持耐心和一致性** - 最大的收益来自后期

使用我们的[复利计算器](/zh/compound-interest)运行您自己的方案，看看您的钱如何随时间增长。`,
			es: `El interés compuesto es la fuerza más poderosa en las finanzas personales. Comprender cómo calcularlo le da una gran ventaja para planificar su futuro financiero.

## ¿Qué hace diferente al interés compuesto?

El interés simple se calcula solo sobre el capital original. Sin embargo, el interés compuesto se calcula sobre el capital MÁS todos los intereses acumulados anteriormente. Esto crea una curva de crecimiento exponencial que se acelera con el tiempo.

**Ejemplo de interés simple**: $10,000 al 5% durante 10 años = $10,000 + ($500 x 10) = $15,000

**Ejemplo de interés compuesto**: $10,000 al 5% compuesto anualmente durante 10 años = $16,288.95

Eso es $1,288.95 más, solo por ganar intereses sobre sus intereses.

## La fórmula del interés compuesto explicada

**A = P(1 + r/n)^(nt)**

Desglosemos cada variable:

- **A** = el valor futuro de la inversión
- **P** = el capital (depósito inicial)
- **r** = la tasa de interés anual (como decimal, 5% = 0.05)
- **n** = número de veces que el interés se capitaliza por año
- **t** = número de años

## Cálculo paso a paso

Suponga que invierte $5,000 al 6% de interés anual, capitalizado mensualmente, durante 15 años.

1. Convertir la tasa: r = 0.06
2. Identificar frecuencia de capitalización: n = 12
3. Calcular r/n: 0.06/12 = 0.005
4. Calcular nt: 12 x 15 = 180
5. Calcular (1 + r/n)^nt: (1.005)^180 = 2.4541
6. Multiplicar por P: $5,000 x 2.4541 = **$12,270.47**

## Cinco estrategias para maximizar el interés compuesto

1. **Comience lo antes posible** - Incluso cantidades pequeñas crecen dramáticamente
2. **Aumente sus contribuciones regularmente** - Agregue al capital cuando pueda
3. **Elija frecuencias de capitalización más altas** - Mensual supera a anual
4. **Reinvierta todos los dividendos e intereses** - No retire sus ganancias
5. **Sea paciente y consistente** - Las mayores ganancias vienen en los años posteriores

Use nuestra [Calculadora de Interés Compuesto](/es/compound-interest) para ejecutar sus propios escenarios.`
		},
		date: '2025-02-15',
		category: 'finance'
	},
	{
		slug: 'understanding-bmi-healthy-weight',
		title: {
			en: 'Understanding BMI and Healthy Weight Ranges',
			ko: 'BMI와 건강한 체중 범위 이해하기',
			ja: 'BMIと健康的な体重範囲を理解する',
			zh: '了解BMI和健康体重范围',
			es: 'Comprender el IMC y los rangos de peso saludable'
		},
		description: {
			en: 'A comprehensive guide to Body Mass Index: what it measures, its limitations, and how to use it as one tool for health assessment.',
			ko: '체질량지수에 대한 종합 가이드: 측정 내용, 한계점, 건강 평가 도구로 활용하는 방법.',
			ja: '体格指数の包括的ガイド：何を測定するか、その限界、健康評価ツールとしての活用法。',
			zh: '体质指数综合指南：它衡量什么、局限性以及如何将其作为健康评估工具。',
			es: 'Una guía completa del Índice de Masa Corporal: qué mide, sus limitaciones y cómo usarlo.'
		},
		content: {
			en: `Body Mass Index (BMI) is one of the most widely used health metrics in the world. But how well do you understand what it really tells you?

## What is BMI?

BMI is a simple mathematical formula that estimates body fat based on your height and weight:

**BMI = weight (kg) / height (m)^2**

Or in imperial units:

**BMI = (weight (lbs) x 703) / height (inches)^2**

## BMI Categories

The World Health Organization defines these categories:

| BMI Range | Category |
|-----------|----------|
| Below 18.5 | Underweight |
| 18.5 - 24.9 | Normal weight |
| 25.0 - 29.9 | Overweight |
| 30.0 - 34.9 | Obese (Class I) |
| 35.0 - 39.9 | Obese (Class II) |
| 40.0 and above | Obese (Class III) |

## How to Calculate Your BMI

**Example**: You weigh 75 kg and are 1.75 m tall.

1. Square your height: 1.75 x 1.75 = 3.0625
2. Divide weight by squared height: 75 / 3.0625 = 24.49
3. Your BMI is 24.49 (Normal weight)

## What BMI Does Well

- **Quick screening tool**: Takes seconds to calculate
- **Population-level trends**: Excellent for studying health trends across large groups
- **Accessible**: Requires only basic measurements
- **Standardized**: Used worldwide with consistent categories
- **Correlated with health risks**: Higher BMI generally correlates with increased risk of heart disease, diabetes, and certain cancers

## Important Limitations of BMI

BMI is a useful starting point, but it has significant limitations:

### It does not distinguish between muscle and fat
A muscular athlete might have a BMI of 28 (overweight) while having very low body fat. This is because muscle is denser than fat.

### It ignores fat distribution
Where you carry fat matters enormously. Visceral fat (around organs) is much more dangerous than subcutaneous fat (under skin). Two people with identical BMIs can have very different health risks.

### Age and gender differences
BMI does not account for the fact that women naturally carry more body fat than men, or that body composition changes with age.

### Ethnic variations
Research shows that health risks associated with BMI vary by ethnicity. For example, Asian populations may face higher health risks at lower BMI levels.

## Better Health Metrics to Use Alongside BMI

- **Waist circumference**: A waist over 40 inches (men) or 35 inches (women) indicates higher risk
- **Waist-to-hip ratio**: Measures fat distribution
- **Body fat percentage**: More accurate but harder to measure
- **Waist-to-height ratio**: Your waist should be less than half your height

## Practical Tips for Healthy Weight Management

1. **Focus on habits, not numbers** - Regular exercise and balanced nutrition matter more than any single metric
2. **Track trends, not daily fluctuations** - Weight can vary 2-3 kg in a single day
3. **Consider body composition** - Building muscle while losing fat may not change your weight
4. **Set realistic goals** - Aim for 0.5-1 kg per week for sustainable weight loss
5. **Consult professionals** - Talk to a doctor or dietitian for personalized advice

## When to Be Concerned About Your BMI

While BMI alone should not cause alarm, consider consulting a healthcare provider if:

- Your BMI is below 18.5 or above 30
- Your BMI has changed significantly in a short period
- You have other risk factors like family history of diabetes or heart disease
- You experience unexplained weight changes

Use our [BMI Calculator](/en/bmi-calculator) to quickly calculate your BMI and understand where you fall in the healthy range.`,
			ko: `체질량지수(BMI)는 세계에서 가장 널리 사용되는 건강 지표 중 하나입니다. 하지만 BMI가 실제로 무엇을 알려주는지 잘 이해하고 계신가요?

## BMI란?

BMI는 키와 체중을 기반으로 체지방을 추정하는 간단한 수학 공식입니다:

**BMI = 체중 (kg) / 키 (m)^2**

## BMI 카테고리

세계보건기구는 다음과 같이 정의합니다:

| BMI 범위 | 카테고리 |
|---------|---------|
| 18.5 미만 | 저체중 |
| 18.5 - 24.9 | 정상 체중 |
| 25.0 - 29.9 | 과체중 |
| 30.0 - 34.9 | 비만 (1단계) |
| 35.0 - 39.9 | 비만 (2단계) |
| 40.0 이상 | 비만 (3단계) |

## BMI 계산 방법

**예시**: 체중 75kg, 키 175cm인 경우

1. 키를 제곱합니다: 1.75 x 1.75 = 3.0625
2. 체중을 키의 제곱으로 나눕니다: 75 / 3.0625 = 24.49
3. BMI는 24.49 (정상 체중)

## BMI의 장점

- **빠른 선별 도구**: 계산하는 데 몇 초밖에 걸리지 않습니다
- **인구 수준 트렌드**: 대규모 그룹의 건강 추세를 연구하는 데 탁월합니다
- **접근성**: 기본 측정값만 필요합니다
- **표준화**: 전 세계적으로 일관된 카테고리로 사용됩니다

## BMI의 중요한 한계

### 근육과 지방을 구별하지 못합니다
근육질인 운동선수는 체지방이 매우 낮으면서도 BMI가 28(과체중)일 수 있습니다.

### 지방 분포를 무시합니다
지방이 어디에 있는지가 매우 중요합니다. 내장 지방(장기 주변)은 피하 지방(피부 아래)보다 훨씬 위험합니다.

### 연령과 성별 차이
여성이 남성보다 자연적으로 더 많은 체지방을 가지고 있다는 사실이나 나이에 따른 체성분 변화를 고려하지 않습니다.

## BMI와 함께 사용할 수 있는 더 나은 건강 지표

- **허리 둘레**: 남성 102cm, 여성 88cm 이상이면 위험이 높습니다
- **허리-엉덩이 비율**: 지방 분포를 측정합니다
- **체지방률**: 더 정확하지만 측정이 어렵습니다
- **허리-키 비율**: 허리가 키의 절반 미만이어야 합니다

## 건강한 체중 관리를 위한 실용적 팁

1. **숫자가 아닌 습관에 집중하세요** - 규칙적인 운동과 균형 잡힌 영양이 더 중요합니다
2. **일일 변동이 아닌 추세를 추적하세요** - 체중은 하루에 2-3kg까지 변할 수 있습니다
3. **체성분을 고려하세요** - 근육을 만들면서 지방을 잃으면 체중이 변하지 않을 수 있습니다
4. **현실적인 목표를 설정하세요** - 지속 가능한 체중 감량을 위해 주당 0.5-1kg을 목표로 하세요
5. **전문가와 상담하세요** - 개인화된 조언을 위해 의사나 영양사와 상담하세요

[BMI 계산기](/ko/bmi-calculator)를 사용하여 빠르게 BMI를 계산하고 건강한 범위에 있는지 확인하세요.`,
			ja: `体格指数（BMI）は世界で最も広く使用されている健康指標の一つです。しかし、BMIが実際に何を示しているか、よく理解していますか？

## BMIとは？

BMIは身長と体重に基づいて体脂肪を推定する簡単な数学的公式です：

**BMI = 体重 (kg) / 身長 (m)^2**

## BMIカテゴリー

世界保健機関は以下のように定義しています：

| BMI範囲 | カテゴリー |
|---------|----------|
| 18.5未満 | 低体重 |
| 18.5 - 24.9 | 正常体重 |
| 25.0 - 29.9 | 過体重 |
| 30.0以上 | 肥満 |

## BMI計算方法

**例**: 体重75kg、身長175cmの場合

1. 身長を二乗: 1.75 x 1.75 = 3.0625
2. 体重を身長の二乗で割る: 75 / 3.0625 = 24.49
3. BMIは24.49（正常体重）

## BMIの利点

- **迅速なスクリーニングツール**: 計算に数秒しかかかりません
- **集団レベルのトレンド**: 大規模グループの健康傾向の研究に優れています
- **アクセシブル**: 基本的な測定値のみ必要
- **標準化**: 世界中で一貫したカテゴリーで使用されています

## BMIの重要な限界

### 筋肉と脂肪を区別しない
筋肉質のアスリートは体脂肪が非常に低くてもBMIが28（過体重）になることがあります。

### 脂肪分布を無視する
脂肪がどこにあるかは非常に重要です。内臓脂肪（臓器周辺）は皮下脂肪（皮膚の下）よりもはるかに危険です。

## BMIと併用すべきより良い健康指標

- **ウエスト周囲径**: 男性102cm、女性88cm以上はリスクが高い
- **ウエスト・ヒップ比**: 脂肪分布を測定
- **体脂肪率**: より正確だが測定が困難
- **ウエスト・身長比**: ウエストは身長の半分未満であるべき

## 健康的な体重管理のための実用的なヒント

1. **数字ではなく習慣に焦点を当てる** - 定期的な運動とバランスの取れた栄養がより重要
2. **日々の変動ではなくトレンドを追跡する** - 体重は1日で2-3kg変動する可能性があります
3. **体組成を考慮する** - 筋肉をつけながら脂肪を落とすと体重が変わらないことがあります
4. **現実的な目標を設定する** - 持続可能な減量のために週0.5-1kgを目標に
5. **専門家に相談する** - 個人的なアドバイスについては医師や栄養士に相談を

[BMI計算機](/ja/bmi-calculator)を使って、素早くBMIを計算し、健康的な範囲にあるか確認してください。`,
			zh: `体质指数（BMI）是世界上使用最广泛的健康指标之一。但您真的了解它告诉您什么吗？

## 什么是BMI？

BMI是一个基于身高和体重估算体脂的简单数学公式：

**BMI = 体重 (kg) / 身高 (m)^2**

## BMI分类

世界卫生组织定义了以下类别：

| BMI范围 | 类别 |
|---------|------|
| 低于18.5 | 体重不足 |
| 18.5 - 24.9 | 正常体重 |
| 25.0 - 29.9 | 超重 |
| 30.0以上 | 肥胖 |

## 如何计算BMI

**示例**：体重75公斤，身高175厘米

1. 身高平方：1.75 x 1.75 = 3.0625
2. 体重除以身高平方：75 / 3.0625 = 24.49
3. BMI为24.49（正常体重）

## BMI的优点

- **快速筛查工具**：计算只需几秒钟
- **人群趋势**：适合研究大规模群体的健康趋势
- **易于获取**：只需基本测量值
- **标准化**：全球使用统一类别

## BMI的重要局限性

### 不区分肌肉和脂肪
肌肉发达的运动员可能体脂很低但BMI为28（超重）。

### 忽视脂肪分布
脂肪的位置非常重要。内脏脂肪（器官周围）比皮下脂肪（皮肤下）危险得多。

## 应与BMI配合使用的更好健康指标

- **腰围**：男性超过102厘米、女性超过88厘米表示风险较高
- **腰臀比**：衡量脂肪分布
- **体脂百分比**：更准确但更难测量
- **腰围身高比**：腰围应少于身高的一半

## 健康体重管理的实用建议

1. **关注习惯而非数字** - 规律运动和均衡营养比任何单一指标都重要
2. **跟踪趋势而非日常波动** - 体重一天内可能变化2-3公斤
3. **考虑身体成分** - 增肌减脂可能不会改变体重
4. **设定现实目标** - 可持续减重目标为每周0.5-1公斤
5. **咨询专业人士** - 向医生或营养师寻求个性化建议

使用我们的[BMI计算器](/zh/bmi-calculator)快速计算您的BMI，了解您是否在健康范围内。`,
			es: `El Índice de Masa Corporal (IMC) es una de las métricas de salud más utilizadas en el mundo. Pero, ¿qué tan bien entiende lo que realmente le dice?

## ¿Qué es el IMC?

El IMC es una fórmula matemática simple que estima la grasa corporal basándose en su altura y peso:

**IMC = peso (kg) / altura (m)^2**

## Categorías de IMC

La Organización Mundial de la Salud define estas categorías:

| Rango de IMC | Categoría |
|-------------|-----------|
| Menos de 18.5 | Bajo peso |
| 18.5 - 24.9 | Peso normal |
| 25.0 - 29.9 | Sobrepeso |
| 30.0 o más | Obesidad |

## Cómo calcular su IMC

**Ejemplo**: Pesa 75 kg y mide 1.75 m.

1. Eleve al cuadrado su altura: 1.75 x 1.75 = 3.0625
2. Divida el peso entre la altura al cuadrado: 75 / 3.0625 = 24.49
3. Su IMC es 24.49 (Peso normal)

## Limitaciones importantes del IMC

### No distingue entre músculo y grasa
Un atleta musculoso podría tener un IMC de 28 (sobrepeso) con muy poca grasa corporal.

### Ignora la distribución de grasa
La grasa visceral (alrededor de los órganos) es mucho más peligrosa que la grasa subcutánea.

## Consejos prácticos para el manejo saludable del peso

1. **Enfóquese en hábitos, no en números** - El ejercicio regular y la nutrición equilibrada importan más
2. **Rastree tendencias, no fluctuaciones diarias** - El peso puede variar 2-3 kg en un solo día
3. **Considere la composición corporal** - Ganar músculo mientras pierde grasa puede no cambiar su peso
4. **Establezca metas realistas** - Apunte a 0.5-1 kg por semana
5. **Consulte profesionales** - Hable con un médico para consejos personalizados

Use nuestra [Calculadora de IMC](/es/bmi-calculator) para calcular rápidamente su IMC.`
		},
		date: '2025-02-20',
		category: 'health'
	},
	{
		slug: 'personal-loan-management-tips',
		title: {
			en: 'Tips for Managing Personal Loans Effectively',
			ko: '개인 대출을 효과적으로 관리하는 팁',
			ja: '個人ローンを効果的に管理するためのヒント',
			zh: '有效管理个人贷款的技巧',
			es: 'Consejos para gestionar préstamos personales eficazmente'
		},
		description: {
			en: 'Learn smart strategies for managing personal loans, understanding interest rates, and paying off debt faster.',
			ko: '개인 대출 관리, 이자율 이해, 빚을 더 빨리 갚기 위한 스마트한 전략을 배워보세요.',
			ja: '個人ローンの管理、金利の理解、借金をより早く返済するためのスマートな戦略を学びましょう。',
			zh: '学习管理个人贷款、了解利率和更快还清债务的智慧策略。',
			es: 'Aprenda estrategias inteligentes para gestionar préstamos personales y pagar deudas más rápido.'
		},
		content: {
			en: `Personal loans can be powerful financial tools when used wisely, or devastating traps when mismanaged. Here is everything you need to know about managing them effectively.

## Understanding Loan Interest Rates

The interest rate on your loan determines how much extra you pay beyond the borrowed amount. There are two key types:

### Fixed vs. Variable Rates

- **Fixed rate**: Stays the same throughout the loan term. Predictable monthly payments.
- **Variable rate**: Can change based on market conditions. May start lower but carries risk of increasing.

### APR vs. Interest Rate

The **Annual Percentage Rate (APR)** includes the interest rate PLUS fees and other costs. Always compare APR, not just interest rates, when shopping for loans.

## How Monthly Payments Are Calculated

For a fixed-rate loan, the monthly payment formula is:

**M = P[r(1+r)^n] / [(1+r)^n - 1]**

Where:
- M = monthly payment
- P = principal (loan amount)
- r = monthly interest rate (annual rate / 12)
- n = total number of payments

**Example**: $20,000 loan at 8% APR for 5 years
- Monthly rate: 0.08/12 = 0.00667
- Number of payments: 60
- Monthly payment: **$405.53**
- Total paid: $24,331.80
- Total interest: $4,331.80

## Seven Strategies to Pay Off Loans Faster

### 1. Make bi-weekly payments
Instead of 12 monthly payments, make 26 half-payments per year. You end up making one extra full payment annually.

### 2. Round up your payments
If your payment is $405, pay $450 or $500. The extra goes directly to principal.

### 3. Apply windfalls to your loan
Tax refunds, bonuses, gifts - put them toward your principal.

### 4. Use the debt avalanche method
If you have multiple loans, pay minimums on all except the one with the highest interest rate. Attack that one aggressively.

### 5. Refinance when rates drop
If interest rates have fallen since you took your loan, refinancing could save thousands.

### 6. Set up autopay
Many lenders offer 0.25% rate reduction for automatic payments. Over a long loan, this adds up.

### 7. Avoid extending your loan term
When refinancing, keep the same or shorter term. A lower monthly payment with a longer term often means paying more total interest.

## Warning Signs You Have Too Much Debt

- More than 36% of your gross income goes to debt payments
- You are using credit cards to pay basic expenses
- You can only make minimum payments
- You have no emergency savings
- You are losing sleep over finances

## Creating a Loan Payoff Plan

1. **List all debts** with balances, interest rates, and minimum payments
2. **Choose a strategy**: Avalanche (highest rate first) or Snowball (smallest balance first)
3. **Set a timeline**: Calculate when you will be debt-free
4. **Track your progress**: Update monthly and celebrate milestones
5. **Build an emergency fund**: Even $1,000 prevents new debt from unexpected expenses

## What to Look for in a Personal Loan

- **Low APR**: Compare at least 3-5 lenders
- **No prepayment penalties**: Ensure you can pay off early without fees
- **Reasonable fees**: Watch for origination fees, late fees, and processing charges
- **Flexible terms**: Choose a term that balances monthly affordability with total cost
- **Good reputation**: Check reviews and Better Business Bureau ratings

Use our [Loan Calculator](/en/loan-calculator) to model different loan scenarios and find the optimal repayment strategy for your situation.`,
			ko: `개인 대출은 현명하게 사용하면 강력한 금융 도구가 될 수 있지만, 잘못 관리하면 파괴적인 함정이 될 수 있습니다. 효과적으로 관리하기 위해 알아야 할 모든 것을 소개합니다.

## 대출 이자율 이해하기

대출 이자율은 빌린 금액 외에 얼마나 더 지불하는지를 결정합니다.

### 고정 금리 vs. 변동 금리

- **고정 금리**: 대출 기간 내내 동일합니다. 예측 가능한 월 상환금입니다.
- **변동 금리**: 시장 상황에 따라 변할 수 있습니다. 처음에는 낮을 수 있지만 상승 위험이 있습니다.

### APR vs. 이자율

**연이율(APR)**에는 이자율과 수수료 및 기타 비용이 포함됩니다. 대출을 비교할 때 이자율만이 아닌 APR을 항상 비교하세요.

## 월 상환금 계산 방법

**예시**: 2,000만원 대출, 연 8%, 5년 상환
- 월 이율: 0.08/12 = 0.00667
- 총 상환 횟수: 60
- 월 상환금: **약 40만 5,530원**
- 총 상환액: 2,433만 1,800원
- 총 이자: 433만 1,800원

## 대출을 더 빨리 갚는 7가지 전략

### 1. 격주로 상환하기
월 12회 대신 연간 26회 반액 상환을 하면 연간 한 번 추가 상환하는 효과가 있습니다.

### 2. 상환금 올림하기
상환금이 40만원이면 45만원이나 50만원을 내세요. 추가분은 원금으로 직접 갑니다.

### 3. 임시 소득을 대출에 적용하기
세금 환급, 보너스, 선물 등을 원금 상환에 사용하세요.

### 4. 부채 눈사태 방법 사용하기
여러 대출이 있다면 가장 높은 이자율의 대출을 집중 공격하세요.

### 5. 금리가 떨어지면 리파이낸싱하기
대출 후 금리가 하락했다면 리파이낸싱으로 수백만원을 절약할 수 있습니다.

### 6. 자동이체 설정하기
많은 대출 기관이 자동 이체 시 0.25% 금리 할인을 제공합니다.

### 7. 대출 기간 연장 피하기
리파이낸싱 시 같거나 더 짧은 기간을 유지하세요. 더 낮은 월 상환금이라도 더 긴 기간은 총 이자가 더 많을 수 있습니다.

## 대출 상환 계획 만들기

1. **모든 부채 목록 작성** - 잔액, 이자율, 최소 상환금 포함
2. **전략 선택** - 눈사태(최고 이자율 먼저) 또는 눈덩이(최소 잔액 먼저)
3. **타임라인 설정** - 빚 없는 날을 계산하세요
4. **진행 상황 추적** - 매월 업데이트하고 마일스톤을 축하하세요
5. **비상 자금 마련** - 100만원이라도 예상치 못한 지출로 인한 새 빚을 방지합니다

[대출 계산기](/ko/loan-calculator)를 사용하여 다양한 대출 시나리오를 모델링하고 최적의 상환 전략을 찾으세요.`,
			ja: `個人ローンは賢く使えば強力な金融ツールになりますが、管理を誤ると破壊的な罠になります。効果的に管理するために知っておくべきことをご紹介します。

## ローン金利の理解

ローンの金利は、借入額以上にいくら支払うかを決定します。

### 固定金利 vs. 変動金利

- **固定金利**: ローン期間中ずっと同じです。予測可能な月々の支払い。
- **変動金利**: 市場状況により変動する可能性があります。

### APR vs. 金利

**年率（APR）** には金利に加えて手数料やその他のコストが含まれます。ローンを比較する際は、金利だけでなくAPRを比較してください。

## 月々の支払い計算方法

**例**: 200万円のローン、年利8%、5年返済
- 月利: 0.08/12 = 0.00667
- 支払い回数: 60回
- 月々の支払い: **約40,553円**
- 総支払額: 2,433,180円
- 総利息: 433,180円

## ローンをより早く返済する7つの戦略

### 1. 隔週で支払う
月12回の支払いの代わりに、年間26回の半額支払いをします。年間1回分の追加支払い効果があります。

### 2. 支払いを切り上げる
支払いが40,000円なら45,000円や50,000円を支払いましょう。

### 3. 臨時収入をローンに充てる
税金還付、ボーナスなどを元本返済に使いましょう。

### 4. 借金雪崩方式を使う
複数のローンがある場合、最高金利のローンに集中攻撃しましょう。

### 5. 金利が下がったら借り換える
ローンを組んだ後に金利が下がっていれば、借り換えで何万円も節約できます。

### 6. 自動引き落としを設定する
多くの金融機関が自動引き落としで0.25%の金利割引を提供しています。

### 7. ローン期間の延長を避ける
借り換え時は同じか短い期間を維持してください。

## ローン返済計画の作成

1. **すべての借金をリスト化** - 残高、金利、最低支払額を含む
2. **戦略を選択** - 雪崩方式（最高金利優先）またはスノーボール方式（最小残高優先）
3. **タイムラインを設定** - 借金ゼロの日を計算
4. **進捗を追跡** - 毎月更新しマイルストーンを祝う
5. **緊急資金を構築** - 10万円でも予期せぬ出費による新たな借金を防ぐ

[ローン計算機](/ja/loan-calculator)を使って、さまざまなローンシナリオをシミュレーションしてください。`,
			zh: `个人贷款如果明智使用可以成为强大的金融工具，但管理不当则可能成为毁灭性的陷阱。以下是有效管理贷款所需了解的一切。

## 理解贷款利率

贷款利率决定了您在借款金额之外还需支付多少。

### 固定利率 vs. 浮动利率

- **固定利率**：在整个贷款期限内保持不变。月供可预测。
- **浮动利率**：可能随市场条件变化。起初可能较低但有上涨风险。

### APR vs. 利率

**年化百分率（APR）** 包括利率加上费用和其他成本。比较贷款时，务必比较APR而非仅仅利率。

## 月供计算方法

**示例**：20,000元贷款，年利率8%，5年期
- 月利率：0.08/12 = 0.00667
- 还款次数：60次
- 月供：**约405.53元**
- 总还款：24,331.80元
- 总利息：4,331.80元

## 更快还清贷款的7个策略

### 1. 每两周还款一次
年还26次半额而非月还12次，相当于每年多还一次全额。

### 2. 多还一点
月供405元就付450或500元。多出的直接抵扣本金。

### 3. 将意外收入用于还贷
退税、奖金等都用来偿还本金。

### 4. 使用债务雪崩法
多笔贷款时，集中攻击利率最高的贷款。

### 5. 利率下降时再融资
如果利率已经下降，再融资可以节省数千元。

### 6. 设置自动还款
许多贷款机构对自动还款提供0.25%的利率优惠。

### 7. 避免延长贷款期限
再融资时保持相同或更短的期限。

## 创建贷款偿还计划

1. **列出所有债务** - 包括余额、利率和最低还款额
2. **选择策略** - 雪崩法（最高利率优先）或雪球法（最小余额优先）
3. **设定时间线** - 计算何时无债一身轻
4. **跟踪进度** - 每月更新并庆祝里程碑
5. **建立应急基金** - 即使1,000元也能防止意外支出导致新债务

使用我们的[贷款计算器](/zh/loan-calculator)模拟不同的贷款方案，找到最优还款策略。`,
			es: `Los préstamos personales pueden ser herramientas financieras poderosas cuando se usan sabiamente, o trampas devastadoras cuando se gestionan mal.

## Entender las tasas de interés

### Tasa fija vs. variable

- **Tasa fija**: Se mantiene igual durante todo el plazo. Pagos mensuales predecibles.
- **Tasa variable**: Puede cambiar según las condiciones del mercado.

### TAE vs. tasa de interés

La **Tasa Anual Equivalente (TAE)** incluye la tasa de interés MÁS comisiones y otros costos. Compare siempre la TAE.

## Siete estrategias para pagar préstamos más rápido

### 1. Pagos quincenales
En lugar de 12 pagos mensuales, haga 26 medios pagos al año.

### 2. Redondee sus pagos hacia arriba
Si su pago es de $405, pague $450 o $500.

### 3. Aplique ingresos extraordinarios
Devoluciones de impuestos, bonos - aplíquelos al capital.

### 4. Use el método de avalancha
Concentre el pago extra en el préstamo con la tasa más alta.

### 5. Refinancie cuando las tasas bajen
La refinanciación podría ahorrarle miles.

### 6. Configure el pago automático
Muchos prestamistas ofrecen 0.25% de reducción por pagos automáticos.

### 7. Evite extender el plazo
Al refinanciar, mantenga el mismo plazo o uno más corto.

## Creación de un plan de pago

1. **Liste todas las deudas** con saldos, tasas y pagos mínimos
2. **Elija una estrategia**: Avalancha o Bola de nieve
3. **Establezca un cronograma**: Calcule cuándo estará libre de deudas
4. **Siga su progreso**: Actualice mensualmente
5. **Construya un fondo de emergencia**: Incluso $1,000 previene nuevas deudas

Use nuestra [Calculadora de Préstamos](/es/loan-calculator) para modelar diferentes escenarios.`
		},
		date: '2025-03-01',
		category: 'finance'
	},
	{
		slug: 'currency-conversion-tips-travelers',
		title: {
			en: 'Currency Conversion Tips for International Travelers',
			ko: '해외 여행자를 위한 환전 팁',
			ja: '海外旅行者のための通貨換算のヒント',
			zh: '国际旅行者的货币兑换技巧',
			es: 'Consejos de conversión de divisas para viajeros'
		},
		description: {
			en: 'Save money on your next trip with these essential currency conversion tips, from finding the best exchange rates to avoiding hidden fees.',
			ko: '최적의 환율 찾기부터 숨겨진 수수료 피하기까지, 다음 여행에서 돈을 절약하는 필수 환전 팁.',
			ja: '最適な為替レートの見つけ方から隠れた手数料の回避まで、次の旅行で節約するための必須通貨換算のヒント。',
			zh: '从找到最佳汇率到避免隐藏费用，为您的下次旅行省钱的必备货币兑换技巧。',
			es: 'Ahorre dinero en su próximo viaje con estos consejos esenciales de conversión de divisas.'
		},
		content: {
			en: `Currency conversion can make or break your travel budget. The difference between smart and careless currency management can easily amount to hundreds of dollars on a single trip.

## Understanding Exchange Rates

Exchange rates represent how much one currency is worth in terms of another. They fluctuate constantly based on:

- **Economic indicators** (GDP, employment, inflation)
- **Central bank policies** (interest rate decisions)
- **Political events** (elections, trade agreements)
- **Market sentiment** (investor confidence)

### Bid vs. Ask Rate

- **Bid rate**: What the dealer pays to buy your currency (lower)
- **Ask rate**: What the dealer charges to sell you currency (higher)
- **Spread**: The difference between bid and ask is the dealer's profit

## Where to Exchange Currency (Best to Worst)

### Best Options
1. **Your bank's ATM abroad** - Usually offers rates close to the interbank rate with a small fee
2. **Credit cards with no foreign transaction fees** - Excellent rates, often the mid-market rate
3. **Your home bank** - Order foreign currency before you travel

### Acceptable Options
4. **Local banks at your destination** - Decent rates but may require an account
5. **Reputable exchange offices in city centers** - Compare several before committing

### Avoid
6. **Airport exchange counters** - Markups of 7-15% are common
7. **Hotel exchange services** - Convenience comes at a high price
8. **Street money changers** - Risk of scams and counterfeit bills

## Ten Money-Saving Tips

### 1. Know the mid-market rate before you go
Check our currency converter or sites like XE.com. Any rate more than 2-3% away is a bad deal.

### 2. Use a no-fee travel credit card
Cards like those offering no foreign transaction fees save 3% on every purchase abroad.

### 3. Always pay in local currency
When a merchant asks "pay in your currency or local?", ALWAYS choose local currency. Paying in your home currency triggers Dynamic Currency Conversion (DCC), which adds 3-7% markup.

### 4. Withdraw larger amounts less frequently
ATM fees are often flat-rate ($3-5 per transaction). Withdrawing $300 once is cheaper than three $100 withdrawals.

### 5. Notify your bank before traveling
Avoid having your card frozen by alerting your bank about your travel dates and destinations.

### 6. Keep some cash for emergencies
Not everywhere accepts cards. Keep a small reserve of local currency.

### 7. Use exchange rate apps
Monitor rates and set alerts for favorable movements before your trip.

### 8. Avoid exchanging at the last minute
Airport rates are the worst. Plan ahead and exchange at better venues.

### 9. Compare total cost, not just rates
A "commission-free" exchange often hides costs in a worse exchange rate. Calculate the total amount you receive.

### 10. Consider multi-currency accounts
Services like Wise (TransferWise) or Revolut offer near-interbank rates and multi-currency cards.

## Understanding Hidden Fees

| Fee Type | Typical Cost | How to Avoid |
|----------|-------------|--------------|
| Foreign transaction fee | 1-3% | Use no-fee cards |
| ATM withdrawal fee | $2-5 flat | Withdraw larger amounts |
| DCC markup | 3-7% | Always pay in local currency |
| Exchange commission | 2-10% | Compare multiple providers |
| Poor exchange rate | 3-15% markup | Check mid-market rate first |

## Regional Tips

- **Europe**: Euros are widely accepted across the Eurozone; ATMs are everywhere
- **Japan**: Still very cash-oriented; stock up at 7-Eleven ATMs which accept foreign cards
- **Southeast Asia**: Negotiate exchange rates at local shops; avoid airport counters
- **South America**: US dollars are widely accepted as backup; local ATMs offer best rates

Use our [Currency Converter](/en/currency-converter) to check current exchange rates before your trip and track rate movements.`,
			ko: `환전은 여행 예산을 좌우할 수 있습니다. 현명한 환전 관리와 부주의한 관리의 차이는 한 번의 여행에서 수십만 원에 이를 수 있습니다.

## 환율 이해하기

환율은 한 통화가 다른 통화로 얼마의 가치가 있는지를 나타냅니다. 다음에 따라 끊임없이 변동합니다:

- **경제 지표** (GDP, 고용, 인플레이션)
- **중앙은행 정책** (금리 결정)
- **정치적 사건** (선거, 무역 협정)
- **시장 심리** (투자자 신뢰도)

## 환전 장소 (최고에서 최악)

### 최고의 옵션
1. **해외에서 국내 은행 ATM 사용** - 은행간 환율에 가까운 환율과 적은 수수료
2. **해외 거래 수수료 없는 신용카드** - 우수한 환율
3. **출국 전 국내 은행** - 여행 전 외화를 주문하세요

### 괜찮은 옵션
4. **목적지의 현지 은행** - 괜찮은 환율이지만 계좌가 필요할 수 있음
5. **시내 중심가의 신뢰할 수 있는 환전소** - 여러 곳을 비교하세요

### 피해야 할 곳
6. **공항 환전 카운터** - 7-15% 마크업이 일반적
7. **호텔 환전 서비스** - 편리함에 높은 대가
8. **길거리 환전상** - 사기와 위조 지폐 위험

## 10가지 절약 팁

### 1. 출국 전 중간 시장 환율을 확인하세요
환율 계산기를 확인하세요. 2-3% 이상 차이나면 나쁜 거래입니다.

### 2. 해외 수수료 없는 여행 신용카드 사용
해외 거래 수수료가 없는 카드로 모든 해외 구매에서 3%를 절약하세요.

### 3. 항상 현지 통화로 결제하세요
상점에서 "원화로 결제하시겠습니까, 현지 통화로 결제하시겠습니까?"라고 물으면 항상 현지 통화를 선택하세요. 원화 결제는 3-7%의 마크업이 붙는 DCC가 적용됩니다.

### 4. 더 큰 금액을 덜 자주 인출하세요
ATM 수수료는 건당 고정(3,000-5,000원)인 경우가 많습니다.

### 5. 여행 전 은행에 알리세요
카드가 정지되는 것을 방지하기 위해 여행 일정과 목적지를 은행에 알려주세요.

### 6. 비상 현금을 보유하세요
모든 곳에서 카드를 받는 것은 아닙니다.

### 7. 환율 앱을 사용하세요
여행 전 유리한 환율 변동을 모니터링하세요.

### 8. 마지막 순간에 환전하지 마세요
공항 환율이 가장 나쁩니다. 미리 계획하세요.

### 9. 환율뿐만 아니라 총 비용을 비교하세요
"수수료 무료" 환전은 더 나쁜 환율에 비용을 숨기는 경우가 많습니다.

### 10. 다중 통화 계좌를 고려하세요
Wise나 Revolut 같은 서비스는 은행간 환율에 가까운 환율을 제공합니다.

[환율 계산기](/ko/currency-converter)를 사용하여 여행 전 현재 환율을 확인하세요.`,
			ja: `通貨換算は旅行予算を左右する可能性があります。賢い通貨管理と不注意な管理の違いは、1回の旅行で数万円にもなり得ます。

## 為替レートの理解

為替レートは、ある通貨が別の通貨でいくらの価値があるかを表します。以下に基づいて常に変動します：

- **経済指標**（GDP、雇用、インフレーション）
- **中央銀行の政策**（金利決定）
- **政治的イベント**（選挙、貿易協定）
- **市場心理**（投資家の信頼度）

## 通貨を交換する場所（最良から最悪）

### 最良のオプション
1. **海外での国内銀行ATM** - 銀行間レートに近い為替レートと少額の手数料
2. **海外取引手数料なしのクレジットカード** - 優れたレート
3. **出発前の国内銀行** - 旅行前に外貨を注文

### まずまずのオプション
4. **目的地の現地銀行** - まずまずのレート
5. **市内中心部の信頼できる両替所** - 複数を比較

### 避けるべき場所
6. **空港の両替カウンター** - 7-15%のマークアップが一般的
7. **ホテルの両替サービス** - 便利さには高い代価
8. **街頭の両替商** - 詐欺や偽札のリスク

## 10の節約のヒント

### 1. 出発前にミッドマーケットレートを確認
為替レート計算機をチェックしましょう。2-3%以上の差は悪い取引です。

### 2. 手数料無料のトラベルクレジットカードを使用
海外取引手数料なしのカードで、海外でのすべての購入で3%節約できます。

### 3. 必ず現地通貨で支払う
商店で「自国通貨で支払いますか、現地通貨ですか？」と聞かれたら、必ず現地通貨を選んでください。自国通貨での支払いはDCC（3-7%のマークアップ）が適用されます。

### 4. より大きな金額をより少ない回数で引き出す
ATM手数料は1回あたり固定（300-500円）の場合が多いです。

### 5. 旅行前に銀行に通知する
カードが凍結されるのを防ぐために、旅行日程と目的地を銀行に知らせましょう。

[通貨換算ツール](/ja/currency-converter)を使って、旅行前に現在の為替レートを確認してください。`,
			zh: `货币兑换可以决定您的旅行预算。明智和不小心的货币管理之间的差异，在一次旅行中很容易就达到数百美元。

## 理解汇率

汇率表示一种货币相对于另一种货币的价值。它们根据以下因素不断波动：

- **经济指标**（GDP、就业、通胀）
- **央行政策**（利率决定）
- **政治事件**（选举、贸易协定）
- **市场情绪**（投资者信心）

## 兑换货币的地点（从最好到最差）

### 最佳选择
1. **在国外使用本国银行ATM** - 通常提供接近银行间汇率的费率
2. **无境外交易费的信用卡** - 优秀的汇率
3. **出发前在本国银行兑换** - 旅行前订购外币

### 可接受的选择
4. **目的地的当地银行** - 还不错的汇率
5. **市中心信誉良好的兑换处** - 多家比较

### 避免
6. **机场兑换柜台** - 加价7-15%很常见
7. **酒店兑换服务** - 便利性代价高
8. **街头换汇者** - 有诈骗和假币风险

## 十个省钱技巧

### 1. 出发前了解中间市场汇率
使用汇率计算器查看。偏差超过2-3%就是不好的交易。

### 2. 使用无手续费的旅行信用卡
无境外交易费的卡片可在每次海外消费中节省3%。

### 3. 始终以当地货币支付
当商家问"用您的货币还是当地货币支付？"时，始终选择当地货币。

### 4. 每次取更多金额，减少取款次数
ATM手续费通常是固定的。

### 5. 旅行前通知银行
避免卡被冻结。

使用我们的[货币转换器](/zh/currency-converter)在旅行前查看当前汇率。`,
			es: `La conversión de divisas puede hacer o deshacer su presupuesto de viaje. La diferencia entre una gestión inteligente y descuidada puede suponer fácilmente cientos de dólares en un solo viaje.

## Entender los tipos de cambio

Los tipos de cambio representan cuánto vale una moneda en términos de otra.

## Dónde cambiar divisas (de mejor a peor)

### Mejores opciones
1. **ATM de su banco en el extranjero** - Tasas cercanas al interbancario
2. **Tarjetas de crédito sin comisión por transacción extranjera** - Excelentes tasas
3. **Su banco antes de viajar** - Pida moneda extranjera con anticipación

### Opciones aceptables
4. **Bancos locales en su destino** - Tasas decentes
5. **Oficinas de cambio en el centro** - Compare varias

### Evitar
6. **Mostradores de cambio del aeropuerto** - Márgenes del 7-15%
7. **Servicios de cambio del hotel** - La conveniencia tiene un alto precio

## Diez consejos para ahorrar

### 1. Conozca la tasa del mercado medio antes de ir
### 2. Use una tarjeta de crédito sin comisiones
### 3. Siempre pague en moneda local
### 4. Retire cantidades mayores con menos frecuencia
### 5. Notifique a su banco antes de viajar
### 6. Tenga efectivo para emergencias
### 7. Use aplicaciones de tipos de cambio
### 8. Evite cambiar a última hora
### 9. Compare el costo total, no solo las tasas
### 10. Considere cuentas multidivisa

Use nuestro [Convertidor de Divisas](/es/currency-converter) para verificar las tasas actuales antes de su viaje.`
		},
		date: '2025-03-05',
		category: 'travel'
	},
	{
		slug: 'calculate-real-hourly-wage',
		title: {
			en: 'How to Calculate Your Real Hourly Wage',
			ko: '실제 시급을 계산하는 방법',
			ja: '実質時給の計算方法',
			zh: '如何计算您的实际时薪',
			es: 'Cómo calcular su salario real por hora'
		},
		description: {
			en: 'Your real hourly wage is probably lower than you think. Learn how to calculate it by factoring in commute, preparation, and work-related expenses.',
			ko: '실제 시급은 생각보다 낮을 수 있습니다. 통근, 준비, 업무 관련 비용을 포함하여 계산하는 방법을 알아보세요.',
			ja: '実質時給は思っているより低いかもしれません。通勤、準備、仕事関連の経費を考慮した計算方法を学びましょう。',
			zh: '您的实际时薪可能比您想的要低。了解如何将通勤、准备和工作相关费用纳入计算。',
			es: 'Su salario real por hora probablemente es menor de lo que piensa. Aprenda a calcularlo.'
		},
		content: {
			en: `Most people know their salary or hourly rate, but very few know their REAL hourly wage - the amount they actually earn for each hour of their life devoted to work. This concept, popularized by Vicki Robin in "Your Money or Your Life," can fundamentally change how you think about spending.

## The Concept of Real Hourly Wage

Your employer pays you for the hours you work. But work consumes far more of your time than just the hours at your desk. When you account for ALL the time and money that work requires, your effective hourly rate is often 30-50% lower than your nominal rate.

## Step 1: Calculate Your Total Work-Related Time

Start with your paid hours, then add ALL the additional time work requires:

| Activity | Weekly Hours |
|----------|-------------|
| Paid work hours | 40 |
| Commuting (round trip) | 5 |
| Getting ready for work | 2.5 |
| Decompressing after work | 2.5 |
| Work-related errands | 1 |
| Extra unpaid work (emails, etc.) | 3 |
| **Total work-related hours** | **54** |

## Step 2: Calculate Your True Take-Home Pay

Start with your gross salary, then subtract ALL work-related expenses:

| Item | Annual Cost |
|------|-----------|
| Gross annual salary | $60,000 |
| Minus: Income taxes (federal + state) | -$12,000 |
| Minus: Commuting costs (gas, parking, transit) | -$3,600 |
| Minus: Work wardrobe | -$1,200 |
| Minus: Lunches out / convenience food | -$2,400 |
| Minus: Childcare premium (above at-home cost) | -$4,800 |
| Minus: Stress relief spending | -$1,200 |
| Minus: Work-related technology | -$600 |
| **Actual take-home from work** | **$34,200** |

## Step 3: Calculate Your Real Hourly Wage

**Real hourly wage = Adjusted income / Total work hours per year**

- Total work hours: 54 hours/week x 50 weeks = 2,700 hours/year
- Real hourly wage: $34,200 / 2,700 = **$12.67/hour**

Compare this to the nominal rate: $60,000 / 2,080 = $28.85/hour. Your real hourly wage is less than half your perceived rate.

## Why This Matters

### Better purchasing decisions
When you know your real hourly wage, you can translate any purchase into work-hours:
- A $50 dinner out = 3.9 hours of your life
- A $1,200 phone = 94.7 hours of your life
- A $30,000 car = 2,368 hours of your life

### Career evaluation
Compare jobs not by salary but by real hourly wage. A $80,000 job with a 2-hour commute and high stress may pay less per real hour than a $55,000 job you can walk to.

### Side income perspective
That freelance project paying $30/hour might actually be more lucrative than your day job when you factor in no commute, no work wardrobe, and flexible hours.

## How to Increase Your Real Hourly Wage

1. **Reduce commute time** - Work remotely, move closer, or negotiate flexible hours
2. **Cut work-related expenses** - Pack lunches, simplify your wardrobe, carpool
3. **Negotiate a raise** - Even 5% significantly impacts your real hourly wage
4. **Reduce unpaid work time** - Set boundaries on after-hours emails
5. **Optimize taxes** - Maximize deductions and retirement contributions
6. **Simplify your life** - Less stress spending means more of your income stays yours

## Action Steps

1. Track ALL your work-related time for one week
2. List ALL your work-related expenses for one month
3. Calculate your real hourly wage
4. Start evaluating purchases in terms of work-hours

Use our [Salary Calculator](/en/salary-calculator) to convert between different pay periods and better understand your compensation.`,
			ko: `대부분의 사람들은 자신의 급여나 시급을 알고 있지만, 실제 시급 - 일에 바치는 삶의 매 시간에 실제로 버는 금액 - 을 아는 사람은 극소수입니다.

## 실제 시급의 개념

고용주는 일하는 시간에 대해 급여를 지급합니다. 하지만 일은 책상 앞에 앉아 있는 시간 이상으로 훨씬 더 많은 시간을 소비합니다. 일이 요구하는 모든 시간과 비용을 계산하면, 실효 시급은 명목 시급보다 30-50% 낮은 경우가 많습니다.

## 1단계: 총 업무 관련 시간 계산

급여 시간에서 시작하여 일이 요구하는 모든 추가 시간을 더합니다:

| 활동 | 주당 시간 |
|-----|---------|
| 유급 근무 시간 | 40 |
| 통근 (왕복) | 5 |
| 출근 준비 | 2.5 |
| 퇴근 후 휴식 | 2.5 |
| 업무 관련 심부름 | 1 |
| 추가 무급 업무 (이메일 등) | 3 |
| **총 업무 관련 시간** | **54** |

## 2단계: 실제 순수입 계산

총 급여에서 모든 업무 관련 비용을 빼세요:

| 항목 | 연간 비용 |
|-----|---------|
| 연봉 | 5,000만원 |
| 소득세 | -800만원 |
| 통근 비용 | -240만원 |
| 업무 의류 | -100만원 |
| 외식/간편식 | -200만원 |
| 스트레스 해소 지출 | -100만원 |
| **실제 업무 순수입** | **3,560만원** |

## 3단계: 실제 시급 계산

**실제 시급 = 조정 소득 / 연간 총 업무 시간**

- 총 업무 시간: 54시간/주 x 50주 = 2,700시간/년
- 실제 시급: 3,560만원 / 2,700 = **약 13,185원/시간**

명목 시급 비교: 5,000만원 / 2,080 = 24,038원/시간. 실제 시급은 인식된 시급의 절반 수준입니다.

## 왜 중요한가

### 더 나은 구매 결정
실제 시급을 알면 모든 구매를 근무 시간으로 환산할 수 있습니다:
- 5만원짜리 외식 = 3.8시간의 삶
- 150만원짜리 핸드폰 = 113.8시간의 삶

### 직업 평가
급여가 아닌 실제 시급으로 직업을 비교하세요. 통근 2시간에 스트레스 높은 8,000만원 직업이 걸어서 갈 수 있는 5,500만원 직업보다 실제 시급이 낮을 수 있습니다.

## 실제 시급을 높이는 방법

1. **통근 시간 줄이기** - 재택근무, 가까이 이사, 유연 근무 협상
2. **업무 관련 비용 줄이기** - 도시락 싸기, 옷장 단순화
3. **급여 인상 협상** - 5%만으로도 실제 시급에 큰 영향
4. **무급 업무 시간 줄이기** - 퇴근 후 이메일에 경계 설정
5. **세금 최적화** - 공제와 퇴직 기여금 극대화

[급여 계산기](/ko/salary-calculator)를 사용하여 다양한 급여 기간 간 변환하고 보상을 더 잘 이해하세요.`,
			ja: `ほとんどの人は自分の給料や時給を知っていますが、実質時給 - 仕事に費やす人生の各時間に実際に稼いでいる金額 - を知っている人はごく少数です。

## 実質時給の概念

雇用主は働いた時間に対して給料を支払います。しかし、仕事はデスクにいる時間以上に多くの時間を消費します。仕事が要求するすべての時間とお金を計算すると、実効時給は名目時給より30-50%低いことが多いです。

## ステップ1：総業務関連時間の計算

給与時間から始めて、仕事が要求するすべての追加時間を加えます：

| 活動 | 週間時間 |
|-----|---------|
| 有給勤務時間 | 40 |
| 通勤（往復） | 5 |
| 出勤準備 | 2.5 |
| 退勤後のリラックス | 2.5 |
| 業務関連の用事 | 1 |
| 追加の無給業務 | 3 |
| **総業務関連時間** | **54** |

## ステップ2：実際の手取りの計算

年収からすべての業務関連費用を差し引きます：

| 項目 | 年間コスト |
|-----|----------|
| 年収 | 600万円 |
| 所得税・住民税 | -120万円 |
| 通勤費 | -36万円 |
| 仕事用衣類 | -12万円 |
| 外食・コンビニ食 | -24万円 |
| ストレス解消支出 | -12万円 |
| **実際の業務純収入** | **396万円** |

## ステップ3：実質時給の計算

**実質時給 = 調整後収入 / 年間総業務時間**

- 総業務時間: 54時間/週 x 50週 = 2,700時間/年
- 実質時給: 396万円 / 2,700 = **約1,467円/時間**

名目時給との比較: 600万円 / 2,080 = 2,885円/時間。実質時給は認識している時給の約半分です。

## なぜ重要なのか

実質時給を知ると、すべての購入を労働時間に換算できます：
- 5,000円の外食 = 3.4時間の人生
- 15万円のスマートフォン = 102.2時間の人生

## 実質時給を上げる方法

1. **通勤時間を減らす** - リモートワーク、近くに引っ越す
2. **業務関連経費を削減** - 弁当を持参、服装をシンプルに
3. **昇給を交渉** - 5%でも実質時給に大きく影響
4. **無給業務時間を減らす** - 業務時間外のメールに境界を設ける

[給与計算機](/ja/salary-calculator)を使って、異なる給与期間間の換算を行ってください。`,
			zh: `大多数人知道自己的薪水或时薪，但很少有人知道自己的实际时薪——为工作付出的每个小时实际赚到的金额。

## 实际时薪的概念

雇主为您工作的时间支付报酬。但工作消耗的时间远不止您在办公桌前的时间。当您计算工作所需的所有时间和金钱时，您的实际时薪通常比名义时薪低30-50%。

## 第一步：计算总工作相关时间

从带薪工时开始，加上工作所需的所有额外时间：

| 活动 | 每周小时 |
|-----|---------|
| 带薪工作时间 | 40 |
| 通勤（往返） | 5 |
| 上班准备 | 2.5 |
| 下班后减压 | 2.5 |
| 工作相关事务 | 1 |
| 额外无薪工作 | 3 |
| **总工作相关时间** | **54** |

## 第二步：计算实际净收入

从总薪资中减去所有工作相关费用。

## 第三步：计算实际时薪

**实际时薪 = 调整后收入 / 年总工作时间**

## 为什么这很重要

### 更好的购买决策
知道实际时薪后，您可以将任何购买转换为工作小时数。

### 职业评估
不要按薪水而是按实际时薪比较工作。

## 如何提高实际时薪

1. **减少通勤时间** - 远程工作、搬近一点
2. **削减工作相关费用** - 带午餐、简化衣橱
3. **谈判加薪** - 即使5%也会显著影响实际时薪
4. **减少无薪工作时间** - 对下班后的邮件设定界限
5. **优化税务** - 最大化扣除额和退休金缴款

使用我们的[薪资计算器](/zh/salary-calculator)在不同薪资周期之间转换。`,
			es: `La mayoría de las personas conocen su salario, pero muy pocas conocen su salario REAL por hora. Este concepto puede cambiar fundamentalmente cómo piensa sobre el gasto.

## El concepto del salario real por hora

Su empleador le paga por las horas que trabaja. Pero el trabajo consume mucho más tiempo que solo las horas en su escritorio. Cuando considera TODO el tiempo y dinero que el trabajo requiere, su tarifa efectiva por hora es a menudo 30-50% más baja.

## Paso 1: Calcule su tiempo total relacionado con el trabajo

| Actividad | Horas semanales |
|-----------|----------------|
| Horas pagadas | 40 |
| Desplazamiento (ida y vuelta) | 5 |
| Prepararse para el trabajo | 2.5 |
| Descompresión después del trabajo | 2.5 |
| Recados relacionados | 1 |
| Trabajo extra no remunerado | 3 |
| **Total** | **54** |

## Paso 2: Calcule su ingreso neto real

Reste TODOS los gastos relacionados con el trabajo de su salario bruto.

## Paso 3: Calcule su salario real por hora

**Salario real = Ingreso ajustado / Horas totales de trabajo al año**

## Por qué esto importa

Cuando conoce su salario real por hora, puede traducir cualquier compra en horas de trabajo.

## Cómo aumentar su salario real

1. **Reduzca el tiempo de desplazamiento** - Trabaje remotamente
2. **Recorte gastos relacionados** - Lleve almuerzo, simplifique vestuario
3. **Negocie un aumento** - Incluso 5% impacta significativamente
4. **Reduzca trabajo no remunerado** - Establezca límites con emails
5. **Optimice impuestos** - Maximice deducciones

Use nuestra [Calculadora de Salario](/es/salary-calculator) para convertir entre diferentes períodos de pago.`
		},
		date: '2025-03-10',
		category: 'career'
	},
	{
		slug: 'tax-planning-basics-everyone',
		title: {
			en: 'Tax Planning Basics Everyone Should Know',
			ko: '모든 사람이 알아야 할 세금 계획 기본',
			ja: '誰もが知っておくべき税金計画の基本',
			zh: '每个人都应该知道的税务规划基础',
			es: 'Fundamentos de planificación fiscal que todos deberían conocer'
		},
		description: {
			en: 'Understand the fundamentals of tax planning to keep more of your hard-earned money, from deductions to tax-advantaged accounts.',
			ko: '공제부터 세금 우대 계좌까지, 힘들게 번 돈을 더 많이 지키기 위한 세금 계획의 기본을 이해하세요.',
			ja: '控除から税制優遇口座まで、稼いだお金をより多く手元に残すための税金計画の基本を理解しましょう。',
			zh: '从扣除到税收优惠账户，了解税务规划的基础知识，保留更多辛苦赚来的钱。',
			es: 'Comprenda los fundamentos de la planificación fiscal para conservar más de su dinero.'
		},
		content: {
			en: `Tax planning is not just for the wealthy. Everyone can benefit from understanding basic tax concepts and strategies to legally minimize their tax burden.

## Understanding Tax Brackets

A common misconception is that moving to a higher tax bracket means all your income is taxed at that rate. In reality, taxes are marginal - only the income within each bracket is taxed at that bracket's rate.

**Example (2024 US Single Filer):**

| Bracket | Rate | Tax |
|---------|------|-----|
| $0 - $11,600 | 10% | $1,160 |
| $11,601 - $47,150 | 12% | $4,266 |
| $47,151 - $100,525 | 22% | $11,742 |
| $100,526 - $191,950 | 24% | $21,942 |

If you earn $80,000, you do not pay 22% on everything. You pay 10% on the first $11,600, 12% on the next $35,550, and 22% only on income above $47,150.

## Key Tax Reduction Strategies

### 1. Maximize retirement contributions
- **401(k)**: Up to $23,000 in 2024 ($30,500 if 50+)
- **Traditional IRA**: Up to $7,000 ($8,000 if 50+)
- Every dollar contributed reduces your taxable income by that amount

### 2. Use the standard deduction wisely
For 2024: $14,600 (single), $29,200 (married filing jointly). Only itemize if your deductions exceed this.

### 3. Harvest tax losses
Sell underperforming investments to offset capital gains. You can deduct up to $3,000 in net losses against ordinary income.

### 4. Contribute to an HSA
Health Savings Accounts are triple tax-advantaged:
- Contributions are tax-deductible
- Growth is tax-free
- Withdrawals for medical expenses are tax-free

### 5. Time your income and deductions
If you expect to be in a lower bracket next year, defer income. If higher, accelerate deductions into this year.

## Common Tax Deductions and Credits

### Deductions (reduce taxable income)
- **Mortgage interest** on loans up to $750,000
- **State and local taxes (SALT)** up to $10,000
- **Charitable contributions**
- **Student loan interest** up to $2,500
- **Home office** if self-employed

### Credits (directly reduce tax owed)
- **Child Tax Credit**: Up to $2,000 per child
- **Earned Income Tax Credit**: Up to $7,430 for families
- **Education Credits**: Up to $2,500 (American Opportunity) or $2,000 (Lifetime Learning)
- **Energy Credits**: For solar panels, EVs, and energy improvements

## Tax-Advantaged Accounts Comparison

| Account | Tax on Contributions | Tax on Growth | Tax on Withdrawal |
|---------|---------------------|---------------|-------------------|
| Traditional 401(k)/IRA | Deductible | Deferred | Taxed as income |
| Roth 401(k)/IRA | Taxed | Tax-free | Tax-free |
| HSA | Deductible | Tax-free | Tax-free (medical) |
| 529 Plan | Not deductible | Tax-free | Tax-free (education) |

## Year-End Tax Planning Checklist

- [ ] Review tax withholding - adjust if getting large refund or owing taxes
- [ ] Maximize retirement contributions before December 31
- [ ] Make charitable donations (consider bunching every other year)
- [ ] Review capital gains and losses
- [ ] Contribute to HSA if eligible
- [ ] Use remaining FSA funds before expiration
- [ ] Consider Roth conversion if in a low-income year
- [ ] Gather receipts and documentation

## Common Tax Mistakes to Avoid

1. **Not filing on time** - Late penalties can be steep
2. **Missing deductions** - Keep records throughout the year
3. **Ignoring estimated taxes** - Self-employed must pay quarterly
4. **Not adjusting withholding after life changes** - Marriage, baby, new job
5. **Overlooking state taxes** - They can significantly impact your total tax burden

Use our [Tax Calculator](/en/tax-calculator) to estimate your tax liability and plan your strategy for the year ahead.`,
			ko: `세금 계획은 부유한 사람들만을 위한 것이 아닙니다. 누구나 기본적인 세금 개념과 전략을 이해하여 합법적으로 세금 부담을 최소화할 수 있습니다.

## 세율 구간 이해하기

흔한 오해는 더 높은 세율 구간으로 이동하면 모든 소득이 그 세율로 과세된다는 것입니다. 실제로 세금은 누진적입니다 - 각 구간 내의 소득만 해당 구간의 세율로 과세됩니다.

**예시 (한국 근로소득세):**

| 과세표준 | 세율 |
|---------|------|
| 1,400만원 이하 | 6% |
| 1,400~5,000만원 | 15% |
| 5,000~8,800만원 | 24% |
| 8,800만~1.5억원 | 35% |

연봉 6,000만원이면 전체에 24%가 적용되는 것이 아닙니다. 처음 1,400만원에는 6%, 다음 3,600만원에는 15%, 나머지에만 24%가 적용됩니다.

## 주요 세금 절감 전략

### 1. 퇴직연금 기여금 최대화
- **개인연금저축**: 연 400만원까지 세액공제
- **IRP**: 연 700만원까지 세액공제
- 기여금 1원마다 과세 소득이 줄어듭니다

### 2. 소득공제와 세액공제 활용
연말정산에서 놓치는 공제 항목이 없는지 확인하세요:
- 의료비 공제
- 교육비 공제
- 기부금 공제
- 신용카드/체크카드 사용액 공제
- 주택 관련 공제

### 3. 절세 금융상품 활용
- **ISA (개인종합자산관리계좌)**: 일정 금액까지 비과세
- **연금저축**: 세액공제 + 과세이연
- **주택청약저축**: 소득공제 혜택

### 4. 소득 시기 조절
내년에 더 낮은 세율 구간에 있을 것으로 예상되면 소득을 이연하세요.

## 연말 세금 계획 체크리스트

- [ ] 원천징수 검토 - 큰 환급이나 추가 납부가 있으면 조정
- [ ] 12월 31일 전에 퇴직연금 기여금 최대화
- [ ] 기부금 영수증 정리
- [ ] 의료비, 교육비 영수증 확인
- [ ] 신용카드/체크카드 사용 비율 확인
- [ ] 주택 관련 공제 서류 준비

## 흔한 세금 실수

1. **기한 내 신고하지 않기** - 가산세가 클 수 있습니다
2. **공제 항목 놓치기** - 연중 영수증을 보관하세요
3. **생활 변화 후 원천징수 조정하지 않기** - 결혼, 출산, 이직 시
4. **절세 상품 미활용** - 연금저축, IRP 등을 활용하세요

[세금 계산기](/ko/tax-calculator)를 사용하여 세금 부담을 추정하고 계획을 세우세요.`,
			ja: `税金計画は裕福な人だけのものではありません。基本的な税金の概念と戦略を理解することで、誰もが合法的に税負担を最小限に抑えることができます。

## 税率区分の理解

よくある誤解は、より高い税率区分に移動するとすべての所得がその税率で課税されるということです。実際には、税金は累進的です。各区分内の所得のみがその区分の税率で課税されます。

**例（日本の所得税）：**

| 課税所得 | 税率 | 控除額 |
|---------|------|-------|
| 195万円以下 | 5% | 0円 |
| 195~330万円 | 10% | 97,500円 |
| 330~695万円 | 20% | 427,500円 |
| 695~900万円 | 23% | 636,000円 |
| 900~1,800万円 | 33% | 1,536,000円 |

## 主要な節税戦略

### 1. 退職金拠出の最大化
- **iDeCo（個人型確定拠出年金）**: 掛金全額が所得控除
- **NISA**: 運用益が非課税
- **小規模企業共済**: 掛金全額が所得控除

### 2. 所得控除の活用
- 医療費控除
- 社会保険料控除
- 生命保険料控除
- 地震保険料控除
- ふるさと納税（寄附金控除）

### 3. ふるさと納税の活用
実質2,000円の負担で返礼品を受け取りながら税額控除を受けられます。

### 4. NISA（少額投資非課税制度）の活用
2024年から新NISAとして:
- つみたて投資枠: 年間120万円
- 成長投資枠: 年間240万円
- 非課税保有期間: 無期限

## 年末の税金計画チェックリスト

- [ ] 年末調整の書類を確認
- [ ] iDeCoの掛金を最大化
- [ ] ふるさと納税の上限を確認して実施
- [ ] 医療費の領収書を整理（10万円超で控除対象）
- [ ] 生命保険・地震保険の控除証明書を確認
- [ ] 住宅ローン控除の書類準備

## よくある税金の間違い

1. **確定申告を忘れる** - 延滞税がかかります
2. **控除項目の見落とし** - 年間を通じて領収書を保管
3. **生活変化後の源泉徴収の調整忘れ** - 結婚、出産、転職時
4. **節税制度の未活用** - iDeCo、NISA等を活用しましょう

[税金計算機](/ja/tax-calculator)を使って、税負担を推定し計画を立てましょう。`,
			zh: `税务规划不仅仅是富人的事。每个人都可以通过了解基本税务概念和策略来合法地减少税务负担。

## 理解税率等级

一个常见的误解是，进入更高的税率等级意味着所有收入都按该税率征税。实际上，税收是累进的——只有每个等级内的收入才按该等级的税率征税。

## 主要减税策略

### 1. 最大化退休金缴款
每一元缴款都会减少您的应税收入。

### 2. 充分利用扣除项目
- 专项附加扣除（子女教育、继续教育、住房贷款利息、住房租金、赡养老人、大病医疗）
- 商业健康保险
- 公益捐赠

### 3. 合理规划收入时间
如果预计明年将处于较低的税率等级，可以延迟收入。

### 4. 利用税收优惠政策
- 个人养老金：每年最高12,000元，可抵扣个税
- 商业健康保险：每年最高2,400元
- 公益捐赠：应纳税所得额30%以内

## 年度税务规划清单

- [ ] 检查预扣税款是否合适
- [ ] 确认专项附加扣除信息是否完整
- [ ] 整理公益捐赠票据
- [ ] 确认个人养老金缴款
- [ ] 准备年度汇算清缴所需材料

## 常见税务错误

1. **未按时申报** - 滞纳金可能很高
2. **遗漏扣除项目** - 全年保留收据
3. **生活变化后未调整预扣税** - 结婚、生育、换工作时
4. **忽视税收优惠** - 充分利用个人养老金等

使用我们的[税务计算器](/zh/tax-calculator)估算您的税务负担并制定策略。`,
			es: `La planificación fiscal no es solo para los ricos. Todos pueden beneficiarse de comprender los conceptos básicos.

## Entender los tramos fiscales

Un error común es pensar que al pasar a un tramo fiscal más alto, todos sus ingresos se gravan a esa tasa. En realidad, los impuestos son marginales.

## Estrategias clave de reducción fiscal

### 1. Maximizar las contribuciones de jubilación
Cada dólar contribuido reduce su ingreso imponible.

### 2. Usar la deducción estándar sabiamente
Solo detalle si sus deducciones superan la deducción estándar.

### 3. Cosechar pérdidas fiscales
Venda inversiones con bajo rendimiento para compensar ganancias de capital.

### 4. Contribuir a cuentas con ventajas fiscales
Aproveche todas las cuentas disponibles con beneficios fiscales.

## Deducciones y créditos comunes

### Deducciones (reducen el ingreso imponible)
- Intereses hipotecarios
- Impuestos estatales y locales
- Contribuciones caritativas
- Intereses de préstamos estudiantiles

### Créditos (reducen directamente el impuesto)
- Crédito tributario por hijos
- Crédito por ingreso del trabajo
- Créditos educativos
- Créditos energéticos

## Errores fiscales comunes

1. **No presentar a tiempo** - Las penalidades pueden ser severas
2. **Perder deducciones** - Mantenga registros durante todo el año
3. **Ignorar impuestos estimados** - Los autónomos deben pagar trimestralmente
4. **No ajustar retenciones** - Después de matrimonio, bebé, nuevo trabajo

Use nuestra [Calculadora de Impuestos](/es/tax-calculator) para estimar su responsabilidad fiscal.`
		},
		date: '2025-03-15',
		category: 'finance'
	},
	{
		slug: 'date-calculation-tricks',
		title: {
			en: 'Date Calculation Tricks for Everyday Life',
			ko: '일상 생활에서 유용한 날짜 계산 트릭',
			ja: '日常生活で役立つ日付計算のコツ',
			zh: '日常生活中的日期计算技巧',
			es: 'Trucos de cálculo de fechas para la vida diaria'
		},
		description: {
			en: 'Master practical date calculations: from counting days between dates to finding deadlines, due dates, and planning events.',
			ko: '날짜 간 일수 계산부터 마감일, 기한 찾기, 이벤트 계획까지 실용적인 날짜 계산을 마스터하세요.',
			ja: '日付間の日数計算から締め切り、期限の算出、イベント計画まで、実用的な日付計算をマスターしましょう。',
			zh: '掌握实用的日期计算：从计算日期之间的天数到查找截止日期和规划活动。',
			es: 'Domine los cálculos de fechas prácticos: desde contar días hasta planificar eventos.'
		},
		content: {
			en: `Date calculations come up more often than you might think. From figuring out how many days until your vacation to calculating contract deadlines, knowing a few tricks can save you time and prevent costly mistakes.

## Common Date Calculation Scenarios

### Days between two dates
The most basic calculation. Simply subtract the earlier date from the later date. But watch out for:
- **Inclusive vs. exclusive counting**: Does "from Monday to Friday" mean 4 days or 5? Legal and business contexts often differ.
- **Calendar months vary**: February has 28-29 days; months range from 28 to 31 days.

### Adding business days
Business days exclude weekends and public holidays. A "5 business day" deadline starting on Wednesday typically means the following Wednesday, not Monday.

### Calculating weeks and months
- **Weeks**: Divide the number of days by 7
- **Calendar months**: Same date next month (Jan 15 + 1 month = Feb 15)
- **Edge cases**: Jan 31 + 1 month = Feb 28 (or 29 in leap years)

## Mental Math Tricks for Dates

### The Doomsday Algorithm (simplified)
To find the day of the week for any date:
1. Memorize that 4/4, 6/6, 8/8, 10/10, 12/12 all fall on the same day of the week each year (called "Doomsday")
2. Also: 7/11 and 11/7 share this day
3. For 2024, Doomsday is Thursday
4. Count forward or backward from the nearest anchor date

### Days in each month
The classic knuckle trick: Make fists with both hands. Starting from the left pinky knuckle, count months on knuckles (high = 31 days) and valleys (low = 30 days or fewer). July and August both have 31 because they share the "knuckle" at the transition between hands.

### Quick day-of-year calculation
Useful for project planning. Approximate any date's position in the year:
- Each month is roughly 30 days
- January 1 = Day 1, February 1 = Day 32, March 1 = Day 60
- Quick formula: (month - 1) x 30 + day (within ~3 days accuracy)

## Practical Applications

### Pregnancy due date
Naegele's Rule: Add 280 days (40 weeks) to the first day of the last menstrual period. Or add 7 days to the LMP date, then add 9 months.

### Lease and contract deadlines
- "30 days notice" means exactly 30 calendar days, not one month
- "Within 60 business days" can span 12 calendar weeks with holidays
- Always count carefully and mark deadlines on your calendar

### Travel planning
- How many nights between check-in and check-out?
- Business trip: How many working days at destination?
- Jet lag recovery: Roughly 1 day per hour of time zone difference

### Age calculations
- Legal age is typically calculated to the exact date
- In some East Asian cultures, a baby is "1 year old" at birth
- Korean age system: Current year - birth year + 1 (being phased out)

## Leap Year Rules

Not every 4th year is a leap year:
1. **Divisible by 4**: Leap year (2024, 2028)
2. **Divisible by 100**: NOT a leap year (1900, 2100)
3. **Divisible by 400**: IS a leap year (2000, 2400)

This is why the year 2000 was a leap year but 1900 was not.

## Date Calculation Pitfalls

1. **Time zones**: A deadline at "midnight" - which midnight? Specify the time zone.
2. **Daylight Saving Time**: The spring "forward" day is only 23 hours; the fall "back" day is 25 hours.
3. **International Date Line**: Flying east from Japan to the US, you may arrive "before" you left.
4. **Month-end dates**: "One month from January 30" is ambiguous - is it February 28 or March 1?

## Tools and Tips

- Use our [Date Calculator](/en/date-calculator) for accurate calculations
- Set phone reminders for important deadlines
- When in doubt, always use calendar days and specify explicitly
- For legal deadlines, consult the specific statute or contract language

Use our [Date Calculator](/en/date-calculator) to quickly find the number of days between any two dates or add/subtract days from a date.`,
			ko: `날짜 계산은 생각보다 자주 필요합니다. 휴가까지 며칠 남았는지 계산하는 것부터 계약 마감일 계산까지, 몇 가지 트릭을 알면 시간을 절약하고 비용이 많이 드는 실수를 방지할 수 있습니다.

## 일반적인 날짜 계산 시나리오

### 두 날짜 사이의 일수
가장 기본적인 계산입니다. 나중 날짜에서 이전 날짜를 빼면 됩니다. 하지만 주의할 점:
- **포함 vs. 제외 카운팅**: "월요일부터 금요일까지"는 4일인가요 5일인가요?
- **달력 월은 다양합니다**: 2월은 28-29일, 각 월은 28일에서 31일까지 다릅니다.

### 영업일 추가
영업일은 주말과 공휴일을 제외합니다. 수요일부터 시작하는 "5영업일" 기한은 보통 다음 주 수요일입니다.

## 날짜에 대한 암산 트릭

### 각 달의 일수
클래식 손가락 마디 트릭: 양손 주먹을 쥐세요. 왼쪽 새끼손가락 마디부터 시작하여 마디(높은 곳 = 31일)와 골(낮은 곳 = 30일 이하)로 달을 세세요.

### 빠른 연중 일수 계산
프로젝트 계획에 유용합니다:
- 각 달은 대략 30일
- 1월 1일 = 1일, 2월 1일 = 32일, 3월 1일 = 60일
- 빠른 공식: (월 - 1) x 30 + 일 (약 3일 오차 이내)

## 실용적인 응용

### 출산 예정일
네겔레 법칙: 마지막 생리 첫날에 280일(40주)을 더합니다.

### 임대 및 계약 마감일
- "30일 통지"는 정확히 30일력일을 의미합니다
- "60영업일 이내"는 공휴일 포함 시 12주 이상이 될 수 있습니다
- 항상 주의 깊게 세고 달력에 마감일을 표시하세요

### 여행 계획
- 체크인과 체크아웃 사이 몇 박?
- 출장: 목적지에서 근무일 며칠?
- 시차 적응: 시간대 차이 1시간당 약 1일

### 나이 계산
- 법적 나이는 보통 정확한 날짜까지 계산됩니다
- 한국식 나이: 현재 년도 - 출생 년도 + 1 (2023년부터 만 나이 통일)

## 윤년 규칙

4년마다가 모두 윤년은 아닙니다:
1. **4로 나누어지면**: 윤년 (2024, 2028)
2. **100으로 나누어지면**: 윤년이 아님 (1900, 2100)
3. **400으로 나누어지면**: 윤년 (2000, 2400)

## 날짜 계산 함정

1. **시간대**: "자정" 마감은 어느 자정인가요? 시간대를 명시하세요.
2. **일광 절약 시간**: 봄 "앞으로" 날은 23시간, 가을 "뒤로" 날은 25시간입니다.
3. **월말 날짜**: "1월 30일로부터 한 달"은 모호합니다 - 2월 28일? 3월 1일?

[날짜 계산기](/ko/date-calculator)를 사용하여 두 날짜 사이의 일수를 빠르게 찾거나 날짜에서 일수를 더하고 빼보세요.`,
			ja: `日付計算は思っている以上に頻繁に必要になります。休暇まであと何日かを計算することから契約の締め切り計算まで、いくつかのコツを知っていれば時間を節約し、コストのかかるミスを防ぐことができます。

## 一般的な日付計算シナリオ

### 2つの日付間の日数
最も基本的な計算です。後の日付から前の日付を引きます。注意点：
- **包含 vs. 排他カウント**: 「月曜日から金曜日まで」は4日ですか5日ですか？
- **月の日数は異なる**: 2月は28-29日、各月は28日から31日まで

### 営業日の追加
営業日は週末と祝日を除きます。水曜日から始まる「5営業日」の期限は、通常翌週の水曜日です。

## 日付の暗算トリック

### 各月の日数
古典的な指の関節トリック：両手で拳を作ります。左の小指の関節から始めて、関節（高い = 31日）と谷（低い = 30日以下）で月を数えます。

### 簡易年間日数計算
プロジェクト計画に便利：
- 各月は約30日
- 1月1日 = 1日目、2月1日 = 32日目、3月1日 = 60日目

## 実用的な応用

### 出産予定日
ネーゲレの法則：最終月経初日に280日（40週）を足します。

### リースと契約の締め切り
- 「30日前通知」は正確に30暦日を意味します
- 「60営業日以内」は祝日を含めると12暦週以上になることがあります

### 旅行計画
- チェックインとチェックアウトの間は何泊？
- 出張：目的地での勤務日数は？
- 時差ボケ回復：時差1時間あたり約1日

### 年齢計算
- 法的年齢は通常正確な日付まで計算されます
- 日本では「数え年」の伝統もあります

## うるう年のルール

4年ごとがすべてうるう年ではありません：
1. **4で割り切れる**: うるう年（2024、2028）
2. **100で割り切れる**: うるう年ではない（1900、2100）
3. **400で割り切れる**: うるう年（2000、2400）

[日付計算機](/ja/date-calculator)を使って、任意の2つの日付間の日数を素早く計算してください。`,
			zh: `日期计算比您想象的更频繁。从计算假期还有多少天到计算合同截止日期，掌握一些技巧可以节省时间并避免代价高昂的错误。

## 常见日期计算场景

### 两个日期之间的天数
最基本的计算。用较晚的日期减去较早的日期。但要注意：
- **包含vs排除计数**："从周一到周五"是4天还是5天？
- **日历月份不同**：二月有28-29天；各月从28到31天不等。

### 添加工作日
工作日不包括周末和公共假日。从周三开始的"5个工作日"期限通常是下周三。

## 日期心算技巧

### 每月天数
经典的手指关节技巧：握紧双拳。从左手小指关节开始，在关节（高处=31天）和凹处（低处=30天或更少）上计数月份。

### 快速年度天数计算
- 每月约30天
- 1月1日=第1天，2月1日=第32天，3月1日=第60天
- 快速公式：（月-1）x 30 + 日（误差约3天）

## 实际应用

### 预产期
Naegele法则：末次月经第一天加280天（40周）。

### 租赁和合同截止日期
- "30天通知"意味着确切的30个日历天
- "60个工作日内"可能跨越12个日历周

### 旅行规划
- 入住和退房之间有几个晚上？
- 出差：目的地有多少个工作日？
- 倒时差恢复：每小时时差约需1天

## 闰年规则

并非每4年都是闰年：
1. **能被4整除**：闰年（2024、2028）
2. **能被100整除**：不是闰年（1900、2100）
3. **能被400整除**：是闰年（2000、2400）

使用我们的[日期计算器](/zh/date-calculator)快速计算任意两个日期之间的天数。`,
			es: `Los cálculos de fechas surgen más a menudo de lo que piensa. Desde calcular cuántos días faltan para sus vacaciones hasta determinar plazos de contratos.

## Escenarios comunes de cálculo de fechas

### Días entre dos fechas
El cálculo más básico. Simplemente reste la fecha anterior de la posterior. Pero cuidado con:
- **Conteo inclusivo vs. exclusivo**: ¿"De lunes a viernes" son 4 o 5 días?
- **Los meses varían**: Febrero tiene 28-29 días; los meses van de 28 a 31 días.

### Agregar días hábiles
Los días hábiles excluyen fines de semana y festivos.

## Trucos de cálculo mental

### Días en cada mes
El truco clásico de los nudillos: Haga puños con ambas manos. Cuente meses en los nudillos (alto = 31 días) y valles (bajo = 30 días o menos).

## Aplicaciones prácticas

### Fecha de parto
Regla de Naegele: Agregue 280 días a la última menstruación.

### Plazos de arrendamiento y contratos
- "Aviso de 30 días" significa exactamente 30 días calendario
- "Dentro de 60 días hábiles" puede abarcar 12 semanas calendario

### Planificación de viajes
- ¿Cuántas noches entre check-in y check-out?
- Recuperación de jet lag: aproximadamente 1 día por hora de diferencia horaria

## Reglas del año bisiesto

1. **Divisible por 4**: Año bisiesto (2024, 2028)
2. **Divisible por 100**: NO es bisiesto (1900, 2100)
3. **Divisible por 400**: SÍ es bisiesto (2000, 2400)

Use nuestra [Calculadora de Fechas](/es/date-calculator) para calcular rápidamente los días entre dos fechas.`
		},
		date: '2025-02-01',
		category: 'productivity'
	},
	{
		slug: 'understanding-percentages-everyday-life',
		title: {
			en: 'Understanding Percentages in Everyday Life',
			ko: '일상 생활에서 퍼센트 이해하기',
			ja: '日常生活でのパーセンテージの理解',
			zh: '理解日常生活中的百分比',
			es: 'Comprender los porcentajes en la vida diaria'
		},
		description: {
			en: 'From shopping discounts to statistics in the news, percentages are everywhere. Learn to calculate and interpret them correctly.',
			ko: '쇼핑 할인부터 뉴스 통계까지, 퍼센트는 어디에나 있습니다. 정확하게 계산하고 해석하는 방법을 배워보세요.',
			ja: 'ショッピングの割引からニュースの統計まで、パーセンテージはどこにでもあります。正しく計算し解釈する方法を学びましょう。',
			zh: '从购物折扣到新闻统计，百分比无处不在。学习正确计算和解读它们。',
			es: 'Desde descuentos hasta estadísticas, los porcentajes están en todas partes. Aprenda a calcularlos correctamente.'
		},
		content: {
			en: `Percentages are one of the most practical math concepts you use daily, yet many people struggle with them. Whether you are calculating a sale discount, understanding a news statistic, or figuring out a tip, mastering percentages makes life easier.

## The Basics: What Is a Percentage?

A percentage is simply a fraction of 100. The word "percent" literally means "per hundred."

- 50% = 50/100 = 0.5 = one half
- 25% = 25/100 = 0.25 = one quarter
- 10% = 10/100 = 0.10 = one tenth

## Three Essential Percentage Calculations

### 1. Finding a percentage of a number
**Question**: What is 15% of $80?
**Formula**: Number x (Percentage / 100)
**Solution**: $80 x 0.15 = $12

### 2. Finding what percentage one number is of another
**Question**: 24 is what percent of 60?
**Formula**: (Part / Whole) x 100
**Solution**: (24 / 60) x 100 = 40%

### 3. Finding the original number from a percentage
**Question**: 30 is 20% of what number?
**Formula**: Part / (Percentage / 100)
**Solution**: 30 / 0.20 = 150

## Mental Math Shortcuts for Percentages

### The 10% anchor method
Calculate 10% first (just move the decimal point left), then adjust:
- **10%** of $85 = $8.50
- **5%** = half of 10% = $4.25
- **15%** = 10% + 5% = $12.75
- **20%** = 10% x 2 = $17.00
- **25%** = 10% x 2 + 5% = $21.25

### The flip trick
X% of Y = Y% of X. So 8% of 50 = 50% of 8 = 4. Much easier to calculate!

### Round and adjust
To find 18% of $52: Round to 20% of $50 = $10, then adjust slightly downward (actual: $9.36).

## Real-World Percentage Scenarios

### Shopping discounts
A $120 jacket is 30% off:
- Discount: $120 x 0.30 = $36
- Sale price: $120 - $36 = $84
- Or directly: $120 x 0.70 = $84

**Stacked discounts are tricky**: 20% off then 10% off is NOT 30% off.
- $100 x 0.80 = $80 (after 20% off)
- $80 x 0.90 = $72 (after additional 10% off)
- Effective discount: 28%, not 30%

### Salary raises
A 5% raise on $60,000:
- New salary: $60,000 x 1.05 = $63,000
- Increase: $3,000

A common mistake: If you get a 10% cut then a 10% raise, you are NOT back to where you started.
- $60,000 x 0.90 = $54,000 (after 10% cut)
- $54,000 x 1.10 = $59,400 (after 10% raise)
- You are still down $600!

### Statistics and data interpretation
"Crime dropped 50% from 20 incidents to 10" sounds dramatic, but the absolute numbers are small.

Conversely, "prices rose 200%" means they tripled. A $5 item at 200% increase = $5 + ($5 x 2) = $15.

### Compound percentage changes
Inflation of 3% per year for 10 years is not 30% total:
- (1.03)^10 = 1.3439
- Actual total increase: 34.39%

## Percentage vs. Percentage Points

This distinction is crucial in news and finance:
- Interest rate goes from 3% to 5% = increase of **2 percentage points** or a **66.7% increase**
- "Unemployment dropped 2 percentage points" (from 6% to 4%) is different from "unemployment dropped 2%" (from 6% to 5.88%)

## Common Percentage Mistakes

1. **Confusing percentage change with percentage points**
2. **Assuming discounts are additive** (20% + 10% is not 30%)
3. **Forgetting the base matters** (10% of 1,000 vs 10% of 100)
4. **Ignoring compound effects** over multiple periods
5. **Treating percentages as absolute numbers** without context

Use our [Percentage Calculator](/en/percentage) to quickly calculate any percentage problem you encounter.`,
			ko: `퍼센트는 매일 사용하는 가장 실용적인 수학 개념 중 하나이지만, 많은 사람들이 어려워합니다. 할인 계산, 뉴스 통계 이해, 팁 계산 등 퍼센트를 마스터하면 생활이 쉬워집니다.

## 기본: 퍼센트란?

퍼센트는 단순히 100분의 1입니다. "퍼센트"는 문자 그대로 "100당"을 의미합니다.

- 50% = 50/100 = 0.5 = 절반
- 25% = 25/100 = 0.25 = 4분의 1
- 10% = 10/100 = 0.10 = 10분의 1

## 세 가지 필수 퍼센트 계산

### 1. 숫자의 퍼센트 구하기
**질문**: 8만원의 15%는?
**공식**: 숫자 x (퍼센트 / 100)
**답**: 80,000 x 0.15 = 12,000원

### 2. 한 숫자가 다른 숫자의 몇 퍼센트인지 구하기
**질문**: 24는 60의 몇 퍼센트?
**공식**: (부분 / 전체) x 100
**답**: (24 / 60) x 100 = 40%

### 3. 퍼센트에서 원래 숫자 구하기
**질문**: 30이 어떤 숫자의 20%라면?
**공식**: 부분 / (퍼센트 / 100)
**답**: 30 / 0.20 = 150

## 퍼센트 암산 단축키

### 10% 기준점 방법
10%를 먼저 계산하세요(소수점을 왼쪽으로 이동):
- 85,000원의 **10%** = 8,500원
- **5%** = 10%의 절반 = 4,250원
- **15%** = 10% + 5% = 12,750원
- **20%** = 10% x 2 = 17,000원

### 뒤집기 트릭
X%의 Y = Y%의 X. 50의 8% = 8의 50% = 4. 계산이 훨씬 쉽습니다!

## 실생활 퍼센트 시나리오

### 쇼핑 할인
12만원 재킷이 30% 할인:
- 할인: 120,000 x 0.30 = 36,000원
- 판매가: 120,000 - 36,000 = 84,000원

**중복 할인은 복잡합니다**: 20% 할인 후 10% 추가 할인은 30%가 아닙니다.
- 100,000 x 0.80 = 80,000원 (20% 할인 후)
- 80,000 x 0.90 = 72,000원 (추가 10% 할인 후)
- 실제 할인: 28%, 30%가 아닙니다

### 연봉 인상
6,000만원에 5% 인상:
- 새 연봉: 6,000만원 x 1.05 = 6,300만원

### 퍼센트 vs. 퍼센트포인트
이 구별은 뉴스에서 매우 중요합니다:
- 금리가 3%에서 5%로 = **2퍼센트포인트** 또는 **66.7% 증가**

## 흔한 퍼센트 실수

1. **퍼센트 변화와 퍼센트포인트 혼동**
2. **할인이 더해진다고 가정** (20% + 10%는 30%가 아님)
3. **기준이 중요하다는 것을 잊기** (1,000의 10% vs 100의 10%)
4. **복리 효과 무시**
5. **맥락 없이 퍼센트를 절대 숫자로 취급**

[퍼센트 계산기](/ko/percentage)를 사용하여 퍼센트 문제를 빠르게 계산하세요.`,
			ja: `パーセンテージは日常的に使う最も実用的な数学概念の一つですが、多くの人が苦手としています。

## 基本：パーセンテージとは？

パーセンテージは単に100分のいくつかです。

- 50% = 50/100 = 0.5 = 半分
- 25% = 25/100 = 0.25 = 4分の1
- 10% = 10/100 = 0.10 = 10分の1

## 3つの必須パーセンテージ計算

### 1. 数のパーセンテージを求める
**問題**: 8,000円の15%は？
**公式**: 数 x (パーセンテージ / 100)
**答え**: 8,000 x 0.15 = 1,200円

### 2. ある数が別の数の何パーセントかを求める
**問題**: 24は60の何パーセント？
**答え**: (24 / 60) x 100 = 40%

### 3. パーセンテージから元の数を求める
**問題**: 30がある数の20%なら？
**答え**: 30 / 0.20 = 150

## 暗算のショートカット

### 10%アンカー法
まず10%を計算（小数点を左に移動）：
- 8,500円の **10%** = 850円
- **5%** = 10%の半分 = 425円
- **15%** = 10% + 5% = 1,275円
- **20%** = 10% x 2 = 1,700円

### フリップトリック
XのY% = YのX%。50の8% = 8の50% = 4。はるかに簡単です！

## 実生活のパーセンテージシナリオ

### ショッピングの割引
12,000円のジャケットが30%オフ：
- 割引: 12,000 x 0.30 = 3,600円
- セール価格: 12,000 - 3,600 = 8,400円

**重複割引は注意**: 20%オフの後10%オフは30%オフではありません。
- 10,000 x 0.80 = 8,000円（20%オフ後）
- 8,000 x 0.90 = 7,200円（追加10%オフ後）
- 実効割引: 28%

### パーセント vs. パーセントポイント
この区別はニュースで非常に重要です：
- 金利が3%から5%に = **2パーセントポイント**増加 または **66.7%増加**

## よくあるパーセンテージの間違い

1. **パーセント変化とパーセントポイントの混同**
2. **割引が加算されると仮定**
3. **基準が重要であることを忘れる**
4. **複利効果の無視**

[パーセンテージ計算機](/ja/percentage)を使って素早く計算してください。`,
			zh: `百分比是您日常使用的最实用的数学概念之一，但很多人对它们感到困难。

## 基础：什么是百分比？

百分比就是百分之几。

- 50% = 50/100 = 0.5 = 一半
- 25% = 25/100 = 0.25 = 四分之一
- 10% = 10/100 = 0.10 = 十分之一

## 三种基本百分比计算

### 1. 求一个数的百分比
**问题**：80元的15%是多少？
**公式**：数 x（百分比 / 100）
**答案**：80 x 0.15 = 12元

### 2. 求一个数是另一个数的百分之几
**问题**：24是60的百分之几？
**答案**：(24 / 60) x 100 = 40%

### 3. 从百分比求原数
**问题**：30是某个数的20%，求原数
**答案**：30 / 0.20 = 150

## 心算快捷方式

### 10%锚点法
先算10%（小数点左移一位）：
- 85元的**10%** = 8.5元
- **5%** = 10%的一半 = 4.25元
- **15%** = 10% + 5% = 12.75元
- **20%** = 10% x 2 = 17元

### 翻转技巧
X的Y% = Y的X%。50的8% = 8的50% = 4。容易多了！

## 现实生活中的百分比场景

### 购物折扣
120元的夹克打7折（30%折扣）：
- 折扣：120 x 0.30 = 36元
- 售价：120 - 36 = 84元

**叠加折扣要注意**：先打8折再打9折不等于打7折。
- 100 x 0.80 = 80元
- 80 x 0.90 = 72元
- 实际折扣：28%，不是30%

### 百分比 vs. 百分点
- 利率从3%升到5% = 增加了**2个百分点**或**66.7%的增长**

## 常见百分比错误

1. **混淆百分比变化和百分点**
2. **假设折扣是累加的**
3. **忘记基数很重要**
4. **忽视复合效应**

使用我们的[百分比计算器](/zh/percentage)快速计算百分比问题。`,
			es: `Los porcentajes son uno de los conceptos matemáticos más prácticos que usa diariamente.

## Lo básico: ¿Qué es un porcentaje?

Un porcentaje es simplemente una fracción de 100.

## Tres cálculos esenciales de porcentaje

### 1. Encontrar el porcentaje de un número
**Pregunta**: ¿Cuánto es el 15% de $80?
**Fórmula**: Número x (Porcentaje / 100)
**Solución**: $80 x 0.15 = $12

### 2. Encontrar qué porcentaje es un número de otro
**Solución**: (24 / 60) x 100 = 40%

### 3. Encontrar el número original
**Solución**: 30 / 0.20 = 150

## Atajos de cálculo mental

### Método del ancla del 10%
Calcule el 10% primero (mueva el punto decimal a la izquierda):
- **10%** de $85 = $8.50
- **5%** = mitad del 10% = $4.25
- **15%** = 10% + 5% = $12.75

### Truco del volteo
X% de Y = Y% de X. Así que 8% de 50 = 50% de 8 = 4.

## Escenarios del mundo real

### Descuentos
Una chaqueta de $120 con 30% de descuento = $84

**Los descuentos apilados son engañosos**: 20% + 10% NO es 30%.

### Porcentaje vs. puntos porcentuales
La tasa sube de 3% a 5% = aumento de **2 puntos porcentuales** o **66.7% de aumento**

Use nuestra [Calculadora de Porcentajes](/es/percentage) para resolver cualquier problema de porcentajes rápidamente.`
		},
		date: '2025-02-10',
		category: 'education'
	},
	{
		slug: 'budgeting-with-calculators',
		title: {
			en: 'Budgeting with Calculators: A Practical Guide',
			ko: '계산기를 활용한 예산 관리: 실용 가이드',
			ja: '計算機を使った予算管理：実践ガイド',
			zh: '使用计算器进行预算管理：实用指南',
			es: 'Presupuesto con calculadoras: una guía práctica'
		},
		description: {
			en: 'Learn how to use online calculators effectively for budgeting, from the 50/30/20 rule to zero-based budgeting methods.',
			ko: '50/30/20 규칙부터 제로 베이스 예산까지, 온라인 계산기를 효과적으로 활용한 예산 관리 방법을 배워보세요.',
			ja: '50/30/20ルールからゼロベース予算まで、オンライン計算機を効果的に使った予算管理方法を学びましょう。',
			zh: '从50/30/20法则到零基预算，学习如何有效使用在线计算器进行预算管理。',
			es: 'Aprenda a usar calculadoras en línea para presupuestar, desde la regla 50/30/20 hasta presupuesto base cero.'
		},
		content: {
			en: `A budget is the most powerful tool for financial health, and modern online calculators make budgeting easier than ever. Here is how to combine proven budgeting methods with calculator tools.

## Why Budgeting Matters

Without a budget, money has a way of disappearing. Studies show that people who budget:
- Save 20% more than those who do not
- Pay off debt faster
- Feel less financial stress
- Reach financial goals more consistently

## The 50/30/20 Rule

The simplest budgeting framework, popularized by Senator Elizabeth Warren:

### 50% - Needs
Essential expenses you cannot avoid:
- Housing (rent/mortgage)
- Utilities
- Groceries
- Insurance
- Minimum debt payments
- Transportation

### 30% - Wants
Non-essential spending that improves quality of life:
- Dining out
- Entertainment
- Shopping
- Hobbies
- Subscriptions

### 20% - Savings & Debt Repayment
Building your financial future:
- Emergency fund
- Retirement contributions
- Extra debt payments
- Investments

**Example with $5,000 monthly take-home pay:**

| Category | Percentage | Amount |
|----------|-----------|--------|
| Needs | 50% | $2,500 |
| Wants | 30% | $1,500 |
| Savings | 20% | $1,000 |

## Zero-Based Budgeting

Every dollar gets assigned a job. Income minus expenses equals exactly zero.

**Steps:**
1. List your total monthly income
2. List every expense category
3. Assign specific amounts to each category
4. Adjust until income minus all categories equals zero
5. Track actual spending against your plan

This method is more work but gives you maximum control.

## Using Calculators for Budgeting

### Income calculation
Use a salary calculator to determine your actual take-home pay after taxes and deductions. This is your starting point for any budget.

### Debt payoff planning
A loan calculator helps you:
- See total interest costs
- Compare different payoff strategies
- Determine how extra payments reduce your timeline

### Savings projections
A compound interest calculator shows how your savings grow over time. Seeing the future value of consistent saving is incredibly motivating.

### Cost comparisons
A percentage calculator helps compare:
- Which discount is actually better
- What percentage of income each expense represents
- Year-over-year spending changes

## Monthly Budget Template

Use this framework and plug in your numbers:

| Category | Budgeted | Actual | Difference |
|----------|----------|--------|------------|
| **Income** | | | |
| Salary | $X | $X | $0 |
| Side income | $X | $X | $0 |
| **Needs (50%)** | | | |
| Housing | $X | | |
| Utilities | $X | | |
| Groceries | $X | | |
| Transport | $X | | |
| Insurance | $X | | |
| **Wants (30%)** | | | |
| Dining out | $X | | |
| Entertainment | $X | | |
| Shopping | $X | | |
| **Savings (20%)** | | | |
| Emergency fund | $X | | |
| Retirement | $X | | |
| Investments | $X | | |

## Five Common Budgeting Mistakes

### 1. Not tracking small expenses
A $5 daily coffee is $1,825 per year. Track everything.

### 2. Forgetting irregular expenses
Car insurance (semi-annual), holidays, birthdays. Divide annual costs by 12 and budget monthly.

### 3. Being too restrictive
A budget that allows zero fun spending will not last. Build in reasonable wants.

### 4. Not adjusting for life changes
Review and update your budget when income, expenses, or goals change.

### 5. Giving up after one bad month
A budget is a guideline, not a prison. Learn from overspending and adjust.

## Getting Started Today

1. Calculate your actual take-home pay using our [Salary Calculator](/en/salary-calculator)
2. List your fixed monthly expenses
3. Track variable spending for one month
4. Apply the 50/30/20 rule as a starting framework
5. Adjust percentages to fit your situation
6. Review weekly and adjust monthly

The best budget is the one you actually follow. Start simple and refine over time.`,
			ko: `예산은 재정 건강을 위한 가장 강력한 도구이며, 현대 온라인 계산기는 예산 관리를 그 어느 때보다 쉽게 만들어줍니다.

## 예산 관리가 중요한 이유

예산 없이는 돈이 어디로 사라지는지 모릅니다. 연구에 따르면 예산을 세우는 사람들은:
- 그렇지 않은 사람보다 20% 더 저축합니다
- 빚을 더 빨리 갚습니다
- 재정 스트레스를 덜 느낍니다
- 재정 목표를 더 일관되게 달성합니다

## 50/30/20 규칙

가장 간단한 예산 프레임워크:

### 50% - 필요
피할 수 없는 필수 지출:
- 주거 (월세/대출)
- 공과금
- 식료품
- 보험
- 최소 부채 상환
- 교통

### 30% - 원하는 것
삶의 질을 높이는 비필수 지출:
- 외식
- 엔터테인먼트
- 쇼핑
- 취미
- 구독 서비스

### 20% - 저축 및 부채 상환
재정적 미래 구축:
- 비상 자금
- 퇴직 기여금
- 추가 부채 상환
- 투자

**월 실수령액 400만원 예시:**

| 카테고리 | 비율 | 금액 |
|---------|------|------|
| 필요 | 50% | 200만원 |
| 원하는 것 | 30% | 120만원 |
| 저축 | 20% | 80만원 |

## 제로 베이스 예산

모든 원에 역할을 부여합니다. 수입에서 지출을 빼면 정확히 0이 됩니다.

**단계:**
1. 총 월 수입을 나열합니다
2. 모든 지출 카테고리를 나열합니다
3. 각 카테고리에 구체적인 금액을 배정합니다
4. 수입에서 모든 카테고리를 뺀 값이 0이 될 때까지 조정합니다
5. 실제 지출을 계획과 비교하여 추적합니다

## 예산 관리에 계산기 활용하기

### 소득 계산
급여 계산기를 사용하여 세금과 공제 후 실제 실수령액을 확인하세요.

### 부채 상환 계획
대출 계산기로 총 이자 비용 확인, 다양한 상환 전략 비교, 추가 상환이 기간을 얼마나 줄이는지 확인할 수 있습니다.

### 저축 예측
복리 계산기로 시간에 따른 저축 증가를 확인하세요.

## 5가지 흔한 예산 실수

### 1. 작은 지출을 추적하지 않기
하루 5,000원 커피는 연간 182만 5,000원입니다.

### 2. 불규칙 지출 잊기
자동차 보험(반기), 명절, 생일 등. 연간 비용을 12로 나눠 매월 예산에 반영하세요.

### 3. 너무 엄격하게 하기
재미있는 지출이 전혀 없는 예산은 오래가지 못합니다.

### 4. 생활 변화에 맞게 조정하지 않기
수입, 지출, 목표가 변할 때 예산을 검토하고 업데이트하세요.

### 5. 한 달 실패 후 포기하기
예산은 가이드라인이지 감옥이 아닙니다.

## 오늘 시작하기

1. [급여 계산기](/ko/salary-calculator)로 실제 실수령액 계산
2. 고정 월 지출 나열
3. 한 달간 변동 지출 추적
4. 50/30/20 규칙을 시작 프레임워크로 적용
5. 상황에 맞게 비율 조정
6. 매주 검토, 매월 조정`,
			ja: `予算は財務健全性のための最も強力なツールであり、現代のオンライン計算機は予算管理をかつてないほど簡単にします。

## 予算管理が重要な理由

予算なしでは、お金はいつの間にか消えていきます。研究によると、予算を立てている人は：
- そうでない人より20%多く貯蓄している
- 借金をより早く返済している
- 財務的ストレスが少ない
- 財務目標をより一貫して達成している

## 50/30/20ルール

最もシンプルな予算フレームワーク：

### 50% - 必要なもの
- 住居費
- 光熱費
- 食料品
- 保険
- 交通費

### 30% - 欲しいもの
- 外食
- エンターテイメント
- ショッピング
- 趣味

### 20% - 貯蓄・借金返済
- 緊急資金
- 退職金積立
- 投資

**手取り月収30万円の例：**

| カテゴリー | 割合 | 金額 |
|----------|------|------|
| 必要 | 50% | 15万円 |
| 欲しい | 30% | 9万円 |
| 貯蓄 | 20% | 6万円 |

## ゼロベース予算

すべての円に役割を与えます。収入から支出を引いて正確にゼロにします。

## 予算管理に計算機を活用

### 収入計算
給与計算機で税金や控除後の実際の手取りを確認しましょう。

### 借金返済計画
ローン計算機で総利息コストの確認、返済戦略の比較ができます。

### 貯蓄予測
複利計算機で時間の経過による貯蓄の成長を確認しましょう。

## 5つのよくある予算の間違い

1. **小さな出費を追跡しない** - 毎日500円のコーヒーは年間18万2,500円
2. **不定期な出費を忘れる** - 年間コストを12で割って毎月予算に組み込む
3. **厳しすぎる** - 楽しみゼロの予算は続きません
4. **生活の変化に合わせて調整しない**
5. **1か月の失敗で諦める**

[給与計算機](/ja/salary-calculator)で実際の手取りを計算することから始めましょう。`,
			zh: `预算是财务健康最有力的工具，现代在线计算器让预算管理比以往更容易。

## 为什么预算很重要

没有预算，钱不知不觉就消失了。研究表明，做预算的人：
- 比不做的人多存20%
- 更快还清债务
- 财务压力更小
- 更稳定地达到财务目标

## 50/30/20法则

最简单的预算框架：

### 50% - 需要
不可避免的基本支出：住房、水电、食品、保险、交通

### 30% - 想要
提升生活质量的非必需支出：外出就餐、娱乐、购物、爱好

### 20% - 储蓄和还债
建设财务未来：应急基金、退休金、投资

**月净收入10,000元示例：**

| 类别 | 比例 | 金额 |
|-----|------|------|
| 需要 | 50% | 5,000元 |
| 想要 | 30% | 3,000元 |
| 储蓄 | 20% | 2,000元 |

## 零基预算

每一分钱都有用途。收入减去支出正好等于零。

## 使用计算器进行预算管理

### 收入计算
使用薪资计算器确定税后实际到手收入。

### 债务偿还规划
贷款计算器帮助您查看总利息成本、比较不同的偿还策略。

### 储蓄预测
复利计算器显示您的储蓄随时间增长的情况。

## 五个常见预算错误

1. **不追踪小额支出** - 每天10元的咖啡一年就是3,650元
2. **忘记不定期支出** - 将年度费用除以12，每月预算
3. **太过严格** - 完全没有娱乐的预算不会持久
4. **不根据生活变化调整**
5. **一个月失败就放弃**

使用[薪资计算器](/zh/salary-calculator)计算实际到手收入，开始您的预算之旅。`,
			es: `Un presupuesto es la herramienta más poderosa para la salud financiera, y las calculadoras en línea lo hacen más fácil que nunca.

## La regla 50/30/20

### 50% - Necesidades
Gastos esenciales: vivienda, servicios, alimentos, seguros, transporte

### 30% - Deseos
Gastos no esenciales: salir a comer, entretenimiento, compras, pasatiempos

### 20% - Ahorro y pago de deudas
Construir su futuro: fondo de emergencia, jubilación, inversiones

## Presupuesto base cero

Cada dólar tiene un trabajo asignado. Ingresos menos gastos igual a exactamente cero.

## Uso de calculadoras para presupuestar

### Cálculo de ingresos
Use una calculadora salarial para determinar su ingreso neto real.

### Planificación de pago de deudas
Una calculadora de préstamos le ayuda a ver los costos totales y comparar estrategias.

### Proyecciones de ahorro
Una calculadora de interés compuesto muestra cómo crecen sus ahorros con el tiempo.

## Cinco errores comunes

1. **No rastrear gastos pequeños** - Un café de $5 diario = $1,825 al año
2. **Olvidar gastos irregulares** - Divida costos anuales entre 12
3. **Ser demasiado restrictivo** - Un presupuesto sin diversión no durará
4. **No ajustar ante cambios** - Revise cuando cambien ingresos o gastos
5. **Rendirse después de un mal mes** - Es una guía, no una prisión

Use nuestra [Calculadora de Salario](/es/salary-calculator) para calcular su ingreso neto real.`
		},
		date: '2025-01-25',
		category: 'finance'
	},
	{
		slug: 'tip-calculator-guide',
		title: {
			en: 'How to Use the Tip Calculator Wisely',
			ko: '팁 계산기를 현명하게 사용하는 방법',
			ja: 'チップ計算機を賢く使う方法',
			zh: '如何明智地使用小费计算器',
			es: 'Cómo usar la calculadora de propinas sabiamente'
		},
		description: {
			en: 'Navigate tipping etiquette worldwide, learn how to calculate tips quickly, and understand when and how much to tip.',
			ko: '전 세계 팁 에티켓을 탐색하고, 팁을 빠르게 계산하는 방법과 언제 얼마를 줘야 하는지 알아보세요.',
			ja: '世界中のチップのエチケットを理解し、チップを素早く計算する方法と適切な金額を学びましょう。',
			zh: '了解全球小费礼仪，学习如何快速计算小费，以及何时给多少小费。',
			es: 'Navegue la etiqueta de propinas mundial, aprenda a calcular propinas rápidamente.'
		},
		content: {
			en: `Tipping customs vary wildly around the world. What is generous in one country might be insulting in another. Here is your comprehensive guide to tipping, including mental math tricks for quick calculations.

## Tipping by Country

### United States & Canada
Tipping is essentially mandatory for table service:
- **Restaurants**: 15-20% (pre-tax)
- **Bars**: $1-2 per drink or 15-20% of tab
- **Hair salons**: 15-20%
- **Taxi/rideshare**: 15-20%
- **Hotel housekeeping**: $2-5 per night
- **Food delivery**: 15-20% or minimum $3-5

### Europe
Tips are appreciated but not expected at the same level:
- **UK**: 10-15% at restaurants (check if service charge is included)
- **France**: Service included (service compris), round up for good service
- **Germany**: Round up to nearest euro or add 5-10%
- **Italy**: Cover charge (coperto) is common; small tip optional
- **Spain**: Round up or leave small change

### Asia
- **Japan**: Do NOT tip. It can be considered rude.
- **South Korea**: Tipping is not customary
- **China**: Not expected, though some tourist areas accept tips
- **Thailand**: 20-50 baht at restaurants, round up for taxis
- **India**: 10% at restaurants

### Middle East & Africa
- **UAE/Dubai**: 10-15% (check for service charge)
- **Egypt**: 10-15% (baksheesh culture)
- **South Africa**: 10-15% at restaurants

## Quick Mental Math for Tips

### The 10% method (works anywhere)
1. Find 10%: move the decimal point one place left
2. For 15%: add half of 10% to the 10%
3. For 20%: double the 10%

**Example on a $67 bill:**
- 10% = $6.70
- 15% = $6.70 + $3.35 = $10.05
- 20% = $6.70 x 2 = $13.40

### The double-the-tax method (US)
In many US states, sales tax is around 8%. Double it for a 16% tip - close enough to 15-20%.

### Rounding for simplicity
On a $43 bill:
- 10% = $4.30
- Round to $4.50 for easy math
- 20% = $9 (double $4.50)
- Want 15%? Split the difference: about $6.75

## Splitting the Bill with Tips

When dining with a group:

### Equal split
Total bill + tip, divided by number of people.
- Bill: $200, Tip: 20% = $40
- Total: $240 / 6 people = $40 each

### Proportional split
Each person tips on what they ordered:
- Person A ordered $35 food, tips 20% = $7, total = $42
- Person B ordered $65 food, tips 20% = $13, total = $78

### Common issues with group tips
- Always tip on the FULL amount, including your share
- Avoid the "I only had a salad" trap - cover your fair share of shared items
- Designate one person to calculate to avoid under-tipping

## When to Tip More or Less

### Tip more (20%+) when:
- Service was exceptional
- You have a large group (extra work for the server)
- You stayed an unusually long time
- There were special requests or dietary accommodations
- It is a holiday

### Acceptable to tip less (10-15%) when:
- Service was notably poor (but still tip something)
- It is counter service or takeout

### Never acceptable to skip tipping entirely (in tipping cultures):
- If you received table service, tip
- If you cannot afford to tip, you cannot afford to eat out

## Pre-Tax vs. Post-Tax Tipping

In the US, the proper etiquette is to tip on the pre-tax amount:
- Bill: $50 food + $4.50 tax = $54.50
- 20% tip on pre-tax: $50 x 0.20 = $10
- 20% tip on post-tax: $54.50 x 0.20 = $10.90

The difference is small, but on large bills it adds up. Either is acceptable.

Use our [Tip Calculator](/en/tip-calculator) to quickly calculate the right tip amount and split bills among your dining group.`,
			ko: `팁 문화는 전 세계적으로 매우 다양합니다. 한 나라에서 관대한 것이 다른 나라에서는 무례할 수 있습니다. 빠른 계산을 위한 암산 트릭을 포함한 팁에 대한 종합 가이드입니다.

## 국가별 팁 문화

### 미국 & 캐나다
테이블 서비스에서 팁은 사실상 필수입니다:
- **레스토랑**: 15-20% (세전)
- **바**: 음료당 $1-2 또는 탭의 15-20%
- **미용실**: 15-20%
- **택시/라이드쉐어**: 15-20%
- **호텔 하우스키핑**: 1박당 $2-5
- **음식 배달**: 15-20% 또는 최소 $3-5

### 유럽
팁은 감사하지만 같은 수준으로 기대되지 않습니다:
- **영국**: 레스토랑에서 10-15%
- **프랑스**: 서비스 포함, 좋은 서비스에 올림
- **독일**: 가장 가까운 유로로 올림 또는 5-10%
- **이탈리아**: 자릿세(coperto)가 일반적; 작은 팁은 선택

### 아시아
- **일본**: 팁을 주지 마세요. 무례하게 여겨질 수 있습니다.
- **한국**: 팁 문화가 없습니다
- **중국**: 기대되지 않음
- **태국**: 레스토랑에서 20-50바트

## 빠른 암산 팁 계산

### 10% 방법
1. 10% 찾기: 소수점을 왼쪽으로 한 자리 이동
2. 15%: 10%의 절반을 10%에 더하기
3. 20%: 10%를 두 배로

**67달러 계산서 예시:**
- 10% = $6.70
- 15% = $6.70 + $3.35 = $10.05
- 20% = $6.70 x 2 = $13.40

## 팁 포함 계산서 나누기

### 균등 분할
총 계산서 + 팁, 인원수로 나누기
- 계산서: $200, 팁: 20% = $40
- 합계: $240 / 6명 = 1인당 $40

### 비례 분할
각자 주문한 것에 대해 팁:
- A가 $35 주문, 20% 팁 = $7, 합계 = $42
- B가 $65 주문, 20% 팁 = $13, 합계 = $78

## 더 많이/적게 팁을 줄 때

### 더 많이 (20%+):
- 서비스가 탁월했을 때
- 대규모 그룹일 때
- 비정상적으로 오래 머물렀을 때
- 특별 요청이나 식이 요구 사항이 있었을 때

### 적게 (10-15%):
- 서비스가 눈에 띄게 나빴을 때 (하지만 여전히 팁은 주세요)

[팁 계산기](/ko/tip-calculator)를 사용하여 적절한 팁 금액을 빠르게 계산하고 식사 그룹 간에 계산서를 나누세요.`,
			ja: `チップの習慣は世界中で大きく異なります。ある国で寛大なことが別の国では失礼になることもあります。

## 国別チップ事情

### アメリカ & カナダ
テーブルサービスではチップは事実上必須：
- **レストラン**: 15-20%（税抜き）
- **バー**: 1ドリンク$1-2 または15-20%
- **美容室**: 15-20%
- **タクシー**: 15-20%
- **ホテル客室清掃**: 1泊$2-5

### ヨーロッパ
- **イギリス**: レストランで10-15%
- **フランス**: サービス料込み、良いサービスには切り上げ
- **ドイツ**: 最も近いユーロに切り上げまたは5-10%

### アジア
- **日本**: チップは不要。失礼とみなされることがあります
- **韓国**: チップの習慣なし
- **中国**: 基本的に不要
- **タイ**: レストランで20-50バーツ

## チップの暗算方法

### 10%法
1. 10%を求める：小数点を左に1つ移動
2. 15%：10%の半分を10%に足す
3. 20%：10%を2倍にする

**67ドルの請求書の例：**
- 10% = $6.70
- 15% = $6.70 + $3.35 = $10.05
- 20% = $6.70 x 2 = $13.40

## グループでの割り勘

### 均等割り
合計請求書 + チップを人数で割る

### 比例割り
各自が注文したものに対してチップを計算

## 多めに/少なめにチップを渡すとき

### 多め（20%以上）：
- サービスが素晴らしかった
- 大人数のグループ
- 長時間滞在した

### 少なめ（10-15%）：
- サービスが明らかに悪かった（それでもチップは渡す）

[チップ計算機](/ja/tip-calculator)で適切なチップ額を素早く計算してください。`,
			zh: `小费习俗在世界各地差异很大。在一个国家慷慨的行为在另一个国家可能被视为无礼。

## 各国小费文化

### 美国和加拿大
餐桌服务的小费基本上是必须的：
- **餐厅**：15-20%（税前）
- **酒吧**：每杯$1-2或15-20%
- **美发沙龙**：15-20%
- **出租车**：15-20%

### 欧洲
- **英国**：餐厅10-15%
- **法国**：已含服务费，好服务可多给
- **德国**：凑整或加5-10%

### 亚洲
- **日本**：不要给小费，可能被认为是无礼的
- **韩国**：没有小费文化
- **中国**：一般不需要
- **泰国**：餐厅20-50泰铢

## 快速心算小费

### 10%法
1. 求10%：将小数点向左移一位
2. 15%：10%加上10%的一半
3. 20%：10%翻倍

**67美元账单示例：**
- 10% = $6.70
- 15% = $10.05
- 20% = $13.40

## 分账

### 平均分摊
总账单+小费，除以人数

### 按比例分摊
每人按自己点的东西计算小费

使用我们的[小费计算器](/zh/tip-calculator)快速计算合适的小费金额。`,
			es: `Las costumbres de propinas varían enormemente alrededor del mundo.

## Propinas por país

### Estados Unidos y Canadá
- **Restaurantes**: 15-20% (antes de impuestos)
- **Bares**: $1-2 por bebida
- **Salones**: 15-20%
- **Taxi**: 15-20%

### Europa
- **Reino Unido**: 10-15%
- **Francia**: Servicio incluido
- **Alemania**: Redondear o 5-10%

### Asia
- **Japón**: NO deje propina
- **Corea**: Sin costumbre de propinas
- **Tailandia**: 20-50 baht

## Cálculo mental rápido

### Método del 10%
1. 10%: mueva el decimal una posición a la izquierda
2. 15%: agregue la mitad del 10% al 10%
3. 20%: duplique el 10%

Use nuestra [Calculadora de Propinas](/es/tip-calculator) para calcular rápidamente la propina correcta.`
		},
		date: '2025-01-15',
		category: 'lifestyle'
	},
	{
		slug: 'bmi-healthy-ranges',
		title: {
			en: 'The Complete Guide to BMI Healthy Ranges',
			ko: 'BMI 건강 범위 완벽 가이드',
			ja: 'BMI健康範囲の完全ガイド',
			zh: 'BMI健康范围完全指南',
			es: 'Guía completa de rangos saludables de IMC'
		},
		description: {
			en: 'Understand BMI healthy ranges by age, gender, and ethnicity, and learn what your BMI really means for your health.',
			ko: '연령, 성별, 인종별 BMI 건강 범위를 이해하고, BMI가 건강에 실제로 의미하는 바를 알아보세요.',
			ja: '年齢、性別、民族別のBMI健康範囲を理解し、BMIが健康にとって本当に何を意味するかを学びましょう。',
			zh: '了解不同年龄、性别和种族的BMI健康范围，以及BMI对健康的真正含义。',
			es: 'Comprenda los rangos saludables de IMC por edad, género y etnia, y aprenda qué significa realmente su IMC para su salud.'
		},
		content: {
			en: `Understanding your BMI healthy range is the first step toward better health management.

## Standard BMI Categories

| BMI Range | Classification |
|-----------|---------------|
| Below 18.5 | Underweight |
| 18.5 – 24.9 | Normal weight |
| 25.0 – 29.9 | Overweight |
| 30.0+ | Obese |

## Age-Specific Considerations

### Children and Teens (2–19)
BMI is interpreted using age- and sex-specific percentiles rather than fixed cutoffs. A child at the 85th percentile is considered overweight; the 95th percentile indicates obesity.

### Adults 20–65
The standard WHO categories above apply. However, muscle mass naturally increases into your 30s and declines after 50, so context matters.

### Older Adults (65+)
Research suggests a slightly higher BMI (23–27) may be protective for older adults, providing reserves during illness.

## Gender Differences

Women naturally carry more body fat than men. A BMI of 24 may represent very different body compositions in men versus women. Consider supplementing BMI with waist circumference or body fat percentage measurements.

## Ethnic Variations

- **Asian populations**: Health risks increase at lower BMIs. Many Asian countries use 23 as the overweight threshold.
- **Pacific Islanders**: May have higher bone density and muscle mass, making standard cutoffs less accurate.

## Beyond BMI

BMI does not distinguish between fat and muscle. Athletes may have a high BMI with low body fat. Always combine BMI with:
- Waist circumference
- Body fat percentage
- Blood pressure and blood work
- Overall fitness level

Use our [BMI Calculator](/en/bmi-calculator) to check your current range.`,
			ko: `BMI 건강 범위를 이해하는 것은 더 나은 건강 관리를 위한 첫걸음입니다.

## 표준 BMI 분류

| BMI 범위 | 분류 |
|----------|------|
| 18.5 미만 | 저체중 |
| 18.5 – 24.9 | 정상 체중 |
| 25.0 – 29.9 | 과체중 |
| 30.0 이상 | 비만 |

## 연령별 고려사항

### 소아·청소년 (2–19세)
BMI는 고정된 기준이 아닌 연령·성별 백분위수로 해석합니다. 85백분위수 이상은 과체중, 95백분위수 이상은 비만으로 봅니다.

### 성인 20–65세
위의 표준 WHO 분류가 적용됩니다. 다만 근육량은 30대까지 자연적으로 증가하고 50대 이후 감소하므로 맥락이 중요합니다.

### 고령자 (65세 이상)
연구에 따르면 약간 높은 BMI(23–27)가 고령자에게 보호 효과가 있어, 질병 시 회복력을 제공할 수 있습니다.

## 성별 차이

여성은 남성보다 체지방률이 자연적으로 높습니다. BMI 24는 남녀에 따라 매우 다른 체성분을 나타낼 수 있습니다. 허리둘레나 체지방률 측정을 함께 활용하세요.

## 인종별 차이

- **아시아인**: 더 낮은 BMI에서도 건강 위험이 증가합니다. 많은 아시아 국가에서는 23을 과체중 기준으로 사용합니다.
- **태평양 도서민**: 골밀도와 근육량이 높아 표준 기준이 덜 정확할 수 있습니다.

## BMI를 넘어서

BMI는 지방과 근육을 구분하지 못합니다. 운동선수는 체지방이 낮아도 BMI가 높을 수 있습니다. 항상 BMI와 함께 다음을 확인하세요:
- 허리둘레
- 체지방률
- 혈압 및 혈액 검사
- 전반적인 체력 수준

[BMI 계산기](/ko/bmi-calculator)로 현재 범위를 확인해 보세요.`,
			ja: `BMIの健康範囲を理解することは、より良い健康管理への第一歩です。

## 標準BMIカテゴリー

| BMI範囲 | 分類 |
|---------|------|
| 18.5未満 | 低体重 |
| 18.5 – 24.9 | 普通体重 |
| 25.0 – 29.9 | 過体重 |
| 30.0以上 | 肥満 |

## 年齢別の考慮事項

### 小児・青年（2〜19歳）
BMIは固定の基準値ではなく、年齢・性別のパーセンタイルで解釈します。85パーセンタイル以上は過体重、95パーセンタイル以上は肥満とされます。

### 成人 20〜65歳
上記の標準WHO分類が適用されます。ただし筋肉量は30代まで自然に増加し、50代以降減少するため、文脈が重要です。

### 高齢者（65歳以上）
研究によると、やや高めのBMI（23〜27）が高齢者にとって保護的効果があり、病気の際の回復力を提供する可能性があります。

## 性別による違い

女性は男性より自然に体脂肪率が高いです。BMI 24は男女で非常に異なる体組成を示す場合があります。ウエスト周囲径や体脂肪率の測定も併用しましょう。

## 民族による違い

- **アジア人**: より低いBMIでも健康リスクが増加します。多くのアジア諸国では23を過体重の基準としています。
- **太平洋諸島民**: 骨密度と筋肉量が高い傾向があり、標準的な基準値の精度が低くなる場合があります。

## BMIを超えて

BMIは脂肪と筋肉を区別できません。アスリートは体脂肪が低くてもBMIが高い場合があります。常にBMIと併せて以下を確認してください：
- ウエスト周囲径
- 体脂肪率
- 血圧と血液検査
- 全体的な体力レベル

[BMI計算機](/ja/bmi-calculator)で現在の範囲を確認しましょう。`,
			zh: `了解BMI健康范围是更好地管理健康的第一步。

## 标准BMI分类

| BMI范围 | 分类 |
|---------|------|
| 低于18.5 | 体重过轻 |
| 18.5 – 24.9 | 正常体重 |
| 25.0 – 29.9 | 超重 |
| 30.0以上 | 肥胖 |

## 年龄相关考虑

### 儿童和青少年（2-19岁）
BMI使用年龄和性别特定的百分位数来解释，而非固定的临界值。第85百分位以上为超重，第95百分位以上为肥胖。

### 成人 20-65岁
适用上述标准WHO分类。但肌肉量在30多岁前自然增加，50岁后下降，因此需要结合具体情况。

### 老年人（65岁以上）
研究表明，略高的BMI（23-27）可能对老年人有保护作用，在生病时提供储备。

## 性别差异

女性自然比男性拥有更多体脂。BMI为24在男性和女性中可能代表非常不同的身体成分。建议结合腰围或体脂率测量。

## 种族差异

- **亚洲人群**：在较低的BMI下健康风险就会增加。许多亚洲国家将23作为超重标准。
- **太平洋岛民**：可能具有更高的骨密度和肌肉量，使标准临界值不太准确。

## 超越BMI

BMI无法区分脂肪和肌肉。运动员可能体脂低但BMI高。始终将BMI与以下指标结合：
- 腰围
- 体脂率
- 血压和血液检查
- 整体体能水平

使用我们的[BMI计算器](/zh/bmi-calculator)查看您当前的范围。`,
			es: `Comprender su rango saludable de IMC es el primer paso hacia una mejor gestión de la salud.

## Categorías estándar de IMC

| Rango IMC | Clasificación |
|-----------|--------------|
| Menos de 18.5 | Bajo peso |
| 18.5 – 24.9 | Peso normal |
| 25.0 – 29.9 | Sobrepeso |
| 30.0+ | Obesidad |

## Consideraciones por edad

### Niños y adolescentes (2–19)
El IMC se interpreta usando percentiles específicos por edad y sexo. El percentil 85 indica sobrepeso; el percentil 95 indica obesidad.

### Adultos 20–65
Se aplican las categorías estándar de la OMS. Sin embargo, la masa muscular aumenta naturalmente hasta los 30 y disminuye después de los 50.

### Adultos mayores (65+)
Las investigaciones sugieren que un IMC ligeramente más alto (23–27) puede ser protector para los adultos mayores.

## Más allá del IMC

El IMC no distingue entre grasa y músculo. Combínelo siempre con la circunferencia de cintura y el porcentaje de grasa corporal.

Use nuestra [Calculadora de IMC](/es/bmi-calculator) para verificar su rango actual.`
		},
		date: '2025-02-15',
		category: 'health'
	},
	{
		slug: 'calorie-deficit-weight-loss',
		title: {
			en: 'Calorie Deficit and Weight Loss: The Science Behind It',
			ko: '칼로리 적자와 체중 감량: 과학적 원리',
			ja: 'カロリー不足と減量：その背後にある科学',
			zh: '热量缺口与减重：背后的科学',
			es: 'Déficit calórico y pérdida de peso: la ciencia detrás'
		},
		description: {
			en: 'Learn how calorie deficit works for weight loss, how to calculate your ideal deficit, and sustainable strategies.',
			ko: '칼로리 적자가 체중 감량에 어떻게 작용하는지, 이상적인 적자량 계산법, 지속 가능한 전략을 알아보세요.',
			ja: 'カロリー不足が減量にどう作用するか、理想的な不足量の計算方法、持続可能な戦略を学びましょう。',
			zh: '了解热量缺口如何促进减重、如何计算理想缺口以及可持续的策略。',
			es: 'Aprenda cómo funciona el déficit calórico, cómo calcular su déficit ideal y estrategias sostenibles.'
		},
		content: {
			en: `Weight loss fundamentally comes down to one principle: consuming fewer calories than your body burns.

## What Is a Calorie Deficit?

A calorie deficit occurs when you eat fewer calories than your Total Daily Energy Expenditure (TDEE). Your TDEE includes:
- **BMR (Basal Metabolic Rate)**: Calories burned at rest
- **TEF (Thermic Effect of Food)**: Energy used to digest food
- **NEAT**: Non-exercise activity thermogenesis
- **EAT**: Exercise activity thermogenesis

## How to Calculate Your Deficit

1. **Find your TDEE**: Use a TDEE calculator or multiply your BMR by an activity factor
2. **Set a moderate deficit**: 500 calories/day deficit ≈ 0.45 kg (1 lb) loss per week
3. **Track consistently**: Use a food diary or app

## Safe Deficit Ranges

| Deficit | Weekly Loss | Best For |
|---------|------------|----------|
| 250 cal/day | ~0.25 kg | Slow, sustainable |
| 500 cal/day | ~0.5 kg | Moderate pace |
| 750 cal/day | ~0.75 kg | Faster results |
| 1000 cal/day | ~1 kg | Short-term only |

## Common Mistakes

1. **Too aggressive**: Deficits over 1000 cal/day slow your metabolism
2. **Ignoring protein**: Maintain 1.6–2.2 g/kg bodyweight to preserve muscle
3. **Not adjusting**: As you lose weight, your TDEE decreases — recalculate monthly
4. **Weekend overeating**: Two days of surplus can erase five days of deficit

## Sustainable Strategies

- Focus on nutrient-dense foods that keep you full
- Increase daily movement (walking, stairs) to boost NEAT
- Strength train to preserve muscle mass
- Get 7–9 hours of sleep — poor sleep increases hunger hormones

Use our [BMI Calculator](/en/bmi-calculator) to set your target weight range.`,
			ko: `체중 감량은 근본적으로 하나의 원리로 귀결됩니다: 몸이 소모하는 것보다 적은 칼로리를 섭취하는 것입니다.

## 칼로리 적자란?

칼로리 적자는 총 일일 에너지 소비량(TDEE)보다 적은 칼로리를 섭취할 때 발생합니다. TDEE에는 다음이 포함됩니다:
- **BMR (기초대사량)**: 휴식 시 소모 칼로리
- **TEF (음식의 열 효과)**: 소화에 사용되는 에너지
- **NEAT**: 비운동 활동 열 생산
- **EAT**: 운동 활동 열 생산

## 적자량 계산법

1. **TDEE 계산**: TDEE 계산기를 사용하거나 BMR에 활동 계수를 곱하세요
2. **적절한 적자 설정**: 하루 500칼로리 적자 ≈ 주당 약 0.45kg 감량
3. **꾸준히 기록**: 식단 일기나 앱을 활용하세요

## 안전한 적자 범위

| 적자량 | 주간 감량 | 적합 대상 |
|--------|----------|----------|
| 250 cal/일 | ~0.25 kg | 느리고 지속 가능 |
| 500 cal/일 | ~0.5 kg | 적당한 속도 |
| 750 cal/일 | ~0.75 kg | 빠른 결과 |
| 1000 cal/일 | ~1 kg | 단기간만 |

## 흔한 실수

1. **과도한 적자**: 1000cal/일 이상의 적자는 대사를 늦춥니다
2. **단백질 무시**: 근육 보존을 위해 체중 kg당 1.6–2.2g 유지하세요
3. **조정하지 않음**: 체중이 줄면 TDEE가 감소합니다 — 매월 재계산하세요
4. **주말 과식**: 이틀의 과잉이 닷새의 적자를 무효화할 수 있습니다

[BMI 계산기](/ko/bmi-calculator)로 목표 체중 범위를 설정해 보세요.`,
			ja: `減量は基本的に一つの原則に帰結します：体が消費するよりも少ないカロリーを摂取することです。

## カロリー不足とは？

カロリー不足は、総日常エネルギー消費量（TDEE）より少ないカロリーを摂取するときに発生します。TDEEには以下が含まれます：
- **BMR（基礎代謝量）**：安静時の消費カロリー
- **TEF（食事誘発性熱産生）**：消化に使われるエネルギー
- **NEAT**：非運動性活動熱産生
- **EAT**：運動活動熱産生

## 不足量の計算方法

1. **TDEEを算出**：TDEE計算機を使用するか、BMRに活動係数を掛けます
2. **適度な不足を設定**：1日500カロリーの不足 ≈ 週約0.45kgの減量
3. **一貫して記録**：食事日記やアプリを活用しましょう

## よくある間違い

1. **過激すぎる不足**：1日1000cal以上の不足は代謝を低下させます
2. **タンパク質の無視**：筋肉保持のため体重1kgあたり1.6〜2.2gを維持
3. **調整しない**：体重が減るとTDEEも減少します — 毎月再計算を
4. **週末の食べ過ぎ**：2日間の過剰が5日間の不足を帳消しにする可能性があります

[BMI計算機](/ja/bmi-calculator)で目標体重範囲を設定しましょう。`,
			zh: `减重从根本上归结为一个原则：摄入的热量少于身体消耗的热量。

## 什么是热量缺口？

热量缺口是指摄入的热量低于每日总能量消耗（TDEE）时产生的差额。TDEE包括：
- **BMR（基础代谢率）**：静息状态消耗的热量
- **TEF（食物热效应）**：消化食物所用的能量
- **NEAT**：非运动性活动产热
- **EAT**：运动活动产热

## 如何计算缺口

1. **计算TDEE**：使用TDEE计算器或将BMR乘以活动系数
2. **设定适度缺口**：每天500卡缺口 ≈ 每周减少约0.45公斤
3. **持续记录**：使用饮食日记或应用程序

## 常见错误

1. **缺口过大**：每天超过1000卡的缺口会降低代谢
2. **忽视蛋白质**：保持每公斤体重1.6-2.2克以保留肌肉
3. **不调整**：体重下降后TDEE也会降低——每月重新计算
4. **周末暴食**：两天的过量可能抵消五天的缺口

使用我们的[BMI计算器](/zh/bmi-calculator)设定目标体重范围。`,
			es: `La pérdida de peso se reduce fundamentalmente a un principio: consumir menos calorías de las que quema su cuerpo.

## ¿Qué es un déficit calórico?

Un déficit calórico ocurre cuando come menos calorías que su Gasto Energético Diario Total (TDEE).

## Rangos seguros de déficit

| Déficit | Pérdida semanal | Ideal para |
|---------|-----------------|------------|
| 250 cal/día | ~0.25 kg | Lento y sostenible |
| 500 cal/día | ~0.5 kg | Ritmo moderado |
| 750 cal/día | ~0.75 kg | Resultados rápidos |

## Errores comunes

1. Déficit demasiado agresivo que ralentiza el metabolismo
2. Ignorar la proteína necesaria para preservar músculo
3. No recalcular a medida que pierde peso
4. Comer en exceso los fines de semana

Use nuestra [Calculadora de IMC](/es/bmi-calculator) para establecer su rango de peso objetivo.`
		},
		date: '2025-02-14',
		category: 'health'
	},
	{
		slug: 'unit-conversion-mistakes',
		title: {
			en: 'Common Unit Conversion Mistakes and How to Avoid Them',
			ko: '단위 변환 흔한 실수와 피하는 법',
			ja: '単位変換のよくある間違いと回避法',
			zh: '常见单位换算错误及避免方法',
			es: 'Errores comunes de conversión de unidades y cómo evitarlos'
		},
		description: {
			en: 'Avoid costly unit conversion errors in cooking, travel, and science with these practical tips and examples.',
			ko: '요리, 여행, 과학에서 발생하는 단위 변환 실수를 실용적인 팁과 예시로 방지하세요.',
			ja: '料理、旅行、科学における単位変換ミスを実践的なヒントと例で防ぎましょう。',
			zh: '通过实用技巧和示例避免烹饪、旅行和科学中的单位换算错误。',
			es: 'Evite errores costosos de conversión de unidades en cocina, viajes y ciencia con estos consejos prácticos.'
		},
		content: {
			en: `Unit conversion mistakes have caused everything from baking disasters to spacecraft crashes. Here is how to get them right every time.

## Famous Conversion Failures

### Mars Climate Orbiter (1999)
NASA lost a $125 million spacecraft because one team used metric units while another used imperial. The orbiter entered the atmosphere at the wrong angle and disintegrated.

### Gimli Glider (1983)
An Air Canada flight ran out of fuel mid-flight because ground crew calculated fuel in pounds instead of kilograms, loading only half the needed amount.

## Kitchen Conversion Pitfalls

### Volume vs. Weight
- 1 cup of flour ≠ 1 cup of sugar (by weight)
- Flour: 1 cup ≈ 125g
- Sugar: 1 cup ≈ 200g
- Butter: 1 cup ≈ 227g

### Temperature
- **Fahrenheit to Celsius**: (°F - 32) × 5/9
- Common oven temps: 350°F = 175°C, 400°F = 205°C, 450°F = 230°C

## Travel Conversions

### Speed
- 60 mph ≈ 97 km/h
- Quick estimate: multiply km/h by 0.6 for mph

### Distance
- 1 mile ≈ 1.6 km
- Quick trick: use Fibonacci numbers — 5 miles ≈ 8 km, 8 miles ≈ 13 km

### Fuel Economy
- mpg to L/100km: divide 235 by the mpg value
- 30 mpg ≈ 7.8 L/100km

## Tips to Avoid Mistakes

1. **Always state your units**: Never write just "5" — write "5 kg" or "5 lbs"
2. **Double-check with estimation**: Does the answer make sense?
3. **Use a calculator**: Our [Unit Converter](/en/unit-converter) eliminates manual errors
4. **Learn anchor points**: Memorize a few key conversions as reference points`,
			ko: `단위 변환 실수는 베이킹 실패부터 우주선 추락까지 모든 것을 초래했습니다. 매번 정확하게 하는 방법을 알아봅시다.

## 유명한 변환 실패 사례

### 화성 기후 궤도선 (1999)
한 팀은 미터법을, 다른 팀은 야드파운드법을 사용해서 NASA는 1억 2,500만 달러짜리 우주선을 잃었습니다.

### 김리 글라이더 (1983)
지상 승무원이 킬로그램 대신 파운드로 연료를 계산하여 필요량의 절반만 탑재했고, 비행 중 연료가 바닥났습니다.

## 주방에서의 변환 함정

### 부피 vs 무게
- 밀가루 1컵 ≠ 설탕 1컵 (무게 기준)
- 밀가루: 1컵 ≈ 125g
- 설탕: 1컵 ≈ 200g

### 온도
- **화씨 → 섭씨**: (°F - 32) × 5/9
- 자주 쓰는 오븐 온도: 350°F = 175°C, 400°F = 205°C

## 여행 변환

### 속도
- 60 mph ≈ 97 km/h
- 빠른 계산: km/h에 0.6을 곱하면 대략 mph

### 거리
- 1마일 ≈ 1.6 km
- 꿀팁: 피보나치 수열 활용 — 5마일 ≈ 8km, 8마일 ≈ 13km

## 실수 방지 팁

1. **항상 단위를 명시하세요**: "5"가 아니라 "5kg" 또는 "5lbs"로 쓰세요
2. **추정으로 이중 확인**: 답이 상식적으로 맞는지 확인하세요
3. **계산기 사용**: [단위 변환기](/ko/unit-converter)로 수동 오류를 없애세요
4. **기준점 암기**: 몇 가지 핵심 변환을 참조점으로 외우세요`,
			ja: `単位変換ミスは、ベーキングの失敗から宇宙船の墜落まで、あらゆる問題を引き起こしてきました。毎回正確に変換する方法を学びましょう。

## 有名な変換失敗事例

### 火星気候探査機（1999）
あるチームがメートル法を、別のチームがヤード・ポンド法を使用したため、NASAは1億2500万ドルの探査機を失いました。

### ギムリー・グライダー（1983）
地上スタッフがキログラムではなくポンドで燃料を計算し、必要量の半分しか搭載しなかったため、飛行中に燃料切れとなりました。

## キッチンでの変換の落とし穴

### 体積 vs 重量
- 小麦粉1カップ ≠ 砂糖1カップ（重量基準）
- 小麦粉：1カップ ≈ 125g
- 砂糖：1カップ ≈ 200g

## 旅行での変換

### 速度
- 60 mph ≈ 97 km/h
- 簡単な計算：km/hに0.6を掛けるとおおよそmph

### 距離
- 1マイル ≈ 1.6 km
- コツ：フィボナッチ数列を活用 — 5マイル ≈ 8km

## ミスを防ぐコツ

1. **常に単位を明記**：「5」ではなく「5kg」と書く
2. **推定で再確認**：答えが常識的に合っているか確認
3. **計算機を使用**：[単位変換ツール](/ja/unit-converter)で手動エラーを排除
4. **基準点を暗記**：いくつかの重要な変換を参照点として覚える`,
			zh: `单位换算错误导致过从烘焙失败到航天器坠毁的各种问题。以下是每次都准确换算的方法。

## 著名的换算失败案例

### 火星气候探测器（1999）
一个团队使用公制，另一个使用英制，NASA因此损失了1.25亿美元的探测器。

### 吉姆利滑翔机（1983）
地勤人员用磅而非千克计算燃料，只装载了所需量的一半，导致飞行途中燃料耗尽。

## 厨房换算陷阱

### 体积 vs 重量
- 1杯面粉 ≠ 1杯糖（按重量）
- 面粉：1杯 ≈ 125g
- 糖：1杯 ≈ 200g

## 旅行换算

### 速度
- 60 mph ≈ 97 km/h

### 距离
- 1英里 ≈ 1.6公里

## 避免错误的技巧

1. **始终标明单位**：写"5kg"而不是"5"
2. **用估算双重检查**：答案是否合理？
3. **使用计算器**：[单位转换器](/zh/unit-converter)消除手动错误
4. **记住锚点**：记忆几个关键换算作为参考`,
			es: `Los errores de conversión de unidades han causado desde desastres de repostería hasta accidentes de naves espaciales.

## Fallos famosos

### Orbitador Climático de Marte (1999)
NASA perdió una nave de $125 millones porque un equipo usó unidades métricas y otro usó imperiales.

## Conversiones de viaje

### Velocidad
- 60 mph ≈ 97 km/h
- Estimación rápida: multiplique km/h por 0.6 para obtener mph

### Distancia
- 1 milla ≈ 1.6 km

## Consejos para evitar errores

1. Siempre indique las unidades
2. Verifique con estimaciones
3. Use nuestra [Herramienta de Conversión](/es/unit-converter) para eliminar errores manuales`
		},
		date: '2025-02-13',
		category: 'education'
	},
	{
		slug: 'age-calculator-practical-guide',
		title: {
			en: 'Practical Uses of an Age Calculator: Beyond Just Knowing Your Age',
			ko: '나이 계산기 활용법: 만나이와 연나이 완벽 정리',
			ja: '年齢計算機の実用的な活用法',
			zh: '年龄计算器的实用用途',
			es: 'Usos prácticos de una calculadora de edad'
		},
		description: {
			en: 'Discover how age calculators help with legal requirements, milestones, Korean age vs international age, and more.',
			ko: '법적 요건, 마일스톤, 만나이와 연나이 차이 등 나이 계산기의 다양한 활용법을 알아보세요.',
			ja: '法的要件、マイルストーン、韓国年齢と国際年齢の違いなど、年齢計算機の活用法を紹介します。',
			zh: '了解年龄计算器如何帮助处理法律要求、里程碑和不同年龄计算方式。',
			es: 'Descubra cómo las calculadoras de edad ayudan con requisitos legales, hitos y diferentes sistemas de edad.'
		},
		content: {
			en: `An age calculator does more than tell you how old you are. Here are practical ways it can help in everyday life.

## Korean Age vs International Age

Korea traditionally used a unique age system where everyone is 1 at birth and ages up on New Year's Day. Since June 2023, Korea officially adopted the international age system for legal and administrative purposes.

- **International age**: Years since your birth date
- **Korean age (traditional)**: Current year - birth year + 1
- **Year age (연나이)**: Current year - birth year

Example: Born March 15, 1990 (as of January 2025)
- International age: 34
- Korean age: 36
- Year age: 35

## Legal Age Requirements

### Korea
- Drinking/smoking: 19 (international age)
- Voting: 18
- Driver's license: 18
- Military service: 18–28

### Common worldwide milestones
- Driving: 16–18 depending on country
- Voting: 18 in most countries
- Full legal adulthood: 18–21

## Retirement Planning

Knowing your exact age down to the day matters for:
- Pension eligibility (Korea: National Pension at 63, increasing to 65)
- Early retirement calculations
- Social Security benefits timing

## Other Practical Uses

1. **Insurance**: Age affects premium calculations
2. **Education**: School enrollment cutoff dates
3. **Healthcare**: Age-specific screening schedules
4. **Sports**: Age group classifications for competitions

Use our [Age Calculator](/en/age-calculator) for precise age calculations in any system.`,
			ko: `나이 계산기는 단순히 나이를 알려주는 것 이상의 역할을 합니다. 일상에서 활용할 수 있는 실용적인 방법들을 소개합니다.

## 만나이 vs 연나이 vs 세는나이

2023년 6월부터 한국은 법적·행정적 목적으로 만나이를 공식 채택했습니다. 하지만 여전히 세 가지 나이 체계를 이해해야 할 때가 있습니다.

- **만나이**: 생년월일 기준 실제 나이
- **연나이**: 올해 연도 - 출생 연도
- **세는나이 (전통)**: 올해 연도 - 출생 연도 + 1

예시: 1990년 3월 15일생 (2025년 1월 기준)
- 만나이: 34세
- 연나이: 35세
- 세는나이: 36세

## 법적 나이 기준

### 한국
- 음주/흡연: 만 19세
- 선거권: 만 18세
- 운전면허: 만 18세
- 병역: 만 18~28세

## 은퇴 계획

정확한 나이 계산이 중요한 이유:
- 국민연금 수급 연령 (현재 만 63세, 점진적으로 65세로 상향)
- 조기 퇴직 계산
- 퇴직금 산정

## 기타 활용법

1. **보험**: 나이에 따라 보험료가 달라집니다
2. **교육**: 학교 입학 기준일 확인
3. **건강검진**: 나이별 검진 일정
4. **스포츠**: 연령대별 대회 분류

[나이 계산기](/ko/age-calculator)로 정확한 나이를 확인해 보세요.`,
			ja: `年齢計算機は、単に年齢を教えてくれる以上の役割があります。日常生活での実用的な活用法を紹介します。

## 韓国の年齢 vs 国際年齢

韓国は伝統的に独自の年齢システムを使用していましたが、2023年6月から法的・行政的目的で国際年齢を公式採用しました。

- **国際年齢（満年齢）**：誕生日からの経過年数
- **韓国式年齢（伝統）**：今年 - 生まれた年 + 1
- **年齢（연나이）**：今年 - 生まれた年

## 法的年齢要件

### 日本
- 飲酒/喫煙：20歳（2022年4月以降も20歳のまま）
- 選挙権：18歳
- 運転免許：18歳（普通車）
- 成人年齢：18歳（2022年4月から引き下げ）

## 退職計画

正確な年齢計算が重要な理由：
- 年金受給資格（日本：原則65歳）
- 早期退職の計算
- 退職金の算定

## その他の活用法

1. **保険**：年齢によって保険料が変わります
2. **教育**：学校入学の基準日確認
3. **健康診断**：年齢別の検診スケジュール

[年齢計算機](/ja/age-calculator)で正確な年齢を確認しましょう。`,
			zh: `年龄计算器不仅仅是告诉您多大了。以下是它在日常生活中的实用方法。

## 不同的年龄计算方式

- **国际年龄（周岁）**：从出生日期算起的年数
- **虚岁**：出生即为1岁，每过一个春节加1岁
- **韩国年龄**：当年 - 出生年 + 1

## 法定年龄要求

### 中国
- 饮酒：18岁
- 投票：18岁
- 驾照：18岁（小型汽车）
- 法定成年：18岁

## 退休规划

精确的年龄计算对以下方面很重要：
- 养老金资格
- 提前退休计算
- 社保福利时间

## 其他实用用途

1. **保险**：年龄影响保费计算
2. **教育**：入学截止日期
3. **医疗**：年龄特定的筛查时间表

使用我们的[年龄计算器](/zh/age-calculator)进行精确计算。`,
			es: `Una calculadora de edad hace más que decirle cuántos años tiene.

## Requisitos de edad legal

- Conducir: 16–18 según el país
- Votar: 18 en la mayoría de los países
- Mayoría de edad: 18–21

## Planificación de jubilación

La edad exacta importa para la elegibilidad de pensiones, cálculos de jubilación anticipada y beneficios de seguridad social.

## Otros usos prácticos

1. **Seguros**: La edad afecta el cálculo de primas
2. **Educación**: Fechas límite de inscripción escolar
3. **Salud**: Programas de detección por edad

Use nuestra [Calculadora de Edad](/es/age-calculator) para cálculos precisos.`
		},
		date: '2025-02-12',
		category: 'lifestyle'
	},
	{
		slug: 'percentage-calculation-tips',
		title: {
			en: 'Percentage Calculation Tips and Tricks for Everyday Life',
			ko: '퍼센트 계산 팁과 트릭: 일상에서 바로 쓰는 법',
			ja: 'パーセント計算のコツとテクニック',
			zh: '日常生活中的百分比计算技巧',
			es: 'Consejos y trucos para calcular porcentajes'
		},
		description: {
			en: 'Master percentage calculations with mental math tricks for shopping discounts, tips, taxes, and more.',
			ko: '쇼핑 할인, 팁, 세금 등에 활용할 수 있는 퍼센트 암산 트릭을 마스터하세요.',
			ja: 'ショッピング割引、チップ、税金に使えるパーセント暗算テクニックをマスターしましょう。',
			zh: '掌握购物折扣、小费、税费等百分比心算技巧。',
			es: 'Domine los cálculos de porcentajes con trucos de cálculo mental para descuentos, propinas e impuestos.'
		},
		content: {
			en: `Percentages are everywhere — from sales to statistics. Here are tricks to calculate them instantly.

## The Flip Trick

**X% of Y = Y% of X**

This simple rule lets you pick the easier calculation:
- 8% of 50 = 50% of 8 = 4
- 4% of 75 = 75% of 4 = 3
- 15% of 20 = 20% of 15 = 3

## Building Block Method

Break complex percentages into simple ones:

### Finding 15%
- 10% + 5% (half of 10%)
- Example: 15% of 80 = 8 + 4 = 12

### Finding 25%
- Divide by 4
- Example: 25% of 360 = 90

### Finding 33%
- Divide by 3
- Example: 33% of 90 = 30

## Shopping Discount Math

### Successive Discounts
A 20% off + 10% off coupon is NOT 30% off.
- Original: $100
- After 20% off: $80
- After additional 10% off: $72
- Total discount: 28%, not 30%

### Quick Sale Price
For X% off, calculate (100 - X)% of the price:
- 30% off $60 → 70% of 60 → $42
- 15% off $80 → 85% of 80 → $68

## Percentage Change Formula

**Change = (New - Old) / Old × 100**

- Salary went from $50,000 to $55,000 → (5,000/50,000) × 100 = 10% increase
- Price dropped from $80 to $60 → (−20/80) × 100 = 25% decrease

## Common Percentage Equivalents

| Fraction | Decimal | Percentage |
|----------|---------|-----------|
| 1/2 | 0.50 | 50% |
| 1/3 | 0.33 | 33.3% |
| 1/4 | 0.25 | 25% |
| 1/5 | 0.20 | 20% |
| 1/8 | 0.125 | 12.5% |
| 1/10 | 0.10 | 10% |

Use our [Percentage Calculator](/en/percentage-calculator) for complex calculations.`,
			ko: `퍼센트는 세일부터 통계까지 어디에나 있습니다. 즉시 계산하는 트릭을 알아봅시다.

## 뒤집기 트릭

**X%의 Y = Y%의 X**

더 쉬운 계산을 선택할 수 있는 간단한 규칙입니다:
- 8%의 50 = 50%의 8 = 4
- 4%의 75 = 75%의 4 = 3
- 15%의 20 = 20%의 15 = 3

## 빌딩 블록 방식

복잡한 퍼센트를 간단한 것으로 분해하세요:

### 15% 구하기
- 10% + 5% (10%의 절반)
- 예시: 80의 15% = 8 + 4 = 12

### 25% 구하기
- 4로 나누기
- 예시: 360의 25% = 90

## 쇼핑 할인 계산

### 연속 할인
20% 할인 + 10% 추가 할인은 30% 할인이 아닙니다.
- 원래 가격: 10만원
- 20% 할인 후: 8만원
- 추가 10% 할인 후: 7만 2천원
- 실제 할인율: 28%

### 빠른 세일가 계산
X% 할인이면 (100 - X)%를 계산:
- 30% 할인 6만원 → 70%의 60,000 → 42,000원

## 퍼센트 변화 공식

**변화율 = (새 값 - 이전 값) / 이전 값 × 100**

[퍼센트 계산기](/ko/percentage-calculator)로 복잡한 계산을 쉽게 하세요.`,
			ja: `パーセントはセールから統計まであらゆるところにあります。即座に計算するテクニックを学びましょう。

## 入れ替えトリック

**XのY% = YのX%**

より簡単な計算を選べるシンプルなルールです：
- 50の8% = 8の50% = 4
- 75の4% = 4の75% = 3

## ビルディングブロック方式

### 15%を求める
- 10% + 5%（10%の半分）
- 例：80の15% = 8 + 4 = 12

### 25%を求める
- 4で割る
- 例：360の25% = 90

## ショッピング割引計算

### 連続割引
20%オフ + 10%オフ = 30%オフではありません。
- 元の価格：10,000円
- 20%オフ後：8,000円
- さらに10%オフ後：7,200円
- 実際の割引率：28%

## パーセント変化の公式

**変化率 =（新しい値 - 古い値）/ 古い値 × 100**

[パーセント計算機](/ja/percentage-calculator)で複雑な計算を簡単に。`,
			zh: `百分比无处不在——从打折到统计。以下是即时计算的技巧。

## 翻转技巧

**X的Y% = Y的X%**

- 50的8% = 8的50% = 4
- 75的4% = 4的75% = 3

## 积木法

### 求15%
- 10% + 5%（10%的一半）
- 例：80的15% = 8 + 4 = 12

## 购物折扣计算

### 连续折扣
打8折再打9折不等于打7折。
- 原价：100元 → 8折后80元 → 再9折后72元
- 实际折扣：28%

## 百分比变化公式

**变化率 =（新值 - 旧值）/ 旧值 × 100**

使用我们的[百分比计算器](/zh/percentage-calculator)进行复杂计算。`,
			es: `Los porcentajes están en todas partes. Aquí hay trucos para calcularlos al instante.

## El truco del intercambio

**X% de Y = Y% de X**

- 8% de 50 = 50% de 8 = 4
- 4% de 75 = 75% de 4 = 3

## Descuentos sucesivos

20% de descuento + 10% adicional NO es 30% de descuento. Es 28%.

## Fórmula de cambio porcentual

**Cambio = (Nuevo - Antiguo) / Antiguo × 100**

Use nuestra [Calculadora de Porcentajes](/es/percentage-calculator) para cálculos complejos.`
		},
		date: '2025-02-11',
		category: 'education'
	},
	{
		slug: 'tip-calculator-etiquette',
		title: {
			en: 'Tip Calculator and Global Tipping Etiquette Guide',
			ko: '팁 계산과 글로벌 팁 에티켓 가이드',
			ja: 'チップ計算とグローバルチップエチケットガイド',
			zh: '小费计算与全球小费礼仪指南',
			es: 'Calculadora de propinas y guía de etiqueta global'
		},
		description: {
			en: 'Navigate tipping customs worldwide and learn when, how much, and how to calculate tips correctly.',
			ko: '전 세계 팁 문화를 이해하고 언제, 얼마나, 어떻게 팁을 계산하는지 알아보세요.',
			ja: '世界のチップ文化を理解し、いつ、いくら、どう計算するかを学びましょう。',
			zh: '了解全球小费文化，学习何时、多少、如何正确计算小费。',
			es: 'Navegue las costumbres de propinas en todo el mundo y aprenda cuándo, cuánto y cómo calcular correctamente.'
		},
		content: {
			en: `Tipping customs vary dramatically around the world. What is generous in one country can be offensive in another.

## Country-by-Country Guide

### United States
- **Restaurants**: 18–22% (15% is now considered low)
- **Bars**: $1–2 per drink or 18–20% of tab
- **Coffee shops**: $1 or 15–20%
- **Delivery**: 15–20% (minimum $3–5)
- **Rideshare**: 15–20%

### Japan
- **Do NOT tip**. It can be considered rude.
- Exceptional service? A small gift is more appropriate.

### South Korea
- Tipping is not customary.
- Some upscale Western-style restaurants may include a service charge.

### Europe
- **UK**: 10–15%, check if service is included
- **France**: Service compris (included); round up for good service
- **Germany**: Round up 5–10%
- **Italy**: Coperto (cover charge) is common; small tip optional
- **Spain**: Round up or leave small change

### Southeast Asia
- **Thailand**: 20–50 baht at restaurants
- **Vietnam**: Not expected but appreciated (5–10%)
- **Singapore**: Not required; 10% service charge often included

## Quick Mental Math for Tips

### The Double-Tax Method (US)
If sales tax is about 8–10%, doubling it gives roughly 16–20%.

### The 10% Base Method
1. Move the decimal left once = 10%
2. For 15%: add half of 10% to itself
3. For 20%: double the 10% amount

### Splitting Tips
When splitting a bill, calculate the total tip first, then divide by the number of people.

Use our [Tip Calculator](/en/tip-calculator) for instant calculations.`,
			ko: `팁 문화는 나라마다 크게 다릅니다. 한 나라에서 관대한 행동이 다른 나라에서는 무례할 수 있습니다.

## 나라별 가이드

### 미국
- **레스토랑**: 18–22% (15%는 이제 적은 편)
- **바**: 음료당 $1–2 또는 총액의 18–20%
- **배달**: 15–20% (최소 $3–5)

### 일본
- **팁을 주지 마세요.** 무례하게 여겨질 수 있습니다.
- 특별한 서비스? 작은 선물이 더 적절합니다.

### 한국
- 팁 문화가 없습니다.
- 일부 고급 서양식 레스토랑에서 봉사료가 포함될 수 있습니다.

### 유럽
- **영국**: 10–15%, 서비스 포함 여부 확인
- **프랑스**: 서비스 포함; 좋은 서비스에 올림
- **독일**: 5–10% 올림

### 동남아시아
- **태국**: 레스토랑에서 20–50바트
- **베트남**: 기대하진 않지만 감사히 받음 (5–10%)

## 팁 암산법

### 10% 기본 방식
1. 소수점을 왼쪽으로 한 칸 이동 = 10%
2. 15%: 10%에 그 절반을 더하기
3. 20%: 10%를 두 배

[팁 계산기](/ko/tip-calculator)로 즉시 계산해 보세요.`,
			ja: `チップの文化は国によって大きく異なります。ある国での寛大な行為が、別の国では失礼になることもあります。

## 国別ガイド

### アメリカ
- **レストラン**：18〜22%（15%は現在少ない方）
- **バー**：ドリンク1杯につき$1〜2

### 日本
- **チップは不要**。失礼と見なされることがあります。

### 韓国
- チップの文化はありません。

### ヨーロッパ
- **イギリス**：10〜15%
- **フランス**：サービス料込み
- **ドイツ**：5〜10%切り上げ

## チップの暗算法

### 10%ベース法
1. 小数点を左に1つ移動 = 10%
2. 15%：10%にその半分を加える
3. 20%：10%を2倍にする

[チップ計算機](/ja/tip-calculator)で即座に計算しましょう。`,
			zh: `小费文化在世界各地差异很大。一个国家的慷慨之举在另一个国家可能是无礼的。

## 各国指南

### 美国
- **餐厅**：18-22%
- **酒吧**：每杯饮料$1-2

### 日本
- **不要给小费**。可能被认为是不礼貌的。

### 韩国
- 没有小费文化。

### 欧洲
- **英国**：10-15%
- **法国**：服务费已含
- **德国**：凑整5-10%

## 小费心算法

### 10%基础法
1. 小数点左移一位 = 10%
2. 15%：10%加上其一半
3. 20%：10%翻倍

使用我们的[小费计算器](/zh/tip-calculator)即时计算。`,
			es: `Las costumbres de propinas varían drásticamente en todo el mundo.

## Guía por país

### Estados Unidos: 18–22% en restaurantes
### Japón: NO deje propina
### Europa: Varía del 5 al 15%

## Cálculo mental rápido

1. Mueva el decimal a la izquierda = 10%
2. Para 15%: sume la mitad del 10%
3. Para 20%: duplique el 10%

Use nuestra [Calculadora de Propinas](/es/tip-calculator) para cálculos instantáneos.`
		},
		date: '2025-02-10',
		category: 'lifestyle'
	},
	{
		slug: 'loan-payment-strategies',
		title: {
			en: 'Loan Payment Strategies: Snowball vs Avalanche and More',
			ko: '대출 상환 전략 비교: 스노볼 vs 눈사태 방식',
			ja: 'ローン返済戦略：スノーボール vs アバランチ',
			zh: '贷款还款策略比较：滚雪球 vs 雪崩法',
			es: 'Estrategias de pago de préstamos: bola de nieve vs avalancha'
		},
		description: {
			en: 'Compare debt repayment strategies like the snowball and avalanche methods to find what works best for you.',
			ko: '스노볼, 눈사태 등 다양한 부채 상환 전략을 비교하여 자신에게 맞는 방법을 찾아보세요.',
			ja: 'スノーボール法やアバランチ法など、自分に最適な返済戦略を見つけましょう。',
			zh: '比较滚雪球法和雪崩法等还债策略，找到最适合您的方法。',
			es: 'Compare estrategias de pago como los métodos bola de nieve y avalancha para encontrar la mejor opción.'
		},
		content: {
			en: `Choosing the right loan repayment strategy can save you thousands of dollars and years of payments.

## The Avalanche Method

Pay minimums on all debts, then put extra money toward the debt with the **highest interest rate**.

**Pros**: Saves the most money on interest
**Cons**: May take longer to see debts disappear

### Example
| Debt | Balance | Rate | Minimum |
|------|---------|------|---------|
| Credit Card A | $5,000 | 22% | $150 |
| Credit Card B | $3,000 | 18% | $90 |
| Car Loan | $12,000 | 6% | $350 |

Avalanche order: Card A → Card B → Car Loan

## The Snowball Method

Pay minimums on all debts, then put extra money toward the debt with the **smallest balance**.

**Pros**: Quick wins for motivation
**Cons**: May pay more interest overall

Snowball order: Card B → Card A → Car Loan

## Avalanche vs Snowball Comparison

With $700/month total budget for the above debts:
- **Avalanche**: Debt-free in 34 months, $3,420 total interest
- **Snowball**: Debt-free in 35 months, $3,650 total interest

The difference is often smaller than people expect.

## Other Strategies

### Debt Consolidation
Combine multiple debts into one loan at a lower rate. Best when:
- Your credit score qualifies for a lower rate
- You will not accumulate new debt

### Balance Transfer
Move high-interest debt to a 0% introductory APR card. Watch for:
- Transfer fees (typically 3–5%)
- When the promotional period ends

### Extra Payment Strategies
- **Bi-weekly payments**: Make half your monthly payment every two weeks (results in 13 full payments/year instead of 12)
- **Round up**: Round your $347 payment to $400
- **Windfalls**: Apply bonuses and tax refunds to debt

Use our loan calculator to model different payoff scenarios.`,
			ko: `올바른 대출 상환 전략을 선택하면 수백만 원을 절약하고 상환 기간을 단축할 수 있습니다.

## 눈사태(Avalanche) 방식

모든 부채에 최소 금액을 납부한 후, 여유 자금을 **금리가 가장 높은** 부채에 집중합니다.

**장점**: 이자를 가장 많이 절약
**단점**: 부채가 사라지는 걸 보기까지 시간이 걸릴 수 있음

## 스노볼(Snowball) 방식

모든 부채에 최소 금액을 납부한 후, 여유 자금을 **잔액이 가장 적은** 부채에 집중합니다.

**장점**: 빠른 성취감으로 동기 부여
**단점**: 총 이자가 더 많을 수 있음

## 비교

두 방법의 차이는 생각보다 작은 경우가 많습니다. 수학적으로는 눈사태 방식이 유리하지만, 스노볼 방식의 심리적 효과도 무시할 수 없습니다.

## 기타 전략

### 대출 통합 (대환대출)
여러 부채를 더 낮은 금리의 하나의 대출로 통합합니다.

### 추가 상환 전략
- **격주 납부**: 월 납부금의 절반을 2주마다 납부 (연 13회 납부 효과)
- **올림 납부**: 347,000원을 400,000원으로 올려 납부
- **목돈 활용**: 보너스나 세금 환급을 부채 상환에 적용

대출 계산기를 사용하여 다양한 상환 시나리오를 모델링해 보세요.`,
			ja: `適切なローン返済戦略を選ぶことで、数十万円を節約し、返済期間を短縮できます。

## アバランチ（雪崩）法

すべての借金に最低返済額を支払い、余剰資金を**金利が最も高い**借金に集中します。

**メリット**：利息を最も節約
**デメリット**：借金が減るのを実感するまで時間がかかる

## スノーボール（雪だるま）法

すべての借金に最低返済額を支払い、余剰資金を**残高が最も少ない**借金に集中します。

**メリット**：早い達成感でモチベーション維持
**デメリット**：総利息が多くなる可能性

## その他の戦略

### 借り換え
複数の借金をより低い金利の1つのローンにまとめます。

### 追加返済戦略
- **隔週返済**：月の返済額の半分を2週間ごとに返済（年13回の返済効果）
- **切り上げ返済**：34,700円を40,000円に切り上げて返済

ローン計算機で様々な返済シナリオをシミュレーションしましょう。`,
			zh: `选择正确的贷款还款策略可以节省数千元并缩短还款年限。

## 雪崩法

在所有债务上支付最低还款额，然后将多余资金用于**利率最高**的债务。

**优点**：节省最多利息
**缺点**：可能需要更长时间才能看到债务消失

## 滚雪球法

在所有债务上支付最低还款额，然后将多余资金用于**余额最小**的债务。

**优点**：快速的成就感带来动力
**缺点**：可能支付更多总利息

## 其他策略

### 债务合并
将多笔债务合并为一笔利率更低的贷款。

### 额外还款策略
- **双周还款**：每两周支付月还款额的一半（相当于每年多还一个月）
- **凑整还款**：将3,470元凑整到4,000元

使用贷款计算器模拟不同的还款方案。`,
			es: `Elegir la estrategia correcta de pago puede ahorrarle miles de dólares.

## Método Avalancha
Pague los mínimos y concentre el dinero extra en la deuda con **mayor tasa de interés**.

## Método Bola de Nieve
Pague los mínimos y concentre el dinero extra en la deuda con **menor saldo**.

## Comparación
La diferencia suele ser menor de lo esperado. Matemáticamente la avalancha es mejor, pero la bola de nieve tiene un efecto psicológico valioso.

## Otras estrategias
- **Pagos quincenales**: Resulta en 13 pagos completos al año
- **Redondear**: Redondee $347 a $400
- **Refinanciación**: Combine deudas a una tasa más baja`
		},
		date: '2025-02-09',
		category: 'finance'
	},
	{
		slug: 'salary-negotiation-guide',
		title: {
			en: 'Salary Negotiation Guide: Know Your Worth',
			ko: '연봉 협상 가이드: 나의 가치를 아는 법',
			ja: '給与交渉ガイド：自分の価値を知る',
			zh: '薪资谈判指南：了解自己的价值',
			es: 'Guía de negociación salarial: conozca su valor'
		},
		description: {
			en: 'Learn data-driven salary negotiation tactics, from researching market rates to making your counteroffer.',
			ko: '시장 조사부터 역제안까지, 데이터 기반 연봉 협상 전략을 알아보세요.',
			ja: '市場調査からカウンターオファーまで、データに基づく給与交渉戦略を学びましょう。',
			zh: '从市场调研到提出反报价，学习基于数据的薪资谈判策略。',
			es: 'Aprenda tácticas de negociación salarial basadas en datos, desde investigar tarifas hasta hacer contraofertas.'
		},
		content: {
			en: `Most people leave money on the table by not negotiating their salary. Here is a systematic approach.

## Step 1: Research Your Market Value

Before any negotiation, know the going rate:
- **Online tools**: Glassdoor, LinkedIn Salary, Payscale, levels.fyi
- **Industry reports**: Robert Half, Hays salary guides
- **Network**: Ask peers in similar roles (tactfully)
- **Recruiters**: They know current market rates

## Step 2: Calculate Your Total Compensation

Salary is just one piece. Factor in:
- Base salary
- Bonuses (signing, annual, performance)
- Stock options / RSUs
- Health insurance
- Retirement matching
- Paid time off
- Remote work flexibility
- Professional development budget

## Step 3: Build Your Case

Quantify your contributions:
- Revenue generated or costs saved
- Projects delivered
- Team/department improvements
- Skills and certifications acquired

## Step 4: The Negotiation

### Timing
- After receiving an offer (not before)
- During annual reviews (prepare 1–2 months ahead)
- After a major achievement

### Key Tactics
1. **Let them go first**: Do not state your number until you hear theirs
2. **Anchor high**: Your first counter should be at the top of your range
3. **Use precise numbers**: $73,500 sounds more researched than $75,000
4. **Negotiate beyond salary**: If salary is fixed, negotiate signing bonus, extra PTO, or remote days

### Sample Script
"Thank you for the offer of $65,000. Based on my research of the market rate for this role and my [X years of experience / specific skills], I was expecting something in the range of $72,000–$78,000. Is there flexibility on the base salary?"

## Common Mistakes
- Accepting the first offer without negotiating
- Giving a salary range (they will pick the bottom)
- Making it personal rather than data-driven
- Not having a BATNA (Best Alternative to Negotiated Agreement)

Use our salary calculator to compare compensation packages.`,
			ko: `대부분의 사람들은 연봉 협상을 하지 않아 돈을 놓칩니다. 체계적인 접근법을 알아봅시다.

## 1단계: 시장 가치 조사

협상 전 시세를 파악하세요:
- **온라인 도구**: 잡코리아, 사람인, 블라인드, 크레딧잡
- **업계 보고서**: 각종 연봉 가이드
- **네트워크**: 비슷한 직무의 동료에게 (신중하게) 물어보기
- **헤드헌터**: 현재 시장 시세를 잘 알고 있습니다

## 2단계: 총 보상 패키지 계산

연봉은 하나의 요소일 뿐입니다:
- 기본 연봉
- 성과급 / 인센티브
- 스톡옵션 / RSU
- 건강보험
- 퇴직금 / 퇴직연금
- 유급 휴가
- 재택근무 유연성

## 3단계: 근거 준비

기여도를 수치화하세요:
- 매출 증대 또는 비용 절감 실적
- 완료한 프로젝트
- 획득한 기술 및 자격증

## 4단계: 협상

### 핵심 전략
1. **상대방 먼저**: 먼저 숫자를 말하지 마세요
2. **높게 시작**: 첫 역제안은 범위의 상단으로
3. **정확한 숫자 사용**: 5,000만원보다 4,850만원이 조사한 느낌
4. **연봉 외 협상**: 연봉이 고정이면 사이닝 보너스, 추가 휴가, 재택근무 협상

## 흔한 실수
- 첫 제안을 협상 없이 수락하기
- 연봉 범위를 먼저 말하기 (하한선을 선택할 것)
- 데이터가 아닌 감정에 호소하기

급여 계산기를 사용하여 보상 패키지를 비교해 보세요.`,
			ja: `ほとんどの人は給与交渉をしないことでお金を逃しています。体系的なアプローチを学びましょう。

## ステップ1：市場価値を調査

交渉前に相場を把握しましょう：
- **オンラインツール**：転職サイトの年収データ、OpenWork
- **業界レポート**：各種給与ガイド
- **ネットワーク**：同様の職種の同僚に（慎重に）聞く

## ステップ2：総報酬パッケージの計算

年収は一つの要素に過ぎません：
- 基本給 / ボーナス / ストックオプション / 福利厚生

## ステップ3：根拠の準備

貢献を数値化しましょう：
- 売上増加またはコスト削減の実績
- 完了したプロジェクト

## ステップ4：交渉

### 重要な戦略
1. **相手に先に言わせる**：自分から数字を出さない
2. **高めから始める**：最初のカウンターは範囲の上限
3. **正確な数字を使う**：750万円より735万円の方がリサーチ感がある

給与計算機を使って報酬パッケージを比較しましょう。`,
			zh: `大多数人因为不谈判薪资而损失金钱。以下是系统化的方法。

## 第一步：研究市场价值

谈判前了解行情：
- **在线工具**：各大招聘网站薪资数据
- **行业报告**：各类薪资指南
- **人脉**：向类似职位的同行（委婉地）打听

## 第二步：计算总薪酬包

薪资只是其中一部分：基本工资、奖金、股票期权、福利等

## 第三步：准备论据

量化您的贡献：收入增长、成本节省、完成的项目

## 第四步：谈判

### 关键策略
1. **让对方先出价**
2. **从高处开始**
3. **使用精确数字**：73,500比75,000更显得有调研

使用薪资计算器比较薪酬方案。`,
			es: `La mayoría de las personas pierden dinero por no negociar su salario.

## Paso 1: Investigue su valor de mercado
Use herramientas como Glassdoor y LinkedIn Salary.

## Paso 2: Calcule la compensación total
El salario es solo una pieza: bonos, acciones, seguros, vacaciones.

## Paso 3: Prepare su caso
Cuantifique sus contribuciones con datos concretos.

## Paso 4: Negocie
1. Deje que ellos hablen primero
2. Ancle alto
3. Use números precisos: $73,500 suena más investigado que $75,000`
		},
		date: '2025-02-08',
		category: 'finance'
	},
	{
		slug: 'compound-interest-explained',
		title: {
			en: 'Compound Interest Simply Explained: Your Money Making Money',
			ko: '복리 쉽게 이해하기: 돈이 돈을 버는 원리',
			ja: '複利を簡単に理解する：お金がお金を生む仕組み',
			zh: '复利简单解释：钱生钱的原理',
			es: 'Interés compuesto explicado simplemente: su dinero generando dinero'
		},
		description: {
			en: 'A beginner-friendly guide to compound interest with visual examples and real-world scenarios.',
			ko: '시각적 예시와 실제 시나리오로 복리를 쉽게 이해하는 초보자 가이드.',
			ja: '視覚的な例と実際のシナリオで複利を簡単に理解する初心者ガイド。',
			zh: '通过直观示例和实际场景轻松理解复利的入门指南。',
			es: 'Una guía para principiantes sobre el interés compuesto con ejemplos visuales y escenarios reales.'
		},
		content: {
			en: `Compound interest is often called the eighth wonder of the world. But what exactly is it, and why does it matter?

## Simple vs Compound Interest

Imagine you deposit $1,000 at 10% annual interest.

### Simple Interest
You earn $100 every year, always on the original $1,000.
- Year 1: $1,100
- Year 5: $1,500
- Year 10: $2,000

### Compound Interest
You earn interest on your principal AND on previously earned interest.
- Year 1: $1,100
- Year 5: $1,611
- Year 10: $2,594

The difference: **$594 more** over 10 years, with zero extra effort.

## The Three Variables That Matter

### 1. Rate of Return
Higher rates create dramatically different outcomes over time.

### 2. Time
This is the most powerful variable. Starting 10 years earlier can matter more than saving twice as much.

| Start Age | Monthly Saving | Total at 65 (7% return) |
|-----------|---------------|------------------------|
| 25 | $200/month | $525,000 |
| 35 | $200/month | $244,000 |
| 35 | $400/month | $488,000 |

Starting at 25 with $200/month beats starting at 35 with $400/month!

### 3. Compounding Frequency
- **Annually**: Interest added once a year
- **Monthly**: Interest added 12 times a year
- **Daily**: Interest added 365 times a year

More frequent compounding = slightly higher returns.

## The Rule of 72

Quick estimation: **72 / interest rate = years to double**
- At 6%: 72/6 = 12 years
- At 8%: 72/8 = 9 years
- At 12%: 72/12 = 6 years

## Compound Interest Works Against You Too

Credit card debt at 20% APR compounds against you. A $5,000 balance with minimum payments can take 20+ years to pay off and cost $10,000+ in interest.

Use our [Compound Interest Calculator](/en/compound-interest-calculator) to see your money grow.`,
			ko: `복리는 종종 세계 8대 불가사의라고 불립니다. 정확히 무엇이고, 왜 중요한지 알아봅시다.

## 단리 vs 복리

1,000만원을 연 10% 이자로 예금한다고 상상해 보세요.

### 단리
원금 1,000만원에 대해서만 매년 100만원 이자
- 1년 후: 1,100만원
- 5년 후: 1,500만원
- 10년 후: 2,000만원

### 복리
원금과 이전에 받은 이자 모두에 이자가 붙음
- 1년 후: 1,100만원
- 5년 후: 1,611만원
- 10년 후: 2,594만원

차이: 추가 노력 없이 10년간 **594만원 더 많음**.

## 중요한 3가지 변수

### 1. 수익률
높은 수익률은 시간이 지남에 따라 극적으로 다른 결과를 만듭니다.

### 2. 시간
가장 강력한 변수입니다. 10년 일찍 시작하는 것이 두 배를 저축하는 것보다 나을 수 있습니다.

| 시작 나이 | 월 저축액 | 65세 시점 (연 7%) |
|----------|---------|----------------|
| 25세 | 20만원/월 | 약 5.25억원 |
| 35세 | 20만원/월 | 약 2.44억원 |
| 35세 | 40만원/월 | 약 4.88억원 |

25세에 20만원이 35세에 40만원을 이깁니다!

### 3. 복리 주기
더 자주 복리 계산 = 약간 더 높은 수익

## 72의 법칙

빠른 추정: **72 / 이자율 = 돈이 두 배 되는 기간**
- 6%: 72/6 = 12년
- 8%: 72/8 = 9년

## 복리는 빚에도 적용됩니다

신용카드 부채의 20% 연이율도 복리로 작동합니다. 최소 납부만 하면 원금보다 이자를 더 많이 낼 수 있습니다.

[복리 계산기](/ko/compound-interest-calculator)로 자산 성장을 확인해 보세요.`,
			ja: `複利はしばしば世界の第8の不思議と呼ばれます。正確に何なのか、なぜ重要なのかを見てみましょう。

## 単利 vs 複利

100万円を年利10%で預金した場合：

### 単利
元本100万円に対してのみ毎年10万円の利息
- 1年後：110万円 / 5年後：150万円 / 10年後：200万円

### 複利
元本と以前の利息の両方に利息がつく
- 1年後：110万円 / 5年後：161万円 / 10年後：259万円

## 重要な3つの変数

### 1. 収益率
### 2. 時間（最も強力）
10年早く始めることが、2倍の額を貯めるより効果的。

### 3. 複利の頻度
より頻繁な複利計算 = わずかに高いリターン

## 72の法則

**72 / 金利 = お金が2倍になる年数**

[複利計算機](/ja/compound-interest-calculator)で資産の成長を確認しましょう。`,
			zh: `复利通常被称为世界第八大奇迹。让我们看看它到底是什么，为什么重要。

## 单利 vs 复利

假设您将10,000元存入年利率10%的账户：

### 单利
每年仅对本金10,000元产生1,000元利息
- 1年后：11,000 / 5年后：15,000 / 10年后：20,000

### 复利
对本金和之前的利息都产生利息
- 1年后：11,000 / 5年后：16,110 / 10年后：25,940

## 重要的3个变量

### 1. 回报率
### 2. 时间（最强大的变量）
早10年开始可能比存两倍的钱更有效。

### 3. 复利频率
更频繁的复利 = 略高的回报

## 72法则

**72 / 利率 = 资金翻倍的年数**

使用我们的[复利计算器](/zh/compound-interest-calculator)查看资金增长。`,
			es: `El interés compuesto a menudo se llama la octava maravilla del mundo.

## Simple vs Compuesto

Con $1,000 al 10% anual:
- **Simple**: Año 10 = $2,000
- **Compuesto**: Año 10 = $2,594

## La Regla del 72

**72 / tasa de interés = años para duplicar**
- Al 6%: 12 años
- Al 8%: 9 años

Use nuestra [Calculadora de Interés Compuesto](/es/compound-interest-calculator) para ver crecer su dinero.`
		},
		date: '2025-02-07',
		category: 'finance'
	},
	{
		slug: 'metric-imperial-guide',
		title: {
			en: 'Metric vs Imperial: The Complete Conversion Guide',
			ko: '미터법 vs 야드파운드법: 완벽 변환 가이드',
			ja: 'メートル法 vs ヤード・ポンド法：完全変換ガイド',
			zh: '公制 vs 英制：完整换算指南',
			es: 'Métrico vs Imperial: guía completa de conversión'
		},
		description: {
			en: 'Everything you need to know about metric and imperial systems, key conversions, and which countries use what.',
			ko: '미터법과 야드파운드법에 대한 모든 것: 주요 변환, 사용 국가 정보.',
			ja: 'メートル法とヤード・ポンド法の主要変換と使用国情報。',
			zh: '关于公制和英制的一切：关键换算和各国使用情况。',
			es: 'Todo sobre los sistemas métrico e imperial: conversiones clave y qué países usan cuál.'
		},
		content: {
			en: `Only three countries have not officially adopted the metric system: the United States, Myanmar, and Liberia.

## Quick Reference Conversions

### Length
| Metric | Imperial | Quick Estimate |
|--------|----------|---------------|
| 1 cm | 0.394 in | ~2/5 inch |
| 1 m | 3.281 ft | ~3 ft 3 in |
| 1 km | 0.621 mi | ~5/8 mile |

### Weight
| Metric | Imperial | Quick Estimate |
|--------|----------|---------------|
| 1 g | 0.035 oz | a paperclip |
| 1 kg | 2.205 lb | ~2.2 lbs |
| 100 kg | 220.5 lb | ~220 lbs |

### Temperature
- **0°C** = 32°F (water freezes)
- **20°C** = 68°F (room temperature)
- **37°C** = 98.6°F (body temperature)
- **100°C** = 212°F (water boils)

### Volume
| Metric | Imperial | Quick Estimate |
|--------|----------|---------------|
| 1 mL | 0.034 fl oz | ~20 drops |
| 1 L | 0.264 gal | ~1 quart |
| 3.785 L | 1 gallon | ~4 liters |

## Memory Tricks

- **A meter** is roughly one large step
- **A kilogram** is about 2 bags of sugar stacked (in US 1-lb bags)
- **A liter** is slightly more than a quart
- **30°C** is hot summer weather; **0°C** is freezing
- For km to miles: multiply by 0.6 (or use Fibonacci: 5 km ≈ 3 mi, 8 km ≈ 5 mi)

## Why the Metric System Is Simpler

Everything is base-10:
- 10 mm = 1 cm
- 100 cm = 1 m
- 1000 m = 1 km

Compare with imperial:
- 12 inches = 1 foot
- 3 feet = 1 yard
- 5,280 feet = 1 mile

Use our [Unit Converter](/en/unit-converter) for instant conversions.`,
			ko: `공식적으로 미터법을 채택하지 않은 나라는 미국, 미얀마, 라이베리아 세 곳뿐입니다.

## 빠른 참조 변환표

### 길이
| 미터법 | 야드파운드법 | 빠른 추정 |
|--------|-----------|----------|
| 1 cm | 0.394 인치 | ~2/5 인치 |
| 1 m | 3.281 피트 | ~3피트 3인치 |
| 1 km | 0.621 마일 | ~5/8 마일 |

### 무게
| 미터법 | 야드파운드법 | 빠른 추정 |
|--------|-----------|----------|
| 1 kg | 2.205 파운드 | ~2.2 lbs |

### 온도
- **0°C** = 32°F (물이 얼음)
- **20°C** = 68°F (실온)
- **37°C** = 98.6°F (체온)
- **100°C** = 212°F (물이 끓음)

## 암기 트릭

- **1미터**는 큰 한 걸음 정도
- **1킬로그램**은 물 1리터의 무게
- **30°C**는 더운 여름 날씨; **0°C**는 영하
- km에서 마일: 0.6을 곱하세요

## 미터법이 더 간단한 이유

모든 것이 10진법:
- 10 mm = 1 cm / 100 cm = 1 m / 1000 m = 1 km

야드파운드법과 비교:
- 12인치 = 1피트 / 3피트 = 1야드 / 5,280피트 = 1마일

[단위 변환기](/ko/unit-converter)로 즉시 변환해 보세요.`,
			ja: `公式にメートル法を採用していない国は、アメリカ、ミャンマー、リベリアの3か国だけです。

## クイック変換表

### 長さ
| メートル法 | ヤード・ポンド法 | 簡単な目安 |
|-----------|--------------|----------|
| 1 cm | 0.394インチ | ~2/5インチ |
| 1 m | 3.281フィート | ~3フィート3インチ |
| 1 km | 0.621マイル | ~5/8マイル |

### 温度
- **0°C** = 32°F（水が凍る）
- **20°C** = 68°F（室温）
- **37°C** = 98.6°F（体温）

## メートル法がシンプルな理由

すべてが10進法：10 mm = 1 cm / 100 cm = 1 m / 1000 m = 1 km

[単位変換ツール](/ja/unit-converter)で即座に変換しましょう。`,
			zh: `只有三个国家尚未正式采用公制：美国、缅甸和利比里亚。

## 快速参考换算

### 长度
| 公制 | 英制 | 快速估算 |
|------|------|---------|
| 1 cm | 0.394英寸 | ~2/5英寸 |
| 1 m | 3.281英尺 | ~3英尺3英寸 |
| 1 km | 0.621英里 | ~5/8英里 |

### 温度
- **0°C** = 32°F（水结冰）
- **20°C** = 68°F（室温）
- **37°C** = 98.6°F（体温）

## 公制更简单的原因

一切基于十进制：10 mm = 1 cm / 100 cm = 1 m / 1000 m = 1 km

使用[单位转换器](/zh/unit-converter)即时换算。`,
			es: `Solo tres países no han adoptado oficialmente el sistema métrico: EE.UU., Myanmar y Liberia.

## Conversiones rápidas

### Longitud
- 1 cm = 0.394 pulgadas
- 1 m = 3.281 pies
- 1 km = 0.621 millas

### Temperatura
- 0°C = 32°F / 20°C = 68°F / 37°C = 98.6°F / 100°C = 212°F

Use nuestro [Convertidor de Unidades](/es/unit-converter) para conversiones instantáneas.`
		},
		date: '2025-02-06',
		category: 'education'
	},
	{
		slug: 'date-calculation-dday-guide',
		title: {
			en: 'Date Calculation Tricks: D-Day, Deadlines, and Duration',
			ko: '날짜 계산 트릭: D-day, 마감일, 기간 계산',
			ja: '日付計算トリック：D-Day、締切、期間計算',
			zh: '日期计算技巧：倒计时、截止日和持续时间',
			es: 'Trucos de cálculo de fechas: cuenta regresiva, plazos y duración'
		},
		description: {
			en: 'Master date calculations for project deadlines, D-day countdowns, and duration between dates.',
			ko: '프로젝트 마감일, D-day 카운트다운, 날짜 간 기간 계산을 마스터하세요.',
			ja: 'プロジェクトの締切、D-dayカウントダウン、日付間の期間計算をマスターしましょう。',
			zh: '掌握项目截止日、倒计时和日期之间持续时间的计算。',
			es: 'Domine cálculos de fechas para plazos de proyectos, cuentas regresivas y duración entre fechas.'
		},
		content: {
			en: `Whether planning a wedding, tracking a project deadline, or counting down to a milestone, date calculations are essential.

## D-Day Countdown

D-Day counting can be confusing. Here is how it works:

- **D-10**: 10 days before the event
- **D-Day (D-0)**: The event day
- **D+1**: One day after the event

### Quick D-Day Math
To find D-Day from today:
1. Count the remaining days in the current month
2. Add full months' days
3. Add the event date's day

## Business Days vs Calendar Days

### Business Days
- Monday through Friday (excluding holidays)
- Important for: Legal deadlines, shipping estimates, project timelines

### Calendar Days
- All 7 days of the week
- Important for: Rental agreements, insurance periods, countdown timers

### Quick Estimate
- 1 week = 5 business days = 7 calendar days
- 1 month ≈ 22 business days ≈ 30 calendar days
- 1 year ≈ 252 business days = 365 calendar days

## Month-End Gotchas

Not all months have the same days:
- **30 days**: April, June, September, November
- **31 days**: January, March, May, July, August, October, December
- **28/29 days**: February

Mnemonic: "Thirty days hath September, April, June, and November..."

## Leap Year Rules

A year is a leap year if:
1. Divisible by 4 → YES
2. BUT divisible by 100 → NO
3. BUT divisible by 400 → YES

- 2024: Leap year (÷4)
- 2100: NOT a leap year (÷100 but not ÷400)
- 2000: Leap year (÷400)

## Useful Date Formulas

### Weeks between dates
Days ÷ 7 = weeks (and remainder days)

### Months between dates
Count full months, then add remaining days

Use our [Date Calculator](/en/date-calculator) for precise date math.`,
			ko: `결혼식 준비, 프로젝트 마감일 추적, 마일스톤 카운트다운 등 날짜 계산은 필수입니다.

## D-Day 카운트다운

D-Day 계산이 헷갈릴 수 있습니다:
- **D-10**: 이벤트 10일 전
- **D-Day (D-0)**: 이벤트 당일
- **D+1**: 이벤트 다음 날

## 영업일 vs 달력일

### 영업일
- 월요일~금요일 (공휴일 제외)
- 중요한 경우: 법적 기한, 배송 예상일, 프로젝트 일정

### 달력일
- 주 7일 모두
- 중요한 경우: 임대 계약, 보험 기간, 카운트다운 타이머

### 빠른 추정
- 1주 = 영업일 5일 = 달력일 7일
- 1개월 ≈ 영업일 22일 ≈ 달력일 30일

## 월말 주의사항

모든 달의 일수가 같지 않습니다:
- **30일**: 4월, 6월, 9월, 11월
- **31일**: 1월, 3월, 5월, 7월, 8월, 10월, 12월
- **28/29일**: 2월

## 윤년 규칙

1. 4로 나누어 떨어지면 → 윤년
2. 단, 100으로 나누어 떨어지면 → 평년
3. 단, 400으로 나누어 떨어지면 → 윤년

[날짜 계산기](/ko/date-calculator)로 정확한 날짜 계산을 해보세요.`,
			ja: `結婚式の準備、プロジェクトの締切管理、マイルストーンのカウントダウンなど、日付計算は不可欠です。

## D-Dayカウントダウン

- **D-10**：イベント10日前
- **D-Day（D-0）**：イベント当日
- **D+1**：イベント翌日

## 営業日 vs 暦日

### 営業日
- 月曜日〜金曜日（祝日除く）
- 1週間 = 営業日5日 / 1ヶ月 ≈ 営業日22日

## うるう年のルール

1. 4で割り切れる → うるう年
2. ただし100で割り切れる → 平年
3. ただし400で割り切れる → うるう年

[日付計算機](/ja/date-calculator)で正確な日付計算をしましょう。`,
			zh: `无论是计划婚礼、跟踪项目截止日还是倒计时里程碑，日期计算都至关重要。

## 倒计时

- **D-10**：活动前10天
- **D-Day（D-0）**：活动当天
- **D+1**：活动后一天

## 工作日 vs 日历日

### 工作日
- 周一至周五（不含节假日）
- 1周 = 5个工作日 / 1个月 ≈ 22个工作日

## 闰年规则

1. 能被4整除 → 闰年
2. 但能被100整除 → 平年
3. 但能被400整除 → 闰年

使用我们的[日期计算器](/zh/date-calculator)进行精确的日期计算。`,
			es: `Ya sea planificando una boda o rastreando un plazo de proyecto, los cálculos de fecha son esenciales.

## Cuenta regresiva D-Day

- **D-10**: 10 días antes del evento
- **D-Day**: El día del evento

## Días hábiles vs días calendario
- 1 semana = 5 días hábiles = 7 días calendario
- 1 mes ≈ 22 días hábiles

## Reglas de año bisiesto

1. Divisible por 4 → Sí
2. Pero divisible por 100 → No
3. Pero divisible por 400 → Sí

Use nuestra [Calculadora de Fechas](/es/date-calculator) para cálculos precisos.`
		},
		date: '2025-02-05',
		category: 'lifestyle'
	},
	{
		slug: 'anniversary-milestone-guide',
		title: {
			en: 'Anniversary Milestone Guide: From 100 Days to Golden Years',
			ko: '기념일 마일스톤 가이드: 100일부터 금혼식까지',
			ja: '記念日マイルストーンガイド：100日から金婚式まで',
			zh: '纪念日里程碑指南：从100天到金婚',
			es: 'Guía de hitos de aniversario: de 100 días a bodas de oro'
		},
		description: {
			en: 'Discover meaningful anniversary milestones including 100-day celebrations, wedding anniversaries, and creative ways to celebrate.',
			ko: '100일 기념, 결혼기념일 등 의미 있는 기념일 마일스톤과 창의적인 기념 방법을 알아보세요.',
			ja: '100日記念、結婚記念日など意味のある記念日マイルストーンと祝い方を紹介。',
			zh: '了解从100天庆祝到结婚纪念日等有意义的里程碑及创意庆祝方式。',
			es: 'Descubra hitos de aniversario significativos y formas creativas de celebrar.'
		},
		content: {
			en: `From the Korean tradition of celebrating 100 days to golden wedding anniversaries, milestones mark our journeys.

## Relationship Milestones

### Korean Dating Culture
- **100 days**: A major milestone! Couples exchange gifts and celebrate.
- **200 days, 300 days**: Continued celebrations
- **1 year (365 days)**: First anniversary

### Day-Count Milestones
- **100 days**: ~3.3 months
- **200 days**: ~6.6 months
- **365 days**: 1 year
- **500 days**: ~1.4 years
- **1,000 days**: ~2.7 years
- **10,000 days**: ~27.4 years

## Wedding Anniversary Names

| Year | Traditional | Modern |
|------|-----------|--------|
| 1 | Paper | Clock |
| 5 | Wood | Silverware |
| 10 | Tin/Aluminum | Diamond jewelry |
| 15 | Crystal | Watch |
| 20 | China | Platinum |
| 25 | Silver | Silver |
| 30 | Pearl | Diamond |
| 40 | Ruby | Ruby |
| 50 | Gold | Gold |
| 60 | Diamond | Diamond |

## Korean Special Anniversaries

- **백일잔치 (100-day feast)**: Celebrating a baby's 100th day
- **돌잔치 (First birthday)**: Major celebration with doljabi
- **환갑 (60th birthday)**: Traditional celebration of completing the zodiac cycle
- **칠순 (70th birthday)**: Another major milestone

## Creative Ways to Celebrate

1. **Photo timeline**: Create a visual journey from day 1 to now
2. **Letter for the future**: Write a letter to open on your next milestone
3. **Experience over things**: Plan an activity you have never done together
4. **Milestone jar**: Save a memory note for each milestone

Use our [Date Calculator](/en/date-calculator) to find your next milestone date.`,
			ko: `100일 기념부터 금혼식까지, 마일스톤은 우리의 여정을 기록합니다.

## 연인 마일스톤

### 한국 연애 문화
- **100일**: 중요한 마일스톤! 커플들이 선물을 교환하고 축하합니다.
- **200일, 300일**: 계속되는 기념
- **1주년 (365일)**: 첫 번째 기념일

### 일수 마일스톤
- **100일**: 약 3.3개월
- **200일**: 약 6.6개월
- **500일**: 약 1.4년
- **1,000일**: 약 2.7년
- **10,000일**: 약 27.4년

## 결혼기념일 이름

| 연차 | 이름 |
|------|------|
| 1주년 | 지혼식 (종이) |
| 5주년 | 목혼식 (나무) |
| 10주년 | 석혼식 (주석) |
| 15주년 | 수정혼식 |
| 20주년 | 도자기혼식 |
| 25주년 | 은혼식 |
| 30주년 | 진주혼식 |
| 40주년 | 루비혼식 |
| 50주년 | 금혼식 |
| 60주년 | 다이아몬드혼식 |

## 한국 특별 기념일

- **백일잔치**: 아기의 100일을 축하
- **돌잔치**: 돌잡이와 함께하는 첫 번째 생일 잔치
- **환갑 (60세)**: 십이지 한 바퀴를 완성한 전통 축하
- **칠순 (70세)**: 또 다른 중요한 마일스톤

## 창의적인 기념 방법

1. **포토 타임라인**: 1일부터 현재까지의 시각적 여정 만들기
2. **미래에게 쓰는 편지**: 다음 마일스톤에 열어볼 편지 쓰기
3. **물건보다 경험**: 한 번도 함께 해보지 않은 활동 계획하기

[날짜 계산기](/ko/date-calculator)로 다음 마일스톤 날짜를 확인하세요.`,
			ja: `100日記念からゴールデンウェディングまで、マイルストーンは私たちの旅路を刻みます。

## カップルのマイルストーン

### 韓国のデート文化
- **100日**：重要なマイルストーン！カップルがプレゼントを交換
- **200日、300日**：継続的なお祝い
- **1年（365日）**：最初の記念日

### 日数マイルストーン
- **100日**：約3.3ヶ月 / **1,000日**：約2.7年 / **10,000日**：約27.4年

## 結婚記念日の名前

| 年 | 名称 |
|---|------|
| 1年 | 紙婚式 |
| 5年 | 木婚式 |
| 10年 | 錫婚式 |
| 25年 | 銀婚式 |
| 50年 | 金婚式 |

[日付計算機](/ja/date-calculator)で次のマイルストーンを確認しましょう。`,
			zh: `从100天纪念到金婚，里程碑记录着我们的人生旅程。

## 恋爱里程碑

### 韩国约会文化
- **100天**：重要的里程碑！情侣交换礼物庆祝
- **200天、300天**：持续的庆祝
- **1周年（365天）**：第一个纪念日

## 结婚纪念日名称

| 年份 | 名称 |
|------|------|
| 1年 | 纸婚 |
| 5年 | 木婚 |
| 10年 | 锡婚 |
| 25年 | 银婚 |
| 50年 | 金婚 |

使用我们的[日期计算器](/zh/date-calculator)查找下一个里程碑日期。`,
			es: `Desde la tradición coreana de celebrar 100 días hasta las bodas de oro, los hitos marcan nuestros viajes.

## Hitos de pareja

- **100 días**: ¡Un hito importante en la cultura coreana!
- **1 año (365 días)**: Primer aniversario

## Nombres de aniversario de boda

| Año | Nombre |
|-----|--------|
| 1 | Papel |
| 5 | Madera |
| 10 | Estaño |
| 25 | Plata |
| 50 | Oro |

Use nuestra [Calculadora de Fechas](/es/date-calculator) para encontrar su próximo hito.`
		},
		date: '2025-02-04',
		category: 'lifestyle'
	},
	{
		slug: 'tax-bracket-explained',
		title: {
			en: 'Tax Brackets Explained: How Progressive Taxation Really Works',
			ko: '소득세 구간 이해하기: 누진세의 실제 작동 원리',
			ja: '所得税区分の理解：累進課税の仕組み',
			zh: '税率档次解析：累进税制如何运作',
			es: 'Tramos impositivos explicados: cómo funciona la tributación progresiva'
		},
		description: {
			en: 'Understand how tax brackets work, why moving to a higher bracket does not mean all your income is taxed more.',
			ko: '세금 구간의 작동 원리와 높은 구간에 진입해도 전체 소득이 더 많이 과세되지 않는 이유를 알아보세요.',
			ja: '税率区分の仕組みと、高い区分に入っても全所得が高い税率で課税されない理由を学びましょう。',
			zh: '了解税率档次如何运作，以及为什么进入更高档次不意味着所有收入都被多征税。',
			es: 'Entienda cómo funcionan los tramos impositivos y por qué subir de tramo no significa pagar más por todo su ingreso.'
		},
		content: {
			en: `One of the biggest tax misconceptions: "If I earn more, I will lose money because of a higher tax bracket." This is wrong.

## How Progressive Taxation Works

In a progressive system, different portions of your income are taxed at different rates. Only the income WITHIN each bracket is taxed at that bracket's rate.

### Example (simplified)
| Bracket | Rate |
|---------|------|
| $0 – $10,000 | 10% |
| $10,001 – $40,000 | 20% |
| $40,001 – $85,000 | 30% |
| $85,001+ | 40% |

If you earn **$50,000**:
- First $10,000 × 10% = $1,000
- Next $30,000 × 20% = $6,000
- Last $10,000 × 30% = $3,000
- **Total tax: $10,000** (effective rate: 20%)

If you earn **$50,001** (one dollar more):
- You pay $10,000.40 in tax — only 40 cents more, NOT $20,000 (40% of everything)

## Marginal vs Effective Tax Rate

- **Marginal rate**: The rate on your LAST dollar earned
- **Effective rate**: Your total tax divided by total income

Your effective rate is ALWAYS lower than your marginal rate.

## Korean Income Tax Brackets (2024)

| Taxable Income | Rate |
|---------------|------|
| Up to ₩14M | 6% |
| ₩14M – ₩50M | 15% |
| ₩50M – ₩88M | 24% |
| ₩88M – ₩150M | 35% |
| ₩150M – ₩300M | 38% |
| ₩300M – ₩500M | 40% |
| ₩500M – ₩1B | 42% |
| Over ₩1B | 45% |

## Tax-Saving Strategies

1. **Maximize deductions**: Reduce your taxable income
2. **Retirement contributions**: Tax-deferred growth
3. **Tax credits**: Directly reduce tax owed
4. **Income timing**: Defer income to lower-tax years when possible

Use our percentage calculator to quickly compute your effective tax rate.`,
			ko: `가장 큰 세금 오해: "더 벌면 세금 구간이 올라가서 손해다." 이것은 틀렸습니다.

## 누진세 작동 원리

누진세 제도에서는 소득의 각 구간이 다른 세율로 과세됩니다. 해당 구간에 속하는 소득만 그 세율로 과세됩니다.

### 예시
연봉 5,000만원인 경우:
- 1,400만원 × 6% = 84만원
- 3,600만원 (1,400~5,000만원) × 15% = 540만원
- **총 세금: 624만원** (실효세율: 약 12.5%)

연봉 5,001만원인 경우:
- 1만원 추가분에 대해서만 24% 적용 = 2,400원 추가
- 전체 소득에 24%가 적용되는 것이 아닙니다!

## 한계세율 vs 실효세율

- **한계세율**: 마지막 1원에 적용되는 세율
- **실효세율**: 총 세금 ÷ 총 소득

실효세율은 항상 한계세율보다 낮습니다.

## 2024년 한국 소득세 구간

| 과세표준 | 세율 |
|---------|------|
| 1,400만원 이하 | 6% |
| 1,400~5,000만원 | 15% |
| 5,000~8,800만원 | 24% |
| 8,800만원~1.5억원 | 35% |
| 1.5억~3억원 | 38% |
| 3억~5억원 | 40% |
| 5억~10억원 | 42% |
| 10억원 초과 | 45% |

## 절세 전략

1. **공제 최대화**: 과세소득 줄이기
2. **연금 납입**: 세액공제 + 과세이연 효과
3. **세액공제 활용**: 세금 직접 감면
4. **소득 시기 조절**: 가능하면 낮은 세율 연도로 소득 이연

퍼센트 계산기로 실효세율을 빠르게 계산해 보세요.`,
			ja: `最大の税金の誤解：「もっと稼ぐと、高い税率区分に入って損をする。」これは間違いです。

## 累進課税の仕組み

累進課税制度では、所得の各区分が異なる税率で課税されます。その区分内の所得のみがその税率で課税されます。

## 限界税率 vs 実効税率

- **限界税率**：最後の1円に適用される税率
- **実効税率**：総税額 ÷ 総所得

実効税率は常に限界税率より低いです。

## 日本の所得税率（2024年）

| 課税所得 | 税率 |
|---------|------|
| 195万円以下 | 5% |
| 195〜330万円 | 10% |
| 330〜695万円 | 20% |
| 695〜900万円 | 23% |
| 900〜1,800万円 | 33% |
| 1,800〜4,000万円 | 40% |
| 4,000万円超 | 45% |

パーセント計算機で実効税率を計算しましょう。`,
			zh: `最大的税务误解："如果我赚得更多，因为进入更高税率档次就会亏钱。"这是错误的。

## 累进税制如何运作

在累进制度中，收入的不同部分按不同税率征税。只有在每个档次内的收入才按该档次的税率征税。

## 边际税率 vs 有效税率

- **边际税率**：对最后一元收入适用的税率
- **有效税率**：总税额 ÷ 总收入

有效税率始终低于边际税率。

## 节税策略

1. **最大化扣除**：减少应税收入
2. **退休金缴款**：延税增长
3. **税收抵免**：直接减少应纳税额

使用百分比计算器快速计算您的有效税率。`,
			es: `El mayor mito fiscal: "Si gano más, perderé dinero por un tramo más alto." Esto es falso.

## Cómo funciona la tributación progresiva

Solo el ingreso DENTRO de cada tramo se grava a esa tasa. Si gana un dólar más, solo ese dólar paga la tasa más alta.

## Tasa marginal vs tasa efectiva

- **Marginal**: La tasa sobre su último dólar ganado
- **Efectiva**: Su impuesto total dividido por su ingreso total

Su tasa efectiva es SIEMPRE menor que su tasa marginal.`
		},
		date: '2025-02-03',
		category: 'finance'
	},
	{
		slug: 'career-salary-benchmarks',
		title: {
			en: 'Career Salary Benchmarks: What You Should Be Earning',
			ko: '직종별 연봉 벤치마크: 나는 적정 연봉을 받고 있을까?',
			ja: '職種別年収ベンチマーク：適正年収を知る',
			zh: '职业薪资基准：您应该赚多少',
			es: 'Benchmarks salariales por carrera: cuánto debería ganar'
		},
		description: {
			en: 'Compare salary benchmarks across industries and career levels to understand where you stand.',
			ko: '산업별, 경력별 연봉 벤치마크를 비교하여 자신의 위치를 파악하세요.',
			ja: '業界別・キャリアレベル別の年収ベンチマークで自分の位置を把握しましょう。',
			zh: '比较各行业和职业级别的薪资基准，了解自己的位置。',
			es: 'Compare benchmarks salariales entre industrias y niveles de carrera para entender su posición.'
		},
		content: {
			en: `Understanding salary benchmarks helps you negotiate better and plan your career strategically.

## Factors That Affect Salary

### 1. Industry
Tech, finance, and healthcare consistently pay above average. Education and nonprofit tend to pay below.

### 2. Location
Cost of living dramatically affects salaries:
- San Francisco/New York: 40–60% above national average
- Seoul: Higher than Korean average
- Remote work is narrowing these gaps

### 3. Experience Level
| Level | Typical Range (multiplier of entry-level) |
|-------|------------------------------------------|
| Entry (0–2 years) | 1.0x |
| Mid (3–5 years) | 1.3–1.6x |
| Senior (6–10 years) | 1.6–2.5x |
| Lead/Manager (10+ years) | 2.0–3.5x |
| Director/VP | 3.0–6.0x |

### 4. Skills Premium
In-demand skills command a premium:
- AI/ML: 20–40% premium
- Cloud architecture: 15–30% premium
- Data science: 15–25% premium
- Cybersecurity: 15–25% premium

## How to Research Your Benchmark

1. **Use multiple sources**: No single source is perfectly accurate
2. **Match your title AND responsibilities**: Titles vary across companies
3. **Consider total compensation**: Base + bonus + equity + benefits
4. **Look at recent data**: Markets shift quickly, especially in tech

## When You Are Below Market

If you discover you are significantly underpaid:
1. Document your market research
2. Prepare your achievement record
3. Request a meeting with your manager
4. Present data, not emotions
5. Be ready to discuss a timeline for adjustment

## When to Change Jobs for Higher Pay

Job-hopping typically yields 10–20% salary increases vs 3–5% for staying. But consider:
- Vesting schedules for stock options
- Institutional knowledge value
- Work-life balance at current role
- Growth opportunities

Use our salary calculator to compare offers.`,
			ko: `연봉 벤치마크를 이해하면 더 나은 협상과 전략적 커리어 계획이 가능합니다.

## 연봉에 영향을 주는 요소

### 1. 산업
IT, 금융, 의료는 꾸준히 평균 이상을 지급합니다. 교육, 비영리는 상대적으로 낮은 편입니다.

### 2. 지역
- 서울 강남/판교: 전국 평균 대비 높음
- 지방: 서울 대비 10–30% 낮을 수 있음
- 원격근무가 이 격차를 줄이는 중

### 3. 경력 수준
| 수준 | 일반적 범위 (신입 대비 배수) |
|------|--------------------------|
| 신입 (0–2년) | 1.0배 |
| 중급 (3–5년) | 1.3–1.6배 |
| 시니어 (6–10년) | 1.6–2.5배 |
| 리드/매니저 (10년+) | 2.0–3.5배 |

### 4. 스킬 프리미엄
수요가 높은 기술은 프리미엄이 붙습니다:
- AI/ML: 20–40% 프리미엄
- 클라우드 아키텍처: 15–30% 프리미엄

## 시장 가격 이하일 때

저평가되고 있다면:
1. 시장 조사 자료를 문서화하세요
2. 성과 기록을 준비하세요
3. 상사와 미팅을 요청하세요
4. 감정이 아닌 데이터를 제시하세요

## 이직으로 연봉 올리기

이직 시 일반적으로 10–20% 인상 vs 잔류 시 3–5% 인상. 하지만 스톡옵션 베스팅, 조직 내 지식 가치, 워라밸도 고려하세요.

급여 계산기를 사용하여 제안을 비교해 보세요.`,
			ja: `年収ベンチマークを理解することで、より良い交渉と戦略的なキャリア計画が可能になります。

## 年収に影響する要素

### 1. 業界
IT、金融、医療は一貫して平均以上。教育、非営利は相対的に低い傾向。

### 2. 地域
- 東京：全国平均より高い
- リモートワークが格差を縮小中

### 3. 経験レベル
| レベル | 一般的な範囲（新卒比） |
|-------|-------------------|
| 新卒（0-2年） | 1.0倍 |
| 中堅（3-5年） | 1.3-1.6倍 |
| シニア（6-10年） | 1.6-2.5倍 |

## 市場価格を下回っている場合

1. 市場調査データを文書化
2. 実績を準備
3. 上司との面談を依頼
4. 感情ではなくデータを提示

給与計算機でオファーを比較しましょう。`,
			zh: `了解薪资基准有助于更好地谈判和规划职业发展。

## 影响薪资的因素

### 1. 行业
科技、金融、医疗一直高于平均水平。教育和非营利相对较低。

### 2. 地区
- 一线城市：高于全国平均
- 远程工作正在缩小差距

### 3. 经验水平
| 级别 | 典型范围（入门级倍数）|
|------|------------------|
| 入门（0-2年）| 1.0倍 |
| 中级（3-5年）| 1.3-1.6倍 |
| 高级（6-10年）| 1.6-2.5倍 |

## 低于市场价格时

1. 记录市场调研数据
2. 准备业绩记录
3. 用数据而非情绪进行谈判

使用薪资计算器比较报价。`,
			es: `Entender los benchmarks salariales le ayuda a negociar mejor y planificar su carrera.

## Factores que afectan el salario

1. **Industria**: Tech y finanzas pagan más
2. **Ubicación**: El costo de vida afecta dramáticamente
3. **Experiencia**: Cada nivel multiplica el salario base
4. **Habilidades en demanda**: AI/ML, cloud y data science tienen primas

## Cuando está por debajo del mercado

1. Documente su investigación de mercado
2. Presente datos, no emociones
3. Esté preparado para discutir un cronograma de ajuste`
		},
		date: '2025-02-02',
		category: 'finance'
	},
	{
		slug: 'healthy-weight-guide',
		title: {
			en: 'Healthy Weight Guide: Beyond the Scale',
			ko: '건강한 체중 유지 가이드: 체중계 너머의 건강',
			ja: '健康的な体重ガイド：体重計の先にあるもの',
			zh: '健康体重指南：超越体重秤',
			es: 'Guía de peso saludable: más allá de la báscula'
		},
		description: {
			en: 'Learn what healthy weight really means, how to set realistic goals, and sustainable habits for maintenance.',
			ko: '건강한 체중의 진정한 의미, 현실적인 목표 설정, 유지를 위한 지속 가능한 습관을 알아보세요.',
			ja: '健康的な体重の本当の意味、現実的な目標設定、維持のための持続可能な習慣を学びましょう。',
			zh: '了解健康体重的真正含义、如何设定现实目标以及可持续的维护习惯。',
			es: 'Aprenda qué significa realmente el peso saludable, cómo establecer metas realistas y hábitos sostenibles.'
		},
		content: {
			en: `Your weight is just one number among many health indicators. Here is a more complete picture.

## Multiple Metrics for Health

### BMI (Body Mass Index)
Quick screening tool but does not account for muscle, bone density, or fat distribution.

### Waist Circumference
A better indicator of visceral fat (the dangerous kind):
- **Men**: Below 102 cm (40 in) is lower risk
- **Women**: Below 88 cm (35 in) is lower risk
- **Asian populations**: Lower thresholds (90 cm men, 80 cm women)

### Waist-to-Hip Ratio
- **Men**: Below 0.9 is lower risk
- **Women**: Below 0.85 is lower risk

### Body Fat Percentage
| Category | Men | Women |
|----------|-----|-------|
| Essential | 2–5% | 10–13% |
| Athletic | 6–13% | 14–20% |
| Fitness | 14–17% | 21–24% |
| Average | 18–24% | 25–31% |
| Obese | 25%+ | 32%+ |

## Setting Realistic Goals

### The 5–10% Rule
Losing just 5–10% of body weight significantly improves health markers:
- Blood pressure decreases
- Blood sugar control improves
- Cholesterol levels improve
- Joint pain reduces

### Healthy Rate of Change
- **Weight loss**: 0.5–1 kg per week maximum
- **Muscle gain**: 0.25–0.5 kg per month for beginners

## Sustainable Habits

1. **Move daily**: 150 minutes moderate activity per week
2. **Eat mindfully**: Focus on whole foods, not calorie counting
3. **Sleep well**: 7–9 hours; poor sleep disrupts hunger hormones
4. **Manage stress**: Cortisol promotes fat storage
5. **Be consistent**: Small daily habits beat extreme short-term efforts

Use our [BMI Calculator](/en/bmi-calculator) as a starting point for your health journey.`,
			ko: `체중은 여러 건강 지표 중 하나의 숫자일 뿐입니다. 더 완전한 그림을 그려봅시다.

## 건강을 위한 다양한 지표

### BMI (체질량지수)
빠른 선별 도구이지만 근육, 골밀도, 지방 분포를 고려하지 않습니다.

### 허리둘레
내장지방(위험한 지방)의 더 나은 지표:
- **남성**: 90cm 미만이 낮은 위험
- **여성**: 85cm 미만이 낮은 위험

### 체지방률
| 분류 | 남성 | 여성 |
|------|------|------|
| 필수 | 2–5% | 10–13% |
| 운동선수 | 6–13% | 14–20% |
| 피트니스 | 14–17% | 21–24% |
| 평균 | 18–24% | 25–31% |

## 현실적인 목표 설정

### 5–10% 규칙
체중의 5–10%만 줄여도 건강 지표가 크게 개선됩니다.

### 건강한 변화 속도
- **감량**: 주당 최대 0.5–1 kg
- **근육 증가**: 초보자 기준 월 0.25–0.5 kg

## 지속 가능한 습관

1. **매일 움직이기**: 주당 150분 중강도 활동
2. **마음챙김 식사**: 칼로리 계산보다 전체 식품에 집중
3. **잘 자기**: 7–9시간; 수면 부족은 배고픔 호르몬을 방해
4. **스트레스 관리**: 코르티솔이 지방 저장을 촉진
5. **꾸준함**: 작은 일상 습관이 극단적 단기 노력을 이깁니다

[BMI 계산기](/ko/bmi-calculator)로 건강 여정을 시작해 보세요.`,
			ja: `体重は多くの健康指標の中の一つの数字に過ぎません。より完全な健康の姿を見てみましょう。

## 健康のための複数の指標

### BMI：簡易スクリーニングツール
### ウエスト周囲径：内臓脂肪のより良い指標
- **男性**：85cm未満が低リスク
- **女性**：90cm未満が低リスク

### 体脂肪率
| 分類 | 男性 | 女性 |
|------|------|------|
| アスリート | 6–13% | 14–20% |
| フィットネス | 14–17% | 21–24% |
| 平均 | 18–24% | 25–31% |

## 持続可能な習慣

1. 毎日運動：週150分の中強度活動
2. マインドフルな食事
3. 良質な睡眠：7〜9時間
4. ストレス管理

[BMI計算機](/ja/bmi-calculator)で健康の旅を始めましょう。`,
			zh: `体重只是众多健康指标中的一个数字。让我们看看更完整的健康画面。

## 多项健康指标

### BMI：快速筛查工具
### 腰围：内脏脂肪的更好指标
- **男性**：低于90厘米为较低风险
- **女性**：低于85厘米为较低风险

### 体脂率
| 分类 | 男性 | 女性 |
|------|------|------|
| 运动员 | 6-13% | 14-20% |
| 健身 | 14-17% | 21-24% |
| 平均 | 18-24% | 25-31% |

## 可持续的习惯

1. 每天运动：每周150分钟中等强度活动
2. 正念饮食
3. 良好睡眠：7-9小时
4. 压力管理

使用[BMI计算器](/zh/bmi-calculator)开始您的健康之旅。`,
			es: `Su peso es solo un número entre muchos indicadores de salud.

## Múltiples métricas

- **IMC**: Herramienta de detección rápida
- **Circunferencia de cintura**: Mejor indicador de grasa visceral
- **Porcentaje de grasa corporal**: Más preciso que el IMC

## La regla del 5-10%

Perder solo el 5-10% del peso corporal mejora significativamente los marcadores de salud.

## Hábitos sostenibles

1. Moverse diariamente: 150 minutos de actividad moderada por semana
2. Dormir bien: 7-9 horas
3. Manejar el estrés

Use nuestra [Calculadora de IMC](/es/bmi-calculator) como punto de partida.`
		},
		date: '2025-02-01',
		category: 'health'
	},
	{
		slug: 'currency-conversion-travel',
		title: {
			en: 'Currency Conversion Tips for International Travelers',
			ko: '여행자를 위한 환율 변환 팁',
			ja: '海外旅行者のための通貨換算ヒント',
			zh: '国际旅行者的货币兑换技巧',
			es: 'Consejos de conversión de moneda para viajeros internacionales'
		},
		description: {
			en: 'Save money on currency exchange with these practical tips for international travel.',
			ko: '해외여행 시 환전 비용을 절약하는 실용적인 팁을 알아보세요.',
			ja: '海外旅行での両替費用を節約する実用的なヒントを紹介します。',
			zh: '通过这些实用技巧在国际旅行中节省货币兑换费用。',
			es: 'Ahorre dinero en cambio de divisas con estos consejos prácticos para viajes internacionales.'
		},
		content: {
			en: `Smart currency exchange can save you hundreds of dollars on international trips.

## Where to Exchange (Best to Worst)

1. **ATMs abroad (debit card)**: Usually the best exchange rate
2. **Credit cards with no foreign transaction fees**: Excellent rates
3. **Local banks**: Decent rates, minimal fees
4. **Online services**: Pre-order for convenience
5. **Airport exchange**: Worst rates (10–15% markup)
6. **Hotel exchange**: Also poor rates

## Common Traps to Avoid

### Dynamic Currency Conversion (DCC)
When a merchant asks "Pay in your home currency?" — ALWAYS say NO. Their conversion rate is terrible (3–5% worse).

### Airport "0% Commission" Booths
No commission but terrible exchange rates. The spread IS the hidden fee.

### Exchanging at Hotels
Convenience tax of 5–10% compared to market rates.

## Money-Saving Strategies

### Before Your Trip
- Get a travel-friendly credit card with no foreign transaction fees
- Notify your bank about travel plans
- Exchange a small amount for arrival needs

### During Your Trip
- Use ATMs for cash (check your bank's international withdrawal fees)
- Pay by card when possible for better rates
- Avoid exchanging money at tourist areas
- Keep track of the mid-market rate to spot bad deals

## Quick Mental Conversion Tricks

### USD ↔ EUR
Roughly 1:1 these days — just round slightly

### USD ↔ KRW
- $1 ≈ ₩1,350 (approximate)
- Quick trick: Remove three zeros and adjust
- $10 ≈ ₩13,500

### USD ↔ JPY
- $1 ≈ ¥150 (approximate)
- Quick trick: Multiply by 150 or divide by 150

Use our unit converter to check current exchange calculations.`,
			ko: `똑똑한 환전은 해외여행에서 수십만 원을 절약할 수 있습니다.

## 환전 장소 (좋은 순서)

1. **해외 ATM (체크카드)**: 보통 최고의 환율
2. **해외 수수료 없는 신용카드**: 우수한 환율
3. **시중 은행**: 적절한 환율, 최소한의 수수료
4. **온라인 환전**: 편의를 위해 미리 주문
5. **공항 환전**: 최악의 환율 (10–15% 마진)
6. **호텔 환전**: 역시 나쁜 환율

## 피해야 할 함정

### DCC (Dynamic Currency Conversion)
가맹점이 "원화로 결제하시겠습니까?"라고 물으면 — 반드시 아니요! 현지 통화로 결제하세요. 그들의 환율이 3–5% 더 나쁩니다.

### 공항 "수수료 0%" 부스
수수료는 없지만 환율이 끔찍합니다. 스프레드가 숨겨진 수수료입니다.

## 절약 전략

### 여행 전
- 해외 결제 수수료 없는 카드 준비
- 은행에 해외 여행 알림
- 도착 시 필요한 소액만 환전

### 여행 중
- 현금은 ATM 이용 (해외 인출 수수료 확인)
- 가능하면 카드 결제 (더 나은 환율)
- 관광지 환전소 피하기

## 빠른 암산 트릭

### 원 ↔ 달러
- $1 ≈ ₩1,350 (대략)
- 빠른 방법: 0 세 개를 지우고 조정

### 원 ↔ 엔
- ¥100 ≈ ₩900 (대략)
- 빠른 방법: 엔에 9를 곱하고 0 하나 제거

단위 변환기로 현재 환율 계산을 확인해 보세요.`,
			ja: `賢い両替は海外旅行で何万円も節約できます。

## 両替場所（良い順）

1. **海外ATM（デビットカード）**：通常最良のレート
2. **海外手数料無料のクレジットカード**：優秀なレート
3. **銀行**：適切なレート
4. **空港両替**：最悪のレート（10-15%のマージン）

## 避けるべき罠

### DCC（動的通貨変換）
店舗が「自国通貨で支払いますか？」と聞いたら、必ず「いいえ」。現地通貨を選びましょう。

## 節約戦略

- 海外手数料無料のカードを準備
- 現金はATMで引き出し
- 観光地の両替所を避ける

### 簡単な暗算

- $1 ≈ ¥150（おおよそ）
- 150を掛けるか、150で割る

単位変換ツールで現在のレート計算を確認しましょう。`,
			zh: `聪明的货币兑换可以在国际旅行中为您节省数百元。

## 兑换地点（从好到差）

1. **海外ATM**：通常是最好的汇率
2. **无外币交易费的信用卡**：优秀的汇率
3. **银行**：合适的汇率
4. **机场兑换**：最差的汇率（10-15%加价）

## 避免的陷阱

### DCC（动态货币转换）
商家问"用本国货币支付？"时，永远说不。选择当地货币。

## 省钱策略

- 准备无外币交易费的卡
- 用ATM取现
- 避免在旅游区兑换

使用单位转换器检查当前汇率计算。`,
			es: `El cambio inteligente de divisas puede ahorrarle cientos de dólares.

## Dónde cambiar (de mejor a peor)

1. **Cajeros en el extranjero**: Mejor tasa
2. **Tarjetas sin cargo por transacción extranjera**: Excelentes tasas
3. **Bancos locales**: Tasas decentes
4. **Cambio en aeropuerto**: Peores tasas (10-15% de margen)

## Trampas a evitar

Cuando un comerciante pregunte "¿Pagar en su moneda local?" — SIEMPRE diga NO.

Use nuestro convertidor de unidades para verificar cálculos de cambio actuales.`
		},
		date: '2025-01-31',
		category: 'lifestyle'
	},
	{
		slug: 'presentation-time-management',
		title: {
			en: 'Presentation Time Management: Delivering on Schedule',
			ko: '프레젠테이션 시간 관리: 시간 내 완벽한 발표',
			ja: 'プレゼンテーション時間管理：時間通りの発表',
			zh: '演示文稿时间管理：按时完成演讲',
			es: 'Gestión del tiempo en presentaciones: cumplir el horario'
		},
		description: {
			en: 'Learn how to plan, pace, and deliver presentations within your allotted time slot.',
			ko: '주어진 시간 내에 발표를 계획하고, 속도를 조절하며, 전달하는 방법을 알아보세요.',
			ja: '割り当てられた時間内でプレゼンを計画し、ペース配分し、発表する方法を学びましょう。',
			zh: '学习如何在分配的时间内规划、控制节奏和完成演讲。',
			es: 'Aprenda a planificar, controlar el ritmo y realizar presentaciones dentro del tiempo asignado.'
		},
		content: {
			en: `Going over your allotted presentation time is one of the most common and avoidable mistakes speakers make.

## The Time Allocation Formula

For a typical presentation, use the **60-30-10 rule**:
- **60%**: Main content / body
- **30%**: Opening + closing
- **10%**: Buffer for Q&A or transitions

### Example: 15-minute presentation
- Opening: 2 minutes
- Body: 9 minutes (3 sections × 3 minutes)
- Closing: 2 minutes
- Buffer: 2 minutes

## Words-per-Minute Guide

Average speaking speeds:
- **Slow/deliberate**: 100–120 wpm
- **Conversational**: 130–150 wpm
- **Fast/energetic**: 160–180 wpm

### Slide Count Guide
| Presentation Length | Slides (approx.) |
|--------------------|-----------------|
| 5 minutes | 5–7 |
| 10 minutes | 8–12 |
| 15 minutes | 12–18 |
| 30 minutes | 20–30 |
| 60 minutes | 35–50 |

## Pacing Techniques

### The Checkpoint Method
Mark time checkpoints in your notes:
- "By slide 5, I should be at 5 minutes"
- "By the case study, 10 minutes"

### The Traffic Light System
- **Green (first 70%)**: On track, full detail
- **Yellow (70–85%)**: Check time, adjust depth
- **Red (85–100%)**: Skip to conclusion if behind

## Common Time Traps

1. **Too long introductions**: Get to the point fast
2. **Tangential stories**: Keep anecdotes brief
3. **Reading slides**: Audiences read faster than you speak
4. **Unplanned demos**: Always have a backup plan
5. **Extended Q&A**: Set a firm cutoff

## Practice Tips

- **Record yourself**: You will discover you speak slower than you think
- **Practice 3 times minimum**: Each run gets more efficient
- **Practice with a timer visible**: Build time awareness

Use our time calculator to plan your presentation sections.`,
			ko: `주어진 발표 시간을 초과하는 것은 발표자가 저지르는 가장 흔하고 피할 수 있는 실수입니다.

## 시간 배분 공식

일반적인 발표에는 **60-30-10 규칙**을 사용하세요:
- **60%**: 본론
- **30%**: 도입 + 마무리
- **10%**: Q&A 또는 전환 버퍼

### 예시: 15분 발표
- 도입: 2분
- 본론: 9분 (3개 섹션 × 3분)
- 마무리: 2분
- 버퍼: 2분

## 분당 글자 수 가이드

평균 말하기 속도:
- **느림/신중**: 분당 250–300자 (한국어)
- **대화체**: 분당 300–350자
- **빠름/에너지**: 분당 350–400자

## 페이스 조절 기법

### 체크포인트 방식
노트에 시간 체크포인트를 표시:
- "슬라이드 5에서 5분"
- "사례 연구에서 10분"

### 신호등 시스템
- **초록 (처음 70%)**: 정상, 상세 설명
- **노랑 (70–85%)**: 시간 확인, 깊이 조절
- **빨강 (85–100%)**: 뒤처지면 결론으로 건너뛰기

## 흔한 시간 함정

1. **너무 긴 소개**: 빨리 본론으로
2. **곁가지 이야기**: 일화는 짧게
3. **슬라이드 읽기**: 청중이 더 빨리 읽습니다
4. **계획에 없는 데모**: 항상 백업 플랜 준비

시간 계산기로 발표 섹션을 계획해 보세요.`,
			ja: `発表時間を超過するのは、スピーカーが犯す最も一般的で避けられるミスです。

## 時間配分の公式

**60-30-10ルール**：
- **60%**：本論
- **30%**：導入 + まとめ
- **10%**：Q&Aまたは移行のバッファ

## ペース調整テクニック

### チェックポイント方式
ノートに時間チェックポイントを記入

### 信号機システム
- **青（最初の70%）**：順調、詳細に説明
- **黄（70-85%）**：時間確認、深さを調整
- **赤（85-100%）**：遅れていたら結論へ

## よくある時間の罠

1. 長すぎる導入
2. 脱線した話
3. スライドの読み上げ

時間計算機でプレゼンのセクションを計画しましょう。`,
			zh: `超过分配的演讲时间是演讲者最常犯且可以避免的错误之一。

## 时间分配公式

**60-30-10规则**：
- **60%**：主要内容
- **30%**：开场 + 结尾
- **10%**：问答或过渡缓冲

## 节奏控制技巧

### 检查点方法
在笔记中标记时间检查点

### 红绿灯系统
- **绿色（前70%）**：正常，详细讲解
- **黄色（70-85%）**：检查时间，调整深度
- **红色（85-100%）**：如果落后就跳到结论

使用时间计算器规划演讲部分。`,
			es: `Exceder el tiempo de presentación es uno de los errores más comunes y evitables.

## La fórmula de asignación de tiempo

**Regla 60-30-10**:
- **60%**: Contenido principal
- **30%**: Apertura + cierre
- **10%**: Buffer para Q&A

## Técnicas de ritmo

### Sistema de semáforo
- **Verde (primer 70%)**: En tiempo, detalle completo
- **Amarillo (70-85%)**: Verificar tiempo, ajustar profundidad
- **Rojo (85-100%)**: Saltar a conclusión si va retrasado

Use nuestra calculadora de tiempo para planificar las secciones de su presentación.`
		},
		date: '2025-01-30',
		category: 'productivity'
	},
	{
		slug: 'ladder-game-probability',
		title: {
			en: 'Ladder Game Probability: Is It Really Random?',
			ko: '사다리 게임 확률 분석: 정말 공정한가?',
			ja: 'はしごゲームの確率分析：本当にランダム？',
			zh: '梯子游戏概率分析：真的随机吗？',
			es: 'Probabilidad del juego de escalera: ¿es realmente aleatorio?'
		},
		description: {
			en: 'Explore the mathematics behind the Korean ladder game (사다리타기) and whether it truly gives equal chances.',
			ko: '사다리타기의 수학적 원리와 정말로 공정한 확률을 제공하는지 분석합니다.',
			ja: '韓国のはしごゲーム（サダリタギ）の数学的原理と公平性を分析します。',
			zh: '探索韩国梯子游戏的数学原理以及它是否真正提供公平机会。',
			es: 'Explore las matemáticas detrás del juego de escalera coreano y si realmente da oportunidades iguales.'
		},
		content: {
			en: `The Korean ladder game (사다리타기/Sadari-tagi) is a popular way to make random decisions. But how random is it?

## How the Ladder Game Works

1. Draw vertical lines (one per participant)
2. Add horizontal rungs randomly between adjacent lines
3. Each player starts at the top of a line and follows it down
4. When hitting a rung, move horizontally to the next line, then continue down
5. Where you end up determines your outcome

## The Mathematics

### Key Property: It is a Permutation
Every ladder game produces a **permutation** — each starting position maps to exactly one ending position, and every ending position is reached by exactly one starting position. No one gets left out.

### Is Every Outcome Equally Likely?

With truly random rung placement: **approximately yes**, but not perfectly.

- With very few rungs: Some permutations are more likely than others
- With many rungs: The distribution approaches uniformity
- The "identity" permutation (everyone stays in their lane) is always possible but becomes less likely with more rungs

### Number of Possible Outcomes

For N players, there are N! (N factorial) possible arrangements:
- 2 players: 2 outcomes
- 3 players: 6 outcomes
- 4 players: 24 outcomes
- 5 players: 120 outcomes

## Practical Fairness

In real-world use with a reasonable number of rungs:
- **2 players**: Perfectly fair (always 50/50)
- **3 players**: Very nearly fair with 5+ rungs
- **4+ players**: Fair enough for practical purposes with sufficient rungs

## Fun Facts

- The ladder game is mathematically equivalent to a sequence of adjacent transpositions
- It is used in Korea for everything from deciding who pays for lunch to assigning dormitory rooms
- You can prove that ANY permutation can be achieved with the right rung arrangement

## Tips for Fairness

1. Add at least 2× as many rungs as there are players
2. Distribute rungs randomly across the full height
3. Have someone who is not playing draw the rungs
4. Use a digital ladder game for true randomness

Use our ladder game tool for perfectly random results.`,
			ko: `사다리타기는 한국에서 무작위 결정을 내리는 인기 있는 방법입니다. 하지만 정말 공정할까요?

## 사다리 게임 원리

1. 참가자 수만큼 세로선을 그립니다
2. 인접한 세로선 사이에 가로선(다리)을 무작위로 추가합니다
3. 각 참가자는 세로선 맨 위에서 시작하여 아래로 내려갑니다
4. 가로선을 만나면 옆으로 이동한 후 계속 내려갑니다
5. 도착 지점이 결과를 결정합니다

## 수학적 분석

### 핵심 성질: 순열(Permutation)
모든 사다리 게임은 **순열**을 만듭니다. 각 출발점은 정확히 하나의 도착점에 연결되고, 모든 도착점은 정확히 하나의 출발점과 연결됩니다.

### 모든 결과가 동일한 확률인가?

무작위 가로선 배치 시: **거의 그렇지만** 완벽하지는 않습니다.

- 가로선이 매우 적으면: 일부 순열이 더 나올 확률이 높음
- 가로선이 많으면: 분포가 균등에 가까워짐

### 가능한 결과의 수

N명의 참가자에 대해 N! (N 팩토리얼)가지:
- 2명: 2가지 / 3명: 6가지 / 4명: 24가지 / 5명: 120가지

## 실질적 공정성

- **2명**: 완벽하게 공정 (항상 50/50)
- **3명**: 가로선 5개 이상이면 거의 공정
- **4명 이상**: 충분한 가로선이 있으면 실용적으로 공정

## 재미있는 사실

- 사다리 게임은 수학적으로 인접 전치의 연속과 동치입니다
- 한국에서는 점심값 내기부터 기숙사 배정까지 모든 것에 사용됩니다
- 적절한 가로선 배치로 어떤 순열이든 만들 수 있음을 증명할 수 있습니다

## 공정성 팁

1. 참가자 수의 2배 이상 가로선 추가
2. 가로선을 전체 높이에 걸쳐 무작위로 분포
3. 참가하지 않는 사람이 가로선을 그리기
4. 디지털 사다리 게임 사용으로 완벽한 무작위성 확보

사다리 게임 도구를 사용하여 완벽한 무작위 결과를 얻으세요.`,
			ja: `韓国のはしごゲーム（사다리타기）は、ランダムな決定を下す人気の方法です。しかし本当にランダムなのでしょうか？

## はしごゲームの仕組み

1. 参加者の数だけ縦線を引く
2. 隣接する縦線の間にランダムに横棒を追加
3. 各参加者は縦線の上から下へ進む
4. 横棒に当たったら横に移動し、続けて下へ

## 数学的分析

### 核心的性質：順列
すべてのはしごゲームは**順列**を生成します。各出発点は正確に1つの到着点に対応します。

### すべての結果が等しい確率？

横棒が少ないと偏りがありますが、十分な数があれば均等に近づきます。

## 公平性のコツ

1. 参加者数の2倍以上の横棒を追加
2. 横棒を全体の高さにわたってランダムに分布
3. デジタル版で完全なランダム性を確保

はしごゲームツールで完璧なランダム結果を得ましょう。`,
			zh: `韩国梯子游戏是一种流行的随机决策方法。但它真的公平吗？

## 梯子游戏原理

1. 画出与参与者数量相同的竖线
2. 在相邻竖线之间随机添加横杠
3. 每个参与者从竖线顶部开始向下走
4. 遇到横杠时横向移动，然后继续向下

## 数学分析

### 关键性质：排列
每个梯子游戏产生一个**排列**——每个起点恰好对应一个终点。

### 所有结果的概率相等吗？

横杠少时有偏差，但足够多时趋近均匀分布。

## 公平性提示

1. 添加至少参与者数量2倍的横杠
2. 使用数字版本确保完全随机

使用我们的梯子游戏工具获得完美的随机结果。`,
			es: `El juego de escalera coreano es una forma popular de tomar decisiones aleatorias. ¿Pero es realmente justo?

## Cómo funciona

1. Dibuje líneas verticales (una por participante)
2. Agregue peldaños horizontales aleatoriamente
3. Cada jugador sigue su línea hacia abajo, moviéndose horizontalmente al encontrar un peldaño

## Análisis matemático

Cada juego produce una **permutación**: cada posición inicial se mapea a exactamente una posición final.

## Consejos de equidad

1. Agregue al menos 2× más peldaños que jugadores
2. Use una versión digital para verdadera aleatoriedad`
		},
		date: '2025-01-29',
		category: 'education'
	},
	{
		slug: 'body-fat-percentage-guide',
		title: {
			en: 'Body Fat Percentage Guide: Measuring and Understanding',
			ko: '체지방률 가이드: 측정과 이해',
			ja: '体脂肪率ガイド：測定と理解',
			zh: '体脂率指南：测量与理解',
			es: 'Guía de porcentaje de grasa corporal: medición y comprensión'
		},
		description: {
			en: 'Learn about body fat percentage ranges, measurement methods, and what the numbers mean for your health.',
			ko: '체지방률 범위, 측정 방법, 그리고 그 수치가 건강에 의미하는 바를 알아보세요.',
			ja: '体脂肪率の範囲、測定方法、数値が健康にとって何を意味するかを学びましょう。',
			zh: '了解体脂率范围、测量方法以及数字对健康的意义。',
			es: 'Conozca los rangos de grasa corporal, métodos de medición y qué significan los números para su salud.'
		},
		content: {
			en: `Body fat percentage is often a better health indicator than weight alone.

## Body Fat Ranges

### Men
| Category | Body Fat % |
|----------|-----------|
| Essential fat | 2–5% |
| Competition athlete | 6–9% |
| Athletic | 10–13% |
| Fitness | 14–17% |
| Acceptable | 18–24% |
| Obese | 25%+ |

### Women
| Category | Body Fat % |
|----------|-----------|
| Essential fat | 10–13% |
| Competition athlete | 14–17% |
| Athletic | 18–20% |
| Fitness | 21–24% |
| Acceptable | 25–31% |
| Obese | 32%+ |

## Measurement Methods

### 1. Skinfold Calipers (±3–4% accuracy)
- Inexpensive and portable
- Measures subcutaneous fat at specific sites
- Requires trained operator for consistency

### 2. Bioelectrical Impedance (±3–5%)
- Found in smart scales and handheld devices
- Sends a small electrical current through the body
- Affected by hydration, meal timing, and exercise

### 3. DEXA Scan (±1–2%)
- Gold standard for body composition
- Uses low-dose X-rays
- Also measures bone density
- Expensive ($50–150 per scan)

### 4. Navy Method (±3–4%)
Uses body measurements:
- **Men**: Neck and waist circumference + height
- **Women**: Neck, waist, and hip circumference + height

## Why Body Fat % Matters More Than Weight

Two people at 75 kg can look completely different:
- Person A: 15% body fat, muscular build
- Person B: 30% body fat, sedentary

BMI would classify both the same, but their health profiles are very different.

## How to Reduce Body Fat

1. **Maintain a moderate calorie deficit** (300–500 cal/day)
2. **Prioritize protein** (1.6–2.2 g/kg bodyweight)
3. **Strength train** (preserves muscle during fat loss)
4. **Get adequate sleep** (7–9 hours)
5. **Manage stress** (cortisol promotes fat storage)

Use our [BMI Calculator](/en/bmi-calculator) as a starting reference point.`,
			ko: `체지방률은 체중만으로는 알 수 없는 건강의 더 나은 지표입니다.

## 체지방률 범위

### 남성
| 분류 | 체지방률 |
|------|---------|
| 필수 지방 | 2–5% |
| 운동선수 | 6–13% |
| 피트니스 | 14–17% |
| 보통 | 18–24% |
| 비만 | 25%+ |

### 여성
| 분류 | 체지방률 |
|------|---------|
| 필수 지방 | 10–13% |
| 운동선수 | 14–20% |
| 피트니스 | 21–24% |
| 보통 | 25–31% |
| 비만 | 32%+ |

## 측정 방법

### 1. 피하지방 캘리퍼 (±3–4% 정확도)
저렴하고 휴대 가능, 특정 부위의 피하지방 측정

### 2. 생체 전기 임피던스 (±3–5%)
스마트 체중계에서 흔히 사용, 수분 상태에 영향을 받음

### 3. DEXA 스캔 (±1–2%)
체성분 분석의 골드 스탠다드, 비용이 높음 (5–15만원)

### 4. 해군 방식 (±3–4%)
신체 치수 사용: 목, 허리둘레 + 키

## 체지방률이 체중보다 중요한 이유

75kg인 두 사람이 완전히 다를 수 있습니다:
- A: 체지방률 15%, 근육질
- B: 체지방률 30%, 비활동적

## 체지방 줄이기

1. **적절한 칼로리 적자** (300–500 cal/일)
2. **단백질 우선** (체중 kg당 1.6–2.2g)
3. **근력 운동** (지방 감소 시 근육 보존)
4. **충분한 수면** (7–9시간)
5. **스트레스 관리**

[BMI 계산기](/ko/bmi-calculator)를 참고 지점으로 활용해 보세요.`,
			ja: `体脂肪率は体重だけでは分からない、より良い健康指標です。

## 体脂肪率の範囲

### 男性
| 分類 | 体脂肪率 |
|------|---------|
| 必須脂肪 | 2–5% |
| アスリート | 6–13% |
| フィットネス | 14–17% |
| 平均 | 18–24% |
| 肥満 | 25%+ |

### 女性
| 分類 | 体脂肪率 |
|------|---------|
| 必須脂肪 | 10–13% |
| アスリート | 14–20% |
| フィットネス | 21–24% |
| 平均 | 25–31% |
| 肥満 | 32%+ |

## 測定方法

1. **キャリパー**（±3-4%）
2. **生体電気インピーダンス**（±3-5%）：スマート体重計
3. **DEXAスキャン**（±1-2%）：ゴールドスタンダード

## 体脂肪を減らすには

1. 適度なカロリー不足（300-500 cal/日）
2. タンパク質優先（体重1kgあたり1.6-2.2g）
3. 筋力トレーニング
4. 十分な睡眠（7-9時間）

[BMI計算機](/ja/bmi-calculator)を参考にしましょう。`,
			zh: `体脂率往往是比体重更好的健康指标。

## 体脂率范围

### 男性
| 分类 | 体脂率 |
|------|--------|
| 必需脂肪 | 2-5% |
| 运动员 | 6-13% |
| 健身 | 14-17% |
| 平均 | 18-24% |
| 肥胖 | 25%+ |

### 女性
| 分类 | 体脂率 |
|------|--------|
| 必需脂肪 | 10-13% |
| 运动员 | 14-20% |
| 健身 | 21-24% |
| 平均 | 25-31% |
| 肥胖 | 32%+ |

## 测量方法

1. **皮脂钳**（±3-4%）
2. **生物电阻抗**（±3-5%）
3. **DEXA扫描**（±1-2%）：金标准

使用[BMI计算器](/zh/bmi-calculator)作为参考起点。`,
			es: `El porcentaje de grasa corporal es a menudo un mejor indicador de salud que el peso solo.

## Rangos de grasa corporal

### Hombres: Esencial 2-5%, Atleta 6-13%, Fitness 14-17%, Promedio 18-24%
### Mujeres: Esencial 10-13%, Atleta 14-20%, Fitness 21-24%, Promedio 25-31%

## Métodos de medición

1. Calibrador de pliegues (±3-4%)
2. Impedancia bioeléctrica (±3-5%)
3. Escaneo DEXA (±1-2%) — estándar de oro

Use nuestra [Calculadora de IMC](/es/bmi-calculator) como punto de referencia inicial.`
		},
		date: '2025-01-28',
		category: 'health'
	},
	{
		slug: 'savings-goal-calculator',
		title: {
			en: 'Savings Goal Strategy: How to Reach Your Financial Targets',
			ko: '저축 목표 달성 전략: 재정 목표에 도달하는 법',
			ja: '貯蓄目標戦略：財務目標の達成方法',
			zh: '储蓄目标策略：如何达到财务目标',
			es: 'Estrategia de ahorro: cómo alcanzar sus metas financieras'
		},
		description: {
			en: 'Learn how to set, plan, and achieve savings goals using smart strategies and compound interest.',
			ko: '스마트한 전략과 복리를 활용하여 저축 목표를 설정하고 달성하는 방법을 알아보세요.',
			ja: 'スマートな戦略と複利を活用して貯蓄目標を設定・達成する方法を学びましょう。',
			zh: '学习如何利用智能策略和复利来设定和实现储蓄目标。',
			es: 'Aprenda a establecer, planificar y alcanzar metas de ahorro usando estrategias inteligentes e interés compuesto.'
		},
		content: {
			en: `Having a clear savings goal transforms vague intentions into actionable plans.

## The SMART Savings Framework

- **Specific**: "Save $10,000" not "save more money"
- **Measurable**: Track progress monthly
- **Achievable**: Based on your income and expenses
- **Relevant**: Connected to a meaningful goal
- **Time-bound**: "By December 2026"

## Calculating Your Monthly Savings Need

### Without Interest
**Monthly savings = Goal amount / Months until deadline**

$10,000 goal in 12 months = $833/month

### With Compound Interest
With a savings account at 4% APY:
$10,000 goal in 12 months = ~$815/month (saved $216 in reduced contributions)

The longer your timeline, the more compound interest helps.

## Popular Savings Strategies

### 1. Pay Yourself First
Automate savings on payday BEFORE spending. Treat savings like a bill.

### 2. The 50/30/20 Rule
- 50% needs (housing, food, utilities)
- 30% wants (entertainment, dining)
- 20% savings and debt repayment

### 3. The 52-Week Challenge
- Week 1: Save $1
- Week 2: Save $2
- Week 52: Save $52
- Total: $1,378

### 4. Round-Up Savings
Round every purchase up to the nearest dollar and save the difference.

### 5. No-Spend Days
Designate specific days where you spend nothing (except essential bills).

## Multiple Goals Strategy

Prioritize and separate:
1. **Emergency fund** (3–6 months expenses) — top priority
2. **High-interest debt payoff** — second priority
3. **Short-term goals** (vacation, gadgets) — separate account
4. **Long-term goals** (house, retirement) — investment account

## Overcoming Savings Obstacles

- **Irregular income?** Save a percentage, not a fixed amount
- **Low income?** Start with any amount, even $5/week
- **Impulse spending?** Use the 24-hour rule before non-essential purchases
- **Unexpected expenses?** That is why an emergency fund comes first

Use our compound interest calculator to project your savings growth.`,
			ko: `명확한 저축 목표는 막연한 의도를 실행 가능한 계획으로 바꿔줍니다.

## SMART 저축 프레임워크

- **구체적**: "더 많이 저축"이 아니라 "1,000만원 저축"
- **측정 가능**: 매월 진행 상황 추적
- **달성 가능**: 수입과 지출에 기반
- **관련성**: 의미 있는 목표와 연결
- **기한**: "2026년 12월까지"

## 월 저축 필요액 계산

### 이자 없이
**월 저축 = 목표 금액 / 남은 개월 수**

12개월에 1,000만원 = 월 약 83만원

### 복리 포함
연 4% 적금 기준: 12개월에 1,000만원 = 월 약 81만원

## 인기 저축 전략

### 1. 선저축 후지출
급여일에 자동 저축 설정. 저축을 고정 지출처럼 취급하세요.

### 2. 50/30/20 규칙
- 50% 필수 (주거, 식비, 공과금)
- 30% 원하는 것 (여가, 외식)
- 20% 저축 및 부채 상환

### 3. 52주 챌린지
- 1주차: 1,000원 / 2주차: 2,000원 / ... / 52주차: 52,000원
- 총합: 1,378,000원

### 4. 무지출 데이
특정 요일에 필수 지출 외 아무것도 쓰지 않기

## 다중 목표 전략

1. **비상 자금** (3–6개월 생활비) — 최우선
2. **고금리 부채 상환** — 두 번째
3. **단기 목표** (여행, 전자기기) — 별도 계좌
4. **장기 목표** (주택, 은퇴) — 투자 계좌

복리 계산기를 사용하여 저축 성장을 예측해 보세요.`,
			ja: `明確な貯蓄目標は、漠然とした意図を実行可能な計画に変えます。

## SMART貯蓄フレームワーク

- **具体的**：「もっと貯金」ではなく「100万円貯金」
- **測定可能**：毎月進捗を追跡
- **達成可能**：収入と支出に基づく
- **期限付き**：「2026年12月まで」

## 人気の貯蓄戦略

### 先取り貯金
給料日に自動貯金を設定。

### 50/30/20ルール
- 50%必要経費 / 30%欲しいもの / 20%貯蓄

### 52週チャレンジ
1週目：100円 → 52週目：5,200円 → 合計：約137,800円

複利計算機で貯蓄の成長を予測しましょう。`,
			zh: `明确的储蓄目标将模糊的意向转化为可执行的计划。

## SMART储蓄框架

- **具体**："存10,000元"而非"多存钱"
- **可衡量**：每月跟踪进度
- **可实现**：基于收入和支出
- **有期限**："到2026年12月"

## 热门储蓄策略

### 先储蓄后消费
在发工资日自动储蓄。

### 50/30/20规则
- 50%必需品 / 30%想要的 / 20%储蓄

### 52周挑战
第1周：10元 → 第52周：520元 → 总计：13,780元

使用复利计算器预测储蓄增长。`,
			es: `Tener una meta de ahorro clara transforma intenciones vagas en planes accionables.

## Marco SMART

- **Específico**: "Ahorrar $10,000" no "ahorrar más"
- **Medible**: Seguir progreso mensualmente
- **Alcanzable**: Basado en ingresos y gastos
- **Con plazo**: "Para diciembre 2026"

## Estrategias populares

### Páguese primero
Automatice el ahorro el día de pago.

### Regla 50/30/20
- 50% necesidades / 30% deseos / 20% ahorro

Use nuestra calculadora de interés compuesto para proyectar el crecimiento de sus ahorros.`
		},
		date: '2025-01-27',
		category: 'finance'
	},
	{
		slug: 'water-intake-calculator',
		title: {
			en: 'Daily Water Intake: How Much Water Do You Really Need?',
			ko: '하루 수분 섭취량 계산: 정말 물 8잔이면 충분할까?',
			ja: '1日の水分摂取量：本当にどれくらい必要？',
			zh: '每日水摄入量：您到底需要喝多少水？',
			es: 'Ingesta diaria de agua: ¿cuánta agua realmente necesita?'
		},
		description: {
			en: 'Calculate your ideal daily water intake based on weight, activity level, and environment.',
			ko: '체중, 활동량, 환경에 따른 이상적인 하루 수분 섭취량을 계산하세요.',
			ja: '体重、活動量、環境に基づく理想的な1日の水分摂取量を計算しましょう。',
			zh: '根据体重、活动水平和环境计算理想的每日水摄入量。',
			es: 'Calcule su ingesta ideal de agua según peso, nivel de actividad y ambiente.'
		},
		content: {
			en: `The "8 glasses a day" rule is a myth. Your actual water needs depend on many factors.

## How to Calculate Your Water Needs

### Basic Formula
**Body weight (kg) × 30–35 mL = daily water intake in mL**

Example: 70 kg × 33 mL = 2,310 mL (~2.3 liters)

### Adjustments
Add more water for:
- **Exercise**: +500–1000 mL per hour of exercise
- **Hot/humid weather**: +500–750 mL
- **High altitude**: +500 mL
- **Pregnancy**: +300 mL
- **Breastfeeding**: +700 mL
- **Illness (fever/diarrhea)**: +500–1000 mL

## Signs of Dehydration

### Mild
- Thirst
- Slightly dark urine
- Dry mouth
- Mild headache

### Moderate
- Very dark urine
- Decreased urination
- Dizziness
- Fatigue

### Severe (seek medical attention)
- No urination
- Rapid heartbeat
- Confusion

## The Urine Color Test

The simplest hydration check:
- **Pale yellow**: Well hydrated
- **Dark yellow**: Need more water
- **Clear**: Possibly over-hydrated

## Water Intake Tips

1. **Start your day with water**: Drink 500 mL upon waking
2. **Carry a bottle**: Visual reminder to drink
3. **Set reminders**: Use phone alarms every 1–2 hours
4. **Eat water-rich foods**: Cucumber (96%), watermelon (92%), oranges (87%)
5. **Drink before meals**: Helps with portion control too

## Do Other Beverages Count?

- **Tea/coffee**: Yes, despite mild diuretic effect, the net hydration is positive
- **Juice/milk**: Yes, but watch for added sugars/calories
- **Soda**: Technically hydrates but not recommended
- **Alcohol**: Net dehydrating — does NOT count

Use our unit converter to convert between water measurement units.`,
			ko: `"하루 물 8잔" 규칙은 근거가 부족합니다. 실제 수분 필요량은 여러 요인에 따라 달라집니다.

## 수분 필요량 계산법

### 기본 공식
**체중 (kg) × 30–35 mL = 하루 수분 섭취량 (mL)**

예시: 70kg × 33mL = 2,310mL (~2.3리터)

### 조정 사항
다음의 경우 추가 섭취:
- **운동**: 운동 시간당 +500–1000 mL
- **더운 날씨**: +500–750 mL
- **고도가 높은 곳**: +500 mL
- **임신**: +300 mL
- **수유**: +700 mL

## 탈수 증상

### 경미
- 갈증, 약간 진한 소변색, 입 마름

### 중등도
- 매우 진한 소변, 소변량 감소, 어지러움, 피로

### 심각 (의료 도움 필요)
- 소변 없음, 빠른 심박수, 혼란

## 소변 색상 테스트

가장 간단한 수분 상태 확인:
- **연한 노란색**: 수분 충분
- **진한 노란색**: 물 더 필요
- **투명**: 과수분 가능성

## 수분 섭취 팁

1. **아침에 물로 시작**: 기상 시 500mL 마시기
2. **물병 휴대**: 마시는 것을 시각적으로 상기
3. **알람 설정**: 1–2시간마다 알림
4. **수분 많은 음식 섭취**: 오이 (96%), 수박 (92%)
5. **식사 전 물 마시기**: 과식 방지에도 도움

## 다른 음료도 포함되나요?

- **차/커피**: 네, 가벼운 이뇨 효과에도 불구하고 순 수분 공급은 양성
- **주스/우유**: 네, 하지만 당분/칼로리 주의
- **알코올**: 순 탈수 효과 — 포함되지 않음

단위 변환기로 수분 측정 단위를 변환해 보세요.`,
			ja: `「1日8杯の水」ルールは根拠が不十分です。実際の水分必要量は多くの要因によって異なります。

## 水分必要量の計算

### 基本公式
**体重（kg）× 30〜35 mL = 1日の水分摂取量（mL）**

例：70kg × 33mL = 2,310mL（約2.3リットル）

### 調整
- 運動：1時間あたり+500〜1000 mL
- 暑い天候：+500〜750 mL

## 脱水のサイン

- 軽度：喉の渇き、やや濃い尿の色
- 中等度：非常に濃い尿、めまい、疲労
- 重度（医療機関を受診）：排尿なし、頻脈

## 水分摂取のコツ

1. 朝起きたら500mL飲む
2. ボトルを携帯する
3. 水分の多い食品を食べる

単位変換ツールで水分の測定単位を変換しましょう。`,
			zh: `"每天8杯水"的规则缺乏依据。实际需水量取决于许多因素。

## 计算需水量

### 基本公式
**体重（kg）× 30-35 mL = 每日需水量（mL）**

例：70kg × 33mL = 2,310mL（约2.3升）

### 调整
- 运动：每小时+500-1000 mL
- 炎热天气：+500-750 mL

## 脱水症状

- 轻度：口渴、尿色稍深
- 中度：尿色很深、头晕、疲劳
- 严重（需就医）：无尿、心跳加速

## 饮水技巧

1. 早上起床喝500mL
2. 随身携带水瓶
3. 吃含水量高的食物

使用单位转换器转换水量测量单位。`,
			es: `La regla de "8 vasos al día" es un mito. Sus necesidades reales dependen de muchos factores.

## Cómo calcular sus necesidades

**Peso corporal (kg) × 30-35 mL = ingesta diaria en mL**

Ejemplo: 70 kg × 33 mL = 2,310 mL (~2.3 litros)

## Señales de deshidratación

- Leve: Sed, orina ligeramente oscura
- Moderada: Orina muy oscura, mareos
- Severa: Sin orina, latidos rápidos (busque atención médica)

## Consejos

1. Comience el día con agua
2. Lleve una botella
3. Ponga alarmas cada 1-2 horas

Use nuestro convertidor de unidades para convertir medidas de agua.`
		},
		date: '2025-01-26',
		category: 'health'
	},
	{
		slug: 'sleep-cycle-calculator',
		title: {
			en: 'Sleep Cycle Calculator: Optimize Your Sleep Quality',
			ko: '수면 주기 계산과 최적화: 잠의 질을 높이는 법',
			ja: '睡眠サイクル計算：睡眠の質を最適化',
			zh: '睡眠周期计算器：优化睡眠质量',
			es: 'Calculadora de ciclos de sueño: optimice su calidad de sueño'
		},
		description: {
			en: 'Learn how sleep cycles work and calculate the best times to sleep and wake up for maximum rest.',
			ko: '수면 주기의 원리를 이해하고, 최대한 쉬기 위한 최적의 취침/기상 시간을 계산하세요.',
			ja: '睡眠サイクルの仕組みを理解し、最適な就寝・起床時間を計算しましょう。',
			zh: '了解睡眠周期如何运作，计算最佳入睡和起床时间。',
			es: 'Aprenda cómo funcionan los ciclos de sueño y calcule los mejores horarios para dormir y despertar.'
		},
		content: {
			en: `Waking up groggy is often not about how long you sleep, but when you wake up within your sleep cycle.

## Understanding Sleep Cycles

Each cycle lasts approximately **90 minutes** and consists of:

### Stage 1: Light Sleep (5–10 min)
- Transition from wakefulness
- Easily awakened
- Muscle twitches

### Stage 2: Light Sleep (20 min)
- Heart rate slows
- Body temperature drops
- Brain produces sleep spindles

### Stage 3: Deep Sleep (20–40 min)
- Hardest to wake from
- Body repairs and regenerates
- Growth hormone released
- Immune system strengthens

### REM Sleep (10–60 min)
- Vivid dreams occur
- Brain is highly active
- Memory consolidation
- Emotional processing
- Duration increases with each cycle

## Optimal Sleep Timing

### By Age
| Age Group | Recommended Sleep |
|-----------|------------------|
| Teens (14–17) | 8–10 hours |
| Adults (18–64) | 7–9 hours |
| Older Adults (65+) | 7–8 hours |

### Best Wake Times
If you need to wake at 7:00 AM, count backwards in 90-minute cycles (plus ~15 minutes to fall asleep):

| Bedtime | Cycles | Total Sleep |
|---------|--------|------------|
| 11:15 PM | 5 | 7.5 hours |
| 9:45 PM | 6 | 9 hours |

If you go to bed at 11:00 PM:
| Wake Time | Cycles | Total Sleep |
|-----------|--------|------------|
| 6:30 AM | 5 | 7.5 hours |
| 8:00 AM | 6 | 9 hours |

## Tips for Better Sleep

1. **Consistent schedule**: Same bedtime and wake time daily (even weekends)
2. **Cool room**: 18–20°C (65–68°F) is optimal
3. **Dark environment**: Use blackout curtains
4. **No screens**: Stop blue light 1 hour before bed
5. **Caffeine cutoff**: No caffeine after 2 PM
6. **Wind-down routine**: 30 minutes of relaxation before bed

Use our time calculator to plan your ideal sleep schedule.`,
			ko: `아침에 개운하지 못한 것은 수면 시간이 아니라, 수면 주기의 어느 단계에서 깨느냐의 문제일 수 있습니다.

## 수면 주기 이해

각 주기는 약 **90분**이며 다음으로 구성됩니다:

### 1단계: 얕은 수면 (5–10분)
각성에서 수면으로 전환, 쉽게 깰 수 있음

### 2단계: 얕은 수면 (20분)
심박수 감소, 체온 하강

### 3단계: 깊은 수면 (20–40분)
가장 깨기 어려움, 신체 복구 및 재생, 성장 호르몬 분비

### REM 수면 (10–60분)
생생한 꿈, 기억 정리, 감정 처리

## 최적의 수면 시간

### 연령별
| 연령대 | 권장 수면 |
|--------|---------|
| 청소년 (14–17) | 8–10시간 |
| 성인 (18–64) | 7–9시간 |
| 고령자 (65+) | 7–8시간 |

### 최적의 기상 시간 계산
오전 7시에 일어나야 한다면 (잠들기까지 약 15분 고려):

| 취침 시간 | 주기 수 | 총 수면 |
|----------|---------|---------|
| 오후 11:15 | 5주기 | 7.5시간 |
| 오후 9:45 | 6주기 | 9시간 |

## 더 나은 수면을 위한 팁

1. **일정한 스케줄**: 매일 같은 시간에 자고 일어나기
2. **시원한 방**: 18–20°C가 최적
3. **어두운 환경**: 암막 커튼 사용
4. **스크린 금지**: 취침 1시간 전 블루라이트 차단
5. **카페인 차단**: 오후 2시 이후 카페인 금지
6. **수면 루틴**: 취침 30분 전 이완 활동

시간 계산기를 사용하여 이상적인 수면 스케줄을 계획해 보세요.`,
			ja: `朝すっきり起きられないのは、睡眠時間ではなく、睡眠サイクルのどの段階で起きるかの問題かもしれません。

## 睡眠サイクルの理解

各サイクルは約**90分**で構成されます：
- ステージ1：浅い睡眠（5-10分）
- ステージ2：浅い睡眠（20分）
- ステージ3：深い睡眠（20-40分）— 体の修復と再生
- REM睡眠（10-60分）— 記憶の整理

## 最適な起床時間

午前7時起きの場合（入眠まで約15分）：
- 23:15就寝 → 5サイクル → 7.5時間
- 21:45就寝 → 6サイクル → 9時間

## より良い睡眠のヒント

1. 一定のスケジュール
2. 涼しい部屋（18-20°C）
3. 暗い環境
4. 就寝1時間前にブルーライトカット
5. 午後2時以降カフェイン禁止

時間計算機で理想的な睡眠スケジュールを計画しましょう。`,
			zh: `早上起来昏昏沉沉往往不是睡眠时间的问题，而是在睡眠周期的哪个阶段醒来。

## 了解睡眠周期

每个周期约**90分钟**：
- 第1阶段：浅睡眠（5-10分钟）
- 第2阶段：浅睡眠（20分钟）
- 第3阶段：深睡眠（20-40分钟）
- REM睡眠（10-60分钟）

## 最佳起床时间

如果需要早上7点起床（考虑约15分钟入睡时间）：
- 23:15入睡 → 5个周期 → 7.5小时
- 21:45入睡 → 6个周期 → 9小时

## 改善睡眠的建议

1. 固定作息时间
2. 凉爽的房间（18-20°C）
3. 黑暗环境
4. 睡前1小时不看屏幕
5. 下午2点后不摄入咖啡因

使用时间计算器规划理想的睡眠时间表。`,
			es: `Despertar aturdido a menudo no se trata de cuánto duerme, sino de cuándo despierta dentro de su ciclo de sueño.

## Ciclos de sueño

Cada ciclo dura aproximadamente **90 minutos**:
- Etapa 1-2: Sueño ligero
- Etapa 3: Sueño profundo (reparación corporal)
- REM: Sueños vívidos, consolidación de memoria

## Horarios óptimos

Si necesita despertar a las 7:00 AM:
- Acostarse a las 11:15 PM → 5 ciclos → 7.5 horas
- Acostarse a las 9:45 PM → 6 ciclos → 9 horas

## Consejos

1. Horario constante
2. Habitación fresca (18-20°C)
3. Sin pantallas 1 hora antes de dormir

Use nuestra calculadora de tiempo para planificar su horario de sueño ideal.`
		},
		date: '2025-01-25',
		category: 'health'
	},
	{
		slug: 'walking-distance-calories',
		title: {
			en: 'Walking Distance and Calorie Burn: A Complete Guide',
			ko: '걷기 거리별 칼로리 소모: 완벽 가이드',
			ja: 'ウォーキング距離別カロリー消費ガイド',
			zh: '步行距离与卡路里消耗完全指南',
			es: 'Distancia caminando y quema de calorías: guía completa'
		},
		description: {
			en: 'Find out how many calories you burn walking different distances and speeds, with practical tips.',
			ko: '다양한 거리와 속도로 걸을 때 소모되는 칼로리를 알아보고 실용적인 팁을 확인하세요.',
			ja: '様々な距離と速度で歩いたときのカロリー消費量と実用的なヒントを紹介します。',
			zh: '了解以不同距离和速度步行时消耗的卡路里，以及实用技巧。',
			es: 'Descubra cuántas calorías quema caminando a diferentes distancias y velocidades.'
		},
		content: {
			en: `Walking is the most accessible form of exercise. Here is exactly how many calories it burns.

## Calorie Burn by Distance (70 kg / 154 lb person)

| Distance | Moderate (5 km/h) | Brisk (6.5 km/h) | Fast (8 km/h) |
|----------|-------------------|-------------------|----------------|
| 1 km | ~50 cal | ~55 cal | ~65 cal |
| 3 km | ~150 cal | ~165 cal | ~195 cal |
| 5 km | ~250 cal | ~275 cal | ~325 cal |
| 10 km | ~500 cal | ~550 cal | ~650 cal |

## The Simple Calorie Formula

**Calories = Body weight (kg) × Distance (km) × 0.72**

This gives a rough estimate for moderate-pace walking.

Adjustments:
- Brisk walking: multiply by 1.1
- Uphill: multiply by 1.5–2.0
- Carrying weight (backpack): multiply by 1.1–1.3

## Steps to Distance Conversion

Average step length varies by height:
- **150 cm tall**: ~60 cm step → 1,667 steps/km
- **170 cm tall**: ~70 cm step → 1,429 steps/km
- **185 cm tall**: ~77 cm step → 1,299 steps/km

### Common Step Goals
| Steps | Approximate Distance | Calories (70 kg) |
|-------|---------------------|------------------|
| 5,000 | ~3.5 km | ~175 cal |
| 7,500 | ~5.3 km | ~263 cal |
| 10,000 | ~7.0 km | ~350 cal |
| 15,000 | ~10.5 km | ~525 cal |

## Walking for Weight Loss

To lose 0.5 kg per week through walking alone:
- Need ~500 cal/day deficit
- That is roughly 10 km of walking per day (70 kg person)
- More realistic: combine 5 km walking with dietary changes

## Tips to Burn More Calories While Walking

1. **Increase pace**: Brisk walking burns 10–20% more
2. **Add incline**: Hills or treadmill incline
3. **Use arms**: Pump your arms actively
4. **Interval walking**: Alternate 3 min fast / 2 min moderate
5. **Add weight**: Weighted vest (not ankle weights)
6. **Walk after meals**: Improves blood sugar control too

Use our unit converter for distance and calorie calculations.`,
			ko: `걷기는 가장 접근하기 쉬운 운동 형태입니다. 정확히 얼마나 칼로리를 태우는지 알아봅시다.

## 거리별 칼로리 소모 (70 kg 기준)

| 거리 | 보통 (5 km/h) | 빠른 걸음 (6.5 km/h) | 빠른 보행 (8 km/h) |
|------|-------------|---------------------|-------------------|
| 1 km | ~50 cal | ~55 cal | ~65 cal |
| 3 km | ~150 cal | ~165 cal | ~195 cal |
| 5 km | ~250 cal | ~275 cal | ~325 cal |
| 10 km | ~500 cal | ~550 cal | ~650 cal |

## 간단한 칼로리 공식

**칼로리 = 체중 (kg) × 거리 (km) × 0.72**

조정:
- 빠른 걸음: ×1.1
- 오르막: ×1.5–2.0
- 무게 휴대 (배낭): ×1.1–1.3

## 걸음 수 → 거리 변환

| 걸음 수 | 대략적 거리 | 칼로리 (70 kg) |
|---------|-----------|--------------|
| 5,000 | ~3.5 km | ~175 cal |
| 10,000 | ~7.0 km | ~350 cal |
| 15,000 | ~10.5 km | ~525 cal |

## 걷기로 체중 감량

주 0.5kg 감량을 걷기만으로:
- 하루 ~500cal 적자 필요
- 70kg 기준 하루 약 10km 걷기
- 현실적 방법: 5km 걷기 + 식단 조절 병행

## 더 많은 칼로리 소모 팁

1. **속도 올리기**: 빠른 걸음은 10–20% 더 소모
2. **경사 추가**: 언덕이나 트레드밀 경사
3. **팔 사용**: 적극적으로 팔 흔들기
4. **인터벌 걷기**: 빠르게 3분 / 보통 2분 반복
5. **식후 걷기**: 혈당 조절에도 도움

단위 변환기로 거리와 칼로리를 계산해 보세요.`,
			ja: `ウォーキングは最もアクセスしやすい運動形態です。どれだけカロリーを消費するか見てみましょう。

## 距離別カロリー消費（70 kg基準）

| 距離 | 普通（5 km/h）| 速歩（6.5 km/h）|
|------|-------------|---------------|
| 1 km | ~50 cal | ~55 cal |
| 5 km | ~250 cal | ~275 cal |
| 10 km | ~500 cal | ~550 cal |

## 簡単なカロリー公式

**カロリー = 体重（kg）× 距離（km）× 0.72**

## 歩数目標

| 歩数 | おおよその距離 | カロリー（70 kg）|
|------|-------------|---------------|
| 5,000 | ~3.5 km | ~175 cal |
| 10,000 | ~7.0 km | ~350 cal |

## より多くのカロリーを消費するコツ

1. ペースを上げる
2. 坂道を追加
3. 腕を積極的に振る
4. インターバルウォーキング

単位変換ツールで距離とカロリーを計算しましょう。`,
			zh: `步行是最容易获得的运动形式。让我们看看它到底消耗多少卡路里。

## 按距离计算卡路里（70 kg基准）

| 距离 | 中等（5 km/h）| 快走（6.5 km/h）|
|------|-------------|---------------|
| 1 km | ~50 cal | ~55 cal |
| 5 km | ~250 cal | ~275 cal |
| 10 km | ~500 cal | ~550 cal |

## 简单卡路里公式

**卡路里 = 体重（kg）× 距离（km）× 0.72**

## 步数目标

| 步数 | 大约距离 | 卡路里（70 kg）|
|------|---------|--------------|
| 5,000 | ~3.5 km | ~175 cal |
| 10,000 | ~7.0 km | ~350 cal |

## 消耗更多卡路里的技巧

1. 提高速度
2. 增加坡度
3. 积极摆臂
4. 间歇步行

使用单位转换器计算距离和卡路里。`,
			es: `Caminar es la forma de ejercicio más accesible. Veamos exactamente cuántas calorías quema.

## Calorías por distancia (70 kg)

| Distancia | Moderado (5 km/h) | Rápido (6.5 km/h) |
|-----------|-------------------|-------------------|
| 1 km | ~50 cal | ~55 cal |
| 5 km | ~250 cal | ~275 cal |
| 10 km | ~500 cal | ~550 cal |

## Fórmula simple

**Calorías = Peso (kg) × Distancia (km) × 0.72**

## Metas de pasos

| Pasos | Distancia aprox. | Calorías (70 kg) |
|-------|-----------------|-----------------|
| 5,000 | ~3.5 km | ~175 cal |
| 10,000 | ~7.0 km | ~350 cal |

Use nuestro convertidor de unidades para cálculos de distancia y calorías.`
		},
		date: '2025-01-24',
		category: 'health'
	},
	{
		slug: 'mortgage-affordability',
		title: {
			en: 'Mortgage Affordability: How Much House Can You Afford?',
			ko: '주택담보대출 감당 능력 분석: 얼마짜리 집을 살 수 있을까?',
			ja: '住宅ローン: いくらの家が買える？',
			zh: '房贷承受能力：您能买得起多少钱的房子？',
			es: 'Asequibilidad hipotecaria: ¿cuánta casa puede pagar?'
		},
		description: {
			en: 'Calculate how much home you can afford based on income, debt, and current mortgage rates.',
			ko: '소득, 부채, 현재 대출 금리를 기반으로 감당 가능한 주택 가격을 계산하세요.',
			ja: '収入、負債、現在のローン金利に基づいて購入可能な住宅価格を計算しましょう。',
			zh: '根据收入、债务和当前贷款利率计算您能负担的房价。',
			es: 'Calcule cuánta casa puede pagar según sus ingresos, deudas y tasas hipotecarias actuales.'
		},
		content: {
			en: `Buying a home is likely the biggest financial decision you will make. Here is how to figure out what you can afford.

## The Key Rules

### 28/36 Rule
- **28%**: Monthly housing costs should not exceed 28% of gross monthly income
- **36%**: Total debt payments should not exceed 36% of gross monthly income

### Example
Gross monthly income: $6,000
- Max housing cost: $6,000 × 28% = $1,680/month
- Max total debt: $6,000 × 36% = $2,160/month
- If you have $400/month in other debt: max housing = $1,760/month

## What Is Included in "Housing Cost"?

**PITI**: Principal + Interest + Taxes + Insurance

| Component | Typical % of Payment |
|-----------|---------------------|
| Principal + Interest | 65–75% |
| Property Tax | 10–15% |
| Homeowner's Insurance | 3–5% |
| PMI (if <20% down) | 5–10% |

## How Down Payment Affects Affordability

| Down Payment | Effect |
|-------------|--------|
| 5% | Requires PMI, higher monthly payments |
| 10% | May still need PMI |
| 20% | No PMI, lower monthly payments |
| 30%+ | Lowest payments, strongest offer |

## Korean Housing Market Considerations

### LTV (Loan-to-Value) Limits
- Regulated area: 40–50% LTV
- Non-regulated area: Up to 70% LTV
- This means larger down payments required in Korea

### DSR (Debt Service Ratio)
- Total debt payments must not exceed 40% of annual income
- Includes ALL loans, not just the mortgage

## Hidden Costs to Budget For

1. **Closing costs**: 2–5% of purchase price
2. **Moving expenses**: ₩500K–2M
3. **Maintenance reserve**: 1–2% of home value annually
4. **Furniture and appliances**: Budget varies widely
5. **Acquisition tax**: 1–3% (Korea)

## Affordability Calculator Approach

1. Calculate 28% of gross monthly income
2. Subtract property tax estimate (÷12)
3. Subtract insurance estimate (÷12)
4. Remaining amount = available for principal + interest
5. Use mortgage tables to find the home price this supports

Use our loan calculator to model different mortgage scenarios.`,
			ko: `주택 구매는 아마도 인생에서 가장 큰 재정적 결정일 것입니다. 감당 가능한 금액을 파악하는 방법을 알아봅시다.

## 핵심 규칙

### 28/36 규칙
- **28%**: 월 주거비가 월 총소득의 28%를 넘지 않아야 합니다
- **36%**: 총 부채 상환금이 월 총소득의 36%를 넘지 않아야 합니다

### 예시
월 총소득: 500만원
- 최대 주거비: 500만 × 28% = 140만원/월
- 최대 총 부채: 500만 × 36% = 180만원/월

## 한국 주택 시장 고려사항

### LTV (담보인정비율)
- 규제 지역: 40–50%
- 비규제 지역: 최대 70%
- 한국에서는 더 큰 자기자본이 필요합니다

### DSR (총부채원리금상환비율)
- 모든 대출의 원리금 상환액이 연소득의 40%를 넘지 않아야 함
- 주택담보대출뿐 아니라 모든 대출 포함

## 숨겨진 비용

1. **취득세**: 매매가의 1–3%
2. **중개 수수료**: 0.3–0.9%
3. **이사 비용**: 50–200만원
4. **수리 적립금**: 주택 가치의 연 1–2%
5. **가구 및 가전**: 예산 폭넓음

## 감당 능력 계산 방법

1. 월 총소득의 28% 계산
2. 재산세 추정치 차감
3. 보험 추정치 차감
4. 남은 금액 = 원금 + 이자에 사용 가능
5. 대출 테이블로 이 금액이 지원하는 주택 가격 산출

대출 계산기를 사용하여 다양한 모기지 시나리오를 모델링해 보세요.`,
			ja: `住宅購入はおそらく人生で最大の財務決定です。購入可能な金額を把握する方法を学びましょう。

## 基本ルール

### 28/36ルール
- **28%**：月々の住居費が月収の28%を超えないこと
- **36%**：総債務返済額が月収の36%を超えないこと

## 住宅費に含まれるもの

元本 + 利息 + 固定資産税 + 保険

## 頭金の影響

| 頭金 | 効果 |
|------|------|
| 10% | 高い月々の支払い |
| 20% | バランスの取れた支払い |
| 30%+ | 最も低い支払い |

## 隠れたコスト

1. 仲介手数料
2. 引っ越し費用
3. 修繕積立金
4. 家具・家電
5. 不動産取得税

ローン計算機で様々なシナリオをシミュレーションしましょう。`,
			zh: `买房可能是您一生中最大的财务决定。让我们看看如何确定您能负担的金额。

## 关键规则

### 28/36规则
- **28%**：每月住房成本不应超过月总收入的28%
- **36%**：总债务还款不应超过月总收入的36%

## 首付的影响

| 首付 | 效果 |
|------|------|
| 10% | 较高月供 |
| 20% | 平衡的月供 |
| 30%+ | 最低月供 |

## 隐藏成本

1. 交易费用 / 2. 搬家费 / 3. 维修储备金 / 4. 家具家电 / 5. 契税

使用贷款计算器模拟不同的房贷方案。`,
			es: `Comprar una casa es probablemente la decisión financiera más grande que tomará.

## La regla 28/36

- **28%**: Costos de vivienda no deben exceder el 28% del ingreso bruto mensual
- **36%**: Pagos totales de deuda no deben exceder el 36%

## Efecto del enganche

| Enganche | Efecto |
|----------|--------|
| 10% | Pagos mensuales más altos |
| 20% | Pagos equilibrados |
| 30%+ | Pagos más bajos |

## Costos ocultos

1. Costos de cierre (2-5%)
2. Gastos de mudanza
3. Reserva de mantenimiento
4. Muebles y electrodomésticos

Use nuestra calculadora de préstamos para modelar diferentes escenarios hipotecarios.`
		},
		date: '2025-01-23',
		category: 'finance'
	},
	{
		slug: 'inflation-purchasing-power',
		title: {
			en: 'Inflation and Purchasing Power: Understanding Your Money\'s Real Value',
			ko: '인플레이션과 구매력: 내 돈의 실제 가치 이해하기',
			ja: 'インフレと購買力：お金の本当の価値を理解する',
			zh: '通货膨胀与购买力：了解您资金的真实价值',
			es: 'Inflación y poder adquisitivo: entendiendo el valor real de su dinero'
		},
		description: {
			en: 'Learn how inflation erodes purchasing power and strategies to protect your savings over time.',
			ko: '인플레이션이 구매력을 어떻게 침식하는지, 저축을 보호하는 전략을 알아보세요.',
			ja: 'インフレが購買力をどう侵食するか、貯蓄を守る戦略を学びましょう。',
			zh: '了解通货膨胀如何侵蚀购买力以及保护储蓄的策略。',
			es: 'Aprenda cómo la inflación erosiona el poder adquisitivo y estrategias para proteger sus ahorros.'
		},
		content: {
			en: `Inflation is the silent tax that makes your money worth less every year.

## How Inflation Works

Inflation measures the rate at which prices increase over time. At 3% annual inflation:
- $100 today = $97 purchasing power next year
- $100 today = $74 purchasing power in 10 years
- $100 today = $55 purchasing power in 20 years

## The Rule of 72 for Inflation

**72 / inflation rate = years for prices to double**

- At 2% inflation: prices double in 36 years
- At 3% inflation: prices double in 24 years
- At 5% inflation: prices double in 14.4 years
- At 7% inflation: prices double in ~10 years

## Real vs Nominal Returns

Your investment returns must beat inflation to actually grow your wealth.

| | Nominal Return | Inflation | Real Return |
|--|---------------|-----------|------------|
| Savings account | 2% | 3% | -1% (losing money!) |
| Bonds | 5% | 3% | 2% |
| Stock market (avg) | 10% | 3% | 7% |

## Inflation's Impact on Savings

$100,000 in a bank account at 1% interest with 3% inflation:

| Year | Nominal Value | Real Purchasing Power |
|------|-------------|----------------------|
| 0 | $100,000 | $100,000 |
| 5 | $105,101 | $90,855 |
| 10 | $110,462 | $82,535 |
| 20 | $122,019 | $68,123 |

You technically have MORE money, but it buys LESS.

## Strategies to Beat Inflation

### 1. Invest in Equities
Stocks historically return 7–10% annually, outpacing inflation.

### 2. Real Estate
Property values and rents tend to rise with inflation.

### 3. Inflation-Protected Securities
- US: TIPS (Treasury Inflation-Protected Securities)
- Korea: 물가연동국채

### 4. Commodities
Gold, oil, and agricultural products often rise with inflation.

### 5. Increase Your Income
Skills development and career advancement typically outpace inflation.

## What NOT to Do
- Keep large amounts in low-interest savings accounts
- Stuff cash under your mattress
- Ignore inflation when retirement planning
- Assume past inflation rates will continue unchanged

Use our percentage calculator to compute inflation-adjusted values.`,
			ko: `인플레이션은 매년 돈의 가치를 줄이는 보이지 않는 세금입니다.

## 인플레이션의 작동 원리

인플레이션은 시간에 따른 물가 상승률을 측정합니다. 연 3% 인플레이션 기준:
- 오늘의 100만원 = 내년 97만원의 구매력
- 오늘의 100만원 = 10년 후 74만원의 구매력
- 오늘의 100만원 = 20년 후 55만원의 구매력

## 72의 법칙 (인플레이션용)

**72 / 인플레이션율 = 물가가 두 배가 되는 기간**

- 2% 인플레이션: 36년 만에 물가 두 배
- 3% 인플레이션: 24년 만에 물가 두 배
- 5% 인플레이션: 14.4년 만에 물가 두 배

## 실질 수익률 vs 명목 수익률

투자 수익률이 인플레이션을 이겨야 실제로 부가 늘어납니다.

| | 명목 수익률 | 인플레이션 | 실질 수익률 |
|--|-----------|----------|-----------|
| 예금 | 2% | 3% | -1% (손실!) |
| 채권 | 5% | 3% | 2% |
| 주식 (평균) | 10% | 3% | 7% |

## 인플레이션이 저축에 미치는 영향

은행 계좌에 1억원 (이자 1%, 인플레이션 3%):

| 년 | 명목 가치 | 실질 구매력 |
|---|---------|-----------|
| 0 | 1억원 | 1억원 |
| 10 | 1.1억원 | 8,254만원 |
| 20 | 1.22억원 | 6,812만원 |

명목상 더 많은 돈이지만, 살 수 있는 것은 더 적습니다.

## 인플레이션 대응 전략

### 1. 주식 투자
주식은 역사적으로 연 7–10% 수익, 인플레이션을 능가합니다.

### 2. 부동산
부동산 가치와 임대료는 인플레이션과 함께 상승하는 경향이 있습니다.

### 3. 물가연동 증권
물가연동국채로 인플레이션에 직접 연동된 수익 확보

### 4. 소득 증가
기술 개발과 커리어 발전이 일반적으로 인플레이션을 능가합니다.

## 하지 말아야 할 것
- 저금리 예금에 큰 금액 보관
- 현금을 매트리스 밑에 숨기기
- 은퇴 계획 시 인플레이션 무시

퍼센트 계산기를 사용하여 인플레이션 조정 가치를 계산해 보세요.`,
			ja: `インフレは毎年お金の価値を減らす見えない税金です。

## インフレの仕組み

年3%のインフレの場合：
- 今日の100万円 = 来年97万円の購買力
- 今日の100万円 = 10年後74万円の購買力

## 72の法則（インフレ用）

**72 / インフレ率 = 物価が2倍になる年数**
- 2%：36年 / 3%：24年 / 5%：14.4年

## 実質リターン vs 名目リターン

| | 名目リターン | インフレ | 実質リターン |
|--|-----------|---------|-----------|
| 預金 | 1% | 3% | -2%（損失！）|
| 株式（平均）| 10% | 3% | 7% |

## インフレ対策

1. 株式投資：歴史的に年7-10%のリターン
2. 不動産：インフレと共に価値が上昇
3. インフレ連動債
4. 収入を増やす

パーセント計算機でインフレ調整後の価値を計算しましょう。`,
			zh: `通货膨胀是每年默默降低您资金价值的隐形税。

## 通货膨胀如何运作

年3%通胀率下：
- 今天的100元 = 明年97元的购买力
- 今天的100元 = 10年后74元的购买力

## 72法则（通胀版）

**72 / 通胀率 = 物价翻倍的年数**
- 2%：36年 / 3%：24年 / 5%：14.4年

## 实际回报 vs 名义回报

| | 名义回报 | 通胀 | 实际回报 |
|--|--------|------|--------|
| 存款 | 2% | 3% | -1%（亏损！）|
| 股票（平均）| 10% | 3% | 7% |

## 对抗通胀的策略

1. 股票投资
2. 房地产
3. 通胀保值债券
4. 增加收入

使用百分比计算器计算通胀调整后的价值。`,
			es: `La inflación es el impuesto silencioso que hace que su dinero valga menos cada año.

## Cómo funciona

Con 3% de inflación anual:
- $100 hoy = $74 de poder adquisitivo en 10 años
- $100 hoy = $55 en 20 años

## La Regla del 72

**72 / tasa de inflación = años para que los precios se dupliquen**
- Al 2%: 36 años / Al 3%: 24 años / Al 5%: 14.4 años

## Estrategias para superar la inflación

1. Invertir en acciones (históricamente 7-10% anual)
2. Bienes raíces
3. Valores protegidos contra la inflación
4. Aumentar sus ingresos

Use nuestra calculadora de porcentajes para calcular valores ajustados por inflación.`
		},
		date: '2025-01-22',
		category: 'finance'
	},
	{
		slug: 'meal-planning-on-budget',
		title: { en: 'Meal Planning on a Budget', ko: '예산 내 식단 계획' },
		description: { en: 'Cut grocery costs without giving up nutrition or variety.', ko: '영양과 다양성을 포기하지 않고 식료품 비용 절감.' },
		content: {
			en: `Meal planning is the highest-leverage habit for cutting food costs. Without it, you buy ingredients you don't use and end up ordering takeout because nothing thaws in time.

## Pick a Planning Cadence

Weekly works for most households. Plan dinners explicitly; let lunches use leftovers. Pick a fixed day (Saturday morning) when you sit down with a coffee and the calendar.

## Build Around Sales

Check the weekly grocery flyer before deciding meals. Build dinners around what's discounted: chicken thighs at $1.99/lb means three meals featuring chicken that week.

## The 5-2 Rule

Plan five real dinners, leave two slots open for leftovers, takeout, or a "use what's in the fridge" night. This prevents food waste and gives flexibility for unexpected days.

## Cheap Protein Anchors

- Eggs: 25 cents each, complete protein, infinite recipes
- Dried beans: 50 cents per pound, 8 servings
- Chicken thighs: cheaper and more flavorful than breasts
- Canned tuna and sardines: shelf-stable, omega-3
- Tofu and tempeh: cheap when bought from Asian groceries

## Bulk Staples

Rice, oats, pasta, dried beans, and frozen vegetables form the cheap backbone. A $20 sack of rice lasts a single person 3+ months.

## Shop the Perimeter

Produce, dairy, meat, and eggs sit on the perimeter of most stores. Center aisles are mostly processed food at higher cost per nutrient. Spend 80% of grocery time and budget on the perimeter.

## Track and Adjust

For the first month, keep receipts and total what you spent. Most households over-spend on snacks and beverages. Cutting just those by 50% often saves $50-100/month.

## Sample Week ($60-80 for two people)

- Mon: rice + bean burrito bowls
- Tue: roast chicken thighs + roasted veg
- Wed: chicken pasta with leftover thighs
- Thu: omelet + toast
- Fri: tuna pasta or fried rice (fridge clean-out)

For broader money management see [household budget 50/30/20](/blog/household-budget-50-30-20).`,
			ko: `식단 계획은 식비 절감에 가장 효과적인 습관입니다. 없으면 안 쓸 재료를 사고 결국 배달을 시키게 됩니다.

## 계획 주기

대부분 가정에 주간이 적합. 저녁만 명시적 계획, 점심은 남은 것 활용.

## 할인 중심

주간 전단지 확인 후 메뉴 결정. 할인 품목 중심으로 그 주 식단 구성.

## 5-2 규칙

5끼 진짜 저녁 + 2끼 자유(남은 것, 배달, "냉장고 비우기"). 음식 낭비 방지와 유연성.

## 저렴한 단백질 앵커

- 계란
- 말린 콩
- 닭 허벅지
- 캔 참치/정어리
- 두부/템페

## 대량 주식

쌀, 귀리, 파스타, 콩, 냉동 채소.

## 매장 둘레 쇼핑

농산물, 유제품, 육류, 계란 = 둘레. 중앙 통로는 가공식품 위주.

## 추적과 조정

첫 달 영수증 모아 총액 계산. 간식과 음료 50% 컷이면 월 $50-100 절감.

다른 자금 관리는 [household budget 50/30/20](/blog/household-budget-50-30-20) 참고.`
		},
		date: '2026-04-30', category: 'lifestyle'
	},
	{
		slug: 'daily-water-intake-by-age',
		title: { en: 'Daily Water Intake by Age', ko: '연령별 일일 수분 섭취량' },
		description: { en: 'How much water you actually need varies by age, body size, and activity.', ko: '실제로 필요한 물의 양은 연령, 체격, 활동에 따라 다릅니다.' },
		content: {
			en: `"Drink 8 glasses a day" oversimplifies hydration. Real needs vary widely by individual.

## Baseline by Age

US National Academies guidelines (total water from all sources, including food):

- Infants 0-6 months: 0.7 L (from milk)
- Infants 7-12 months: 0.8 L
- Children 1-3: 1.3 L
- Children 4-8: 1.7 L
- Boys 9-13: 2.4 L / Girls 9-13: 2.1 L
- Men 14+: 3.7 L / Women 14+: 2.7 L

About 20% comes from food. Pure drinking water target: roughly 2.5 L for men, 2 L for women.

## Adjustments

- **Hot climate or sweating**: add 0.5-1 L per hour of activity
- **Pregnancy**: add ~0.3 L
- **Breastfeeding**: add ~0.7 L
- **Fever, vomiting, diarrhea**: add to replace losses
- **High altitude**: increased respiration loses water faster

## Signs You Need More

- Dark yellow urine (target pale straw color)
- Dry mouth or lips
- Headache without other cause
- Fatigue or dizziness
- Less than 4-6 trips to the bathroom per day

## Signs You're Drinking Too Much

Hyponatremia (low blood sodium) is rare but real. Endurance athletes drinking only water during long events have died. Symptoms: nausea, confusion, swelling. Drink to thirst plus electrolytes for events over 2 hours.

## Caffeine and Alcohol

Both are mildly diuretic but coffee and tea still net hydrate. Alcohol nets dehydrates substantially; alternate with water.

## Hydration Beyond Water

- Soup and broth
- Watermelon, cucumber, oranges (90%+ water)
- Yogurt and milk
- Herbal tea

## Practical System

- Glass of water on waking
- Refillable bottle on desk
- Glass with each meal
- Extra during workouts

For activity tracking see [10000 steps myth fact](/blog/10000-steps-myth-fact).`,
			ko: `"하루 8잔" 권고는 너무 단순화. 실제 요구량은 개인차가 큽니다.

## 연령별 기준 (미국 가이드, 음식 포함 총량)

- 0-6개월: 0.7L
- 1-3세: 1.3L
- 9-13세 남: 2.4L / 여: 2.1L
- 14세+ 남: 3.7L / 여: 2.7L

음식에서 약 20%. 순수 음용수 목표: 남 약 2.5L, 여 약 2L.

## 조정

- 더위/땀: 활동 시간당 0.5-1L 추가
- 임신: +0.3L
- 수유: +0.7L
- 발열/구토/설사: 손실 보충
- 고도

## 부족 신호

- 짙은 노란색 소변
- 입/입술 건조
- 원인 없는 두통
- 피로/현기증
- 하루 4-6회 미만 화장실

## 과다 신호

저나트륨혈증은 드물지만 실재. 장시간 운동 시 물만 마시면 위험.

## 카페인/알코올

둘 다 약한 이뇨제. 커피/차는 순 수화 효과. 알코올은 탈수 효과 큼.

## 물 외 수화

수프, 수박/오이/오렌지(90%+ 수분), 요거트, 우유, 허브차.

## 실용 시스템

기상 시 한 잔, 책상에 보온병, 식사마다, 운동 중 추가.

활동 추적은 [10000 steps myth fact](/blog/10000-steps-myth-fact) 참고.`
		},
		date: '2026-04-29', category: 'health'
	},
	{
		slug: '10000-steps-myth-fact',
		title: { en: '10,000 Steps Myth and Fact', ko: '1만보 신화와 사실' },
		description: { en: 'Where the 10,000-step number came from and what science actually shows.', ko: '1만보 숫자의 유래와 과학이 실제로 보여주는 것.' },
		content: {
			en: `The 10,000-steps target is the most successful marketing campaign in fitness history. The number originated from a 1965 Japanese pedometer named "manpo-kei" — literally "10,000 steps meter." Marketing, not medicine.

## What Research Actually Shows

Large-scale 2019-2024 studies find:

- Mortality benefits start around 4,000 steps/day
- Steepest improvement curve between 4,000-7,500
- Diminishing returns after 7,500-8,000 for most adults
- Pace matters: brisk walking adds benefit beyond raw count
- For older adults (65+), benefits plateau closer to 6,000-7,000

A 2022 meta-analysis in Lancet Public Health pegged the optimal range at 8,000-10,000 for under-60, 6,000-8,000 for 60+.

## What Counts

A step is a step — vacuuming, walking the dog, climbing stairs all count. Tracking devices undercount housework slightly; they overcount when arms swing without locomotion.

## Beyond Steps

Steps measure volume, not intensity. The CDC adds:

- 150 minutes/week moderate activity (brisk walking, cycling)
- OR 75 minutes/week vigorous (running, intervals)
- Plus 2 sessions/week strength training

A sedentary office worker hitting 10,000 steps via short bursts misses most benefits compared to 8,000 with intervals.

## Sitting Is the Real Risk

Long sitting blocks (>2 hours) reduce insulin sensitivity even in active people. Break sitting every 30-60 minutes; a quick walk to fill water counts.

## Practical Targets

- Sedentary baseline: aim for 4,000-6,000
- General health: 7,000-9,000
- Weight loss support: 10,000+ (with calorie awareness)
- Older adults: 6,000-8,000 with focus on pace

## Tracking

Phones undercount when in pockets, overcount when shaken. Wrist trackers are usually within 5%. Pedometer apps are fine for trends; do not chase exact numbers.

## Behavior Change

Increase by 500-1,000 steps/week, not all at once. Pair with existing habits: park farther, walk while on calls, take stairs.

For desk worker mobility see [desk job stretching routine](/blog/desk-job-stretching-routine).`,
			ko: `1만보 목표는 피트니스 마케팅 역사상 가장 성공적인 캠페인. 1965년 일본 만보계 "만포케이"에서 유래 - 마케팅이지 의학 아님.

## 실제 연구

2019-2024 대규모 연구:
- 4,000보부터 사망률 혜택 시작
- 4,000-7,500이 가장 가파른 개선
- 7,500-8,000 이후 수확 체감
- 속도 중요
- 65세+ 6,000-7,000에서 플래토

2022 Lancet 메타분석: 60세 미만 8,000-10,000, 60세+ 6,000-8,000.

## 무엇이 카운트

청소, 산책, 계단 모두 카운트.

## 걸음을 넘어

CDC 추가:
- 주 150분 중강도 또는 75분 고강도
- 주 2회 근력 운동

## 앉아 있기가 진짜 위험

2시간+ 연속 앉기는 인슐린 민감도 감소. 30-60분마다 끊기.

## 실용 목표

- 좌식 베이스라인: 4,000-6,000
- 일반 건강: 7,000-9,000
- 체중 감량 지원: 10,000+
- 노인: 6,000-8,000

## 행동 변화

주당 500-1,000보씩 증가. 기존 습관과 페어링.

데스크 근로자 모빌리티: [desk job stretching routine](/blog/desk-job-stretching-routine).`
		},
		date: '2026-04-28', category: 'health'
	},
	{
		slug: 'intermittent-fasting-guide',
		title: { en: 'Intermittent Fasting: Practical Guide', ko: '간헐적 단식 실용 가이드' },
		description: { en: 'How IF works, common protocols, and who should not try it.', ko: 'IF 작동 원리, 일반적 프로토콜, 시도하지 말아야 할 사람.' },
		content: {
			en: `Intermittent fasting (IF) means restricting eating to specific windows. The popular interest exploded post-2015; the research has caught up with mixed but mostly positive findings.

## Common Protocols

- **16:8** — eat within an 8-hour window (e.g., 12-8 pm), fast 16 hours. Easiest to start.
- **18:6** — tighter window
- **OMAD** — one meal a day, ~22 hour fast
- **5:2** — eat normally 5 days, 500-600 calories on 2 non-consecutive days
- **Alternate-day** — full fast or low-cal every other day

## Why People Try It

- Simpler than tracking macros for many
- Mild calorie reduction without explicit dieting
- Fits busy mornings (skip breakfast naturally)
- Some report sharper focus mid-fast

## What Research Shows

- Modest weight loss similar to calorie restriction
- Some metabolic improvements (insulin sensitivity, fasting glucose)
- Mixed evidence on muscle mass preservation
- Cardiovascular markers improve in some studies, not others

The picture is "useful tool, not miracle."

## Who Should Avoid

- Pregnant or breastfeeding
- History of eating disorders
- Type 1 diabetes (without medical supervision)
- Children and teens
- Underweight individuals
- Anyone on medications requiring food

If you take prescription medications or have any chronic condition, consult a doctor before changing your eating pattern.

## How to Start

1. Push breakfast 1 hour later for a week
2. Add another hour each week
3. Land at 16:8 over 4 weeks
4. Maintain for at least a month before judging results

## During the Fast

- Water, plain coffee, plain tea: fine
- Cream/sugar in coffee: technically breaks fast
- Electrolytes (especially sodium and potassium): help with headaches and fatigue

## During the Eating Window

This is where most IF efforts fail. A 16:8 window of donuts and pizza is a 16:8 window of donuts and pizza. Eat normal meals: protein, vegetables, complex carbs.

## Common Pitfalls

- Overeating to compensate
- Insufficient protein leading to muscle loss
- Caffeine overuse to suppress hunger
- Social isolation around meals

## When to Stop

- Hair thinning
- Persistent fatigue beyond first 2 weeks
- Disordered eating thoughts emerging
- Loss of menstrual cycle
- Cold intolerance

For other lifestyle adjustments see [sleep debt recovery](/blog/sleep-debt-recovery).`,
			ko: `간헐적 단식(IF)은 특정 창에서만 먹는 것. 2015년 이후 인기 폭발, 연구는 혼합되지만 대체로 긍정적.

## 일반 프로토콜

- 16:8 — 8시간 식사창
- 18:6 — 더 좁은 창
- OMAD — 하루 한 끼
- 5:2 — 5일 정상, 2일 500-600칼로리
- 격일 단식

## 시도 이유

- 매크로 추적보다 단순
- 명시적 다이어트 없이 약한 칼로리 감소
- 바쁜 아침에 적합

## 연구 결과

칼로리 제한과 비슷한 체중 감소, 일부 대사 개선.

"유용한 도구, 기적 아님."

## 피해야 할 사람

임신/수유, 섭식 장애 이력, 1형 당뇨, 어린이/청소년, 저체중.

## 시작 방법

1. 1주일간 아침 1시간 미루기
2. 매주 1시간씩 추가
3. 4주에 16:8 도달
4. 결과 판단 전 최소 1개월 유지

## 단식 중

물, 블랙 커피/차 OK. 크림/설탕은 단식 깨짐. 전해질 도움.

## 흔한 함정

보상 과식, 단백질 부족, 카페인 남용, 식사 사회적 고립.

## 중단할 때

머리카락 빠짐, 2주 후에도 지속되는 피로, 섭식 장애 사고, 월경 중단, 추위 못 견딤.

다른 생활 습관: [sleep debt recovery](/blog/sleep-debt-recovery).`
		},
		date: '2026-04-27', category: 'health'
	},
	{
		slug: 'sleep-debt-recovery',
		title: { en: 'Sleep Debt Recovery', ko: '수면 빚 회복' },
		description: { en: 'You cannot fully repay sleep debt with one weekend. Here is what actually helps.', ko: '주말 하루로 수면 빚을 완전히 갚을 수 없습니다. 실제로 도움되는 것.' },
		content: {
			en: `Cumulative sleep loss adds up faster than people realize. Six hours per night for two weeks impairs cognitive function as much as 48 hours of total sleep deprivation, per Penn State research.

## What Sleep Debt Does

- Reaction time: equivalent to alcohol intoxication after 17 hours awake
- Memory consolidation: weakened
- Immune function: reduced
- Insulin sensitivity: drops noticeably
- Mood and judgment: degraded
- Long-term: linked to cardiovascular disease, diabetes, dementia

## You Cannot Fully Catch Up

A Saturday morning sleep-in feels great but does not fully reverse cognitive deficits. Recovery requires consistent extension over multiple weeks.

## Real Recovery Plan

1. Add 1-2 hours of sleep nightly for 2-3 weeks
2. Maintain wake time within ~1 hour across days
3. Allow ~10-14 days for sleep architecture to normalize
4. Avoid trying to "make up" all at once on weekends — this disrupts circadian rhythm

## Sleep Hygiene Basics

- Same wake time every day, including weekends
- Last caffeine before 2 pm (caffeine has a 6-hour half-life)
- No alcohol within 3 hours of bed (it suppresses REM)
- Cool bedroom (65-68°F / 18-20°C is optimal for most)
- Dark room (blackout curtains or eye mask)
- Phone out of bedroom

## Naps

Naps help. The science:
- 20 minutes: cognitive boost without grogginess
- 60-90 minutes: includes a full sleep cycle, deeper recovery
- Avoid 30-60 minutes: wake mid-deep-sleep, feel worse

Best time: 1-3 pm aligned with circadian dip.

## Tracking

A simple sleep log (time in bed, time asleep estimate, wake count) for 2 weeks reveals patterns. Wearables (Oura, Garmin, Apple Watch) approximate sleep stages but their accuracy varies; trends matter more than nightly precision.

## When to See a Doctor

- Snoring with witnessed pauses (possible sleep apnea)
- Excessive daytime sleepiness despite 8+ hours in bed
- Difficulty staying asleep multiple nights per week beyond 4 weeks
- Restless legs disturbing sleep

## Shift Workers and Travelers

The above assumes a standard schedule. Shift work and frequent timezone change require specialized strategies; consult sleep medicine resources.

For meditation and stress reduction see [meditation for beginners](/blog/meditation-for-beginners).`,
			ko: `누적 수면 부족은 생각보다 빨리 쌓입니다. 2주간 6시간/밤은 48시간 완전 수면 박탈만큼 인지 기능 손상 (Penn State).

## 수면 빚의 영향

반응 시간(17시간 깨면 음주 운전 수준), 기억 통합 약화, 면역 감소, 인슐린 민감도 저하, 기분/판단력 저하, 장기적으로 심혈관 질환/당뇨/치매 연관.

## 완전히 따라잡을 수 없음

토요일 늦잠은 기분 좋지만 인지 결손을 완전히 되돌리지 못함.

## 실제 회복 계획

1. 매일 1-2시간 추가 수면, 2-3주
2. 기상 시간 ~1시간 이내 일관성
3. 수면 구조 정상화에 10-14일
4. 주말에 한꺼번에 보충 시도 금지

## 수면 위생

매일 같은 기상 시간, 카페인 오후 2시 전, 알코올 취침 3시간 전, 시원한 침실 (18-20°C), 어두운 방, 휴대폰 침실 밖.

## 낮잠

20분 - 인지 부스트
60-90분 - 깊은 회복
30-60분 - 깊은 잠 중간에 깨서 더 나쁨

최적: 오후 1-3시.

## 추적

단순 수면 로그 2주가 패턴 드러냄. 웨어러블은 트렌드 위주.

## 의사 만날 때

코골이 + 호흡 정지, 8시간 자도 졸음, 4주 이상 잠들기/유지 어려움, 수면 방해 다리 불편.

명상/스트레스 감소: [meditation for beginners](/blog/meditation-for-beginners).`
		},
		date: '2026-04-26', category: 'health'
	},
	{
		slug: 'desk-job-stretching-routine',
		title: { en: 'Desk Job Stretching Routine', ko: '사무직 스트레칭 루틴' },
		description: { en: 'A 10-minute routine for shoulders, hips, and back that fits any workday.', ko: '어떤 근무일에도 맞는 어깨, 엉덩이, 등 10분 루틴.' },
		content: {
			en: `Desk work compresses hips, rounds shoulders, and tightens neck and lower back. A daily routine prevents the chronic pain that creeps up in your 30s.

## The 10-Minute Sequence

Do once daily, ideally mid-afternoon when stiffness peaks.

### 1. Cat-Cow (1 minute)

On hands and knees. Inhale, drop belly, look up. Exhale, round spine, tuck chin. 10 slow cycles. Mobilizes the entire spine.

### 2. Doorway Chest Stretch (1 minute each side)

Forearm against doorway, elbow at shoulder height. Step forward gently. Opens the chest tissue that shortens from typing.

### 3. Couch Stretch (1 minute each side)

Kneel on a cushion facing away from a couch. Place top of foot on the seat. Tuck pelvis. Strong hip flexor stretch — most desk workers desperately need this.

### 4. Pigeon Pose (1 minute each side)

From all fours, bring right shin forward parallel to the front of the mat. Slide left leg back. Sink hips toward the floor. Targets glutes and outer hip.

### 5. Thread the Needle (1 minute each side)

From hands and knees, slide right arm under left, lower right shoulder to floor. Releases the upper back and shoulders.

### 6. Forward Fold with Bent Knees (1 minute)

Stand, bend knees significantly, fold forward, let hands hang. Releases lower back and hamstrings without straining.

### 7. Neck Stretches (1 minute)

Slow chin-to-chest, ear-to-shoulder, look-over-shoulder. Hold each 20 seconds. Tight necks cause headaches.

## Throughout the Day

- Set a 30-minute timer to stand and walk
- Use voice calls as walking time
- Set monitor at eye level to avoid neck tilt
- Keep one foot off the floor while seated occasionally to release hip flexors

## Common Mistakes

- Holding stretches too briefly (under 30 seconds gains less)
- Bouncing into stretches (use static holds)
- Stretching cold first thing in the morning (warm up with light movement)
- Forcing through sharp pain (sharp = stop)

## Strengthening Matters Too

Stretching alone does not fix desk-induced posture. Add 2x weekly basic strength: rows, deadlifts, glute bridges, planks. Strength holds the gains stretching makes.

## Equipment-Free

This entire routine needs no equipment. A yoga mat helps but a carpeted floor works. Total cost: zero, total time: 10 minutes.

For workout planning ideas see [meditation for beginners](/blog/meditation-for-beginners) for breath work.`,
			ko: `책상 일은 엉덩이를 압박하고 어깨를 둥글게 하고 목과 허리를 굳힙니다. 일일 루틴이 30대에 슬금슬금 오는 만성 통증을 예방.

## 10분 시퀀스

일일 1회, 이상적으로 오후 중반.

### 1. 캣-카우 (1분)
손과 무릎. 숨 들이쉬며 배 내리고 위 보기, 내쉬며 척추 둥글게. 10회.

### 2. 도어웨이 가슴 스트레치 (좌우 각 1분)
팔뚝을 문틀에. 앞으로 살짝. 타이핑으로 짧아진 가슴 조직 열기.

### 3. 카우치 스트레치 (좌우 각 1분)
방석에 무릎 꿇고 소파 등지기. 발등을 자리에. 강한 고관절 굴근 스트레치.

### 4. 비둘기 자세 (좌우 각 1분)
사족 자세에서 오른 정강이 앞으로 평행. 왼쪽 다리 뒤로. 둔근/외측 엉덩이.

### 5. 스레드 더 니들 (좌우 각 1분)
사족 자세에서 오른팔 왼쪽 아래로 슬라이드. 어깨 바닥. 상부 등 풀기.

### 6. 무릎 굽힌 전굴 (1분)
서서 무릎 많이 굽히고 전굴. 손 늘어뜨림. 허리/햄스트링.

### 7. 목 스트레치 (1분)
턱→가슴, 귀→어깨, 어깨 너머 보기. 각 20초.

## 하루 종일

- 30분 타이머로 서기/걷기
- 음성 통화는 걷는 시간
- 모니터 눈높이로
- 가끔 한 발 바닥에서 떼기

## 흔한 실수

너무 짧게 잡기, 반동, 아침 아무것도 안 한 상태에서 스트레칭, 날카로운 통증 무시.

## 근력도 중요

스트레칭만으로 자세 안 고침. 주 2회 기본 근력: 로우, 데드리프트, 글루트 브릿지, 플랭크.

## 장비 없음

요가 매트 도움되지만 카펫 바닥도 OK. 총 비용 0, 총 시간 10분.

호흡 작업: [meditation for beginners](/blog/meditation-for-beginners).`
		},
		date: '2026-04-25', category: 'health'
	},
	{
		slug: 'vitamin-d-deficiency-signs',
		title: { en: 'Vitamin D Deficiency Signs', ko: '비타민 D 결핍 신호' },
		description: { en: 'Recognize symptoms of low vitamin D and what to do about it.', ko: '낮은 비타민 D 증상 인지와 대처법.' },
		content: {
			en: `Vitamin D deficiency affects roughly 1 billion people worldwide. Modern indoor life and sunscreen use have created a deficiency epidemic across all latitudes.

## Why It Matters

Vitamin D regulates calcium absorption and bone health, modulates immune function, supports muscle strength, and influences mood. Severe deficiency causes rickets in children and osteomalacia in adults.

## Common Signs

- Persistent fatigue
- Bone or muscle pain
- Frequent infections
- Slow wound healing
- Hair thinning
- Low mood, particularly seasonal
- Muscle weakness, especially in legs

These symptoms are nonspecific — many things cause them. Vitamin D deficiency is one possibility worth testing for.

## Who Is at Risk

- Living above 35° latitude in winter (limited UVB)
- Darker skin (more melanin reduces synthesis)
- Older adults (skin synthesizes less)
- Heavy sunscreen use
- Mostly indoor work and recreation
- Obesity (D is fat-soluble and sequestered)
- GI conditions reducing fat absorption (Crohn's, celiac)
- Some medications (steroids, some seizure meds)

## Testing

A simple blood test measures 25-hydroxyvitamin D. US/EU guidelines:

- Deficient: under 20 ng/mL (50 nmol/L)
- Insufficient: 20-30 ng/mL
- Sufficient: 30-50 ng/mL
- High: above 100 ng/mL (rare without supplements)

Test in late winter for the lowest expected reading.

## Sources

- **Sunlight**: 10-30 minutes midday on bare arms and legs, 2-3x weekly. Less effective in winter at high latitudes.
- **Fatty fish**: salmon, mackerel, sardines (400-1000 IU per serving)
- **Egg yolks** and liver (modest amounts)
- **Fortified foods**: milk, plant milks, cereal
- **Supplements**: D3 (cholecalciferol) is more effective than D2

## Supplementation

- Maintenance: 1,000-2,000 IU daily for most adults
- Correcting deficiency: 5,000-10,000 IU daily for 8-12 weeks under supervision, then maintenance
- Take with a fatty meal for absorption

The 4,000 IU/day "tolerable upper limit" is conservative; recent evidence supports higher safety margins. Above 10,000 IU long-term, monitor blood levels.

## When to See a Doctor

- Suspected deficiency despite supplementation
- Bone pain or fractures with low impact
- Unexplained muscle weakness
- Children with bowed legs or growth concerns

Self-supplementing is generally safe at 1,000-2,000 IU; higher doses warrant testing first.

## Cofactors

D works with magnesium and K2. A diet light in leafy greens and nuts may need magnesium supplementation alongside D.

For broader nutrition see [meal planning on budget](/blog/meal-planning-on-budget).`,
			ko: `비타민 D 결핍은 전 세계 약 10억 명에 영향. 현대 실내 생활과 자외선 차단제 사용으로 모든 위도에서 결핍 유행.

## 중요한 이유

칼슘 흡수와 골 건강, 면역 조절, 근력, 기분 영향. 심한 결핍은 아동에게 구루병, 성인에게 골연화증.

## 흔한 신호

- 지속적 피로
- 뼈/근육 통증
- 잦은 감염
- 느린 상처 치유
- 머리카락 가늘어짐
- 우울 (특히 계절성)
- 근력 약화 (특히 다리)

비특이적 증상이지만 검사 가치 있음.

## 위험군

35° 위도 이상 거주, 어두운 피부, 노인, 자외선 차단제 다용, 실내 위주, 비만, 위장 흡수 장애, 일부 약물.

## 검사

25-수산화비타민 D 혈액 검사:
- 결핍: 20 ng/mL 미만
- 부족: 20-30
- 충분: 30-50
- 과다: 100 이상

겨울 말 검사가 가장 낮은 예상 수치.

## 공급원

- 햇빛: 정오 팔다리 노출 10-30분, 주 2-3회
- 지방 어류: 연어, 고등어, 정어리
- 계란 노른자, 간
- 강화 식품
- 보충제: D3 (콜레칼시페롤)

## 보충

- 유지: 일일 1,000-2,000 IU
- 결핍 교정: 8-12주 일일 5,000-10,000 IU 감독 하에
- 지방 식사와 함께

## 의사 만날 때

보충 후에도 결핍 의심, 가벼운 충격에 골절, 원인 모를 근력 약화.

## 보조 인자

D는 마그네슘, K2와 작동.

영양 일반: [meal planning on budget](/blog/meal-planning-on-budget).`
		},
		date: '2026-04-24', category: 'health'
	},
	{
		slug: 'protein-intake-by-goal',
		title: { en: 'Protein Intake by Goal', ko: '목표별 단백질 섭취' },
		description: { en: 'How much protein you actually need depends on whether you train, age, and goals.', ko: '실제 필요한 단백질은 훈련 여부, 나이, 목표에 따라 다릅니다.' },
		content: {
			en: `The 0.8g/kg RDA is the minimum to prevent deficiency. Optimal intake for most goals is significantly higher.

## Targets by Goal

| Situation | Grams per kg bodyweight | Per pound |
|-----------|-------------------------|-----------|
| Sedentary minimum (RDA) | 0.8 | 0.36 |
| General health | 1.0-1.2 | 0.45-0.55 |
| Active lifestyle | 1.2-1.6 | 0.55-0.73 |
| Strength training | 1.6-2.2 | 0.73-1.0 |
| Cutting (preserve muscle) | 1.8-2.4 | 0.82-1.1 |
| Older adults (sarcopenia prevention) | 1.2-1.6 | 0.55-0.73 |

For a 70 kg (154 lb) lifter targeting muscle gain, that's 112-154g daily.

## Why More Than RDA

- Muscle protein synthesis maximizes around 1.6 g/kg
- Higher protein supports recovery from training
- Older adults need more to maintain muscle (anabolic resistance)
- Cutting calories without raising protein causes muscle loss

## Per-Meal Distribution

Spread intake across 3-5 meals at 25-40g each. Single doses above ~40g show diminishing per-meal anabolic returns. The "anabolic window" post-workout is far wider than the legacy 30-minute claim.

## Best Sources

| Source | Protein per serving |
|--------|---------------------|
| Chicken breast (4 oz) | 35g |
| Greek yogurt (1 cup) | 20g |
| Cottage cheese (1 cup) | 28g |
| Eggs (3 large) | 18g |
| Lentils (1 cup cooked) | 18g |
| Tofu (4 oz) | 12g |
| Whey protein (1 scoop) | 24g |

## Plant-Based

Plant proteins are usually lower in leucine, the trigger amino acid for muscle synthesis. Compensate with:

- Slightly higher total intake (10-20% more)
- Combine sources across the day (rice + beans, etc.)
- Add tofu, tempeh, seitan, and legume-heavy meals
- Consider pea or soy protein supplements

## Health Concerns

For healthy kidneys, 1.6-2.4 g/kg is well-tolerated long-term. Existing kidney disease requires medical guidance on protein intake. Hydrate adequately and increase fiber to balance.

## Practical System

- Target a protein source at every meal
- Use a tracking app for one week to baseline (most people undercount)
- Add a protein shake post-workout if intake falls short
- Prep protein in bulk: roast chicken, hard-boil eggs, cook lentils on Sunday

## Cost

Cheap high-protein:
- Eggs: ~$0.25 per 6g
- Chicken thighs (sale): ~$0.30 per 35g
- Lentils: ~$0.20 per 18g
- Greek yogurt (store brand): ~$1 per 20g

For meal prep see [lunch meal prep guide](/blog/lunch-meal-prep-guide).`,
			ko: `0.8g/kg RDA는 결핍 방지 최소량. 대부분 목표에서 최적은 훨씬 더 높음.

## 목표별 목표량

| 상황 | g/kg 체중 |
|-----|---------|
| 좌식 RDA | 0.8 |
| 일반 건강 | 1.0-1.2 |
| 활동적 생활 | 1.2-1.6 |
| 근력 운동 | 1.6-2.2 |
| 컷팅 (근육 유지) | 1.8-2.4 |
| 노인 (근감소 예방) | 1.2-1.6 |

70kg 리프터가 근육 증가 목표 = 112-154g/일.

## RDA 이상의 이유

근단백 합성 최대화 1.6 g/kg, 회복 지원, 노인 근육 유지, 컷팅 시 근손실 방지.

## 식사별 분배

3-5끼에 25-40g씩. 식사당 ~40g 초과 시 동화 수확 체감.

## 최고 공급원

| 공급원 | 1회분 단백질 |
|------|-----------|
| 닭가슴살(4oz) | 35g |
| 그릭요거트(1컵) | 20g |
| 코티지 치즈(1컵) | 28g |
| 계란(3개) | 18g |
| 렌틸(1컵) | 18g |
| 두부(4oz) | 12g |
| 웨이 프로틴(1스쿱) | 24g |

## 식물성

류신 낮음. 보상: 10-20% 더 섭취, 콩+쌀 조합, 두부/템페/세이탄.

## 건강 우려

건강한 신장에 1.6-2.4 g/kg 장기 OK. 신장병은 의료 지도.

## 실용 시스템

매끼 단백질, 1주 추적 (대부분 과소 평가), 부족하면 셰이크.

식단 준비: [lunch meal prep guide](/blog/lunch-meal-prep-guide).`
		},
		date: '2026-04-23', category: 'health'
	},
	{
		slug: 'screen-time-management',
		title: { en: 'Screen Time Management', ko: '스크린 타임 관리' },
		description: { en: 'Reduce mindless scrolling and reclaim hours per week.', ko: '무의식적 스크롤 감소, 주당 몇 시간 회수.' },
		content: {
			en: `The average smartphone user spends 4-5 hours daily on their phone. Most can recover 1-3 of those hours per week with simple changes.

## Audit First

Both iOS Screen Time and Android Digital Wellbeing track per-app usage and pickups. Look at:

- Total daily screen time
- Top 3 apps consuming time
- Number of pickups per day (often 100+)
- Notifications received

The numbers shock most people on first review.

## High-Leverage Changes

### 1. Disable notifications by default

Whitelist only what genuinely needs your attention: calls, texts, calendar. Everything else: off. This cuts pickups by 50%+ for most people.

### 2. Move attention apps to a folder on a second screen

Out of sight is mostly out of mind. Social and news apps off the home screen reduce reflexive opening.

### 3. Grayscale mode

iOS Settings → Accessibility → Display → Color Filters → Grayscale. The phone becomes visually less appealing. Many users report 20-30% time reduction.

### 4. Bedroom-free phone

Charge the phone in another room. Use a $10 alarm clock. Saves morning and evening scroll loops.

### 5. App timers

Most platforms let you set per-app daily limits. They are easy to bypass, but the friction itself reduces use.

## What Replaces the Time

You will not naturally fill recovered time well. Plan replacement activities:
- A book on the nightstand instead of the phone
- Walking shoes by the door
- Hobby supplies visible

Boredom triggers app opening; alternatives must be more visible than the phone.

## For Kids

Same principles, much stricter. Recommendations vary, but most pediatric guidance suggests:
- Under 18 months: video calls only
- 2-5 years: under 1 hour daily of high-quality content with adult co-viewing
- 6+: consistent limits, no devices in bedrooms

Modeling matters more than rules. Kids whose parents are on phones constantly absorb the same patterns.

## Work Phone vs Personal

If your job requires constant phone availability, separate work and personal devices. The cost of a second cheap phone is repaid in attention and sleep.

## Streaming and TV

Screen time isn't only phones. TV streaming auto-play, "next episode in 5 seconds," and infinite scrolls follow the same dopamine logic. Disable autoplay where possible.

## When to Get Help

If reducing screen time causes physical anxiety or you cannot sustain even modest changes for a week, behavioral therapy or counseling helps. Tech addiction is recognized clinically and treatable.

For broader habits see [digital detox strategies](/blog/digital-detox-strategies).`,
			ko: `평균 스마트폰 사용자는 일일 4-5시간. 대부분 간단한 변경으로 주당 1-3시간 회수 가능.

## 먼저 감사

iOS 스크린 타임, Android 디지털 웰빙으로 앱별 사용량과 픽업 추적.

## 고레버리지 변경

### 1. 알림 기본 비활성화
실제 필요한 것만 화이트리스트.

### 2. 주의 앱을 두 번째 화면 폴더로
시야에서 멀어지면 마음에서 멀어짐.

### 3. 그레이스케일 모드
iOS 설정 → 접근성 → 디스플레이 → 컬러 필터 → 그레이스케일.

### 4. 침실 휴대폰 금지
다른 방에서 충전. $10 알람 시계.

### 5. 앱 타이머
바이패스 쉬워도 마찰 자체가 사용 감소.

## 시간 대체

회수한 시간을 자연스럽게 잘 채우지 못함. 대체 활동 계획.
- 머리맡 책
- 문 앞 걷기 신발
- 보이는 취미 용품

## 아이들

훨씬 엄격. 18개월 미만 영상 통화만, 2-5세 양질 콘텐츠 1시간 미만, 6+ 일관된 한도.

모델링이 규칙보다 중요.

## 도움 필요할 때

스크린 타임 감소가 신체 불안 유발하거나 1주도 유지 못하면 행동 치료 도움.

광범위한 습관: [digital detox strategies](/blog/digital-detox-strategies).`
		},
		date: '2026-04-22', category: 'lifestyle'
	},
	{
		slug: 'meditation-for-beginners',
		title: { en: 'Meditation for Beginners', ko: '명상 입문' },
		description: { en: 'Start a sustainable practice without spiritual baggage or apps you forget.', ko: '영적 부담이나 잊어버리는 앱 없이 지속 가능한 연습 시작.' },
		content: {
			en: `Meditation has more peer-reviewed evidence than most lifestyle interventions for stress, focus, and sleep. The barrier for beginners is usually framing, not technique.

## What Meditation Actually Is

Repeatedly bringing attention back to a chosen anchor (breath, body sensation, sound). Each return is a "rep." Wandering mind is not failure — noticing the wander and returning IS the practice.

## A 5-Minute Starter

1. Sit upright in any comfortable position
2. Close eyes or soften gaze downward
3. Notice the breath without controlling it
4. Each time mind wanders, gently return to breath
5. Continue for 5 minutes

That's it. There is no "good" or "bad" session.

## Common Beginner Frustrations

- "I can't stop thinking" — that is not the goal. The goal is noticing thoughts, not eliminating them.
- "I keep falling asleep" — meditate sitting upright, eyes slightly open, earlier in the day.
- "Five minutes feels long" — start with 2 minutes for a week.
- "Nothing's happening" — benefits accumulate over weeks, not single sessions.

## Building the Habit

- Same time daily anchors the practice
- Right after waking or before bed are common
- Stack with existing habits: after coffee, before email
- 5 minutes daily beats 30 minutes weekly

## Tools That Help

- **Headspace, Calm, Insight Timer**: guided sessions and timers
- **Plain timer**: skip apps once you have the basic practice
- **Meditation cushion or chair**: posture matters less than people think; comfortable enough to sit still works

## Beyond Breath

After a few weeks, expand:

- Body scan: attention through body parts
- Loving-kindness: directed phrases (may you be well, etc.)
- Open awareness: noticing whatever arises
- Walking meditation: same attention, mobile

## What the Evidence Shows

8-12 week studies on Mindfulness-Based Stress Reduction (MBSR) consistently show:
- Reduced cortisol
- Lower self-reported anxiety
- Improved attention markers
- Better sleep quality
- Modest blood pressure reduction

Effects are real but modest. Meditation is not a substitute for therapy or medication when those are needed.

## When to Seek a Teacher

If you experience:
- Resurfacing trauma
- Dissociation
- Persistent confusion about practice

A qualified teacher (Vipassana centers, MBSR programs, secular trauma-informed teachers) helps. Meditation can surface buried material; not all practices are appropriate for all people unsupervised.

## Ten-Minute Goal

Most research used 20-45 minute daily sessions. Realistic for many people: 10 minutes daily, sustained for 6 months. That delivers most of the documented benefits.

For broader stress reduction see [digital detox strategies](/blog/digital-detox-strategies).`,
			ko: `명상은 스트레스, 집중, 수면에 대해 대부분 라이프스타일 개입보다 더 많은 동료 검토 증거가 있습니다.

## 실제로 무엇인가

선택한 앵커(호흡, 신체 감각, 소리)에 주의를 반복적으로 되돌리는 것. 각 복귀가 "반복". 방황은 실패 아님 - 알아차리고 돌아오는 것이 연습.

## 5분 스타터

1. 편한 자세로 똑바로 앉기
2. 눈 감거나 시선 부드럽게 아래로
3. 호흡을 통제하지 않고 알아차림
4. 마음이 방황할 때마다 부드럽게 호흡으로 복귀
5. 5분 지속

## 흔한 초보 좌절

- "생각을 멈출 수 없다" - 목표 아님
- "자꾸 잠든다" - 똑바로 앉기, 눈 살짝 뜨기, 이른 시간
- "5분이 길게 느껴진다" - 1주일 2분으로 시작
- "아무것도 안 일어난다" - 혜택은 주 단위로 누적

## 습관 구축

매일 같은 시간, 기상 직후 또는 취침 전, 기존 습관과 스택, 일일 5분 > 주 30분.

## 도움 도구

Headspace, Calm, Insight Timer. 기본 연습 후엔 단순 타이머.

## 호흡을 넘어

몇 주 후 확장: 보디 스캔, 자비 명상, 열린 알아차림, 걷기 명상.

## 증거

8-12주 MBSR 연구: 코르티솔 감소, 불안 감소, 주의 향상, 수면 개선, 약간의 혈압 감소.

## 교사 찾을 때

트라우마 재발, 해리, 연습 혼란 시 자격 있는 교사.

광범위한 스트레스 감소: [digital detox strategies](/blog/digital-detox-strategies).`
		},
		date: '2026-04-21', category: 'health'
	},
	{
		slug: 'digital-detox-strategies',
		title: { en: 'Digital Detox Strategies', ko: '디지털 디톡스 전략' },
		description: { en: 'Practical ways to reduce screen dependence without quitting tech entirely.', ko: '기술을 완전히 그만두지 않고 화면 의존을 줄이는 실용적 방법.' },
		content: {
			en: `Total digital detox sounds nice and is unrealistic for most working adults. The useful version is structured reduction with clear rules.

## Define What Counts

"Detox" is fuzzy. Pick 2-3 specific behaviors to limit:

- Social media on weekdays
- Phone in bed
- Work email after 6 pm
- News before noon

Vague goals fail. Specific behaviors succeed.

## Time-Based Detoxes

- **Phone-free first hour**: morning sets the day's attention pattern
- **Phone-free last hour**: better sleep, less anxiety
- **One full day per week**: pick a weekend day, communicate to family/colleagues
- **Vacation actual offline**: out-of-office reply that reroutes everything

## Friction-Based Tactics

- Logout of social apps after each use
- Delete apps from phone, use browser only (much higher friction)
- Greyscale display
- Dumb phone for weekends or evenings

## Environmental Setup

- Charge phone outside bedroom
- Hidden charger in a drawer at home
- Visible book/hobby supplies as alternative
- Walking shoes by the door

## Replacement Activities

The biggest detox failure is leaving a behavioral vacuum. Plan what fills the time:

- Reading list (paper or e-reader, no notifications)
- A regular walk
- Cooking from a recipe (slow phone-free zone)
- Calling a friend by voice
- Hobby with a tactile component (knitting, woodworking, music)

## Communicate Boundaries

Tell people what to expect: "I check messages once at noon and once at 5." Most people respect explicit boundaries; few respect vague ones.

## Re-Onboarding Carefully

After a successful detox, the urge is to immediately re-install everything. Instead, add back one app at a time over weeks. Notice which apps actually improve life and which were filling a void.

## Measure Honestly

Both iOS and Android show daily averages. Pick a baseline week, target a 30% reduction, review weekly. Numbers cut through self-deception.

## Common Pitfalls

- All-or-nothing detox lasting 3 days then full relapse
- Replacing one app with another (Twitter for Reddit, etc.)
- Detox while keeping notifications on (defeats the point)
- Not informing close people who then worry

## The Real Goal

Not zero screens. Better screens — used intentionally, on your schedule, for activities you'd consciously choose. The internet is not the enemy; reactive use is.

For attention training see [meditation for beginners](/blog/meditation-for-beginners) and screen audits in [screen time management](/blog/screen-time-management).`,
			ko: `완전한 디지털 디톡스는 멋지게 들리지만 대부분 직장인에게 비현실적. 유용한 버전은 명확한 규칙의 구조화된 감소.

## 무엇이 카운트인지 정의

"디톡스"는 모호. 2-3개 구체적 행동 제한:
- 평일 소셜
- 침대에서 휴대폰
- 오후 6시 후 회사 메일
- 정오 전 뉴스

## 시간 기반

- 첫 시간 폰 없음
- 마지막 시간 폰 없음
- 주 1회 전일
- 휴가 진짜 오프라인

## 마찰 기반

소셜 앱 매번 로그아웃, 앱 삭제 브라우저만, 그레이스케일, 주말/저녁 더미폰.

## 환경 설정

침실 밖 충전, 서랍 숨겨진 충전기, 보이는 책/취미, 문 앞 걷기 신발.

## 대체 활동

행동 공백이 디톡스 최대 실패 원인. 시간 채울 계획.

## 경계 소통

"정오와 오후 5시에 메시지 확인." 명시적 경계는 존중됨, 모호한 것은 아님.

## 신중한 재온보딩

성공적 디톡스 후 즉시 모두 재설치 충동. 대신 주 단위로 한 앱씩.

## 흔한 함정

3일 전부 → 완전 재발, 한 앱을 다른 앱으로 대체, 알림 켠 채 디톡스.

## 진짜 목표

0 스크린 아닌 더 나은 스크린. 의도적, 본인 일정에, 의식적 선택 활동.

주의 훈련: [meditation for beginners](/blog/meditation-for-beginners), 감사: [screen time management](/blog/screen-time-management).`
		},
		date: '2026-04-20', category: 'lifestyle'
	},
	{
		slug: 'household-budget-50-30-20',
		title: { en: 'Household Budget: The 50/30/20 Rule', ko: '가계 예산: 50/30/20 규칙' },
		description: { en: 'Allocate after-tax income across needs, wants, and savings the simple way.', ko: '필수, 선택, 저축으로 세후 소득을 단순하게 배분.' },
		content: {
			en: `The 50/30/20 rule is the most beginner-friendly budget framework. After-tax income splits into three buckets that cover most financial bases.

## The Three Buckets

- **50% Needs** — housing, utilities, groceries, insurance, transportation, minimum debt payments
- **30% Wants** — dining out, subscriptions, hobbies, vacations
- **20% Savings + Debt** — retirement, emergency fund, debt principal beyond minimums

If after-tax income is $5,000/month: $2,500 needs, $1,500 wants, $1,000 savings.

## What Counts as a Need

A strict definition helps avoid lifestyle inflation:
- Roof over head (rent or mortgage P&I)
- Power, water, internet
- Basic groceries (not premium delivery)
- Insurance (health, auto, home)
- Required transportation
- Minimum debt payments

A new car payment is a want disguised as a need for many people.

## When 50/30/20 Doesn't Fit

- High cost of living areas: needs may consume 60%+, requiring tighter wants or higher savings rate later
- Aggressive debt payoff: temporary 50/20/30 (more to debt) until cleared
- High earners: savings can rightfully exceed 20%; the rule is a floor, not a ceiling
- Variable income: average over 3 months for budget purposes

## Tracking System

The rule fails without tracking. Options:

- **Apps**: Monarch, Empower, YNAB, Copilot — automatic categorization
- **Spreadsheet**: monthly columns, category rows, manual entry
- **Pen and paper**: works for simple finances and high attention

Pick the system you'll actually use. The best budget is the one you maintain.

## Automate the 20%

Treat savings like a bill: automatic transfer the day after payday. Money you don't see in checking doesn't get spent.

Order:
1. 401(k) to employer match
2. Emergency fund (high-yield savings)
3. Roth IRA
4. Back to 401(k) toward max
5. Taxable brokerage if maxed out

## Monthly Review

15-30 minutes monthly to:
- Compare actual vs target percentages
- Identify drift in any category
- Adjust automated transfers if income changed
- Note one thing to fix next month

## Common Failures

- Forgetting irregular expenses (insurance premiums, car registration, gifts)
- Underestimating "small" recurring costs (subscriptions add up)
- All-or-nothing budgeting that collapses after one bad month
- Tracking but never reviewing

## Beyond the Rule

50/30/20 is a starting point. Strong personal finance progresses to:
- Tax-advantaged account optimization
- Specific savings buckets (house, car, sabbatical)
- Investment policy statement
- Estate planning basics

For credit and debt see [credit card rewards optimization](/blog/credit-card-rewards-optimization).`,
			ko: `50/30/20 규칙은 가장 초보자 친화적 예산 프레임워크. 세후 소득을 3개 버킷으로 분할.

## 3개 버킷

- 50% 필수 - 주거, 공과금, 식료품, 보험, 교통, 최소 부채
- 30% 원함 - 외식, 구독, 취미, 휴가
- 20% 저축+부채 - 은퇴, 비상금, 최소 초과 부채 원금

세후 $5,000/월 = $2,500 필수, $1,500 원함, $1,000 저축.

## 필수 정의

지붕, 전기/수도/인터넷, 기본 식료품, 보험, 필수 교통, 최소 부채. 새 차 할부는 종종 위장된 원함.

## 안 맞을 때

높은 생계비 지역, 공격적 부채 상환, 고소득자, 가변 소득.

## 추적 시스템

앱: Monarch, Empower, YNAB. 스프레드시트. 펜과 종이.

실제 유지할 시스템 선택.

## 20% 자동화

급여일 다음날 자동 이체. 순서:
1. 401(k) 매칭
2. 비상금
3. Roth IRA
4. 401(k) 최대
5. 과세 브로커리지

## 월간 검토

15-30분: 실제 vs 목표 비율, 표류 식별, 자동 이체 조정, 다음 달 수정 사항.

## 흔한 실패

비정기 지출 망각, 작은 반복 비용 과소평가, 한 번의 나쁜 달 후 붕괴, 추적만 하고 검토 없음.

신용/부채: [credit card rewards optimization](/blog/credit-card-rewards-optimization).`
		},
		date: '2026-04-19', category: 'finance'
	},
	{
		slug: 'car-loan-vs-cash',
		title: { en: 'Car Loan vs Cash: Math and Practical Considerations', ko: '자동차 대출 vs 현금: 수학과 실용적 고려' },
		description: { en: 'When financing makes sense and when paying cash wins long term.', ko: '대출이 의미 있을 때와 현금이 장기적으로 이기는 경우.' },
		content: {
			en: `The buy-with-cash crowd and finance-everything crowd both oversimplify. The right answer depends on rates, your savings rate, and the alternative use of cash.

## The Pure Math

If a car loan is 6% and you have $30,000 cash, the question is: can the $30,000 reliably earn more than 6% net of tax elsewhere?

- Stocks expected return: ~7% real long term, but volatile
- High-yield savings (2026): 4-5% nominal
- Bonds: 4-5% nominal

Adjusting for tax (most investment returns taxed) and the certainty difference (loan is guaranteed cost, investment return is not), borrowing at 6% to invest in stocks at 7% expected is a thin margin with real downside risk.

## Where Cash Clearly Wins

- Loan rate is high (7%+)
- You don't max retirement accounts (those returns beat car-loan-arbitrage)
- You'd otherwise spend the cash anyway
- Job uncertainty (debt is fragile, cash is flexible)

## Where Financing Can Make Sense

- Promotional 0% APR (manufacturer subsidy)
- Loan rate well below your safe investment rate (rare in 2026)
- Cash protects emergency fund or retirement contributions
- Strong income stability

## The Hidden Cost of Cash

Draining your emergency fund or retirement contributions to "save interest" is usually a worse trade than the loan interest. Taking $30k from a Roth IRA forfeits decades of tax-free growth.

## Reasonable Hybrid

If a 36-month $30,000 loan at 5%:
- Total interest: ~$2,400
- Or pay 50% down, finance 50% over 36 months: total interest ~$1,200, monthly payment ~$450, retain $15k cash for safety net

## Total Cost of Ownership

Loan interest is a fraction of car ownership cost:
- Depreciation (largest)
- Insurance
- Fuel/electricity
- Maintenance
- Registration
- Tires every 4-5 years

Spending less on the car itself dwarfs cash-vs-loan optimization. A used $15,000 car beats a new $40,000 car for total cost over 10 years.

## Avoid

- Long-term loans (72+ months) — guaranteed underwater for 4+ years
- Rolling negative equity from previous car into new loan
- Being "talked into" extras at financing desk (gap insurance, extended warranty often poor value)

## Practical Steps

1. Get pre-approved through your bank/credit union before stepping on a lot
2. Compare dealer financing only after pre-approval; sometimes they beat your bank
3. Ignore monthly payment focus; compare total cost
4. Keep loan term as short as comfortable

For broader debt management see [household budget 50/30/20](/blog/household-budget-50-30-20).

**Educational only. Not financial advice.**`,
			ko: `현금 매수파와 모두 융자파 모두 과단순화. 정답은 금리, 저축률, 현금의 대체 용도에 달림.

## 순수 수학

대출 6%, 현금 $30,000 = 그 $30,000이 세후 6% 넘게 안정적으로 벌 수 있나?

- 주식 기대 수익: ~7% 장기 실질, 변동성 큼
- 고이율 저축(2026): 4-5%
- 채권: 4-5%

세금과 확실성 차이 조정 후 6% 빌려 7% 기대 주식 투자는 얇은 마진.

## 현금 명확 승리

대출 7%+, 은퇴 계좌 미최대, 어차피 쓸 돈, 직업 불안정.

## 융자 의미 있을 때

프로모션 0% APR, 대출 금리가 안전 투자 금리보다 훨씬 낮음, 비상금/은퇴 보호, 강한 소득 안정.

## 현금의 숨겨진 비용

비상금/은퇴 기여 비우는 것은 대출 이자보다 나쁜 거래.

## 합리적 하이브리드

50% 다운, 50% 36개월 융자.

## 총 소유 비용

대출 이자는 차 소유 비용의 일부:
- 감가상각 (가장 큼)
- 보험
- 연료/전기
- 유지보수
- 등록
- 타이어

차 자체에 덜 쓰는 것이 현금-vs-융자 최적화보다 큼.

## 피할 것

장기 대출(72+개월), 부정 자본 이월, 융자 데스크 추가 옵션.

## 실용 단계

1. 매장 가기 전 은행/신용조합 사전 승인
2. 사전 승인 후 딜러 융자 비교
3. 월 납입금 초점 무시, 총 비용 비교
4. 대출 기간 가능한 짧게

광범위한 부채 관리: [household budget 50/30/20](/blog/household-budget-50-30-20).

**Educational only. Not financial advice.**`
		},
		date: '2026-04-18', category: 'finance'
	},
	{
		slug: 'credit-card-rewards-optimization',
		title: { en: 'Credit Card Rewards Optimization', ko: '신용카드 리워드 최적화' },
		description: { en: 'Earn more rewards without paying interest or chasing complicated point schemes.', ko: '이자 없이, 복잡한 포인트 스킴 없이 더 많은 리워드 적립.' },
		content: {
			en: `Credit card rewards are real money — averaging 1-3% back on spending — but only if you avoid the interest trap. Carry a balance and the math reverses violently.

## Prerequisites

- Pay statement balance in full every month
- No annual fees you cannot justify with rewards
- Enough discipline to avoid spending more for rewards

If any of these fail, plain debit is better.

## Card Categories

- **Flat 1.5-2% cash back**: simple, no thinking, baseline option
- **Category bonus**: 3-6% on groceries/gas/dining, 1% elsewhere
- **Travel rewards**: points convertible to flights/hotels at 1-3¢/point
- **Sign-up bonuses**: $200-1,000 for spending $500-5,000 in 3 months

## Three-Card Setup

A common optimization:

1. **Daily driver flat 2% card** — for any spend without category bonus
2. **Category card** — 3-6% on your top category (often groceries or gas)
3. **Travel card with bonus** — for trips, only if you actually travel

Adding more cards rarely beats this with the time spent.

## Sign-Up Bonus Strategy

A $750 bonus on $4,000 in 3 months is real. Plan around natural large expenses (insurance premium, tax payment, planned home repair) that you'd pay anyway. Never manufacture spending to hit a bonus.

## What to Avoid

- Carrying a balance: 22%+ APR wipes years of rewards
- Cash advances: high fee + immediate interest, no grace period
- "Rewards" cards with annual fees you don't recoup
- Foreign transaction fees: 3% per swipe abroad
- Store cards with 25%+ APR
- Letting unused points expire

## Annual Fees Math

A $95 annual fee makes sense if rewards exceed $95 + the rewards from a no-fee alternative.

\`\`\`
Premium card: 3% on $20,000 dining = $600, fee $95, net $505
No-fee 2% card: $400 on same spend
Difference: $105 in favor of premium
\`\`\`

If the premium card's bonus categories don't fit your actual spend, the no-fee card wins.

## Travel Optimization

If you fly 4+ times per year on the same airline, a co-branded card with status perks (free checked bag, priority boarding) often beats generic 2% cash back through avoided fees alone.

International travel: pick a no-foreign-transaction-fee card.

## Tracking

Most issuers offer year-end summaries. Check yours; many people earn less than they think because of category mismatches.

## Building Credit Through Cards

Cards used and paid off monthly build the credit history that determines mortgage rates. The rewards are secondary. For score improvement see [credit score improvement](https://sdk.bz/blog/credit-score-improvement) (cross-site reference).

## Not for Everyone

If using cards triggers overspending, switch to debit or cash. The 2% reward is worthless against a 30% spending increase.

**Educational only. Not financial advice.**`,
			ko: `신용카드 리워드는 실제 돈 - 지출의 평균 1-3% - 단, 이자 함정 피해야 함.

## 전제 조건

매월 명세서 전액 납부, 정당화 못하는 연회비 없음, 리워드 위해 더 쓰지 않을 규율.

이 중 하나라도 실패하면 데빗이 낫다.

## 카드 카테고리

- 플랫 1.5-2% 캐시백
- 카테고리 보너스 3-6%
- 여행 리워드
- 사인업 보너스 $200-1,000

## 3-카드 설정

1. 일일 2% 카드
2. 상위 카테고리 보너스
3. 여행 카드 (실제 여행 시만)

## 사인업 전략

자연스러운 큰 지출(보험료, 세금, 계획된 수리)에 맞춤. 보너스 위해 지출 만들지 말 것.

## 피할 것

잔액 보유(22%+ APR), 현금 서비스, 보전 못하는 연회비, 해외 거래 수수료(3%), 25%+ 매장 카드, 만료된 포인트.

## 연회비 수학

\`\`\`
프리미엄: 식당 $20,000에 3% = $600, 수수료 $95, 순 $505
무수수료 2%: $400
차이 $105 프리미엄 우위
\`\`\`

## 여행 최적화

같은 항공사 연 4회+ 항공 시 공동 브랜드 카드. 국제: 해외 수수료 없는 카드.

## 모두에게 맞는 건 아님

카드가 과소비 유발하면 데빗/현금. 2% 리워드는 30% 지출 증가에 무가치.

**Educational only. Not financial advice.**`
		},
		date: '2026-04-17', category: 'finance'
	},
	{
		slug: 'subscription-fatigue-cleanup',
		title: { en: 'Subscription Fatigue Cleanup', ko: '구독 피로 정리' },
		description: { en: 'Most households leak $50-200/month to forgotten subscriptions. Find and fix.', ko: '대부분 가정은 잊혀진 구독에 월 $50-200 새고 있습니다.' },
		content: {
			en: `Recurring billing is the most profitable invention in modern commerce. The same psychology that ignores a $9.99 monthly charge would refuse a $120 annual one. Audits recover real money.

## Why It Adds Up

The average US household spends $200-300/month on subscriptions, often without realizing the total. Streaming, software, cloud storage, gym, news, app premium tiers, meal kits, beauty boxes, recurring shipments.

## Find Them All

Three sources catch most:

1. **Bank/credit card statements**: search 12 months of statements for recurring charges
2. **App store subscriptions**: iOS Settings → [Name] → Subscriptions; Google Play → Profile → Payments → Subscriptions
3. **Email search**: "subscription," "renewal," "membership" in inbox

Paid tools (Rocket Money, Bobby) automate this. The free version of most is sufficient for one-time audit.

## Cancel Liberally

Default decision: cancel. If you need it, you'll re-subscribe. Most people don't.

Easier to cancel:
- Streaming services with no contract
- Apps with self-serve cancellation

Harder (intentionally):
- Gyms — often require in-person or certified mail
- Cable bundles — multiple-call dance with retention agents
- "Free trial" subscriptions that activated
- Software with auto-renewal

For these, set a calendar reminder for the day before renewal so you have time to cancel.

## Negotiate Rather Than Cancel

For services you genuinely use:
- Phone plan: every 12 months, call competitors then your provider
- Internet: same; loyalty discounts evaporate after promo periods
- Insurance: shop annually; auto and home rates vary widely
- Gym: ask for retention pricing before canceling

10-30 minute calls often save hundreds annually.

## Bundle vs Separate

- Streaming bundles (Disney+/Hulu/ESPN+) often save vs separate
- Cell + internet bundles vary; calculate per-line cost separately
- Microsoft 365 family plan splits across 6 people, costs $10/month total

## Annual vs Monthly

Annual plans save 15-20% but lock you in. Trade-off:
- Use frequently: annual
- Trying it out: monthly first, switch to annual at renewal

## Frame Differently

Convert monthly to annual:
- $9.99/month = $120/year
- $14.99/month = $180/year
- $50/month = $600/year

The annual number triggers different evaluation than monthly.

## Auto-Renewal Defense

Where possible:
- Use a virtual card number (privacy.com, some banks) that you can pause
- Set credit card alerts for any recurring charge above $5
- Calendar each renewal date

## Watch For

- "Free with subscription" services in places like Amazon Prime that cost real money
- App tiers that auto-upgraded
- "Premium" tiers added during product updates
- Family members with separate subscriptions for the same service

## After the Cleanup

Recovered $100/month is $1,200/year. Direct it to: emergency fund, retirement, debt, or genuinely better expenses than the canceled subscriptions.

For broader budgeting see [household budget 50/30/20](/blog/household-budget-50-30-20).`,
			ko: `반복 결제는 현대 상거래의 가장 수익성 있는 발명. 월 $9.99는 무시하지만 연 $120은 거부할 같은 심리.

## 누적 이유

미국 평균 가정 월 $200-300 구독. 스트리밍, 소프트웨어, 클라우드 스토리지, 헬스장, 뉴스, 앱 프리미엄, 밀키트.

## 모두 찾기

1. 은행/카드 명세서 12개월
2. 앱스토어 구독 (iOS 설정, Google Play)
3. 이메일 검색 ("subscription," "renewal")

도구: Rocket Money, Bobby.

## 자유롭게 해지

기본 결정: 해지. 필요하면 다시 가입.

쉬운 것: 스트리밍, 자가 해지 앱.
어려운 것: 헬스장, 케이블, 무료 체험 활성화, 자동 갱신 SW.

어려운 것은 갱신 전날 캘린더 알림.

## 해지 대신 협상

전화 플랜, 인터넷, 보험, 헬스장 - 매년 경쟁사 비교 후 협상. 10-30분 전화로 연 수백 달러 절약.

## 번들 vs 개별

스트리밍 번들, 셀+인터넷, Microsoft 365 가족 플랜.

## 연간 vs 월간

연간 15-20% 절감하지만 락인. 자주 사용 = 연간, 시도 = 월간.

## 다르게 프레임

월 $9.99 = 연 $120. 연 숫자가 다른 평가 트리거.

## 자동 갱신 방어

가상 카드 번호, 카드 알림 ($5+ 반복), 캘린더 갱신일.

## 정리 후

회수 $100/월 = $1,200/년. 비상금, 은퇴, 부채, 더 나은 지출로 전환.

광범위한 예산: [household budget 50/30/20](/blog/household-budget-50-30-20).`
		},
		date: '2026-04-16', category: 'finance'
	},
	{
		slug: 'gas-vs-electric-car-cost',
		title: { en: 'Gas vs Electric Car: Total Cost Comparison', ko: '가솔린 vs 전기차: 총 비용 비교' },
		description: { en: 'The 5-10 year economics of EVs vs ICE vehicles in 2026.', ko: '2026년 EV vs ICE 차량 5-10년 경제성.' },
		content: {
			en: `Sticker prices favor gas; total ownership often favors electric. The truth depends heavily on local electricity rates, gas prices, mileage, and tax incentives.

## Purchase Price

In 2026:
- Comparable new EV: $5,000-10,000 more than ICE counterpart
- Used EV market has matured: 3-year-old EVs depreciated heavily
- Federal tax credit: up to $7,500 for qualifying new EVs (income and source caps apply)
- State and utility incentives vary

After incentives, many comparable EVs are within $2-3k of ICE — sometimes lower.

## Fuel Cost

- ICE 30 mpg car driving 12,000 miles/year at $3.50/gal: $1,400/year
- EV at 3.5 miles/kWh, 12,000 miles/year at $0.15/kWh: $515/year
- Annual savings: ~$885

If you charge at home overnight on lower rates ($0.08/kWh), EV cost can drop below $300/year.

## Maintenance

- EVs have ~20 moving parts in the drivetrain vs hundreds in ICE
- No oil changes
- No spark plugs, timing belts, transmission service
- Brake wear lower (regenerative braking)
- Tires wear faster (heavier vehicles, instant torque)

Typical 5-year savings: $1,500-3,000.

## Insurance

EVs cost slightly more to insure on average — higher repair costs and battery replacement risk. Differential narrowing as repair networks mature. Get quotes for actual models.

## Battery Replacement

The largest unknown. Most current EV batteries warrantied 8 years/100,000 miles to 70-80% capacity. Real-world degradation under normal use is slower than feared.

Out-of-warranty replacement: $5,000-15,000 depending on pack size. Used pack salvage and refurbishment is a growing market.

## Resale Value

Historical EV depreciation was steep. By 2026 it has normalized for major brands; first-gen and discontinued models still suffer.

## Charging Logistics

The honest question: do you have home charging? If yes, EV math is favorable. If no, public charging at $0.30-0.50/kWh erodes most savings.

For apartments without dedicated parking, ICE often wins on convenience even if cost is higher.

## Climate and Range

- Cold weather reduces range 20-40%
- Towing range drops dramatically
- Long road trips require route planning around chargers (much easier in 2026 than 2020)

For 90% of driving (commuting, errands), modern EV range (250-400 miles) covers comfortably.

## Five-Year Total Cost Sketch

\`\`\`
Comparable cars, 12k miles/year, home charging, $35k purchase
Gas:      Purchase + $7k fuel + $3k maintenance + $1k oil/tires = ~$46k
Electric: Purchase + $3k charging + $1k maintenance = ~$39k
Net:      EV ~$7k cheaper over 5 years
\`\`\`

Add or subtract incentives, charging access, climate. Without home charging, the math reverses.

## Used Market Sweet Spot

3-year-old EV with 80% battery health at half the new price often beats both new EV and used ICE on total cost over 5-7 years.

For broader transportation cost see [car loan vs cash](/blog/car-loan-vs-cash).`,
			ko: `구매가는 가솔린 유리, 총 소유 비용은 종종 전기 유리. 진실은 지역 전기 요금, 가솔린 가격, 주행거리, 세금 인센티브에 크게 의존.

## 구매가

2026년:
- 동급 신규 EV: ICE 대비 $5,000-10,000 더
- 3년차 중고 EV 감가상각 큼
- 연방 세금 크레딧: 적격 신규 EV 최대 $7,500
- 주/유틸리티 인센티브 다양

인센티브 후 종종 ICE의 $2-3k 이내.

## 연료비

- ICE 30mpg 12,000마일 $3.50/gal: $1,400/년
- EV 3.5마일/kWh $0.15/kWh: $515/년
- 절감: ~$885

야간 저렴 요금 $0.08/kWh = $300 미만.

## 유지보수

EV 드라이브트레인 ~20 부품 vs ICE 수백. 오일 교환 없음, 점화 플러그/타이밍 벨트/변속기 서비스 없음. 브레이크 마모 적음. 타이어 마모 빠름.

5년 절감: $1,500-3,000.

## 보험

EV 평균 약간 더 비쌈. 수리 네트워크 성숙으로 격차 축소.

## 배터리 교체

최대 미지수. 현재 EV 배터리 8년/100,000마일 70-80% 용량 보증. 실제 열화 우려보다 느림. 보증 외 교체: $5,000-15,000.

## 충전 물류

솔직한 질문: 가정 충전 가능? Yes면 유리. No면 공공 충전 $0.30-0.50/kWh로 절감 잠식.

## 기후와 항속

- 추위에서 항속 20-40% 감소
- 견인 시 급감
- 장거리 여행 충전소 경로 계획

90% 주행(통근, 심부름)에는 현대 EV 항속(250-400마일) 충분.

## 5년 총 비용

\`\`\`
12k마일/년, 가정 충전, $35k 구매
가솔린: 구매 + $7k 연료 + $3k 유지보수 + $1k = ~$46k
전기: 구매 + $3k 충전 + $1k 유지보수 = ~$39k
순: EV ~$7k 저렴
\`\`\`

가정 충전 없으면 수학 역전.

## 중고 스위트 스팟

3년차 EV 배터리 80% 건강도, 신규의 절반 가격이 종종 5-7년 총 비용에서 신규 EV와 중고 ICE 모두 이김.

광범위한 교통 비용: [car loan vs cash](/blog/car-loan-vs-cash).`
		},
		date: '2026-04-15', category: 'lifestyle'
	},
	{
		slug: 'buying-vs-renting-tiebreaker',
		title: { en: 'Buying vs Renting: The Tiebreaker', ko: '매수 vs 임대: 타이브레이커' },
		description: { en: 'Beyond the "throwing money away" myth: when each actually wins.', ko: '"돈 버린다" 신화를 넘어: 각각이 실제 이기는 때.' },
		content: {
			en: `"Renting is throwing money away" assumes the alternative — buying — has no comparable losses. It does. The real question is which loses less for your specific situation.

## What Both Cost

Renting:
- Monthly rent
- Security deposit (recoverable)
- Renter's insurance
- Moving costs every few years

Buying:
- Down payment (locked in equity)
- Mortgage interest (mostly lost in early years)
- Property taxes (lost forever)
- Insurance
- Maintenance (1-3% of home value annually)
- HOA fees (where applicable)
- Closing costs (~3-5% buying, ~6-7% selling)
- Opportunity cost of down payment

A common surprise: in many markets, monthly cost of owning (PITI + maintenance) exceeds equivalent rent.

## The 5% Rule

A simple shortcut: annual cost of owning is roughly 5% of home value (1% maintenance + 1% taxes + 3% mortgage interest after deduction). Annual cost of renting is the annual rent.

\`\`\`
Home worth $500,000 → ~$25,000/year owning cost
Equivalent rent → if below $2,083/month, renting wins on this metric
\`\`\`

This ignores appreciation and equity build-up. With those:

- Long-term price appreciation: ~3-4% nationally, varies wildly by metro
- Equity build-up via principal payments: meaningful after year 7+

## When Buying Wins

- Stable for 5-7+ years (closing costs amortize over time)
- Local market with reasonable rent-to-price ratio
- You'd otherwise spend the cash on consumption
- Forced savings via principal payments matters more than alternatives
- You value modifications and stability of staying put

## When Renting Wins

- Career flexibility and likely moves
- Local market overheated (price way ahead of rent)
- Down payment would be better invested elsewhere
- You don't want maintenance responsibility
- Major life changes likely (kids, marriage, divorce, job)

## The Opportunity Cost

A $100,000 down payment invested in stocks at 7% real return over 30 years grows to ~$760,000. The same down payment in home equity captures appreciation but also locks you in.

The math is closer than most narratives suggest, especially in expensive metros.

## Hidden Costs of Owning

Big-ticket items most renters don't budget for:
- Roof: $10,000-25,000 every 20-25 years
- HVAC: $8,000-15,000 every 15-20 years
- Major plumbing: $5,000-20,000
- Foundation issues: $5,000-50,000
- Landscaping and yard work

Self-inflicted: kitchen and bathroom remodels rarely return their cost.

## Hidden Costs of Renting

- Annual rent increases (often 3-8% in tight markets)
- No control over landlord decisions (sale, non-renewal, rule changes)
- Limited customization
- No equity capture if local market appreciates

## Practical Decision Framework

1. Estimate years in current city → fewer than 5 favors renting
2. Compare monthly cost of equivalent home (rent vs PITI + maintenance)
3. Consider opportunity cost of down payment
4. Evaluate non-financial factors (stability, control, flexibility)
5. Run a buy vs rent calculator (NYT calculator is a good starting point)

## What Most People Miss

The biggest swing variable is how long you stay. Buy and stay 10+ years: ownership usually wins. Buy and sell within 4 years: closing costs alone often make it a loss.

For broader money decisions see [household budget 50/30/20](/blog/household-budget-50-30-20).

**Educational only. Not financial advice.**`,
			ko: `"임대는 돈 버리는 것"은 대안인 매수에 비교 가능한 손실이 없다고 가정. 실제로 있음.

## 양쪽 비용

임대: 월세, 보증금, 임차인 보험, 몇 년마다 이사.
매수: 다운, 모기지 이자, 재산세, 보험, 유지보수(1-3%/년), HOA, 클로징 비용, 다운의 기회비용.

## 5% 규칙

연 소유 비용 ≈ 주택가 5%. 연 임대료가 그 이하면 임대 우위.

\`\`\`
$500,000 주택 → ~$25,000/년 소유 비용
월 $2,083 미만 임대면 임대 우위
\`\`\`

이는 가치 상승과 자본 축적 무시.

## 매수 우위

5-7년+ 안정, 합리적 임대-가격 비율 시장, 어차피 소비할 현금, 강제 저축, 거주 안정성.

## 임대 우위

경력 유연성, 과열 시장, 다운페이먼트 더 좋은 투자 가능, 유지보수 책임 거부, 큰 인생 변화.

## 기회비용

$100,000 다운페이먼트 30년 7% 주식 = ~$760,000. 같은 금액 주택 자본은 가치 상승 잡지만 잠금.

## 매수 숨겨진 비용

지붕 $10-25k (20-25년), HVAC $8-15k (15-20년), 주요 배관 $5-20k, 기초 $5-50k.

## 임대 숨겨진 비용

연 임대료 인상(3-8%), 임대주 결정에 통제권 없음, 제한된 커스터마이징, 자본 축적 없음.

## 실용 결정 프레임워크

1. 현재 도시 거주 연수 추정 → 5년 미만 = 임대
2. 동급 주택 월 비용 비교
3. 다운의 기회비용 고려
4. 비재정 요인 평가
5. NYT 계산기 활용

## 대부분 놓치는 것

가장 큰 변수는 거주 기간. 10년+ = 보통 소유 우위. 4년 이내 매도 = 클로징 비용만으로도 손실.

광범위한 자금 결정: [household budget 50/30/20](/blog/household-budget-50-30-20).

**Educational only. Not financial advice.**`
		},
		date: '2026-04-14', category: 'finance'
	},
	{
		slug: 'holiday-budget-planning',
		title: { en: 'Holiday Budget Planning', ko: '연휴 예산 계획' },
		description: { en: 'Holiday spending sneaks up. Plan now to avoid the January credit card hangover.', ko: '연휴 지출은 슬금슬금 옵니다. 1월 신용카드 숙취를 피하려면 지금 계획.' },
		content: {
			en: `The average US household spends $1,000-1,500 in November-December alone on gifts, travel, food, and decoration. Without planning, that hits the credit card and rolls into the new year as 22% interest.

## The Annual Sinking Fund

Save monthly, spend annually:

\`\`\`
Annual holiday budget: $1,200
Monthly set-aside: $100
\`\`\`

Automate transfer to a separate savings account on the 1st of each month. By November, the money is there.

## Set the Total First

Decide the entire holiday budget before any specific list:
- Gifts (the biggest line)
- Travel
- Food and entertaining
- Decorations
- Charitable giving
- Tipping (service providers, doormen)

Total = your hard cap. Allocate from there.

## Per-Person Gift Limits

- Immediate family: typical range varies widely; $50-150
- Extended family: $20-50
- Friends: $20-40
- Coworkers: $10-25 if expected; otherwise zero
- Service providers: $20-100 by relationship and norm

Write down every recipient with a number next to their name. Total against budget.

## Honest Conversations

If your budget can't sustain everyone, talk to family and close friends about scaling down:

- Adult sibling gift exchange instead of buying for everyone
- Drawing names (Secret Santa) within larger groups
- Experience gifts instead of stuff
- Charity donation in lieu of gifts

Most people are relieved when someone else suggests this first.

## Travel Reality Check

Holiday flights spike 30-100% above normal. Tactics:
- Book in August-September for December
- Fly Christmas Eve or Christmas Day (cheaper than days around)
- Drive if under 8 hours
- Negotiate work-from-elsewhere rather than competing for narrow vacation slots

## Food and Hosting

A holiday meal for 8-10 people runs $150-300 if you cook, $400+ if you cater or eat out.

- Potluck splits cost across guests
- Make ahead reduces stress and last-minute expensive runs
- Buy alcohol on sale weeks before
- Stick to one signature dish + sides

## Decorations and Cards

- Reuse multi-year decorations
- LED lights cost less to run
- Send digital cards or skip; the cost-to-impact is poor
- Real trees vs artificial: artificial wins after 4-5 years

## Tracking During the Season

Keep a running log on phone of every holiday-related purchase. The "I haven't spent that much" feeling is reliably wrong without data.

## After the Season

In January:
- Review what you actually spent vs budget
- Adjust next year's monthly transfer
- Note categories that overshot
- Pay off any credit card balance immediately

## Year-Round Gift Buying

Buy gifts throughout the year when items go on sale and ideas occur. Stash in a "gift closet." November-December becomes wrapping, not shopping.

## Lower-Stress Alternatives

- Family gift exchange limit: $25
- Hand-made gifts from a hobby
- Time gifts: certificates for cooking dinner, babysitting, repairs
- Charitable donation in someone's name

These often land better than a $100 retail gift, while costing 1/4 as much.

For broader budgeting see [household budget 50/30/20](/blog/household-budget-50-30-20).`,
			ko: `미국 평균 가정은 11-12월에만 선물, 여행, 음식, 장식에 $1,000-1,500 지출. 계획 없이는 신용카드로, 새해 22% 이자로 넘어감.

## 연간 적립 펀드

매월 저축, 매년 지출:
\`\`\`
연 연휴 예산: $1,200
월 적립: $100
\`\`\`

매월 1일 별도 저축 계좌로 자동 이체.

## 총액 먼저 설정

특정 리스트 전 전체 예산 결정:
- 선물 (가장 큼)
- 여행
- 음식과 접대
- 장식
- 자선
- 팁

총 = 하드 캡.

## 1인당 선물 한도

직계 가족 $50-150, 친척 $20-50, 친구 $20-40, 동료 $10-25, 서비스 제공자 $20-100.

수신자 옆에 숫자 적기.

## 솔직한 대화

예산이 모두 지속 못하면 축소:
- 성인 형제 선물 교환
- 시크릿 산타
- 경험 선물
- 선물 대신 자선 기부

## 여행 현실 점검

연휴 항공권 30-100% 급등.
- 12월용 8-9월 예약
- 크리스마스 이브/당일 비행
- 8시간 미만이면 운전

## 음식과 호스팅

8-10인 연휴 식사 직접 요리 $150-300, 케이터링 $400+. 포트럭 비용 분산.

## 장식과 카드

여러 해 재사용, LED 조명, 디지털 카드 또는 생략, 인공 트리(4-5년 후 우위).

## 시즌 중 추적

휴대폰에 연휴 관련 구매 누적 기록.

## 시즌 후

1월 검토, 다음 해 월 이체 조정, 초과 카테고리 메모, 카드 잔액 즉시 상환.

## 연중 선물 구매

세일 시 연중 구매, "선물 옷장" 보관. 11-12월은 포장만.

## 저스트레스 대안

가족 교환 $25 한도, 손수 제작, 시간 선물 (저녁 요리 쿠폰, 베이비시팅), 자선 기부.

광범위한 예산: [household budget 50/30/20](/blog/household-budget-50-30-20).`
		},
		date: '2026-04-13', category: 'finance'
	},
	{
		slug: 'lunch-meal-prep-guide',
		title: { en: 'Lunch Meal Prep Guide', ko: '점심 도시락 준비 가이드' },
		description: { en: 'Save $30-50/week and eat better with 90 minutes of Sunday prep.', ko: '일요일 90분 준비로 주 $30-50 절약과 더 나은 식사.' },
		content: {
			en: `Buying lunch out averages $12-18 in 2026. Five days = $60-90/week, $3,000-4,500/year. Meal prep cuts this 70% with 90 minutes weekly.

## The Format That Works

Avoid five identical meals. The fastest way to quit is boredom.

A flexible system:
- 1 bulk grain (rice, quinoa, pasta)
- 1 bulk protein (chicken, beans, tofu)
- 2-3 vegetables (one roasted, one raw, one quick-pickled)
- 1-2 sauces or dressings

Mix and match into 5 different combinations across the week.

## The 90-Minute Sunday

Sample timeline:

- 0:00 — preheat oven, start grain on stove
- 0:10 — chop vegetables for roasting, season
- 0:20 — vegetables in oven (30-40 min)
- 0:25 — start protein (sheet-pan chicken, instant pot beans)
- 0:35 — make sauce/dressing
- 0:45 — wash and prep raw vegetables (cut, store separately)
- 1:00 — assemble 5 lunch containers
- 1:30 — clean kitchen

## Container System

Glass containers with snap lids beat plastic for longevity and microwave safety. Buy 7 of one size for consistency. Stainless steel works for travel where breakage is a risk.

## Sample Combinations

\`\`\`
Base: brown rice + roasted chicken thighs + broccoli + carrots
Mon: rice bowl with peanut sauce + carrots
Tue: chicken salad with greens + sliced cucumber
Wed: chicken-veg fried rice (reheat)
Thu: lettuce wraps with chicken + sauce
Fri: chicken broth bowl with rice and any leftover veg
\`\`\`

## What Doesn't Work

- Sandwiches prepared 4 days ahead (sog)
- Salads with dressing pre-applied (wilt)
- Dishes that need a delicate texture (pasta gets gummy reheated)

## What Holds Up

- Grain bowls assembled at lunchtime from prepped components
- Stews and chilis (often better day 2)
- Roasted vegetables
- Hard-cooked eggs
- Rice and quinoa

## Freeze for Variety

Cook a double batch of curry, soup, or chili every other Sunday. Freeze half in single portions. By month 3, you have a rotating bench of 5-8 different lunches in the freezer.

## Cost Math

\`\`\`
Bought lunch: $14 × 5 = $70/week
Prepped lunch: ~$15-25/week
Savings: $45-55/week × 50 weeks = $2,250-2,750/year
\`\`\`

That's a real vacation, fully funded.

## Health Bonus

Restaurant lunches average 30-50% more calories and 2-3x the sodium. Prepped lunches you control. Most people who switch lose 5-10 pounds in the first 6 months without trying.

## Common Failure Points

- Sunday burnout from too-ambitious prep — keep it 90 minutes max
- Same meal Monday-Friday — boredom kills
- Forgetting to actually pack it — set the bag by the door Sunday night
- Skipping the wash-and-cut for raw veg — defeats the convenience

## When You Skip a Week

It happens. Don't restart from scratch with elaborate plans; do a 30-minute mini-prep:
- Boil dozen eggs
- Cook rice
- Buy pre-washed greens, fruit, and a rotisserie chicken

Imperfect prep beats no prep.

For broader food savings see [meal planning on budget](/blog/meal-planning-on-budget).`,
			ko: `2026년 외부 점심 평균 $12-18. 주 5일 = $60-90/주, 연 $3,000-4,500. 도시락 준비로 70% 절감, 주 90분.

## 작동하는 포맷

5번 동일 식사 피하기 - 권태가 그만두는 가장 빠른 길.

유연 시스템:
- 1개 대량 곡물
- 1개 대량 단백질
- 2-3개 채소
- 1-2개 소스/드레싱

5가지 조합으로 믹스 매치.

## 90분 일요일

- 0:00 오븐 예열, 곡물 시작
- 0:10 로스트용 채소 손질
- 0:20 채소 오븐
- 0:25 단백질 시작
- 0:35 소스 만들기
- 0:45 생채소 손질
- 1:00 5개 도시락 조립
- 1:30 청소

## 용기 시스템

뚜껑 있는 유리가 플라스틱보다 오래 가고 전자레인지 안전. 동일 사이즈 7개.

## 샘플 조합

\`\`\`
베이스: 현미 + 닭 허벅지 + 브로콜리 + 당근
월: 땅콩 소스 라이스 보울 + 당근
화: 닭 샐러드 + 오이
수: 치킨-야채 볶음밥
목: 상추쌈
금: 닭 육수 보울
\`\`\`

## 작동 안 함

미리 준비한 샌드위치(눅눅), 드레싱 발린 샐러드(시들), 섬세한 식감(파스타 재가열).

## 잘 되는 것

조립식 그레인 보울, 스튜/칠리, 로스트 채소, 삶은 계란, 쌀/퀴노아.

## 다양성을 위한 냉동

격주 더블 배치 카레/수프/칠리. 절반 1인분씩 냉동. 3개월 후 5-8가지 회전.

## 비용 수학

\`\`\`
사 먹는 점심: $14 × 5 = $70/주
준비 점심: ~$15-25/주
절감: $45-55/주 × 50주 = $2,250-2,750/년
\`\`\`

## 건강 보너스

레스토랑 점심 평균 칼로리 30-50% 더, 나트륨 2-3배.

## 흔한 실패점

야망적 준비로 일요일 번아웃, 월-금 같은 식사, 도시락 챙기기 망각, 생채소 컷 건너뛰기.

광범위한 식비 절약: [meal planning on budget](/blog/meal-planning-on-budget).`
		},
		date: '2026-04-12', category: 'lifestyle'
	},
	{
		slug: 'minimalism-financial-impact',
		title: { en: 'Minimalism: Financial Impact', ko: '미니멀리즘: 재정적 영향' },
		description: { en: 'Owning less changes the math on income, savings, and life choices.', ko: '덜 소유하면 소득, 저축, 인생 선택의 수학이 바뀝니다.' },
		content: {
			en: `Minimalism is often pitched as aesthetic. The bigger story is financial. Each expensive thing you skip changes the income required to support your life.

## The Cost of Stuff

Owning costs more than buying:
- Storage (square footage)
- Maintenance
- Insurance
- Mental load (the more you own, the more you manage)
- Replacement cycles

A 1,500 sq ft house full of stuff costs more to operate than 1,000 sq ft selectively furnished.

## The Income Required

Every $100/month of recurring expense requires roughly $30,000 invested at 4% withdrawal rate to fund forever. Two car payments, a storage unit, three streaming services, and a fitness app: $400/month = $120,000 of capital you don't need to accumulate if you cut them.

## The Compounding Side

Every $500 you don't spend, invested in a low-cost index fund at 7%, becomes:
- $1,000 in 10 years
- $2,000 in 20 years
- $4,000 in 30 years

A $5,000 unnecessary annual expense (subscriptions, premium upgrades, things you bought and didn't use) compounds to $500,000 over 30 years.

## What Minimalism Is Not

- Asceticism — owning what you use is fine; owning what fills space is the issue
- A specific aesthetic — Instagram minimalism is just expensive minimalism
- A one-time purge — it's an ongoing decision filter
- Antagonism toward all consumption

## Practical Filters

Before any non-trivial purchase:
- Will I use this monthly? Weekly? Daily?
- Where exactly will it live?
- What am I willing to remove to make space?
- If I waited 30 days, would I still want it?

The 30-day rule alone eliminates most regret purchases.

## Areas of High Leverage

- **Vehicles**: each car beyond what you use is $5,000-10,000/year of total cost
- **Square footage**: rent or mortgage scales linearly
- **Subscriptions**: easy to add, hard to notice
- **Wardrobe**: most people wear 20% of clothes 80% of time
- **Hobby gear**: kits often cost more than developing the skill

## Areas Where Less Doesn't Help

- Tools you use regularly — buy quality, maintain them
- Books you actually read
- Fitness equipment you use weekly
- Quality cookware (lasts decades)

The point is intention, not abstinence.

## Decluttering Approach

Pick a category, not a room. Clothes, books, kitchen gadgets, paperwork. Tackle one category fully before moving on. Marie Kondo's order works because it builds confidence.

For each item:
- Used in last 12 months? Keep
- Replace it for free in 20 minutes? Discard
- Sentimental but unused? Photo it, then donate
- "Might need someday"? Box for 6 months; if untouched, donate

## Selling vs Donating

Time spent selling at $5-30 per item often exceeds the value of the time. Reserve selling for items above $100. Donate the rest.

## Financial Trajectory Change

A household that drops $500/month in unnecessary expenses and invests it for 20 years adds $250,000+ to retirement assets. The math is mechanical.

## When Minimalism Crosses Into Cheapness

- Refusing to spend money on health
- Skipping maintenance that costs more later
- Avoiding gifts and shared meals over small dollars
- Trading time for money in inefficient ways

The goal is alignment between spending and what you actually value, not minimum total spending.

For broader financial frameworks see [household budget 50/30/20](/blog/household-budget-50-30-20).`,
			ko: `미니멀리즘은 종종 미학으로 홍보. 더 큰 이야기는 재정. 건너뛰는 비싼 것 하나하나가 인생을 지탱하는 데 필요한 소득을 바꿈.

## 물건의 비용

소유는 구매보다 더 들음: 보관, 유지보수, 보험, 정신적 부담, 교체 주기.

물건 가득한 1,500 sq ft 주택이 선택적 1,000 sq ft보다 운영비 큼.

## 필요 소득

매월 $100 반복 지출 = 4% 인출률에 약 $30,000 투자 필요. 차 두 대 할부, 창고, 3개 스트리밍, 피트니스 앱: $400/월 = 잘라내면 축적 불필요한 $120,000 자본.

## 복리 측면

쓰지 않은 $500 7% 인덱스 펀드 투자:
- 10년에 $1,000
- 20년에 $2,000
- 30년에 $4,000

연 $5,000 불필요 지출은 30년에 $500,000으로 복리.

## 미니멀리즘이 아닌 것

금욕 아님, 특정 미학 아님(인스타그램 미니멀리즘은 비싼 미니멀리즘), 일회성 정리 아님, 모든 소비 적대 아님.

## 실용 필터

비중 있는 구매 전:
- 매월? 매주? 매일 사용?
- 정확히 어디 살 것?
- 무엇을 치울 의향?
- 30일 기다려도 여전히 원할까?

30일 규칙만으로 후회 구매 대부분 제거.

## 고레버리지 영역

차량 (각 차량 연 $5,000-10,000), 평수, 구독, 옷장(80% 시간 20% 옷), 취미 장비.

## 덜이 도움 안 되는 영역

정기 사용 도구, 실제 읽는 책, 주간 사용 운동 장비, 양질 조리도구.

## 정리 접근

방이 아닌 카테고리. 옷, 책, 주방 도구, 서류. 한 카테고리 완전히 끝내고 다음.

각 항목:
- 12개월 이내 사용? 유지
- 20분에 무료로 교체? 폐기
- 감정적이지만 미사용? 사진 후 기부
- "언젠가 필요"? 6개월 박스, 안 만지면 기부

## 매도 vs 기부

$5-30 항목 매도 시간이 종종 가치 초과. $100 이상만 매도, 나머지는 기부.

## 재정 궤적 변화

월 $500 불필요 지출 줄이고 20년 투자 = 은퇴 자산 $250,000+ 추가.

## 미니멀리즘이 인색함이 될 때

건강 지출 거부, 나중에 더 들 유지보수 건너뛰기, 작은 돈 위해 선물/공유 식사 피함.

광범위한 재정 프레임워크: [household budget 50/30/20](/blog/household-budget-50-30-20).`
		},
		date: '2026-04-11', category: 'lifestyle'
	}
];

export function getBlogPost(slug: string): BlogPost | undefined {
	return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
	return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
