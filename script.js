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

function findIndicesWithOne() {
  const indices = [];

  for (let i = 0; i < gameBoard.length; i += 1) {
    if (gameBoard[i] === 1) {
      indices.push(i);
    }
  }

  return indices;
}
function checkCombination(numbers) {
  const winningCombinations = [
    [1, 2, 3],
    [1, 4, 7],
    [3, 6, 9],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  for (const combination of winningCombinations) {
    if (combination.every((num) => numbers.includes(num))) {
      console.log('The combination matches one of the winning patterns!');
    }
  }
  console.log('The combination does not match any winning pattern.');
}

for (let i = 0; i < 9; i += 1) {
  tempRun();
  const playerOneInput = findIndicesWithOne();
  checkCombination(playerOneInput);
}
