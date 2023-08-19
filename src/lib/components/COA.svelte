<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import Body from '$lib/components/Body.svelte';

	export let data;
</script>

<svelte:head>
	<Meta data={data} />
</svelte:head>

<Body data={data} />
