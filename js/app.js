
/*----- app's state (variables) -----*/

var winner;
var board;
var player;
var $resetBtn = $('#reset');
var $message = $('#message');

/*----- cached element references -----*/

/*----- event listeners -----*/


/*
$(butt0).click(addSquare) {}

/*----- functions -----*/

reset();

function renderBoard() {
    var squares = $('td');
    $('td').removeClass('red black');
    board.forEach(function(colArray, colIdx) {
      var squaresInCol = $('[col=' + colIdx + ']');
       console.log(colArray);
      colArray.forEach(function(squareValue, rowIdx) {
        var cls = '';
        if (squareValue) cls = squareValue === 1 ? 'red' : 'black';
        squaresInCol.eq(5 - rowIdx).addClass(cls);
      });
      console.log()
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
    console.log(board);
    player = 1;
    winner = null;
    renderBoard();
}





$('#reset').on("click", reset);

$("#selectors").on('click', function(evt) {
    var colIdx = evt.target.id[3];
    var colArray = board[colIdx];
    var nextPosition = colArray.indexOf(0);
    colArray[nextPosition] = player;
    player = player * -1;
    if (!colArray.includes(0)) $(evt.target).css("visibility", "hidden");
    // if (winner === true) $(evt.target).css("visibility", "hidden");
    renderBoard();
});


/* 
perform SLICE operation
col0.slice(0,4)
col0.slice(1,5)
col0.slice(2,6)
then

function checkVertical(0) {
    var col0  = []; 
    var colSum = col0.reduce( function(total, amount){
    return total + amount
    });
    if (colSum === 4){
    console.log("Player 1 wins. Would you like to play again");
    } else if (colSum === -4) {
    console.log("Player 2 wins. Would you like to play again");
    } else {
    console.log("Tie Game. Would you like to play again");
    }
}
perform SLICE operation
col0.slice(0,4)
col0.slice(1,5)
col0.slice(2,6)
col0.slice(3.7)
function checkHorizontal() {
    var row_  = []; 
    var rowSum = col_.reduce( function(total, amount){
    return total + amount
    });
    rowSum
    if (rowSum === Math.abs(4)){
    console.log("player 1 wins");
    } else {
    console.log("no winner");
    }
}
diagonal up
from column1 
    3210
    23456 slice slice
    123456 slice slice slice

from column2
    12345 slice slice slice

from column3
    12345 slice slice

from column4
    1234

diagonal down
from column 1
    2345
    12345 slice slice
    012345 slice slice slic

from column 2
    012345 slice slice slice

from column 3   
    01234 slice slice

from column 4
    01234





diag up + -

diag down + +













var col0  = [1, 1, 1, -1, 1, 0]; 
    var colSum = col0.reduce( function(total, amount){
    return total + amount
    });
    colSum
    if (colSum === Math.abs(4)){
   console.log("player 1 wins");
    } else {
    console.log("no winner");
    }
function checkDiagUp() {

}

function checkDiagDown() {

}




// Array.push();



/*
$("#reset").addClass("animated shake")
*/


/* if there is a winner
disable all button
$("button").prop("disabled", true);
$("body").addClass("animated fadeOut");
*/


/*
$( “#but1” ).click(function() {
  alert( "Handler for .click() called." );
find ccolumn
col.findIndexOf(0)
var availableSparue = col.findIndexOf(0)
col{availSquRE} = 1
IF !COL.INCLUDES -DISABLE BUTTON
});*/
