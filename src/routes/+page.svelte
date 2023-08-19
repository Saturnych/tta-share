<script lang="ts">
	import PUBLIC_ENV from '$lib/public';

	const title = PUBLIC_ENV.PUBLIC_APP_NAME || 'Title';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="{title}" />
</svelte:head>

<section>
	<h1>{title}</h1>
</section>
