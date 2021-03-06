class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
  }

  addWin() {
    this.wins += 1;
  }

  saveWinsToStorage() {
  // save wins to local storage to presits on re-fresh
  }

  retrieveWinsFromStorage() {
  // load wins to page on refresh
  }
}
