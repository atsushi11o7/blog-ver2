import styled, { css } from 'styled-components'

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";  // 現状"button"しか使用していない
    backgroundColor?: string;
    color?: string;
    fontSize?: string;
};

const StyledButton = styled.button<ButtonProps>`

    background-color: ${props => props.backgroundColor || 'white'};
    color: ${props => props.color || 'black'};
    font-size: ${props => props.fontSize || '16px'};  // fontSize プロパティを適用

    ${props => {
        switch (props.type) {
        case 'submit':
            return css`  // 未設定
            `;
        case 'reset':
            return css`  // 未設定
            `;
        default:
            // Default style for "button"
            return css`
                padding: 10px 10px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            `;
        }
    }}

    &:hover {
        opacity: 0.8;
    }
`;

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type,
    backgroundColor,
    color,
    fontSize
}) => (
    <StyledButton
        onClick={onClick}
        type={type}
        backgroundColor={backgroundColor}
        color={color}
        fontSize={fontSize}
    >
        {children}
    </StyledButton>
);
  
export default Button;