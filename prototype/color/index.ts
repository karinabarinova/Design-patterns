import { Color } from "../interfaces/Color";

export class BaseColor implements Color {
  colorName: string;
  red: number;
  green: number;
  blue: number;

  constructor(colorName: string, red: number, green: number, blue: number) {
    this.colorName = colorName;
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  clone() {
    return new BaseColor(this.colorName, this.red, this.green, this.blue);
  }
}
