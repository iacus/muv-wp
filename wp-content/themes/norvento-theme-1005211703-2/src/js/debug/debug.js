'use strict'

export default class Debug {
  constructor () {
    this.config = {
      DEBUG: true
    }
  }
  debugControl () {
    if (!this.config.DEBUG) {
      this.addCredits()
      if (!window.console) window.console = {}
      var methods = ['log', 'debug', 'warn', 'info']
      for (var i = 0; i < methods.length; i++) {
        console[methods[i]] = function () {}
      }
    }
  }
  addCredits () {
    console.log('\n\n Design and Code by Novagarda + Iago Barreiro', '\n\n')
  }
  init () {
    this.debugControl()
  }
}
