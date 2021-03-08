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

function clickHandler(event) {
  event.preventDefault();
  if (event.target.classList.contains('a')) {
    console.log('a');
  } else if ((event.target.classList.contains('b'))) {
    console.log('b');
  } else if ((event.target.classList.contains('c'))) {
    console.log('c');
  } else if ((event.target.classList.contains('d'))) {
    console.log('d');
  } else if ((event.target.classList.contains('e'))) {

  } else if ((event.target.classList.contains('f'))) {

  } else if ((event.target.classList.contains('g'))) {

  } else if ((event.target.classList.contains('h'))) {

  } else if ((event.target.classList.contains('i'))) {

  }
}
// gameBoardAction();
//
// function gameBoardAction(event) {
//   for (var i = 0; i < currentGame.tokenGameSpaces.length; i++) {
//     if (event.target.id === currentGame.tokenGameSpaces[i]) {
//       console.log('pants');
//       currentGame.changeGameSpaceData(event);
//
//     }
//   }
// }
// function runs on each click
// figure out which space was clicked
// changeGameSpaceData

// when clicking a box, change the inner text of the section (value?) to the icon
