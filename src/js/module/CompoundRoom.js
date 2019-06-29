import { randFunc } from "./util";
import Room from "./Room";

class CompoundRoom {
  constructor() {
    this.size = {
      x: 0,
      y: 0
    };
    this.nextId = 1;
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

  clearRooms() {
    this.rooms = [];
  }

  addRoom(rule) {
    const randOffset = randFunc(rule.offsetMin, rule.offsetMax);
    const randRoomSize = randFunc(rule.roomSizeMin, rule.roomSizeMax);

    this.rooms.push({
      id: this.nextId,
      room: new Room(randRoomSize(), randRoomSize()).init(),
      copyEmptyTiles: rule.copyEmptyTiles,
      offset: {
        x: randOffset(),
        y: randOffset()
      }
    });

    this.nextId += 1;
  }
}

module.exports = CompoundRoom;
