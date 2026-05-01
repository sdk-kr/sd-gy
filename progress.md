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
