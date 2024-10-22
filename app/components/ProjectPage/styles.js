import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: var(--primary);

  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  background: var(--primary);
  height: 100vh;
  width: 40%;
  padding: 3em;
  @media (max-width: 768px) {
    height: 50vh;
    width: 100%;
    padding: 15px;
  }
  @media (max-width: 1050px) {
    height: 50vh;
    width: 100%;
  }
  @media screen and (orientation: landscape) and (max-device-width: 1000px) {
    height: auto;
    width: 100%;
  }
`;
export const RightContainer = styled.div`
  background: var(--primary);
  height: 100vh;
  width: 50%;
  padding: 3em;
  @media (max-width: 768px) {
    height: 50vh;
    width: 100%;
    padding: 15px;
  }
  @media (max-width: 1050px) {
    height: auto;
    width: 100%;
  }
  @media screen and (orientation: landscape) and (max-device-width: 1000px) {
    height: auto;
    width: 100%;
  }
`;

export const IntroContainer = styled.div`
  background: var(--primary);
  height: 100%;
  width: 100%;
  padding-top: 6rem;
  display: flex;
  padding-left: 6rem;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 0;
  }
`;
export const IntroRContainer = styled.div`
  background: var(--primary);
  width: 100%;
  height: 100%;
  display: flex;
  overflow: scroll;
  height: 100%;
  padding-top: 200px;
  padding-left-30px;
  overflow-x:hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1050px) {
    height: auto;
    width: 100%;
  }

  img {
    // background: blue;
    height: 100%;
    width: 100%;
    @media (max-width: 768px) {
      height: 100%;
    }
  }
  @media (max-width: 768px) {
    padding: 0;
  }

  .timeline {
    height: 240%;
    background: var(--primary-color);
    margin: 20px auto;
    margin-top: 100px;
    padding: 30px;
    @media (max-width: 768px) {
        padding:2px;
        height: auto;
      }
    
  }

  .outer {
    border-left: 2px solid white;
    @media (max-width: 768px) {
        border-left: 0px;
      }
  }
  .time {
    position: relative;
    padding: 10px;
    top: -60px;
    left: 40px;
    color: white;
    @media (max-width: 768px) {
    top:0px;
    left: 0px;
      }
  }
  .card {
    position: relative;
    margin: 0 0 0px 150px;
    margin-top: -80px;
    padding: 20px;
    background: #333;
    color: gray;
    border-radius: 8px;
    max-width: 500px;
    border-radius: 26px;
    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.16));
    background-color: #1b75bb;
    margin-bottom: 200px;
    @media (max-width: 768px) {
        margin:0
      }
  }
  .title {
    color: white;
    position: relative;
  }
  .title::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    background: white;
    border-radius: 999px;
    left: -185px;
    top: -50px;
    background-color: white;
    box-shadow: 0 0 0 5px var(--primary), 0 0 0 10px white;
  }
  .subtitle {
    color: white;
  }
  p {
    color: white;
  }
  .tools {
    background: white;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    border: 1px solid transparent;
    padding: 6px 20px;
    font-size: 16px;
    border-radius: 30px;
    color: var(--primary);
  }
`;

export const HeadText = styled.div`
  color: white;
  font-weight: 500;
  font-size: clamp(30px, 8vw, 70px);
  margin-bottom: 35px;
  word-wrap: break-word;
  @media (max-width: 768px) {
    margin-bottom: 10px;
    margin-top: 59px;
    font-weight: 900;
  }
`;

export const SubText = styled.div`
  color: white;
  font-weight: 100;
  font-size: clamp(10px, 8vw, 20px);
  line-height: 2rem;
  max-width: 610px;
  margin-bottom: 50px;

  @media (max-width: 750px) {
    font-size: clamp(10px, 8vw, 20px);
    line-height: 1.5rem;
    margin-bottom: 10px;
  }
  @media (max-width: 400px) {
    font-size: clamp(15px, 4vw, 25px);
    line-height: 1.5rem;
    margin-bottom: 10px;
  }
  @media (max-width: 375px) {
    font-size: clamp(15px, 4vw, 25px);
    line-height: 1rem;
    margin-bottom: 2px;
  }
  @media (max-width: 280px) {
    font-size: clamp(15px, 4vw, 25px);
    line-height: 1rem;
    margin-bottom: 10px;
  }
`;
