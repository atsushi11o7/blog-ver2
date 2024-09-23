import { createClient } from 'microcms-js-sdk';
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
  MicroCMSContentId,
} from 'microcms-js-sdk';


// タグの型定義
export type Tag = {
    name: string;
} & MicroCMSContentId &
    MicroCMSDate;

// カテゴリ型の定義

// ブログの型定義
export type Blog = {
    title: string;
    description: string;
    content: string;
    thumbnail?: MicroCMSImage;
    tags?: Tag[];
};

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}
  
if (!process.env.MICROCMS_API_KEY) {
    throw new Error('MICROCMS_API_KEY is required');
}

export const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
})