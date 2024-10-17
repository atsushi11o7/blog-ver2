"use client";

import React from 'react';
import styled from 'styled-components';


const ContentWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

const BlogContent: React.FC<{ content: string }> = ({ content }) => (
    <ContentWrapper dangerouslySetInnerHTML={{ __html: content }} />
);

export default BlogContent;
