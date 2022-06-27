import { MediumPen } from "../brushes/MediumPen";
import { ThickPen } from "../brushes/ThickPen";
import { ThinPen } from "../brushes/ThinPen";
import { Pen } from "../interfaces/Pen";

export class PenFactory {
    pensMap: Map<string, Pen> = new Map();

    getThickPen(color: string) {
        const key = color + "-THICK";
        let pen: Pen = this.pensMap.get(key);

        if (!pen) {
            pen = new ThickPen();
            pen.setColor(color);
            this.pensMap.set(key, pen);
        }

        return pen;
    }

    getMediumPen(color: string) {
        const key = color + "-MEDIUM";
        let pen: Pen = this.pensMap.get(key);

        if (!pen) {
            pen = new MediumPen();
            pen.setColor(color);
            this.pensMap.set(key, pen);
        }

        return pen;
    }

    getThinPen(color: string) {
        const key = color + "-THIN";
        let pen: Pen = this.pensMap.get(key);

        if (!pen) {
            pen = new ThinPen();
            pen.setColor(color);
            this.pensMap.set(key, pen);
        }

        return pen;
    }
}