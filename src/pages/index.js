import React from 'react';
import { Link } from 'gatsby';
import styled, { css, keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { HamburgerMenu } from '../components/Header/header';
import logo from '../images/logo.png';
import media from '../utils/media';

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const LandingPage = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding: 0;
  background: #1d1d1d;
`;

const LandingPageLogo = styled.div`
  position: absolute;
  top: 32px;
  left: 64px;
  width: 130px;
  height: 50px;
  background: url('http://lifeinsys.com/item/malena/resources/img/logo-white.png');
  background-repeat: no-repeat;
  background-size: contain;

  ${media.tablet`
  top: 15px;
  left: 25px;
  width: 110px;
  height: 40px;
    `}
`;

const LandingPageHamburgerMenu = styled(HamburgerMenu)`
  display: block;
  right: 45px;
  top: 32px;
  margin: 0;

  ${props =>
    props.isOpen
      ? css`
          &:hover > div:before,
          &:hover > div:after {
            background: rgb(255, 255, 255);
            transition-duration: 0.3s;
          }
        `
      : css`
          &:hover > div,
          &:hover > div:before,
          &:hover > div:after {
            background: rgb(255, 255, 255);
            transition-duration: 0.3s;
          }
        `}

  ${media.tablet`
    top: 10px;
    right: 5px;
  `}
`;

const LandingPageMenu = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  animation: ${FadeIn} 2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  z-index: 999;

  ${props =>
    props.isOpen
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}

  li {
    text-align: center;
    list-style: none;
  }
`;

const LandingPageLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  color: #fff;
  font-weight: 600;
  font-size: 60px;
  z-index: 999;
  transition: transform 0.2s ease-in-out;

  &:hover {
    color: #000;
    transform: scale(1.5);
  }

  ${media.tablet`
      font-size: 40px;
  `}
`;

const LandingPageSideBarSocial = styled.div`
  position: absolute;
  right: 64px;
  top: 38%;
  display: flex;
  flex-flow: column wrap;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    height: 50px;
    width: 50px;
    margin: 0 0 1px 0;

    svg {
      fill: rgb(153, 153, 153);
      width: 18px;

      &:hover {
        fill: rgb(255, 255, 255);
        transition-duration: 0.3s;
      }
    }
  }

  ${media.tablet`
    display: none;
  `}
`;

const LandingPageTitleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  max-width: 600px;
  min-height: 250px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  transition: filter 2s;
  opacity: 1;
  z-index: 1;

  ${props =>
    props.isOpen
      ? css`
          filter: blur(10px);
          opacity: 0.3;
        `
      : css``}

  h1 {
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    color: #fff;
    font-weight: 700;
    font-size: 80px;
    text-align: center;
  }

  h1:before,
  h1:after {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    content: '';
    display: block;
    background: #fff;
    width: 300px;
    height: 3px;
  }

  h4 {
    font-family: 'Open Sans', sans-serif;
    color: #fff;
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    line-height: 1.5;
  }

  ${media.tablet`
  h1:before,
  h1:after {
    width: 150px;
  }

    h1{
      font-size: 50px;
    }
  `}
`;

const LandingPageFooterLeft = styled.div`
  position: absolute;
  left: 64px;
  bottom: 32px;
  height: 30px;
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  display: flex;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span:first-child {
    margin-right: 20px;
  }

  svg {
    width: 0.8em !important;
    margin-right: 6px;
  }

  svg:first-child {
    transform: scaleX(-1);
  }

  ${media.tablet`
    text-align: center;
    bottom: 5%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, 0);
  `}
`;

const LandingPageFooterRight = styled.div`
  position: absolute;
  right: 64px;
  bottom: 32px;
  height: 30px;
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;

  ${media.tablet`
    text-align: center;
    bottom: 0;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, 0);
  `}
`;

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuisOpen: false,
    };
  }

  openHamburger = () => {
    this.setState({
      menuisOpen: !this.state.menuisOpen,
    });
  };

  render() {
    return (
      <LandingPage>
        <LandingPageLogo />
        <LandingPageMenu isOpen={this.state.menuisOpen}>
          <ul>
            <li>
              <LandingPageLink to="/ilustrations">Ilustrations</LandingPageLink>
            </li>
            <li>
              <LandingPageLink to="/school">School</LandingPageLink>
            </li>
            <li>
              <LandingPageLink to="/threeD">3D</LandingPageLink>
            </li>
            <li>
              <LandingPageLink to="/contact">Contact</LandingPageLink>
            </li>
          </ul>
        </LandingPageMenu>
        <LandingPageHamburgerMenu
          isOpen={this.state.menuisOpen}
          onClick={this.openHamburger}
        >
          <div className="hamburger hamburger-one" />
        </LandingPageHamburgerMenu>
        <LandingPageSideBarSocial>
          <a href="https://www.behance.net/katmich">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/kat_illustrations/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="https://dribbble.com/cattleia">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z" />
            </svg>
          </a>
          <a href="https://www.artstation.com/cattleeia">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.142-1.289H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467zm-11.129-3.462L7.428 4.858l-5.444 9.428h10.887z" />
            </svg>
          </a>
        </LandingPageSideBarSocial>
        <LandingPageTitleContainer isOpen={this.state.menuisOpen}>
          <h1>Cattleia</h1>
          <h4>Hi! I'm Kasia and this is my portfolio.</h4>
        </LandingPageTitleContainer>
        <LandingPageFooterLeft>
          <span>
            <FontAwesomeIcon icon={faPhone} />
            <p>+48 123 456 789</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
            <p>katmich@gmail.com</p>
          </span>
        </LandingPageFooterLeft>
        <LandingPageFooterRight>
          © 2019 Developed by Marcin Kurka
        </LandingPageFooterRight>
      </LandingPage>
    );
  }
}

export default IndexPage;
