import { Builder } from "../interfaces/builder";
import { BaseBuilder } from "./base.builder";

export class BrickHouseBuilder extends BaseBuilder implements Builder {
  setBasement() {
    this.house.basement = "Brick basement";
  }
  setWalls() {
    this.house.walls.type = "Brick walls";
  }
  setRoof() {
    this.house.roof = "Brick roof";
  }
  paintWalls() {
    if (this.house.walls.type) {
      this.house.walls.painted = true;
    } else {
      throw new Error("Firstly you need to set walls");
    }
  }
  addCarpet() {
    this.house.carpet = "Green carpet";
  }

  setFence() {
    this.house.fence = "Beautiful fence";
  }

  setWindows() {
    this.house.windows = "Plastic windows";
  }
}
