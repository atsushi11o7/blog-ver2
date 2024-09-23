import styled from "styled-components";
import Icon from "@/components/atoms/Icon";
import SocialIconSet from "../SocialIconSet";

const ProfileContainer = styled.div`
    text-align: center;
    margin: 20px;
`;

const Name = styled.h3`
    font-size: 1.5rem;
    margin: 10px 0;
`;

const Description = styled.p`
    font-size: 1rem;
    color: #666;
`;

const HorizontalLine = styled.hr`
    margin: 0 auto; /* 中央揃え */
    border: none;
    border-top: 1px solid #ccc;
    width: 120px; /* 必要に応じて幅を調整 */
    margin-top: 10px; /* 上側に少し余白を追加 */
    margin-bottom: 20px; /* 下側にも余白を追加 */
`;

const Profile: React.FC = () => (
    <ProfileContainer>
        <Icon size={120} />
        <Name>Fumi</Name>
        <HorizontalLine />
        <Description>
            茨城県在住の大学院生 <br />
            機械学習について勉強中
        </Description>
        <SocialIconSet />
    </ProfileContainer>
);

export default Profile;