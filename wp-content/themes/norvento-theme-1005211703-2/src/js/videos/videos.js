'use strict'

import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import Utils from '../utils/utils.js'

export default class Videos {
  constructor () {
    this.config = {
      videos: "[data-plyr-embed-id]"
  }
  this.players = []
  this.Utils = new Utils
  }

  parseVideos(){

    const players = Array.from(document.querySelectorAll(this.config.videos)).map(p => {
      if (p.getAttribute('data-plyr-embed-id') !== '') {
        let plyr = new Plyr(p,
          {
                autoplay : false,
                autopause: true,
                muted: false,
                loop: { active: true },
                controls: ['play','progress','volume','mute','fullscreen']
          })
          p.player = plyr
          const parent = this.Utils.getClosest(p,'.plyr')
          parent.player = plyr
      }

    });

  }

  init () {
    this.parseVideos()
  }
}
