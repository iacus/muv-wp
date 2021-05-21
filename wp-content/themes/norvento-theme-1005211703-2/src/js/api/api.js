'use strict'

// import { XMLHttpRequest } from 'w3c-xmlhttprequest';

export default class Api {
  constructor () {
    this.config = {
      frecuency: 1000,
      oldUrl: 'https://cine.norvento.com:9443/api/energia',
      url: 'https://cine.norvento.com:9443/api/energy',
  }
    this.dataWrapper = document.querySelector('.dataWrapper')
    this.dataButtons = document.querySelectorAll('.button-data')
    this.closeButton = document.querySelector('.crossData')
    this.clockEl = document.querySelector(".clock")
    this.body = document.querySelector('body')
    this.headerImage = document.querySelector('.header-image')
    this.date = new Date();
    // this.date = new Date('December 17, 1995 22:24:00');
  }

  api () {
    var makeRequest = () => {

    fetch(this.config.url, {
      method: 'get',
      dataType: 'jsonp',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then((response) =>
      {
        return response.json() // << This is the problem
      })
    .then((responseData) => { // responseData = undefined
       // addTestToPage("from the server : "+responseData.title);
       // console.log(responseData);
       this.printData(responseData)
     })
  	.catch(function(err) {
        console.log(err);
    })
  }

  function addTestToPage(textToAdd){
    var para = document.createElement("p");
    var node = document.createTextNode(textToAdd);
    para.appendChild(node);

    var element = document.getElementsByTagName("body")[0];
    element.appendChild(para);
  }

  makeRequest();
  }

  printData (dataOrigen) {
    let data = Object.entries(dataOrigen);
    // console.log(data);

    let print = ""

    data.map((item,i) => {

      if (typeof item[1] == 'object') {
        print += '<div class="tableGroup tableGroup-' + i + '">'
        print += '<h3>' + item[1].nombre + '</h3>'
        print += '<table class="tableTec tableData text-table"><tbody>'

        Object.entries(item[1]).forEach((subitem, i) => {

          if (subitem[1].nombre != undefined) {
            print += traverse (subitem[1])
          }

        });

        print += '</tbody></table></div>'
        return print
      }

    })

    this.dataWrapper.innerHTML =  print

    function traverse (jsonObj) {
      let print = ""
      // print += '<tr>'

      if( jsonObj !== null && typeof jsonObj == "object" ) {

          Object.entries(jsonObj).forEach(([key, value]) => {

              // key is either an array index or object key

              if (typeof value == "object") {
                print += '<tr class="' + key +'">'
                print += '<td class="' + key +'">'
                print += subTraverse(value)
                print += '</td>'
                print += '</tr>'
              } else {
                // print += '<tr class="' + key +'">'
                print += '<td class="' + key +'">'
                print += value
                print += '</td>'
                // print += '</tr>'
              }

          });

      }

      return print
    }

    function subTraverse (jsonObj) {
      let print = ""
      print += '<ul class="il ' + jsonObj.nombre + '">'

      if( jsonObj !== null && typeof jsonObj == "object" ) {

          Object.entries(jsonObj).forEach(([key, value],i) => {
              // key is either an array index or object key
              if (typeof value == "object") {
                print += '<li class="subil ' + key + ' index-' + i +'">'
                print += subTraverse(value)
                print += '</li>'
              } else {
                print += '<li class="value ' + key +'">'
                print += value
                print += '</li>'
              }

          });

      }

      print += '</ul>'

      return print
    }
  }

  loadImage(url) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.addEventListener('load', e => resolve(img));
      img.addEventListener('error', () => {
        reject(new Error(`Failed to load image's URL: ${url}`));
      });
      img.src = url;
    });
  }

  showHeaderImage (item) {
    const images = document.querySelectorAll('.header-image picture')
    const img = images[item].getAttribute('data-src')
    console.log(img);
    this.loadImage(img)
    .then(img => {
      const child = images[item].appendChild(img)
      child.setAttribute('data-srcset',images[item].getAttribute('data-srcset'))
    })
    .catch(error => console.error(error));
  }

  checkTimeforImage () {

      var date = this.date
      var h = date.getHours(); // 0 - 23
      console.log(h);
      if (h >= 8 && h < 13) {
        console.log('mañana');
        this.showHeaderImage(0)
      } else if (h >= 13 && h < 20) {
        console.log('tarde');
        this.showHeaderImage(1)
      } else {
        console.log('noche');
        this.showHeaderImage(2)
      }

  }

  moveClockandDate () {

    const clock = () => {
      var date = new Date()
      var dd = String(date.getDate()).padStart(2, '0');
      var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = date.getFullYear();
      var today = dd + '/' + mm + '/' + yyyy;
      var h = date.getHours(); // 0 - 23
      var m = date.getMinutes(); // 0 - 59
      var s = date.getSeconds(); // 0 - 59
      var session = "AM";

      if (h == 0){
          h = 12;
      }

      if (h > 12){
          h = h - 12;
          session = "PM";
      }

      h = (h < 10) ? "0" + h : h;
      m = (m < 10) ? "0" + m : m;
      s = (s < 10) ? "0" + s : s;

      var time = h + ":" + m + ":" + s + " " + session;
      document.querySelector(".clock").innerText = time;
      document.querySelector(".clock").textContent = time;
      document.querySelector(".date").innerText = today;
      document.querySelector(".date").textContent = today;

      setTimeout(clock, 1000);
    }

    clock()

  }

  buttonsHandler () {
    this.dataButtons.forEach((item, i) => {
      item.addEventListener('click', () => {
         this.body.classList.add('openData');
         const dataItem = item.getAttribute('data-button')
         if (dataItem != 'all') {
           this.dataWrapper.setAttribute('data-table',dataItem)
         } else {
           this.dataWrapper.setAttribute('data-table','all')
         }
      });
    });

      this.closeButton.addEventListener('click', () => {
         this.body.classList.remove('openData');
      });

      this.headerImage.addEventListener('click', () => {
         this.body.classList.remove('openData');
      });
  }

  init () {

    if (this.dataWrapper) {

      this.buttonsHandler()
      this.moveClockandDate()
      this.checkTimeforImage()
      this.api()

      setInterval( () => {
        this.api()
      }, this.config.frecuency);

    }


  }
}
