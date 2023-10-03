<script lang="ts">
	import { v4 as uuidv4 } from 'uuid'; // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { redirect } from '@sveltejs/kit';
	import { initializeApp } from 'firebase/app';
	import { onAuthStateChanged, getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, OAuthProvider } from 'firebase/auth';
	import type { PageData } from './$types';
	import PUBLIC_ENV from '$lib/public';

	export let data: PageData;

	const firebaseConfig = {
	  apiKey: PUBLIC_ENV.PUBLIC_FIREBASE_API_KEY,
	  authDomain: PUBLIC_ENV.PUBLIC_FIREBASE_AUTH_DOMAIN,
		projectId: PUBLIC_ENV.PUBLIC_FIREBASE_PROJECT_ID,
	};
	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);

	const providers = {
		google: new GoogleAuthProvider(),
		apple: new OAuthProvider('apple.com'),
		amazon: new OAuthProvider('oidc.amazon'),
	};
	providers['google'].addScope('openid');
	providers['google'].addScope('profile');
	providers['google'].addScope('email');
	providers['google'].addScope('https://www.googleapis.com/auth/userinfo.email');
	providers['apple'].addScope('email');
	providers['apple'].addScope('name');
	providers['apple'].setCustomParameters({ locale: 'en' });
	providers['amazon'].addScope('profile');
	//providers['amazon'].setCustomParameters({ response_type: 'code' }); //

	const signIn = async (provider = 'google', popup = true): void => {
		try {
			const creds = popup ? (await signInWithPopup(auth, providers[provider])) : (await signInWithRedirect(auth, providers[provider]));
			console.log(provider, 'creds:', creds);
			//const idToken = await auth.currentUser.getIdToken();
			//console.log(provider, 'idToken:', idToken);
		} catch (err) {
			console.error(provider, 'error:', err);
		}
	};

	const logIn = async (provider = 'amazon'): void => {
		try {
			/*
			const scope = 'profile';
			const scope_data = { profile : { essential: false } };
			const state = uuidv4();
			const client_id = 'amzn1.application-oa2-client.ba335b2f3ba94b4fa910d5c248e2f612';
			const redirect_uri = $page.url.origin+$page.url.pathname;
			console.log('redirect_uri:', redirect_uri);
			const uri = `https://www.amazon.com/ap/oa?client_id=${client_id}&state=${state}&scope=${scope}&response_type=code&redirect_uri=${redirect_uri}`;
			goto(uri);
			*/
			const options = { scope: 'profile', state: uuidv4(), pkce: true };
      if (amazon?.Login) {
				amazon.Login.authorize(options, (resp) => {
					if (resp?.error) {
						console.error('oauth error:', resp.error);
						return;
					}
					console.log('amazon.Login.authorize response:', resp);
					// { status: 'complete', code: 'ANDVJrlwxbybKNRMAMyL', scope: 'profile', state: 'ed816f27-c2fb-4ef7-84ad-5cdf65f20981', onComplete: ƒ }
					if (!!resp.status && !!resp.code) {
						amazon.Login.retrieveToken(resp.code, (resp) => {
							if (resp.error) {
								console.error('amazon.Login.retrieveToken error:', resp.error);
								return;
							}
							console.log('amazon.Login.retrieveToken response:', resp);
							// { success: true, access_token: 'Atza|IwEBIBLNQIrh65dqFFOuWzYl14a2MsnytB7QkAR5rNTsf…DNfboRT20E2_8ODICihMwSob14My-IcGwVzPVq3GtW4sF0_Jy', token_type: 'bearer', expires_in: 3349 }
							if (!!resp.success && !!resp.access_token) {
								amazon.Login.retrieveProfile(resp.access_token, (resp) => {
									if (resp.error) {
										console.error('amazon.Login.retrieveProfile error:', resp.error);
										return;
									}
									console.log('amazon.Login.retrieveProfile response:', resp.profile);
									// { CustomerId: "amzn1.account.AF2TKZE7K3QGYSWDQJXLDEBCVL6Q", Name: "Denis Glebko", PrimaryEmail: "denis@toptierauth.com" }
								});
							}
						});
					}
				});
			}
      return;
		} catch (err) {
			console.error(provider, 'error:', err);
		}
	};

	onMount(async () => {
		console.log($page.url);
	});

	/*
	"?access_token=Atza%7CIwEBIFxhuDAuQ2an4bft1oS9dRqJibCGvkY60CoFC7MZ1JRDjcAfgNRFBBk_MrDd9us7wnHi5oq0vUwmUH5Q4OdbcYPEjsAmEpRY9sayClBWcnPATBhxVEtvOgSkgfcwO8i01ZFd2HQ921pEeWJfGD-QeXLWHFRz_ma0KyS2YwI-WpttRlkaN_w9DFoE6YI51n0tukZGZPcYR58Z7iZaNKjZhlel_CbEfWK7R5wvXP7WxZboe8sA14U9E4-jE-tYranYxMxIaYRqr3UrMYCe7RR32AlymdlxZ6UMRT082ahvoukLmJmX5qSVXongug5PPD6EeUrDwjltIIqR6fIttFesOGoOdhrHeNDezIkJmOOC-dXAiftQ2BNd_gupFmBCrEDZ5Kn3Jk9rKj9iCKHCW7EwG9J56ze9pz5SSFD6hhEIXNA4ng&token_type=bearer&expires_in=2087&scope=profile&state=8560fdf6-19f1-48a6-aa0b-5ca1159dd84c"

displayName
"Denis Glebko"
email
"788fjmqr25@privaterelay.appleid.com"
emailVerified

	if (!!data.token) {
		signInWithCustomToken(auth, data.token)
		  .then((userCredential) => {
		    console.log('userCredential:', userCredential);
		  })
		  .catch((error) => {
		    console.error(error);
		  });
	}
	*/
</script>

<h1>Example of firebase auth page.</h1>

<p>You can view this page right now because you are authenticate as {data.auth.user?.name}.</p>

<button on:click={() => signIn()}>signInWithGoogle</button>
<button on:click={() => signIn('apple')}>signInWithApple</button>
<button on:click={() => signIn('amazon')}>signInWithAmazon</button>
<button on:click={() => logIn('amazon')}>signInWithAmazonLWA</button>
