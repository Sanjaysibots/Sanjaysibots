/**
 *
 * WordsCarousel
 *
 */

import React, { memo } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { CarouselContainer, Headtext, MainContainer } from './styles';

function WordsCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 7000,
    cssEase: 'linear',
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 1285,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          infinite: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 4000,
        },
      },
    ],
  };
  return (
    <section id="testimonies">
      <MainContainer>
        <Headtext>Words from our partner</Headtext>
        <CarouselContainer>
          <div
            className="carousel"
            style={{
              height: '100%',
              width: '100%',
              paddingLeft: '14px',
              marginBottom: '30px',
            }}
          >
            <Slider {...settings}>
              <div>
                <div
                  style={{
                    background: 'white',
                    height: '440px',
                    width: '95%',
                    borderRadius: '26px',
                    border: '2px solid  #1b75bb',
                    padding: '20px',
                  }}
                >
                  <div
                    style={{
                      // background: 'violet',
                      height: '30%',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        // background: 'red',
                        width: '35%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <div className="photocontainer">
                        <img
                          alt="person_image"
                          className="photo"
                          src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        // background: 'yellow',
                        width: '65%',
                        height: '100%',
                      }}
                    >
                      <div className="name">Jackie Chan</div>
                      <div className="company">Apple</div>
                    </div>
                  </div>
                  <div
                    style={{
                      // background: 'green',
                      height: '70%',
                      padding: '20px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    <div className="words">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy…
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  style={{
                    background: 'white',
                    height: '440px',
                    width: '95%',
                    borderRadius: '26px',
                    border: '2px solid  #1b75bb',
                    padding: '20px',
                  }}
                >
                  <div
                    style={{
                      // background: 'violet',
                      height: '30%',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        // background: 'red',
                        width: '35%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <div className="photocontainer">
                        <img
                          alt="person_image"
                          className="photo"
                          src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        // background: 'yellow',
                        width: '65%',
                        height: '100%',
                      }}
                    >
                      <div className="name">Jackie Chan</div>
                      <div className="company">Apple</div>
                    </div>
                  </div>
                  <div
                    style={{
                      // background: 'green',
                      height: '70%',
                      padding: '20px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    <div className="words">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy…
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  style={{
                    background: 'white',
                    height: '440px',
                    width: '95%',
                    borderRadius: '26px',
                    border: '2px solid  #1b75bb',
                    padding: '20px',
                  }}
                >
                  <div
                    style={{
                      // background: 'violet',
                      height: '30%',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        // background: 'red',
                        width: '35%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <div className="photocontainer">
                        <img
                          alt="person_image"
                          className="photo"
                          src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        // background: 'yellow',
                        width: '65%',
                        height: '100%',
                      }}
                    >
                      <div className="name">Jackie Chan</div>
                      <div className="company">Apple</div>
                    </div>
                  </div>
                  <div
                    style={{
                      // background: 'green',
                      height: '70%',
                      padding: '20px',
                      overflow: 'hidden',
                    }}
                  >
                    <div className="words">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy…
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  style={{
                    background: 'white',
                    height: '440px',
                    width: '95%',
                    borderRadius: '26px',
                    border: '2px solid  #1b75bb',
                    padding: '20px',
                  }}
                >
                  <div
                    style={{
                      // background: 'violet',
                      height: '30%',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        // background: 'red',
                        width: '35%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <div className="photocontainer">
                        <img
                          alt="person_image"
                          className="photo"
                          src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        // background: 'yellow',
                        width: '65%',
                        height: '100%',
                      }}
                    >
                      <div className="name">Jackie Chan</div>
                      <div className="company">Apple</div>
                    </div>
                  </div>
                  <div
                    style={{
                      // background: 'green',
                      height: '70%',
                      padding: '20px',
                      overflow: 'hidden',
                    }}
                  >
                    <div className="words">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy…
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          </div>
        </CarouselContainer>
      </MainContainer>
    </section>
  );
}

// WordsCarousel.propTypes = {};

export default memo(WordsCarousel);
