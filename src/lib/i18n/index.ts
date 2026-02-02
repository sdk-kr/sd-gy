import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { safeGetItem, safeSetItem } from '$lib/utils/storage';

export type Locale = 'en' | 'ko' | 'ja' | 'zh' | 'es' | 'pt' | 'de' | 'fr' | 'hi';

export const locales: Locale[] = ['en', 'ko', 'ja', 'zh', 'es', 'pt', 'de', 'fr', 'hi'];

export const localeNames: Record<Locale, string> = {
	en: 'English',
	ko: '한국어',
	ja: '日本語',
	zh: '中文',
	es: 'Español',
	pt: 'Português',
	de: 'Deutsch',
	fr: 'Français',
	hi: 'हिन्दी'
};

/** Localized string with English required, others optional */
export type L10nString = Partial<Record<Locale, string>> & { en: string };

// 브라우저 언어 감지
function detectLocale(): Locale {
	if (!browser) return 'en';

	try {
		const browserLang = navigator.language.split('-')[0];
		if (locales.includes(browserLang as Locale)) {
			return browserLang as Locale;
		}
	} catch (e) {
		console.warn('Failed to detect browser locale:', e);
	}
	return 'en';
}

// 저장된 언어 또는 감지된 언어
function getInitialLocale(): Locale {
	if (!browser) return 'en';

	const saved = safeGetItem('locale') as Locale | null;
	if (saved && locales.includes(saved)) {
		return saved;
	}
	return detectLocale();
}

function createLocaleStore() {
	const { subscribe, set } = writable<Locale>(getInitialLocale());

	return {
		subscribe,
		set: (locale: Locale) => {
			if (browser) {
				safeSetItem('locale', locale);
			}
			set(locale);
		}
	};
}

export const locale = createLocaleStore();

// 번역 함수
export function t(key: string, translations: Record<Locale, Record<string, string>>, currentLocale: Locale): string {
	return translations[currentLocale]?.[key] || translations['en']?.[key] || key;
}
