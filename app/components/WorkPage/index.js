/**
 *
 * WorkPage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  LeftContainer,
  MainContainer,
  RightContainer,
  IntroContainer,
  Headtext,
  Subtext,
  InputContainer,
  NameContainer,
  ContentContainer,
  MessageContainer,
} from './styles';
import data from '../../../data.json';

function WorkPage() {
  const item = data.contact;
  return (
    <section id="about">
      <MainContainer>
        <LeftContainer>
          <IntroContainer>
            <Headtext>{item[0].headtext}</Headtext>
            <Subtext>{item[0].contacttext}</Subtext>
          </IntroContainer>
        </LeftContainer>
        <RightContainer>
          <InputContainer>
            <NameContainer>
              <label
                style={{ fontFamily: 'poppins', fontSize: '18px' }}
                htmlFor="name"
              >
                Your Name
              </label>
              <input type="text" id="name" name="name" />
            </NameContainer>
            <NameContainer>
              <label
                style={{ fontFamily: 'poppins', fontSize: '18px' }}
                htmlFor="email"
              >
                Email Address
              </label>
              <input type="text" id="email" name="email" />
            </NameContainer>
          </InputContainer>
          <ContentContainer>
            <MessageContainer>
              <label
                style={{ fontFamily: 'poppins', fontSize: '18px' }}
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea type="message" id="message" name="message" />
              <div id="button" className="button" href="/">
                Submit
              </div>
            </MessageContainer>
          </ContentContainer>
        </RightContainer>
      </MainContainer>
    </section>
  );
}

WorkPage.propTypes = {};

export default memo(WorkPage);
