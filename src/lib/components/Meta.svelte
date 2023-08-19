<script lang="ts">
	import { page } from '$app/stores';
	import PUBLIC_ENV from '$lib/public';

	const app_name = PUBLIC_ENV.PUBLIC_APP_NAME;
	const app_uri = PUBLIC_ENV.PUBLIC_APP_URI;
	const app_domain = PUBLIC_ENV.PUBLIC_APP_DOMAIN;

	export let data;
	const { coa } = data;
	const { pathname } = $page.url;
</script>
		<title>{coa?.name || app_name || 'TopTierAuthentics'}</title>
		<meta http-equiv="Content-Language" content="en" />
	  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="robots" content="noindex" />
		<meta name="googlebot" content="noindex" />
	  <meta name="description" content="{coa?.description}" />
	  <meta name="keywords" content="{coa?.externalId}" />
		<meta itemprop="name" content="{coa?.name}" />
		<meta itemprop="description" content="{coa?.description}" />
		<meta itemprop="image" content="{coa?.thumbURI}" />
		<meta property="og:type" content="website" />
  	<meta property="og:locale" content="en_US" />
		<meta property="og:site_name" content="{app_name || 'TopTierAuthentics'}" />
		<meta property="og:see_also" content="{app_uri}" />
		<meta property="og:url" content="{app_uri}{pathname}.html" />
  	<meta property="og:title" content="{coa?.name}" />
  	<meta property="og:description" content="{coa?.description}" />
  	<meta property="og:image" content="{coa?.thumbURI}" />
		<meta property="og:image:alt" content="{coa?.name}" />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:site" content="{app_name || 'TopTierAuthentics'}" />
		<meta name="twitter:domain" content="{app_domain}" />
		<meta name="twitter:url" content="{app_uri}{pathname}.html" />
		<meta name="twitter:title" content="{coa?.name}" >
		<meta name="twitter:description" content="{coa?.description}" />
		<meta name="twitter:image" content="{coa?.thumbURI}" />
		<meta name="twitter:image:src" content="{coa?.thumbURI}" />
		<meta name="twitter:image:alt" content="{coa?.name}" />
