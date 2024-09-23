import styled from "styled-components";
import SocialIcon from "@/components/atoms/SocialIcon";

const SocialIconSetContainer = styled.nav`
    display: flex;
    gap: 1em;
    justify-content: center;
    align-items: center;
`;


const SocialIconSet: React.FC = () => {
    return (
        <SocialIconSetContainer>
            <SocialIcon type="x" size={24} color="#707070" />
            <SocialIcon type="github" size={24} color="#707070" />
        </SocialIconSetContainer>
    );
};

export default SocialIconSet;