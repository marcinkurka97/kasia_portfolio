import React, { Component } from 'react';
import Layout from '../utils/layout';
import SchoolWorks from '../components/School/schoolWorks';

export default class School extends Component {
  render() {
    return (
      <Layout>
        <SchoolWorks />
      </Layout>
    );
  }
}
