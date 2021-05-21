'use strict'

export default class Loading {
  constructor () {
    this.config = {

    }

  }

  loading () {
    var loading = {
      start: function() {
        // window.scrollTo(0, 0);
        // document.body.insertAdjacentHTML('beforeend', '<div id="loading">LOADING</div>');
      },
      complete: function() {
        var loading = document.querySelector(".loader");
        loading.style.opacity = 0;
        setTimeout(function () {
          loading.style.display = 'none';
        }, 500);
      }
    };
    loading.start();
    document.addEventListener("readystatechange", function() {
      console.log(document.readyState);
      if (document.readyState === "complete") {
        loading.complete();
      }
    });
  }

    init () {

      // this.loading()

     }
}
