import { Link } from 'gatsby';
import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import media from '../..//utils/media';

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledHeader = styled.div`
  ${media.tablet`
      background: #9c718d;
    `}

  ${props =>
    props.isOpen
      ? css`
          max-height: 50vh;
          transition: max-height 0.5s ease-out;
        `
      : css`
          max-height: 20vh;
          transition: max-height 0.5s ease-in;
        `}

  padding: 28px 0;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  font-family: 'Open Sans', sans-serif;
  z-index: 1000;
}

  div {
    padding: 0 50px;
    max-width: inherit;

    ${media.tablet`
    padding: 0 9%;
        `}

    ul {
      list-style: none;
      margin: 0;
      padding-left: 0;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0 20px 0;
      border-bottom: solid 1px black;

      ${media.tablet`
          padding: 0 0 40px 0;
          border-bottom: solid 1px #e8eaec;
          
        `}

      li {
        display: inline-block;
        margin: 0 0 0 30px;
        padding: 8px 0;
        animation: ${FadeIn} 1.2s 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

        ${media.tablet`
          margin: 0 0 0 10px;
          display: none;
        `}
      }

      li:first-of-type {
        margin-left: 0;
      }

      a {
        text-decoration: none;
        font-size: 13px;
        color: #000;
        font-weight: 600;

        ${media.tablet`
          font-size: 10px;
          color: #e8eaec;
        `}
      }
    }
  }

  ${props =>
    props.isOpen
      ? css`
          div {
            width: 100%;
            padding: 0 6%;
          }
          div ul {
            margin-top: 40px;
            display: block;
            text-align: right;
            border-bottom: none;
          }

          div ul li {
            display: block;
          }

          div ul li a {
            font-size: 20px;
            text-align: right;
          }
        `
      : css``}
`;

const StyledTitle = styled(Link)`
  svg {
    width: 150px;
    height: 150px;
    margin: 0 20px;
  }

  animation: none;
  font-family: 'Tiffany Script', sans-serif;
  position: absolute;
  top: 40%;
  left: 53%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  font-weight: 700;
  text-decoration: none;
  color: #000;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 10;

  ${media.tablet`
    font-size: 16px;
    margin: 0;
    color: #e8eaec;
    left: 38%;

    p {
      font-size: 16px;
      font-weight: 700;
      text-decoration: none;
      left: 50%;
      padding: 0 5px;
    }

    svg {
        display: none;
      }
  `}

  ${props =>
    props.isOpen
      ? css`
          top: 12%;
        `
      : css``}
`;

const activeStyle = {
  color: '#1d1d1d',
  fontWeight: 800,
};

/* HAMBURGER MENU */
export const HamburgerMenu = styled.div`
  position: fixed;
  display: none;
  top: 3%;
  right: 10%;
  width: 40px;
  height: 50px;
  cursor: pointer;
  z-index: 99999;

  .hamburger {
    display: block;
    top: 6%;
    right: 10%;
    width: 40px;
    height: 3px;
    background: #e8eaec;
    position: fixed;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
    transform: scaleX(-1);
    &::before {
      top: -10px;
    }
    &::after {
      top: 10px;
    }
  }
  .hamburger-one:before,
  .hamburger-one:after {
    content: '';
    position: absolute;
    width: 40px;
    height: 3px;
    background: #e8eaec;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }
  .hamburger-one:after {
    width: 40px;
  }
  ${props =>
    props.isOpen
      ? css`
          background: rgba(0, 0, 0, 0);
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0);
          .hamburger-one {
            background: rgba(0, 0, 0, 0);
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0);
          }
          .hamburger-one:before {
            top: 0;
            transform: rotate(45deg);
          }
          .hamburger-one:after {
            width: 40px;
            top: 0;
            transform: rotate(135deg);
            box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
          }
        `
      : css``}
  ${media.tablet`
    display: block;
  `}
`;

function Header({ menuisOpen, openHamburger }) {
  return (
    <>
      <HamburgerMenu isOpen={menuisOpen} onClick={openHamburger}>
        <div className="hamburger hamburger-one" />
      </HamburgerMenu>
      <StyledHeader isOpen={menuisOpen}>
        <StyledTitle to="/" isOpen={menuisOpen}>
          <p>kasia</p>
          <svg
            version="1.1"
            id="Warstwa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 500 500"
          >
            <g id="XMLID_57_">
              <path
                id="XMLID_60_"
                d="M250,53.4c-108.6,0-196.6,88-196.6,196.6s88,196.6,196.6,196.6s196.6-88,196.6-196.6S358.6,53.4,250,53.4z
M419.1,254.5c-13.9,18.9-25.5,27.5-35.4,26.3c-10.4-1.4-16.5-13.2-21.4-22.7c-2.9-5.7-6.6-12.8-9.5-12.6
c-6.2,0.6-11.2,6.1-16.4,12.1l-0.1,0.1c-6.9,7.9-14.7,16.8-27.1,15.3c-7.9-1-11.9-8.8-15.2-15.1c-2.6-5-4.3-8.1-6.3-7.9
c-5.8,0.8-11.8,9.2-18.2,18.1c-8.1,11.3-16.5,22.9-27.2,22.9c-0.8,0-1.6-0.1-2.4-0.2c-3.5-0.5-6.2-2.5-8.1-6.1
c-3.3-6.2-3.1-15.8-2.4-24c-17,19.5-37,36.3-61.2,22.3c-0.3-0.2-0.4-0.4-0.5-0.7c-3.3-2.3-10.7-7.8-16.7-12.9
c-9,23.4-18.2,51.3-22.7,64.9l0,0.1c-5.8,17.7-5.8,17.7-7.5,18.6c-0.4,0.2-0.8,0.3-1.3,0.3c-0.6,0-1.2-0.2-1.8-0.6
c-9.4-7.5,1.9-53.5,2-54c1.3-4.8,3-11.6,5-19.6l0.1-0.4c2.2-8.7,4.3-16.7,6.2-24.1c-0.6,0.7-1.3,1.1-2,1.2c-1,0.1-1.9-0.2-2.6-1
c-1.4-1.5-1.8-4.3-0.7-6.3c4.1-8.3,10.5-23.1,18.4-42.7c17.4-63.3,29.7-96.2,38.7-103.7c0.7-0.6,1.6-0.8,2.5-0.7
c1,0.2,1.8,0.8,2.4,1.8c1.6,2.7,2.4,4.2-21.7,67.2c-5.2,13.5-10.5,27-15.3,39.1c-7.5,27.3-14.4,54.3-18.9,72.2
c-2.1,8.1-3.9,15.2-5.1,20c-1.8,7.2-4.1,20-5,29.9c0.1-0.4,0.3-0.8,0.4-1.1c9.9-30.1,17.1-50.7,23.3-66.6c-3.6-3.6-4-5.1-4-6.1
c0-5.7,4.8-9.1,12.2-13.5c6-13.1,10.8-20,14.9-21.4c2.1-0.8,4.2-0.2,5.9,1.5c3.1,3,3.5,6.4,3.4,8.7c-0.5,7.2-7.3,11.6-18.3,18.1
l-0.9,0.5c-1.2,2.8-2.5,5.8-3.9,9.2c6.4,5.4,14.7,12.2,16.4,13.2c0.1,0.1,0.3,0.1,0.4,0.2c22.7,13.1,41.4-6,58.6-26.7
c0.7-0.9,1.7-1.3,2.6-1.2c0.3,0,0.5,0.1,0.8,0.2c0.5-0.2,0.9-0.2,1.4-0.1c2,0.4,3.3,2.7,3,5.3l-0.4,3.6c-0.8,7.1-2.1,18.9,0.5,23.8
c0.7,1.3,1.6,2,3.1,2.2c8.3,1.4,16.1-9.4,23.5-19.8l0.1-0.1c7-9.7,14.2-19.8,22.8-21c6.4-0.4,9.6,5.7,12.7,11.7l0.1,0.2
c2.8,5.5,5.5,10.6,10,11.2c9.4,1,15.5-5.9,21.9-13.2c5.8-6.6,11.9-13.5,20.5-14.3c7.1-0.6,11.4,7.7,15.9,16.6
c4.5,8.7,9.1,17.8,16.2,18.7c7.3,0.9,17.5-7.2,29.6-23.5c0.7-0.9,1.7-1.4,2.6-1.4c1,0,2,0.6,2.6,1.6
C420.5,249.9,420.4,252.7,419.1,254.5C419.1,254.4,419.1,254.4,419.1,254.5z"
              />
              <path
                id="XMLID_63_"
                d="M169.7,232.1c-0.7,0.4-1.9,1.4-3.8,4.3c2.7-2,3.8-3.2,4.1-3.9C169.9,232.3,169.8,232.2,169.7,232.1z"
              />
            </g>
            <g id="XMLID_1_" />
            <g id="XMLID_2_" />
            <g id="XMLID_3_" />
            <g id="XMLID_4_" />
            <g id="XMLID_5_" />
            <g id="XMLID_6_" />
            <g id="XMLID_7_" />
            <g id="XMLID_8_" />
            <g id="XMLID_9_" />
            <g id="XMLID_10_" />
            <g id="XMLID_11_" />
            <g id="XMLID_12_" />
            <g id="XMLID_13_" />
            <g id="XMLID_14_" />
            <g id="XMLID_15_" />
          </svg>
          <p>michalska</p>
        </StyledTitle>
        <div>
          <ul>
            <div>
              <li>
                <Link to="/ilustrations" activeStyle={activeStyle}>
                  Illustrations
                </Link>
              </li>
              <li>
                <Link to="/school" activeStyle={activeStyle}>
                  School
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link to="/threeD" activeStyle={activeStyle}>
                  3d
                </Link>
              </li>
              <li>
                <Link to="/contact" activeStyle={activeStyle}>
                  Contact
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </StyledHeader>
    </>
  );
}

export default Header;
