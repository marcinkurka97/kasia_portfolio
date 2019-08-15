import React from 'react';
import styled, { css } from 'styled-components';
import media from '../../utils/media';
import tlo from '../../images/wallpaper.png';
import foreground from '../../images/foreground.png';

const LandingPage = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding: 0;

  .foreground__image {
    position: absolute;
    bottom: 0;
    left: 7.5%;
    width: 85%;
    height: 100%;
    background: url(${foreground});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    z-index: 1;

    ${media.tablet`
    width: 100%;
    height: 70%;
    left: 0;
    background-size: cover;
  `}
  }

  .background__image {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 70%;
    background: url(${tlo});
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
`;

// eslint-disable-next-line
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

const LandingPageFooterRight = styled.div`
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 30px;
  color: #000;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  z-index: 5;

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
          <div className="foreground__image" />
          {/* <div className="background__image" /> */}
          <LandingPageFooterRight>
            © 2019 Developed by Marcin Kurka
          </LandingPageFooterRight>
        </LandingPage>
      </>
    );
  }
}

export default IndexPage;
