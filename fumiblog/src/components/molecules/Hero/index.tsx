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

// StyledHeroにアニメーションを適用
const StyledHero = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    aspect-ratio: 1400 / 400;
    overflow: hidden;
    opacity: 0;
    transform: scale(0.9);
    animation: ${fadeIn} 1.5s ease-in-out forwards; /* アニメーションを適用 */
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