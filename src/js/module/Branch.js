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

  getTileIndex(x, y) {
    if (this.isInRange(x, y)) {
      return this.size.x * y + x;
    }
    return -1;
  }

  getTile(x, y) {
    if (this.isInRange(x, y)) {
      return this.tiles[this.getTileIndex(x, y)];
    }
    return -1;
  }
}

module.exports = Branch;
