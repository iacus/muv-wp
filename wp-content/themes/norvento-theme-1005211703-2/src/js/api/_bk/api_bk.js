'use strict'

import { XMLHttpRequest } from 'w3c-xmlhttprequest';
// import Carousel from './_bk/header-carousel'

export default class Api {
  constructor () {
    this.config = {
      url: 'https://cine.norvento.com:9443/api/energia',
      testurl: 'https://jsonplaceholder.typicode.com/posts/1',
      data: {"sistema_electrico":{"nombre":"Sistema eléctrico","generacion":{"nombre":"Generación","potencia":{"nombre":"Potencia","valor":59,"unidad":"kW"},"energia":{"nombre":"Energía","dia":{"nombre":"Día","valor":727,"unidad":"kWh"},"semana":{"nombre":"Semana","valor":1142,"unidad":"kWh"},"mes":{"nombre":"Mes","valor":1142,"unidad":"kWh"},"total":{"nombre":"Total","valor":208497,"unidad":"kWh"}},"componentes":{"nombre":"Componentes","eolica":{"nombre":"Eólica","potencia":{"nombre":"Potencia","valor":59,"unidad":"kW"},"energia":{"nombre":"Energía","dia":{"nombre":"Día","valor":727,"unidad":"kWh"},"semana":{"nombre":"Semana","valor":1142,"unidad":"kWh"},"mes":{"nombre":"Mes","valor":1142,"unidad":"kWh"},"total":{"nombre":"Total","valor":208497,"unidad":"kWh"}}},"fotovoltaica":{"nombre":"Fotovoltaica","potencia":{"nombre":"Potencia","valor":0,"unidad":"kW"},"energia":{"nombre":"Energía","dia":{"nombre":"Día","valor":0,"unidad":"kWh"},"semana":{"nombre":"Semana","valor":0,"unidad":"kWh"},"mes":{"nombre":"Mes","valor":0,"unidad":"kWh"},"total":{"nombre":"Total","valor":0,"unidad":"kWh"}}},"biodiesel":{"nombre":"Biodiesel","potencia":{"nombre":"Potencia","valor":0,"unidad":"kW"},"energia":{"nombre":"Energía","dia":{"nombre":"Día","valor":0,"unidad":"kWh"},"semana":{"nombre":"Semana","valor":0,"unidad":"kWh"},"mes":{"nombre":"Mes","valor":0,"unidad":"kWh"},"total":{"nombre":"Total","valor":0,"unidad":"kWh"}}},"biomasa_CHP":{"nombre":"Biomasa CHP","potencia":{"nombre":"Potencia","valor":0,"unidad":"kW"},"energia":{"nombre":"Energía","dia":{"nombre":"Día","valor":22,"unidad":"kWh"},"semana":{"nombre":"Semana","valor":50,"unidad":"kWh"},"mes":{"nombre":"Mes","valor":50,"unidad":"kWh"},"total":{"nombre":"Total","valor":2088,"unidad":"kWh"}}},"red_ensayos":{"nombre":"Red ensayos","potencia":{"nombre":"Potencia","valor":0,"unidad":"kW"},"energia":{"nombre":"Energía","dia":{"nombre":"Día","valor":0,"unidad":"kWh"},"semana":{"nombre":"Semana","valor":0,"unidad":"kWh"},"mes":{"nombre":"Mes","valor":0,"unidad":"kWh"},"total":{"nombre":"Total","valor":0,"unidad":"kWh"}}}}},"baterias":{"nombre":"Baterias","potencia":{"nombre":"Potencia","valor":-8617,"unidad":"kW"},"energia":{"nombre":"Energía","dia":{"nombre":"Día","valor":0,"unidad":"kWh"},"semana":{"nombre":"Semana","valor":0,"unidad":"kWh"},"mes":{"nombre":"Mes","valor":0,"unidad":"kWh"},"total":{"nombre":"Total","valor":0,"unidad":"kWh"}}},"consumo":{"nombre":"Consumo","potencia":{"nombre":"Potencia","valor":59,"unidad":"kW"},"energia":{"nombre":"Energía","dia":{"nombre":"Día","valor":1418,"unidad":"kWh"},"semana":{"nombre":"Semana","valor":2822,"unidad":"kWh"},"mes":{"nombre":"Mes","valor":2822,"unidad":"kWh"},"total":{"nombre":"Total","valor":1322021,"unidad":"kWh"}},"componentes":{"nombre":"Componente","edificio":{"nombre":"Edificio","potencia":{"nombre":"Potencia","valor":34,"unidad":"kW"},"energia":{"nombre":"Energía","dia":{"nombre":"Día","valor":561,"unidad":"kWh"},"semana":{"nombre":"Semana","valor":1267,"unidad":"kWh"},"mes":{"nombre":"Mes","valor":1267,"unidad":"kWh"},"total":{"nombre":"Total","valor":830213,"unidad":"kWh"}}},"cargador_coche":{"nombre":"Cargador coche","potencia":{"nombre":"Potencia","valor":0,"unidad":"kW"},"energia":{"nombre":"Energía","dia":{"nombre":"Día","valor":0,"unidad":"kWh"},"semana":{"nombre":"Semana","valor":0,"unidad":"kWh"},"mes":{"nombre":"Mes","valor":0,"unidad":"kWh"},"total":{"nombre":"Total","valor":3702,"unidad":"kWh"}}},"bomba_calor":{"nombre":"Bomba calor","potencia":{"nombre":"Potencia","valor":0,"unidad":"kW"},"energia":{"nombre":"Energía","dia":{"nombre":"Día","valor":175,"unidad":"kWh"},"semana":{"nombre":"Semana","valor":383,"unidad":"kWh"},"mes":{"nombre":"Mes","valor":383,"unidad":"kWh"},"total":{"nombre":"Total","valor":316561,"unidad":"kWh"}}},"resistencia":{"nombre":"Resistencia","potencia":{"nombre":"Potencia","valor":51,"unidad":"kW"},"energia":{"nombre":"Energía","dia":{"nombre":"Día","valor":682,"unidad":"kWh"},"semana":{"nombre":"Semana","valor":1172,"unidad":"kWh"},"mes":{"nombre":"Mes","valor":1172,"unidad":"kWh"},"total":{"nombre":"Total","valor":171544,"unidad":"kWh"}}}}}},"sistema_termico":{"nombre":"Sistema térmico","calor":{"nombre":"Calor","generacion":{"nombre":"Generación","potencia":{"nombre":"Potencia","valor":0,"unidad":"kWt"},"energia":{"nombre":"Energía","dia":{"nombre":"Día","valor":500,"unidad":"kWht"},"semana":{"nombre":"Semana","valor":1100,"unidad":"kWht"},"mes":{"nombre":"Mes","valor":1100,"unidad":"kWht"},"total":{"nombre":"Total","valor":0,"unidad":"kWht"}}},"tanques":{"nombre":"Tanques","carga":{"nombre":"Carga","valor":29,"unidad":"%"}},"distribucion":{"nombre":"Distribución","edificio":{"nombre":"Edificio","potencia":{"nombre":"Potencia","valor":100,"unidad":"kW"},"energia":{"nombre":"Energía","dia":{"nombre":"Día","valor":1800,"unidad":"kWh"},"semana":{"nombre":"Semana","valor":3700,"unidad":"kWh"},"mes":{"nombre":"Mes","valor":3700,"unidad":"kWh"},"total":{"nombre":"Total","valor":283400,"unidad":"kWh"}}}}},"frio":{"nombre":"Frío","generacion":{"nombre":"Generación","potencia":{"nombre":"Potencia","valor":0,"unidad":"kWt"},"energia":{"nombre":"Energía","dia":{"nombre":"Día","valor":200,"unidad":"kWht"},"semana":{"nombre":"Semana","valor":400,"unidad":"kWht"},"mes":{"nombre":"Mes","valor":400,"unidad":"kWht"},"total":{"nombre":"Total","valor":0,"unidad":"kWht"}}},"tanques":{"nombre":"Tanques","carga":{"nombre":"Carga","valor":100,"unidad":"%"}},"distribucion":{"nombre":"Distribución","edificio":{"nombre":"Edificio","potencia":{"nombre":"Potencia","valor":0,"unidad":"kW"},"energia":{"nombre":"Energía","dia":{"nombre":"Día","valor":0,"unidad":"kWh"},"semana":{"nombre":"Semana","valor":0,"unidad":"kWh"},"mes":{"nombre":"Mes","valor":0,"unidad":"kWh"},"total":{"nombre":"Total","valor":283400,"unidad":"kWh"}}},"sala_servidores":{"nombre":"Sala servidores","potencia":{"nombre":"Potencia","valor":2,"unidad":"kW"},"energia":{"nombre":"Energía","dia":{"nombre":"Día","valor":100,"unidad":"kWh"},"semana":{"nombre":"Semana","valor":200,"unidad":"kWh"},"mes":{"nombre":"Mes","valor":200,"unidad":"kWh"}}}}}},"condiciones_ambientales":{"nombre":"Condiciones ambientales","humedad":{"nombre":"Humedad","valor":97.9,"unidad":"%"},"temperatura":{"nombre":"Temperatura","valor":10.8,"unidad":"ºC"},"radiacion":{"nombre":"Radiación","valor":6.1,"unidad":"W/m2"},"viento":{"nombre":"Viento","valor":6.6,"unidad":"m/s"}},"estado":"producción"}
  }
    this.dataWrapper = document.querySelector('.dataWrapper')
    this.dataButtons = document.querySelectorAll('.button-data')
    this.closeButton = document.querySelector('.crossData')
    this.clockEl = document.querySelector(".clock")
    this.body = document.querySelector('body')
    // this.date = new Date('December 17, 1995 8:24:00');
    this.date = new Date();
  }

  cors2 () {
    const client = new XMLHttpRequest();
    client.open('GET', this.config.url);
    client.responseType = 'json';
    client.addEventListener('load', () => {
    const data = client.response;
    if (data.meta.status !== 200) return;
    console.log(data.response);
    });
    client.send();
  }

  cors () {
    var http_request;
    http_request = new XMLHTTPRequest();
    http_request.onreadystatechange = function () { console.log('ojete'); };
    http_request.open("POST", this.config.url);
    http_request.withCredentials = true;
    http_request.setRequestHeader("Content-Type", "application/json");
    http_request.send({ 'request': "authentication token" });
  }

  api5 () {
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
       console.log(responseData);
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
  api4 () {
    fetch(this.config.url,
      {
        method: 'GET',
        mode:"no-cors"
      }).then(function (response) {
    	// The API call was successful!
    	if (response.ok) {
    		return response.json();
    	} else {
    		return Promise.reject(response);
    	}
      }).then(function (data) {
      	// This is the JSON from our response
      	console.log(data);
      }).catch(function (err) {
      	// There was an error
      	console.warn('Something went wrong.', err);
      });
  }

  api3 () {
    fetch('https://cine.norvento.com:9443/api/energia',
    {
      method: 'GET',
      mode: 'no-cors'
    })
    .then(response => {
      return response.text()
    })
    .then((data) => {
      // resolve(data ? JSON.parse(data) : {})
      console.log('llamada ok');
      console.log(data);

    })
  }

  api2 () {
    fetch('https://cine.norvento.com:9443/api/energia',{
      method: 'GET',
      mode: 'no-cors'
    })
    .then(res => res.json())
    .then(data => console.log(data));
  }

  api () {
    // api url
    const api_url = "https://cine.norvento.com:9443/api/energia";

    // Defining async function
    async function getapi(url) {

        // Storing response
        const response = await fetch(url,{
          method: 'GET',
          mode: 'no-cors'
        });

        // Storing data in form of JSON
        var data = await response.json();
        console.log(data);
        if (response) {
            hideloader();
            console.log('tenemos datos');
        }
        // show(data);
    }
    // Calling that async function
    getapi(api_url);

    // Function to hide the loader
    function hideloader() {
        // document.getElementById('loading').style.display = 'none';
    }
    // Function to define innerHTML for HTML table
    function show(data) {
        let tab =
            `<tr>
              <th>Name</th>
              <th>Office</th>
              <th>Position</th>
              <th>Salary</th>
             </tr>`;

        // Loop to access all rows
        for (let r of data.list) {
            tab += `<tr>
        <td>${r.name} </td>
        <td>${r.office}</td>
        <td>${r.position}</td>
        <td>${r.salary}</td>
    </tr>`;
        }
        // Setting innerHTML as tab variable
        document.querySelector("data").innerHTML = tab;
    }
  }

  printData () {

    // let array = JSON.stringify(this.config.data)
    // this.config.data.sistema_electrico.forEach((item, i) => {
    //   console.log(item);
    // });



    // let data = Object.keys(this.config.data).map((key) => [Number(key), this.config.data[key]]);
    let data = Object.entries(this.config.data);
    console.log(data);

    let print = ""

    data.map((item,i) => {

      if (typeof item[1] == 'object') {
        print += '<h3>' + item[1].nombre + '</h3>'
        print += '<table class="tableTec tableData text-04"><tbody>'

        Object.entries(item[1]).forEach((subitem, i) => {

          if (subitem[1].nombre != undefined) {
            print += traverse (subitem[1])
          }

        });

        print += '</tbody></table>'
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

  showLayer () {

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

  checkTime () {
    const clock = () => {
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

    clock()
  }



  moveClockandDate () {

    const clock = () => {
      var date = this.date
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
          console.log();
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



  init () {

    if (this.dataWrapper) {

      this.printData()
      this.moveClockandDate()
      this.checkTime()
      this.api5()

      this.dataButtons.forEach((item, i) => {
        item.addEventListener('click', () => {
           this.body.classList.add('openData');
        });
      });

        this.closeButton.addEventListener('click', () => {
           this.body.classList.remove('openData');
        });




    }


  }
}
