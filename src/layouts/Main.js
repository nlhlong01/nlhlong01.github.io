import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';

const Main = (props) => (
  <>
    <Analytics />
    <ScrollToTop />
    <Helmet titleTemplate="%s | Long Nguyen" defaultTitle="Long Nguyen">
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>
    <div id="wrapper">
      <Navigation />
      <div id="main">
        {props.children}
      </div>
      {props.fullPage ? null : <SideBar />}
    </div>
  </>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Long Nguyen's personal website. Based on the template developed by Michael D'Angelo",
};

export default Main;
