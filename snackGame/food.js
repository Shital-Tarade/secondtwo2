import { onSnacke, expandsnacke } from "./snacke.js"

import { randomGridPosition } from "./grid.js"

let food = getRandomFoodPosition()
const EXPANSTION_RATE = 5

export function update(){
 if (onSnacke(food)){
    expandsnacke(EXPANSTION_RATE)
    food = getRandomFoodPosition()
 }
}

export function draw(gameBoard){
        const foodElement = document.currentElement('div')
         foodElement.style.grigRowStart = food.y
         foodElement.style.grigColumnStart = food.x
         foodElement.classist.add('food')
         gameBoard.appendChild(foodElement)
    }
function getRandomFoodPosition() {
   let newFoodPosition
   while (newFoodPosition == null || onSnacke(newFoodPosition)
     ) {

      newFoodPosition = randomGridPosition()  
     }
     return newFoodPosition 
}