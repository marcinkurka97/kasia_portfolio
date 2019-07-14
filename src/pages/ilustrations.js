import React, { Component } from 'react';
import Layout from '../utils/layout';
import IllustrationsWorks from '../components/Ilustrations/illustrationsWorks';
import SmoothScroll from '../utils/smoothScroll';

export default class Ilustrations extends Component {
  render() {
    return (
      <Layout>
        <IllustrationsWorks />
        <SmoothScroll />
      </Layout>
    );
  }
}
