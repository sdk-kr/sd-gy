# Task Plan — 4개 사이트 블로그 포스트 80개 추가

## 목표
4개 사이트의 `src/lib/data/blog-posts.ts`에 각각 신규 블로그 포스트 20개씩, 총 80개 추가.

## 형식 요구사항 (사이트별)

| 사이트 | 타입 | 필수 locale | 권장 |
|--------|------|------------|-----|
| javascript.ac | `Partial<Record<Locale,string>> & {en:string}` | en | en+ko+ja+zh (관용) |
| sdk-is | `Record<Locale,string>` | en/ko/ja/zh 모두 | 4개 |
| sdk-bz | `Record<Locale,string>` | en/ko/ja/zh 모두 | 4개 |
| sd-gy | `L10nString` (en만 필수) | en | en+ko |

## 단계
- [x] 형식 파악
- [ ] javascript.ac 20개 생성 + 삽입
- [ ] sdk-is 20개 생성 + 삽입
- [ ] sdk-bz 20개 생성 + 삽입 (YMYL 면책 포함)
- [ ] sd-gy 20개 생성 + 삽입 (YMYL 면책 포함)
- [ ] 4개 사이트 npm run build 검증

## 공통 규칙
- date: 2026-04-30부터 -1일씩 (각 사이트 독립)
- content 800-1500자 영문
- `## 소제목` 2-3개
- 다른 사이트 도구로 내부 링크 1-2개 markdown 형식
- YMYL: sdk-bz, sd-gy(금융 섹션) 면책 명시
