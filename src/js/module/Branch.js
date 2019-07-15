class Branch {
  constructor() {
    this.size = {
      x: 0,
      y: 0
    };
    this.tiles = [];
  }

  isInRange(x, y) {
    return x >= 0 && x < this.size.x && y >= 0 && y < this.size.y;
  }

  createEmptyBranch() {
    this.tiles = Array.from({ length: this.size.x * this.size.y }, () => 0);
  }

  getTiles() {
    return this.tiles;
  }
}

module.exports = Branch;
