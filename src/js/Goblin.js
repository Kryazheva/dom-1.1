/* eslint-disable guard-for-in */
/* eslint-disable class-methods-use-this */
export default class Goblin {
  constructor(element) {
    this.colls = Array.from(element.querySelectorAll('.game-col'));
    this.headGoblin = 'game-col-goblin';
  }

  toggleClass() {
    let playing = 0;
    let activeCol = 0;
    setInterval(() => {
      while (playing === activeCol) {
        activeCol = Math.floor(Math.random() * 9);
      }
      playing = activeCol;
      for (const col in this.colls) {
        // console.log(col)
        this.colls[col].classList.remove(this.headGoblin);
      }
      this.colls[playing].classList.add(this.headGoblin);
    }, 1000);
  }
}
