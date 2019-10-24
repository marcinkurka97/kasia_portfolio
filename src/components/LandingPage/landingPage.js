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
`;

const LandingPageCentreBox = styled.div`
  width: 670px;
  height: 670px;
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
    min-width: 480px;
    height: 480px;
    background-image: url(${aboutPhoto});
    background-size: cover;
  }

  .landing-page__hero-container {
    position: relative;
    right: 15%;

    h1 {
      font-family: 'Roboto', sans-serif;
      font-size: 50px;
      width: 500px;
      height: 250px;
      text-align: center;
      line-height: 80px;
      font-weight: 800;
    }

    p {
      font-family: 'Roboto', sans-serif;
      text-align: center;
      font-size: 13px;
      font-weight: 800;
    }
  }
`;

const LandingPageAboutSection = styled.section`
  height: 75%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  padding: 0 400px;

  .landing-page__about-intro {
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    color: #eddccc;
  }

  .landing-page__about-text {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    line-height: 28px;
    text-align: justify;
    color: #000000;
  }
`;

const LandingPageIllustrationSection = styled.section`
  height: 80%;
  background: #fff;
  display: flex;
  justify-content: space-around;

  .landing-page__illustration-container {
    position: absolute;
    left: 0;
    width: 1200px;
    height: 700px;
    background: #eddccc;
    z-index: 5;

    h2 {
      font-family: 'Roboto', sans-serif;
      font-style: italic;
      font-weight: 900;
      font-size: 50px;
      line-height: 42px;
      color: #000000;
      height: 150px;
      text-align: left;
      padding: 50px 150px;
    }

    .landing-page__bear-img {
      position: relative;
      top: -250px;
      margin-left: 10%;
      background: url(${bearPhoto});
      background-size: contain;
      background-repeat: no-repeat;
      width: 800px;
      height: 800px;
      z-index: 5;
    }
  }
  .landing-page__dots-img {
    position: relative;
    background: url(${dots});
    background-size: contain;
    width: 800px;
    height: 600px;
    align-self: center;
    left: 23%;
    z-index: 10;
  }
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
      padding: 0 150px;
    }
  }

  .landing-page__poster-img {
    position: relative;
    right: 0;
    top: -25%;
    background: url(${poster});
    background-size: cover;
    background-repeat: no-repeat;
    width: 55vw;
    height: 1400px;
    z-index: 0;
  }
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
    padding: 50px 150px;
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
`;

const LandingPageBookSection = styled.section`
  height: 100%;
  background: #eddccc;
  position: relative;

  .landing-page__lines-img {
    position: absolute;
    left: 23%;
    top: 12%;
    background: url(${diagonalLines});
    background-repeat: repeat;
    background-size: contain;
    width: 1350px;
    height: 700px;
    z-index: 1;
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    font-weight: 900;
    font-size: 50px;
    line-height: 42px;
    color: #000000;
    padding: 50px 150px 80px 150px;
    text-align: right;
  }

  .landing-page__book-container {
    position: absolute;
    right: 0;
    width: 1400px;
    height: 700px;
    background: #fff;
    display: flex;
    z-index: 5;

    .landing-page__book-img1 {
      height: 100%;
      width: 80%;
      background: url(${book1});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    .landing-page__book-img2 {
      height: 100%;
      width: 80%;
      background: url(${book2});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
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
    padding: 50px 150px;
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
`;

const LandingPage3DkSection = styled.section`
  height: 100%;
  background: #fff;
  position: relative;
  display: flex;
  align-items: center;

  .landing-page__3d-container {
    position: absolute;
    left: 0;
    height: 700px;
    width: 1400px;
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
      padding: 0 0 0 150px;
    }
  }
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
            <LandingPageCentreBox>
              <div className="landing-page__hero-img" />
              <span className="landing-page__hero-container">
                <h1>"Lorem ipsum dolor sit"</h1>
                <p>"Lorem ipsum dolor sit"</p>
              </span>
            </LandingPageCentreBox>
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
            <div className="landing-page__dots-img" />
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
            <div className="landing-page__lines-img" />
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
