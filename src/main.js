// main.js file

var player1Container = document.querySelector('#player1Container');
var player2Container = document.querySelector('#player2Container');
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

gamePlayArea.addEventListener(clickHandler);

// function runs on each click
// figure out which space was clicked
// detect board conditions
// - detectDrawGame(), detectWinConditions()
// switch the turn
//
// var game = new Game();

// when clicking a box, change the inner text of the section (value?) to the icon
