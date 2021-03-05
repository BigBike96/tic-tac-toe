class Game {
  constructor() {
    this.player1 = new Player('One', '🥓');
    this.player2 = new Player('Two', '🍩');
    this.turn = true; // or [player1, player2]??
    this.tokenGameSpace = [
       boxA, boxB, boxC,
       boxD, boxE, boxF,
       boxG, boxH, boxI
    ];
    this.gameWinConditions = [
      'abc','def','ghi',
      'adg', 'beh','cfi',
      'aei', 'ceg'
    ];
  }

  changeGameSpaceData(event) {
    for (var i = 0; i < this.tokenGameSpace.length) {
    if (this.target.id === this.tokenGameSpace[i]) {
      this.tokenGameSpace.splice(i, 1);
      //whatever is clicked, update data
    }
    }
  }

  changeTurn() {
    this.turn = !this.turn;
  }

  detectWinConditions() {

  }

  detectDrawGame() {

  }

  resetGameBoard() {

  }
}
