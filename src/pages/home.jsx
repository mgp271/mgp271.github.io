import React, { Component } from 'react'
import Hero from '.././components/hero.jsx'
import HomeContent from '../components/home-content.jsx';
import TopSellers from '../components/top-sellers.jsx';
import RecentlyUpdated from '../components/recently-updated.jsx';

class Home extends Component {
  render () {
    return (
      <div>
        <Hero />
        <HomeContent />
        <TopSellers />
        <RecentlyUpdated />
      </div>
    )
  }
}

export default Home;