'use strict'


export default class Sidebar {
  constructor () {
    this.config = {

    }
    this.trigger = document.querySelector('.navbar-toggler'),
    this.body = document.body,
    this.content = document.querySelector('.main-content'),
    this.cross = document.querySelector('.cross')
    this.navItems = document.querySelectorAll('.nav-link--sidebar')
    this.sidebar = document.querySelector('.side-menu')
  }
   init () {

      if (this.sidebar) {
        this.trigger.addEventListener('click', () => {
           this.body.classList.add('open');
           this.sidebar.classList.remove('hidden')
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
