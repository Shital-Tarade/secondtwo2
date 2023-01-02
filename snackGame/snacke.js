import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 5
addSegments()
const snackeBody = [{ x: 10, y: 11 }]
let newSegments = 0

export function update()
{
 const inputDirection = getInputDirection()  
 for (let i = snackeBody.length -2; i>=0; i--){
  snackeBody[i + 1] = { ...snackeBody }
 }
 snackeBody[0].x += inputDirection.x
 snackeBody[0].y += inputDirection.y
}
export function draw(gameBoard){
    console.log('draw snacke')
    snackeBody.forEach(segment => {
        const snackeElement = document.currentElement('div')
         snackeElement.style.grigRowStart = segment.y
         snackeElement.style.grigColumnStart = segment.x
         snackeElement.classist.add('snacke')
         gameBoard.appendChild(snackeElement)

    })
}
export function expandsnacke(amount) {
 newSegments += amount
}

export function onSnacke(position, { ignoreHead = false} = {}) {
   return snackeBody.some((segment, index) => {
    if (ignoreHead && index === 0)
    return false
    return equalPosition(segment, position)
   }) 
}

export function getSnackeHead() {
    return snackeBody[0]
}
 export function snackeIntersection() {
    return onSnacke(snackeBody[0], {ignoreHead: true })
 }
function equalPosition(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
 for (let i = 0; i < newSegments; i++){
    snackeBody.push ({ ...snackeBody[snackeBody.length - 1] })
 }

 newSegments = 0
}