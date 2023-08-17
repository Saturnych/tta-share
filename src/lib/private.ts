import { env as dynamic_private } from '$env/dynamic/private';
import * as static_private from '$env/static/private';

const ENV = Object.assign(import.meta.env, static_private, dynamic_private);

export default ENV;
