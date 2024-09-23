"use client"; 

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getBlogs } from '@/libs/microcms';
import PostCard from '@/components/molecules/PostCard';
import Sidebar from '../Sidebar';
import { Blog } from '@/libs/microcms';

const PageWrapper = styled.div`
    display: flex;
    justify-content: center; /* 中央揃え */
    gap: 30px; /* サイドバーとメインコンテンツの間隔を固定 */
    max-width: 1200px; /* 最大幅を指定 */
    margin: 0 auto; /* 中央揃え */
    
    /* 1199px以下ではサイドバーをメインコンテンツの下に配置 */
    @media (max-width: 1199px) {
        flex-direction: column; /* サイドバーを下に */
        align-items: center; /* 中央に揃える */
    }
`;

// メインコンテンツエリア
const BlogListContainer = styled.div`
    display: grid;
    grid-gap: 30px; /* カード間の隙間を一定に */
    max-width: 100%;

    /* 1200px以上の画面では2列 */
    @media (min-width: 1200px) {
        grid-template-columns: repeat(2, 1fr); /* カード2列 */
    }

    /* 1199px以下ではカードが2列 */
    @media (max-width: 1199px) {
        grid-template-columns: repeat(2, 1fr); /* カード2列 */
    }

    /* 767px以下ではカードが1列 */
    @media (max-width: 767px) {
        grid-template-columns: 1fr; /* カード1列 */
    }
`;

// サイドバーのスタイル
const SidebarWrapper = styled.div`
    width: 300px; /* デフォルトのサイドバーの幅 */

    /* 1199px以下ではサイドバーの幅を90%に */
    @media (max-width: 1199px) {
        width: 90%; /* 画面幅の90% */
        margin: 0 auto; /* 中央に配置 */
    }
`;

type BlogListProps = {
    displayCount?: number; // 表示する記事数を指定する引数
};

const Spacer = styled.div`
    margin-bottom: 60px;
`;

const BlogList: React.FC<BlogListProps> = ({ displayCount = 12 }) => {
    const [blogs, setBlogs] = useState<Blog[]>([]); // ブログデータの状態管理
    const [isLoading, setIsLoading] = useState(true); // ローディング状態の管理

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await getBlogs(); // ブログデータを取得
                setBlogs(response.contents); // 取得したブログデータをセット
                setIsLoading(false); // ローディングを終了
            } catch (error) {
                console.error("Error fetching blogs:", error);
                setIsLoading(false); // エラー時もローディングを終了
            }
        };
        fetchBlogs(); // データ取得を実行
    }, []);

    if (isLoading) {
        return <div>Loading...</div>; // ローディング中の表示
    }

    // 最新の記事から指定された数だけ表示する
    const displayedBlogs = blogs.slice(0, displayCount);

    return (
        <>
            <Spacer />
            <PageWrapper>
                {/* メインコンテンツ部分 */}
                <BlogListContainer>
                    {displayedBlogs.map((blog) => (
                        <PostCard
                            key={blog.id}
                            title={blog.title}
                            imageUrl={blog.eyecatch?.url}
                            category={blog.category.name}
                            date={blog.publishDate}
                            link={`/blogs/${blog.slug}`}
                        />
                    ))}
                </BlogListContainer>

                {/* サイドバー部分 */}
                <SidebarWrapper>
                    <Sidebar />
                </SidebarWrapper>
            </PageWrapper>
            <Spacer />
        </>
    );
};

export default BlogList;