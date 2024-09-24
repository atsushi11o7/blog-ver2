"use client";

import styled from "styled-components";
import Logo from "@/components/atoms/Logo";
import Nav from "@/components/molecules/Nav";

// Header全体のスタイル
const HeaderContainer = styled.header`
    display: flex;
    justify-content: center; /* 中央揃え */
`;

// 内部コンテンツを最大幅1200pxに制限
const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 960px; /* 最大幅を1200pxに制限 */
`;

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <Logo />
                <Nav />
            </HeaderContent>
        </HeaderContainer>
    );
}