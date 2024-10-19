import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: 'build', // Output directory for static files
            assets: 'build', // Output directory for assets
            fallback: '404.html' // Fallback file for SPA
        }),
        paths: {
            base: process.env.NODE_ENV === 'development' ? '' : '/website' // Replace 'your-repo-name' with your actual repo name
        },
        prerender: {
            default: true // Enable prerendering by default
        }
    }
};

export default config;