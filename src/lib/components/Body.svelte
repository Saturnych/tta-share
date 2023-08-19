<script lang="ts">
	import { page } from '$app/stores';

	const { pathname } = $page.url;

	export let data;
	const { coa } = data;
</script>

<h1>{coa?.name}</h1>
<h2>uri: {pathname}.html</h2>
<h3>{coa?.thumbURI}</h3>
