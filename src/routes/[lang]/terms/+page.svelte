<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const content = {
		en: {
			title: 'Terms of Service',
			lastUpdated: 'Last updated: January 2025',
			sections: [
				{
					title: 'Acceptance of Terms',
					text: 'By using SD.gy, you agree to these terms of service. If you do not agree, please do not use our services.'
				},
				{
					title: 'Service Description',
					text: 'SD.gy provides free online calculator tools including Calculator, Percentage Calculator, Unit Converter, Date Calculator, Age Calculator, BMI Calculator, Tip Calculator, and Loan Calculator.'
				},
				{
					title: 'Use of Service',
					text: 'You may use our tools for any lawful purpose. You agree not to use our services for any illegal or harmful activities.'
				},
				{
					title: 'No Warranty',
					text: 'Our services are provided "as is" without any warranties. We do not guarantee the accuracy or reliability of the calculations. For critical financial decisions, please consult a professional.'
				},
				{
					title: 'Limitation of Liability',
					text: 'We are not liable for any damages arising from your use of our services. Use the tools at your own risk.'
				},
				{
					title: 'Changes to Terms',
					text: 'We may update these terms at any time. Continued use of our services constitutes acceptance of the updated terms.'
				},
				{
					title: 'Contact',
					text: 'For questions about these terms, contact us at hello@sd.gy.'
				}
			]
		},
		ko: {
			title: '이용약관',
			lastUpdated: '최종 수정일: 2025년 1월',
			sections: [
				{
					title: '약관 동의',
					text: 'SD.gy를 사용함으로써 본 이용약관에 동의하게 됩니다. 동의하지 않는 경우 서비스를 사용하지 마세요.'
				},
				{
					title: '서비스 설명',
					text: 'SD.gy는 계산기, 퍼센트 계산기, 단위 변환기, 날짜 계산기, 나이 계산기, BMI 계산기, 팁 계산기, 대출 계산기 등 무료 온라인 계산 도구를 제공합니다.'
				},
				{
					title: '서비스 사용',
					text: '합법적인 목적으로 도구를 사용할 수 있습니다. 불법적이거나 해로운 활동에 서비스를 사용하지 않을 것에 동의합니다.'
				},
				{
					title: '보증 없음',
					text: '서비스는 어떠한 보증 없이 "있는 그대로" 제공됩니다. 계산의 정확성이나 신뢰성을 보장하지 않습니다. 중요한 재정적 결정에는 전문가와 상담하세요.'
				},
				{
					title: '책임 제한',
					text: '서비스 사용으로 인한 손해에 대해 책임지지 않습니다. 도구 사용은 본인 책임입니다.'
				},
				{
					title: '약관 변경',
					text: '언제든지 약관을 업데이트할 수 있습니다. 서비스의 지속적인 사용은 업데이트된 약관에 대한 동의로 간주됩니다.'
				},
				{
					title: '연락처',
					text: '약관에 대한 문의는 hello@sd.gy로 연락해 주세요.'
				}
			]
		},
		ja: {
			title: '利用規約',
			lastUpdated: '最終更新日: 2025年1月',
			sections: [
				{
					title: '規約への同意',
					text: 'SD.gyを使用することにより、本利用規約に同意したものとみなされます。同意しない場合は、サービスを使用しないでください。'
				},
				{
					title: 'サービスの説明',
					text: 'SD.gyは、電卓、パーセント計算機、単位変換、日付計算機、年齢計算機、BMI計算機、チップ計算機、ローン計算機などの無料オンライン計算ツールを提供します。'
				},
				{
					title: 'サービスの利用',
					text: '合法的な目的でツールを使用できます。違法または有害な活動にサービスを使用しないことに同意します。'
				},
				{
					title: '保証なし',
					text: 'サービスは、いかなる保証もなく「現状のまま」提供されます。計算の正確性や信頼性を保証しません。重要な財務上の決定については、専門家に相談してください。'
				},
				{
					title: '責任の制限',
					text: 'サービスの使用から生じるいかなる損害についても責任を負いません。ツールの使用はご自身の責任で行ってください。'
				},
				{
					title: '規約の変更',
					text: 'いつでも規約を更新する場合があります。サービスの継続的な使用は、更新された規約への同意とみなされます。'
				},
				{
					title: 'お問い合わせ',
					text: '規約に関するご質問は hello@sd.gy までご連絡ください。'
				}
			]
		},
		zh: {
			title: '服务条款',
			lastUpdated: '最后更新：2025年1月',
			sections: [
				{
					title: '接受条款',
					text: '使用 SD.gy 即表示您同意这些服务条款。如果您不同意，请不要使用我们的服务。'
				},
				{
					title: '服务描述',
					text: 'SD.gy 提供免费的在线计算工具，包括计算器、百分比计算器、单位转换器、日期计算器、年龄计算器、BMI计算器、小费计算器和贷款计算器。'
				},
				{
					title: '服务使用',
					text: '您可以将我们的工具用于任何合法目的。您同意不将我们的服务用于任何非法或有害活动。'
				},
				{
					title: '无保证',
					text: '我们的服务按"原样"提供，不提供任何保证。我们不保证计算的准确性或可靠性。对于重要的财务决策，请咨询专业人士。'
				},
				{
					title: '责任限制',
					text: '我们不对因使用我们的服务而产生的任何损害负责。使用工具需自担风险。'
				},
				{
					title: '条款变更',
					text: '我们可能随时更新这些条款。继续使用我们的服务即表示接受更新后的条款。'
				},
				{
					title: '联系我们',
					text: '如有关于这些条款的问题，请联系 hello@sd.gy。'
				}
			]
		}
	};

	$: t = content[lang] || content.en;
</script>

<svelte:head>
	<title>{t.title} - SD.gy</title>
</svelte:head>

<div class="max-w-3xl mx-auto px-4 py-12">
	<h1 class="text-4xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t.title}</h1>
	<p class="text-sm text-gray-500 dark:text-dark-400 mb-8">{t.lastUpdated}</p>

	<div class="space-y-8">
		{#each t.sections as section}
			<section>
				<h2 class="text-xl font-semibold text-gray-900 dark:text-dark-100 mb-3">{section.title}</h2>
				<p class="text-gray-700 dark:text-dark-300">{section.text}</p>
			</section>
		{/each}
	</div>
</div>
