import React, { Component, Fragment } from 'react';
import LazyLoad from 'react-lazyload';
import image1 from '../site-assets/images/fortnite.jpg';
import TopSellers from '../components/top-sellers.jsx';

const heroBg = {
  backgroundImage: `url(${image1})`
};

class StoreContent extends Component {

  render () {

      return (
        <Fragment>
          <div className="store-content">
          <div className="hero-wrapper">
            <LazyLoad><div className="heroBg" style={ heroBg }></div></LazyLoad>
          </div>
            <div className="inner">
              <div className="content">
                  <h2>Store</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
          <TopSellers />
        </Fragment>
    )

  }
}

export default StoreContent;