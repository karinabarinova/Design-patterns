import { BrushSize } from "../enums/BrushSize";
import { Pen } from "../interfaces/Pen";

export class MediumPen implements Pen {
    size: BrushSize = BrushSize.MEDIUM;
    color: string = null;

    setColor(color: string) {
        this.color = color;
    };
    draw (content: string) {
        console.log(`Drawing MEDIUM content in ${this.color} color: ${content}`)
    };
}