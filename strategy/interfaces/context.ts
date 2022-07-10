import { IStrategy } from "./strategy";

export interface IContext {
    strategy: IStrategy;
    setStrategy: (strategyInstance: IStrategy) => void;
    doJob: (a: number, b: number) => number;
}