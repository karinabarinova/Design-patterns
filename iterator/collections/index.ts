import { Collection } from "../interfaces/collection";
import { NotificationInterface } from "../interfaces/notifications";
import { Notification } from "../notification";
import { NotificationIterator } from '../iterators'

export class NotificationCollection implements Collection {
    notificationList: NotificationInterface[] = [];

    addItem(text: string) {
        this.notificationList.push(new Notification(text));
    }

    getIterator() {
        return new NotificationIterator(this.notificationList);

    }
}
