import type { RequestHandler } from './$types';
import { getAllBlogPosts } from '$lib/data/blog-posts';

export const prerender = true;

const SITE = 'https://sd.gy';
// es/pt/de/fr/hi는 영어 fallback 상태 → 번역 완료 전까지 sitemap 제외 (중복 콘텐츠 방지)
const LANGS = ['en', 'ko', 'ja', 'zh'];

const PAGES = [
	'',
	'/calculator',
	'/percentage',
	'/unit-converter',
	'/date-calculator',
	'/age-calculator',
	'/bmi-calculator',
	'/tip-calculator',
	'/loan-calculator',
	'/salary-calculator',
	'/compound-interest',
	'/calorie-calculator',
	'/currency-converter',
	'/tax-calculator',
	'/career-calculator',
	'/anniversary-calculator',
	'/ladder-game',
	'/presentation-timer',
	'/about',
	'/privacy',
	'/terms',
	'/contact',
	'/faq',
	'/blog',
	...getAllBlogPosts().map(p => `/blog/${p.slug}`)
];

export const GET: RequestHandler = async () => {
	const today = new Date().toISOString().split('T')[0];

	const urls = LANGS.flatMap((lang) =>
		PAGES.map(
			(page) => `
	<url>
		<loc>${SITE}/${lang}${page}</loc>
		<lastmod>${today}</lastmod>
		<changefreq>weekly</changefreq>
		<priority>${page === '' ? '1.0' : '0.8'}</priority>
	</url>`
		)
	).join('');

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(sitemap.trim(), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
};
