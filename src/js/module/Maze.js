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
}

module.exports = Maze;
