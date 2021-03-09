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
  localStorage.setItem(`${this.id}`, JSON.stringify(this.wins))
  }

  retrieveWinsFromStorage() {
  // load wins to page on refresh
  this.wins = JSON.parse(localStorage.getItem(`${this.id}`)) || 0;
  }
}
