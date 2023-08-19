<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import COA from '$lib/components/COA.svelte';

	export let data: PageData = $page.data;
</script>

<COA data={data} />
