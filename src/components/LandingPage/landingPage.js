import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import media from '../../utils/media';

const LandingPage = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding: 0;
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
    color: #000;
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
    background: #000;
    width: 300px;
    height: 3px;
  }

  h4 {
    font-family: 'Open Sans', sans-serif;
    color: #000;
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
  left: 30%;
  bottom: 32px;
  height: 30px;
  color: #000;
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
  left: 50%;
  bottom: 5%;
  margin-right: -50%;
  transform: translate(-50%, 80%);
  height: 30px;
  color: #000;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  display: flex;
  align-items: center;

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
      <>
        <LandingPage>
          <LandingPageTitleContainer isOpen={this.state.menuisOpen}>
            <h1>Cattleia</h1>
            <h4>Hi! I'm Kasia and this is my portfolio.</h4>
          </LandingPageTitleContainer>
          {/* <LandingPageFooterLeft>
            <span>
              <FontAwesomeIcon icon={faPhone} />
              <p>+48 123 456 789</p>
            </span>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
              <p>katmich@gmail.com</p>
            </span>
          </LandingPageFooterLeft> */}
          <LandingPageFooterRight>
            © 2019 Developed by Marcin Kurka
          </LandingPageFooterRight>
        </LandingPage>
      </>
    );
  }
}

export default IndexPage;
