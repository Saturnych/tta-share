<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	const { url } = $page;
	//if (import.meta.env.DEV) console.log('coa/[...path]/+page url:', url);

	export let data: PageData = $page.data;
</script>

<svelte:head>
		<title>{data.coa?.name || 'Title'}</title>
		<meta http-equiv="Content-Language" content="en" />
	  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	  <meta name="description" content="{data.coa?.description}" />
	  <meta name="keywords" content="{data.coa?.externalId}" />
	  <meta name="robots" content="noindex" />
		<meta itemprop="name" content="{data.coa?.name}" />
		<meta itemprop="description" content="{data.coa?.description}" />
		<meta itemprop="image" content="{data.coa?.thumbURI}" />
		<meta property="og:type" content="website" />
  	<meta property="og:locale" content="en_US" />
		<meta property="og:site_name" content="TopTierAuthentics" />
		<meta property="og:see_also" content="{url.origin}" />
		<meta property="og:url" content="{url.href}" />
  	<meta property="og:title" content="{data.coa?.name}" />
  	<meta property="og:description" content="{data.coa?.description}" />
  	<meta property="og:image" content="{data.coa?.thumbURI}" />
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:site" content="TopTierAuthentics" />
		<meta name="twitter:domain" content="{url.hostname}" />
		<meta name="twitter:url" content="{url.href}" />
		<meta name="twitter:title" content="{data.coa?.name}" >
		<meta name="twitter:description" content="{data.coa?.description}" />
		<meta name="twitter:image" content="{data.coa?.thumbURI}" />
		<meta name="twitter:image:src" content="{data.coa?.thumbURI}" />
</svelte:head>

<h1>{data.coa?.name}</h1>
<h2>{url.href}</h2>
<h3>{data.coa?.thumbURI}</h3>
