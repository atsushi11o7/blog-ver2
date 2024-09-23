import Image from 'next/image';
import styled from 'styled-components';

type IconProps = {
    size?: number;
};

const StyledIcon = styled.div<{ size: number }>`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    border-radius: 50%;
    overflow: hidden;
    display: inline-block;
`;

const Icon: React.FC<IconProps>= ({
    size = 120
}) => (
    <StyledIcon size={size}>
        <Image 
            src="/icon.png"
            width={size}
            height={size}
            alt="icon"
        />
    </StyledIcon>
);

export default Icon;