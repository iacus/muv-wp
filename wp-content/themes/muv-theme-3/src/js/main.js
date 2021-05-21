/* src/app.js */

'use strict'

import Debug from './debug/debug'
import Checks from './debug/checks'
// import Cursor from './cursor/cursor'
// import Videos from './videos/videos'
// import Slider from './slider'
// import Reveal from './reveal'
import Sidemenu from './sidemenu'
// import Share from './share'
// import LazyLoad from './lazy-load/lazy-load'
// import Overlay from './overlay'

const initFun = () => {
  new Debug().init()
  new Checks().init()
  // new Overlay().init()
  // new Slider().init()
  // new Reveal().init()
  new Sidemenu().init()
  // new Share().init()
  // new Cursor().init()
  // new Videos().init()
  // new LazyLoad().init()
}


function documentReady (fn) {
  if (document.readyState !== 'loading') {
    fn()
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn)
    console.log('Ready!')
  } else {
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState !== 'loading') {
        fn()
      }
    })
  }
}
documentReady(initFun)
