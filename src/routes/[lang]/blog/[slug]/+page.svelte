<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { getBlogPost, getAllBlogPosts } from '$lib/data/blog-posts';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: slug = $page.params.slug;
	$: post = getBlogPost(slug);
	$: allPosts = getAllBlogPosts();
	$: currentIndex = allPosts.findIndex((p) => p.slug === slug);
	$: prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
	$: nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

	const labels = {
		en: {
			backToBlog: 'Back to Blog',
			prevPost: 'Previous',
			nextPost: 'Next',
			notFound: 'Post not found',
			notFoundDesc: 'The blog post you are looking for does not exist.'
		},
		ko: {
			backToBlog: '블로그로 돌아가기',
			prevPost: '이전 글',
			nextPost: '다음 글',
			notFound: '글을 찾을 수 없습니다',
			notFoundDesc: '찾으시는 블로그 글이 존재하지 않습니다.'
		},
		ja: {
			backToBlog: 'ブログに戻る',
			prevPost: '前の記事',
			nextPost: '次の記事',
			notFound: '記事が見つかりません',
			notFoundDesc: 'お探しのブログ記事は存在しません。'
		},
		zh: {
			backToBlog: '返回博客',
			prevPost: '上一篇',
			nextPost: '下一篇',
			notFound: '文章未找到',
			notFoundDesc: '您查找的博客文章不存在。'
		}
	};

	$: t = labels[lang] || labels.en;
</script>

<svelte:head>
	{#if post}
		<title>{post.title[lang] || post.title.en} - SD.gy Blog</title>
		<meta name="description" content={post.description[lang] || post.description.en} />
	{:else}
		<title>{t.notFound} - SD.gy</title>
	{/if}
</svelte:head>

<div class="max-w-3xl mx-auto px-4 py-12">
	{#if post}
		<a
			href="/{lang}/blog"
			class="inline-flex items-center gap-2 text-gray-600 dark:text-dark-400 hover:text-violet-500 transition-colors mb-8"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
			</svg>
			{t.backToBlog}
		</a>

		<article>
			<header class="mb-8">
				<div class="flex items-center gap-3 mb-4">
					<span class="px-3 py-1 text-xs font-medium bg-violet-500/10 text-violet-500 rounded-full">
						{post.category}
					</span>
					<span class="text-sm text-gray-500 dark:text-dark-400">{post.date}</span>
				</div>
				<h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-dark-100 mb-4">
					{post.title[lang] || post.title.en}
				</h1>
				<p class="text-xl text-gray-600 dark:text-dark-400">
					{post.description[lang] || post.description.en}
				</p>
			</header>

			<div class="prose prose-lg dark:prose-invert max-w-none
				prose-headings:text-gray-900 dark:prose-headings:text-dark-100
				prose-p:text-gray-700 dark:prose-p:text-dark-300
				prose-a:text-violet-500 prose-a:no-underline hover:prose-a:underline
				prose-strong:text-gray-900 dark:prose-strong:text-dark-100
				prose-code:text-violet-500 prose-code:bg-gray-100 dark:prose-code:bg-dark-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
				prose-pre:bg-gray-900 dark:prose-pre:bg-dark-900
				prose-li:text-gray-700 dark:prose-li:text-dark-300
				prose-table:text-gray-700 dark:prose-table:text-dark-300
				prose-th:text-gray-900 dark:prose-th:text-dark-100
				prose-td:border-gray-200 dark:prose-td:border-dark-700
				prose-th:border-gray-200 dark:prose-th:border-dark-700
			">
				{@html (post.content[lang] || post.content.en)
					.replace(/^### (.*$)/gm, '<h3>$1</h3>')
					.replace(/^## (.*$)/gm, '<h2>$1</h2>')
					.replace(/^# (.*$)/gm, '<h1>$1</h1>')
					.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
					.replace(/\*(.*?)\*/g, '<em>$1</em>')
					.replace(/`{3}(\w+)?\n([\s\S]*?)`{3}/g, '<pre><code class="language-$1">$2</code></pre>')
					.replace(/`([^`]+)`/g, '<code>$1</code>')
					.replace(/^\| (.*) \|$/gm, (match) => {
						const cells = match.slice(2, -2).split(' | ');
						return '<tr>' + cells.map(cell => `<td>${cell}</td>`).join('') + '</tr>';
					})
					.replace(/^\- (.*$)/gm, '<li>$1</li>')
					.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
					.replace(/\n\n/g, '</p><p>')
					.replace(/^(?!<[hupltr])/gm, '<p>')
					.replace(/(?<![>])$/gm, '</p>')
					.replace(/<p><\/p>/g, '')
					.replace(/<p>(<[hupltr])/g, '$1')
					.replace(/(<\/[hupltr][^>]*>)<\/p>/g, '$1')
				}
			</div>
		</article>

		<nav class="mt-12 pt-8 border-t border-gray-200 dark:border-dark-700">
			<div class="flex justify-between gap-4">
				{#if prevPost}
					<a
						href="/{lang}/blog/{prevPost.slug}"
						class="flex-1 p-4 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-lg hover:border-violet-500 transition-colors"
					>
						<span class="text-sm text-gray-500 dark:text-dark-400">{t.prevPost}</span>
						<p class="text-gray-900 dark:text-dark-100 font-medium truncate">
							{prevPost.title[lang] || prevPost.title.en}
						</p>
					</a>
				{:else}
					<div class="flex-1"></div>
				{/if}

				{#if nextPost}
					<a
						href="/{lang}/blog/{nextPost.slug}"
						class="flex-1 p-4 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-lg hover:border-violet-500 transition-colors text-right"
					>
						<span class="text-sm text-gray-500 dark:text-dark-400">{t.nextPost}</span>
						<p class="text-gray-900 dark:text-dark-100 font-medium truncate">
							{nextPost.title[lang] || nextPost.title.en}
						</p>
					</a>
				{:else}
					<div class="flex-1"></div>
				{/if}
			</div>
		</nav>
	{:else}
		<div class="text-center py-20">
			<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-4">{t.notFound}</h1>
			<p class="text-gray-600 dark:text-dark-400 mb-8">{t.notFoundDesc}</p>
			<a
				href="/{lang}/blog"
				class="inline-flex items-center gap-2 px-6 py-3 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition-colors"
			>
				{t.backToBlog}
			</a>
		</div>
	{/if}
</div>
