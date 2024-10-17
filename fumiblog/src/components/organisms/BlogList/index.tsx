"use client";

import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { getBlogs } from '@/libs/microcms';
import PostCard from '@/components/molecules/PostCard';
import Sidebar from '../Sidebar';
import { Blog } from '@/libs/microcms';

// 浮かび上がるアニメーションを定義
const fadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
    
    @media (max-width: 1199px) {
        flex-direction: column;
        align-items: center;
    }
`;

const BlogListContainer = styled.div<{ $showContent: boolean }>`
    display: grid;
    grid-gap: 30px;
    max-width: 100%;
    opacity: ${({ $showContent }) => ($showContent ? 1 : 0)};
    transform: ${({ $showContent }) => ($showContent ? 'translateY(0)' : 'translateY(20px)')};
    transition: opacity 1s ease-in, transform 1s ease-in;

    @media (min-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 1199px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

const SidebarWrapper = styled.div<{ $showContent: boolean }>`
    width: 300px;
    opacity: ${({ $showContent }) => ($showContent ? 1 : 0)};
    transform: ${({ $showContent }) => ($showContent ? 'translateY(0)' : 'translateY(20px)')};
    transition: opacity 1s ease-in, transform 1s ease-in;

    @media (max-width: 1199px) {
        width: 90%;
        margin: 0 auto;
    }
`;

const Spacer = styled.div`
    margin-bottom: 60px;
`;

// スケルトン用のスタイル
const SkeletonCard = styled.div`
    width: 100%;
    height: 200px;
    background-color: #e0e0e0;
    border-radius: 10px;
`;

const SkeletonSidebar = styled.div`
    width: 300px;
    height: 200px;
    background-color: #e0e0e0;
    border-radius: 10px;

    @media (max-width: 1199px) {
        width: 90%;
        margin: 0 auto;
    }
`;

type BlogListProps = {
    displayCount?: number;
};

const BlogList: React.FC<BlogListProps> = ({ displayCount = 12 }) => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await getBlogs();
                setBlogs(response.contents);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching blogs:", error);
                setIsLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    useEffect(() => {
        // 1秒後にカードとサイドバーを同時に表示
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const displayedBlogs = blogs.slice(0, displayCount);

    return (
        <>
            <Spacer />
            <PageWrapper>
                <BlogListContainer $showContent={showContent}>
                    {isLoading
                        ? Array.from({ length: displayCount }).map((_, index) => (
                              <SkeletonCard key={index} />
                          ))
                        : displayedBlogs.map((blog) => (
                              <PostCard
                                  key={blog.id}
                                  title={blog.title}
                                  imageUrl={blog.eyecatch?.url}
                                  category={blog.category.name}
                                  date={blog.publishDate}
                                  link={`/blog/${blog.id}`}
                              />
                          ))}
                </BlogListContainer>
                <SidebarWrapper $showContent={showContent}>
                    {isLoading ? <SkeletonSidebar /> : <Sidebar />}
                </SidebarWrapper>
            </PageWrapper>
            <Spacer />
        </>
    );
};

export default BlogList;