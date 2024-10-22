import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: black;
  height: 40vh;
  padding-right: 0;
  padding-left: 0rem;

  @media (max-width: 1280px) {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  background: black;
  height: 100%;
 

  @media (min-width: 1281px) {
    display: none;
   
  }

  .mobile {
    padding: 15px;
     height: 100%;
     display: flex
     align-items: center;
     justify-content: center;
  }
`;

export const ContentContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex
  align-items: center;
  justify-content: center;
  padding-top: 100px;

  @media (max-width: 1370px){
    padding: 70px 0;
  }
`;

export const Headtext = styled.div`
  font-size: 26px;
  color: #ffffff;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  padding-top: 20px;

  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

export const Subtext = styled.div`
  font-size: 16px;
  color: #ffffff;
  font-weight: 400;
  padding-top: 30px;
  line-height: 1.5rem;
  word-wrap: break-word;
  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 1rem;
  }
`;
