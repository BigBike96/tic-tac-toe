var player1Container = document.querySelector('#player1Container');
var player2Container = document.querySelector('#player2Container');
var turnIndicator = document.querySelector('#turnIndicator');
var gamePlayArea = document.querySelector('#gamePlayArea');
var boxA = document.querySelector('#boxA');
var boxB = document.querySelector('#boxB');
var boxC = document.querySelector('#boxC');
var boxD = document.querySelector('#boxD');
var boxE = document.querySelector('#boxE');
var boxF = document.querySelector('#boxF');
var boxG = document.querySelector('#boxG');
var boxH = document.querySelector('#boxH');
var boxI = document.querySelector('#boxI');

var currentGame = new Game();

// window.addEventListener('load', storageGameboard);

gamePlayArea.addEventListener('click', clickHandler);
// gamePlayArea.addEventListener('click', gameBoardAction);

//>>>> A TIMEOUT IS USED AFTER A COMPLETED GAME TO RESET THE BOARD.<<<<<<<<<
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
function clickHandler(event) {
  event.preventDefault();
  if (event.target.classList.contains('box')) {
    currentGame.changeGameSpaceData(event.target.id);
    event.target.innerText = currentGame.currentPlayer.token;
  }
 // displayCurrentTurn();
 }

function clearScreenBoard() {
  turnIndicator.innerText = `Player ${currentGame.currentPlayer.token} has won!`;
  setTimeout(function() {
    var boxes = document.querySelectorAll('.box');
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].innerText = "";
    }
    turnIndicator.innerText = `It's 🥓's turn`;
  }, 3000)
}

function displayWins() {
  player1Container.innerText = `🥓 ${currentGame.player1.wins} Wins`;
  player2Container.innerText = `🍩 ${currentGame.player2.wins} Wins`;
  clearScreenBoard();
}

function displayCurrentTurn() {
  if (currentGame.currentPlayer.token === '🥓') {
    turnIndicator.innerText = `It's 🍩's turn`;
  } else {
    turnIndicator.innerText = `It's 🥓's turn`;
  }
}
// gameBoardAction();

// function gameBoardAction(event) {
//   event.preventDefault();
//   var clickedBox = event.target.id
//   for (var i = 0; i < currentGame.tokenGameSpaces.length; i++) {
//     if (event.target.id === currentGame.tokenGameSpaces[i].id) {
//       currentGame.changeGameSpaceData(event.target.id);
//       console.log(clickedBox);
//       clickedBox.innerText = currentGame.currentPlayer.token;
//     }
//   }
// }

// function
// function runs on each click
// figure out which space was clicked
// changeGameSpaceData

// when clicking a box, change the inner text of the section (value?) to the icon
