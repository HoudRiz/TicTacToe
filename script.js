let gameBoard = (function () {
  let board = [];

  (function divAdd(array) {
    for (let i = 1; i <= 9; i++) {
      array.push("");
    }
  })(board);

  return { board };
})();

let personFactory = function (name, indicator) {
  return {
    name,
    indicator,
  };
};

let player1 = personFactory("player1", "X");
console.log(player1.name);
console.log(gameBoard.board);
