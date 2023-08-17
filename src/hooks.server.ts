import PRIVATE_ENV from '$lib/private';
import PUBLIC_ENV from '$lib/public';

export const handle = ({ event, resolve }): HandleClientError => {
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
