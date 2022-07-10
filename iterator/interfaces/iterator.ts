export interface IteratorInterface {
    hasMore: () => boolean;
    getNext: () => any;
}