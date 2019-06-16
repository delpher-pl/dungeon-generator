class CompoundRoom {
  constructor() {
    this.size = {
      x: 0,
      y: 0
    };
    this.tiles = [];
    this.rooms = [];
  }

  setTile(index, value, copyEmpty = true) {
    if (!copyEmpty && value === 0) {
      return false;
    }
    this.tiles[index] = value;
    return true;
  }

  getTiles() {
    return this.tiles;
  }
}

module.exports = CompoundRoom;
