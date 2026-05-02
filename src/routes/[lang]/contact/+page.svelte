<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const SITE_NAME = 'SD.gy';
	const SITE_DOMAIN = 'sd.gy';
	const CONTACT_EMAIL = 'contact@sd.gy';
	const COMPANY_NAME = 'SDK Co., Ltd.';
	const BUSINESS_NUMBER = '871-81-03242';
	const ECOMMERCE_NUMBER = '2024-고양일산서-1820';
	const COMPANY_ADDRESS = '제주특별자치도 제주시 남성로 127, 4층';
	const COMPANY_ADDRESS_EN = '4F, 127 Namseong-ro, Jeju-si, Jeju Special Self-Governing Province, Republic of Korea';

	const content = {
		en: {
			title: 'Contact Us',
			subtitle: `We read every message. Whether you found a bug, want to suggest a new calculator, or want to know where ${SITE_NAME} sits in your stack — write to us and we will write back.`,
			emailHeading: 'Email Us',
			emailIntro: 'The fastest way to reach a real human on our team is e-mail. Please use the address below.',
			email: CONTACT_EMAIL,
			responseHeading: 'Response Time and Hours',
			responseParagraphs: [
				`We aim to acknowledge every message within 24 hours on business days (Monday through Friday, 09:00–18:00 Korea Standard Time, excluding Korean public holidays). Substantive replies typically take 24–48 hours, depending on how much investigation is required.`,
				`If your message is time-sensitive (e.g., a production-impacting bug or a press deadline), please add "URGENT" to your subject line and we will move it to the top of the queue.`,
				`Messages received during weekends and holidays are queued and answered on the next business day. We are not a 24/7 operation — being a small, sustainable team is part of why we can keep ${SITE_NAME} free.`
			],
			topicsHeading: 'Pick the Right Topic',
			topicsIntro: 'A clear subject line gets you a faster, more accurate reply. Here are the topics that get routed automatically:',
			topics: [
				{ tag: '[BUG]', title: 'Bug Reports', description: `You found something broken — a calculator returns the wrong number, an input is rejected, a page won't load, or a result looks corrupt. Please include reproduction steps, your browser and version, your operating system, and any console errors. A short screen recording or screenshot helps enormously.` },
				{ tag: '[FEATURE]', title: 'Feature & Tool Requests', description: `You wish a specific calculation or calculator was on the site. We track every request and prioritise based on what comes up most often. Please describe the use-case in one or two sentences — that beats a one-word "regex tester please" by a wide margin.` },
				{ tag: '[CONTENT]', title: 'Content Suggestions', description: `You spotted a typo, a wrong formula, or have a better explanation in the guide page for a calculator. Detailed suggestions go straight into the next sprint.` },
				{ tag: '[PARTNERSHIP]', title: 'Partnership / Sponsorship', description: 'You represent an organisation that wants to sponsor a guide series, run an event, or co-author content. We are selective but open. Please include your organisation, what you have in mind, and any timing constraints.' },
				{ tag: '[PRESS]', title: 'Press / Media Inquiries', description: `You are a journalist, podcaster, or analyst working on a piece that involves ${SITE_NAME} or our team. Please include your outlet, deadline, and the angle you are pursuing.` },
				{ tag: '[LEGAL]', title: 'Legal / Privacy', description: 'You have a privacy concern, a takedown request, a DMCA notice, a GDPR/PIPA data-subject request, or a court order to discuss. We respond in writing only and route legal matters to our designated officer.' },
				{ tag: '[ACCOUNT]', title: 'Data / Browser Storage', description: `You want to delete your data, export your localStorage, or have a question about what we store. Note: ${SITE_NAME} keeps user data only in your browser — it never reaches our servers — so the fastest way to "delete your data" is usually to clear your browser storage for our domain.` },
				{ tag: '[FEEDBACK]', title: 'General Feedback', description: 'You like the site, you do not, you used to — all of it is welcome. We treat critical feedback as the highest-value input we get.' }
			],

			beforeYouEmailHeading: 'Before You Email Us',
			beforeYouEmailIntro: 'Some common questions are answered faster on existing pages. Please skim these first:',
			beforeYouEmail: [
				{ q: 'How do I clear data saved by your site?', a: 'Open your browser settings, find "site data" or "storage" for our domain, and clear it. That removes every preference and saved input — they live only in your browser.' },
				{ q: `Can I get the formula or methodology behind a particular calculator?`, a: 'Yes. Most pages link to a "Guide" or "How it works" section that documents the math. If you find a page that does not, e-mail us with [CONTENT] and we will add it.' },
				{ q: 'Why are there ads?', a: `Display ads pay for hosting and the writing. Without them ${SITE_NAME} would not exist as a free service. We try to keep ad density well below the industry average.` },
				{ q: 'Can I turn off personalised ads?', a: 'Yes. The first time you visit from the EU, the UK, or Korea you will see a Google-managed consent banner where you can refuse personalised advertising. You can also visit https://adssettings.google.com at any time to change those preferences globally for any Google-served ad.' },
				{ q: 'I am getting "Please disable your ad-blocker" — is that you?', a: 'No. We do not detect or block ad-blocker users. If a third-party script does, please report it via [BUG] and we will investigate.' },
				{ q: 'Do you have an API?', a: `Not yet. ${SITE_NAME} is a website-first product. If there is meaningful demand for a programmatic API for a particular calculator, e-mail us with [FEATURE] and we will look into it.` },
				{ q: 'Where do I send a privacy or GDPR request?', a: 'E-mail us with [LEGAL] in the subject. See our Privacy Policy for the formal officer details.' },
				{ q: 'Are you hiring?', a: 'We are a small team and hire infrequently. If we are open, the role will be posted on the homepage. Speculative résumés are read but cannot all be answered individually.' },
				{ q: `Will you support ${SITE_NAME} in language X?`, a: 'We currently support English, Korean, Japanese, and Chinese. Adding a language is a real commitment because we want native-speaker review. If you are willing to help review translations, mention it in your e-mail.' },
				{ q: 'My company blocks Cloudflare — can I get the site another way?', a: 'No alternate domain at this time. Most corporate Cloudflare blocks are about specific malicious endpoints rather than the whole edge; please contact your IT team if you need access from work.' }
			],

			whatNotToEmailHeading: `Please Don't Email Us For…`,
			whatNotToEmail: [
				`Generic financial or legal advice — ${SITE_NAME} provides everyday calculators, not professional advice. Talk to a qualified professional for decisions that matter.`,
				'Cryptocurrency / NFT / token offers. Auto-deleted.',
				'SEO outreach asking for a backlink in exchange for "high-quality content." Auto-deleted.',
				'Generic mass mailings to every site you found — we can tell.'
			],

			companyHeading: 'Company Information',
			companyParagraphs: [
				`${SITE_NAME} is operated by ${COMPANY_NAME}, a Korean software company. The legal information below is required by Korean e-commerce regulations and is provided for transparency.`
			],
			companyDetails: [
				{ label: 'Operator', value: COMPANY_NAME },
				{ label: 'Business Registration Number', value: BUSINESS_NUMBER },
				{ label: 'E-Commerce Registration Number', value: ECOMMERCE_NUMBER },
				{ label: 'Address', value: COMPANY_ADDRESS_EN },
				{ label: 'Address (Korean)', value: COMPANY_ADDRESS },
				{ label: 'Contact', value: CONTACT_EMAIL },
				{ label: 'Website', value: `https://${SITE_DOMAIN}` }
			],

			languagesHeading: 'Languages',
			languagesText: 'You can write to us in English or Korean. We can also read Japanese and Chinese, though replies in those languages may take a little longer while we review them.'
		},

		ko: {
			title: '문의하기',
			subtitle: `우리는 모든 메시지를 읽습니다. 버그를 발견하셨든, 새로운 계산기를 제안하고 싶으시든, 팀 스택에서 ${SITE_NAME}의 위치를 가늠하고 싶으시든 — 보내주시면 답장 드립니다.`,
			emailHeading: '이메일',
			emailIntro: '저희 팀의 실제 사람과 가장 빨리 닿는 방법은 이메일입니다. 아래 주소를 사용해 주세요.',
			email: CONTACT_EMAIL,
			responseHeading: '응답 시간 및 운영 시간',
			responseParagraphs: [
				`평일(월~금, 한국 표준시 09:00–18:00, 한국 공휴일 제외) 기준 24시간 이내에 모든 메시지의 접수 회신을 보내는 것을 목표로 합니다. 실질적 답변은 조사 범위에 따라 보통 24~48시간 소요됩니다.`,
				`시간이 촉박한 메시지(예: 운영 영향을 미치는 버그, 보도 마감)는 제목에 "URGENT"를 추가해 주시면 큐 상단으로 이동합니다.`,
				`주말과 공휴일에 도착한 메시지는 큐에 적재되어 다음 영업일에 응답합니다. 24/7 체제가 아니며, 작고 지속 가능한 팀을 유지하는 것이 ${SITE_NAME}을 무료로 운영할 수 있는 비결 중 하나입니다.`
			],
			topicsHeading: '주제 선택',
			topicsIntro: '명확한 제목은 더 빠르고 정확한 답변으로 이어집니다. 자동 라우팅되는 주제는 다음과 같습니다.',
			topics: [
				{ tag: '[BUG]', title: '버그 신고', description: `계산기가 잘못된 수치를 반환하거나, 입력이 거부되거나, 페이지가 로드되지 않거나, 결과가 깨져 보이는 경우. 재현 단계, 브라우저와 버전, 운영체제, 콘솔 에러를 포함해 주세요. 짧은 화면 녹화나 스크린샷이 큰 도움이 됩니다.` },
				{ tag: '[FEATURE]', title: '기능·도구 요청', description: `특정 계산이나 계산기가 사이트에 있었으면 좋겠다는 요청. 모든 요청을 추적하고 자주 등장하는 순서대로 우선순위를 정합니다. 한두 문장으로 사용 사례를 설명해 주시는 편이 "정규식 테스터 추가요"보다 훨씬 도움이 됩니다.` },
				{ tag: '[CONTENT]', title: '콘텐츠 제안', description: `발견한 오타, 잘못된 공식, 또는 계산기 가이드 페이지의 더 나은 설명 제안. 구체적 제안은 다음 스프린트에 바로 들어갑니다.` },
				{ tag: '[PARTNERSHIP]', title: '파트너십·스폰서십', description: '가이드 시리즈를 후원하고 싶은 조직, 이벤트를 함께 진행하고 싶은 조직, 콘텐츠 공동 저작 제안 등. 까다롭게 검토하지만 열려 있습니다. 조직, 구상, 일정 제약을 알려주세요.' },
				{ tag: '[PRESS]', title: '보도·미디어', description: `${SITE_NAME} 또는 저희 팀이 등장하는 기사를 준비 중인 기자, 팟캐스터, 분석가의 문의. 매체, 마감일, 다루는 관점을 알려주세요.` },
				{ tag: '[LEGAL]', title: '법무·개인정보', description: '개인정보 관련 우려, 게시물 삭제 요청, DMCA 통지, GDPR/개인정보보호법 정보주체 요청, 영장·법원 명령 등. 법무 사안은 서면으로만 응답하며 지정 책임자에게 라우팅됩니다.' },
				{ tag: '[ACCOUNT]', title: '데이터·브라우저 저장소', description: `데이터 삭제 요청, localStorage 내보내기, 보관 데이터에 대한 질문. 참고: ${SITE_NAME}의 이용자 데이터는 브라우저에만 존재하고 서버에 닿지 않으므로, "데이터 삭제"의 가장 빠른 방법은 보통 본 도메인의 브라우저 스토리지를 직접 비우는 것입니다.` },
				{ tag: '[FEEDBACK]', title: '일반 피드백', description: '사이트가 좋다, 별로다, 예전엔 좋았다 — 모두 환영합니다. 비판적 피드백을 가장 가치 있는 입력으로 다룹니다.' }
			],

			beforeYouEmailHeading: '이메일 보내기 전에',
			beforeYouEmailIntro: '일부 자주 묻는 질문은 기존 페이지에서 더 빨리 해결할 수 있습니다. 먼저 훑어봐 주세요.',
			beforeYouEmail: [
				{ q: '사이트가 저장한 데이터를 어떻게 지우나요?', a: '브라우저 설정에서 본 도메인의 "사이트 데이터" 또는 "저장소"를 찾아 삭제하세요. 모든 환경설정과 저장된 입력값이 함께 사라집니다 — 그 데이터는 브라우저에만 존재합니다.' },
				{ q: `특정 계산기의 공식이나 방법론을 알 수 있나요?`, a: '네. 대부분의 페이지에는 수식을 문서화한 "가이드" 또는 "동작 방식" 섹션이 링크되어 있습니다. 없는 페이지를 발견하시면 [CONTENT]로 메일 주시면 추가하겠습니다.' },
				{ q: '왜 광고가 있나요?', a: `디스플레이 광고가 호스팅과 집필 비용을 충당합니다. 광고가 없다면 무료 서비스로서 ${SITE_NAME}은 존재할 수 없습니다.` },
				{ q: '맞춤형 광고를 끌 수 있나요?', a: 'EU·영국·한국에서 처음 방문하시면 Google이 관리하는 동의 배너가 표시되며, 거기서 맞춤형 광고를 거부할 수 있습니다. https://adssettings.google.com 에서 언제든 모든 Google 광고에 대한 설정을 변경할 수 있습니다.' },
				{ q: '"광고 차단기를 비활성화하라"는 메시지가 보입니다 — 이게 저희인가요?', a: '아닙니다. 저희는 광고 차단기 사용자를 탐지하거나 차단하지 않습니다. 제3자 스크립트가 그런 동작을 한다면 [BUG]로 신고해 주세요.' },
				{ q: 'API가 있나요?', a: `아직 없습니다. ${SITE_NAME}은 웹사이트 우선 제품입니다. 특정 계산기의 프로그래매틱 API에 의미 있는 수요가 있다면 [FEATURE]로 알려주세요.` },
				{ q: '개인정보·GDPR 요청은 어디로 보내나요?', a: '제목에 [LEGAL]을 포함하여 메일을 보내 주세요. 정식 책임자 정보는 개인정보 처리방침에 안내되어 있습니다.' },
				{ q: '채용 중인가요?', a: '작은 팀이라 채용 빈도가 낮습니다. 채용이 진행될 경우 홈페이지에 게시됩니다.' },
				{ q: `X 언어로 ${SITE_NAME}을 지원해 주실 수 있나요?`, a: '현재는 영어, 한국어, 일본어, 중국어를 지원합니다. 언어 추가는 원어민 검수가 필요한 실질적 약속입니다. 번역 검수를 도와주실 수 있다면 메일에 명시해 주세요.' },
				{ q: '회사가 Cloudflare를 차단합니다 — 다른 방법으로 사이트에 접속할 수 있나요?', a: '현재 대체 도메인은 없습니다. 대부분의 회사 Cloudflare 차단은 특정 악성 엔드포인트에 대한 것이며 엣지 전체를 막지는 않습니다. 회사 IT 팀에 문의해 보세요.' }
			],

			whatNotToEmailHeading: '아래의 경우에는 이메일을 자제해 주세요',
			whatNotToEmail: [
				`일반적인 금융·법률 자문 — ${SITE_NAME}은 일상 계산기를 제공하지 전문 자문이 아닙니다. 중요한 결정은 자격 있는 전문가와 상의하세요.`,
				'암호화폐·NFT·토큰 관련 제안. 자동 삭제됩니다.',
				'"고품질 콘텐츠 교환"으로 백링크를 요청하는 SEO 아웃리치. 자동 삭제됩니다.',
				'수많은 사이트에 동시 발송된 일괄 이메일 — 저희는 알아챕니다.'
			],

			companyHeading: '회사 정보',
			companyParagraphs: [
				`${SITE_NAME}은 한국 소프트웨어 회사 ${COMPANY_NAME}이 운영합니다. 아래 법적 정보는 한국 전자상거래법령에 따라 요구되는 사항으로, 투명성을 위해 제공됩니다.`
			],
			companyDetails: [
				{ label: '운영자', value: COMPANY_NAME },
				{ label: '사업자등록번호', value: BUSINESS_NUMBER },
				{ label: '통신판매업 신고번호', value: ECOMMERCE_NUMBER },
				{ label: '주소', value: COMPANY_ADDRESS },
				{ label: 'Address (English)', value: COMPANY_ADDRESS_EN },
				{ label: '연락처', value: CONTACT_EMAIL },
				{ label: '웹사이트', value: `https://${SITE_DOMAIN}` }
			],

			languagesHeading: '언어',
			languagesText: '영어 또는 한국어로 메일을 보내 주실 수 있습니다. 일본어와 중국어도 읽을 수 있으나, 해당 언어로 답장 시 검토에 약간 더 시간이 걸릴 수 있습니다.'
		},

		ja: {
			title: 'お問い合わせ',
			subtitle: `すべてのメッセージに目を通します。バグを見つけた、新しい計算機を提案したい、チームのスタックでの ${SITE_NAME} の立ち位置を考えている — どんな内容でもお書きいただければ返信します。`,
			emailHeading: 'メールでのご連絡',
			emailIntro: '実際の担当者に最も早く届くのはメールです。下記のアドレスをご利用ください。',
			email: CONTACT_EMAIL,
			responseHeading: '応答時間と営業時間',
			responseParagraphs: [
				`営業日（月〜金、韓国標準時 09:00〜18:00、韓国の祝日を除く）24 時間以内にすべてのメッセージの受信確認をお返しすることを目標としています。実質的な回答は調査範囲によって通常 24〜48 時間ほどかかります。`,
				`緊急性の高い内容は件名に「URGENT」を追加していただければキューの最上段に移動します。`,
				`週末・祝日に届いたメッセージは翌営業日に対応します。24/7 体制ではなく、小さく持続可能なチームを保つことが ${SITE_NAME} を無料で運営できる理由の一つです。`
			],
			topicsHeading: '適切なトピックを選んでください',
			topicsIntro: '明確な件名はより早く正確な回答につながります。自動的に振り分けられるトピックは次のとおりです。',
			topics: [
				{ tag: '[BUG]', title: '不具合報告', description: `計算機が誤った数値を返す、入力が拒否される、ページが読み込まれない、結果が壊れている等。再現手順、ブラウザとバージョン、OS、コンソールエラーを含めてください。` },
				{ tag: '[FEATURE]', title: '機能・ツールのリクエスト', description: `特定の計算や計算機が欲しい、というご要望。すべてのリクエストを追跡し、頻度順に優先度を決めます。一文でユースケースを書いていただけると非常に助かります。` },
				{ tag: '[CONTENT]', title: 'コンテンツのご提案', description: `誤字、誤った公式、ガイドページのよりよい説明案など。` },
				{ tag: '[PARTNERSHIP]', title: '提携・スポンサーシップ', description: 'ガイドシリーズへのスポンサー、イベント共催、コンテンツ共著の提案など。' },
				{ tag: '[PRESS]', title: '報道・メディア', description: `${SITE_NAME} や当チームを取り上げる記事を準備中の方々。媒体、締切、切り口をお知らせください。` },
				{ tag: '[LEGAL]', title: '法務・プライバシー', description: 'プライバシー上の懸念、削除依頼、DMCA 通知、GDPR/PIPA データ主体請求、令状や裁判所命令など。' },
				{ tag: '[ACCOUNT]', title: 'データ・ブラウザストレージ', description: `データ削除、localStorage のエクスポート、保管データに関する質問。${SITE_NAME} のユーザーデータはブラウザ内にのみ存在し、サーバーには到達しません。` },
				{ tag: '[FEEDBACK]', title: '一般的なフィードバック', description: 'サイトが好き、好きじゃない、以前は好きだった — どれも歓迎です。' }
			],

			beforeYouEmailHeading: 'メールを送る前に',
			beforeYouEmailIntro: 'よくある質問は既存ページの方が解決が早いことがあります。先にざっと目を通してください。',
			beforeYouEmail: [
				{ q: 'サイトが保存したデータを消すには？', a: 'ブラウザの設定で本ドメインの「サイトデータ」または「ストレージ」を見つけて削除してください。すべての設定と保存入力が消えます。' },
				{ q: `特定の計算機の公式や方法論はどこにありますか？`, a: 'はい。多くのページには公式を文書化した「ガイド」または「動作」セクションへのリンクがあります。無いページを見つけたら [CONTENT] でメールください。' },
				{ q: 'なぜ広告がありますか？', a: 'ディスプレイ広告がホスティングと執筆の費用を支えます。' },
				{ q: 'パーソナライズ広告をオフにできますか？', a: 'EU・英国・韓国からの初訪問時に Google 提供の同意バナーが表示されます。https://adssettings.google.com からはいつでも変更可能です。' },
				{ q: '「広告ブロッカーを無効にしてください」と表示されました — 御社ですか？', a: '違います。当社は広告ブロッカー利用者を検知も遮断もしていません。' },
				{ q: 'API はありますか？', a: `まだありません。${SITE_NAME} はウェブサイト第一の製品です。具体的な需要があれば [FEATURE] でご連絡ください。` },
				{ q: 'プライバシー・GDPR 請求はどこに送ればよいですか？', a: '件名に [LEGAL] を入れてメールしてください。' },
				{ q: '採用していますか？', a: '小さなチームのため採用頻度は高くありません。募集があればトップページに掲載します。' },
				{ q: `X 言語での ${SITE_NAME} 対応は可能ですか？`, a: '現在は英・韓・日・中対応です。言語追加にはネイティブレビューが必要です。' },
				{ q: '会社が Cloudflare を遮断しています — 別の方法でアクセスできますか？', a: '現時点で代替ドメインはありません。社内 IT にご相談ください。' }
			],

			whatNotToEmailHeading: '次のような内容のメールはご遠慮ください',
			whatNotToEmail: [
				`一般的な金融・法律アドバイス — ${SITE_NAME} は日常の計算機を提供しますが、専門アドバイスではありません。`,
				'暗号資産・NFT・トークン関連のオファー。自動削除されます。',
				'「高品質コンテンツとの交換」としてバックリンクを求める SEO アウトリーチ。自動削除されます。',
				'多数のサイトへの一斉送信メール — こちらでは判別できます。'
			],

			companyHeading: '会社情報',
			companyParagraphs: [
				`${SITE_NAME} は韓国のソフトウェア会社 ${COMPANY_NAME} が運営しています。下記の法的情報は韓国電子商取引関連法令で求められるもので、透明性のため掲載しています。`
			],
			companyDetails: [
				{ label: '運営者', value: COMPANY_NAME },
				{ label: '事業者登録番号', value: BUSINESS_NUMBER },
				{ label: '通信販売業申告番号', value: ECOMMERCE_NUMBER },
				{ label: '住所', value: COMPANY_ADDRESS },
				{ label: 'Address (English)', value: COMPANY_ADDRESS_EN },
				{ label: '連絡先', value: CONTACT_EMAIL },
				{ label: 'ウェブサイト', value: `https://${SITE_DOMAIN}` }
			],

			languagesHeading: '対応言語',
			languagesText: '英語または韓国語でメールをお送りいただけます。日本語と中国語も読みますが、確認のためそれらの言語での返信は少しお時間をいただく場合があります。'
		},

		zh: {
			title: '联系我们',
			subtitle: `我们会阅读每一条消息。无论您发现了缺陷、想建议一个新的计算器、还是在思考 ${SITE_NAME} 在团队技术栈中的位置 — 写信给我们，我们都会回复。`,
			emailHeading: '通过邮件联系',
			emailIntro: '联系到我们团队真人最快的方式是邮件。请使用下方地址。',
			email: CONTACT_EMAIL,
			responseHeading: '响应时间与工作时间',
			responseParagraphs: [
				`我们的目标是在工作日（周一至周五，韩国标准时间 09:00–18:00，韩国法定节假日除外）24 小时内确认每一封邮件。实质性回复通常需要 24–48 小时。`,
				`时间紧迫的邮件请在主题中加上 "URGENT"，我们会将其移到队列前列。`,
				`周末与节假日收到的邮件会进入队列，于下一个工作日回复。我们不是 7×24 团队 — 保持小规模、可持续是 ${SITE_NAME} 能够保持免费的原因之一。`
			],
			topicsHeading: '请选对主题',
			topicsIntro: '清晰的主题能换来更快、更准确的回复。以下主题会被自动分流：',
			topics: [
				{ tag: '[BUG]', title: '错误报告', description: `计算器给出错误数字、输入被拒绝、页面无法加载、结果显示异常等。请附上重现步骤、浏览器及版本、操作系统、控制台错误。` },
				{ tag: '[FEATURE]', title: '功能与工具请求', description: `希望网站具备的特定计算或计算器。我们会跟踪所有请求并按出现频次排定优先级。请用一两句话说明用例。` },
				{ tag: '[CONTENT]', title: '内容建议', description: `发现的拼写错误、错误公式、或对计算器指南页的更佳说明。` },
				{ tag: '[PARTNERSHIP]', title: '合作 / 赞助', description: '赞助指南系列、举办活动、共创内容的组织。' },
				{ tag: '[PRESS]', title: '媒体 / 公关咨询', description: `准备撰写涉及 ${SITE_NAME} 或我们团队的报道的记者、播客主或分析师。` },
				{ tag: '[LEGAL]', title: '法律 / 隐私', description: '隐私问题、内容下架请求、DMCA 通知、GDPR/PIPA 数据主体请求或法院命令。' },
				{ tag: '[ACCOUNT]', title: '数据 / 浏览器存储', description: `数据删除、localStorage 导出、关于我们存储内容的疑问。${SITE_NAME} 的用户数据只在浏览器中。` },
				{ tag: '[FEEDBACK]', title: '通用反馈', description: '喜欢、不喜欢、曾经喜欢 — 都欢迎。' }
			],

			beforeYouEmailHeading: '在写信之前',
			beforeYouEmailIntro: '一些常见问题在现有页面上能更快得到解答。请先大致浏览：',
			beforeYouEmail: [
				{ q: '如何清除你们网站保存的数据？', a: '打开浏览器设置，找到本域名的"网站数据"或"存储"，将其清空。所有偏好与保存的输入都会一并清除。' },
				{ q: `如何查看某个计算器的公式或方法论？`, a: '是的。大多数页面都链接到记录数学方法的"指南"或"工作原理"章节。如有页面缺失，请用 [CONTENT] 邮件告知，我们会补上。' },
				{ q: '为什么有广告？', a: `展示广告承担了托管与写作成本。没有广告就没有免费的 ${SITE_NAME}。` },
				{ q: '能关闭个性化广告吗？', a: '可以。从欧盟、英国或韩国首次访问时会出现 Google 同意横幅。您也可以在 https://adssettings.google.com 修改偏好。' },
				{ q: '出现"请关闭广告拦截器"提示 — 是你们做的吗？', a: '不是。我们不会检测或拦截使用广告拦截器的用户。' },
				{ q: '有 API 吗？', a: `暂时没有。${SITE_NAME} 是网站优先的产品。如有具体需求请用 [FEATURE] 联系。` },
				{ q: '隐私或 GDPR 请求发送到哪里？', a: '请在邮件主题中加上 [LEGAL] 联系我们。' },
				{ q: '在招聘吗？', a: '我们是一支小团队，招聘频率不高。如有空缺会在主页公布。' },
				{ q: `能用 X 语言支持 ${SITE_NAME} 吗？`, a: '目前支持英语、韩语、日语和中文。新增语言需要母语审校。' },
				{ q: '公司屏蔽了 Cloudflare — 还有其他方式访问网站吗？', a: '目前没有备用域名。请联系您所在公司的 IT 团队。' }
			],

			whatNotToEmailHeading: '请勿将以下内容发送给我们',
			whatNotToEmail: [
				`一般性的金融或法律建议 — ${SITE_NAME} 提供日常计算器，并非专业建议。重要决策请咨询合格专业人士。`,
				'加密货币 / NFT / 代币相关推介。会被自动删除。',
				'声称用"高质量内容"换取反向链接的 SEO 群发。会被自动删除。',
				'广撒网式群发到多家网站的邮件 — 我们看得出。'
			],

			companyHeading: '公司信息',
			companyParagraphs: [
				`${SITE_NAME} 由韩国软件公司 ${COMPANY_NAME} 运营。下列法律信息按韩国电子商务相关法规要求公示。`
			],
			companyDetails: [
				{ label: '运营者', value: COMPANY_NAME },
				{ label: '营业执照编号', value: BUSINESS_NUMBER },
				{ label: '电子商务备案编号', value: ECOMMERCE_NUMBER },
				{ label: '地址', value: COMPANY_ADDRESS },
				{ label: 'Address (English)', value: COMPANY_ADDRESS_EN },
				{ label: '联系方式', value: CONTACT_EMAIL },
				{ label: '网站', value: `https://${SITE_DOMAIN}` }
			],

			languagesHeading: '语言',
			languagesText: '您可以使用英语或韩语联系我们。我们也能阅读日语和中文，但用这两种语言回复时可能略需时间确认。'
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

	<section class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700 mb-8 text-center">
		<h2 class="text-xl font-semibold text-gray-900 dark:text-dark-100 mb-2">{t.emailHeading}</h2>
		<p class="text-gray-600 dark:text-dark-400 mb-4">{t.emailIntro}</p>
		<a href="mailto:{t.email}" class="inline-block text-primary-500 hover:text-primary-400 font-semibold text-lg">{t.email}</a>
	</section>

	<section class="mb-10">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.responseHeading}</h2>
		{#each t.responseParagraphs as p}
			<p class="text-gray-700 dark:text-dark-300 leading-relaxed mb-3">{p}</p>
		{/each}
	</section>

	<section class="mb-10">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-3">{t.topicsHeading}</h2>
		<p class="text-gray-700 dark:text-dark-300 mb-6">{t.topicsIntro}</p>
		<div class="space-y-4">
			{#each t.topics as topic}
				<div class="bg-white dark:bg-dark-800 p-5 rounded-2xl border border-gray-200 dark:border-dark-700">
					<div class="flex items-baseline gap-3 mb-2">
						<code class="text-primary-500 font-mono text-sm">{topic.tag}</code>
						<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100">{topic.title}</h3>
					</div>
					<p class="text-gray-600 dark:text-dark-400 leading-relaxed">{topic.description}</p>
				</div>
			{/each}
		</div>
	</section>

	<section class="mb-10">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-3">{t.beforeYouEmailHeading}</h2>
		<p class="text-gray-700 dark:text-dark-300 mb-6">{t.beforeYouEmailIntro}</p>
		<div class="space-y-3">
			{#each t.beforeYouEmail as item}
				<details class="group bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700">
					<summary class="cursor-pointer p-4 font-semibold text-gray-900 dark:text-dark-100">{item.q}</summary>
					<p class="px-4 pb-4 text-gray-600 dark:text-dark-400 leading-relaxed">{item.a}</p>
				</details>
			{/each}
		</div>
	</section>

	<section class="mb-10">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.whatNotToEmailHeading}</h2>
		<ul class="list-disc pl-6 text-gray-700 dark:text-dark-300 space-y-2 leading-relaxed">
			{#each t.whatNotToEmail as item}
				<li>{item}</li>
			{/each}
		</ul>
	</section>

	<section class="mb-10">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-3">{t.companyHeading}</h2>
		{#each t.companyParagraphs as p}
			<p class="text-gray-700 dark:text-dark-300 leading-relaxed mb-4">{p}</p>
		{/each}
		<dl class="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 divide-y divide-gray-200 dark:divide-dark-700">
			{#each t.companyDetails as detail}
				<div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 px-5 py-3">
					<dt class="text-sm uppercase tracking-wide text-primary-500 sm:w-56 shrink-0">{detail.label}</dt>
					<dd class="text-gray-900 dark:text-dark-100 break-all">{detail.value}</dd>
				</div>
			{/each}
		</dl>
	</section>

	<section class="mb-10">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-3">{t.languagesHeading}</h2>
		<p class="text-gray-700 dark:text-dark-300 leading-relaxed">{t.languagesText}</p>
	</section>
</div>
