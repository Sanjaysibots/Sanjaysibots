import styled from 'styled-components';

export const IntroContainer = styled.div`
  height: 70vh;
  // background: green;

  @media (max-width: 1400px) {
    height: auto;
  }

  .active {
    background: var(--primary);
  }
  .non-active {
    background: white;
  }
`;

export const CarouselContainer = styled.div`
  height: 100%;
  width: 100%;
  // background: red;
  padding-bottom: 120px;
  padding-left: 14rem;
  padding-right: 14rem;

  @media (max-width: 960px) {
    padding: 15px;
    padding-bottom: 20%;
  }
`;

export const PaddingContainer = styled.div`
  height: 83%;
  width: 100%;
  // background: pink;
  border: 3px solid var(--primary);
  border-radius: 30px;
  padding: 60px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const IconContainer = styled.div`
  height: 45%;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  // background: green;
  padding: 20px;
  gap: 25px;
  display: flex;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  -webit-mask: linear-gradient(
    90deg,
    transparent,
    white 20%,
    white 80%,
    transparent
  );
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1400px) {
    height: 150px;
  }
`;

export const BoxContainer = styled.div`
  height: 100%;
  min-width: 120px;
  border-radius: 15px;
  border: 3px solid var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: slide 12s linear infinite;

  @keyframes slide {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(calc(-145px * 12));
    }
  }
`;

export const ContentContainer = styled.div`
  height: 55%;
  // background: yellow;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .scroll {
    margin: 4px, 4px;
    padding: 4px;
    background-color: #08c708;
    width: 300px;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
  }
`;

export const HeadText = styled.div`
  font-size: clamp(40px, 8vw, 62px);
  color: var(--primary);
  font-weight: 400;
  text-align: center;
  height: 17%;
  padding-top: 40px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    height: auto;
    margin-bottom: 20px;
  }
`;

export const SubText = styled.div`
  font-size: clamp(18px, 8vw, 24px);
  color: black;
  font-weight: 400;
  text-align: center;
  height: 10%;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    height: 20%;
    margin-bottom: 20px;
  }
`;

export const ContentText = styled.div`
  font-size: clamp(10px, 8vw, 16px);
  color: #040404;
  font-weight: 400;
  padding-top: 15px;
  line-height: 1.6rem;
  max-width: 60%;
  word-wrap: break-word;
  @media (max-width: 1314px) {
    max-width: 100%;
    height: 200px;
  }
`;
