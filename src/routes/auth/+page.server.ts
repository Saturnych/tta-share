import { v4 } from 'uuid';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { parseJson, parseBuffer } from '$lib/utils';
import { generateAuthUrl } from '$lib/server';
import { initializeApp, applicationDefault, cert, App } from 'firebase-admin/app';
import { getAuth, Auth } from 'firebase-admin/auth';
import PUBLIC_ENV from '$lib/public';

export const load: PageServerLoad = async ({ url, locals }) => {
	//const uri = generateAuthUrl(locals,	url,	['openid', 'profile', 'email', 'https://www.googleapis.com/auth/userinfo.email'], '/');
	//console.log(uri);
	//if (!!uri) throw redirect(302, uri);
	//console.log(uri);

	return {};

	const uid = v4();
	const projectId = PUBLIC_ENV.PUBLIC_FIREBASE_API_KEY;
	const firebaseConfig = {
		projectId,
		apiKey: PUBLIC_ENV.PUBLIC_FIREBASE_API_KEY,
		appId: PUBLIC_ENV.PUBLIC_FIREBASE_APP_ID,
		measurementId: PUBLIC_ENV.PUBLIC_FIREBASE_MEASUREMENT_ID,
		authDomain: `${projectId}.firebaseapp.com`,
		databaseURL: `https://${projectId}.firebaseio.com`,
		storageBucket: `${projectId}.appspot.com`,
		credential: applicationDefault(),
	};
	const app: App = initializeApp(firebaseConfig);
	const auth: Auth = getAuth(app);
	const token: string = await auth.createCustomToken(uid);

	return { token };
};
