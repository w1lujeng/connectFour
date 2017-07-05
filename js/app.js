
/*----- app's state (variables) -----*/

var winner;
var board;
var player;
var $resetBtn = $('#reset');
var $message = $('#message');

/*----- cached element references -----*/

/*----- functions -----*/

reset();

function renderBoard() {
    var squares = $('td');
    $('td').removeClass('red black');
    board.forEach(function(colArray, colIdx) {
      var squaresInCol = $('[col=' + colIdx + ']');
      colArray.forEach(function(squareValue, rowIdx) {
        var cls = '';
        if (squareValue) cls = squareValue === 1 ? 'red' : 'black';
        squaresInCol.eq(5 - rowIdx).addClass(cls);
      });
    });
    if (winner === 'T') {
        $message.html("No winners.  Would you like to play again?"); 
    } else if (winner) {
        $message.html("Congratulations, player " + (winner === 1 ? "1" : "2") + " wins!!!!!"); 
    } else {
        $message.html("Turn: Player " + (player === 1 ? "1" : "2"));
    }
};

function reset() {
    board = [
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0]
    ];
    player = 1;
    winner = null;
    renderBoard();
}


/*----- event listeners -----*/

$('#reset').on("click", reset);
// redraw board, triangles aren't coming back

$("#selectors").on('click', function(evt) {
    var colIdx = evt.target.id[3];
    var colArray = board[colIdx];
    var nextPosition = colArray.indexOf(0);
    colArray[nextPosition] = player;
    player = player * -1;
    if (!colArray.includes(0)) $(evt.target).css("visibility", "hidden");
    winner = getWinner();
    console.log(winner)
    renderBoard();
});


// ************************* win logic ********************************

function getWinner() {
    for (var colIdx = 0; colIdx < board.length; colIdx++) {
        var winner = checkCol(colIdx);
        if (winner) return winner;
    }
    return 0;
}

function checkCol(colIdx) {
    for (var posIdx = 0; posIdx < board[colIdx].length; posIdx++) {
        var winner = checkPos(colIdx, posIdx);
        if (winner) return winner;
    }
    return 0;
}

function checkPos(colIdx, posIdx) {
    if (!board[colIdx, posIdx]) return 0;
    if (posIdx < 3 && isUpWin(colIdx, posIdx)) return board[colIdx][posIdx];
    if (colIdx < 3 && isRowWin(colIdx, posIdx)) return board[colIdx][posIdx];
    if (posIdx < 3 && colIdx < 4 && isDiagUpWin(colIdx, posIdx)) return board[colIdx][posIdx];
    if (posIdx >=3   && colIdx <= 3   && isDiagDownWin(colIdx, posIdx)) return board[colIdx][posIdx];//
    return 0;
}

function isUpWin(colIdx, posIdx) {
    var sum = Math.abs(board[colIdx][posIdx] + board[colIdx][posIdx+1] + board[colIdx][posIdx+2] + board[colIdx][posIdx+3]);
    if (sum === 4) return board[colIdx][posIdx];
    return 0;
    // $("#selectors").off('click', function(evt);
}

function isRowWin(colIdx, posIdx) {
    var sumRow = Math.abs(board[colIdx][posIdx] + board[colIdx+1][posIdx] + board[colIdx+2][posIdx] + board[colIdx+3][posIdx]);
    if (sumRow === 4) return board[colIdx][posIdx];
    return 0;
    // $("#selectors").off('click', function(evt);

}
function isDiagUpWin(colIdx, posIdx) {
    var sum = Math.abs(board[colIdx][posIdx] + board[colIdx+1][posIdx+1] + board[colIdx+2][posIdx+2] + board[colIdx+3][posIdx+3]);
    if (sum === 4) return board[colIdx][posIdx];
    return 0;
    // $("#selectors").off('click', function(evt)

}

function isDiagDownWin(colIdx, posIdx) {
    var sum = Math.abs(board[colIdx][posIdx] + board[colIdx+1][posIdx-1] + board[colIdx+2][posIdx-2] + board[colIdx+3][posIdx-3]);
    if (sum === 4) return board[colIdx][posIdx];
    return 0;
    // $("#selectors").off('click', function(evt)
}

