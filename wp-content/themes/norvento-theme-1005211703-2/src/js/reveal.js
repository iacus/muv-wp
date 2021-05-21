'use strict'

// import ScrollReveal from 'scrollreveal'

export default class Reveals {
  constructor() {
    this.config = {

    }
  }

  imagesReveal () {
    ScrollReveal().reveal('.reveal-static', {
      delay: 300,
      interval: 150,
      duration: 500,
      easing: 'ease-in-out',
    })

    ScrollReveal().reveal('.reveal-right', {
      delay: 300,
      interval: 150,
      distance: '-4rem',
      origin: 'right',
      duration: 1000,
      easing: 'ease-in-out',
    })

    ScrollReveal().reveal('.reveal-soft', {
      delay: 500,
      interval: 300,
      distance: '-1rem',
      duration: 1000,
      easing: 'ease-in-out',
      beforeReveal: function (el) {
        // Play videos on reveal
        // if (el.querySelector('.plyr')) {
        //   console.log(el.querySelector('.plyr'));
        //   el.querySelector('.plyr').player.play()
        // }
      }
    })

  }

  init() {
    this.imagesReveal()
  }
}
