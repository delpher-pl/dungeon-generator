class Room {
  constructor(x, y) {
    this.size = {
      x,
      y
    };
    this.tiles = null;
  }

  validateCoordinates(x, y) {
    return x >= 0 && x < this.size.x && y >= 0 && y < this.size.y;
  }

  fillTiles() {
    this.tiles = Array.from({ length: this.size.x * this.size.y }, () => 1);
  }

  returnIndex(x, y) {
    return this.size.x * y + x;
  }

  getIndex(x, y) {
    if (this.validateCoordinates(x, y)) {
      return this.returnIndex(x, y);
    }
    return -1;
  }

  getTile(x, y) {
    if (this.validateCoordinates(x, y)) {
      return this.tiles[this.returnIndex(x, y)];
    }
    return -1;
  }

  getTiles() {
    return this.tiles;
  }

  setTile(x, y, value) {
    if (arguments.length === 3) {
      if (this.validateCoordinates(x, y)) {
        this.tiles[this.returnIndex(x, y)] = value;
        return true;
      }
    } else if (arguments.length === 2) {
      if (x >= 0 && x < this.tiles.length) {
        this.tiles[x] = y;
        return true;
      }
    }

    return false;
  }

  init() {
    this.fillTiles();
  }
}

module.exports = Room;
