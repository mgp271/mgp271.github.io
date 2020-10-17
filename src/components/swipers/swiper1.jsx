import React, { Component } from 'react';
import SwiperCore, { Pagination, Autoplay, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import api from '../../api/api';

import 'swiper/swiper.scss';
import 'swiper/components/lazy/lazy.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay]);
SwiperCore.use([Lazy]);

const swiperParams = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
    clickable: true
    },
    preloadImages: false,
    lazy: true,
}

class Swiper1 extends Component {

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
        <div className="hero-swiper">
            {!isLoading ? (                    
            <Swiper className="swiper" {...swiperParams}>
                {games.slice(0, 4).map((game) => {
                const { id, background_image } = game;
                    return (
                        <SwiperSlide className="slide swiper-lazy" key={id} data-background={background_image}>
                            <div className="content-wrapper">
                                <div className="content">
                                    <div className="inner">
                                        <h3>This is a Swiper</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-lazy-preloader swiper-lazy-preloader-green"></div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            ) : (
                <div className="spinner"></div>
            )}
        </div>
    )
  }
}

export default Swiper1;