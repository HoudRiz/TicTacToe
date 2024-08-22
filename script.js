const gameBoard = new Array(9).fill(0);

const inputFunction = function (player) {
  const location = parseInt(
    prompt(`Please enter location for ${player.name}`),
    10,
  );
  if (!isNaN(location) && location > 0 && location <= gameBoard.length) {
    gameBoard[location - 1] = player.indicator;
  } else {
    console.log('Invalid location');
  }

  console.log(gameBoard);
  return gameBoard;
};

function findIndexes(player) {
  player.locationArray = [];
  for (let i = 0; i < gameBoard.length; i += 1) {
    if (gameBoard[i] === player.indicator) {
      player.locationArray.push(i + 1);
      console.log(player.locationArray);
    }
  }
  return player.locationArray;
}
// function checks for the winning combination in the numbers inputted
function checkCombination(player) {
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
    if (combination.every((num) => player.includes(num))) {
      return true;
    }
  }
  return false;
}

const personFactory = function (
  name,
  indicator,
  displayVar,
  locationArray = [],
  inputFunction,
) {
  return {
    name,
    indicator,
    displayVar,
    locationArray,
    input() {
      return inputFunction(this);
    },
  };
};

const playerOne = personFactory('player1', 1, 'x', [], inputFunction);
const playerTwo = personFactory('player2', 2, 'x', [], inputFunction);

for (let i = 0; i < 9; i += 1) {
  // Player One's Turn
  inputFunction(playerOne); // Get input from player one
  const playerOneInput = findIndexes(playerOne, gameBoard); // Update and check player one's positions
  if (checkCombination(playerOneInput)) {
    // Check if player one has a winning combination
    console.log('Player One wins!');
    break;
  }

  // Check if the board is full before proceeding to player two's turn
  if (i === 8) {
    console.log("It's a draw!");
    break;
  }

  // Player Two's Turn
  inputFunction(playerTwo); // Get input from player two
  const playerTwoInput = findIndexes(playerTwo, gameBoard); // Update and check player two's positions
  if (checkCombination(playerTwoInput)) {
    // Check if player two has a winning combination
    console.log('Player Two wins!');
    break;
  }
}
