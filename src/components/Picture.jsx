import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  width: max-content;
  height: auto;
  max-width: 420px;
  max-height: 620px;
  margin: 21px;
`;

const ImgWrapper = styled.div`
  flex: 1;
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
`;

const Details = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const Left = styled.div``;
const Name = styled.p``;
const UserName = styled.p``;

const Right = styled.div``;
const Likes = styled.p``;

const Span = styled.span``;

const Picture = ({ photo }) => {
  const { author, url, id } = photo;
  const username = `${author}`.toLowerCase();

  return (
    <Container>
      <ImgWrapper>
        <Img src={url} />
      </ImgWrapper>
      <Details>
        <Left>
          <Name>{author}</Name>
          <UserName>@{username}</UserName>
        </Left>
        <Right>
          <Likes>{id}</Likes>
        </Right>
      </Details>
    </Container>
  );
};

export default Picture;
