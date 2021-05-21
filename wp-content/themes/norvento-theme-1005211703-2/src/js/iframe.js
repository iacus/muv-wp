'use strict'

export default class IFrame {
  constructor () {
    this.config = {

  }
    this.itemsGroups = document.querySelectorAll('iframe')
  }

  init () {

    if (this.itemsGroups.length > 0) {
      console.log('iframe!');
      this.itemsGroups.forEach((item, i) => {
        console.log(item);

        item.contentDocument.addEventListener('wheel', event => {
          console.log('weeel')
              item.dispatchEvent(new WheelEvent('wheel', event))
        }

        );
        // item.contentWindow.document.onmousewheel=function(event){
        //     event.preventDefault();
        // };
      });

    }

  }
}
