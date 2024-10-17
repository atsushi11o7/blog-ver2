import { getBlogBySlug } from '@/libs/microcms';
import BlogHeader from '@/components/molecules/BlogHeader';
import BlogContent from '@/components/molecules/BlogContent';

type Params = {
    slug: string;
};

export default async function BlogPostPage({ params }: { params: Params }) {
    const { slug } = params;
    const blog = await getBlogBySlug(slug);

    if (!blog) {
        return <div>ブログ記事が見つかりません</div>;
    }

    return (
        <div>
            <BlogHeader title={blog.title} date={blog.publishDate} />
            <BlogContent content={blog.content} />
            {/* 必要に応じてサイドバーなどを追加可能 */}
        </div>
    );
}
