import { BaseColor } from "./color";
import { CentralStorage } from "./storage";

const storage = new CentralStorage();
const white = new BaseColor("white", 255, 255, 255);
const purple = new BaseColor("purple", 128, 0, 128);

storage.addNew(white);
storage.addNew(purple);

const whiteClone = white.clone();
const purpleClone = purple.clone();

console.log("================");
console.log("Storage: ", storage);
console.log("================");
console.log("White: ", white);
console.log("White clone: ", whiteClone);
console.log("================");
console.log("Purple: ", purple);
console.log("Purple clone: ", purpleClone);
console.log("================");
