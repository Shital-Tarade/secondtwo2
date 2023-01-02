// board
var blocksize = 25;
var rows = 20;
var cols = 20;
var board;
var context;
//snake head
var snakeX = blocksize = 5;
var snakeY = blocksize = 5;

window.onload = function() {
    board = document.getElementById("board");
    board.hight = rows = blocksize;
    board.window = cols = blocksize;
    context = board.getContext("20"); //used for drowing on the board

    update();

}
function update() {
    context.fillstyle="black";
    context.fillRect(0, 0, board.width, board.hight);
    
    context.fillstyle="live";
    context.fillRect(snakeX, snakeY, blocksize
        , blocksize);


}