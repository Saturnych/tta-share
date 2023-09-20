<script lang="ts">
	import type { PageData } from './$types';
	import { invalidateAll } from '$app/navigation';
	import { initialize } from '$lib/client';
	import Header from '$lib/components/Header.svelte';
	import PUBLIC_ENV from '$lib/public';

	const title = PUBLIC_ENV.PUBLIC_APP_NAME || 'TTA';

	export let data: PageData;
	initialize(data, invalidateAll);

	console.log('user data:', data);
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
</svelte:head>

<div class="app">
	<Header {data} />

	<main>
		<slot />
	</main>

	<footer>
		<p><a href="https://toptierauth.com">toptierauth.com</a></p>
	</footer>
</div>

<style>
	:global(body) {
		font-family: 'Roboto', sans-serif;
		max-width: 800px;
		margin: auto;
	}
</style>
