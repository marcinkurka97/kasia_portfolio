import React from 'react';
import styled from 'styled-components';
import media from '../..//utils/media';

const ContactPageContainer = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  width: 800px;
  min-height: 55vh;
  font-family: 'Open Sans', sans-serif;
  color: #000;
  padding: 30px 20px;
  border: 1px solid black;

  h1 {
    font-size: 40px;
    font-weight: 100;
    text-transform: uppercase;
    text-align: center;
  }

  .contact-container {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 10px 0 0 0;

    input {
      color: #1d1d1d;
      border: none;
      border-bottom: 0.5px solid black;
      background: transparent;
      font-size: 24px;
      width: 200px;
      padding: 10px 0;
      margin: 0 auto 20px auto;
      display: block;
      width: 80%;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;

      input:nth-child(1) {
        display: inline-block;
        width: 80%;
        margin: 0 0 20px 0;
      }
    }

    textarea {
      font-family: 'Open Sans', sans-serif;
      margin: 0 auto;
      width: 80%;
      height: 125px;
      color: #1d1d1d;
      border: none;
      border-bottom: 1px solid black;
      background: transparent;
      font-size: 16px;
      padding: 10px 0;
    }

    button {
      position: relative;
      background: none;
      border: none;
      padding: 10px 25px;
      color: #000;
      font-weight: 500;
      font-size: 20px;
      margin: 30px auto 0 auto;
      width: 150px;
    }

    button::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 7px;
      right: 6px;
      background-color: #b6b6b6;
      z-index: -1;
      transition: transform 0.15s ease-out 0s;
    }

    button::after {
      content: '';
      left: 0px;
      top: 0px;
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

    button:hover {
      cursor: pointer;

      &:before {
        transform: translate(7px, -6px);
      }

      &:after {
        transform: translate(-7px, 6px);
      }
    }
  }

  ${media.tablet`
    width: 80vw;
    top: 60%;

    h1 {
      font-size: 30px;
    }

    div{
        input {
          font-size: 16px;
        }
    }
  `}
`;

class Contact extends React.Component {
  render() {
    return (
      <ContactPageContainer>
        <h1>Contact</h1>
        <div className="contact-container">
          <div>
            <input type="text" placeholder="Name" />
          </div>
          <input type="text" placeholder="Title" />
          <textarea placeholder="Message" />
          <button onClick="" value="Submit">
            Submit
          </button>
        </div>
      </ContactPageContainer>
    );
  }
}

export default Contact;
