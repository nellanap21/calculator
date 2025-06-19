import { Stack } from './stack.js'
import { Queue } from './queue.js'

export class Calculator {
    constructor() {
        
    }

    tokenize(input) {
        let queue = new Queue();

        // remove spaces before, end, and in middle
        let cleanedInput = input.replace(/\s+/g, ' ').trim();
        
        // split into tokens
        let tokens = cleanedInput.split(" ");

        let operands = 0;
        let operators = 0;

        for (let i = 0; i < tokens.length; i++) {
            if (!isNaN(tokens[i])) {
                operands++;
            } else {
                operators++;
            }
        }
        if (operands - 1 != operators) {
            throw new Error(`Not a valid expression. Operators must be 1 less than operands`);
        }

        // add to queue
        for (let i = 0; i < tokens.length; i++) {
            queue.enqueue(tokens[i]);
        }
        return queue;
    }

    operation(a, b, operator) {
        if (operator === '+')
            return a + b
        else if (operator === '-')
            // tokens read from left to right, so you reverse subtraction
            return b - a
        else if (operator === '*')
            return a * b
        else if (operator === '/')
            if (a === 0) {
                throw new Error (`Cannot divide by zero`);
            }
            // tokens read from left to right, so you reverse division
            return b / a
    }

    evaluate(input) {

        // convert input into a queue of tokens
        let queue = this.tokenize(input);

        // temp stack to store tokens in reverse order
        let stack = new Stack();

        while (!queue.isEmpty()) {

            // take token from front of queue
            let token = queue.dequeue();

            // check if token is a number
            if (!isNaN(token)) {
                console.log(`${token} is a number`);
                stack.push(token);
            } else { 
                console.log(`${token} is not a number`);
                let a = Number(stack.pop());
                let b = Number(stack.pop());
                let c = this.operation(a, b, token);
                console.log(a + " " + b + " " + token + " = " + c);
                stack.push(c);
            }
        }

        return stack.pop();
    }


}
