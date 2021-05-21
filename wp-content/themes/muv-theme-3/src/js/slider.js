'use strict'

import 'swiper/swiper-bundle.css';

// core version + navigation, pagination modules:
import Swiper, { Navigation,Autoplay } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation,Autoplay]);

export default class Videos {
  constructor () {
    this.config = {

  }

  }

  sliderHero () {
    var mySwiper = new Swiper('.hero-slider', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      spaceBetween: 0,
      loop: true,
      // Disable preloading of all images
      preloadImages: false,
      // Enable lazy loading
      lazy: {
        loadPrevNext: true,
      },
      speed: 2500,
      grabCursor: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      }
    })
  }

  slider () {
    var mySwiper = new Swiper('.slider-arrows', {
      // Optional parameters
      direction: 'horizontal',
      grabCursor: true,
      spaceBetween: 200,
      loop: true,
      // Disable preloading of all images
      preloadImages: false,
      // Enable lazy loading
      lazy: {
        loadPrevNext: true,
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    })
  }

  init () {
    this.sliderHero()
          this.slider()
    document.addEventListener("DOMContentLoaded", function(event) {
      console.log("DOM fully loaded and parsed");

    });
  }
}
