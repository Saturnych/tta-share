import { error, fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getAction } from '$lib/utils';
import PRIVATE_ENV from '$lib/private';
import PUBLIC_ENV from '$lib/public';

export const load: PageServerLoad = async (event: Record<string, any>): Record<string, any> => {
  const { params } = event;
  if (PUBLIC_ENV.DEV) console.log('coa/+page.server params:', params);

  //const coa = await getAction(PRIVATE_ENV.PRIVATE_API_KEY, 'coa');

  //if (coa.error?.response) throw error(coa.error.response.status, { message: coa.error.response.statusText });

	return {
		//coa,
	};
};
