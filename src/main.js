var player1Container = document.querySelector('#player1Container');
var player2Container = document.querySelector('#player2Container');
var turnIndicator = document.querySelector('#turnIndicator');
var gamePlayArea = document.querySelector('#gamePlayArea');
// var selectAllGameArea = document.querySelectorAll('')
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

function clickHandler(event) {
  event.preventDefault();
  if (event.target.classList.contains('a')) {
    currentGame.changeGameSpaceData(event.target.id);
    boxA.innerText = currentGame.currentPlayer.token;
  } else if ((event.target.classList.contains('b'))) {
    currentGame.changeGameSpaceData(event.target.id);
    boxB.innerText = currentGame.currentPlayer.token;
  } else if ((event.target.classList.contains('c'))) {
    currentGame.changeGameSpaceData(event.target.id);
    boxC.innerText = currentGame.currentPlayer.token;
  } else if ((event.target.classList.contains('d'))) {
    currentGame.changeGameSpaceData(event.target.id);
    boxD.innerText = currentGame.currentPlayer.token;
  } else if ((event.target.classList.contains('e'))) {
    currentGame.changeGameSpaceData(event.target.id);
    boxE.innerText = currentGame.currentPlayer.token;
  } else if ((event.target.classList.contains('f'))) {
    currentGame.changeGameSpaceData(event.target.id);
    boxF.innerText = currentGame.currentPlayer.token;
  } else if ((event.target.classList.contains('g'))) {
    currentGame.changeGameSpaceData(event.target.id);
    boxG.innerText = currentGame.currentPlayer.token;
  } else if ((event.target.classList.contains('h'))) {
    currentGame.changeGameSpaceData(event.target.id);
    boxH.innerText = currentGame.currentPlayer.token;
  } else if ((event.target.classList.contains('i'))) {
    currentGame.changeGameSpaceData(event.target.id);
    boxI.innerText = currentGame.currentPlayer.token;
  }
  // checkDOMGameData();
}

function clearScreenBoard() {
  boxA.innerText = "";
  boxB.innerText = "";
  boxC.innerText = "";
  boxD.innerText = "";
  boxE.innerText = "";
  boxF.innerText = "";
  boxG.innerText = "";
  boxH.innerText = "";
  boxI.innerText = "";
}

function displayWins() {
  player1Container.innerText = `🥓 ${currentGame.player1.wins} Wins`;
  player2Container.innerText = `🍩 ${currentGame.player2.wins} Wins`;
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
