class Room {
  constructor(x, y) {
    this.size = {
      x,
      y
    };
    this.tiles = null;
    this.edges = [];
    this.corners = [];
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

  findCorners() {
    this.corners.push(0);
    this.corners.push(this.size.x - 1);
    this.corners.push(this.size.x * this.size.y - this.size.x);
    this.corners.push(this.size.x * this.size.y - 1);
  }

  findEdges() {
    this.tiles.forEach((el, i) => {
      if (
        this.corners.indexOf(i) === -1 &&
        (i < this.size.x ||
          i > this.size.y * this.size.x - this.size.x - 1 ||
          i % this.size.x === 0 ||
          i % this.size.x === this.size.x - 1)
      ) {
        this.edges.push(i);
      }
    });
  }

  getEdgesTop() {
    return this.edges.filter(el => el < this.size.x);
  }

  getEdgesBottom() {
    return this.edges.filter(
      el => el > this.size.y * this.size.x - this.size.x - 1
    );
  }

  getEdgesLeft() {
    return this.edges.filter(el => el % this.size.x === 0);
  }

  getEdgesRight() {
    return this.edges.filter(el => el % this.size.x === this.size.x - 1);
  }

  getEdges() {
    return {
      left: this.getEdgesLeft(),
      right: this.getEdgesRight(),
      top: this.getEdgesTop(),
      bottom: this.getEdgesBottom()
    };
  }

  getEdgesAmount() {
    return {
      left: this.getEdgesLeft().length,
      right: this.getEdgesRight().length,
      top: this.getEdgesTop().length,
      bottom: this.getEdgesBottom().length
    };
  }

  removeRandomEdge(count = 1, edgesArr = this.edges) {
    let randomIndex;
    let randomEdge;

    for (let i = 0; i < count; i += 1) {
      randomIndex = Math.floor(Math.random() * edgesArr.length);
      randomEdge = edgesArr[randomIndex];

      this.tiles[randomEdge] = 0;
      edgesArr.splice(randomIndex, 1);
    }
  }

  init() {
    this.fillTiles();
  }
}

module.exports = Room;
