'use strict'

import ScrollReveal from 'scrollreveal'
import Utils from './utils/utils'

export default class Reveals {
  constructor() {
    this.config = {

    }
    this.home = document.querySelector('.home')
    this.share = document.querySelector('.share')
    this.gotop = document.querySelector('.gotop')
    this.utils = new Utils()
  }

  headerCheck () {

    const top = () => {
      this.share.style.color = 'white'
    }
    const scrolled = () => {
      this.share.style.color = '#343a40'
    }
    ScrollReveal().reveal('.hero', {
      reset: true,
      opacity: 1,
      viewFactor: 0.5,
      delay: 0,
      afterReveal: top,
      beforeReset: scrolled
    })
  }

  imagesReveal () {
    ScrollReveal().reveal('.from-top', {
      delay: 400,
      interval: 300,
      cleanup: true,
      distance: '-1rem',
      duration: 800,
      easing: 'ease-in-out',
    })
  }

  showGotop () {
    const top = () => {

      if (window.pageYOffset > 2000) {

        if (this.gotop.classList.contains('hidden')) {
          this.gotop.classList.add('slide-top')
          this.gotop.classList.remove('hidden')
        }

      } else {
        this.gotop.classList.remove('slide-top')
        this.gotop.classList.add('hidden')

      }

    }

    window.addEventListener('scroll', top)

  }

  init() {
    this.headerCheck()
    this.showGotop()
    // this.imagesReveal()
    document.addEventListener("DOMContentLoaded", function(event) {
      console.log("DOM fully loaded and parsed");

    });
  }
}
