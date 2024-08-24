const gameBoard = new Array(9).fill(0);

function inputFlow(player, buttonId) {
  inputFunction(player, buttonId);
  const playerInput = findIndexes(player, gameBoard); // Update and check player one's positions
  if (checkCombination(playerInput)) {
    console.log(` ${player.name} wins!`);
  }
}
const inputFunction = function (player, location) {
  gameBoard[location - 1] = player.indicator;
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
) {
  return {
    name,
    indicator,
    displayVar,
    locationArray,
  };
};

const playerOne = personFactory('player1', 1, 'x', []);
const playerTwo = personFactory('player2', 2, 'x', []);

// use buttons for fow control
const buttons = document.querySelectorAll('.grid-container button');

// Add event listener to each button
let currentPlayer = 'playerOne';
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const buttonId = event.target.getAttribute('data-id');
    console.log(`Button ${buttonId} pressed`);
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
    inputFlow(currentPlayer, buttonId);
  });
});
