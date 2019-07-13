class Branch {
  constructor() {
    this.tiles = [];
  }

  isInRange(x, y) {
    return x >= 0 && x < this.size.x && y >= 0 && y < this.size.y;
  }

  getTiles() {
    return this.tiles;
  }
}

module.exports = Branch;
