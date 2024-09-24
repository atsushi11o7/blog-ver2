import React from 'react';
import styled from 'styled-components';

const SectionTitle = styled.h3`
    font-size: 1.2rem;
    margin: 20px 0 10px;
    font-weight: bold;
    color: #444444;
`;

const CategoryListContainer = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const CategoryItem = styled.li`
    font-size: 1rem;
    margin: 5px 0;
`;

const CategoryList: React.FC = () => (
    <div>
        <SectionTitle>Categories</SectionTitle>
        <CategoryListContainer>
            <CategoryItem>準備中</CategoryItem>
            <CategoryItem>準備中</CategoryItem>
            <CategoryItem>準備中</CategoryItem>
            <CategoryItem>...</CategoryItem>
        </CategoryListContainer>
    </div>
);

export default CategoryList;