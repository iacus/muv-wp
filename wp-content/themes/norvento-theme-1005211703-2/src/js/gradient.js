'use strict'

import Utils from './utils/utils.js'

export default class Gradient {
  constructor() {
    this.config = {
      speed: .01,
      blue: '#003E52'
    }
    this.gradients = document.querySelectorAll('.gradient')
    this.utils = new Utils()
  }

  gradientFooter() {
  const ball = document.querySelector('footer.gradient')
  let mouseX = 0
  let mouseY = 0

  let ballX = 0
  let ballY = 0

  let speed = this.config.speed / 2

  function animate() {
    const blue = '#003E52'
    const red = '#E54E5C'
    const white = '#FFFFFF'

    let distX = mouseX - ballX
    let distY = mouseY - ballY

    ballX = ballX + (distX * speed)
    ballY = ballY + (distY * speed)

    let ballMix = (ballX + ballY)
    const layer = document.querySelector('footer.gradient')
    let color = document.body.getAttribute('data-color')

    if (color == '') {
      color = red
    }
    // document.querySelector('.gradient').style.background = 'radial-gradient(at ' + ballX + '% ' + ballY + '%, #E54E5C , #003E52 )'
    layer.style.background = "linear-gradient(" + -ballMix + "deg, " + blue +" 50%, " + color + " 100%)";

    // var bgWebKit = "linear-gradient(" + mouseYpercentage + "deg, #003E52 50%, #E54E5C 100%)";


    requestAnimationFrame(animate)
  }

  animate()

  document.addEventListener("mousemove", function (event) {
    mouseX = event.clientX / 4
    mouseY = event.clientY / 4
  })

}


gradientSide() {
const ball = document.querySelector('.side-menu.gradient')
let mouseX = 0
let mouseY = 0

let ballX = 0
let ballY = 0

let speed = this.config.speed

function animate() {
  const blue = '#003E52'
  const red = '#E54E5C'
  const white = '#FFFFFF'
  const body = document.querySelector('body')
  let distX = mouseX - ballX
  let distY = mouseY - ballY

  ballX = ballX + (distX * speed)
  ballY = ballY + (distY * speed)

  if (!body.classList.contains('dark-theme')) {
    document.querySelector('.side-menu.gradient').style.background = "linear-gradient(" + -ballY + "deg, " + blue +" 50%, " + red + " 100%)";
  } else {
    document.querySelector('.side-menu.gradient').style.background = "linear-gradient(" + -ballY + "deg, " + blue +" 50%, " + red + " 100%)";
  }

  // document.querySelector('.gradient').style.background = 'radial-gradient(at ' + ballX + '% ' + ballY + '%, #E54E5C , #003E52 )'

  // var bgWebKit = "linear-gradient(" + mouseYpercentage + "deg, #003E52 50%, #E54E5C 100%)";


  requestAnimationFrame(animate)
}

animate()

document.querySelector('.side-menu').addEventListener("mousemove", function (event) {
  mouseX = event.clientX / 5
  mouseY = event.clientY / 5
})

}

  init () {

    if (this.gradients.length > 0) {

      this.gradientSide()
      this.gradientFooter()

    }

    // if ($('.linear-gradient').length) {
    //   this.linearGradient()
    // }
    // if ($('.radial-gradient').length) {
    //   this.radialGradient()
    // }

  }
}
