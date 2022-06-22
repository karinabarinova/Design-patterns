export interface Color {
  colorName: string;
  red: number;
  green: number;
  blue: number;
  clone: () => Color;
}
