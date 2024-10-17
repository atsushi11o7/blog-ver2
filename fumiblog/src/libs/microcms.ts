import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries } from "microcms-js-sdk";


export type Tag = {
    id: string;
    name: string;
    slug: string;
}

export type Category = {
    id: string;
    name: string;
    slug: string;
}

export type Blog = {
    id: string;
    title: string;
    slug: string;
    publishDate: string;
    updateDate: string;
    content: string;
    eyecatch: {
        url: string;
        height: number;
        width: number;
    }
    category: Category
    tags: Tag[];
};

if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) {
    throw new Error('NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN is required');
}
  
if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) {
    throw new Error('NEXT_PUBLIC_MICROCMS_API_KEY is required');
}

export const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
})

// 記事一覧を取得
export const getBlogs = async () => {
    const blogs = await client.getList<Blog>({
        endpoint: 'blogs',
    });
    return blogs;
};

// 特定の記事をスラッグで取得
export const getBlogBySlug = async (slug: string) => {
    try {
        const blog = await client.getListDetail<Blog>({
            endpoint: 'blogs',
            contentId: slug,
        });
        return blog;
    } catch (error) {
        console.error(`Error fetching blog with slug ${slug}:`, error);
        return null;
    }
};