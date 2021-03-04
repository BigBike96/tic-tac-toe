class Game {
  constructor() {
    this.player1 = new Player('One', 🍩);
    this.player2 = new Player('Two', 🥓);
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
}
