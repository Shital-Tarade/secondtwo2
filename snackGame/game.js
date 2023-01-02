import { update as updateSnacke, draw as drawSnacke,SNAKE_SPEED, getSnackeHead, snackeIntersection} from './snacke.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'
let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game.board')

function main(currentTime){
    if (gameOver) {
    if (confirm('You lost. Press ok to restart')) {
     window.location = '/'

    }  
    return 
    }
    window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender <1 / SNAKE_SPEED) return
  console.log('Render')
 lastRenderTime = currentTime
 update()
 draw()
}

window.requestAnimationFrame(main)

function update() {
  updateSnacke()
  updateFood()
  checkDeath()
}

function draw() {
    gameBoard.innerHtml = ''
  drawSnacke(gameBoard)
  drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnackeHead()) || snackeIntersection()
}