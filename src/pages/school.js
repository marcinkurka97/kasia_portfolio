import React, { Component } from 'react';
import Layout from '../components/layout';
import SchoolWorks from '../components/schoolWorks';
import SmoothScroll from '../components/smoothScroll';

export default class School extends Component {
    render() {
        // Map po calym obiekcie z filtrem Subject == cos
        return (    
            <Layout>
                <SchoolWorks />
                <SmoothScroll />
            </Layout>
            )}
}
