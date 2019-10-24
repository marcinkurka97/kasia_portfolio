import React from 'react';
import styled from 'styled-components';
import media from '../..//utils/media';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import StyledBackground from '../../utils/background';
import tlo1 from '../../images/skosP.png';

const BackgroundPhoto = styled(StyledBackground)`
  background: url(${tlo1});
  position: absolute;
  background-repeat: repeat;
  background-size: cover;
  top: 21%;
  left: 50%;
  height: 68%;
  width: 460px;

  ${media.tablet`
    top: 27%;
    left: 5%;
    height: 60%;
    width: 80%;
  `}
`;

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  subject: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  content: Yup.string()
    .min(5, 'Too Short!')
    .required('Required'),
});

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
  background: #e8eaec;

  h1 {
    font-size: 40px;
    font-weight: 100;
    text-transform: uppercase;
    text-align: center;
  }

  form {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 10px 0 0 0;

    input {
      color: black;
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
      margin: 0 auto;
      width: 80%;
      color: red;
      font-family: 'Open Sans', sans-serif;
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
      <>
        <BackgroundPhoto />
        <ContactPageContainer>
          <h1>Contact</h1>
          <Formik
            initialValues={{ email: '', subject: '', content: '' }}
            validate={values => {
              let errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) => {
              SignupSchema.isValid({
                email: values.email,
                subject: values.subject,
                content: values.content,
              })
                .then(function() {
                  axios({
                    method: 'post',
                    url:
                      'https://cors-anywhere.herokuapp.com/https://o30d2yrza3.execute-api.eu-west-1.amazonaws.com/default/portfolio_lambda',
                    data: {
                      email: values.email,
                      subject: values.subject,
                      content: values.content,
                    },
                  })
                    .then(function() {
                      resetForm();
                      alert('Message sent');
                    })
                    .catch(function() {
                      alert('Error');
                    });
                })
                .catch(function() {
                  alert('Fill in all the fields');
                });
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Field name="email" type="email" placeholder="Email" />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
                <Field name="subject" placeholder="Subject" />
                {errors.subject && touched.subject ? (
                  <div>{errors.subject}</div>
                ) : null}
                <Field name="content" placeholder="Message" />
                {errors.content && touched.content ? (
                  <div>{errors.content}</div>
                ) : null}
                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </ContactPageContainer>
      </>
    );
  }
}

export default Contact;
