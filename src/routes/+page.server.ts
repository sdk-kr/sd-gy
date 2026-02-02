import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const supportedLangs = ['ko', 'ja', 'zh', 'es', 'pt', 'de', 'fr', 'hi'];

export const load: PageServerLoad = ({ request }) => {
	const acceptLanguage = request.headers.get('accept-language') || '';
	let detectedLang = 'en';

	for (const lang of supportedLangs) {
		if (acceptLanguage.includes(lang)) {
			detectedLang = lang;
			break;
		}
	}

	throw redirect(301, `/${detectedLang}`);
};
