'use strict'

import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

export default class Videos {
  constructor () {
    this.config = {
      videos: ".js-player"
  }
  this.videos = document.querySelectorAll(this.config.videos)
  this.players = []
  }

  parseVideos(){

    const players = Array.from(document.querySelectorAll('#player')).map(p => {
      let plyr = new Plyr(p,
        {
              autoplay : false,
              autopause: true,
              muted: false,
              loop: { active: false },
              controls: ['play','volume','mute']
        })
        p.player = plyr
    });

  }

  init () {
    this.parseVideos()
    // this.mouseHandler()
    // this.closeHandler()
  }
}
