import styled from 'styled-components';

export const NavContainer = styled.div`
  .navbar {
    position: fixed;
    top: 0px;
    z-index: 11;
    width: 100%;
    background-color: transparent;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    transition: var(--transition);
  }

  .color {
    background: white;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    padding: 20px 40px;
    padding-right: 6rem;
  }

  .logo-logo:hover {
    transition: all 1.26s;
  }

  .logo-logo:hover,
  .logo-logo:active {
    transform: rotate(720deg);
  }

  .links ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .links ul li {
    list-style: none;
    padding: 0 25px;
  }

  .elements {
    text-decoration: none;
    color: var(--secondary);
    font-size: 18px;
    font-weight: 700;
    transition: var(--transition);
  }
  .active {
    color: var(--primary);
  }

  .links ul li a span {
    color: var(--primary);
    padding: 0 6px;
  }

  .links ul li:last-child a {
    color: var(--primary);
    border: 1px solid var(--primary);
    padding: 10px 15px;
    border-radius: 5px;
    transition: all 0.25s;
  }
  .links ul li a:hover {
    color: var(--primary);
  }
  .links ul li:last-child:hover {
    opacity: 0.8;
  }

  /* Media Query */

  .menu-icon-container {
    display: inline-block;
    cursor: pointer;
  }

  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 5px;
    background-color: black;
    margin: 6px 0;
    transition: 0.4s;
    border-radius: 50px;
  }

  .bar2 {
    width: 30px;
  }

  .bar3 {
    width: 25px;
  }

  .change .bar1 {
    transform: translate(0, 11px) rotate(-45deg);
  }

  .change .bar2 {
    opacity: 0;
  }

  .change .bar3 {
    transform: translate(0, -11px) rotate(45deg);
  }
  #button {
    color: white;
    background-color: var(--primary);
    border: 1px solid var(--primary);
    border-radius: 12px;
    padding: 0.6rem 1rem;
    line-height: 1;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    margin-top: 50px;
    font-size: 16px;
  }

  #button:hover {
    opacity: 0.6;
  }
  #button:active {
    background-color: var(--primary);
  }

  #menu-btn {
    display: none;
  }

  /* sidenav */

  /* sidenav */

  @media (max-width: 1310px) {
    #menu-btn {
      display: block;
    }

    .logo {
      position: fixed;
      top: 15px;
      z-index: 10;
      left: 15px;
    }

    .menu-icon {
      margin: 0;
      padding: 0;
      z-index: 10;
      position: fixed;
      top: 20px;
      right: 30px;
      transition: var(--transition);
    }

    .links ul li {
      display: none;
    }

    .nav-links-mobile {
      position: absolute;
      display: block;
      list-style: none;
      text-align: end;
      top: 0;
      left: 0;
      width: 100%;
      background-color: #031e1fd7;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      transition: all 0.2s;
    }

    .nav-links-mobile ul {
      padding: 0;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .nav-links-mobile ul li {
      padding-bottom: 30px;
    }

    .nav-links-mobile ul li {
      font-size: 1.3rem;
      text-align: center;
    }

    .nav-links-mobile ul li a {
      color: white;
      display: block;
      text-decoration: none;
    }
    a.elements.active {
      color: var(--primary);
    }
    .nav-links-mobile ul li a span {
      color: var(--primary);
      display: block;
    }
  }
`;

export const StyledLogo = styled.div`
  a {
    display: block;
    color: var(--green);
    width: 150px;
    height: 65px;
    margin-left: 100px;

    @media (max-width: 1024px) {
      margin-left: 0px;
      width: 120px;
      height: 50px;
    }
    &:hover,
    &:focus {
      svg {
        fill: none;
      }
    }
    svg {
      fill: none;
      transition: all 0.5s linear;
      user-select: none;
    }
  }
`;
