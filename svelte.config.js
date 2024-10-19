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
            base: process.env.NODE_ENV === 'development' ? '' : '/website' // Ensure 'website' matches your repo name
        },
        prerender: {
            default: true, // Enable prerendering by default
            handleHttpError: ({ path, referrer, message }) => {
                // Ignore 404 errors for paths that do not begin with the base path
                if (path.startsWith('/website')) {
                    return;
                }
                throw new Error(message);
            }
        }
    }
};

export default config;