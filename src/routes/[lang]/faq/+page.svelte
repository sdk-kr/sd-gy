<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	interface FAQ {
		question: string;
		answer: string;
	}

	const content = {
		en: {
			title: 'Frequently Asked Questions',
			subtitle: 'FAQ',
			description: 'Find answers to common questions about SD.gy calculator tools.',
			faqs: [
				{
					question: 'What is SD.gy?',
					answer: 'SD.gy is a collection of free, fast, and privacy-focused calculator tools that run directly in your browser. We offer tools like Calculator, Percentage Calculator, Unit Converter, Date Calculator, Age Calculator, BMI Calculator, Tip Calculator, and Loan Calculator.'
				},
				{
					question: 'Is SD.gy free to use?',
					answer: 'Yes, all tools on SD.gy are completely free to use. There are no hidden fees, subscriptions, or premium features. We support the service through minimal advertising.'
				},
				{
					question: 'Is my data safe?',
					answer: 'Absolutely. All calculations happen entirely in your browser. Your data never leaves your device and is never uploaded to our servers. Your privacy is our priority.'
				},
				{
					question: 'How does the Loan Calculator work?',
					answer: 'Our Loan Calculator uses the standard amortization formula to calculate monthly payments based on the loan amount, annual interest rate, and loan term. It also shows you the total payment and total interest over the loan period.'
				},
				{
					question: 'What units does the Unit Converter support?',
					answer: 'The Unit Converter supports length (mm, cm, m, km, inch, feet, yard, mile), weight (mg, g, kg, ton, oz, lb), and temperature (Celsius, Fahrenheit, Kelvin) conversions.'
				},
				{
					question: 'How accurate are the calculators?',
					answer: 'Our calculators use standard mathematical formulas and provide accurate results. However, for critical financial decisions, we recommend consulting with a professional.'
				},
				{
					question: 'Which browsers are supported?',
					answer: 'SD.gy works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your browser for the best experience.'
				},
				{
					question: 'Can I use SD.gy on mobile?',
					answer: 'Yes, SD.gy is fully responsive and works on mobile devices. All our calculator tools are optimized for touch input.'
				},
				{
					question: 'How can I report a bug or suggest a feature?',
					answer: 'We welcome your feedback! Please send bug reports or feature suggestions to support@sd.gy. We actively review all submissions.'
				}
			] as FAQ[]
		},
		ko: {
			title: '자주 묻는 질문',
			subtitle: 'FAQ',
			description: 'SD.gy 계산기 도구에 대한 일반적인 질문에 대한 답변을 찾아보세요.',
			faqs: [
				{
					question: 'SD.gy란 무엇인가요?',
					answer: 'SD.gy는 브라우저에서 직접 실행되는 무료, 빠른, 개인정보 보호 중심의 계산기 도구 모음입니다. 계산기, 퍼센트 계산기, 단위 변환기, 날짜 계산기, 나이 계산기, BMI 계산기, 팁 계산기, 대출 계산기 등 다양한 도구를 제공합니다.'
				},
				{
					question: 'SD.gy는 무료인가요?',
					answer: '네, SD.gy의 모든 도구는 완전히 무료입니다. 숨겨진 비용, 구독료, 프리미엄 기능이 없습니다. 최소한의 광고를 통해 서비스를 지원하고 있습니다.'
				},
				{
					question: '제 데이터는 안전한가요?',
					answer: '물론입니다. 모든 계산은 브라우저에서 완전히 이루어집니다. 데이터는 기기를 떠나지 않으며 서버로 업로드되지 않습니다. 개인정보 보호가 우선입니다.'
				},
				{
					question: '대출 계산기는 어떻게 작동하나요?',
					answer: '대출 계산기는 표준 상환 공식을 사용하여 대출 금액, 연 이자율, 대출 기간을 기반으로 월 상환액을 계산합니다. 또한 대출 기간 동안의 총 상환액과 총 이자를 보여줍니다.'
				},
				{
					question: '단위 변환기는 어떤 단위를 지원하나요?',
					answer: '단위 변환기는 길이(mm, cm, m, km, 인치, 피트, 야드, 마일), 무게(mg, g, kg, 톤, oz, lb), 온도(섭씨, 화씨, 켈빈) 변환을 지원합니다.'
				},
				{
					question: '계산기들은 얼마나 정확한가요?',
					answer: '계산기들은 표준 수학 공식을 사용하여 정확한 결과를 제공합니다. 그러나 중요한 재정적 결정에는 전문가와 상담하는 것을 권장합니다.'
				},
				{
					question: '어떤 브라우저를 지원하나요?',
					answer: 'SD.gy는 Chrome, Firefox, Safari, Edge를 포함한 모든 최신 브라우저에서 작동합니다. 최상의 경험을 위해 브라우저의 최신 버전을 사용하는 것을 권장합니다.'
				},
				{
					question: '모바일에서 사용할 수 있나요?',
					answer: '네, SD.gy는 완전히 반응형이며 모바일 기기에서 작동합니다. 모든 계산기 도구는 터치 입력에 최적화되어 있습니다.'
				},
				{
					question: '버그를 보고하거나 기능을 제안하려면 어떻게 하나요?',
					answer: '피드백을 환영합니다! 버그 보고 또는 기능 제안은 support@sd.gy로 보내주세요. 모든 제출물을 적극적으로 검토합니다.'
				}
			] as FAQ[]
		},
		ja: {
			title: 'よくある質問',
			subtitle: 'FAQ',
			description: 'SD.gy 計算ツールに関する一般的な質問への回答をご覧ください。',
			faqs: [
				{
					question: 'SD.gy とは何ですか？',
					answer: 'SD.gy は、ブラウザで直接動作する無料、高速、プライバシー重視の計算ツールのコレクションです。電卓、パーセント計算機、単位変換、日付計算機、年齢計算機、BMI計算機、チップ計算機、ローン計算機など、多くのツールを提供しています。'
				},
				{
					question: 'SD.gy は無料ですか？',
					answer: 'はい、SD.gy のすべてのツールは完全に無料でご利用いただけます。隠れた料金、サブスクリプション、プレミアム機能はありません。最小限の広告でサービスをサポートしています。'
				},
				{
					question: '私のデータは安全ですか？',
					answer: 'もちろんです。すべての計算はブラウザで完全に行われます。データはデバイスから離れることはなく、サーバーにアップロードされることもありません。プライバシーが優先です。'
				},
				{
					question: 'ローン計算機はどのように機能しますか？',
					answer: 'ローン計算機は、標準的な償還計算式を使用して、借入額、年利率、返済期間に基づいて月々の返済額を計算します。また、ローン期間中の総返済額と総利息も表示されます。'
				},
				{
					question: '単位変換はどの単位をサポートしていますか？',
					answer: '単位変換は、長さ（mm、cm、m、km、インチ、フィート、ヤード、マイル）、重さ（mg、g、kg、トン、oz、lb）、温度（摂氏、華氏、ケルビン）の変換をサポートしています。'
				},
				{
					question: '計算機はどのくらい正確ですか？',
					answer: '計算機は標準的な数学公式を使用し、正確な結果を提供します。ただし、重要な財務上の決定については、専門家に相談することをお勧めします。'
				},
				{
					question: 'どのブラウザがサポートされていますか？',
					answer: 'SD.gy は Chrome、Firefox、Safari、Edge を含むすべての最新ブラウザで動作します。最高の体験のために、ブラウザの最新バージョンを使用することをお勧めします。'
				},
				{
					question: 'モバイルで使用できますか？',
					answer: 'はい、SD.gy は完全にレスポンシブで、モバイルデバイスで動作します。すべての計算ツールはタッチ入力に最適化されています。'
				},
				{
					question: 'バグを報告したり、機能を提案するにはどうすればよいですか？',
					answer: 'フィードバックを歓迎します！バグ報告や機能提案は support@sd.gy までお送りください。すべての送信を積極的にレビューしています。'
				}
			] as FAQ[]
		},
		zh: {
			title: '常见问题',
			subtitle: 'FAQ',
			description: '查找有关 SD.gy 计算工具的常见问题解答。',
			faqs: [
				{
					question: '什么是 SD.gy？',
					answer: 'SD.gy 是一系列免费、快速、注重隐私的计算工具，直接在您的浏览器中运行。我们提供计算器、百分比计算器、单位转换器、日期计算器、年龄计算器、BMI计算器、小费计算器、贷款计算器等众多工具。'
				},
				{
					question: 'SD.gy 是免费的吗？',
					answer: '是的，SD.gy 上的所有工具都是完全免费使用的。没有隐藏费用、订阅或高级功能。我们通过最少的广告来支持服务。'
				},
				{
					question: '我的数据安全吗？',
					answer: '绝对安全。所有计算完全在您的浏览器中进行。您的数据永远不会离开您的设备，也永远不会上传到我们的服务器。隐私是我们的首要任务。'
				},
				{
					question: '贷款计算器是如何工作的？',
					answer: '贷款计算器使用标准的还款计算公式，根据贷款金额、年利率和贷款期限计算月供。它还显示贷款期间的总还款额和总利息。'
				},
				{
					question: '单位转换器支持哪些单位？',
					answer: '单位转换器支持长度（mm、cm、m、km、英寸、英尺、码、英里）、重量（mg、g、kg、吨、oz、lb）和温度（摄氏、华氏、开尔文）转换。'
				},
				{
					question: '计算器有多准确？',
					answer: '我们的计算器使用标准数学公式，提供准确的结果。但是，对于重要的财务决策，我们建议咨询专业人士。'
				},
				{
					question: '支持哪些浏览器？',
					answer: 'SD.gy 适用于所有现代浏览器，包括 Chrome、Firefox、Safari 和 Edge。我们建议使用最新版本的浏览器以获得最佳体验。'
				},
				{
					question: '可以在手机上使用吗？',
					answer: '可以，SD.gy 完全响应式，可在移动设备上使用。所有计算工具都针对触摸输入进行了优化。'
				},
				{
					question: '如何报告错误或建议功能？',
					answer: '我们欢迎您的反馈！请将错误报告或功能建议发送至 support@sd.gy。我们积极审查所有提交内容。'
				}
			] as FAQ[]
		}
	};

	$: t = content[lang] || content.en;

	let openIndex: number | null = null;

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<svelte:head>
	<title>{t.title} - SD.gy</title>
	<meta name="description" content={t.description} />
</svelte:head>

<div class="max-w-3xl mx-auto px-4 py-12">
	<h1 class="text-4xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t.title}</h1>
	<p class="text-xl text-violet-500 mb-8">{t.subtitle}</p>

	<p class="text-lg text-gray-700 dark:text-dark-300 mb-12">
		{t.description}
	</p>

	<div class="space-y-4">
		{#each t.faqs as faq, index}
			<div class="border border-gray-200 dark:border-dark-700 rounded-lg overflow-hidden">
				<button
					class="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-50 dark:bg-dark-800 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
					on:click={() => toggle(index)}
					aria-expanded={openIndex === index}
				>
					<span class="font-medium text-gray-900 dark:text-dark-100">{faq.question}</span>
					<svg
						class="w-5 h-5 text-violet-500 transform transition-transform duration-200 {openIndex === index ? 'rotate-180' : ''}"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
					</svg>
				</button>
				{#if openIndex === index}
					<div class="px-6 py-4 bg-white dark:bg-dark-900">
						<p class="text-gray-700 dark:text-dark-300">{faq.answer}</p>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
