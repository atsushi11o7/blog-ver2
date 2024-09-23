import styled from 'styled-components';
import { FaXTwitter, FaInstagram, FaGithub } from 'react-icons/fa6';

type SocialIconProps = {
    size?: number;
    type?: "x" | "github" | "repository";
    color?: string;
};

const IconWrapper = styled.a<{ size: number; color: string }>`
    display: inline-block;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    color: ${({ color }) => color};
    cursor: pointer;
    
    &:hover {
        opacity: 0.7;
    }
`;

const SocialIcon: React.FC<SocialIconProps> = ({ size = 24, type = "x", color = "#000" }) => {
    const renderIcon = () => {
        switch (type) {
            case "x":
                return <FaXTwitter size={size} />;
            case "github":
                return <FaGithub size={size} />;
            case "repository":
                return <FaGithub size={size} />;
            default:
                return null;
        }
    };

    const getSocialLink = () => {
        switch (type) {
            case "x":
                return "https://x.com/atsushi11o7";
            case "github":
                return "https://github.com/atsushi11o7";
            case "repository":
                return "https://github.com/atsushi11o7/blog-ver2"
            default:
                return "#";
        }
    };

    return (
        <IconWrapper href={getSocialLink()} size={size} color={color} target="_blank" rel="noopener noreferrer">
            {renderIcon()}
        </IconWrapper>
    );
};

export default SocialIcon;