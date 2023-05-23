(function gameBoard() {
  function divAdd(array) {
    for (let i = 1; i <= 9; i++) {
      array.push("<div> </div>");
    }
  }
  let gameBoard = {
    board: [],
  };
  gameBoard.divAdd = (function (board) {
    divAdd(board);
  })(gameBoard.board);
  console.log(gameBoard.board);
  return {
    board: gameBoard.board,
  };
})();
console.log(gameBoard.board);
