<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const content = {
		en: {
			title: 'About SD.gy',
			subtitle: 'Free Online Calculators',
			description: 'SD.gy provides free, fast, and privacy-focused calculator tools that work directly in your browser. No uploads, no servers - just instant calculations.',
			features: {
				title: 'Our Tools',
				items: [
					'Calculator - Basic arithmetic calculator',
					'Percentage Calculator - Calculate percentages, discounts, and changes',
					'Unit Converter - Convert length, weight, and temperature',
					'Date Calculator - Calculate D-day and date differences',
					'Age Calculator - Calculate exact age from birthdate',
					'BMI Calculator - Calculate Body Mass Index',
					'Tip Calculator - Calculate tips and split bills',
					'Loan Calculator - Calculate monthly loan payments'
				]
			},
			privacy: {
				title: 'Privacy First',
				text: 'All calculations happen entirely in your browser. Your data never leaves your device and is never uploaded to any server. We take your privacy seriously.'
			},
			contact: {
				title: 'Contact',
				text: 'For questions or feedback, please contact us at hello@sd.gy'
			}
		},
		ko: {
			title: 'SD.gy 소개',
			subtitle: '무료 온라인 계산기',
			description: 'SD.gy는 브라우저에서 바로 작동하는 무료, 빠른, 개인정보 보호 중심의 계산기 도구를 제공합니다. 업로드 없이, 서버 없이 - 즉시 계산.',
			features: {
				title: '도구 소개',
				items: [
					'계산기 - 기본 사칙연산 계산기',
					'퍼센트 계산기 - 퍼센트, 할인율, 증감률 계산',
					'단위 변환기 - 길이, 무게, 온도 변환',
					'날짜 계산기 - D-day 및 날짜 차이 계산',
					'나이 계산기 - 생년월일로 만 나이 계산',
					'BMI 계산기 - 체질량지수 계산',
					'팁 계산기 - 팁 계산 및 더치페이',
					'대출 계산기 - 월 상환액 계산'
				]
			},
			privacy: {
				title: '개인정보 보호 우선',
				text: '모든 계산은 브라우저에서 완전히 이루어집니다. 데이터가 기기를 떠나거나 서버로 업로드되지 않습니다. 개인정보 보호를 중요하게 생각합니다.'
			},
			contact: {
				title: '연락처',
				text: '문의사항이나 피드백은 hello@sd.gy로 연락해 주세요.'
			}
		},
		ja: {
			title: 'SD.gy について',
			subtitle: '無料オンライン電卓',
			description: 'SD.gyは、ブラウザで直接動作する無料、高速、プライバシー重視の計算ツールを提供します。アップロード不要、サーバー不要 - 即座に計算。',
			features: {
				title: 'ツール紹介',
				items: [
					'電卓 - 基本的な四則演算電卓',
					'パーセント計算機 - パーセント、割引率、増減率を計算',
					'単位変換 - 長さ、重さ、温度の変換',
					'日付計算機 - D-day と日付の差を計算',
					'年齢計算機 - 生年月日から年齢を計算',
					'BMI計算機 - 体格指数を計算',
					'チップ計算機 - チップ計算と割り勘',
					'ローン計算機 - 月々の返済額を計算'
				]
			},
			privacy: {
				title: 'プライバシー優先',
				text: 'すべての計算はブラウザで完全に行われます。データはデバイスから離れることなく、サーバーにアップロードされることもありません。プライバシーを重視しています。'
			},
			contact: {
				title: 'お問い合わせ',
				text: 'ご質問やフィードバックは hello@sd.gy までご連絡ください。'
			}
		},
		zh: {
			title: '关于 SD.gy',
			subtitle: '免费在线计算器',
			description: 'SD.gy 提供免费、快速、注重隐私的计算工具，直接在您的浏览器中运行。无需上传，无需服务器 - 即时计算。',
			features: {
				title: '工具介绍',
				items: [
					'计算器 - 基本四则运算计算器',
					'百分比计算器 - 计算百分比、折扣率、增减率',
					'单位转换器 - 转换长度、重量、温度',
					'日期计算器 - 计算D-day和日期差',
					'年龄计算器 - 根据出生日期计算年龄',
					'BMI计算器 - 计算身体质量指数',
					'小费计算器 - 计算小费和分摊账单',
					'贷款计算器 - 计算月供'
				]
			},
			privacy: {
				title: '隐私优先',
				text: '所有计算完全在您的浏览器中进行。数据永远不会离开您的设备，也永远不会上传到任何服务器。我们非常重视您的隐私。'
			},
			contact: {
				title: '联系我们',
				text: '如有问题或反馈，请联系 hello@sd.gy'
			}
		}
	};

	$: t = content[lang] || content.en;
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

	<section class="mb-10">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.features.title}</h2>
		<ul class="space-y-3">
			{#each t.features.items as item}
				<li class="flex items-start gap-3 text-gray-700 dark:text-dark-300">
					<span class="text-violet-500 mt-1">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
						</svg>
					</span>
					<span>{item}</span>
				</li>
			{/each}
		</ul>
	</section>

	<section class="mb-10">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.privacy.title}</h2>
		<p class="text-gray-700 dark:text-dark-300">{t.privacy.text}</p>
	</section>

	<section>
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.contact.title}</h2>
		<p class="text-gray-700 dark:text-dark-300">{t.contact.text}</p>
	</section>
</div>
