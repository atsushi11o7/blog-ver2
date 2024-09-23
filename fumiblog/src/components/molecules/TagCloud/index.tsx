import React from 'react';
import styled from 'styled-components';

const SectionTitle = styled.h3`
    font-size: 1.2rem;
    margin: 20px 0 10px;
    font-weight: bold;
`;

const TagCloudContainer = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const TagItem = styled.li`
    font-size: 1rem;
    margin: 5px 0;
`;

const TagCloud: React.FC = () => (
    <div>
        <SectionTitle>Tags</SectionTitle>
        <TagCloudContainer>
            <TagItem>準備中</TagItem>
            <TagItem>準備中</TagItem>
            <TagItem>準備中</TagItem>
            <TagItem>...</TagItem>
        </TagCloudContainer>
    </div>
);

export default TagCloud;