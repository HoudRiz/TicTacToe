// const personFactory = function (name, indicator, displayVar) {
//   return {
//     name,
//     indicator,
//     displayVar,
//   };
// };

const gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const inputFunction = function () {
  const location = prompt('Please enter your location of thing to run');
  return location;
};

const tempRun = function () {
  const location = parseInt(inputFunction());
  gameBoard[location - 1] = 1;
  console.log(gameBoard);
};

// this is a temporary function, it checks to see if the indexes in which 1 is in the algorithm
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
  tempRun();
  const playerOneInput = findIndicesWithOne();
  const playerTwoInput = findIndicesWithTwo();
  checkCombination(playerOneInput, playerTwoInput);
}
