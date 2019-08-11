import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import media from '../..//utils/media';

const StyledHamburgerMenu = styled.div`
  display: none;
  position: fixed;
  top: 38px;
  right: 10%;
  z-index: 99999;
  -webkit-user-select: none;
  user-select: none;

  input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
  }

  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #1d1d1d;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  span:first-child {
    transform-origin: 0% 0%;
  }

  span:nth-last-child(1) {
    transform-origin: 0% 100%;
  }

  input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }

  input:checked ~ span:nth-last-child(2) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  input:checked ~ span:nth-last-child(1) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  ${media.tablet`
    display: block;
  `}
`;

class HamburgerMenu extends React.Component {
  render() {
    return (
      <StyledHamburgerMenu>
        <input type="checkbox" />
        <span />
        <span />
        <span />
      </StyledHamburgerMenu>
    );
  }
}

export default HamburgerMenu;
