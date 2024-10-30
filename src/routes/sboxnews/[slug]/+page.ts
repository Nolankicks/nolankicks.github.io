import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
    const { slug } = params;
    const response = await fetch('https://services.facepunch.com/sbox/news/platform');
    const posts: App.NewsPost[] = await response.json();

    const post = posts.find(p => p.Title === slug);

    if (!post) {
        return {
            status: 404,
            error: new Error('Post not found')
        };
    }

    return {
        content: post.Sections,
        post
    };
};