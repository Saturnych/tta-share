import { error, fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getAction } from '$lib/utils';
import PRIVATE_ENV from '$lib/private';
import PUBLIC_ENV from '$lib/public';

export const load: PageServerLoad = async (event: Record<string, any>): Record<string, any> => {
	//if (!session || !!!session.user || session.expiry_date < Date.now()) {
	// throw redirect(303, '/auth');
	//}
  const { params } = event;
  const coa = await getAction(PRIVATE_ENV.PRIVATE_API_KEY, 'coa/info', params.path);
  //if (PUBLIC_ENV.DEV) console.log('coa/[...path]/+page.server coa:', coa);

  if (coa.error?.response) throw error(coa.error.response.status, { message: coa.error.response.statusText });

	return {
    coa,
	};
};
