import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

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
  //   background: blue;
  display: flex;
  align-items: flex-start;
  height: 65vh;
  width: 50%;
  padding: 3em;
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
  //   background: red;
  height: 65vh;
  width: 50%;
  padding-right: 6rem;
  @media (max-width: 1280px) {
    height: auto;
    width: 100%;
    padding: 0;
  }
  @media screen and (orientation: landscape) and (max-device-width: 1000px) {
    height: auto;
    width: 100%;
  }
`;

export const IntroContainer = styled.div`
  background: white;
  height: 100%;
  width: 100%;
  padding-left: 5rem;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  flex-direction: column;
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

export const Headtext = styled.div`
  font-size: clamp(40px, 8vw, 62px);
  color: var(--primary);
  font-weight: 400;
  height: 17%;

  @media (max-width: 1024px) {
    height: auto;
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

export const Subtext = styled.div`
  font-size: clamp(16px, 8vw, 22px);
  color: #040404;
  font-weight: 400;
  padding-top: 30px;
  line-height: 1.5rem;
  word-wrap: break-word;
  @media (max-width: 767px) {
    line-height: 1.5rem;
  }
`;

export const InputContainer = styled.div`
  //   background: orange;
  height: 30%;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  @media (max-width: 1280px) {
    padding: 15px;
    width: 100%;
    flex-direction: column;
    height: auto;
  }
  @media (max-width: 770px) {
    padding: 0;
    flex-direction: column;
    height: auto;
  }
`;

export const NameContainer = styled.div`
  background: white;
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 15px;

  @media (max-width: 1280px) {
    width: 100%;
    padding: 0;
  }

  input[type='text'] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid var(--primary);
    border-radius: 5px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
  }

  input[type='text']:focus {
    border: 2px solid black;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const ContentContainer = styled.div`
  //   background: yellow;
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
  padding-top: 0;

  @media (max-width: 1280px) {
    width: 100%;
    height: auto;
    padding: 0;
  }

  input[type='text'] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid var(--primary);
    border-radius: 5px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
  }

  input[type='text']:focus {
    border: 2px solid black;
  }
`;

export const MessageContainer = styled.div`
  //   background: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  padding-top: 0;

  textarea {
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid var(--primary);
    border-radius: 5px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
    font-size: 16px;
    resize: vertical;
    max-height: 80%;
    min-height: 60%;

  textarea:focus {
    border: 2px solid black;
  }
`;
