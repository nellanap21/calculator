import { Calculator } from './calculator.js';

import {createInterface } from 'node:readline';
import {stdin, stdout } from 'node:process';

const calculator = new Calculator();


const rl = createInterface({
    input: stdin,
    output: stdout
});

function printMenu() {
    console.log("=======================================================");
    console.log("This is the postfix++ calculator");
    console.log("Operands and operators must be separated by a space ' '");
    console.log("Operations consist only of + - / *");
    console.log("Variable namespace consists only of the names 'A'-'Z'");
    console.log("=======================================================");
}

function promptInput() {

    // this function is async, so it doesn't block
    rl.question('Enter postfix expression: ', (input) => {
        try {
            console.log(calculator.evaluate(input));
            calculator.showTable();
        } catch(error) {
            console.error("Error:", error.message);
        }
        // must make recursive call inside callback to prevent stack overflow
        promptInput();

    });
}

function testInput() {
    // test assigning all variables in namespace
    for (let i = 0; i < 26; i++) {
        let str = String.fromCharCode(65+i) + " " + i + " =";
        calculator.evaluate(str);
    }
    calculator.showTable();

    for (let i = 0; i < 26; i++) {
        let str = String.fromCharCode(65+i) + " " + i + " +";
        console.log(calculator.evaluate(str));
    }
}
printMenu();
promptInput();
// testInput();