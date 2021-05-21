'use strict'

export default class Parallax {
  constructor () {
    this.config = {

    }
    this.header = document.querySelector('.page-header--a'),
    this.body = document.body
  }

  headerParallax () {
    const headerImage = document.querySelector('.header-image');


    // setTimeout(function () {
    //     elems.forEach(function (elem, index) {
    //         elem.style.animation = "none";
    //     });
    // }, 1500);



    document.body.addEventListener('mousemove', function (e) {
        if (!e.currentTarget.dataset.triggered) {

                if (headerImage.getAttribute('style')) {
                    headerImage.style.transition = "all .5s";
                    headerImage.style.transform = "none";
                }
        }
        e.currentTarget.dataset.triggered = true;

        let width = window.innerWidth / 2;
        let mouseMoved2 = ((width - e.pageX) / 80);

        headerImage.style.transform = "translateX(" + mouseMoved2 + "px)";
    });

    document.body.addEventListener('mouseleave', function (e) {

            headerImage.style.transition = "all .5s 1000ms";
            headerImage.style.transform = "none";
    });

    document.body.addEventListener('mouseenter', function (e) {

            setTimeout(function () {
                headerImage.style.transition = "none";
            }, 500);

    });
  }

    init () {

        if (this.header) {

          this.headerParallax()

        }

     }
}
