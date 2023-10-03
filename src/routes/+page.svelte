<script lang="ts">
	import PUBLIC_ENV from '$lib/public';

	const title = PUBLIC_ENV.PUBLIC_APP_NAME || 'Title';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="{title}" />
</svelte:head>

<h1>{title}</h1>

<h2>Examples:</h2>
<p>
	<a href="/authenticated">/authenticated</a> - Route is only available when user is logged in,
	routes to the <a href="https://kit.svelte.dev/docs/routing#error">error page</a> in other situations
</p>

<p>
	<a href="/client-api-call">/client-api-call</a> - Example showing how to call api calls from client
	side
</p>
<p>
	<a href="/server-api-call">/server-api-call</a> - Example showing how to call api calls from server
	side
</p>
<p>
	<a href="/signin">/signin</a> - Example of redirecting user to sign in prompt instead of showing popup
</p>
<p>
	<a href="/auth">/auth</a> - Example of firebase auth via Apple or Google
</p>
