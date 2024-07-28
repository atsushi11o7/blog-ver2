import Link from "next/link";
import styled from "styled-components";

const NavContainer = styled.nav`
    /* Add any styles for the nav container if needed */
`;

const List = styled.ul`
    display: flex;
    gap: 2em;
`;

const ListItem = styled.li`
    list-style: none;
`;

const StyledLink = styled.a`
    text-decoration: none;
    color: inherit;

    &:hover {
        color: blue;
    }
`;

const Nav: React.FC = () => {
    return (
        <NavContainer>
            <List>
                <ListItem>
                    <Link href="/" passHref>
                        <StyledLink>Home</StyledLink>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="/about" passHref>
                        <StyledLink>About</StyledLink>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="/blog" passHref>
                        <StyledLink>Blog</StyledLink>
                    </Link>
                </ListItem>
            </List>
        </NavContainer>
    );
};

export default Nav;