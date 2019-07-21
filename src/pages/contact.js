import React, { Component } from 'react';
import Layout from '../utils/layout';
import ContactComponent from '../components/Contact/contact';

export default class ContactPage extends Component {
  render() {
    return (
      <Layout>
        <ContactComponent />
      </Layout>
    );
  }
}
