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
    margin-top: 30px;
    font-size: 16px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    @media (max-width: 1017px) {
      margin-bottom: 10px;
    }
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
  height: 79vh;
  width: 30%;
  padding: 3em;
  @media (max-width: 768px) {
    height: auto;
    width: 100%;
    padding: 15px;
  }
  @media (max-width: 1050px) {
    width: 100%;
    height: auto;
    padding-bottom: 0;
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
  padding-left: 6rem;
  padding-top: 3rem;
  display: flex;
  -webkit-box-pack: center;
  justify-content: right;
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

export const RightContainer = styled.div`
  //   background: red;
  min-height: 79vh;
  width: 70%;

  @media (max-width: 768px) {
    min-height: 50vh;
    width: 100%;
  }
  @media (max-width: 1050px) {
    min-height: 50vh;
    width: 100%;
  }
  @media screen and (orientation: landscape) and (max-device-width: 1000px) {
    height: auto;
    width: 100%;
  }

  .accordion {
    display: flex;
    flex-direction: column;
    max-width: 991px;
    min-width: 320px;
    margin: 10px auto;
    height: 100%;
    padding: 0 10px;
    padding-top: 80px;
    justify-content: space-evenly;

    @media (max-width: 1050px) {
      padding-top: 10px;
    }
  }

  .accordion-item {
    margin-bottom: 10px;
  }

  .accordion-item .accordion-item-title {
    position: relative;
    margin: 0;
    display: flex;
    width: 100%;
    cursor: pointer;
    justify-content: space-between;
    flex-direction: row-reverse;
    padding: 14px 20px;
    box-sizing: border-box;
    align-items: center;
    font-size: clamp(18px, 5vw, 24px);
    color: #040404;
    font-weight: 400;
    font-family: 'Poppins';

    @media (max-width: 767px) {
      font-size: clamp(20px, 1vw, 30px);
      padding: 14px 0;
    }
  }
  @keyframes slide-up {
    from {
      opacity: 0;
      max-height: 0;
    }
    to {
      opacity: 1;
      max-height: 800px; /* Customize max-height to prevent content clipping */
    }
  }
  .accordion-item .accordion-item-desc {
    display: none;
    font-size: 20px;
    color: #040404;
    font-weight: 400;
    border-top: 1px dashed black;
    padding: 10px 20px 20px;
    box-sizing: border-box;
    animation: slide-up 1s linear;
  }
  .accordion-item input[type='checkbox'] {
    position: absolute;
    height: 0;
    width: 0;
    opacity: 0;
  }
  .accordion-item input[type='checkbox']:checked ~ .accordion-item-desc {
    display: block;
  }
  .accordion-item
    input[type='checkbox']:checked
    ~ .accordion-item-title
    .icon:after {
    transition: all 0.2s linear;
    content: '-';
    font-size: 30px;
  }
  .accordion-item input[type='checkbox'] ~ .accordion-item-title .icon:after {
    content: '+';
    font-size: 45px;
  }
  .accordion-item:first-child {
    margin-top: 0;
  }
  .accordion-item .icon {
    margin-left: 14px;
  }

  @media screen and (max-width: 767px) {
    .accordion {
      padding: 0 16px;
    }
    .accordion h1 {
      font-size: 22px;
    }
    .accordion-item .accordion-item-desc {
      padding-left: 0;
      padding-right: 0;
    }
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
  font-size: clamp(18px, 8vw, 26px);
  color: #040404;
  font-weight: 400;
  padding-top: 30px;
  line-height: 1.5rem;
  word-wrap: break-word;
  @media (max-width: 767px) {
    line-height: 1.5rem;
  }
`;

export const Line = styled.div`
  padding-left: 8rem;
  padding-right: 8rem;
  @media (max-width: 1050px) {
    padding: 15px;
  }
`;
