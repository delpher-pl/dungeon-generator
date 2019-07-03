class Maze {
  constructor(sizeX, sizeY) {
    this.size = {
      x: sizeX,
      y: sizeY
    };
    this.tiles = null;
  }

  createEmptyMap() {
    this.tiles = Array.from({ length: this.size.x * this.size.y }, () => 0);
  }

  getTileIndex(x, y) {
    if (x >= 0 && x < this.size.x && y >= 0 && y < this.size.y) {
      return this.size.x * y + x;
    }
    return -1;
  }

  getTile(x, y) {
    if (x >= 0 && x < this.size.x && y >= 0 && y < this.size.y) {
      return this.tiles[this.getTileIndex(x, y)];
    }
    return -1;
  }
}

module.exports = Maze;
