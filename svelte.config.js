import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import autoImport from 'sveltekit-autoimport';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [
        vitePreprocess(),

        autoImport({
            include: ['**/*.(svelte|md)'],
            components: ['./src/lib/components/', { name: './src' }]
        })
    ],

	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
        
		paths: {
			base: process.argv.includes('dev') ? '' : "/website"
		},
	}
};

export default config;