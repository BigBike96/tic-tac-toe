class Game {
  constructor() {
    this.player1 = new Player('One', '🥓');
    this.player2 = new Player('Two', '🍩');
    // this.turn = true; or [player1, player2]??
    this.turnCounter = 0;
    // this.currentPlayer;
    this.tokenGameSpaces = [
       boxA, boxB, boxC,
       boxD, boxE, boxF,
       boxG, boxH, boxI
    ];
    this.gameWinConditions = [
      [0, 1, 2], [3, 4, 5],
      [6, 7, 8], [0, 3, 6],
      [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]

    ];
  }

  changeGameSpaceData(event) {
    this.turnCounter += 1;
    // this.changeTurn();
    var currentPlayer;
    if (this.turnCounter % 2 === 0) {
      currentPlayer = this.player2;
    } else {
      currentPlayer = this.player1;
    }
    for (var i = 0; i < this.tokenGameSpaces.length; i++) {
      if (event === this.tokenGameSpaces[i]) {
        this.tokenGameSpaces.splice(i, 1, currentPlayer.id);
      }
    }
    this.detectBoardConditions();
  }

  // changeTurn() {
    // this.turn = !this.turn;
  // }

  detectBoardConditions() {
    if (this.turnCounter >= 5 && this.turnCounter <= 9) {
      this.detectWinConditions();
      this.detectDrawGame();
    }
  }

  detectWinConditions() {
    for (var i = 0; i < this.gameWinConditions.length; i++) {
      var counterPlayerOne = 0;
      var counterPlayerTwo = 0;
      console.log('counters', counterPlayerOne, counterPlayerTwo);
      console.log('game win conditions', this.gameWinConditions[i]);
      for (var j = 0; j < this.gameWinConditions[i].length; j++) {
        var conditional = this.tokenGameSpaces[this.gameWinConditions[i][j]]
          console.log('conditional', conditional);
          if (conditional === 'One') {
          counterPlayerOne += 1;
          } else if (conditional === 'Two') {
          counterPlayerTwo += 1;
          } else {
          break;
          }
        // iterate through gameWinConditions
        // // declare counter variables for one and two
        // // // for each gameWinConditions[i], iterate through the array
        // // // if this.tokenGameSpaces[gameWinConditions] is === "One" || "Two"
        // // // // ++ counter "One" || "Two"
        // // need thrid condition else break (this is for the inner loop)
// // if counter one === 3 || two === 3, then win condition (checking line 51) currentPlayer.wins += 1
      }
      // if (counterPlayerOne === 3) {
      //   this.player1.wins += 1;
      //   this.resetGameBoard();
      // }
      // if (counterPlayerTwo === 3) {
      //   this.player2.wins += 1;
      //   this.resetGameBoard();
      // }
    }
  }
  // if (this.tokenGameSpaces.includes(this.gameWinConditions[i])){}


  detectDrawGame() {
  }

  resetGameBoard() {
    this.tokenGameSpaces = [
       boxA, boxB, boxC,
       boxD, boxE, boxF,
       boxG, boxH, boxI
    ];
    // this.changeTurn();
    this.turnCounter = 0;
  }
}
// [boxA, boxB, boxC], [boxD, boxE, boxF],
// [boxG, boxH, boxI], [boxA, boxD, boxG],
// [boxB, boxE, boxH], [boxC, boxF, boxI],
// [boxA, boxE, boxI], [boxC, boxE, boxG]
// 'abc','def','ghi',
// 'adg', 'beh','cfi',
// 'aei', 'ceg'
