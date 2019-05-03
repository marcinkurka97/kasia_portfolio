import React, { Component } from 'react';
import Layout from '../components/layout';
import ThreeDWorks from '../components/threeDWorks';
import SmoothScroll from '../components/smoothScroll';

export default class ThreeD extends Component {
    render() {
        return (    
            <Layout>
                <ThreeDWorks />
                <SmoothScroll />
            </Layout>
            )}
}
