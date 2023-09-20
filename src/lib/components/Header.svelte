<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import { signIn, signOut } from '$lib/client';

	export let data: PageData;
</script>
<header>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
		</ul>
	</nav>
	{#if data?.auth?.user}
		<p>
			Signed in as {data.auth.user.name} ({data.auth.user.email})
			<img src={data.auth.user.picture} width={36} referrerpolicy="no-referrer" alt="profile" />
		</p>
		<p>
			<button on:click={() => signOut()}>Sign out</button>
		</p>
	{:else}
		<p>
			<button
				on:click={() =>
					signIn([
						'openid',
						'profile',
						'email',
						'https://www.googleapis.com/auth/calendar.readonly'
					])}>Sign in</button
			>
		</p>
	{/if}
</header>

<style>
	header {
		border-bottom: 1px solid #ccc;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	header p {
		display: flex;
		align-items: center;
	}
</style>
