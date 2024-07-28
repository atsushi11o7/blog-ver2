import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const ImageLink = styled.a`
    display: inline-block;
    line-height: 0;
    margin: 0px;
    padding: 0;
    vertical-align: bottom;
`;

const Logo: React.FC = () => {
    return (
        <Link href="/" passHref>
            <ImageLink>
                <figure style={{ margin: 0}}>
                    <Image
                        src="/logo.png"
                        width={200}
                        height={120}
                        alt="logo"
                        sizes="(min-width: 768px) 200px, 100vw"
                    />
                </figure>
            </ImageLink>
        </Link>
    );
};

export default Logo;