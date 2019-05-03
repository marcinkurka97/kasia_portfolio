import React from 'react';
class SmoothScroll extends React.Component {
  scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(this.scrollToTop);
      window.scrollTo(0, c - c / 10);
    }
  };
  render() {
    return (
      <button className="back-to-top" onClick={this.scrollToTop}>
        <span className="arrow">↑</span>
        <span className="preserve-whitespace">Back to Top</span>
      </button>
    );
  }
}

export default SmoothScroll;
