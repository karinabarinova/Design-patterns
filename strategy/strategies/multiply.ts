import { IStrategy } from "../interfaces/strategy";

export class MultiplicationStrategy implements IStrategy {
    execute(a: number, b: number) {
        return a * b;
    }
}