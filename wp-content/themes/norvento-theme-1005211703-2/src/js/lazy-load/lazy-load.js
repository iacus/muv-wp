'use strict'

export default class LazyLoad {
  constructor() {
    this.config = {
      lazyClass: '.lazyload'
    }

  }

  preloadContent () {
    document.querySelectorAll(this.config.lazyClass).forEach(img => {
      img.src = img.getAttribute('data-src')
    });
  }

  lazyVideos () {
    document.addEventListener("DOMContentLoaded", function() {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

    if ("IntersectionObserver" in window) {
      var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(video) {
          if (video.isIntersecting) {
            for (var source in video.target.children) {
              var videoSource = video.target.children[source];
              if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                videoSource.src = videoSource.dataset.src;
              }
            }

            video.target.load();
            video.target.classList.remove("lazy");
            lazyVideoObserver.unobserve(video.target);
          }
        });
      });

      lazyVideos.forEach(function(lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
      });
    }
  });
  }

  lazyObserver () {
    // create config object: rootMargin and threshold
    // are two properties exposed by the interface
    const config = {
      rootMargin: '0px 0px 50px 0px',
      threshold: 0
    };

    // register the config object with an instance
    // of intersectionObserver
    let observer = new IntersectionObserver((entries, self) => {
      // iterate over each entry
      entries.forEach(entry => {
        // process just the images that are intersecting.
        // isIntersecting is a property exposed by the interface
        if(entry.isIntersecting) {
          // custom function that copies the path to the img
          // from data-src to src
          this.preloadContent(entry.target);

          // // the image is now in place, stop watching
          self.unobserve(entry.target);
        }
      });
    }, config);

    const imgs = document.querySelectorAll(this.config.lazyClass);
    imgs.forEach(img => {
      observer.observe(img);
      console.log(img);
    });
  }

  init() {
    // console.log('lazy load init');
    // setTimeout( () => {
    //   this.preloadContent()
    // }, 500);
    this.lazyVideos()


  }
}
