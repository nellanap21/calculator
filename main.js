import { Calculator } from './calculator.js';

import {createInterface } from 'node:readline';
import {stdin, stdout } from 'node:process';

const calculator = new Calculator('World');


const rl = createInterface({
    input: stdin,
    output: stdout
});

function printMenu() {
    console.log("=======================================================");
    console.log("This is the postfix++ calculator");
    console.log("Operands and operators must be separated by a space ' '");
    console.log("=======================================================");
}

function promptInput() {

    // this function is async, so it doesn't block
    rl.question('Type postfix expression: ', (input) => {
        calculator.calculate(input);
        // must make recursive call inside callback to prevent stack overflow
        promptInput();

    });
}

printMenu();
promptInput();