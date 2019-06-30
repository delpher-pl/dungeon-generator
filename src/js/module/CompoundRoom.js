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

  createRoom(rules) {
    let rulesArr;
    if (Array.isArray(rules)) {
      rulesArr = rules;
    } else if (typeof rules === "object" && rules !== null) {
      rulesArr = [rules];
    } else if (rules) {
      rulesArr = this.rules[rules];
    } else {
      throw Error("CompoundRoom.createRoom(rules): Invalid argument!");
    }

    for (let index = 0; index < rulesArr.length; index += 1) {
      const o = Object.assign({}, this.rules.default, rulesArr[index]);
      const { repeat } = o;

      for (let r = 0; r < repeat; r += 1) {
        this.addRoom(o);
      }
    }
  }
}

module.exports = CompoundRoom;
