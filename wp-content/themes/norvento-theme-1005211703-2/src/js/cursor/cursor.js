'use strict'

export default class Cursor {
  constructor() {
    this.config = {
      speed: 1
    }
    this.ball = document.querySelector(".cursor")
  }

  mouseMoveRAF() {
    const ball = this.ball
    let mouseX = 0
    let mouseY = 0

    let ballX = 0
    let ballY = 0

    let speed = this.config.speed

    function animate() {
      let distX = mouseX - ballX
      let distY = mouseY - ballY

      ballX = ballX + (distX * speed)
      ballY = ballY + (distY * speed)

      ball.style.left = ballX + "px"
      ball.style.top = ballY + "px"

      requestAnimationFrame(animate)
    }

    animate()

    document.addEventListener("mousemove", function (event) {
      mouseX = event.clientX
      mouseY = event.clientY
    })

  }

  init() {

    if (this.ball) {
      document.documentElement.classList.add('cursor-activated')
      this.mouseMoveRAF()
      // this.mouseOversRAF()
    }


  }
}
