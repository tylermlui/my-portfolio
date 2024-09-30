import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	root: 'my-portfolio',
	server: {
		fs:{
			allow: ['static'],
		},
	},
	plugins: [sveltekit()]
});
