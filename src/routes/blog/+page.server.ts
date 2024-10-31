import type { PageServerLoad } from './$types';
import { NewsAsBlog, type NewsPost } from '$lib/types/NewsPosts';
import path from 'path';

export const load: PageServerLoad = async ({ fetch }) => {
    const allPostFiles = import.meta.glob("/src/content/blogs/*.md");
    const iterablePostFiles = Object.entries(allPostFiles);

    let unsortedPosts: App.BlogPost[] = await Promise.all(
        iterablePostFiles.map(async ([filePath, resolver]) => {
            const { metadata }: any = await resolver();
            const { name } = path.parse(filePath);
            
            return {
                slug: name,
                ...metadata
            };
        })
    );

    const allNewsPostsFetch = fetch( "https://services.facepunch.com/sbox/news/organization/nolankicks" );
    
    let newsPosts: NewsPost[] = await (await allNewsPostsFetch).json();

    if ( !newsPosts )
    {
        return {
            status: 404,
            error: new Error( "Posts not found" )
        };
    }

    newsPosts = newsPosts.filter( (post: NewsPost) => post.Sections[0].Contents !== "" );

    let newsAsBlog = newsPosts.map( (post: NewsPost) => {
        return NewsAsBlog( post );
    });

    unsortedPosts = unsortedPosts.concat( newsAsBlog );

    unsortedPosts = unsortedPosts.filter( (post: App.BlogPost) => post.published ?? true );

    const posts = unsortedPosts.sort((a, b) => {
        return new Date(b.date).valueOf() - new Date(a.date).valueOf();
    });

    return { posts };
};