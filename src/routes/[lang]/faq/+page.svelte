<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const SITE_NAME = 'SD.gy';
	const SITE_DOMAIN = 'sd.gy';
	const CONTACT_EMAIL = 'contact@sd.gy';

	const content = {
		en: {
			title: 'Frequently Asked Questions',
			subtitle: `Detailed answers about how ${SITE_NAME} works, what we do with your data, and how we keep the lights on.`,
			sections: [
				{
					heading: 'About the Site & Calculators',
					faqs: [
						{ q: `What exactly is ${SITE_NAME}?`, a: `${SITE_NAME} is a free, browser-based suite of calculators. Each calculator runs entirely in your browser — there is no server-side execution, no upload, no waiting on a remote service to process your data.` },
						{ q: `Is ${SITE_NAME} free? Is there a paid tier?`, a: `It is free, and there is no paid tier. We are funded by display advertising. We have no plans to introduce a "Pro" plan, paywalls, or content gates.` },
						{ q: 'Do I need to sign up?', a: `No. Every calculator works without an account. There is no sign-up flow, no e-mail collection, and no password.` },
						{ q: 'What devices and browsers are supported?', a: 'Any modern desktop or mobile browser (Chrome 90+, Firefox 90+, Safari 15+, Edge 90+). The site is mobile-first and works well on phones and tablets.' },
						{ q: 'Does it work offline?', a: `Static pages cache after the first load, so a previously visited calculator will render with a flaky connection. The calculators themselves do not require the network because computation happens in your browser.` },
						{ q: 'Do you have a mobile app?', a: 'No. We rely on the browser as the cross-platform runtime. Adding the site to your home screen on iOS or Android gives you something close to an app.' },
						{ q: 'How do I clear my saved settings?', a: 'Open your browser settings, find "site data" or "storage" for our domain, and clear it. All preferences are stored exclusively in your browser localStorage.' },
						{ q: `How do I report a wrong result from a calculator?`, a: 'E-mail us with [BUG] in the subject line, the URL of the page, the inputs you used, the result you got, and what you expected. Reproduction details get the fastest fix.' },
						{ q: `How do I request a new calculator?`, a: 'E-mail us with [FEATURE] in the subject line. A one- or two-sentence description of the use-case beats a one-word request by a wide margin.' },
						{ q: 'Why are the load times so fast?', a: `Because computation happens in your browser instead of on a remote server. We also pre-render and cache aggressively at Cloudflare's edge, so the HTML reaches you in under 100 ms in most countries.` }
					]
				},
				{
					heading: 'Advertising & Monetisation',
					faqs: [
						{ q: 'Why are there ads?', a: 'Ads pay the entire bill: hosting, the writing of guides, translation review, and the small team behind the site. Without them, the free version of the site does not exist. We try to keep ad density well below the industry average.' },
						{ q: 'Can I turn off personalised ads?', a: 'Yes. The first time you visit from the EU, the UK, or Korea you will see a Google-managed consent banner where you can refuse personalised advertising. You can also visit https://adssettings.google.com at any time to change those preferences globally for any Google-served ad.' },
						{ q: 'Do you take sponsorships?', a: 'Occasionally, yes — but only when the sponsor\'s offer fits the audience and we can mark the sponsorship clearly. We will never disguise sponsored content as a regular calculator or guide.' }
					]
				},
				{
					heading: 'Privacy, Data & Security',
					faqs: [
						{ q: 'Do you record what I input?', a: `No. Every input you put into a calculator stays in your browser. The text, numbers, files, or images you provide never reach our servers.` },
						{ q: 'What data do you collect, then?', a: 'Standard, aggregated analytics: page URL, referrer, country derived from a truncated IP, browser family, OS, screen size, language preference, and ad-related events. IP addresses are anonymised before storage. Full details are in our Privacy Policy.' },
						{ q: 'Do you sell or share my personal data?', a: 'No. We do not sell, rent, or share personal data. We share the minimum needed with our infrastructure providers (Cloudflare, Google for analytics and ads) under written agreements that limit use to operating the service.' },
						{ q: 'How do I delete my data?', a: `For data in your browser, clear the site's storage. For e-mail correspondence, write to ${CONTACT_EMAIL} with [LEGAL] in the subject and we will process the deletion within the timeframes required by GDPR (usually 30 days) or PIPA (usually 10 days).` },
						{ q: 'Where are your servers located?', a: 'We deploy to Cloudflare Pages, which serves traffic from a global edge network. Static assets and request handling happen at the edge node closest to you.' }
					]
				},
				{
					heading: 'Technical / Stack',
					faqs: [
						{ q: 'What is the site built with?', a: 'SvelteKit and TypeScript on the front, Tailwind CSS for styling, and Cloudflare Pages plus Workers for hosting and any edge logic. There is no traditional backend; we lean on the browser and the edge.' },
						{ q: 'Is the source code open?', a: 'Parts of it are public on GitHub. The full site code is not currently open source, primarily to maintain our content quality bar across translations and product surfaces.' },
						{ q: 'How accurate is the math?', a: 'Every formula in our calculators is documented either in the guide page or in inline tooltips. We re-derive each formula from primary sources and cross-check against trusted reference implementations. If you spot a discrepancy, please report it via [BUG].' },
						{ q: 'How do you handle accessibility?', a: 'We test with keyboard-only navigation, screen-reader walkthroughs of the main flows, and aim for WCAG 2.2 AA conformance on long-form content.' },
						{ q: `Is ${SITE_NAME} multilingual end-to-end?`, a: 'Yes. UI strings, calculators, guides, and legal pages are all available in English, Korean, Japanese, and Chinese. Translations are reviewed by native speakers, not produced by a one-shot machine pass.' }
					]
				},
				{
					heading: 'Legal & Responsibility',
					faqs: [
						{ q: 'Who is responsible for the site?', a: `${SITE_NAME} is operated by SDK Co., Ltd., a Korean software company (business registration 871-81-03242). Operator details and contact info are on our About and Contact pages.` },
						{ q: `Can the results of a ${SITE_NAME} calculator be used as professional advice?`, a: `No. Our calculators provide informational estimates only. They are not financial, legal, medical, or other professional advice. Talk to a qualified professional for decisions that materially affect your life.` },
						{ q: 'Can I use the site to teach a class or write an article?', a: 'Absolutely. Linking to calculators and guides is encouraged. We just ask that you do not screenshot the entire page and re-host it as your own.' }
					]
				}
			]
		},
		ko: {
			title: '자주 묻는 질문',
			subtitle: `${SITE_NAME}이 어떻게 동작하는지, 우리가 데이터를 어떻게 다루는지, 그리고 어떻게 운영비를 충당하는지에 대한 상세 답변입니다.`,
			sections: [
				{
					heading: '사이트와 계산기',
					faqs: [
						{ q: `${SITE_NAME}은 정확히 무엇인가요?`, a: `${SITE_NAME}은 무료의 브라우저 기반 계산기 모음입니다. 각 계산기는 전적으로 브라우저에서 실행되며 — 서버 측 실행, 업로드, 원격 처리 대기가 일체 없습니다.` },
						{ q: `${SITE_NAME}은 무료인가요? 유료 티어가 있나요?`, a: `무료이며 유료 티어는 없습니다. 디스플레이 광고로 운영됩니다. "Pro" 플랜, 페이월, 콘텐츠 게이트 도입 계획은 없습니다.` },
						{ q: '회원가입이 필요한가요?', a: `아니요. 모든 계산기는 계정 없이 동작합니다. 가입 과정도, 이메일 수집도, 비밀번호도 없습니다.` },
						{ q: '어떤 기기·브라우저에서 동작하나요?', a: '최신 데스크톱·모바일 브라우저(Chrome 90+, Firefox 90+, Safari 15+, Edge 90+) 모두 지원합니다. 모바일 우선으로 설계되어 폰·태블릿에서 잘 동작합니다.' },
						{ q: '오프라인에서도 동작하나요?', a: `정적 페이지는 첫 로드 후 캐시되므로 한 번 본 계산기는 네트워크가 불안정해도 렌더링됩니다. 계산기 자체는 브라우저에서 계산하므로 네트워크가 필요 없습니다.` },
						{ q: '모바일 앱이 있나요?', a: '없습니다. 브라우저를 크로스 플랫폼 런타임으로 사용합니다. iOS·Android에서 홈 화면에 추가하면 앱과 거의 동일한 경험을 얻습니다.' },
						{ q: '저장된 설정을 어떻게 초기화하나요?', a: '브라우저 설정에서 본 도메인의 "사이트 데이터" 또는 "저장소"를 찾아 삭제하세요. 모든 환경설정은 브라우저 localStorage에만 저장되어 있습니다.' },
						{ q: `계산기의 잘못된 결과를 어떻게 신고하나요?`, a: '제목에 [BUG]을 포함하여 페이지 URL, 사용한 입력값, 받은 결과, 기대했던 결과를 메일로 보내주세요. 재현 정보가 있으면 수정이 가장 빠릅니다.' },
						{ q: `새로운 계산기는 어떻게 요청하나요?`, a: '제목에 [FEATURE]를 포함해 메일을 보내 주세요. 한두 문장으로 사용 사례를 설명해 주시는 편이 한 단어 요청보다 훨씬 도움이 됩니다.' },
						{ q: '왜 로드 시간이 빠른가요?', a: `계산이 원격 서버가 아니라 브라우저에서 일어나기 때문입니다. 또한 Cloudflare 엣지에서 사전 렌더링·적극적 캐시를 적용하므로 대부분 국가에서 100 ms 이내에 HTML이 도달합니다.` }
					]
				},
				{
					heading: '광고와 수익화',
					faqs: [
						{ q: '왜 광고가 있나요?', a: '광고가 모든 비용을 책임집니다: 호스팅, 가이드 집필, 번역 검수, 그리고 사이트 뒤의 작은 팀. 광고가 없으면 무료 버전 사이트가 존재할 수 없습니다.' },
						{ q: '맞춤형 광고를 끌 수 있나요?', a: 'EU·영국·한국에서 처음 방문하시면 Google이 관리하는 동의 배너에서 맞춤형 광고를 거부할 수 있습니다. https://adssettings.google.com 에서 언제든 모든 Google 광고에 대한 설정을 변경할 수 있습니다.' },
						{ q: '스폰서십을 받나요?', a: `가끔, 받습니다 — 단 스폰서의 제안이 청중과 잘 맞고, 스폰서십임을 명확히 표시할 수 있을 때만. 후원 콘텐츠를 일반 계산기나 가이드로 위장하지 않습니다.` }
					]
				},
				{
					heading: '개인정보·데이터·보안',
					faqs: [
						{ q: '제 입력값을 기록하나요?', a: `아니요. 계산기에 입력한 모든 값은 브라우저에 머무릅니다. 제공한 텍스트, 숫자, 파일, 이미지는 우리 서버에 절대 도달하지 않습니다.` },
						{ q: '그럼 어떤 데이터를 수집하나요?', a: '표준 집계 분석 데이터: 페이지 URL, 유입 출처, 마스킹된 IP에서 추정한 국가, 브라우저 종류, OS, 화면 크기, 언어 설정, 광고 관련 이벤트. IP 주소는 저장 전 익명화됩니다.' },
						{ q: '개인정보를 판매·공유하나요?', a: '아니요. 인프라 사업자(Cloudflare, 분석·광고를 위한 Google)에는 운영에 필요한 최소 정보를 서면 계약 하에 공유합니다.' },
						{ q: '제 데이터를 어떻게 삭제하나요?', a: `브라우저에 저장된 데이터는 사이트 저장소를 비우세요. 이메일 답신 내역은 ${CONTACT_EMAIL}로 [LEGAL]을 제목에 넣어 보내주시면 GDPR(보통 30일) 또는 개인정보보호법(보통 10일) 기한 내에 삭제 처리합니다.` },
						{ q: '서버는 어디에 있나요?', a: 'Cloudflare Pages에 배포되어 있으며, 글로벌 엣지 네트워크에서 트래픽을 처리합니다. 정적 자산과 요청 처리가 가장 가까운 엣지 노드에서 이루어집니다.' }
					]
				},
				{
					heading: '기술 스택',
					faqs: [
						{ q: '사이트는 무엇으로 만들었나요?', a: '프런트엔드는 SvelteKit + TypeScript, 스타일은 Tailwind CSS, 호스팅과 엣지 로직은 Cloudflare Pages + Workers입니다. 전통적인 백엔드는 없으며, 브라우저와 엣지에 의존합니다.' },
						{ q: '소스 코드가 공개되어 있나요?', a: '일부는 GitHub에 공개되어 있습니다. 전체 사이트 코드는 현재 오픈소스가 아니며, 번역과 제품 표면 전반의 콘텐츠 품질 기준 유지를 위해 그렇게 유지하고 있습니다.' },
						{ q: '계산은 얼마나 정확한가요?', a: `계산기의 모든 공식은 가이드 페이지 또는 인라인 툴팁에 문서화되어 있습니다. 각 공식은 1차 자료에서 다시 유도하고 신뢰할 수 있는 참조 구현과 교차 검증합니다. 불일치를 발견하시면 [BUG]로 신고해 주세요.` },
						{ q: '접근성은 어떻게 다루나요?', a: '키보드 단독 내비게이션 테스트, 스크린 리더로 주요 흐름 워크스루, 장문 콘텐츠 WCAG 2.2 AA 준수를 목표로 합니다.' },
						{ q: `${SITE_NAME}은 사이트 전체가 다국어인가요?`, a: `네. UI 문자열, 계산기, 가이드, 법적 페이지 모두 영어/한국어/일본어/중국어로 제공됩니다. 모든 번역은 1회 기계 번역으로 끝내지 않고 원어민 검수를 거칩니다.` }
					]
				},
				{
					heading: '법적·책임',
					faqs: [
						{ q: '사이트의 책임자는 누구인가요?', a: `${SITE_NAME}은 한국 소프트웨어 회사 SDK Co., Ltd.(사업자등록번호 871-81-03242)가 운영합니다. 운영자 정보와 연락처는 소개·문의 페이지에 있습니다.` },
						{ q: `${SITE_NAME} 계산기의 결과를 전문 자문으로 사용해도 되나요?`, a: `아니요. 우리 계산기는 정보성 추정치만 제공합니다. 금융·법률·의료·기타 전문 자문이 아닙니다. 삶에 실질적 영향을 미치는 결정은 자격 있는 전문가와 상의하세요.` },
						{ q: '강의나 기사에서 사이트를 사용해도 되나요?', a: `물론입니다. 계산기와 가이드로 링크를 거는 것은 권장 사항입니다. 페이지 전체를 캡처해 자기 콘텐츠처럼 재호스팅하지만 말아 주세요.` }
					]
				}
			]
		},
		ja: {
			title: 'よくある質問',
			subtitle: `${SITE_NAME} がどのように動くか、データをどう扱うか、運営費をどう賄うかについての詳細な回答です。`,
			sections: [
				{
					heading: 'サイトと計算機について',
					faqs: [
						{ q: `${SITE_NAME} とは何ですか？`, a: `${SITE_NAME} は無料のブラウザベース計算機集です。各計算機は完全にブラウザ内で動き、サーバーサイド実行・アップロード・リモート処理待ちは一切ありません。` },
						{ q: `${SITE_NAME} は無料ですか？有料プランはありますか？`, a: '無料で、有料プランはありません。ディスプレイ広告で運営しています。' },
						{ q: '登録は必要ですか？', a: `不要です。すべての計算機はアカウント無しで動きます。` },
						{ q: '対応する端末・ブラウザは？', a: '最新のデスクトップ・モバイルブラウザ（Chrome 90+、Firefox 90+、Safari 15+、Edge 90+）に対応。モバイルファースト設計で、スマホ・タブレットでも快適です。' },
						{ q: 'オフラインで動きますか？', a: `静的ページは初回読み込み後にキャッシュされ、一度見た計算機は不安定な接続でも描画されます。計算機自体はブラウザで計算するためネットワーク不要です。` },
						{ q: 'モバイルアプリはありますか？', a: 'ありません。ブラウザをランタイムとして使います。' },
						{ q: '保存された設定をリセットするには？', a: 'ブラウザの設定で本ドメインの「サイトデータ」または「ストレージ」を見つけて削除してください。' },
						{ q: `計算機の誤った結果はどう報告すれば？`, a: '件名に [BUG] を入れて、ページ URL、使用した入力、得られた結果、期待した結果を含めてください。' },
						{ q: `新しい計算機はどう要望すれば？`, a: '件名に [FEATURE] を入れてメールしてください。一文か二文でユースケースを書くと一語要望よりずっと効果的です。' },
						{ q: 'なぜ読み込みが速いのですか？', a: `計算が遠隔サーバーではなくブラウザで行われるため、加えて Cloudflare のエッジで事前レンダリング・積極的キャッシュしているため、HTML がほとんどの国で 100 ms 以内に届きます。` }
					]
				},
				{
					heading: '広告とマネタイズ',
					faqs: [
						{ q: 'なぜ広告があるのですか？', a: '広告がすべての費用（ホスティング、ガイド執筆、翻訳レビュー、小さなチーム）を支えています。' },
						{ q: 'パーソナライズ広告をオフにできますか？', a: 'EU、英国、韓国から初訪問時に Google 提供の同意バナーが表示されます。https://adssettings.google.com からはいつでも変更可能です。' },
						{ q: 'スポンサーシップは受けますか？', a: `時々あります — ただしスポンサーの提案がオーディエンスに合致し、スポンサーシップであることを明確に表示できる場合に限ります。スポンサードコンテンツを通常の計算機やガイドに偽装することはありません。` }
					]
				},
				{
					heading: 'プライバシー・データ・セキュリティ',
					faqs: [
						{ q: '入力を記録していますか？', a: `いいえ。計算機に入力したすべての値はブラウザに留まります。ご提供のテキスト・数値・ファイル・画像は当社サーバーには到達しません。` },
						{ q: 'では何を収集していますか？', a: '標準的な集計分析データ: ページ URL、リファラ、マスキングされた IP から推定された国、ブラウザの種類、OS、画面サイズ、言語設定、広告関連イベント。' },
						{ q: '個人データを販売・共有しますか？', a: 'いいえ。インフラ事業者（Cloudflare、分析と広告のための Google）には運営に必要な最小限の情報のみを共有します。' },
						{ q: 'データを削除するには？', a: `ブラウザ内のデータはサイトのストレージを消去してください。メール対応履歴は ${CONTACT_EMAIL} に件名 [LEGAL] でご連絡ください。` },
						{ q: 'サーバーはどこにありますか？', a: 'Cloudflare Pages にデプロイし、グローバルエッジネットワークでトラフィックを処理しています。' }
					]
				},
				{
					heading: '技術スタック',
					faqs: [
						{ q: 'サイトは何で作られていますか？', a: 'フロントエンドは SvelteKit + TypeScript、スタイリングは Tailwind CSS、ホスティングとエッジロジックは Cloudflare Pages + Workers です。' },
						{ q: 'ソースコードは公開されていますか？', a: '一部は GitHub に公開しています。サイト全体のコードは現在オープンソースではありません。' },
						{ q: '計算の精度は？', a: `計算機の全公式はガイドページまたはインラインツールチップに文書化されています。` },
						{ q: 'アクセシビリティはどう扱っていますか？', a: 'キーボードのみのナビゲーション、スクリーンリーダーでの主要フロー確認、長文 WCAG 2.2 AA を目標としています。' },
						{ q: `${SITE_NAME} は完全に多言語ですか？`, a: `はい。UI、計算機、ガイド、法的ページのすべてを英・韓・日・中で提供しています。` }
					]
				},
				{
					heading: '法務と責任',
					faqs: [
						{ q: 'サイトの責任者は誰ですか？', a: `${SITE_NAME} は韓国のソフトウェア会社 SDK Co., Ltd.（事業者登録番号 871-81-03242）が運営しています。` },
						{ q: `${SITE_NAME} 計算機の結果を専門アドバイスとして使えますか？`, a: `いいえ。当社の計算機は情報目的の概算を提供するのみで、金融、法律、医療等の専門アドバイスではありません。重要な決定は資格ある専門家にご相談ください。` },
						{ q: '授業や記事でサイトを使えますか？', a: `もちろんです。計算機やガイドへのリンクは推奨です。ページ全体をスクリーンショットして自分のものとして再ホストすることだけはご遠慮ください。` }
					]
				}
			]
		},
		zh: {
			title: '常见问题',
			subtitle: `关于 ${SITE_NAME} 如何工作、我们如何处理您的数据、以及我们如何维持运营的详细解答。`,
			sections: [
				{
					heading: '关于网站与计算器',
					faqs: [
						{ q: `${SITE_NAME} 究竟是什么？`, a: `${SITE_NAME} 是一套免费的、基于浏览器的计算器。每个计算器都完全在浏览器中运行 — 没有服务器端执行、没有上传、没有远程服务等待。` },
						{ q: `${SITE_NAME} 免费吗？是否有付费版？`, a: '免费，且没有付费版。我们靠展示广告维持运营。' },
						{ q: '需要注册吗？', a: `不需要。每个计算器都无需账户即可使用。` },
						{ q: '支持哪些设备和浏览器？', a: '任何现代桌面或移动浏览器（Chrome 90+、Firefox 90+、Safari 15+、Edge 90+）。网站为移动端优先，手机和平板上同样好用。' },
						{ q: '离线能用吗？', a: `静态页面在首次加载后会被良好缓存，因此即使网络不稳，看过一次的计算器仍能渲染。计算器本身在浏览器中计算，不需要网络。` },
						{ q: '有移动端 App 吗？', a: '没有。我们以浏览器作为跨平台运行时。' },
						{ q: '如何重置已保存的设置？', a: '打开浏览器设置，找到本域名的"网站数据"或"存储"，将其清空。所有偏好都仅保存在浏览器 localStorage 中。' },
						{ q: `如何反馈某个计算器的错误结果？`, a: '请在主题中加上 [BUG]，附上页面 URL、您输入的数据、得到的结果以及您预期的结果。' },
						{ q: `如何申请新的计算器？`, a: '请在邮件主题中加上 [FEATURE]。用一两句话说明用例比单字请求有效得多。' },
						{ q: '为什么加载这么快？', a: `因为计算发生在浏览器而非远程服务器，加之我们在 Cloudflare 边缘进行预渲染与激进缓存，HTML 在大多数国家会在 100 毫秒内到达。` }
					]
				},
				{
					heading: '广告与盈利',
					faqs: [
						{ q: '为什么有广告？', a: '广告承担全部成本：托管、撰写指南、翻译审校以及网站背后的小团队。' },
						{ q: '能关闭个性化广告吗？', a: '可以。从欧盟、英国或韩国首次访问时，会出现 Google 同意横幅。您也可以在 https://adssettings.google.com 修改偏好。' },
						{ q: '接受赞助吗？', a: `偶尔接受 — 但仅当赞助方提议与受众契合且能清晰标注赞助身份。我们不会把赞助内容伪装成普通计算器或指南。` }
					]
				},
				{
					heading: '隐私、数据与安全',
					faqs: [
						{ q: '会记录我的输入吗？', a: `不会。您输入到计算器的每一项内容都留在浏览器中。提供的文本、数字、文件、图片永远不会到达我们的服务器。` },
						{ q: '那么收集了哪些数据？', a: '标准的聚合分析数据：页面 URL、来源、基于截断 IP 推断的国家、浏览器系列、操作系统、屏幕尺寸、语言偏好以及广告相关事件。' },
						{ q: '会出售或共享个人数据吗？', a: '不会。仅在书面协议下与基础设施服务商（Cloudflare、用于分析与广告的 Google）共享运营所需的最少信息。' },
						{ q: '如何删除我的数据？', a: `对于浏览器中的数据，清除站点存储即可。对于邮件往来记录，请发送邮件至 ${CONTACT_EMAIL}，主题加上 [LEGAL]。` },
						{ q: '服务器在哪里？', a: '我们部署在 Cloudflare Pages，由全球边缘网络承载流量。' }
					]
				},
				{
					heading: '技术栈',
					faqs: [
						{ q: '网站用什么构建？', a: '前端基于 SvelteKit + TypeScript，使用 Tailwind CSS 设计样式，托管与边缘逻辑使用 Cloudflare Pages + Workers。' },
						{ q: '源代码开源吗？', a: '部分公开在 GitHub 上。整个网站代码目前并不开源。' },
						{ q: '计算精度如何？', a: `计算器中的所有公式都在指南页或行内提示中有说明。` },
						{ q: '无障碍方面如何处理？', a: '我们进行仅键盘导航测试、屏幕阅读器走查关键流程，并对长文内容力求达到 WCAG 2.2 AA 合规。' },
						{ q: `${SITE_NAME} 是否端到端多语言？`, a: `是的。UI、计算器、指南与法律页面均提供英语、韩语、日语与中文版本。` }
					]
				},
				{
					heading: '法律与责任',
					faqs: [
						{ q: '网站由谁负责？', a: `${SITE_NAME} 由韩国软件公司 SDK Co., Ltd.（营业执照编号 871-81-03242）运营。运营者信息与联系方式见关于和联系页面。` },
						{ q: `${SITE_NAME} 计算器的结果可以作为专业建议吗？`, a: `不可以。我们的计算器仅提供信息性估算，不构成金融、法律、医疗或其他专业建议。重大决策请咨询合格专业人士。` },
						{ q: '可以在课堂或文章中使用本网站吗？', a: `当然。鼓励链接到计算器与指南。请不要把整页截图后再以自己的内容名义重新发布。` }
					]
				}
			]
		}
	};

	$: t = content[lang] || content.en;
</script>

<svelte:head>
	<title>{t.title} - {SITE_NAME}</title>
	<meta name="description" content={t.subtitle} />
</svelte:head>

<div class="max-w-3xl mx-auto px-4 py-12">
	<div class="text-center mb-12">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-3">{t.title}</h1>
		<p class="text-gray-600 dark:text-dark-400 leading-relaxed">{t.subtitle}</p>
	</div>

	<div class="space-y-12">
		{#each t.sections as section}
			<section>
				<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-5">{section.heading}</h2>
				<div class="space-y-3">
					{#each section.faqs as faq}
						<details class="group bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-dark-700">
							<summary class="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 dark:text-dark-100">
								<span class="pr-4">{faq.q}</span>
								<svg class="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
								</svg>
							</summary>
							<div class="px-6 pb-6">
								<p class="text-gray-600 dark:text-dark-400 leading-relaxed">{faq.a}</p>
							</div>
						</details>
					{/each}
				</div>
			</section>
		{/each}
	</div>
</div>
