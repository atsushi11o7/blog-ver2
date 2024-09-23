"use client";

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getBlogs } from '@/libs/microcms';
import PostCard from '@/components/molecules/PostCard';
import Sidebar from '../Sidebar';
import { Blog } from '@/libs/microcms';

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

const BlogListContainer = styled.div`
    display: grid;
    grid-gap: 30px;
    max-width: 100%;

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

const SidebarWrapper = styled.div`
    width: 300px;

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

    const displayedBlogs = blogs.slice(0, displayCount);

    return (
        <>
            <Spacer />
            <PageWrapper>
                <BlogListContainer>
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
                                  link={`/blogs/${blog.slug}`}
                              />
                          ))}
                </BlogListContainer>
                <SidebarWrapper>
                    {isLoading ? <SkeletonSidebar /> : <Sidebar />}
                </SidebarWrapper>
            </PageWrapper>
            <Spacer />
        </>
    );
};

export default BlogList;