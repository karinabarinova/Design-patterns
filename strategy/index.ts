import { Context } from "./context";
import { AdditionStrategy } from "./strategies/addition";
import { DivisionStrategy } from "./strategies/division";
import { MultiplicationStrategy } from "./strategies/multiply";
import { SubtractionStrategy } from "./strategies/subtraction";

const add = 'addition';
const subtract = 'subtraction';
const divide = 'division';
const multiply = 'multiplication';

const context = new Context();
let actions = [add, subtract, divide, multiply];

function doSomething(action: string) {
    const a = 100;
    const b = 20;

    if (action === add) {
        context.setStrategy(new AdditionStrategy())
    } else if (action === subtract) {
        context.setStrategy(new SubtractionStrategy())
    }  else if (action === divide) {
        context.setStrategy(new DivisionStrategy())
    }  else if (action === multiply) {
        context.setStrategy(new MultiplicationStrategy())
    }

    console.log('strategy =>', action , context.doJob(a, b));
}

actions.forEach(action => {
    doSomething(action)
})
