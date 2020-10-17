import React, { Component, Fragment } from 'react';
import { Link } from '@reach/router';
import LazyLoad from 'react-lazyload';
import image1 from '../site-assets/images/ghostrunner.jpg';
import RecentlyUpdated from '../components/recently-updated.jsx';

const aboutBg = {
  backgroundImage: `url(${image1})`
};

class AboutContent extends Component {

  render () {

      return (
        <Fragment>
        <div className="about-content">
          <div className="inner">
            <div className="content">
              <div className="block-wrapper">
                <LazyLoad><div className="aboutBg" style={ aboutBg }></div></LazyLoad>
              </div>
              <div className="content-right">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Link className="btn" to={`${process.env.PUBLIC_URL}/store`}>
                    <button className="btn-primary">Search</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="about-updated">
          <RecentlyUpdated />
        </div>
        </Fragment>
    )

  }
}

export default AboutContent;