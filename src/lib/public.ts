import { env as dynamic_public } from '$env/dynamic/public';
import * as static_public from '$env/static/public';

const ENV = Object.assign(import.meta.env, static_public, dynamic_public);

export default ENV;
