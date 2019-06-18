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

  createEmptyRoom() {
    this.tiles = Array.from({ length: this.size.x * this.size.y }, () => 0);
  }
}

module.exports = CompoundRoom;
