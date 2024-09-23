import Image from 'next/image';
import styled from 'styled-components';

const StyledHero = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    aspect-ratio: 1400 / 400;
    overflow: hidden;
`;

const Hero: React.FC = () => (
    <StyledHero>
        <Image
            src="/hero.png"
            alt="hero"
            fill
            style={{ objectFit: 'cover' }}
        />
    </StyledHero>
);

export default Hero;