class Game {
  constructor() {
    this.player1 = new Player('One', '🥓');
    this.player2 = new Player('Two', '🍩');
    this.turnCounter = 0;
    this.currentPlayer;
    this.tokenGameSpaces = [
       boxA, boxB, boxC,
       boxD, boxE, boxF,
       boxG, boxH, boxI
    ];
  }

  changeGameSpaceData(clickData) {
    this.turnCounter += 1;
    if (this.turnCounter % 2 === 0) {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }
    for (var i = 0; i < this.tokenGameSpaces.length; i++) {
      if (clickData === this.tokenGameSpaces[i].id) {
        this.tokenGameSpaces.splice(i, 1, this.currentPlayer.id);
      }
    }
    this.detectBoardConditions();
  }

  detectBoardConditions() {
    if (this.turnCounter >= 5 && this.turnCounter <= 9) {
      this.detectWinConditions();
    }
  }

// can this be smaller?

  detectWinConditions() {
    for (var i = 0; i < this.tokenGameSpaces.length; i++) {
      if (this.tokenGameSpaces[0] === this.tokenGameSpaces[1] && this.tokenGameSpaces[1] === this.tokenGameSpaces[2] && this.tokenGameSpaces[2] === this.currentPlayer.id) {
        this.updateDataToReflectWin();
      } else if (this.tokenGameSpaces[3] === this.tokenGameSpaces[4] && this.tokenGameSpaces[4] === this.tokenGameSpaces[5] && this.tokenGameSpaces[5] === this.currentPlayer.id) {
        this.updateDataToReflectWin();
      } else if (this.tokenGameSpaces[6] === this.tokenGameSpaces[7] && this.tokenGameSpaces[7] === this.tokenGameSpaces[8] && this.tokenGameSpaces[8] === this.currentPlayer.id) {
        this.updateDataToReflectWin();
      } else if (this.tokenGameSpaces[0] === this.tokenGameSpaces[3] && this.tokenGameSpaces[3] === this.tokenGameSpaces[6] && this.tokenGameSpaces[6] === this.currentPlayer.id) {
        this.updateDataToReflectWin();
      } else if (this.tokenGameSpaces[1] === this.tokenGameSpaces[4] && this.tokenGameSpaces[4] === this.tokenGameSpaces[7] && this.tokenGameSpaces[7] === this.currentPlayer.id) {
        this.updateDataToReflectWin();
      } else if (this.tokenGameSpaces[2] === this.tokenGameSpaces[5] && this.tokenGameSpaces[5] === this.tokenGameSpaces[8] && this.tokenGameSpaces[8] === this.currentPlayer.id) {
        this.updateDataToReflectWin();
      } else if (this.tokenGameSpaces[0] === this.tokenGameSpaces[4] && this.tokenGameSpaces[4] === this.tokenGameSpaces[8] && this.tokenGameSpaces[8] === this.currentPlayer.id) {
        this.updateDataToReflectWin();
      } else if (this.tokenGameSpaces[2] === this.tokenGameSpaces[4] && this.tokenGameSpaces[4] === this.tokenGameSpaces[6] && this.tokenGameSpaces[6] === this.currentPlayer.id) {
        this.updateDataToReflectWin();
      } else if (this.turnCounter === 9) {
        this.resetGameBoard();
        this.currentPlayer.saveWinsToStorage();
      }
    }
  }

  updateDataToReflectWin() {
    this.currentPlayer.addWin();
    this.resetGameBoard();
    this.currentPlayer.saveWinsToStorage();
  }


  resetGameBoard() {
    this.tokenGameSpaces = [
      boxA, boxB, boxC,
      boxD, boxE, boxF,
      boxG, boxH, boxI
    ];
    this.turnCounter = 0;
  }
}

// this.detectDrawGame();
// detectDrawGame() {
  //   if (this.turnCounter === 9) {
    //     this.resetGameBoard();
    //   }
    // }

  // detectWinConditions() {
  //   for (var i = 0; i < this.gameWinConditions.length; i++) {
  //     var counterPlayerOne = 0;
  //     var counterPlayerTwo = 0;
  //     console.log('counters', counterPlayerOne, counterPlayerTwo);
  //     console.log('game win conditions', this.gameWinConditions[i]);
  //     for (var j = 0; j < this.gameWinConditions[i].length; j++) {
  //       var conditional = this.tokenGameSpaces[this.gameWinConditions[i][j]]
  //       console.log('conditional', conditional);
  //       if (conditional === 'One') {
  //       counterPlayerOne += 1;
  //       } else if (conditional === 'Two') {
  //       counterPlayerTwo += 1;
  //       } else {
  //       break;
  //       }

        // iterate through gameWinConditions
        // // declare counter variables for one and two
        // // // for each gameWinConditions[i], iterate through the array
        // // // if this.tokenGameSpaces[gameWinConditions] is === "One" || "Two"
        // // // // ++ counter "One" || "Two"
        // // need thrid condition else break (this is for the inner loop)
// // if counter one === 3 || two === 3, then win condition (checking line 51) currentPlayer.wins += 1
      // }
      // if (counterPlayerOne === 3) {
      //   this.player1.wins += 1;
      //   this.resetGameBoard();
      // }
      // if (counterPlayerTwo === 3) {
      //   this.player2.wins += 1;
      //   this.resetGameBoard();
      // }
  //   }
  // }
  // if (this.tokenGameSpaces.includes(this.gameWinConditions[i])){}


  // this.gameWinConditions = [
    //   [0, 1, 2], [3, 4, 5],
    //   [6, 7, 8], [0, 3, 6],
    //   [1, 4, 7], [2, 5, 8],
    //   [0, 4, 8], [2, 4, 6]
    //
    // ];
// [boxA, boxB, boxC], [boxD, boxE, boxF],
// [boxG, boxH, boxI], [boxA, boxD, boxG],
// [boxB, boxE, boxH], [boxC, boxF, boxI],
// [boxA, boxE, boxI], [boxC, boxE, boxG]
// 'abc','def','ghi',
// 'adg', 'beh','cfi',
// 'aei', 'ceg'
