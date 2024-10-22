/**
 *
 * ProcessPage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Slider from 'react-slick';
import {
  ContentContainer,
  MainContainer,
  Headtext,
  Subtext,
  MobileContainer,
} from './styles';
import logo from './user.png';
import data from '../../../data.json';

function ProcessPage() {
  const item = data.process;
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
  };
  return (
    <>
      <MainContainer>
        <ContentContainer style={{ background: 'black' }}>
          <div
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <img
                alt="logo1"
                src={logo}
                style={{ height: '60px', width: '55px' }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '10px',
                maxWidth: '70%',
              }}
            >
              <Headtext>{item[0].headtext1}</Headtext>

              <Subtext>{item[0].subtext1}</Subtext>
            </div>
          </div>
        </ContentContainer>

        <ContentContainer style={{ background: 'black' }}>
          <div
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <img
                alt="logo2"
                src={logo}
                style={{ height: '60px', width: '55px' }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '10px',
                maxWidth: '70%',
              }}
            >
              <Headtext>{item[0].headtext2}</Headtext>

              <Subtext>{item[0].subtext2}</Subtext>
            </div>
          </div>
        </ContentContainer>

        <ContentContainer style={{ background: 'black' }}>
          <div
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <img
                alt="logo3"
                src={logo}
                style={{ height: '60px', width: '55px' }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '10px',
                maxWidth: '70%',
              }}
            >
              <Headtext>{item[0].headtext3}</Headtext>

              <Subtext>{item[0].subtext3}</Subtext>
            </div>
          </div>
        </ContentContainer>
      </MainContainer>
      {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
      <MobileContainer>
        <div>
          <Slider {...settings}>
            <ContentContainer style={{ background: 'black' }}>
              <div
                style={{
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <img
                    alt="logo1"
                    src={logo}
                    style={{ height: '60px', width: '55px' }}
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '10px',
                    maxWidth: '70%',
                  }}
                >
                  <Headtext>{item[0].headtext1}</Headtext>

                  <Subtext>{item[0].subtext1}</Subtext>
                </div>
              </div>
            </ContentContainer>
            <ContentContainer style={{ background: 'black' }}>
              <div
                style={{
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <img
                    alt="logo1"
                    src={logo}
                    style={{ height: '60px', width: '55px' }}
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '10px',
                    maxWidth: '70%',
                  }}
                >
                  <Headtext>{item[0].headtext2}</Headtext>

                  <Subtext>{item[0].subtext2}</Subtext>
                </div>
              </div>
            </ContentContainer>

            <ContentContainer style={{ background: 'black' }}>
              <div
                style={{
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <img
                    alt="logo1"
                    src={logo}
                    style={{ height: '60px', width: '55px' }}
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '10px',
                    maxWidth: '70%',
                  }}
                >
                  <Headtext>{item[0].headtext3}</Headtext>

                  <Subtext>{item[0].subtext3}</Subtext>
                </div>
              </div>
            </ContentContainer>
          </Slider>
        </div>
      </MobileContainer>
    </>
  );
}

ProcessPage.propTypes = {};

export default memo(ProcessPage);
