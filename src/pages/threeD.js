import React, { Component } from 'react';
import Layout from '../utils/layout';
import ThreeDWorks from '../components/ThreeD/threeDWorks';
import SmoothScroll from '../utils/smoothScroll';

export default class ThreeD extends Component {
  render() {
    return (
      <Layout>
        <ThreeDWorks />
        <SmoothScroll />
      </Layout>
    );
  }
}
