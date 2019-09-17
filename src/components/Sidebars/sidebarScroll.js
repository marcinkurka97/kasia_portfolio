import React from 'react';
import styled, { keyframes } from 'styled-components';
import media from '../..//utils/media';

const slideIn = keyframes`
  0% {
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const StyledSidebarScroll = styled.div`
  position: fixed;
  top: 77%;
  right: -1%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  font-family: 'Open Sans', sans-serif;
  transform: rotate(-90deg);

  .btn {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: none;
    border: none;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    color: #000;
    font-weight: 700;
    transition: opacity 0.6s;
    animation: ${slideIn} 0.6s ease-in-out;

    span {
      font-size: 30px;
      transition: transform 0.6s;
    }
  }

  .btn-bot {
    span {
      padding-right: 20px;
    }
  }

  .btn-top {
    margin-bottom: 50px;
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
    if (c >= 0.4 * window.innerHeight) {
      document.querySelector('.btn-bot').style.display = 'none';
      document.querySelector('.btn-top').style.display = 'flex';
    }

    if (c <= 0.4 * window.innerHeight) {
      document.querySelector('.btn-bot').style.display = 'flex';
      document.querySelector('.btn-top').style.display = 'none';
    }

    if (document.body.clientWidth >= 768 && c >= 0.2 * window.innerHeight) {
      document.querySelector('#header-container').style.background =
        'rgba(255,255,255,0.8)';
    }
    if (document.body.clientWidth >= 768 && c <= 0.2 * window.innerHeight) {
      document.querySelector('#header-container').style.background = 'inherit';
    }
  };

  render() {
    return (
      <StyledSidebarScroll>
        <div className="container">
          <button className="btn btn-bot" onClick={this.scrollToBottom}>
            <span>&#8592;</span>scroll to discover more
          </button>

          <button className="btn btn-top" onClick={this.scrollToTop}>
            scroll to top<span>&#8594;</span>
          </button>
        </div>
      </StyledSidebarScroll>
    );
  }
}

export default SidebarScroll;
