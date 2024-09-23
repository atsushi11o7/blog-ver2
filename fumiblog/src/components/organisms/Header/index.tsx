"use client"

import styled from "styled-components";
import Logo from "@/components/atoms/Logo";
import Nav from "@/components/molecules/Nav";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2em 0 0;
`;

export default function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <Nav />
        </HeaderContainer>
    );
}