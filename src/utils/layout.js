import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../components/Header/headerv2';
import Sidebar from '../components/Sidebars/sidebarSocial';
import SidebarScroll from '../components/Sidebars/sidebarScroll';
import './style.css';

function Layout({ children }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const openHamburger = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
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
          <Header
            openHamburger={openHamburger}
            menuisOpen={menuIsOpen}
            siteTitle={data.site.siteMetadata.title}
          />
          <Sidebar openHamburger={openHamburger} menuisOpen={menuIsOpen} />
          <SidebarScroll />
          <div>
            <main>{children}</main>
          </div>
        </>
      )}
    />
  );
}
export default Layout;
