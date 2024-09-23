"use client";

import Image from 'next/image';
import styled, { keyframes } from 'styled-components';

// アニメーションを定義
const fadeIn = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.9);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`;

// StyledHero全体を包むコンテナを定義
const HeroContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

// StyledHeroにアニメーションと最大幅を適用
const StyledHero = styled.div`
    width: 100%;
    max-width: 960px; /* 最大幅を1200pxに制限 */
    height: auto;
    position: relative;
    aspect-ratio: 1400 / 400;
    overflow: hidden;
    opacity: 0;
    transform: scale(0.9);
    animation: ${fadeIn} 1.5s ease-in-out forwards;
`;

const Hero: React.FC = () => (
    <HeroContainer>
        <StyledHero>
            <Image
                src="/hero.png"
                alt="hero"
                fill
                style={{ objectFit: 'cover' }}
            />
        </StyledHero>
    </HeroContainer>
);

export default Hero;