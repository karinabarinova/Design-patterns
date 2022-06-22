import { BrickHouseBuilder } from "./builders/brickhouse.builder";
import { WoodHouseBuilder } from "./builders/woodhouse.builder";
import { Director } from "./director";

const director = new Director();
const brickHouseBuilder = new BrickHouseBuilder();
const brickHouse = director.buildBrickHouse(brickHouseBuilder);

console.log("Brick house", brickHouse);

const woodHouseBuilder = new WoodHouseBuilder();
const woodHouse = director.buildWoodHouse(woodHouseBuilder);

console.log("Wood house", woodHouse);
