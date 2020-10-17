import React, { Component } from 'react';
import Swiper2 from './swipers/swiper2';

class RecentlyUpdated extends Component {

  render () {
    return (
      <div className="recently-updated">
          <div className="inner">
          <h3>Recently Updated</h3>
            <Swiper2 />
          </div>
      </div>
    )
  }
}

export default RecentlyUpdated;