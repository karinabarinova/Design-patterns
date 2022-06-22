import { HousePlan } from "../interfaces/houseplan";

export interface Builder {
  reset: () => void;
  setBasement: () => void;
  setWalls: () => void;
  setRoof: () => void;
  addCarpet: () => void;
  paintWalls: () => void | Error;
  setWindows: () => void;
  setFence?: () => void;
  getResult: () => HousePlan;
}
