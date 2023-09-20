import { isSignedIn } from '$lib/server';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals }) => {
	if (!isSignedIn(locals)) throw error(403, 'Not signed in');
};
