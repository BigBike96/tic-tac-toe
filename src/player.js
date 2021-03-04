class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
  }

  addWin() {
    this.win += 1;
  }

  saveWinsToStorage() {

  }

  retrieveWinsFromStorage() {

  }
}
