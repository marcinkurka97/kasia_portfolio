import React from 'react';
import styled from 'styled-components';
import media from '../..//utils/media';
import photo from '../../images/aboutphoto.jpg';
import StyledBackground from '../../utils/background';
import tlo1 from '../../images/fale.png';

const BackgroundPhoto = styled(StyledBackground)`
  background: url(${tlo1});
  position: absolute;
  background-repeat: repeat;
  top: -7%;
  left: 46.5%;
  height: 80%;
  width: 40%;

  ${media.tablet`
    top: -2%;
    left: -5%;
    height: 50%;
    width: 80%;
  `}
`;

const AboutMeContainer = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70vw;
  height: 70vh;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;

  ${media.tablet`
    flex-flow: column;
    width: 80vw;
    height: 800px;
    top: 85%;
  `}
`;

const AboutMeNote = styled.div`
  position: relative;
  left: 5%;
  top: -5%;
  width: 50%;
  height: 50%;
  background: white;
  font-family: 'Open Sans', sans-serif;
  color: #000;
  padding: 30px;

  &:after {
    content: '';
    left: -20px;
    top: 20px;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 1;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(0, 0, 0);
    border-image: initial;
    transition: transform 0.15s ease-out 0s;
  }

  span {
    font-family: 'Tiffany Script', sans-serif;
    position: absolute;
    bottom: 0;
    right: 10%;
    font-size: 20px;

    ${media.tablet`
      bottom: 0;
      right: 20%;
    `}
  }

  ${media.tablet`
    order: 2;
    width: 100%;
    top: auto;
    left: auto;
    margin: 30px 0 50px 0;
    font-size: 12px;
  `}
`;

const AboutMePhoto = styled.div`
  justify-self: flex-end;
  align-self: flex-start;
  width: 40%;
  height: 90%;
  background: url(${photo});
  background-size: cover;
  border: none;

  ${media.tablet`
    width: 100%;
    height: 600px;
    order: 1;
  `}
`;

class AboutMe extends React.Component {
  render() {
    return (
      <AboutMeContainer>
        <BackgroundPhoto />
        <AboutMeNote>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <span>catie</span>
        </AboutMeNote>
        <AboutMePhoto />
      </AboutMeContainer>
    );
  }
}

export default AboutMe;
