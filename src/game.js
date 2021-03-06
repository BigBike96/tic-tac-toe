class Game {
  constructor() {
    this.player1 = new Player('One', '🥓');
    this.player2 = new Player('Two', '🍩');
    // this.turn = true; or [player1, player2]??
    this.turnCounter = 0;
    // this.currentPlayer;
    this.tokenGameSpace = [
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
    this.changeTurn();
    var currentPlayer;
    if (this.turnCounter % 2 === 0) {
      currentPlayer = this.player2;
    } else {
      currentPlayer = this.player1;
    }
    for (var i = 0; i < this.tokenGameSpace.length; i++) {
      if (event === this.tokenGameSpace[i]) {
        this.tokenGameSpace.splice(i, 1, currentPlayer.id);
      }
    }
  }

  changeTurn() {
    this.turn = !this.turn;
  }

  detectBoardConditions() {
    if (this.turnCounter >= 5 && this.turnCounter <= 9) {
      detectWinConditions();
      detectDrawGame();
    }
  }

  detectWinConditions() {
    // iterate through gameWinConditions
    // // declare counter variables for one and two
    // // // for each gameWinCondition[i], iterate through the array
    // // // if this.tokenGameSpace[gameWinCondition[j < gameWinConditions[i].length]] is === "One" || "Two"
    // // // // ++ counter "One" || "Two"
    // // need thrid condition else break (this is for the inner loop)
    // // if counter one === 3 || two === 3, then win condition (checking line 51) currentPlayer.wins += 1
    for (var i = 0; i < this.gameWinConditions.length; i++) {
      // if(this.gameWinConditions )
      if (this.tokenGameSpace.includes(this.gameWinConditions[i])){}
    }
  }

  detectDrawGame() {
  }

  resetGameBoard() {
    this.tokenGameSpace = [
       boxA, boxB, boxC,
       boxD, boxE, boxF,
       boxG, boxH, boxI
    ];
    this.changeTurn();
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
