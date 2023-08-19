import PUBLIC_ENV from '$lib/public';
import { getRandomString } from '$lib/utils';
//import * as Sentry from '@sentry/svelte';
//Sentry.init({/*...*/})

export const handleError: HandleClientError = ({ error, event }): { message: string; errorId: string; } => {
		const errorId: string = getRandomString();
    // example integration with https://sentry.io/
    //Sentry.captureException(error, { extra: { event, errorId } });
    //console.log('hooks.client.handleError() PUBLIC_ENV:', PUBLIC_ENV);
    return {
      message: 'Whoops!',
      errorId
    };
};
