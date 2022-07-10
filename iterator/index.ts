import { NotificationCollection } from "./collections";
import { IteratorInterface } from "./interfaces/iterator";

const collection = new NotificationCollection();
collection.addItem('Hey')
collection.addItem('Second notification')
collection.addItem('Last one');
const iterator: IteratorInterface = collection.getIterator();

console.log('Collection state', collection)

while (iterator.hasMore()) {
    console.log('iterator step', iterator.getNext())
}