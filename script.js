const gameBoard = new Array(9).fill(0);

// Function to display the winner message
function winnerDisplay(player) {
  // Select the element with the class 'winner-message'
  const winnerMessageElement = document.getElementById('winner-message');

  // Update the text content to show the winning message
  winnerMessageElement.textContent = `${player.name} wins!`;
}

// Function to clear the winner message
function winnerDisplayClear() {
  // Select the element with the class 'winner-message'
  const winnerMessageElement = document.getElementById('winner-message');

  // Clear the text content
  winnerMessageElement.textContent = '';
}

// Function to disable all buttons
function disableAllButtons() {
  buttons.forEach((button) => {
    button.disabled = true; // Disable each button
  });
}

// Function to enable all buttons (if you want to make them clickable again)
function enableAllButtons() {
  buttons.forEach((button) => {
    button.disabled = false; // Enable each button
  });
}

function inputFlow(player, buttonId) {
  inputFunction(player, buttonId);
  displayIndicator(player, buttonId);
  const playerInput = findIndexes(player, gameBoard); // Update and check player one's positions
  if (checkCombination(playerInput)) {
    winnerDisplay(player);
    disableAllButtons();
  }
}
const inputFunction = function (player, location) {
  gameBoard[location - 1] = player.indicator;
  console.log(gameBoard);
  return gameBoard;
};
function displayIndicator(player, buttonID) {
  // Find the button element with the specified buttonID
  const button = document.querySelector(`button[data-id='${buttonID}']`);

  // Check if the button exists (optional, but good for error handling)
  if (button) {
    // Update the button's text content with the player's indicator
    button.textContent = player.displayVar;
  } else {
    console.error(`Button with ID ${buttonID} not found.`);
  }
}

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

const playerOne = personFactory('player 1', 1, 'x', []);
const playerTwo = personFactory('player 2', 2, 'o', []);

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
    event.target.disabled = true;
  });
});
