import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries } from "microcms-js-sdk";


// タグの型定義
export type Tag = {
    id: string;
    name: string;
    slug: string;
}

// カテゴリ型の定義
export type Category = {
    id: string;
    name: string;
    slug: string;
}

// ブログの型定義
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

export const getBlogs = async () => {
    const blogs = await client.getList<Blog>({
        endpoint: "blogs"
    });
    return blogs;
}