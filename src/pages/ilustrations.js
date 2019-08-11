import React, { Component } from 'react';
import Layout from '../utils/layout';
import IllustrationsWorks from '../components/Ilustrations/illustrationsWorks';
import { StyledBackground } from '../utils/background';

export default class Ilustrations extends Component {
  render() {
    return (
      <Layout>
        <IllustrationsWorks />
        {/* <StyledBackground /> */}
      </Layout>
    );
  }
}
