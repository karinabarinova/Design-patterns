import { NotificationInterface } from "../interfaces/notifications";

export class NotificationIterator {
    list: NotificationInterface[];
    position: number = 0;

    constructor(list: NotificationInterface[]) {
        this.list = list;
    }

    getNext() {
        console.log()
        const el = this.list[this.position];
        this.position += 1;
        return el.text;
    }

    hasMore() {
        const pos = this.position;
        return pos >= this.list.length ||
            this.list[pos] == null ? false : true;
    }
}