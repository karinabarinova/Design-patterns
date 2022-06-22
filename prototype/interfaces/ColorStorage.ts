import { Color } from "./Color";

export interface ColorStorage {
  items: Color[];
  addNew: (item: Color) => void;
}
