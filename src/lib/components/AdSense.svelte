<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { env } from '$env/dynamic/public';

	// 광고 유형
	export let type: 'sidebar' | 'infeed' | 'article' | 'horizontal' = 'article';
	export let className: string = '';

	const adConfig = {
		sidebar: {
			style: 'display:block',
			format: 'auto',
			responsive: true,
			class: 'w-full min-h-[250px]',
			slotEnv: 'PUBLIC_ADSENSE_SLOT_SIDEBAR'
		},
		infeed: {
			style: 'display:block',
			format: 'fluid',
			responsive: true,
			class: 'w-full',
			slotEnv: 'PUBLIC_ADSENSE_SLOT_INFEED'
		},
		article: {
			style: 'display:block; text-align:center;',
			format: 'auto',
			responsive: true,
			class: 'w-full min-h-[100px]',
			slotEnv: 'PUBLIC_ADSENSE_SLOT_ARTICLE'
		},
		horizontal: {
			style: 'display:block',
			format: 'horizontal',
			responsive: true,
			class: 'w-full min-h-[90px]',
			slotEnv: 'PUBLIC_ADSENSE_SLOT_HORIZONTAL'
		}
	};

	$: config = adConfig[type];
	$: slotId = (env as Record<string, string | undefined>)[config.slotEnv] || '';
	$: enabled = !!slotId;

	onMount(() => {
		if (browser && enabled) {
			try {
				// @ts-ignore
				(window.adsbygoogle = window.adsbygoogle || []).push({});
			} catch (e) {
				console.error('AdSense error:', e);
			}
		}
	});
</script>

{#if enabled && browser}
	<div class="adsense-container {className}">
		<ins
			class="adsbygoogle {config.class}"
			style={config.style}
			data-ad-client="ca-pub-2456249131797827"
			data-ad-slot={slotId}
			data-ad-format={config.format}
			data-full-width-responsive={config.responsive}
		></ins>
	</div>
{/if}

<style>
	.adsense-container {
		overflow: hidden;
	}
	.adsense-container:empty {
		min-height: 0;
	}
</style>
