/**
 *
 * Footer
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Color from './White.png';
import {
  BottomContainer,
  IconContainer,
  IntroContainer,
  LeftContainer,
  MainContainer,
  RightContainer,
  Socialtext,
  StyledContainer,
  Subtext,
  TextContainer,
  MobileContainer,
  MobileSubtext,
  MobileTextContainer,
  IconStyle,
} from './styles';
import data from '../../../data.json';

function Footer() {
  const item = data.footer;
  return (
    <>
      <div>
        <MainContainer>
          <LeftContainer>
            <IntroContainer>
              <div className="image-container">
                <img alt="white_logo" className="logo" src={Color} />
              </div>
              <Subtext>{item[0].footertext}</Subtext>
            </IntroContainer>
          </LeftContainer>
          <RightContainer>
            <StyledContainer>
              <Socialtext>Social</Socialtext>
              <div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <IconContainer>
                    <i
                      className="fa fa-facebook"
                      style={{ fontSize: '32px', color: 'white' }}
                    />
                  </IconContainer>
                  <IconContainer>
                    <i
                      className="fa fa-instagram"
                      style={{ fontSize: '32px', color: 'white' }}
                    />
                  </IconContainer>
                  <IconContainer>
                    <i
                      className="fa fa-twitter"
                      style={{ fontSize: '32px', color: 'white' }}
                    />
                  </IconContainer>
                  <IconContainer>
                    <i
                      className="fa fa-youtube"
                      style={{ fontSize: '32px', color: 'white' }}
                    />
                  </IconContainer>
                  <IconContainer>
                    <i
                      className="fa fa-linkedin"
                      style={{ fontSize: '32px', color: 'white' }}
                    />
                  </IconContainer>
                </div>
              </div>
            </StyledContainer>
          </RightContainer>
        </MainContainer>
        <BottomContainer>
          <TextContainer>
            <span style={{ color: 'white', marginRight: '5px' }}>&#169;</span>
            Ibots 2023
          </TextContainer>
        </BottomContainer>
      </div>
      <MobileContainer>
        <div className="image-container">
          <img alt="white_logo" className="logo" src={Color} />
        </div>
        <MobileSubtext>
          Inspired by our portfolio? Elevate your company with our expertise and
          creativity. Lets bring your vision to life. Begin your journey to
          success today
        </MobileSubtext>
        <IconStyle>
          <i
            className="fa fa-facebook"
            style={{ fontSize: '32px', color: 'white' }}
          />
          <i
            className="fa fa-instagram"
            style={{ fontSize: '32px', color: 'white' }}
          />
          <i
            className="fa fa-twitter"
            style={{ fontSize: '32px', color: 'white' }}
          />
          <i
            className="fa fa-youtube"
            style={{ fontSize: '32px', color: 'white' }}
          />
          <i
            className="fa fa-linkedin"
            style={{ fontSize: '32px', color: 'white' }}
          />
        </IconStyle>
        <MobileTextContainer>
          <span style={{ color: 'white', marginRight: '5px' }}>&#169;</span>
          Ibots 2023
        </MobileTextContainer>
      </MobileContainer>
    </>
  );
}

Footer.propTypes = {};

export default memo(Footer);
