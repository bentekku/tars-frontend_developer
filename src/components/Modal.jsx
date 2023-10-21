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
  flex-direction: column;
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
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    transform: scale(1.1);
  }
`;
const ImgWrapper = styled.div`
  width: 70%;
  height: 62%;
  position: relative;
  border-radius: 8px 8px 0 0;
  /* overflow: hidden; */
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const Details = styled.div`
  position: relative;
  /* height: calc(100% - 67%); */
  padding: 24px;
  background: #fff;
  /* width: 70%;*/
  width: auto;
  border-radius: 0 0 8px 8px;
  overflow: hidden;
  margin: 32px;
`;

const Modal = ({ imgInfo, modal, setModal, calAspectRatio }) => {
  const {
    img,
    name,
    username,
    likes,
    insta,
    downloads,
    userPfp,
    imgHeight,
    imgWidht,
  } = imgInfo;
  return (
    <Container onClick={() => setModal(!modal)}>
      <Overlay />
      <ImgWrapper
        style={{ aspectRatio: `${calAspectRatio(imgHeight, imgWidht)}/1` }}
      >
        <CloseBtn onClick={() => setModal(!modal)}>X</CloseBtn>
        <Img src={img} />
      </ImgWrapper>
      <Details>
        <p>{name}</p>
        <p>{username}</p>
        <p>{likes}</p>
        <p>{insta}</p>
        <p>{downloads}</p>
        <p>{userPfp}</p>
      </Details>
    </Container>
  );
};

export default Modal;
