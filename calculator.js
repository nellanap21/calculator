import { Stack } from './stack.js'
import { Queue } from './queue.js'
import { HashTable } from './hashTable.js'

export class Calculator {
    constructor() {
        this.table = new HashTable(6);
        this.vNamespace = /[A-Z]/;
        this.tNamespace = /\+|-|\*|\/|\.|=|\s|[A-Z]|0-9|/;
    }

    tokenize(input) {
        let queue = new Queue();

        // remove spaces before, end, and in middle
        let cleanedInput = input.replace(/\s+/g, ' ').trim();
        
        // split into tokens
        let tokens = cleanedInput.split(" ");

        for (let i = 0; i < tokens.length; i++) {
            // check if tokens are in token namespace
            if (!this.tNamespace.test(tokens[i])) throw new Error (`Invalid token entered`);

            // check syntax of assignment operator
            if (tokens[i] === '=' && i !== (tokens.length - 1)) throw new Error (`Assignment must be at end`);
        }

        // check for valid expression
        let operands = 0;
        let operators = 0;
        for (let i = 0; i < tokens.length; i++) {
            if (!isNaN(tokens[i])) {
                operands++;
            } else if ( this.vNamespace.test(tokens[i]) ) {
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
                // store numbers in stack
                stack.push(token);
            } else if ( this.vNamespace.test(token) ) { 
                // store variables in stack
                stack.push(token);
            } else if (token === '=') { 
                // assignment operation
                let a = stack.pop();
                let b = stack.pop();
                if (this.vNamespace.test(a)) a = this.table.search(a).slice(1);
                this.table.insert(b + a);
                let confirm = (`${b} = ${a} saved`);
                return confirm;

            } else { 
                // remove top 2 operands from stack and apply operator
                let a = stack.pop();
                let b = stack.pop();
                
                // if variable, search for value in table, remove first char
                if (this.vNamespace.test(a)) a = this.table.search(a).slice(1);
                if (this.vNamespace.test(b)) b = this.table.search(b).slice(1);

                let c = this.operation(Number(a), Number(b), token);

                // push the result back to stack
                stack.push(c);

                console.log(`Showing my work: ${b} ${token} ${a} = ${c}`);
            }
        }
        // return the final value
        return stack.pop();
    }

    showTable() {
        this.table.print();
    }

}
