<script lang="ts">
	import PUBLIC_ENV from '$lib/public';
	import Header from '$lib/components/Header.svelte';

	const title = PUBLIC_ENV.PUBLIC_APP_NAME || 'TTA';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p><a href="https://toptierauth.com">toptierauth.com</a></p>
	</footer>
</div>
