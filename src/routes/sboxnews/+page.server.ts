import type { PageServerLoad } from './$types';
import path from 'path';

export const load: PageServerLoad = async ({ fetch }) => {
    const allPostFiles = fetch( "https://services.facepunch.com/sbox/news/platform" );
    
    let unsortedPosts: App.NewsPost[] = await (await allPostFiles).json();

    unsortedPosts = unsortedPosts.filter( (post: App.NewsPost) => post.Sections[0].Contents !== "" );

    return { unsortedPosts };
};