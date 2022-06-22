import { Builder } from "../interfaces/builder";
import { HousePlan } from "../interfaces/houseplan";

export class BaseBuilder implements Builder {
  house: HousePlan;

  reset() {
    this.house = {
        basement: null,
        walls: {
          type: null,
          painted: false
        },
        roof: null,
        carpet: null,
        windows: null,
        fence: null
    };
  }
  setBasement() {
    this.house.basement = "Base basement";
  }
  setWalls() {
    this.house.walls.type = "Base walls";
  }
  setRoof() {
    this.house.roof = "Base roof";
  }
  paintWalls() {
    if (this.house.walls.type) {
      this.house.walls.painted = true;
    } else {
      throw new Error("Firstly you need to set walls");
    }
  }
  addCarpet() {
    this.house.carpet = "Base carpet";
  }
  setWindows() {
    this.house.windows = "Base windows";
  }

  getResult(): HousePlan {
    return this.house;
  }
}
