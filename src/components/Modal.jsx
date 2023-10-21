import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  padding: 40px 80px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 5;
`;
const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
const CloseBtn = styled.button`
  position: absolute;
  top: -25px;
  right: -25px;
  border: none;
  width: 45px;
  height: 45px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  z-index: 10;
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    transform: scale(1.1);
  }
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 70%;
  @media screen and (max-width: 736px) {
    width: auto;
    height: 55%;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  height: 70%;
  flex: 1;
  position: relative;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Details = styled.div`
  position: relative;
  padding: 24px;
  background: #fff;
  width: 100%;
  border-radius: 0 0 8px 8px;
  overflow: hidden;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .stats {
    display: flex;
    justify-content: center;
    align-items: start;
    div:first-of-type {
      margin-right: 16px;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2px;
        span {
          font-size: 21px;
          font-variation-settings: "FILL" 0, "wght" 500, "GRAD" 0, "opsz" 24;
        }
      }
    }
  }
  @media screen and (max-width: 736px) {
    gap: 24px;
  }
`;

const User = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
  @media screen and (max-width: 736px) {
    gap: 12px;
  }
`;
const Name = styled.p`
  margin-bottom: 6px;
  font-size: 15px;
  font-weight: 700;
  color: #4f4f4f;
  @media screen and (max-width: 736px) {
    font-size: 13px;
  }
`;
const Username = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #a7a7a7;
  font-style: italic;
  @media screen and (max-width: 736px) {
    font-size: 10px;
  }
`;
// Don't need this
// const Socials = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 12px;
// `;
// const Title = styled.p``;
// const SocialImg = styled.img`
//   span {
//     font-size: 21px;
//   }
// `;

const ProfilePic = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 100%;
  @media screen and (max-width: 736px) {
    height: 48px;
    width: 48px;
  }
`;

const Modal = ({ imgInfo, modal, setModal, calAspectRatio }) => {
  const {
    img,
    name,
    username,
    likes,
    downloads,
    userPfp,
    imgHeight,
    imgWidht,
  } = imgInfo;
  return (
    <Container onClick={() => setModal(!modal)}>
      <Overlay />
      <Wrapper>
        <CloseBtn onClick={() => setModal(!modal)}>X</CloseBtn>
        <ImgWrapper>
          <Img
            src={img}
            style={{ aspectRatio: `${calAspectRatio(imgHeight, imgWidht)}/1` }}
          />
        </ImgWrapper>
        <Details>
          <User>
            <ProfilePic src={userPfp} />
            <div>
              <Name>{name}</Name>
              <Username>@{username}</Username>
            </div>
            {/* Don't need this */}
            {/* <Socials>
              <Title>Instagram</Title>
            </Socials> */}
          </User>
          <div className="stats">
            <div>
              <p>
                <span class="material-symbols-outlined">favorite</span> {likes}
              </p>
            </div>
            <div>
              <p>
                <span class="material-symbols-outlined">download</span>
                {downloads}
              </p>
            </div>
          </div>
        </Details>
      </Wrapper>
    </Container>
  );
};

export default Modal;
