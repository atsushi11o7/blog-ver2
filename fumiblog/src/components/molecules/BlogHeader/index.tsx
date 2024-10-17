"use client";

import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    margin-bottom: 20px;
`;

const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 10px;
`;

const Date = styled.p`
    font-size: 0.9rem;
    color: #666;
`;

type BlogHeaderProps = {
    title: string;
    date: string;
};

const BlogHeader: React.FC<BlogHeaderProps> = ({ title, date }) => (
    <HeaderWrapper>
        <Title>{title}</Title>
        <Date>{date}</Date>
    </HeaderWrapper>
);

export default BlogHeader;