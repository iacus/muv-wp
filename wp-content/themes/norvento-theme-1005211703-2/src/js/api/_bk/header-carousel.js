'use strict'

import imagesLoaded from 'imagesloaded'
import Velocity from 'velocity-animate'
import Utils from '../../utils/utils'

export default class Carousel {
  constructor (config) {
    this.config = config
    this.utils = new Utils()
  }

  viewportHandler () {
    /*
    const matchCb = () => {
      const images = document.querySelector(this.config.carousel).querySelectorAll(this.config.image)
      const loadCb = () => {
        this.initCarousel()
      }
      imagesLoaded(images, loadCb)
    }
    this.utils.matchmediaHandler('MEDIUM', matchCb)
    */
    const images = document.querySelector(this.config.carousel).querySelectorAll(this.config.image)
    const loadCb = () => {
      this.initCarousel()
    }
    imagesLoaded(images, loadCb)
  }

  initCarousel () {
    const carousel = document.querySelector(this.config.carousel)
    const slides = carousel.querySelectorAll(this.config.slide)
    this.getCurrentSlide(slides)
  }

  getCurrentSlide (slides) {
    Array.prototype.forEach.call(slides, (slide) => {
      if (slide.classList.contains('is-active')) {
        const current = slide
        let next = slide.nextElementSibling

        if (next === null) {
          next = slides[0]
        }

        this.slideAnimation(current, next, slides)
      }
    })
  }

  slideAnimation (current, next, slides) {
    const image = current.querySelector(this.config.image)
    const nextImage = next.querySelector(this.config.image)

    nextImage.removeAttribute('style')
    next.removeAttribute('style')
    next.classList.add('is-next')

    image.classList.add('will-change')
    Velocity(image, {
      translateX: ['0%', '-2%']
    }, {
      duration: 4300,
      easing: 'easeInOutSine',
      complete: () => {
        image.classList.remove('will-change')
      }
    })

    Velocity(current, {
      opacity: 0
    }, {
      duration: 1000,
      delay: 4200,
      easing: 'easeOutSine',
      complete: () => {
        current.classList.remove('is-active')
        next.classList.add('is-active')
        next.classList.remove('is-next')
        this.getCurrentSlide(slides)
      }
    })
  }

  init () {
    this.viewportHandler()
  }
}
