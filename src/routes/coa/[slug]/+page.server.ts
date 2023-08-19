import { error, fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types';
import { getAction } from '$lib/utils';
import PRIVATE_ENV from '$lib/private';
import PUBLIC_ENV from '$lib/public';

const getCoa = async (token: string, path: string, slug: string): Record<string, any> => {
  try {
    const coa = (!!slug) ? (await getAction(token, path, slug)) : null;
    if (coa?.error?.response) throw error(coa.error.response.status, { message: coa.error.response.statusText });
    return coa;
  } catch (err) {
    console.error(err);
  }
};

const getCoas = async (token: string, path: string): Record<string, any>[] => {
  try {
    const coas = await getAction(token, path);
    if (coas?.error?.response) throw error(coas.error.response.status, { message: coas.error.response.statusText });
    return coas;
  } catch (err) {
    console.error(err);
  }
};

export const load: PageServerLoad = async (event: Record<string, any>): Record<string, any> => {
  if (PUBLIC_ENV.DEV) {
    const coas = await getCoas(PRIVATE_ENV.PRIVATE_API_KEY, 'coa?minted=1&pageSize=1');
    const slugs: Array<{ slug: string; }> = coas?.results ? coas.results.map(el=>{ return { slug: el.externalId }; }) : [];
    console.log('coa/slug/+page.server slugs:', slugs);
  }

  const { params } = event;
  if (PUBLIC_ENV.DEV) console.log('coa/slug/+page.server params:', params);
  const coa = await getCoa(PRIVATE_ENV.PRIVATE_API_KEY, 'coa/info', params.slug);
  if (PUBLIC_ENV.DEV) console.log('coa/slug/+page.server coa:', coa);

	return {
    coa,
	};
};

export const entries: EntryGenerator = async (event: Record<string, any>): Array<{ slug: string; }> => {
  const coas = await getCoas(PRIVATE_ENV.PRIVATE_API_KEY, 'coa?minted=1&pageSize=100');
  const slugs: Array<{ slug: string; }> = coas?.results ? coas.results.map(el=>{ return { slug: el.externalId }; }) : [];
  return slugs;
  //return [{ slug: 'clk6k021s000tw801sakoa21p' }, { slug: 't0011' }, { slug: 'clkwkdhgn00259t0t3841vsl7' }];
};
