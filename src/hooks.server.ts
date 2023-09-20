import { SvelteGoogleAuthHook } from 'svelte-google-auth/server';
import type { Handle, HandleClientError } from '@sveltejs/kit';
import PRIVATE_ENV from '$lib/private';
import PUBLIC_ENV from '$lib/public';

// Import client credentials from json file
import client_secret from '../.data/client_secret.json';

const auth = new SvelteGoogleAuthHook(client_secret.web);

export const handle: Handle = async ({ event, resolve }) => {
		return await auth.handleAuth({ event, resolve });
};

export const handleClientError = ({ event, resolve }): HandleClientError => {
		//const uid = event.cookies.get('uid');
		//console.log('hooks.server.handle() PUBLIC_ENV:', PUBLIC_ENV);
		return resolve(event);
};

/*
{
  BASE_URL: '/',
  MODE: 'development',
  DEV: true,
  PROD: false,
  SSR: true,
}
*/
