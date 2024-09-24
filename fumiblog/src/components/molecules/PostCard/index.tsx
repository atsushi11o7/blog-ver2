import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

type PostCardProps = {
    title?: string;
    imageUrl?: string;
    category?: string;
    date?: string;
    link?: string;
};

// リンク要素のスタイル
const StyledLink = styled.a`
    display: inline-block;
    text-decoration: none;
    color: inherit;

    &:hover {
        text-decoration: none;
    }
`;

// カード全体のスタイル
const Card = styled.div`
    width: 300px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform: scale(1);
    opacity: 0;
    animation: fadeIn 0.5s forwards;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

`;

// カードの画像エリア
const CardImage = styled.div`
    width: 100%;
    height: 150px;
    position: relative;
`;

// カード本文のスタイル
const CardBody = styled.div`
    padding: 1rem;
`;

// タイトルのスタイル
const Title = styled.h3`
    font-size: 1.2rem;
    margin: 0.5rem 0;
    color: #333;
    display: -webkit-box;
    -webkit-line-clamp: 2;  // 2行以上表示しないようにする
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    height: 54px;  // タイトル部分を2行に固定（1行の高さが約1.8em）
`;

// カテゴリのスタイル
const Category = styled.span`
    background-color: #d1e7ff;
    color: #1d5e9e;
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
    border-radius: 15px;
    text-transform: uppercase;
    font-weight: bold;
    display: inline-block;
    margin-bottom: 0.5rem;
`;

// フッター部分
const Footer = styled.div`
    font-size: 0.8rem;
    color: #888;
    margin-top: 8px;
`;

const PostCard: React.FC<PostCardProps> = ({ title = "無題", imageUrl = null, category = "その他", date = "xxxx/xx/xx", link = "/" }) => {
    const defaultImage = "/eyecatch.png";  // デフォルト画像

    return (
        <Link href={link} passHref>
            <StyledLink>
                <Card>
                    <CardImage>
                        <Image
                            src={imageUrl || defaultImage}  // 画像が存在しない場合デフォルト画像
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                        />
                    </CardImage>
                    <CardBody>
                        <Category>{category}</Category>
                        <Title>{title}</Title>  {/* タイトルの長さが2行を超えると省略 */}
                        <Footer>{date}</Footer>
                    </CardBody>
                </Card>
            </StyledLink>
        </Link>
    );
};

export default PostCard;