import { IStrategy } from "../interfaces/strategy";

export class SubtractionStrategy implements IStrategy {
    execute(a: number, b: number) {
        return a - b;
    }
}