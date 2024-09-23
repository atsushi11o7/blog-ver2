"use client"

import styled from "styled-components";
import SocialIcon from "@/components/atoms/SocialIcon";

const FooterContainer = styled.footer`
    background-color: #444444;
    color: #eeeeee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 160px;
    padding: 1em 2em;
`;

const FooterText = styled.p`
    font-size: 1.2em;
`;

export default function Footer() {
    return (
        <FooterContainer>
            <FooterText>Fumi Blog</FooterText>
            <SocialIcon type="repository" size={24} color="#eeeeee" />
        </FooterContainer>
    );
}