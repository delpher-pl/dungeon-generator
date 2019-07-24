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

  setTile(x, y, value) {
    if (arguments.length === 3 && this.isInRange(x, y)) {
      this.tiles[this.getTileIndex(x, y)] = value;
      return true;
    }
    if (arguments.length === 2 && x >= 0 && x < this.tiles.length) {
      this.tiles[x] = y;
      return true;
    }

    return false;
  }
}

module.exports = Branch;
