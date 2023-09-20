import type { Credentials, OAuth2Client } from 'google-auth-library';

export type DecodedIdToken = {
	iss: string;
	azp: string;
	aud: string;
	sub: string;
	hd: string;
	email: string;
	email_verified: string;
	at_hash: string;
	name: string;
	picture: string;
	given_name: string;
	family_name: string;
	locale: string;
	iat: string;
	exp: string;
};

export interface AuthLocals extends App.Locals {
	user?: DecodedIdToken;
	token?: Credentials;
	client_id: string;
	client_secret: string;
	client: OAuth2Client;
}

export interface AuthLocalsSignedIn extends AuthLocals {
	user: DecodedIdToken;
	token: Credentials;
	client_id: string;
	client_secret: string;
	client: OAuth2Client;
}

export interface AuthClientData {
	client_id: string;
	user?: DecodedIdToken;
	access_token?: string;
}

/** Client data when user is signed in */
export interface AuthClientDataSignedIn {
	client_id: string;
	user: DecodedIdToken;
	access_token: string;
}
