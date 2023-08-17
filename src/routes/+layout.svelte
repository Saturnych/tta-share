<script lang="ts">
	import Header from '$lib/components/Header.svelte';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p><a href="https://toptierauth.com">toptierauth.com</a></p>
	</footer>
</div>
