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

const StyledSidebar = styled.div`
  position: fixed;
  top: 65%;
  left: -7.5%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  font-family: 'Open Sans', sans-serif;
  transform: rotate(-90deg);
  animation: ${FadeIn} 1.2s 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  ${media.tablet`
    ${props =>
      props.isOpen
        ? css`
            display: flex;
          `
        : css`
            display: none;
          `}
  `}

  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    span:first-of-type {
      background: #000;
      color: #fff;
      font-weight: 700;
      padding: 5px 10px;
      font-size: 10px;
      text-transform: uppercase;

      ${media.tablet`
        background: #e8eaec;
        color: #000;
    `}
    }

    span:nth-child(2) {
      font-size: 20px;
      padding: 0 10px;
    }

    ul {
      list-style: none;
      margin: 0;
      padding-left: 0;
    }

    li {
      display: inline-block;
      margin: 6px 10px;
      font-size: 12px;
      font-weight: 600;

      a {
        text-decoration: none;
        color: #000;

        ${media.tablet`
          color: #e8eaec;
          font-size: 10px;
        `}
      }

      a:hover {
        opacity: 0.6;
      }
    }

    li:first-of-type {
      margin-left: 5px;
    }
  }

  ${media.tablet`
      transform: rotate(0deg);
      left: 50%;
      top: 37.5vh;
      color: #e8eaec;
      margin-right: -50%;
      transform: translate(-50%, 80%);
      font-size: 10px;
  `}
`;

function Sidebar({ menuisOpen }) {
  return (
    <StyledSidebar isOpen={menuisOpen}>
      <div>
        <span>Follow</span>
        <span>-</span>
        <ul>
          <li>
            <a href="https://www.behance.net/katmich">behance</a>
          </li>
          <li>
            <a href="https://www.instagram.com/kat_illustrations/">instagram</a>
          </li>
          <li>
            <a href="https://dribbble.com/cattleia">dribbble</a>
          </li>
          <li>
            <a href="https://www.artstation.com/cattleeia">artstation</a>
          </li>
        </ul>
      </div>
    </StyledSidebar>
  );
}

export default Sidebar;
