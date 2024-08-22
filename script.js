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
      return true;
    }
  }
  return false;
}

for (let i = 0; i < 9; i += 1) {
  tempRun();
}
