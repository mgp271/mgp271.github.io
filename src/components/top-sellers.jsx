import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import api from '../api/api.js';

class TopSellers extends Component {

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
      <div className="top-sellers">
          <div className="inner">
          <h3>Top Sellers</h3>
              <div className="grid">
                {!isLoading ? (
                  games.slice(0, 9).map((game) => {
                  const { id, background_image, name, released } = game;
                    return (
                    <div className="box" key={id}>
                      <LazyLoad>
                        <div className="block-image" style={{ backgroundImage: `url(${background_image})` }}></div>
                      </LazyLoad>
                        <div className="content">
                          <div className="title">
                            {name}
                          </div>
                          <div className="price">
                            {released}
                          </div>
                        </div>
                    </div>
                    );
                  })
                ) : (
                  <div className="spinner"></div>
                )}
              </div>
          </div>
      </div>
    )
  }
}

export default TopSellers;