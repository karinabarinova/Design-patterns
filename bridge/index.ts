import { Radio } from "./devices/Radio";
import { TV } from "./devices/TV";
import { Remote } from "./remote";

const tv = new TV();
let remote = new Remote(tv);

remote.togglePower()
remote.nextChannel();
remote.volumeUp()
remote.volumeUp();
remote.volumeDown();
console.log('=================')
console.log({ tv });
console.log('=================')

const radio = new Radio();
remote = new Remote(radio);
remote.togglePower();
remote.volumeDown();
remote.volumeUp();
remote.volumeUp();
remote.nextChannel();
console.log('=================')
console.log({ radio });
console.log('=================')
