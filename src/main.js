var player1Container = document.querySelector('#player1Container');
var player2Container = document.querySelector('#player2Container');
var turnIndicator = document.querySelector('#turnIndicator');
var gamePlayArea = document.querySelector('#gamePlayArea');

var currentGame = new Game();

window.addEventListener('load', loadLocalStorage);
gamePlayArea.addEventListener('click', placeIcon);
// gamePlayArea.addEventListener('click', gameBoardAction);

function placeIcon(event) {
  event.preventDefault();
  if (event.target.classList.contains('box')) {
    currentGame.changeGameSpaceData(event.target.id);
    event.target.innerText = currentGame.currentPlayer.token;
    displayCurrentTurn();
  }
}

function loadLocalStorage() {
  currentGame.player1.retrieveWinsFromStorage();
  currentGame.player2.retrieveWinsFromStorage();
  displayWins();
}

function displayCurrentTurn() {
  if (currentGame.currentPlayer.token === '🥓') {
    turnIndicator.innerText = `It's 🍩's turn`;
  } else {
    turnIndicator.innerText = `It's 🥓's turn`;
  }
  checkForWin();
}

function checkForWin() {
  if (currentGame.turnCounter === 0) {
    turnIndicator.innerText = `Player ${currentGame.currentPlayer.token} has won!`;
    displayWins();
  }
}

function displayWins() {
  player1Container.innerText = `🥓 ${currentGame.player1.wins} Wins`;
  player2Container.innerText = `🍩 ${currentGame.player2.wins} Wins`;
  clearScreenBoard();
}

function clearScreenBoard() {
  setTimeout(function() {
    var boxes = document.querySelectorAll('.box');
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].innerText = "";
    }
    turnIndicator.innerText = `It's 🥓's turn`;
  }, 3000)
}
