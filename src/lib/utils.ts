import axios from 'axios';
import { redirect } from '@sveltejs/kit';
import { dev } from '$app/environment';
import PUBLIC_ENV from '$lib/public';

export const getRandomString = (): string => Math.random().toString(36).slice(-8);

export const getAction = async (token: string = '', service: string = '', action: string = '', params: Record<string,any> = {}, cb?: Function): Promise<Record<string,any>> => {
  try {
    const baseURL = `${PUBLIC_ENV.PUBLIC_API_BASEURI}/${PUBLIC_ENV.PUBLIC_API_VERSION}`;
    const uri = `/${service}${!!action ? '/'+action : ''}`;
    if (PUBLIC_ENV.DEV) console.info('getAction baseURL:', baseURL, uri);
    const headers = !!token ? { Authorization: `Bearer ${token}`, Accept: 'application/json' } : { Accept: 'application/json' };
    const axiosBase = axios.create({
      baseURL,
      headers,
    });
    if (cb) {
      axiosBase.get(uri, params).then(resp => cb(resp?.data));
    } else {
      return (await axiosBase.get(uri, params))?.data;
    }
  } catch (error) {
    console.error('Error:', error.code);
		return { error };
  }
}
