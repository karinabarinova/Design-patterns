import { Builder } from "../interfaces/builder";
import { BaseBuilder } from "./base.builder";

export class WoodHouseBuilder extends BaseBuilder implements Builder {
  setBasement() {
    this.house.basement = "Wooden basement";
  }
  setWalls() {
    this.house.walls.type = "Wooden walls";
  }
  setRoof() {
    this.house.roof = "Wooden roof";
  }
  addCarpet() {
    this.house.carpet = "Red carpet";
  }
  paintWalls() {
    if (this.house.walls.type) {
      this.house.walls.painted = true;
    } else {
      throw new Error("Firstly you need to set walls");
    }
  }
  setWindows() {
    this.house.windows = "Wooden windows";
  }
}
