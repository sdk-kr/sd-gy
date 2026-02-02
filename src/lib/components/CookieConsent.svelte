<script lang="ts">
	import { onMount } from 'svelte';
	import { locale, type Locale } from '$lib/i18n';
	import { safeGetItem, safeSetItem } from '$lib/utils/storage';

	let show = false;

	const texts: Record<string, Record<Locale, string>> = {
		message: {
			en: 'We use cookies to improve your experience and for analytics. By continuing to use this site, you agree to our use of cookies.',
			ko: '더 나은 경험과 분석을 위해 쿠키를 사용합니다. 사이트를 계속 이용하시면 쿠키 사용에 동의하는 것으로 간주됩니다.',
			ja: 'より良い体験と分析のためにCookieを使用しています。サイトの利用を続けることで、Cookieの使用に同意したものとみなされます。',
			zh: '我们使用Cookie来改善您的体验并进行分析。继续使用本网站即表示您同意我们使用Cookie。',
			es: 'Usamos cookies para mejorar su experiencia y para análisis. Al continuar usando este sitio, acepta nuestro uso de cookies.',
			pt: 'Usamos cookies para melhorar sua experiência e para análise. Ao continuar usando este site, você concorda com nosso uso de cookies.',
			de: 'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und für Analysen. Durch die weitere Nutzung dieser Website stimmen Sie der Verwendung von Cookies zu.',
			fr: 'Nous utilisons des cookies pour améliorer votre expérience et à des fins d\'analyse. En continuant à utiliser ce site, vous acceptez notre utilisation des cookies.',
			hi: 'हम आपके अनुभव को बेहतर बनाने और विश्लेषण के लिए कुकीज़ का उपयोग करते हैं। इस साइट का उपयोग जारी रखकर, आप हमारे कुकीज़ के उपयोग से सहमत हैं।'
		},
		accept: {
			en: 'Accept', ko: '동의', ja: '同意', zh: '接受',
			es: 'Aceptar', pt: 'Aceitar', de: 'Akzeptieren', fr: 'Accepter', hi: 'स्वीकार करें'
		},
		decline: {
			en: 'Decline', ko: '거부', ja: '拒否', zh: '拒绝',
			es: 'Rechazar', pt: 'Recusar', de: 'Ablehnen', fr: 'Refuser', hi: 'अस्वीकार करें'
		}
	};

	$: t = (key: string) => texts[key]?.[$locale] || texts[key]?.en || key;

	onMount(() => {
		if (!safeGetItem('cookie_consent')) {
			show = true;
		}
	});

	function accept() {
		safeSetItem('cookie_consent', 'accepted');
		show = false;
	}

	function decline() {
		safeSetItem('cookie_consent', 'declined');
		show = false;
	}
</script>

{#if show}
	<div class="fixed bottom-0 left-0 right-0 z-[100] bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700 px-4 py-4 shadow-2xl">
		<div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-4">
			<p class="text-sm text-gray-600 dark:text-dark-300 flex-1">{t('message')}</p>
			<div class="flex gap-3 shrink-0">
				<button
					on:click={decline}
					class="px-4 py-2 text-sm text-gray-500 dark:text-dark-400 hover:text-gray-700 dark:hover:text-dark-200 border border-gray-300 dark:border-dark-600 rounded-lg transition-colors"
				>
					{t('decline')}
				</button>
				<button
					on:click={accept}
					class="px-4 py-2 text-sm bg-violet-500 hover:bg-violet-400 text-white font-medium rounded-lg transition-colors"
				>
					{t('accept')}
				</button>
			</div>
		</div>
	</div>
{/if}
