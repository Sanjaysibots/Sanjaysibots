/**
 *
 * ProjectPage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  MainContainer,
  LeftContainer,
  RightContainer,
  IntroContainer,
  HeadText,
  SubText,
  IntroRContainer,
} from './styles';

function ProjectPage() {
  return (
    <section id="project">
      <MainContainer>
        <LeftContainer>
          <IntroContainer>
            <HeadText>Our Projects</HeadText>
            <SubText>
              We are a talented group of Engineers with a groundbreaking idea
              designed to contribute towards a better tomorrow. We provide smart
              solution to companies at all sizes and pride ourselves on our
              unparalleled and dedicated service.We provide smart solution to
              companies at all sizes and pride ourselves on our unparalleled and
              dedicated service.
            </SubText>
          </IntroContainer>
        </LeftContainer>
        <RightContainer>
          <IntroRContainer>
            <div className="timeline">
              <div className="outer">
                <div className="time">2018-2019</div>
                <div className="card">
                  <div className="info">
                    <h1 className="title">Project 1</h1>
                    <h2 className="subtitle">Web Application</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.v.nsv krsrkjbrkvrajbntoernokvfneoqjmokenvoe
                    </p>
                    <h4 style={{ color: 'white' }}>Tools used</h4>
                    <div className="tools">React</div>
                  </div>
                </div>

                <div className="time">2018-2019</div>
                <div className="card">
                  <div className="info">
                    <h1 className="title">Project 1</h1>
                    <h2 className="subtitle">Web Application</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.v.nsv krsrkjbrkvrajbntoernokvfneoqjmokenvoe
                    </p>
                    <h4 style={{ color: 'white' }}>Tools used</h4>
                    <div className="tools">React</div>
                  </div>
                </div>
                <div className="time">2018-2019</div>
                <div className="card">
                  <div className="info">
                    <h1 className="title">Project 1</h1>
                    <h2 className="subtitle">Web Application</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.v.nsv krsrkjbrkvrajbntoernokvfneoqjmokenvoe
                    </p>
                    <h4 style={{ color: 'white' }}>Tools used</h4>
                    <div className="tools">React</div>
                  </div>
                </div>
              </div>
            </div>
          </IntroRContainer>
        </RightContainer>
      </MainContainer>
    </section>
  );
}

ProjectPage.propTypes = {};

export default memo(ProjectPage);
