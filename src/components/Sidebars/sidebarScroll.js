import React from 'react';
import styled, { keyframes } from 'styled-components';
import media from '../..//utils/media';

const slideIn = keyframes`
  0% {
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    transform: rotate(-90deg);
    opacity: 1;
  }
`;

const StyledSidebarScroll = styled.div`
  .btn {
    position: fixed;
    transform: rotate(-90deg);
    right: -80px;
    top: 80vh;
    display: flex;
    justify-content: space-evenly;
    background: none;
    border: none;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    color: #000;
    font-weight: 700;
    display: flex;
    align-items: center;
    transition: opacity 0.6s;
    padding: 0 50px;
    animation: ${slideIn} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    span {
      font-size: 30px;
      transition: transform 0.6s;
    }
  }

  .btn-top {
    right: -50px;
    top: 84vh;
  }

  .btn-bot {
    span {
      padding-right: 20px;
    }
  }

  .btn-top {
    span {
      padding-left: 20px;
    }
  }

  .btn:hover {
    opacity: 0.6;
  }

  .btn-bot:hover > span {
    transform: translateX(-10px);
    transition: transform 0.6s;
  }

  .btn-top:hover > span {
    transform: translateX(10px);
    transition: transform 0.6s;
  }

  .btn-top {
    display: none;
  }

  ${media.tablet`
    display: none;
  `}
`;

class SidebarScroll extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  scrollToBottom = () => {
    window.scroll({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  handleScroll = e => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0.4 * window.innerHeight) {
      document.querySelector('.btn-bot').style.display = 'none';
      document.querySelector('.btn-top').style.display = 'flex';
    }

    if (c < 0.4 * window.innerHeight) {
      document.querySelector('.btn-bot').style.display = 'flex';
      document.querySelector('.btn-top').style.display = 'none';
    }
  };

  render() {
    return (
      <StyledSidebarScroll>
        <button className="btn btn-bot" onClick={this.scrollToBottom}>
          <span>&#8592;</span>scroll to discover more
        </button>

        <button className="btn btn-top" onClick={this.scrollToTop}>
          scroll to top<span>&#8594;</span>
        </button>
      </StyledSidebarScroll>
    );
  }
}

export default SidebarScroll;
