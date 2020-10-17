import React, { Component } from 'react';
import { Link } from '@reach/router';
import LazyLoad from 'react-lazyload';
import api from '../api/api.js';

class HomeContent extends Component {

  constructor(props) {
    super(props)
    this.state = {
        isLoading: true,
        games: [],
        error: null
    }
  }

  componentDidMount() {
    this.fetchGames();
  }

  fetchGames() {
    api.getData()
    .then(response => response.json())
    .then(data =>
        this.setState({
        games: data.results,
        isLoading: false
        })
    )
    .catch(error => this.setState({error, isLoading: false }));
  }

  render () {

    const { games, isLoading } = this.state;

      return (
        <div className="home-content">
          <div className="inner">
            <div className="featured-products">
            {!isLoading ? (
              games.map(game => {
                const { id, background_image, name } = game;
                return (
                  id === 28 ? <div key={id} className="block"><LazyLoad><div className="block-inner" style={{ backgroundImage: `url(${background_image})` }}><div className="inner"><span className="title">{name}</span></div></div></LazyLoad></div> : null ||
                  id === 1030 ? <div key={id} className="block"><LazyLoad><div className="block-inner" style={{ backgroundImage: `url(${background_image})` }}><div className="inner"><span className="title">{name}</span></div></div></LazyLoad></div> : null ||
                  id === 2454 ? <div key={id} className="block"><LazyLoad><div className="block-inner" style={{ backgroundImage: `url(${background_image})` }}><div className="inner"><span className="title">{name}</span></div></div></LazyLoad></div> : null ||
                  id === 5679 ? <div key={id} className="block"><LazyLoad><div className="block-inner" style={{ backgroundImage: `url(${background_image})` }}><div className="inner"><span className="title">{name}</span></div></div></LazyLoad></div> : null ||
                  id === 12020 ? <div key={id} className="block"><LazyLoad><div className="block-inner" style={{ backgroundImage: `url(${background_image})` }}><div className="inner"><span className="title">{name}</span></div></div></LazyLoad></div> : null
                );
              })
            ) : (
              <div className="spinner"></div>
            )}
            </div>

            <div className="content">
                <h2>Free Games</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Link className="btn" to={`${process.env.PUBLIC_URL}/store`}>
                    <button className="btn-primary">Search</button>
                </Link>
            </div>
        </div>
      </div>
    )

  }
}

export default HomeContent;