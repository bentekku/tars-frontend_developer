import styled from "styled-components";

const Details = styled.div`
  opacity: 0;
  position: absolute;
  bottom: 0;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 1)
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 16px;

  transition: all 0.2s ease-in-out;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  height: auto;
  max-width: 420px;
  max-height: 620px;
  margin: 21px;
  position: relative;
  border-radius: 11px;
  overflow: hidden;

  &:hover {
    cursor: zoom-in;
    ${Details} {
      opacity: 1;
    }
  }
`;

const ImgWrapper = styled.div`
  flex: 1;
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Left = styled.div``;
const Name = styled.p``;
const UserName = styled.p``;

const Right = styled.div``;
const Likes = styled.p``;

const Span = styled.span``;

const Picture = ({ photo }) => {
  const img = photo.urls.full;
  const name = photo.user.name;
  const username = photo.user.username;
  const likes = photo.likes;
  // const insta = photo.social.instagram_username;
  // const downloads = photo.downloads;

  return (
    <Container>
      <ImgWrapper>
        <Img src={img} />
      </ImgWrapper>
      <Details>
        <Left>
          <Name>{name}</Name>
          <UserName>@{username}</UserName>
        </Left>
        <Right>
          <Likes>
            <Span>likes: </Span>
            {likes}
          </Likes>
        </Right>
      </Details>
    </Container>
  );
};

export default Picture;
