class Game {
  constructor() {
    this.player1 = new Player('One', '🥓');
    this.player2 = new Player('Two', '🍩');
    this.turnCounter = 0;
    this.currentPlayer;
    this.drawGame = false;
    this.tokenGameSpaces = [
       boxA, boxB, boxC,
       boxD, boxE, boxF,
       boxG, boxH, boxI
    ];
  }

  updateTurnData(clickData) {
    this.turnCounter += 1;
    if (this.turnCounter % 2 === 0) {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }
    this.placeMove(clickData);
  }

  placeMove(clickData) {
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
        this.drawGame = true;
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
