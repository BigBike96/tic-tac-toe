class Game {
  constructor() {
    this.player1 = new Player('One', '🥓');
    this.player2 = new Player('Two', '🍩');
    this.turn = true; // or [player1, player2]??
    this.turnCounter = 0;
    this.tokenGameSpace = [
       boxA, boxB, boxC,
       boxD, boxE, boxF,
       boxG, boxH, boxI
    ];
    this.gameWinConditions = [
      [boxA, boxB, boxC], [boxD, boxE, boxF],
      [boxG, boxH, boxI], [boxA, boxD, boxG],
      [boxB, boxE, boxH], [boxC, boxF, boxI],
      [boxA, boxE, boxI], [boxC, boxE, boxG]
      // 'abc','def','ghi',
      // 'adg', 'beh','cfi',
      // 'aei', 'ceg'
    ];
  }

  changeGameSpaceData(event) {
    this.turnCounter += 1;
    this.changeTurn();
    for (var i = 0; i < this.tokenGameSpace.length; i++) {
    if (event === this.tokenGameSpace[i]) {
      this.tokenGameSpace.splice(i, 1, this.player1.token);

    }
    }
  }

  changeTurn() {
    this.turn = !this.turn;
  }

  detectWinConditions() {
    for (var i = 0; i < this.gameWinConditions.length; i++) {
      if (this.tokenGameSpace.includes(this.gameWinConditions[i])){}
    }
  }

  detectDrawGame() {
    if (this.turnCounter >= 5 && this.turnCounter <= 9) {

    }
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
