import styled, { keyframes } from 'styled-components';
import media from '../..//utils/media';

const slideIn = keyframes`
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
  `;

export const StyledWorkTitle = styled.h1`
  margin: 7% 0 20px 10%;
  text-align: left;
  font-family: 'Open Sans', sans-serif;
  font-weight: 100;
  font-size: 50px;

  ${media.tablet`
    &:first-of-type {
      margin-top: 30%;
    }

    margin: 0 10% 0 10%;
  `}
`;

export const StyledWorkSubtitle = styled.p`
  text-align: left;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 16px;
  text-transform: uppercase;
  padding: 0 0 20px 0;
  margin: 0 0 0 10%;

  ${media.tablet`
    margin: 0 5% 0 10%;
    padding: 0;
  `}
`;

export const StyledWorkContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  margin-bottom: 5%;

  ${media.tablet`
    padding: 20px 0 0 0;
  `}
`;

export const StyledWorkTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0px 40px;

  ${media.desktop`
    grid-template-columns: 1fr 1fr;
  `}
  ${media.tablet`
    grid-template-columns: 1fr;
  `}
`;

export const StyledWorkSingle = styled.button`
  background: none;
  border: none;
  text-decoration: none;
  color: #444444;
  font-family: 'Open Sans', sans-serif;
  font-weight: 100;
  margin: 0;
  cursor: pointer;
  animation: ${slideIn} 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  &:nth-of-type(odd):after {
    content: '';
    left: 8px;
    top: 8px;
    position: absolute;
    width: 100%;
    height: 300px;
    opacity: 1;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(0, 0, 0);
    border-image: initial;
    transition: transform 0.15s ease-out 0s;
    z-index: -1;
  }

  &:focus {
    outline: none;
  }

  ${media.tablet`
    width: 80vw;
  `}
`;

export const StyledWorkSingleImage = styled.div`
  width: 380px;
  height: 300px;
  transition: all 0.3s ease-in-out;
  margin: 0;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    transform: scale(1.03);
    -webkit-filter: brightness(80%);
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  ${media.tablet`
    width: 100%;
  `}
`;

export const StyledWorkSingleCaption = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 0 60px 0;

  p:first-of-type {
    font-size: 30px;
    font-weight: 300;
  }

  p:last-of-type {
    font-size: 16px;
  }
`;

export const StyledWorkSchool = styled.button`
  width: 380px;
  height: 600px;
  background: none;
  border: none;
  text-decoration: none;
  color: #444444;
  font-family: 'Open Sans', sans-serif;
  font-weight: 100;
  margin: 0;
  cursor: pointer;
  animation: ${slideIn} 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  &:nth-of-type(odd):after {
    content: '';
    left: 8px;
    top: 8px;
    position: absolute;
    width: 100%;
    height: 600px;
    opacity: 1;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(0, 0, 0);
    border-image: initial;
    transition: transform 0.15s ease-out 0s;
    z-index: -1;
  }

  ${media.tablet`
    width: 80vw;
  `}

  &:focus {
    outline: none;
  }
`;

export const StyledWorkSchoolImage = styled.div`
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;
  margin: 0;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    transform: scale(1.03);
    -webkit-filter: brightness(80%);
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
`;

export const StyledWork3dContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5%;

  ${media.tablet`
    margin-top: -50px;
  `}

  button:nth-child(1) {
    left: 10%;
    -webkit-clip-path: polygon(0 0, 50% 0, 100% 100%, 0% 100%);
    clip-path: polygon(0 0, 50% 0, 100% 100%, 0% 100%);
  }

  button:nth-child(2) {
    left: 21.65%;
    width: calc(1220px / 2.475);
    -webkit-clip-path: polygon(0 0, 70% 0, 100% 100%, 31% 100%);
    clip-path: polygon(0 0, 70% 0, 100% 100%, 31% 100%);
  }

  button:nth-child(3) {
    right: 21.65%;
    width: calc(1220px / 2.475);
    -webkit-clip-path: polygon(0 0, 69% 0, 100% 100%, 30% 100%);
    clip-path: polygon(0 0, 69% 0, 100% 100%, 30% 100%);
  }

  button:nth-child(4) {
    right: 10%;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 100%);
  }

  button:nth-child(5) {
    left: 10%;
    -webkit-clip-path: polygon(0 0, 100% 0, 50% 100%, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 50% 100%, 0% 100%);
  }

  button:nth-child(6) {
    left: 21.65%;
    width: calc(1220px / 2.475);
    -webkit-clip-path: polygon(31% 0, 100% 0%, 69% 100%, 0% 100%);
    clip-path: polygon(31% 0, 100% 0%, 69% 100%, 0% 100%);
  }

  button:nth-child(7) {
    right: 21.65%;
    width: calc(1220px / 2.475);
    -webkit-clip-path: polygon(31% 0, 100% 0%, 69% 100%, 0% 100%);
    clip-path: polygon(31% 0, 100% 0%, 69% 100%, 0% 100%);
  }

  button:nth-child(8) {
    right: 10%;
    -webkit-clip-path: polygon(50% 0, 100% 0%, 100% 100%, 0% 100%);
    clip-path: polygon(50% 0, 100% 0%, 100% 100%, 0% 100%);
  }

  ${media.tablet`
    button:first-child{
      -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 70%, 0% 100%)!important;
    clip-path: polygon(0 20%, 100% 20%, 100% 70%, 0% 100%)!important;
    margin: 0;
    }

    button:last-child{
      -webkit-clip-path: polygon(0 30%, 100% 0, 100% 80%, 0 80%)!important;
    clip-path: polygon(0 30%, 100% 0, 100% 80%, 0 80%)!important;
    }
  `}
`;

export const StyledWork3dOuter = styled.button`
  position: absolute;
  width: calc(1220px / 4);
  height: 300px;
  background: none;
  border: none;
  margin: 0;
  cursor: pointer;
  animation: ${slideIn} 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  ${media.tablet`
    left: 5% !important;
    right: 5% !important;
    position: absolute;
    width: 80vw;
    height: 400px;
    margin: 0;
    width: 90vw !important;
    -webkit-clip-path: polygon(0 31%, 100% 0, 100% 70%, 0% 100%) !important;
    clip-path: polygon(0 31%, 100% 0, 100% 70%, 0% 100%) !important;
  `}
`;

export const StyledWork3dImage = styled.div`
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;
  margin: 0;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-box-shadow: 5px 5px 50px -20px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 5px 50px -20px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 5px 50px -20px rgba(0, 0, 0, 0.75);
  animation: fade-in-top 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  &:hover {
    transform: scale(1.03);
    -webkit-filter: brightness(80%);
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
`;

export const MasyImage = styled.img`
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    -webkit-filter: brightness(80%);
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  &:nth-of-type(odd):after {
    content: '';
    left: 8px;
    top: 8px;
    position: absolute;
    width: 100%;
    height: 300px;
    opacity: 1;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(0, 0, 0);
    border-image: initial;
    transition: transform 0.15s ease-out 0s;
    z-index: -1;
  }
`;
