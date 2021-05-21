'use strict'

import 'swiper/swiper-bundle.css';

// core version + navigation, pagination modules:
import {Swiper, Navigation,EffectFade,Lazy,Parallax,Autoplay } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation,EffectFade,Lazy,Parallax,Autoplay]);

export default class Videos {
  constructor () {
    this.config = {

  }

  }

  sliderHistory () {
    var mySwiper = new Swiper('.slider-history', {
      // Optional parameters
      direction: 'horizontal',
      loop: false,
      spaceBetween: 0,
      slidesPerView: 'auto',
      grabCursor: true,
    })
  }

  sliderGallery () {
    var mySwiper = new Swiper('.slider-gallery', {
      // Optional parameters
      direction: 'horizontal',
      spaceBetween: 20,
      slidesPerView: 1.5,
      loop: true,
      grabCursor: true,
      breakpoints: {
        320: {
          spaceBetween: 20,
          // slidesPerView: 1.5
          slidesPerView: 'auto'
        },
        480: {
          spaceBetween: 30,
          slidesPerView: 'auto'
        },
        700: {
          spaceBetween: 60,
          slidesPerView: 'auto'
        },
        1000: {
          spaceBetween: 100,
          slidesPerView: 'auto'
        },
        1500: {
          spaceBetween: 150,
          slidesPerView: 'auto'
        },
      }
    })
  }

  sliderArrows () {
    var mySwiper = new Swiper('.slider-arrows', {
      // Optional parameters
      grabCursor: true,
      loop: true,
      effect: 'fade',
      autoHeight: true,
      fadeEffect: {
        crossFade: true
      },
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

  sliderFull () {
    var mySwiper = new Swiper('.slider-full', {
      // Optional parameters
      grabCursor: true,
      loop: true,
      effect: 'fade',
      parallax: true,
      speed: 2500,
      autoplay: {
        delay: 4000,
        disableOnInteraction: true,
      },
      // autoHeight: true,
      fadeEffect: {
        crossFade: true
      },
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
    this.sliderHistory()
    this.sliderGallery()
    this.sliderArrows()
    this.sliderFull()
    // setTimeout( () => {
    //   this.sliderHistory()
    //   this.sliderGallery()
    //   this.sliderArrows()
    // }, 300);


  }
}
