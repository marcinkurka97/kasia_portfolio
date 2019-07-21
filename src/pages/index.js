import React, { Component } from 'react';
import Layout from '../utils/layout';
import LandingPageComponent from '../components/LandingPage/landingPage';

export default class LandingPage extends Component {
  render() {
    return (
      <Layout>
        <LandingPageComponent />
      </Layout>
    );
  }
}
