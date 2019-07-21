import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../components/Header/headerv2';
import Sidebar from '../components/Sidebars/sidebarSocial';
import SidebarScroll from '../components/Sidebars/sidebarScroll';
import './style.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Sidebar />
        <SidebarScroll />
        <div>
          <main>{children}</main>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
