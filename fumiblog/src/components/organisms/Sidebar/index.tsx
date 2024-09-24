import styled from 'styled-components';
import Profile from '@/components/molecules/Profile';
import CategoryList from '@/components/molecules/CategoryList';
import TagCloud from '@/components/molecules/TagCloud';

const SidebarContainer = styled.div`
    width: 300px;
    padding: 20px;
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    @media (max-width: 1199px) and (min-width: 768px) {
        width: 630px;
        margin: 0 auto; /* 中央に配置 */
    }

    @media (max-width: 767px) {
        width: 300px; /* 画面幅の90%にする */
        margin: 0 auto; /* 中央に配置 */
    }
`;

const Spacer = styled.div`
    margin-bottom: 60px;
`;

const Sidebar: React.FC = () => (
    <SidebarContainer>
        <Profile />
        <Spacer />
        <CategoryList />
        <Spacer />
        <TagCloud />
    </SidebarContainer>
);

export default Sidebar;