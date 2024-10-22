import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  background: var(--primary);
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding-right: 8rem;

  @media (max-width: 1280px) {
    display: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 1080px) {
    flex-direction: column;
  }

  #button {
    color: white;
    background-color: var(--primary);
    border: 1px solid var(--primary);
    border-radius: 12px;
    padding: 0.6rem 1rem;
    line-height: 1.9;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: linear 0.2s;
    margin-top: 50px;
    font-size: 16px;
    text-align: center;
  }

  #button:hover {
    opacity: 0.6;
  }
  #button:active {
    background-color: var(--primary);
  }
`;

export const LeftContainer = styled.div`
  // background: blue;
  background: var(--primary);
  display: flex;
  align-items: flex-start;
  height: 25vh;
  width: 50%;
  padding-left: 8rem;
  padding-top: 0;
  padding-bottom: 0;

  @media (max-width: 1280px) {
    height: auto;
    width: 100%;
    padding: 15px;
  }
  @media screen and (orientation: landscape) and (max-device-width: 1000px) {
    height: auto;
    width: 100%;
  }
`;

export const RightContainer = styled.div`
  // background: red;
  background: var(--primary);
  height: 25vh;
  width: 50%;
  display: flex;
  justify-content: right;
  border-bottom: 5px solid white;

  @media (max-width: 1280px) {
    height: auto;
    padding: 0;
    width: 100%;
  }
  @media screen and (orientation: landscape) and (max-device-width: 1000px) {
    height: auto;
    width: 100%;
  }
`;

export const BottomContainer = styled.div`
  // background: green;
  background: var(--primary);
  height: 5vh;
  width: 100%;

  @media (max-width: 1280px) {
    display: none;
  }
  @media (max-width: 1280px) {
    height: auto;
    padding: 0;
    width: 100%;
  }
  @media screen and (orientation: landscape) and (max-device-width: 1000px) {
    height: auto;
    width: 100%;
  }
`;

export const IntroContainer = styled.div`
  // background: orange;
  background: var(--primary);
  height: 100%;
  width: 100%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  flex-direction: column;
  border-bottom: 5px solid white;

  .image-container {
    width: 150px;
    height: 50px;
  }
  .logo {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 768px) {
    padding: 15px;
  }
  @media (max-width: 1243px) {
    padding-left: 3rem;
  }
  @media (max-width: 1243px) {
    padding-left: 0rem;
  }
`;

export const Subtext = styled.div`
  font-size: clamp(10px, 8vw, 18px);
  color: white;
  font-weight: 400;
  padding-top: 15px;
  line-height: 1.6rem;
  max-width: 60%;
  word-wrap: break-word;
  @media (max-width: 1314px) {
    max-width: 70%;
  }
`;

export const Socialtext = styled.div`
  font-size: clamp(10px, 8vw, 18px);
  padding-right: 200px;
  padding-top: 3rem;
  color: white;
  font-weight: 400;
  line-height: 1.3rem;
  margin-top: 15px;
  margin-bottom: 15px;
  word-wrap: break-word;
  @media (max-width: 767px) {
    line-height: 1.5rem;
  }
`;

export const IconContainer = styled.div`
  font-size: 15px;
  margin-right: 2rem;
  margin-top: 10px;
`;

export const TextContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MobileContainer = styled.div`
  height: auto;
  width: 100%;
  padding: 15px;
  padding-top: 25px;
  background: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image-container {
    width: 150px;
    height: 50px;
    margin-bottom: 20px;
  }
  .logo {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const MobileSubtext = styled.div`
  font-size: clamp(10px, 8vw, 18px);
  color: white;
  font-weight: 400;
  line-height: 1.3rem;
  word-wrap: break-word;
  @media (max-width: 767px) {
    line-height: 1.5rem;
  }
  @media (max-width: 1280px) {
    max-width: 60%;
  }
  @media (max-width: 767px) {
    max-width: 100%;
  }
`;

export const IconStyle = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 1.5rem;
`;

export const MobileTextContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 20px;
`;
