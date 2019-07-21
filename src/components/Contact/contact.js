import React from 'react';
import styled from 'styled-components';

const ContactPageContainer = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 800px;
  height: 55vh;
  font-family: 'Open Sans', sans-serif;
  background: #1d1d1d;
  color: #fff;
  padding: 20px;
  border-radius: 10px;

  h1 {
    font-size: 40px;
    font-weight: 700;
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
      border-bottom: 1px solid black;
      background: #fff;
      font-size: 24px;
      width: 200px;
      padding: 10px 20px;
      margin: 0 auto 20px auto;
      display: block;
      width: 80%;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;

      input:nth-child(1),
      input:nth-child(2) {
        display: inline-block;
        width: 35%;
        margin: 0 0 20px 0;
      }
    }

    textarea {
      margin: 0 auto;
      width: 80%;
      height: 100px;
      color: #1d1d1d;
      border: none;
      border-bottom: 1px solid black;
      background: #fff;
      font-size: 16px;
      padding: 10px 20px;
    }

    button {
      width: 50%;
      height: 50px;
      background: #fff;
      margin: 20px auto;
      color: #1d1d1d;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 20px;
    }
  }
`;

class Contact extends React.Component {
  render() {
    return (
      <ContactPageContainer>
        <h1>Contact</h1>
        <div>
          <div>
            <input type="text" placeholder="Surname" />
            <input type="text" placeholder="Forname" />
          </div>
          <input type="text" placeholder="Title" />
          <textarea placeholder="Write here" />
          <button onClick="" value="Submit">
            Submit
          </button>
        </div>
      </ContactPageContainer>
    );
  }
}

export default Contact;
