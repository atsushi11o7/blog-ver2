import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const StyledLink = styled(Link)`
    display: inline-block;
    line-height: 0;
    margin: 0px;
    padding: 0;
    vertical-align: bottom;
`;

const Logo: React.FC = () => {
    return (
        <StyledLink href="/">
            <figure style={{ margin: 0 }}>
                <Image
                    src="/logo.png"
                    width={120}
                    height={72}
                    alt="logo"
                    sizes="(min-width: 768px) 200px, 100vw"
                />
            </figure>
        </StyledLink>
    );
};

export default Logo;