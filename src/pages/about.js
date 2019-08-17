import React, { Component } from 'react';
import Layout from '../utils/layout';
import AboutMeComponent from '../components/AboutMe/aboutMe';

export default class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <AboutMeComponent />
      </Layout>
    );
  }
}
