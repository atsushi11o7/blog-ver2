"use client"

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
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
// $ プレフィックスを使って、isMobile がDOMに渡らないようにする
const StyledHero = styled.div<{ $isMobile: boolean }>`
    width: 100%;
    max-width: 960px;
    height: auto;
    position: relative;
    aspect-ratio: ${(props) => (props.$isMobile ? '768 / 824' : '1400 / 400')}; /* 縦横比を切り替え */
    overflow: hidden;
    opacity: 0;
    transform: scale(0.9);
    animation: ${fadeIn} 1.5s ease-in-out forwards;

    @media (max-width: 767px) {
        max-width: 100%; /* スマホサイズで全幅を使用 */
    }
`;

const Hero: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    // 画面サイズに応じて画像を切り替える
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767); // 画面幅が767px以下か判定
        };

        handleResize(); // 初回実行
        window.addEventListener('resize', handleResize); // 画面サイズが変更されたときに再実行

        return () => window.removeEventListener('resize', handleResize); // クリーンアップ
    }, []);

    return (
        <HeroContainer>
            <StyledHero $isMobile={isMobile}>
                <Image
                    src={isMobile ? "/hero2.png" : "/hero.png"}  // モバイルとPCで画像を切り替え
                    alt="hero"
                    fill
                    style={{ objectFit: isMobile ? 'contain' : 'cover' }} // モバイルはcontain、PCはcover
                />
            </StyledHero>
        </HeroContainer>
    );
};

export default Hero;