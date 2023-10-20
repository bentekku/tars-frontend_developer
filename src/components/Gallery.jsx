import styled from "styled-components";
import Picture from "./Picture";

const Container = styled.div`
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  flex-wrap: wrap;
  min-height: 100vh;
  width: 100%;
  height: auto;
`;

const Gallery = ({ photos }) => {
  const { author, url, id } = photos;
  const username = `${author}`.toLowerCase();

  return (
    <Container>
      {photos.map((photo, indx) => (
        <Picture key={indx} photo={photo} />
      ))}
    </Container>
  );
};

export default Gallery;
