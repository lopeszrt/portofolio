import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		port: 80,
		fs: {
			allow: ['..']
		}
	}
};

export default config;
