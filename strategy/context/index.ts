import { IContext } from "../interfaces/context";
import { IStrategy } from "../interfaces/strategy";

export class Context implements IContext {
    strategy: IStrategy;

    setStrategy(strategy: IStrategy) {
        this.strategy = strategy;
    }

    doJob (a: number, b: number): number {
        return this.strategy.execute(a, b);
    };
}