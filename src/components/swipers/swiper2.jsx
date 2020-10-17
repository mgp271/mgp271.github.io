import React, { Component } from 'react';
import SwiperCore, { Navigation, Autoplay, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import api from '../../api/api';

import 'swiper/swiper.scss';
import 'swiper/components/lazy/lazy.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);
SwiperCore.use([Lazy]);

const swiperParams = {
  slidesPerView: 4,
  spaceBetween: 15,
  preloadImages: false,
  lazy: true,
  loop: true,
  autoplay: {
      delay: 5000,
      disableOnInteraction: false
  },
  navigation: {
    prevEl: '#js-prev1',
    nextEl: '#js-next1',
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    }
  },
}

class Swiper2 extends Component {

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
        <div className="recently-swiper">
        {!isLoading ? (                    
          <Swiper className="swiper swiper--2" {...swiperParams}>
              {games.map((game) => {
              const { id, background_image, name } = game;
                  return (
                      <SwiperSlide className="slide swiper-lazy" key={id} data-background={background_image}>
                        <div className="description-wrapper">
                          <div className="description-inner">
                            <h3>{name}</h3>
                          </div>
                          <div className="swiper-lazy-preloader swiper-lazy-preloader-green"></div>
                        </div>
                      </SwiperSlide>
                  )
              })}
              <div id="js-prev1" className="swiper-button-prev"><span className="icon-prev"></span></div>
              <div id="js-next1" className="swiper-button-next"><span className="icon-next"></span></div>
          </Swiper>
          ) : (
              <div className="spinner"></div>
          )}
      </div>
    )
  }
}

export default Swiper2;