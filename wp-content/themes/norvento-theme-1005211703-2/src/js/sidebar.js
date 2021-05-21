'use strict'

import Utils from './utils/utils.js'
import Headroom from "headroom.js";

export default class Sidebar {
  constructor () {
    this.config = {

    }
    this.triggers = document.querySelectorAll('.sidebar-toggler'),
    this.footer = document.querySelector('footer')
    this.body = document.body,
    this.content = document.querySelector('.ly-main'),
    this.cross = document.querySelector('.crossMenu')
    this.navItems = document.querySelectorAll('.nav-link--sidebar')
    this.sidebar = document.querySelector('.side-menu')
    this.headerB = document.querySelector('.header-full-image')
    this.navbar = document.querySelector('.navbar')
    this.darktheme = document.querySelector('.dark-theme')
    this.headroom = new Headroom(document.querySelector('.navbar'));
    this.utils = new Utils()
  }
    showSubMenu () {
      const items = document.querySelectorAll('.nav-link--drop')
      items.forEach((item, i) => {

        item.addEventListener('click',(e) => {
          let current = e.target || e.srcElement
          let link = this.utils.getSiblings(current)
          console.log(link);
          if (!link[0].classList.contains('current-menu-parent')) {
            e.preventDefault()
            this.removeClassArray('.nav-link--drop','current-menu-parent')
            this.removeClassArray('.nav-menu-drop','current-menu-parent')
            link[0].classList.add('current-menu-parent')
            current.classList.add('current-menu-parent')
          } else {
            // setteamos el link a la página y swup nos envia directamente
            link[0].classList.remove('current-menu-parent')
            current.classList.remove('current-menu-parent')
          }

        })
      })
    }

    removeClassArray (target,classToRemove) {
      const items = document.querySelectorAll(target)
      items.forEach((item, i) => {
        console.log (item)
        item.classList.remove(classToRemove)
      })
    }



    headerPosHandler () {
      const checkScroll = (e) => {

        let scrollPos = window.pageYOffset
        if (scrollPos > window.innerHeight - this.navbar.offsetHeight / 2) {
          this.body.classList.remove('navbar-dark')
        } else {
          this.body.classList.add('navbar-dark')
        }
      }
      checkScroll()
      window.addEventListener('scroll', this.utils.debounce(checkScroll,5));
    }

    headroomHandler () {

      if (window.innerWidth < 768) {
        this.headroom.unfreeze()
      } else {
        this.headroom.freeze()
      }
    }

    sidebarPosHandler () {

      const checkScroll = (e) => {

        let scrollPos = window.pageYOffset - window.innerHeight

        if (scrollPos > window.innerHeight / 2 && window.innerWidth > 768) {
          this.body.classList.add('hide-top-brand')
        } else {
          this.body.classList.remove('hide-top-brand')
        }
      }

        checkScroll()
        window.addEventListener('scroll', this.utils.debounce(checkScroll,5));

    }

    init () {

        this.headroom.init()
        const resizeFunctions = () => {
          this.headroomHandler()
          this.sidebarPosHandler()
        }
        resizeFunctions()

        window.addEventListener('resize',resizeFunctions)

        if (this.headerB && !this.darktheme) {
          this.headerPosHandler()
        }

        if (this.sidebar) {

          this.showSubMenu()

          this.triggers.forEach((item, i) => {
            item.addEventListener('click', () => {
               this.body.classList.add('open');
               this.sidebar.classList.remove('hidden')
            });
          });

          this.content.addEventListener('click', () => {
             this.body.classList.remove('open');
          });

          this.cross.addEventListener('click', () => {
             this.body.classList.remove('open');
          });

          // this.navItems.forEach((item, i) => {
          //   item.addEventListener('click', () => {
          //      this.body.classList.remove('open');
          //   });
          // });
        }


     }
}
