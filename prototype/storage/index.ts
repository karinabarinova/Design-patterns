import { Color } from "../interfaces/Color";
import { ColorStorage } from "../interfaces/ColorStorage";

export class CentralStorage implements ColorStorage {
  items: Color[] = [];

  addNew(item: Color) {
    this.items.push(item);
  }
}
