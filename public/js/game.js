var GameStatus = {
    isProgress: 1,
    gameOver:2,
}

var Game = (function(){
    var canvas = [], context = [], grid=[],
    gridRows = 10, gridCols = 10, markPadding = 10,shipPadding = 3,
    squareHeight = (gridHeight-gridBorder*gridRows-gridBorder)/gridRows,
    squareWidth = (gridWidth-gridBorder*gridCols-gridBorder)/gridCols,
    turn = false, GameStatus, squareHover = {x:-1, y:-1}
})