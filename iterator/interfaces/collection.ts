import { IteratorInterface } from "./iterator";

export interface Collection {
    getIterator: () => IteratorInterface;
}