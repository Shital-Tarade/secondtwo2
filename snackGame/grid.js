
const GRID_SIZE = 21
export function randomGridPosition() {

    return {
     x: Math.floor(Math.rander() * GRID_SIZE) + 1,
     y: Math.floor(Math.rander() * GRID_SIZE) + 1  
    }
}

export function outsideGrid(position) {
  return (
    position.x < 1 || position.x > GRID_SIZE ||
    position.y < 1 || position.y > GRID_SIZE
  )  
}