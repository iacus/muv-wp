'use strict'


export default class Sidemenu {
  constructor () {
    this.config = {

    }
    this.trigger = document.querySelector('.navbar-toggler'),
    this.body = document.body,
    this.content = document.querySelector('main'),
    this.cross = document.querySelector('.cross')
    this.navItems = document.querySelectorAll('.nav-link--sidemenu')
    this.sidemenu = document.querySelector('.side-menu')
  }
   init () {

      if (this.sidemenu) {
        this.trigger.addEventListener('click', () => {
           this.body.classList.add('open');
           this.sidemenu.classList.remove('hidden')
        });

        this.content.addEventListener('click', () => {
           this.body.classList.remove('open');
        });

        this.cross.addEventListener('click', () => {
           this.body.classList.remove('open');
        });

        this.navItems.forEach((item, i) => {
          item.addEventListener('click', () => {
             this.body.classList.remove('open');
          });
        });
      }

   }
}
