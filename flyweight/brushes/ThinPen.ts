import { BrushSize } from "../enums/BrushSize";
import { Pen } from "../interfaces/Pen";

export class ThinPen implements Pen {
    size: BrushSize = BrushSize.THIN;
    color: string = null;

    setColor(color: string) {
        this.color = color;
    };
    draw (content: string) {
        console.log(`Drawing THIN content in ${this.color} color: ${content}`)
    };
}