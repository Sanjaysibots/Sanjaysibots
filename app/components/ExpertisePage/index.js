/**
 *
 * ExpertisePage
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { boxes } from './list';
import {
  HeadText,
  IntroContainer,
  CarouselContainer,
  PaddingContainer,
  IconContainer,
  ContentContainer,
  BoxContainer,
  SubText,
  ContentText,
} from './styles';

function ExpertisePage() {
  const [selectedItem, setSelectedItem] = useState('react');

  function handleactive(item) {
    setSelectedItem(item);
    console.log(selectedItem);
  }

  return (
    <section id="expertise">
      <IntroContainer>
        <HeadText>Our Expertise</HeadText>
        <CarouselContainer>
          <PaddingContainer>
            <IconContainer>
              {boxes.map(box => (
                <BoxContainer
                  key={box.id}
                  className={selectedItem === box.id ? 'active' : 'nonactive'}
                  onClick={() => handleactive(box.id)}
                >
                  <i
                    className={box.iconClass}
                    style={{
                      fontSize: '32px',
                      color: 'black',
                    }}
                  />
                </BoxContainer>
              ))}
              {boxes.map(box => (
                <BoxContainer
                  key={box.id}
                  className={selectedItem === box.id ? 'active' : 'nonactive'}
                  onClick={() => handleactive(box.id)}
                >
                  <i
                    className={box.iconClass}
                    style={{
                      fontSize: '32px',
                      color: 'black',
                    }}
                  />
                </BoxContainer>
              ))}
            </IconContainer>
            <ContentContainer>
              <SubText>
                {selectedItem === 'facebook' && 'Facebook Subtext'}
                {selectedItem === 'react' && 'React Subtext'}
                {selectedItem === 'react-native' && 'React-Native Subtext'}
                {selectedItem === 'python' && 'Python Subtext'}
                {selectedItem === 'javascript' && 'JavaScript Subtext'}
                {selectedItem === 'java' && 'Java Subtext'}
                {selectedItem === 'git' && 'git Subtext'}
                {selectedItem === 'html' && 'Html Subtext'}
                {selectedItem === 'css' && 'CSS Subtext'}
                {selectedItem === 'flutter' && 'Flutter Subtext'}
                {selectedItem === 'backend' && 'Backend Subtext'}
                {selectedItem === 'frontend' && 'Frontend Subtext   '}
              </SubText>
              <ContentText>
                {selectedItem === 'facebook' && 'Facebook Subtext'}
                {selectedItem === 'react' && 'React Subtext'}
                {selectedItem === 'react-native' && 'React-Native Subtext'}
                {selectedItem === 'python' && 'Python Subtext'}
                {selectedItem === 'javascript' && 'JavaScript Subtext'}
                {selectedItem === 'java' && 'Java Subtext'}
                {selectedItem === 'git' && 'git Subtext'}
                {selectedItem === 'html' && 'Html Subtext'}
                {selectedItem === 'css' && 'CSS Subtext'}
                {selectedItem === 'flutter' && 'Flutter Subtext'}
                {selectedItem === 'backend' && 'Backend Subtext'}
                {selectedItem === 'frontend' &&
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'}
              </ContentText>
            </ContentContainer>
          </PaddingContainer>
        </CarouselContainer>
      </IntroContainer>
    </section>
  );
}

ExpertisePage.propTypes = {};

export default memo(ExpertisePage);
