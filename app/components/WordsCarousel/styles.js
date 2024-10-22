import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  // background: orange;
  min-height: 65vh;
  padding-right: 6rem;
  padding-left: 7rem;
  padding-top: 50px;
  flex-direction: column;

  @media (max-width: 1280px) {
    padding: 0;
  }

  .photo {
    width: 100%;
    height: 100%;
    border-radius: 42px;
    border: 2px solid #1b75bb;
  }
  .photocontainer {
    width: 75px;
    height: 75px;
  }

  .name {
    margin-top: 30px;
    font-size: 26px;
    color: #040404;
    font-weight: 400;
  }
  .company {
    font-size: 18px;
    color: #040404;
    font-weight: 400;
    margin-top: 5px;
  }
  .words {
    font-size: 16px;
    color: #040404;
    font-weight: 400;
  }
`;

export const Headtext = styled.div`
  font-size: clamp(40px, 8vw, 62px);
  color: var(--primary);
  font-weight: 400;
  text-align: center;
  height: 17%;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    height: auto;
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

export const CarouselContainer = styled.div`
  background: white;
  height: 85%;
  width: 97%;

  .carousel {
    @media (max-width: 771px) {
      padding-left: 0;
    }
  }
  @media (max-width: 771px) {
    width: 100%;
    padding-left: 5px;
    height: auto;
  }
`;

export const HeadContainer = styled.div`
  height: 100%;
  width: 300px;
  border-radius: 26px;
  background: white;
  border: 2px solid #1b75bb;
  margin-right: 10px;
`;
