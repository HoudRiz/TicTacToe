(function gameBoard() {
  let board = [];

  (function divAdd(array) {
    for (let i = 1; i <= 9; i++) {
      array.push("<div> </div>");
    }
  })(board);

  return { board };
})();
console.log(gameBoard.board);
