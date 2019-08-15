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

  div {
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
      width: 50%;
      height: 50px;
      background: #000;
      margin: 30px auto 0 auto;
      color: #fff;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 20px;
      border: none;
    }
  }

  ${media.tablet`
    width: 80vw;
    top: 57%;

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
        <div>
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
