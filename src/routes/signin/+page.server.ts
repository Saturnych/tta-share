import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { generateAuthUrl } from '$lib/server';

export const load: PageServerLoad = ({ url, locals }) => {
	const uri = generateAuthUrl(
		locals,
		url,
		['openid', 'profile', 'email', 'https://www.googleapis.com/auth/calendar.readonly'],
		'/'
	);
	console.log(uri);
	throw redirect(302,	uri);
};
