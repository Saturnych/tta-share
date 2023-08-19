require('svelte/register');
const App = require('../../../lib/components/App.svelte').default;

import type { RequestHandler, Response } from '@sveltejs/kit';
import { error, fail, redirect } from '@sveltejs/kit';
import { getAction } from '$lib/utils';
import PRIVATE_ENV from '$lib/private';
import PUBLIC_ENV from '$lib/public';

const getHandler = async (event: Record<string, any>, type: string = 'text/html'): Response => {
    try {
  		const { url, params } = event;
      console.log(url, params);

      const coa = await getAction(PRIVATE_ENV.PRIVATE_API_KEY, 'coa/info', params.path);

      if (coa.error?.response) throw error(coa.error.response.status, { message: coa.error.response.statusText });

      const { html, css, head } = App.render({ data: { coa } });

      return new Response(html.trim(), { headers: { 'Content-Type': type } });
  	} catch (e) {
  		console.error(e);
      throw error(e.status || 400, e);
  	}
};

export const GET: RequestHandler = async (event: Record<string, any>): Response => getHandler(event);

export const prerender = true;
