import styled from "styled-components";

const Foot = styled.footer`
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-around;
  justify-self: center;
  align-items: center;
  width: 620px;
  height: 45px;
  margin: 16px 0;
  border-radius: 45px;
`;

const Left = styled.div`
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const MadeBy = styled.p``;

const Right = styled.div`
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const PoweredBy = styled.p``;

const Footer = () => {
  return (
    <Foot>
      <Left>
        Made by:{" "}
        <a href="https://github.com/bentekku" target="_blank">
          Shadab Khan
        </a>
      </Left>
      <Right>
        Powered by: <a href="https://reactjs.org">React</a> +{" "}
        <a href="https://vitejs.dev">Vite</a>
      </Right>
    </Foot>
  );
};

export default Footer;
