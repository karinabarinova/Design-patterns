import { PenFactory } from "./factories/PenFactory";

const green = "GREEN";
const red = "RED"

const penFactory = new PenFactory();
const redPen = penFactory.getThickPen(red);
redPen.draw("Some random text");

const greenPen = penFactory.getMediumPen(green);
greenPen.draw('Hello world');

const anotherGreenPen = penFactory.getMediumPen(green);

console.log({pensMap: penFactory.pensMap, mapLength: penFactory.pensMap.size});
