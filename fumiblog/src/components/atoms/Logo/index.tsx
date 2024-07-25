import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const ImageLink = styled.a`
  display: inline-block;
  font-size: var(--small-heading2);
  font-weight: 700;
  letter-spacing: 0.15em;
`;

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <ImageLink>
        <figure>
          <Image
            src="/logo.png"
            width={200}
            height={120}
            alt="logo"
            sizes="(min-width: 768px) 200px, 100vw"
          />
        </figure>
        <span>FUMIBLOG</span>
      </ImageLink>
    </Link>
  );
};

export default Logo;