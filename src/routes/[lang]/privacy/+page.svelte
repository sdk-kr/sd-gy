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
	const EFFECTIVE_DATE = '2024-01-15';
	const LAST_UPDATED = '2026-05-02';

	const translations = {
		en: {
			title: 'Privacy Policy',
			lastUpdated: `Last Updated: ${LAST_UPDATED}`,
			effective: `Effective Date: ${EFFECTIVE_DATE}`,
			intro: `${COMPANY_NAME} ("Company", "we", "our", "us"), the operator of ${SITE_NAME} (the "Service"), respects your privacy and is committed to handling your personal data lawfully, fairly, and transparently. This Privacy Policy describes the categories of information we collect, how we use it, the legal bases on which we rely, the third parties we share it with, your rights under applicable laws (including the Personal Information Protection Act of the Republic of Korea ("PIPA") and the EU General Data Protection Regulation ("GDPR")), and how to exercise those rights. By accessing or using ${SITE_NAME}, you acknowledge that you have read and understood this Policy.`,
			sections: [
				{ title: '1. Scope of this Policy', content: `This Policy applies to the website hosted at https://${SITE_DOMAIN}, all subdomains, and any associated services we operate (collectively, the "Service"). It does not apply to third-party websites, services, or advertisers that we link to or that may appear in advertising networks served on the Service. We encourage you to review the privacy notices of those third parties before providing them with personal data. The Policy applies whether you visit the Service as a guest, a logged-in user, or as a representative of an organisation, and applies regardless of the device or network you use.` },
				{ title: '2. Personal Information We Collect', content: `We have intentionally designed ${SITE_NAME} to collect as little personal data as possible. Specifically:

- **Account Data**: ${SITE_NAME} does not require an account to use any of the everyday calculators. There is no sign-up flow, no e-mail collection, no password.
- **Tool / Calculator Inputs**: When you input data into a calculator (your weight, age, salary, dates, distance, etc.), the data is processed entirely in your browser. We do not transmit, log, or store the contents of your inputs on our servers under any circumstances.
- **Preferences**: Tool-specific settings (output unit, last-used calculator, theme) are stored only in your browser's localStorage and never reach our infrastructure.
- **Analytics Data (automatic)**: We collect aggregated, anonymised metrics such as page views, referring URL, approximate country (derived from a truncated IP address), browser family, operating system, screen size, and language preference. IP addresses are anonymised before storage by our analytics provider (the last octet is dropped).
- **Diagnostic Logs**: Cloudflare, our edge provider, automatically logs HTTP request metadata (timestamp, method, path, response status, edge POP, ASN, anonymised IP) for a short retention window for security, abuse prevention, and capacity planning.
- **Communication Data**: When you contact us by e-mail, we receive your e-mail address, the content of your message, and any files you choose to attach.

We do not knowingly collect special categories of personal data (e.g., health, religion, biometrics) and we do not collect government identifiers, payment-card numbers, or precise geolocation.` },
				{ title: '3. How We Use Your Information', content: `We use the limited information we collect for the following purposes, each tied to a specific legal basis:

- **Providing the Service** (legal basis: performance of a contract / legitimate interest in operating the Service): rendering pages, executing calculator logic in your own browser, and delivering static assets through our CDN.
- **Securing the Service** (legitimate interest): detecting and mitigating abuse, denial-of-service attacks, scraping, and credential stuffing using Cloudflare's edge security.
- **Improving the Service** (legitimate interest, with cookie consent where required): aggregated analytics that help us understand which calculators are useful, where users get stuck, and which pages are slow.
- **Showing Advertising** (consent / legitimate interest depending on jurisdiction): serving advertisements through Google AdSense to fund the free Service. EU/UK/Korean visitors see a Google-managed consent prompt before any personalised advertising cookies are set.
- **Responding to You** (consent / legitimate interest): replying to e-mails, bug reports, and partnership requests you send us.
- **Legal Compliance** (legal obligation): meeting requirements under PIPA, GDPR, the Korean Telecommunications Business Act, the Network Act, and lawful requests from competent authorities.` },
				{ title: '4. Cookies and Similar Technologies', content: `We use a small number of cookies and browser-storage technologies. You can clear them at any time through your browser settings.

- **Strictly Necessary**: a small session cookie set by our edge to balance traffic, mitigate bots, and maintain language preference. These cookies cannot be disabled if you wish to use the Service.
- **Functional / Preferences (localStorage)**: calculator settings and last-used options. This data never leaves your device.
- **Analytics (Google Analytics 4)**: anonymised usage measurement with IP-anonymisation enabled. Cookies set by Google in the \`_ga\` family expire after up to 24 months.
- **Advertising (Google AdSense)**: cookies and similar identifiers used to deliver ads, frequency-cap them, and measure performance. Where required by law (EU/UK/Korea), Google's Funding Choices banner asks for your consent before any personalised advertising identifiers are read or written.

You may opt out of personalised advertising at https://adssettings.google.com or through the Funding Choices banner that appears on first visit. You may also enable browser-level tracking protection (Safari ITP, Firefox ETP, Brave Shields, etc.).` },
				{ title: '5. Third-Party Service Providers', content: `We share the minimum necessary information with the following processors. Each processor acts under a written agreement requiring confidentiality, security, and use limited to the agreed purpose.

- **Cloudflare, Inc.** — content delivery, DDoS mitigation, edge logging.
- **Google LLC (Google Analytics 4)** — aggregated traffic analytics.
- **Google LLC (Google AdSense + Funding Choices)** — advertisement delivery and EU/UK/Korean consent management.

We do not sell, rent, or lend your personal data. We do not use it for purposes incompatible with this Policy.` },
				{ title: '6. International Data Transfers', content: `Some of our processors (Google, Cloudflare) operate globally and may process personal data in jurisdictions outside the Republic of Korea or the European Economic Area, including the United States. Where such transfers occur, we rely on safeguards including (i) Standard Contractual Clauses adopted by the European Commission, (ii) the EU-US Data Privacy Framework where applicable, and (iii) the cross-border-transfer disclosure obligations under PIPA Article 28-8.` },
				{ title: '7. Retention of Personal Information', content: `We retain personal data only for as long as necessary for the purpose for which it was collected:

- **Calculator inputs and preferences (localStorage)**: retained until you clear your browser storage. ${COMPANY_NAME} cannot delete this data on your behalf because it never reaches our servers.
- **Analytics data**: retained for up to 14 months by Google Analytics 4, then aggregated and the underlying user-level records deleted.
- **Edge / security logs**: retained by Cloudflare for up to 30 days for security and abuse-prevention purposes, then deleted.
- **E-mail correspondence**: retained for up to 3 years from the date of the last reply for customer-support and dispute-resolution purposes, then deleted, unless a longer retention period is required by law.

When personal data is no longer required, it is irreversibly deleted or anonymised.` },
				{ title: '8. Your Rights', content: `Depending on where you reside, you have some or all of the following rights with respect to your personal data:

- **Right of access** — confirm whether we hold your personal data and request a copy.
- **Right to rectification** — correct inaccurate or incomplete personal data.
- **Right to erasure** — request deletion of your personal data ("right to be forgotten" under GDPR Article 17 / PIPA Article 36).
- **Right to restrict processing** — limit how we use your personal data.
- **Right to data portability** — receive your data in a structured, commonly used, machine-readable format.
- **Right to object** — object to processing carried out on the basis of legitimate interest, including direct marketing.
- **Right to withdraw consent** — where processing is based on consent, withdraw it at any time without affecting the lawfulness of past processing.
- **Right to lodge a complaint** — with a supervisory authority such as the Personal Information Protection Commission (PIPC) of Korea or your local EU Data Protection Authority.

To exercise any of these rights, e-mail ${CONTACT_EMAIL}. We will respond within 30 days (extendable by 60 days for complex requests under GDPR, or within 10 days under PIPA).` },
				{ title: '9. Children\'s Privacy', content: `${SITE_NAME} is a general-audience resource and is not directed at children under the age of 14 (Republic of Korea) or under the age of 13/16 (United States / European Union, depending on the member state). We do not knowingly collect personal information from children below the applicable age. If you are a parent or guardian and believe a child has provided us with personal information, please contact ${CONTACT_EMAIL} and we will delete it promptly.` },
				{ title: '10. Security', content: `We protect personal data using a layered set of safeguards: encryption in transit using TLS 1.3 by default, edge-network DDoS and bot mitigation through Cloudflare, principle-of-least-privilege access controls for the small number of staff who can view operational logs, and routine review of dependencies and supply chain. No method of transmission over the Internet or electronic storage is 100% secure; while we apply commercially reasonable safeguards, we cannot guarantee absolute security.

In the unlikely event of a breach affecting personal data, we will notify the Personal Information Protection Commission and affected users without undue delay and within the 72-hour window required by GDPR Article 33 or the equivalent Korean notification timelines.` },
				{ title: '11. Personal Information Protection Officer', content: `Under PIPA Article 31, we have designated a person responsible for the protection of personal information:

- Operator: ${COMPANY_NAME}
- Business Registration Number: ${BUSINESS_NUMBER}
- E-Commerce Registration Number: ${ECOMMERCE_NUMBER}
- Address: ${COMPANY_ADDRESS_EN} (${COMPANY_ADDRESS})
- Personal Information Protection Officer: SDK Privacy Team
- Contact: ${CONTACT_EMAIL}

For inquiries, complaints, or requests regarding the handling of your personal information, please contact the officer above. You may also contact the Personal Information Protection Commission (https://www.pipc.go.kr / 1833-6972), the Korea Internet & Security Agency Privacy Call Centre (privacy.kisa.or.kr / 118), the Supreme Prosecutors' Office Cyber Investigation Division (1301), or the Korean National Police Agency Cyber Bureau (cyberbureau.police.go.kr / 182).` },
				{ title: '12. Changes to this Policy', content: `We may update this Policy from time to time. When we make material changes, we will (i) post the revised Policy at this URL with a new "Last Updated" date, (ii) where required by law, give at least 7 days' advance notice (30 days for changes adverse to users), and (iii) where the change is material and based on consent, request fresh consent. Your continued use of the Service after the effective date of any update constitutes acceptance of the revised Policy.` },
				{ title: '13. Contact', content: `For any question about this Policy, please reach out:

- E-mail: ${CONTACT_EMAIL}
- Postal: ${COMPANY_NAME}, ${COMPANY_ADDRESS_EN}
- Business Registration: ${BUSINESS_NUMBER}

We treat all privacy communications as a priority and aim to acknowledge them within two business days.` }
			]
		},
		ko: {
			title: '개인정보 처리방침',
			lastUpdated: `최종 수정일: ${LAST_UPDATED}`,
			effective: `시행일: ${EFFECTIVE_DATE}`,
			intro: `${COMPANY_NAME}(이하 "회사")는 ${SITE_NAME}(이하 "서비스")를 운영하며, 이용자의 개인정보를 적법하고 공정하며 투명하게 처리하기 위해 최선을 다하고 있습니다. 본 개인정보 처리방침은 회사가 수집하는 개인정보의 항목과 수집 방법, 이용 목적과 법적 근거, 제3자에 대한 제공 여부, 개인정보보호법 및 EU 일반개인정보보호규정(GDPR)상 이용자의 권리와 그 행사 방법을 안내합니다. 서비스를 이용함으로써 본 방침을 충분히 읽고 이해한 것으로 간주됩니다.`,
			sections: [
				{ title: '제1조 (적용 범위)', content: `본 방침은 https://${SITE_DOMAIN} 도메인 및 서브도메인에서 회사가 직접 운영하는 서비스 일체에 적용됩니다. 서비스에 게시된 외부 링크나 광고 네트워크를 통해 표시되는 제3자의 웹사이트·서비스에는 본 방침이 적용되지 않으며, 해당 사업자의 개인정보 처리방침을 별도로 확인하셔야 합니다. 본 방침은 모든 이용 형태와 기기·네트워크에 동일하게 적용됩니다.` },
				{ title: '제2조 (수집하는 개인정보 항목)', content: `회사는 ${SITE_NAME}이 수집하는 개인정보를 최소화하도록 설계하였습니다. 구체적으로는 다음과 같습니다.

- **계정 정보**: ${SITE_NAME}은 일상 계산기를 계정 없이 사용할 수 있습니다. 가입 과정도, 이메일 수집도, 비밀번호도 없습니다.
- **계산기 입력값**: 계산기에 입력하는 데이터(체중, 나이, 급여, 날짜, 거리 등)는 전적으로 브라우저에서 처리됩니다. 어떤 경우에도 회사 서버로 전송·로그·저장되지 않습니다.
- **환경설정**: 도구별 설정(출력 단위, 마지막으로 사용한 계산기, 테마)은 브라우저 localStorage에만 저장되며 회사 인프라에는 도달하지 않습니다.
- **자동 수집 분석 데이터**: 페이지뷰, 유입 URL, 국가(IP 일부 마스킹 후 추정), 브라우저 종류, 운영체제, 화면 크기, 언어 설정 등 비식별·집계된 통계가 자동 수집됩니다. IP 주소는 분석 사업자에 의해 마지막 옥텟이 제거된 상태로 저장됩니다.
- **에지 보안 로그**: 엣지 사업자(Cloudflare)는 보안·남용 방지·용량 산정 목적으로 HTTP 요청 메타데이터(시각, 메서드, 경로, 응답 코드, ASN, 마스킹된 IP)를 단기 보관합니다.
- **문의 정보**: 이메일 문의 시 이용자가 제공한 이메일 주소, 메일 본문, 첨부파일을 수신합니다.

회사는 민감정보(건강·종교·생체정보 등)를 의도적으로 수집하지 않으며, 주민등록번호, 신용카드번호, 정밀 위치 정보를 수집하지 않습니다.` },
				{ title: '제3조 (이용 목적과 법적 근거)', content: `수집한 정보는 다음 목적과 법적 근거에 따라 이용됩니다.

- **서비스 제공**(계약 이행 / 정당한 이익): 페이지 렌더링, 브라우저 내 계산기 로직 실행, CDN을 통한 정적 자산 전송.
- **보안 유지**(정당한 이익): 남용·DDoS·스크래핑·자격증명 도용 탐지 및 차단.
- **품질 개선**(정당한 이익, 필요 시 동의): 어떤 계산기가 유용한지, 어디서 이탈하는지, 어떤 페이지가 느린지를 파악하기 위한 집계 분석.
- **광고 노출**(동의 / 정당한 이익): 무료 서비스 운영을 위한 Google AdSense 광고 노출.
- **이용자 응대**(동의 / 정당한 이익): 이메일 문의, 버그 신고, 파트너십 요청에 대한 회신.
- **법적 의무 준수**(법적 의무): 개인정보보호법, GDPR, 전기통신사업법, 정보통신망법 및 권한 있는 기관의 적법한 요청 이행.` },
				{ title: '제4조 (쿠키 및 유사 기술)', content: `회사는 최소한의 쿠키와 브라우저 저장소만 사용하며, 이용자는 언제든 브라우저 설정을 통해 이를 삭제·차단할 수 있습니다.

- **필수 쿠키**: 트래픽 분산, 봇 차단, 언어 환경 유지를 위해 엣지에서 설정하는 세션 쿠키.
- **기능/환경설정 (localStorage)**: 계산기 설정과 최근 사용 옵션. 이용자 기기에서만 보관됩니다.
- **분석 (Google Analytics 4)**: IP 익명화가 활성화된 비식별 사용량 측정. \`_ga\` 계열 쿠키는 최대 24개월 후 만료됩니다.
- **광고 (Google AdSense)**: 광고 송출, 노출 횟수 제한, 성과 측정에 사용되는 쿠키 및 식별자. EU/UK/한국 이용자에게는 Google Funding Choices 배너로 사전 동의를 받습니다.

이용자는 https://adssettings.google.com 또는 첫 방문 시 표시되는 동의 배너에서 맞춤형 광고를 거부할 수 있습니다.` },
				{ title: '제5조 (제3자 처리위탁 및 제공)', content: `회사는 다음 처리자와 서면 계약을 체결하고 비밀유지·보안·목적 한정 의무를 부과한 상태에서 최소한의 정보를 공유합니다.

- **Cloudflare, Inc.** — 콘텐츠 전송, DDoS 차단, 엣지 로깅.
- **Google LLC (Google Analytics 4)** — 집계 트래픽 분석.
- **Google LLC (AdSense + Funding Choices)** — 광고 송출 및 EU/UK/한국 동의 관리.

회사는 개인정보를 판매·임대하지 않습니다.` },
				{ title: '제6조 (국외 이전)', content: `위 처리자(Google, Cloudflare 등)는 글로벌 사업자로서 한국 또는 EEA 외 지역(미국 등)에서 개인정보를 처리할 수 있습니다. 회사는 이러한 국외 이전에 대해 (i) EU 표준계약조항(SCC), (ii) 적용 가능한 경우 EU-US 데이터 프라이버시 프레임워크, (iii) 개인정보보호법 제28조의8에 따른 국외 이전 고지 의무를 이행합니다.` },
				{ title: '제7조 (보유 및 이용 기간)', content: `개인정보는 수집 목적 달성에 필요한 최소 기간 동안만 보유합니다.

- **계산기 입력값 및 환경설정(localStorage)**: 이용자가 브라우저 데이터를 삭제할 때까지 보관.
- **분석 데이터**: Google Analytics 4에서 최대 14개월 보관 후 집계화.
- **에지/보안 로그**: Cloudflare에서 최대 30일 보관 후 삭제.
- **이메일 문의 내역**: 응대 완료 후 최대 3년간 보관, 이후 삭제.

목적이 달성된 개인정보는 복구가 불가능한 방식으로 파기되거나 익명화됩니다.` },
				{ title: '제8조 (이용자의 권리)', content: `이용자는 거주 지역에 따라 다음 권리 일부 또는 전부를 행사할 수 있습니다.

- **열람권** — 회사가 보유한 개인정보를 확인하고 사본을 요청할 수 있는 권리.
- **정정·삭제권** — 부정확하거나 불완전한 개인정보의 수정·삭제를 요청할 권리(GDPR 제17조 / 개인정보보호법 제36조).
- **처리 정지권**.
- **이전권**.
- **거부권**.
- **동의 철회권**.
- **이의 제기권** — 개인정보보호위원회 또는 EU 회원국 감독기관에 이의를 제기할 권리.

권리 행사를 원하시는 경우 ${CONTACT_EMAIL}로 연락 주시기 바랍니다.` },
				{ title: '제9조 (만 14세 미만 아동의 개인정보)', content: `${SITE_NAME}은 일반 이용자를 대상으로 하며 한국 기준 만 14세 미만 아동을 직접 대상으로 하지 않습니다. 회사는 해당 연령 미만 아동의 개인정보를 의도적으로 수집하지 않습니다. 자녀가 회사에 개인정보를 제공한 사실을 발견한 보호자께서는 ${CONTACT_EMAIL}로 알려주시면 지체 없이 삭제하겠습니다.` },
				{ title: '제10조 (개인정보의 안전성 확보 조치)', content: `회사는 개인정보보호법 제29조에 따라 다음과 같은 보호조치를 취합니다.

- 전송 구간 TLS 1.3 기본 적용
- Cloudflare 엣지 단의 DDoS·봇 차단 및 WAF 적용
- 운영 로그 접근 권한의 최소화 및 접근 기록 보관
- 정기적 의존성 취약점 점검과 공급망 보안 검토

100% 안전 보장은 어렵지만 회사는 상업적으로 합리적인 수준의 보호조치를 적용합니다.` },
				{ title: '제11조 (개인정보 보호 책임자)', content: `개인정보보호법 제31조에 따라 다음과 같이 개인정보 보호 책임자를 지정합니다.

- 운영자: ${COMPANY_NAME}
- 사업자등록번호: ${BUSINESS_NUMBER}
- 통신판매업 신고번호: ${ECOMMERCE_NUMBER}
- 주소: ${COMPANY_ADDRESS}
- 개인정보 보호 책임자: SDK 개인정보 보호팀
- 연락처: ${CONTACT_EMAIL}

기타 개인정보 침해 신고나 상담이 필요한 경우 다음 기관에 문의하실 수 있습니다.

- 개인정보보호위원회 (privacy.go.kr / 1833-6972)
- 한국인터넷진흥원 (privacy.kisa.or.kr / 118)` },
				{ title: '제12조 (방침의 변경)', content: `본 방침은 법령·정책·기술의 변경에 따라 개정될 수 있습니다. 중요한 변경이 있는 경우 회사는 본 페이지에 게시하고 "최종 수정일"을 갱신하며, 법령상 요구되는 경우 최소 7일(이용자에게 불리한 변경은 30일) 전 사전 공지합니다.` },
				{ title: '제13조 (문의처)', content: `본 방침에 관한 문의는 다음 연락처로 부탁드립니다.

- 이메일: ${CONTACT_EMAIL}
- 우편: ${COMPANY_NAME}, ${COMPANY_ADDRESS}
- 사업자등록번호: ${BUSINESS_NUMBER}` }
			]
		},
		ja: {
			title: 'プライバシーポリシー',
			lastUpdated: `最終更新日: ${LAST_UPDATED}`,
			effective: `施行日: ${EFFECTIVE_DATE}`,
			intro: `${COMPANY_NAME}（以下「当社」）は ${SITE_NAME}（以下「本サービス」）を運営し、利用者の個人情報を適法・公正・透明に取り扱うことに最大限の努力を払います。本プライバシーポリシーは、当社が収集する個人情報の項目、利用目的および法的根拠、第三者提供の有無、大韓民国個人情報保護法（PIPA）および EU 一般データ保護規則（GDPR）に基づく利用者の権利とその行使方法を説明します。`,
			sections: [
				{ title: '1. 適用範囲', content: `本ポリシーは https://${SITE_DOMAIN} およびそのサブドメインで当社が運営する本サービス全般に適用されます。本サービス上のリンクや広告ネットワーク経由で表示される第三者のサイト・サービスには本ポリシーは適用されません。` },
				{ title: '2. 収集する個人情報の項目', content: `当社は ${SITE_NAME} が収集する個人情報を最小限にとどめるよう設計しています。

- **アカウント情報**: ${SITE_NAME} は日常の計算機をアカウント無しで利用できます。
- **計算機入力**: 計算機に入力されたデータ（体重、年齢、給与、日付、距離など）は完全にブラウザ内で処理されます。いかなる場合も当社サーバーに送信・記録・保存されません。
- **環境設定**: ツール固有の設定はブラウザの localStorage にのみ保存されます。
- **自動収集分析データ**: ページビュー、参照元 URL、国（IP の一部マスキング後に推定）、ブラウザの種類、OS、画面サイズ、言語設定など、非識別の集計統計が自動収集されます。
- **エッジ・セキュリティログ**: Cloudflare が HTTP リクエストのメタデータを短期間保管します。
- **お問い合わせ情報**: メールでお問い合わせいただく際、提供された情報を受領します。

当社はセンシティブ情報を意図的に収集せず、住民番号、クレジットカード番号、精密な位置情報も収集しません。` },
				{ title: '3. 利用目的と法的根拠', content: `収集した情報は次の目的および法的根拠に基づいて利用されます。

- **サービス提供**（契約履行／正当な利益）。
- **セキュリティ維持**（正当な利益）。
- **品質改善**（正当な利益、必要に応じ同意）。
- **広告配信**（同意／正当な利益）: Google AdSense 広告配信。
- **利用者対応**（同意／正当な利益）。
- **法令遵守**（法的義務）。` },
				{ title: '4. Cookie および類似技術', content: `当社は最小限の Cookie およびブラウザストレージのみ使用します。

- **必須 Cookie**: トラフィック分散、ボット遮断、言語設定の保持。
- **機能／環境設定 (localStorage)**: 計算機設定。
- **分析 (Google Analytics 4)**: IP 匿名化を有効にした計測。
- **広告 (Google AdSense)**: 広告配信、頻度制御、効果測定。

https://adssettings.google.com からはいつでも設定を変更できます。` },
				{ title: '5. 第三者処理委託および提供', content: `当社は次の処理者と書面契約を締結し、必要最小限の情報を共有します。

- **Cloudflare, Inc.** — コンテンツ配信、DDoS 遮断。
- **Google LLC (Google Analytics 4)** — 集計トラフィック分析。
- **Google LLC (AdSense + Funding Choices)** — 広告配信および同意管理。

当社は個人情報を販売・賃貸しません。` },
				{ title: '6. 国外移転', content: `上記の処理者は大韓民国または EEA 域外で個人情報を処理する場合があります。当社は (i) EU 標準契約条項（SCC）、(ii) 適用可能な場合は EU-US データプライバシーフレームワーク、(iii) PIPA 第 28 条の 8 に基づく国外移転告知義務を遵守します。` },
				{ title: '7. 保管および利用期間', content: `個人情報は必要な最小期間のみ保管します。

- **計算機入力および環境設定 (localStorage)**: 利用者がブラウザデータを削除するまで保管。
- **分析データ**: Google Analytics 4 で最長 14 か月。
- **エッジ／セキュリティログ**: Cloudflare で最長 30 日。
- **メール対応履歴**: 最長 3 年保管後に削除。

目的を達成した個人情報は復旧不可能な方法で破棄または匿名化されます。` },
				{ title: '8. 利用者の権利', content: `利用者は居住地域に応じて次の権利の一部または全部を行使できます。

- **アクセス権**。
- **訂正・削除権**（GDPR 第 17 条／PIPA 第 36 条）。
- **処理停止権**。
- **データポータビリティ権**。
- **異議申立権**。
- **同意撤回権**。
- **苦情申立権** — 個人情報保護委員会または EU 加盟国監督機関へ。

権利行使をご希望の場合は ${CONTACT_EMAIL} までご連絡ください。` },
				{ title: '9. 14 歳未満の児童の個人情報', content: `${SITE_NAME} は一般利用者向けで、韓国基準で満 14 歳未満の児童を直接の対象としていません。お子様が個人情報を提供されたことに気付かれた保護者の方は、${CONTACT_EMAIL} までご連絡ください。` },
				{ title: '10. 個人情報の安全性確保措置', content: `当社は次の保護措置を講じます。

- 通信区間で TLS 1.3 を既定で適用
- Cloudflare エッジでの DDoS・ボット遮断
- 運用ログへのアクセス権限の最小化
- 依存関係の脆弱性チェックの定期レビュー

100% の安全保証はできませんが、商業的に合理的な保護措置を適用します。` },
				{ title: '11. 個人情報保護責任者', content: `次のとおり個人情報保護責任者を指定します。

- 運営者: ${COMPANY_NAME}
- 事業者登録番号: ${BUSINESS_NUMBER}
- 通信販売業申告番号: ${ECOMMERCE_NUMBER}
- 住所: ${COMPANY_ADDRESS}
- 個人情報保護責任者: SDK プライバシーチーム
- 連絡先: ${CONTACT_EMAIL}

その他の個人情報侵害申告は次の機関へ。

- 個人情報保護委員会 (privacy.go.kr / 1833-6972)
- 韓国インターネット振興院 (privacy.kisa.or.kr / 118)` },
				{ title: '12. ポリシーの変更', content: `本ポリシーは法令・方針・技術の変更に応じて改定される場合があります。重要な変更がある場合、改定後のポリシーを本ページに掲載し、必要な場合は最低 7 日（不利な変更は 30 日）前に事前告知します。` },
				{ title: '13. お問い合わせ', content: `本ポリシーに関するお問い合わせ。

- メール: ${CONTACT_EMAIL}
- 郵送: ${COMPANY_NAME}, ${COMPANY_ADDRESS}
- 事業者登録番号: ${BUSINESS_NUMBER}` }
			]
		},
		zh: {
			title: '隐私政策',
			lastUpdated: `最后更新：${LAST_UPDATED}`,
			effective: `施行日：${EFFECTIVE_DATE}`,
			intro: `${COMPANY_NAME}（以下简称"我们"）作为 ${SITE_NAME}（以下简称"本服务"）的运营者，尊重您的隐私，并致力于以合法、公正、透明的方式处理您的个人数据。本隐私政策说明我们收集的个人信息类别、使用目的及法律依据、第三方共享情况，以及您依据大韩民国《个人信息保护法》（PIPA）和欧盟《一般数据保护条例》（GDPR）所享有的权利及行使方式。`,
			sections: [
				{ title: '1. 适用范围', content: `本政策适用于 https://${SITE_DOMAIN} 域名及其子域名下我们直接运营的本服务。` },
				{ title: '2. 我们收集的个人信息', content: `我们已将 ${SITE_NAME} 设计为收集尽可能少的个人数据：

- **账户数据**：${SITE_NAME} 的所有日常计算器均无需账户即可使用。
- **计算器输入**：您输入到计算器中的数据（体重、年龄、薪资、日期、距离等）完全在浏览器中处理。任何情况下都不会传输、记录或保存到我们的服务器。
- **偏好设置**：工具特定的设置仅存储在浏览器 localStorage 中。
- **自动采集的分析数据**：页面访问量、来源 URL、基于截断 IP 推断的国家、浏览器系列、操作系统、屏幕尺寸、语言偏好等聚合的非识别统计。
- **边缘安全日志**：Cloudflare 短期保留 HTTP 请求元数据。
- **沟通信息**：您通过电子邮件联系我们时，我们会收到您的电子邮箱、邮件正文及附件。

我们不会有意收集敏感信息，也不会收集政府身份证号、信用卡号或精确位置信息。` },
				{ title: '3. 使用目的与法律依据', content: `所收集信息的使用与对应法律依据：

- **提供服务**（合同履行／正当利益）。
- **保障安全**（正当利益）。
- **改进服务**（正当利益，必要时获取同意）。
- **展示广告**（同意／正当利益）。
- **回复用户**（同意／正当利益）。
- **遵守法律**（法律义务）。` },
				{ title: '4. Cookie 及同类技术', content: `我们仅使用最少量的 Cookie 与浏览器存储。

- **必要 Cookie**：用于流量分配、阻断机器人、保留语言偏好。
- **功能/偏好 (localStorage)**：计算器设置，仅存储于您的设备。
- **分析 (Google Analytics 4)**：启用 IP 匿名化的非识别使用度量。
- **广告 (Google AdSense)**：用于广告投放、频次控制、效果测量。

您可在 https://adssettings.google.com 修改偏好。` },
				{ title: '5. 第三方处理者与共享', content: `我们在签订书面协议的前提下共享必要的最少信息：

- **Cloudflare, Inc.** — 内容分发、DDoS 防护。
- **Google LLC (Google Analytics 4)** — 聚合流量分析。
- **Google LLC (AdSense + Funding Choices)** — 广告投放及同意管理。

我们不会出售或出租您的个人数据。` },
				{ title: '6. 跨境传输', content: `上述处理者可能在大韩民国或欧洲经济区以外的地区处理个人数据。我们依赖以下保障措施：(i) 欧盟标准合同条款（SCC），(ii) 适用情况下的 EU-US 数据隐私框架，(iii) PIPA 第 28-8 条规定的跨境传输披露义务。` },
				{ title: '7. 保留期限', content: `我们仅在收集目的所必需的最短期间内保留个人数据：

- **计算器输入与偏好设置 (localStorage)**：保留至您清除浏览器存储为止。
- **分析数据**：Google Analytics 4 最长保留 14 个月。
- **边缘/安全日志**：Cloudflare 最长保留 30 天。
- **电子邮件沟通记录**：最长保留 3 年。

目的达成后，个人数据将以不可恢复的方式删除或匿名化。` },
				{ title: '8. 您的权利', content: `根据您所在地区，您可享有以下部分或全部权利：

- **访问权**。
- **更正与删除权**（GDPR 第 17 条 / PIPA 第 36 条）。
- **限制处理权**。
- **数据可携权**。
- **反对权**。
- **撤回同意权**。
- **投诉权** — 向韩国个人信息保护委员会或所在 EU 成员国监管机构提出投诉。

如需行使任一权利，请发送邮件至 ${CONTACT_EMAIL}。` },
				{ title: '9. 14 周岁以下儿童的个人信息', content: `${SITE_NAME} 面向一般受众，并非直接面向韩国 14 周岁以下的儿童。我们不会有意收集相应年龄以下儿童的个人信息。如发现儿童向我们提供了个人信息，请联系 ${CONTACT_EMAIL}，我们将立即删除。` },
				{ title: '10. 安全保障措施', content: `我们采取以下保护措施：

- 默认启用 TLS 1.3 加密传输
- Cloudflare 边缘 DDoS、机器人防护与 WAF
- 运维日志按最小权限原则授权
- 定期审查依赖项漏洞与供应链安全

互联网传输无法做到 100% 安全，但我们采用商业上合理的保护措施。` },
				{ title: '11. 个人信息保护负责人', content: `指定如下个人信息保护负责人：

- 运营者：${COMPANY_NAME}
- 营业执照编号：${BUSINESS_NUMBER}
- 电子商务备案编号：${ECOMMERCE_NUMBER}
- 地址：${COMPANY_ADDRESS}
- 联系方式：${CONTACT_EMAIL}

如需投诉或咨询，您也可联系：

- 韩国个人信息保护委员会 (privacy.go.kr / 1833-6972)
- 韩国互联网振兴院 (privacy.kisa.or.kr / 118)` },
				{ title: '12. 政策变更', content: `本政策可能因法律、政策或技术变化而修订。发生重大变更时，我们将在本页面发布新版本并更新"最后更新日"，并在法律要求时至少提前 7 日通知（对用户不利的变更提前 30 日）。` },
				{ title: '13. 联系方式', content: `如对本政策有任何疑问，请联系：

- 邮箱：${CONTACT_EMAIL}
- 邮寄：${COMPANY_NAME}，${COMPANY_ADDRESS}
- 营业执照编号：${BUSINESS_NUMBER}` }
			]
		}
	};

	$: t = translations[lang] || translations.en;
</script>

<svelte:head>
	<title>{t.title} - {SITE_NAME}</title>
	<meta name="description" content={t.intro.slice(0, 160)} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-12">
	<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t.title}</h1>
	<p class="text-gray-500 dark:text-dark-500 text-sm">{t.lastUpdated}</p>
	<p class="text-gray-500 dark:text-dark-500 text-sm mb-8">{t.effective}</p>

	<p class="text-gray-700 dark:text-dark-300 mb-8 leading-relaxed">{t.intro}</p>

	<div class="space-y-8">
		{#each t.sections as section}
			<section>
				<h2 class="text-xl font-semibold text-gray-900 dark:text-dark-100 mb-3">{section.title}</h2>
				<div class="text-gray-700 dark:text-dark-300 leading-relaxed whitespace-pre-line prose dark:prose-invert max-w-none">
					{@html section.content.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-gray-900 dark:text-dark-100">$1</strong>')}
				</div>
			</section>
		{/each}
	</div>

	<div class="mt-12 pt-8 border-t border-gray-200 dark:border-dark-700">
		<a href="/{lang}" class="text-primary-500 hover:text-primary-400 transition-colors">
			← {lang === 'ko' ? '홈으로 돌아가기' : lang === 'ja' ? 'ホームに戻る' : lang === 'zh' ? '返回首页' : 'Back to Home'}
		</a>
	</div>
</div>
