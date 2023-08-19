<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import Meta from '$lib/components/Meta.svelte';
	import Body from '$lib/components/Body.svelte';

	export let data: PageData = $page.data;
</script>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" href="/favicon.png" />
		<meta name="viewport" content="width=device-width" />
		<Meta data={data} />
	</head>
	<body data-sveltekit-preload-data="hover">
		<div style="display: contents"><Body data={data} /></div>
	</body>
</html>
