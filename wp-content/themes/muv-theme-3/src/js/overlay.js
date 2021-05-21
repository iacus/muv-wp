'use strict'

export default class Overlay {
   constructor() {
      this.config = {

      }
   }
   init() {

      Pace.on('done', () => {
        document.querySelector('.overlay').classList.add('hide-overlay');
      })
   }
}
