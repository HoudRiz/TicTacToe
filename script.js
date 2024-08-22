// const personFactory = function (
//   name,
//   indicator,
//   displayVar,
//   locationArray,
//   input,
// ) {
//   return {
//     name,
//     indicator,
//     displayVar,
//     locationArray,
//     input,
//   };
// };

const gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const inputFunction = function (player) {
  // eslint-disable-next-line no-template-curly-in-string
  const location = prompt('Please enter location for ${player}');
  return location;
};

const locOne = function () {
  const location = parseInt(inputFunction('Player One'));
  gameBoard[location - 1] = 1;
  console.log(gameBoard);
};

const locTwo = function () {
  const location = parseInt(inputFunction('Player Two'));
  gameBoard[location - 1] = 2;
  console.log(gameBoard);
};

function findIndicesWithOne() {
  const indices = [];

  for (let i = 0; i < gameBoard.length; i += 1) {
    if (gameBoard[i] === 1) {
      indices.push(i + 1);
    }
  }
  console.log(indices);
  return indices;
}

function findIndicesWithTwo() {
  const indices = [];

  for (let i = 0; i < gameBoard.length; i += 1) {
    if (gameBoard[i] === 2) {
      indices.push(i + 1);
    }
  }
  console.log(indices);
  return indices;
}

// function checks for the winning combination in the numbers inputted
function checkCombination(playerOne, playerTwo) {
  const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  for (const combination of winningCombinations) {
    if (combination.every((num) => playerOne.includes(num))) {
      const winner = playerOne;
      return winner;
    }
    if (combination.every((num) => playerTwo.includes(num))) {
      const winner = 'player Two';
      return winner;
    }
  }
}

for (let i = 0; i < 9; i += 1) {
  locOne();
  locTwo();
  const playerOneInput = findIndicesWithOne();
  const playerTwoInput = findIndicesWithTwo();
  const winner = checkCombination(playerOneInput, playerTwoInput);
  console.log('the winner is $(winner)');
}
