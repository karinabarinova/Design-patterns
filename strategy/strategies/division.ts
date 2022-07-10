import { IStrategy } from "../interfaces/strategy";

export class DivisionStrategy implements IStrategy {
    execute(a: number, b: number) {
        return a / b;
    }
}