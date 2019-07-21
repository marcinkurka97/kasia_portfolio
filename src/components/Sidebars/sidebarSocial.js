import React from 'react';
import styled from 'styled-components';
import media from '../..//utils/media';

const StyledSidebar = styled.div`
  position: fixed;
  left: -120px;
  top: 70vh;
  z-index: 1000;
  font-family: 'Open Sans', sans-serif;
  transform: rotate(-90deg);

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
      bottom: 0;
      margin-right: -50%;
      transform: translate(-50%, 80%);
      font-size: 10px;
    }
  `}
`;

class Sidebar extends React.Component {
  render() {
    return (
      <StyledSidebar>
        <div>
          <span>Follow</span>
          <span>-</span>
          <ul>
            <li>
              <a href="https://www.behance.net/katmich">behance</a>
            </li>
            <li>
              <a href="https://www.instagram.com/kat_illustrations/">
                instagram
              </a>
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
}

export default Sidebar;
