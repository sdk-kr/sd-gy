import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// 언어 자동 감지 리다이렉트는 크롤러 혼란을 유발하므로 /en 고정 301 (언어는 헤더의 셀렉터로 전환)
export const load: PageServerLoad = () => {
	throw redirect(301, '/en');
};
