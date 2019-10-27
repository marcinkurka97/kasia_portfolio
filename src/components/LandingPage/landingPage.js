import React from 'react';
import styled from 'styled-components';
import media from '../../utils/media';
import aboutPhoto from '../../images/profile.png';
import bearPhoto from '../../images/mis.png';
import dots from '../../images/KROPKI.svg';
import poster from '../../images/plakat.png';
import logos from '../../images/loga.png';
import book1 from '../../images/book1.png';
import book2 from '../../images/book2.png';
import diagonalLines from '../../images/skosy.svg';
import logoBook from '../../images/znaki.png';
import img3d from '../../images/3d.png';

const LandingPage = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding: 0;
`;

const LandingPageHeroSection = styled.section`
  height: 100%;
  background: #eddccc;
  display: flex;
  justify-content: center;
  align-items: center;

  .landing-page__white-box {
    width: 35vw;
    height: 35vw;
    margin-top: 4.5%;
    margin-left: -10%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .landing-page__hero-img {
      position: relative;
      top: -3%;
      left: -20%;
      min-width: 25vw;
      height: 25vw;
      background-image: url(${aboutPhoto});
      background-size: cover;
    }

    .landing-page__hero-container {
      position: relative;
      right: 15%;

      h1 {
        font-family: 'Roboto', sans-serif;
        font-size: 50px;
        width: 25vw;
        margin-bottom: 50px;
        text-align: center;
        font-weight: 800;
      }

      p {
        font-family: 'Roboto', sans-serif;
        text-align: center;
        font-size: 13px;
        font-weight: 800;
      }
    }
  }

  ${media.tablet`
    .landing-page__white-box {
      width: 75vw;
      height: 75vh;
      margin: 0;
      background: none;
      flex-direction: column;
      top: 10%;
      position: relative;
      z-index: 5;

      .landing-page__hero-img {
        position: relative;
        top: auto;
        left: auto;
        min-width: 75vw;
        height: 75vw;

        &:before {
          content: '';
          width: 100%;
          height: 100%;
          position: absolute;
          right: 10%;
          top: 10%;
          background: #fff;
          z-index: -1;
        }
      }

      .landing-page__hero-container {
        right: 0;
        top: -5%;

        h1 {
          font-size: 36px;
          width: auto;
          height: auto;
          line-height: 42px;
          margin: 0;
        }
  
        p {
          font-size: 14px;
          margin-top: 30px;
        }
      }
    }
  `}
`;

const LandingPageAboutSection = styled.section`
  height: 75%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;

  .landing-page__about-intro {
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    color: #eddccc;
    padding: 0 20%;
  }

  .landing-page__about-text {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    line-height: 28px;
    text-align: justify;
    color: #000000;
    padding: 0 15%;
  }

  ${media.tablet`
    height: 100%;
    padding: 30px;;

    .landing-page__about-intro {
      font-size: 24px;
      line-height: 28px;
      padding: 0 10%;
    }

    .landing-page__about-text {
      font-size: 20px;
      line-height: 28px;
      padding: 0 5%;
    }
  `}
`;

const LandingPageIllustrationSection = styled.section`
  height: 80%;
  background: #fff;
  display: flex;
  justify-content: space-around;

  .landing-page__illustration-container {
    position: absolute;
    left: 0;
    width: 65vw;
    height: 75vh;
    background: #eddccc;
    z-index: 5;

    &:before {
      content: '';
      position: absolute;
      background: url(${dots});
      background-size: contain;
      width: 70%;
      height: 80%;
      right: -40%;
      top: 10%;
      z-index: 0;
    }

    h2 {
      font-family: 'Roboto', sans-serif;
      font-style: italic;
      font-weight: 900;
      font-size: 50px;
      line-height: 42px;
      color: #000000;
      height: 16vh;
      text-align: left;
      padding: 50px 150px;
    }

    .landing-page__bear-img {
      position: relative;
      top: -16vh;
      margin-left: 10%;
      background: url(${bearPhoto});
      background-size: contain;
      background-repeat: no-repeat;
      width: 100%;
      height: 100%;
      z-index: 5;
    }
  }

  ${media.tablet`
    height: 50%;

    .landing-page__illustration-container {
      position: absolute;
      left: auto;
      right: 0;
      width: 75%;
      height: 45%;
      z-index: 5;

      &:before {
        width: 60%;
        height: 50%;
        left: -20%;
        top: 25%;
        z-index: 0;
      }

      h2 {
        font-size: 30px;
        height: 30px;
        text-align: center;
        padding: 0;
      }

      .landing-page__bear-img {
        position: relative;
        top: -7%;
        background-position: center center;
        margin: 0;
        width: 100%;
        height: 100%;
        z-index: 5;
      }
    }
  `}
`;

const LandingPagePostersSection = styled.section`
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  h2 {
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    font-weight: 900;
    font-size: 50px;
    line-height: 42px;
    color: #000000;
    width: 50%;
    text-align: right;
    padding: 0 10%;
  }

  .landing-page__poster-img {
    position: relative;
    right: 0;
    top: -25%;
    background: url(${poster});
    background-size: cover;
    background-repeat: no-repeat;
    width: 55vw;
    height: 150vh;
    z-index: 0;
  }

  ${media.tablet`
  height: 45%;
  align-items: flex-start;
  
      h2 {
        font-size: 30px;
        height: 30px;
        text-align: center;
        padding: 0;
        order: 2;
        margin: 80px 0 0 0;
      }

    .landing-page__poster-img {
      position: relative;
      left: 0;
      top: -25%;
      width: 75vw;
      height: 100vh;
      background-size: contain;
    }
  `}
`;

const LandingPageLogoSection = styled.section`
  background: #fff;

  h2 {
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    font-weight: 900;
    font-size: 50px;
    line-height: 42px;
    color: #000000;
    padding: 2% 7%;
  }

  div {
    position: relative;
    height: 100vh;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: url(${logos});
      background-size: cover;
      background-position: 0 60%;
      background-repeat: no-repeat;
    }
  }

  ${media.tablet`
    height: 70%;

    h2 {
      font-size: 30px;
      text-align: center;
      padding: 0 0 20px 0;
    }

    div {
      height: 90vh;

      &:before {
        height: 70%;
        background-size: cover;
        background-position: 50% 20%;
      }
    }
  `}
`;

const LandingPageBookSection = styled.section`
  height: 100%;
  background: #eddccc;
  position: relative;
  z-index: 5;

  h2 {
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    font-weight: 900;
    font-size: 50px;
    line-height: 42px;
    color: #000000;
    padding: 2% 7%;
    text-align: right;
  }

  .landing-page__book-container {
    position: absolute;
    right: 0;
    width: 75vw;
    height: 75vh;
    background: #fff;
    display: flex;
    align-items: center;

    &:before {
      content: '';
      position: absolute;
      top: 10%;
      left: -5%;
      background: url(${diagonalLines});
      background-repeat: repeat;
      background-size: contain;
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    .landing-page__book-img1 {
      height: 100%;
      width: 80%;
      background: url(${book1});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      z-index: 5;
    }

    .landing-page__book-img2 {
      height: 100%;
      width: 80%;
      background: url(${book2});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      z-index: 5;
    }
  }

  ${media.tablet`
    height: 65%;

      h2 {
        font-size: 30px;
        text-align: left;
        padding: 20px;
      }
    
      .landing-page__book-container {
        width: 85vw;
        height: 45vh;
        left: 0;
    
        &:before {
          left: auto;
          right: -10%;
          top: 10%;
          width: 100%;
          height: 100%;
          background-size: cover;
        }
    
        .landing-page__book-img1 {
          position: absolute;
          left: -5%;
          height: 70%;
          width: 70%;
        }
    
        .landing-page__book-img2 {
          position: absolute;
          left: 45%;
          height: 70%;
          width: 70%;
        }
    `}
`;

const LandingPageLogoBookSection = styled.section`
  background: #eddccc;

  h2 {
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    font-weight: 900;
    font-size: 50px;
    line-height: 42px;
    color: #000000;
    padding: 2% 7%;
  }

  div {
    position: relative;
    height: 85vh;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: url(${logoBook});
      background-size: cover;
      background-position: 0 50%;
      background-repeat: no-repeat;
    }
  }

  ${media.tablet`
    height: 70%;

    h2 {
      font-size: 30px;
      text-align: left;
      padding: 0 20px 20px 20px;
    }

    div {
      height: 90vh;

      &:before {
        height: 70%;
        background-size: cover;
        background-position: 50% 20%;
      }
    }
  `}
`;

const LandingPage3DkSection = styled.section`
  height: 100%;
  background: #fff;
  position: relative;
  display: flex;
  align-items: center;

  .landing-page__3d-title_media {
    display: none;
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    font-weight: 900;
    font-size: 50px;
    line-height: 42px;
    color: #000000;
    padding: 0 0 0 150px;
  }

  .landing-page__3d-container {
    position: absolute;
    left: 0;
    height: 75vh;
    width: 75vw;
    background: #eddccc;
    display: flex;
    align-items: center;

    div {
      background: url(${img3d});
      height: 100%;
      width: 60%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 0 60%;
    }

    h2 {
      font-family: 'Roboto', sans-serif;
      font-style: italic;
      font-weight: 900;
      font-size: 50px;
      line-height: 42px;
      color: #000000;
      padding: 0 0 0 10%;
    }
  }

  ${media.tablet`
    height: 70%;
    justify-content: center;

    .landing-page__3d-title_media {
      display: initial;
      font-size: 30px;
      text-align: left;
      padding: 20px 0;
      align-self: flex-start;
    }

    .landing-page__3d-container {
      margin-top: 20px;
      height: 80vw;
      width: 80vw;
      left: auto;
      border-radius: 50%;
      justify-content: center;


      div {
        width: 90%;
        height: 90%;
        border-radius: 50%;
      }

      h2 {
        display: none;
    }
  `}
`;

const LandingPageFooter = styled.div`
  background: #eddccc;
  color: #000;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: center;
  z-index: 5;

  p {
    font-size: 16px;
    font-weight: 600;
    align-self: flex-end;
    padding: 20px 0;
  }

  ${media.tablet`
    text-align: center;
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
          <LandingPageHeroSection>
            <div className="landing-page__white-box">
              <div className="landing-page__hero-img" />
              <span className="landing-page__hero-container">
                <h1>"Lorem ipsum dolor sit"</h1>
                <p>"Lorem ipsum dolor sit"</p>
              </span>
            </div>
          </LandingPageHeroSection>
          <LandingPageAboutSection>
            <p className="landing-page__about-intro">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor"
            </p>
            <p className="landing-page__about-text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </LandingPageAboutSection>
          <LandingPageIllustrationSection>
            <div className="landing-page__illustration-container">
              <h2>ilustracje</h2>
              <div className="landing-page__bear-img" />
            </div>
          </LandingPageIllustrationSection>
          <LandingPagePostersSection>
            <h2>plakaty</h2>
            <div className="landing-page__poster-img" />
          </LandingPagePostersSection>
          <LandingPageLogoSection>
            <h2>logo</h2>
            <div />
          </LandingPageLogoSection>
          <LandingPageBookSection>
            <h2>książki</h2>
            <div className="landing-page__book-container">
              <div className="landing-page__book-img1" />
              <div className="landing-page__book-img2" />
            </div>
          </LandingPageBookSection>
          <LandingPageLogoBookSection>
            <h2>księga znaku</h2>
            <div />
          </LandingPageLogoBookSection>
          <LandingPage3DkSection>
            <h2 className="landing-page__3d-title_media">grafiki 3D</h2>
            <div className="landing-page__3d-container">
              <div />
              <h2>grafiki 3D</h2>
            </div>
          </LandingPage3DkSection>
          <LandingPageFooter>
            <p>© 2019 Developed by Marcin Kurka</p>
          </LandingPageFooter>
        </LandingPage>
      </>
    );
  }
}

export default IndexPage;
