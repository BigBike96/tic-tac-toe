var player1Container = document.querySelector('#player1Container');
var player2Container = document.querySelector('#player2Container');
var turnIndicator = document.querySelector('#turnIndicator');
var gamePlayArea = document.querySelector('#gamePlayArea');
var currentGame = new Game();

window.addEventListener('load', loadLocalStorage);
gamePlayArea.addEventListener('click', placeIcon);

function placeIcon(event) {
  event.preventDefault();
  if (event.target.classList.contains('box')) {
    currentGame.updateTurnData(event.target.id);
    event.target.innerText = currentGame.currentPlayer.token;
    event.target.classList.add('stop-click');
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
  console.log(currentGame.drawGame);
  if (currentGame.drawGame) {
    turnIndicator.innerText = `Draw Game`;
    displayWins();
  } else if (currentGame.turnCounter === 0 && currentGame.currentPlayer) {
    turnIndicator.innerText = `Player ${currentGame.currentPlayer.token} has won!`;
    displayWins();
  }
}

function displayWins() {
  gamePlayArea.classList.add('stop-click');
  player1Container.innerText = `🥓 ${currentGame.player1.wins} Wins`;
  player2Container.innerText = `🍩 ${currentGame.player2.wins} Wins`;
  clearScreenBoard();
}

function clearScreenBoard() {
  setTimeout(function() {
    var boxes = document.querySelectorAll('.box');
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].innerText = "";
      gamePlayArea.classList.remove('stop-click');
      boxes[i].classList.remove('stop-click');
    }
    currentGame.drawGame = false;
    turnIndicator.innerText = `It's 🥓's turn`;
  }, 3000)
}
