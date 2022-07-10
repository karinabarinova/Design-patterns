import { IStrategy } from "../interfaces/strategy";

export class AdditionStrategy implements IStrategy {
    execute(a: number, b: number) {
        return a + b;
    }
}