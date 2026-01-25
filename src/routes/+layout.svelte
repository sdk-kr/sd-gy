<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { locale, locales, localeNames, type Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import { theme } from '$lib/stores/theme';
	import AdSense from '$lib/components/AdSense.svelte';

	$: t = (key: string) => common[$locale]?.[key] || common['en'][key] || key;

	$: currentLang = $page.params.lang as Locale || 'en';
	$: basePath = `/${currentLang}`;

	let showLangMenu = false;
	let showServicesMenu = false;

	const services = [
		{
			name: { en: 'Image Tools', ko: '이미지 도구', ja: '画像ツール', zh: '图片工具' },
			desc: { en: 'Compress, resize, convert', ko: '압축, 리사이즈, 변환', ja: '圧縮、リサイズ、変換', zh: '压缩、调整、转换' },
			url: 'https://img.sd.gy',
			icon: 'image'
		},
		{
			name: { en: 'QR Generator', ko: 'QR코드 생성', ja: 'QRコード生成', zh: 'QR码生成' },
			desc: { en: 'Create custom QR codes', ko: '맞춤 QR코드 생성', ja: 'カスタムQRコード作成', zh: '创建自定义QR码' },
			url: 'https://qr.sd.gy',
			icon: 'qr'
		}
	];

	onMount(() => {
		theme.init();
	});

	function selectLocale(loc: Locale) {
		const currentPath = $page.url.pathname;
		const pathWithoutLang = currentPath.replace(/^\/(en|ko|ja|zh)/, '');
		const newPath = `/${loc}${pathWithoutLang || ''}`;

		locale.set(loc);
		showLangMenu = false;
		goto(newPath);
	}

	function handleClickOutside(e: MouseEvent) {
		const target = e.target as HTMLElement;
		if (showLangMenu && !target.closest('.lang-menu')) {
			showLangMenu = false;
		}
		if (showServicesMenu && !target.closest('.services-menu')) {
			showServicesMenu = false;
		}
	}
</script>

<svelte:head>
	{#each locales as loc}
		<link rel="alternate" hreflang={loc} href="https://sd.gy/{loc}{$page.url.pathname.replace(/^\/(en|ko|ja|zh)/, '')}" />
	{/each}
	<link rel="alternate" hreflang="x-default" href="https://sd.gy/en{$page.url.pathname.replace(/^\/(en|ko|ja|zh)/, '')}" />
</svelte:head>

<div class="min-h-screen flex flex-col bg-white dark:bg-dark-950 transition-colors">
	<nav class="bg-gray-50 dark:bg-dark-900 border-b border-gray-200 dark:border-dark-700 px-4 py-3 sticky top-0 z-50">
		<div class="max-w-7xl mx-auto flex items-center justify-between">
			<a href={basePath} class="flex items-center gap-1">
				<span class="text-2xl font-bold text-violet-500">SD</span>
				<span class="text-xl font-semibold text-gray-800 dark:text-dark-100">.gy</span>
			</a>

			<div class="flex items-center gap-4 md:gap-6">
				<a href="{basePath}/calculator" class="text-gray-600 dark:text-dark-300 hover:text-violet-500 dark:hover:text-violet-400 transition-colors text-sm">
					{$locale === 'ko' ? '계산기' : $locale === 'ja' ? '電卓' : $locale === 'zh' ? '计算器' : 'Calculator'}
				</a>
				<a href="{basePath}/percentage" class="hidden sm:inline text-gray-600 dark:text-dark-300 hover:text-violet-500 dark:hover:text-violet-400 transition-colors text-sm">
					{$locale === 'ko' ? '퍼센트' : $locale === 'ja' ? 'パーセント' : $locale === 'zh' ? '百分比' : 'Percentage'}
				</a>

				<!-- Services Dropdown -->
				<div class="relative services-menu">
					<button
						on:click={() => showServicesMenu = !showServicesMenu}
						class="flex items-center gap-1 text-gray-600 dark:text-dark-300 hover:text-violet-500 dark:hover:text-violet-400 transition-colors text-sm"
					>
						<span>{$locale === 'ko' ? '서비스' : $locale === 'ja' ? 'サービス' : $locale === 'zh' ? '服务' : 'Services'}</span>
						<span class="text-xs">▼</span>
					</button>

					{#if showServicesMenu}
						<div class="absolute right-0 top-full mt-2 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl shadow-xl py-2 min-w-[200px]">
							{#each services as service}
								<a
									href={service.url}
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors"
									on:click={() => showServicesMenu = false}
								>
									<div class="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-500/20 text-violet-500 flex items-center justify-center">
										{#if service.icon === 'image'}
											<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
												<path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
											</svg>
										{:else}
											<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
												<path stroke-linecap="round" stroke-linejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
											</svg>
										{/if}
									</div>
									<div>
										<p class="text-sm font-medium text-gray-900 dark:text-dark-100">{service.name[$locale] || service.name.en}</p>
										<p class="text-xs text-gray-500 dark:text-dark-400">{service.desc[$locale] || service.desc.en}</p>
									</div>
								</a>
							{/each}
						</div>
					{/if}
				</div>

				<!-- Theme Toggle -->
				<button
					on:click={() => theme.toggle()}
					class="p-2 text-gray-600 dark:text-dark-300 hover:text-gray-900 dark:hover:text-dark-100 transition-colors"
					aria-label="Toggle theme"
				>
					{#if $theme === 'dark'}
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
						</svg>
					{:else}
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
						</svg>
					{/if}
				</button>

				<!-- Language Selector -->
				<div class="relative lang-menu">
					<button
						on:click={() => showLangMenu = !showLangMenu}
						class="flex items-center gap-1 text-gray-600 dark:text-dark-300 hover:text-gray-900 dark:hover:text-dark-100 transition-colors text-sm"
					>
						<span>{localeNames[$locale]}</span>
						<span class="text-xs">▼</span>
					</button>

					{#if showLangMenu}
						<div class="absolute right-0 top-full mt-2 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-lg shadow-xl py-1 min-w-[120px]">
							{#each locales as loc}
								<button
									on:click={() => selectLocale(loc)}
									class="w-full text-left px-4 py-2 text-sm transition-colors {$locale === loc ? 'text-violet-500 bg-gray-100 dark:bg-dark-700' : 'text-gray-600 dark:text-dark-300 hover:bg-gray-100 dark:hover:bg-dark-700 hover:text-gray-900 dark:hover:text-dark-100'}"
								>
									{localeNames[loc]}
								</button>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</div>
	</nav>

	<main class="flex-1">
		<slot />
	</main>

	<!-- AdSense - Footer Ad -->
	<div class="max-w-5xl mx-auto px-4 py-4">
		<AdSense type="horizontal" />
	</div>

	<footer class="bg-gray-50 dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700 px-4 py-8">
		<div class="max-w-7xl mx-auto">
			<!-- SDKLABS Services -->
			<div class="mb-8 pb-8 border-b border-gray-200 dark:border-dark-700">
				<p class="text-xs text-gray-400 dark:text-dark-500 uppercase tracking-wider mb-4">SDKLABS Services</p>
				<div class="flex flex-wrap gap-6">
					<a href="https://sd.gy" class="group flex items-center gap-2">
						<span class="text-lg font-bold text-violet-500">SD.gy</span>
						<span class="text-xs text-gray-400 dark:text-dark-500 group-hover:text-violet-400">{$locale === 'ko' ? '계산기' : $locale === 'ja' ? '電卓' : $locale === 'zh' ? '计算器' : 'Calculators'}</span>
					</a>
					<a href="https://img.sd.gy" target="_blank" rel="noopener noreferrer" class="group flex items-center gap-2">
						<span class="text-lg font-bold text-gray-600 dark:text-dark-300 group-hover:text-violet-500">img.sd.gy</span>
						<span class="text-xs text-gray-400 dark:text-dark-500 group-hover:text-violet-400">{$locale === 'ko' ? '이미지' : $locale === 'ja' ? '画像' : $locale === 'zh' ? '图片' : 'Images'}</span>
					</a>
					<a href="https://qr.sd.gy" target="_blank" rel="noopener noreferrer" class="group flex items-center gap-2">
						<span class="text-lg font-bold text-gray-600 dark:text-dark-300 group-hover:text-violet-500">qr.sd.gy</span>
						<span class="text-xs text-gray-400 dark:text-dark-500 group-hover:text-violet-400">QR Code</span>
					</a>
				</div>
			</div>

			<div class="flex flex-col md:flex-row justify-between items-center gap-4">
				<p class="text-gray-500 dark:text-dark-400 text-sm">{t('footer.copyright')}</p>
				<div class="flex items-center gap-6 text-sm">
					<a href="{basePath}/about" class="text-gray-500 dark:text-dark-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors">
						{t('footer.about')}
					</a>
					<a href="{basePath}/faq" class="text-gray-500 dark:text-dark-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors">
						FAQ
					</a>
					<a href="{basePath}/contact" class="text-gray-500 dark:text-dark-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors">
						{t('footer.contact')}
					</a>
					<a href="{basePath}/privacy" class="text-gray-500 dark:text-dark-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors">
						{t('footer.privacy')}
					</a>
					<a href="{basePath}/terms" class="text-gray-500 dark:text-dark-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors">
						{t('footer.terms')}
					</a>
				</div>
			</div>
		</div>
	</footer>
</div>

<svelte:window on:click={handleClickOutside} />
