/* src/app.js */

'use strict'
import viewportUnitsBuggyfill from 'viewport-units-buggyfill'
// import '@babel/polyfill';
import Debug from './debug/debug'
import Checks from './debug/checks'
// import Cursor from './cursor/cursor'
import Videos from './videos/videos'
import Slider from './slider'
import Tabs from './tabs'
import Accordion from './accordion'
import Reveal from './reveal'
import Sidebar from './sidebar'
import Parallax from './parallax'
import Gradient from './gradient'
import Api from './api/api'
import IFrame from './iframe'
import Loading from './loading'
// import Share from './share'
// import LazyLoad from './lazy-load/lazy-load'
// import Overlay from './overlay'

viewportUnitsBuggyfill.init()

const initFun = () => {
  new Loading().init()
  new Debug().init()
  new Checks().init()
  // new Overlay().init()
  new Slider().init()
  new Parallax().init()
  new Reveal().init()
  new Tabs().init()
  new Sidebar().init()
  new Accordion().init()
  new Gradient().init()
  new Api().init()
  new IFrame().init()
  new Videos().init()

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
