# Progress — 4-site Blog Posts Mass Add

## 2026-05-01 세션

### 완료
- 4개 사이트에 각 20개씩, 총 80개 블로그 포스트 추가
- 모든 사이트 `npm run build` 통과 (exit 0)

### 사이트별 결과

| 사이트 | 추가 | 빌드 | 비고 |
|--------|-----|------|-----|
| javascript.ac | 20 | OK | en/ko/ja/zh 4개 locale 모두 |
| sdk-is | 20 | OK | en/ko/ja/zh (Record 강제) |
| sdk-bz | 20 | OK | en/ko/ja/zh, YMYL 면책 |
| sd-gy | 20 | OK | L10nString, en+ko 위주 (선택 ja/zh 없음, 면책 포함) |

### 내부 링크 (cross-site domain 링크)
- javascript.ac: 0 (자체 `/blog/` 링크 20개)
- sdk-is: 9 (`https://sdk.is/blog/` 자체 + 1개 cross-site)
- sdk-bz: 0 (자체 링크만)
- sd-gy: 1 (sdk.bz cross-site)

### 미완료/개선 여지
- sdk-bz와 javascript.ac에 cross-site 도메인 링크 없음 (자체 사이트 링크는 있음)
- 향후 다른 사이트 도구로의 cross-site markdown 링크 보강 권장

## 2026-07-02 세션: ja/zh 번역 백필 (AdSense 중복 콘텐츠 대응)

### 완료
- sd-gy 5개 도구 페이지 guideSections(3섹션 × heading/body) + toolContent.faq에 ja/zh 완역 추가:
  bmi-calculator, percentage, loan-calculator, compound-interest, currency-converter
  (about/howTo/useCases/related는 이미 ja/zh 보유 → 스킵)
- sdk-is 7개 도구 페이지(json, base64, regex, uuid, hash, jwt, password): guideSections + howTo/useCases/faq/related ja/zh 완역
- sdk-is 홈: longCopyJa/longCopyZh 추가 + lc 선택자 4-locale로 확장 (sd-gy 홈 패턴과 동일)
- 양 리포 about 페이지, sd-gy 홈은 이미 ja/zh 완비 → 변경 없음
- 검증: 양 리포 `npx svelte-check --threshold error` — 우리가 수정한 파일에는 에러 0.
  기존 에러(sdk-is 2건: blog/[slug], guide / sd-gy 12건: privacy, terms, faq, contact, blog, about, layout, ToolContent 등 Locale 인덱싱)는 이번 수정과 무관한 기존 이슈.
- 원칙 준수: en/ko 원문 무변경(마지막 키 뒤 콤마 추가만), es/pt/de/fr/hi 미추가, 커밋/빌드 없음
