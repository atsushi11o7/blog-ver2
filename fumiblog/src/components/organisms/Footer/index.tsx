"use client";

import styled from "styled-components";
import SocialIcon from "@/components/atoms/SocialIcon";

const FooterWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #444444;
    color: #eeeeee;
`;

// FooterContainerに最大幅1200pxを設定
const FooterContainer = styled.footer`
    width: 100%;
    max-width: 960px; /* 最大幅を1200pxに制限 */
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 160px;
    padding: 1em 2em;
    box-sizing: border-box; /* パディング込みで幅を計算 */
`;

const FooterText = styled.p`
    font-size: 1.2em;
`;

export default function Footer() {
    return (
        <FooterWrapper>
            <FooterContainer>
                <FooterText>Fumi Blog</FooterText>
                <SocialIcon type="repository" size={24} color="#eeeeee" />
            </FooterContainer>
        </FooterWrapper>
    );
}