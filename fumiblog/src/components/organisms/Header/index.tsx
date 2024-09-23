import Logo from "@/components/atoms/Logo";
import Nav from "@/components/molecules/Nav";
import styled from "styled-components";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 2em;
`;

export default function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <Nav />
        </HeaderContainer>
    );
}