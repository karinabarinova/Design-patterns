export interface IteratorInterface {
    hasMore: () => boolean;
    getNext: () => string;
}