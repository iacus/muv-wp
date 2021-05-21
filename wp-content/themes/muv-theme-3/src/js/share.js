'use strict'

export default class Share {
  constructor() {
    this.config = {

    }
    this.share = document.querySelector('.share')

  }

  shareTrigger () {
    this.share.addEventListener('click', () => {

        const shareWrapper = document.querySelector('.share-buttons')
        const openText = document.querySelector('.open')
        const closeText = document.querySelector('.close')

        const toggleShare = () => {
          shareWrapper.classList.toggle('open')
          this.share.classList.toggle('open')
        }

        toggleShare()

        this.shareWrapper.addEventListener('click', () => {
          toggleShare()
        })


    });


  }

  init() {
    this.shareTrigger()
  }
}
