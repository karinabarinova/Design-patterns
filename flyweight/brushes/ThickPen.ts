import { BrushSize } from "../enums/BrushSize";
import { Pen } from "../interfaces/Pen";

export class ThickPen implements Pen {
    size: BrushSize = BrushSize.THICK;
    color: string = null;

    setColor(color: string) {
        this.color = color;
    };
    draw (content: string) {
        console.log(`Drawing THICK content in ${this.color} color: ${content}`)
    };
}