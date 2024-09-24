import Link from "next/link";
import styled from "styled-components";

const NavContainer = styled.nav`
    padding: 0 2em 0 0;
`;

const List = styled.ul`
    display: flex;
    gap: 2em;
`;

const ListItem = styled.li`
    list-style: none;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:hover {
        color: blue;
    }
`;

const Nav: React.FC = () => {
    return (
        <NavContainer>
            <List>
                <ListItem>
                    <StyledLink href="/">Home</StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink href="/about">About</StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink href="/blog">Blog</StyledLink>
                </ListItem>
            </List>
        </NavContainer>
    );
};

export default Nav;