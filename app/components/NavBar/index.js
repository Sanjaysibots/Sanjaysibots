/**
 *
 * NavBar
 *
 */

import React, { memo, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Bounce, Fade } from 'react-awesome-reveal';
import { NavContainer, StyledLogo } from './styles';
import { useScroll } from './UseScroll';
import Color from './Color.png';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function NavBar() {
  const [btnState, setbtnState] = useState(false);
  const { scrollDirection } = useScroll();
  const isMobile = () => window.innerWidth < 768;
  const styles = {
    active: {
      visibility: 'visible',
      transition: 'all 0.5s',
    },
    hidden: {
      visibility: 'hidden',
      transition: 'all 0.2s',
      transform: 'translateY(-100%)',
    },
  };
  const homieScroll = () => {
    if (window.scrollY) {
      return scrollDirection === 'down' ? styles.active : styles.active;
    }
    return styles.active;
  };

  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const navElements = document.querySelectorAll('.elements');
  const secElements = document.querySelectorAll('section');
  // console.log(secElements);
  // secElements.forEach(secElement => {
  //   console.log(secElement.offsetHeight);
  // });
  // navElements.forEach(navElement => {
  //   if (navElement.href.includes('about')) {
  //     navElement.classList.add('active');
  //   }
  // });

  document.documentElement.style.setProperty('scroll-padding', `${110}px`);

  function handleMenuIconClick() {
    setbtnState(!btnState);
  }
  function handleMenuMobileClick() {
    if (isMobile) {
      setbtnState(false);
    }
  }

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);
    let currentsection = 'home';
    window.addEventListener('scroll', () => {
      secElements.forEach(secElement => {
        if (window.scrollY >= secElement.offsetTop - 120) {
          currentsection = secElement.id;
        }
      });
      navElements.forEach(navElement => {
        if (navElement.href.includes(currentsection)) {
          document.querySelector('.active').classList.remove('active');
          navElement.classList.add('active');
        }
      });
    });
  });

  const toggleClassCheck = btnState ? 'change' : '';
  return (
    <NavContainer className="navheight">
      <nav className={navbar ? 'navbar color' : 'navbar'} style={homieScroll()}>
        <div className="container">
          <div className="logo">
            <Bounce triggerOnce>
              <StyledLogo>
                <a href="/">
                  <img
                    style={{ height: '100%', width: '100%' }}
                    alt="logo"
                    src={Color}
                  />
                </a>
              </StyledLogo>
            </Bounce>
          </div>
          <div className={btnState ? 'nav-links-mobile' : 'links'}>
            <ul>
              <Fade
                direction="down"
                duration={300}
                cascade
                damping={0.8}
                triggerOnce
              >
                <li>
                  <div
                    onClick={() => handleMenuMobileClick()}
                    onKeyDown={() => handleMenuMobileClick()}
                    role="button"
                    tabIndex={0}
                  >
                    <a className="elements active" href="#home">
                      Home
                    </a>
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => handleMenuMobileClick()}
                    onKeyDown={() => handleMenuMobileClick()}
                    role="button"
                    tabIndex={0}
                  >
                    <a className="elements" href="#project">
                      Project
                    </a>
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => handleMenuMobileClick()}
                    onKeyDown={() => handleMenuMobileClick()}
                    role="button"
                    tabIndex={0}
                  >
                    <a className="elements " href="#expertise">
                      Expertise
                    </a>
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => handleMenuMobileClick()}
                    onKeyDown={() => handleMenuMobileClick()}
                    role="button"
                    tabIndex={0}
                  >
                    <a className="elements" href="#testimonies">
                      Testimonies
                    </a>
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => handleMenuMobileClick()}
                    onKeyDown={() => handleMenuMobileClick()}
                    role="button"
                    tabIndex={0}
                  >
                    <a className="elements" href="#faq">
                      FAQs
                    </a>
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => handleMenuMobileClick()}
                    onKeyDown={() => handleMenuMobileClick()}
                    role="button"
                    tabIndex={0}
                  >
                    <a className="elements" href="#about">
                      About
                    </a>
                  </div>
                </li>
                <li>
                  <a id="button" className="button" href="/">
                    Work with us
                  </a>
                </li>
              </Fade>

              <div
                id="menu-btn"
                onClick={() => handleMenuIconClick()}
                onKeyDown={() => handleMenuIconClick()}
                role="button"
                tabIndex={0}
                className={`menu-icon ${toggleClassCheck}`}
              >
                <div
                  className="menu-icon-container"
                  onClick={() => 'myFunction(this)'}
                  onKeyDown={() => 'myFunction(this)'}
                  role="button"
                  tabIndex={0}
                >
                  <div className="bar1" />
                  <div className="bar2" />
                  <div className="bar3" />
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </NavContainer>
  );
}

NavBar.propTypes = {};

export default memo(NavBar);
