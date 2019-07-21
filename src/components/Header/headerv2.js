import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import media from '../..//utils/media';

const StyledHeader = styled.div`
  padding: 28px 0;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  font-family: 'Open Sans', sans-serif;
  z-index: 1000;

  div {
    padding: 0 50px;
    max-width: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
      list-style: none;
      margin: 0;
      padding-left: 0;
      text-transform: uppercase;

      li {
        display: inline-block;
        margin: 0 0 0 30px;
        padding: 8px 0;

        ${media.tablet`
          margin: 0 0 0 10px;
        `}
      }

      li:first-of-type {
        margin-left: 0;
      }

      a {
        text-decoration: none;
        font-size: 13px;
        color: #000;
        font-weight: 600;

        ${media.tablet`
          font-size: 10px;
        `}
      }
    }
  }

  div:after {
    position: absolute;
    top: 95px;
    content: '';
    width: 93.5%;
    background: #000;
    height: 1px;

    ${media.tablet`
    top: 70px;
    width: 78%;
    `}
  }
`;

const StyledTitle = styled(Link)`
  font-size: 30px;
  font-weight: 700;
  text-decoration: none;
  color: #000;
  margin-bottom: 0;
  margin-left: -30px;

  ${media.tablet`
    font-size: 16px;
  `}
`;

const activeStyle = {
  color: '#1d1d1d',
  fontWeight: 800,
};

class Header extends React.Component {
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
      <StyledHeader>
        <div>
          <ul>
            <li>
              <Link to="/ilustrations" activeStyle={activeStyle}>
                Illustrations
              </Link>
            </li>
            <li>
              <Link to="/threeD" activeStyle={activeStyle}>
                3d
              </Link>
            </li>
          </ul>
          <StyledTitle to="/">catie mich</StyledTitle>
          <ul>
            <li>
              <Link to="/school" activeStyle={activeStyle}>
                School
              </Link>
            </li>
            <li>
              <Link to="/contact" activeStyle={activeStyle}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </StyledHeader>
    );
  }
}

export default Header;
