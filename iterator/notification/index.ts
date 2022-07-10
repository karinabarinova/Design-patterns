import { NotificationInterface } from "../interfaces/notifications";

export class Notification implements NotificationInterface {
    text: string;
    constructor(text: string) {
        this.text = text;
    }

    getNotification(): string {
        return this.text;
    }
}