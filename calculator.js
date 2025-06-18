import { Stack } from './stack.js'

export class Calculator {
    constructor(name) {
        this.name = name;
        this.stack = new Stack();
    }

    greet() {

    }
}


// Test stack functions
// console.log(`Hello, ${this.name}!`);
// this.stack.push(1);
// this.stack.push(2);
// this.stack.push(3);
// this.stack.print();
// console.log(this.stack.top());
// console.log(this.stack.size());
// this.stack.pop();
// this.stack.print();
// console.log(this.stack.top());
// console.log(this.stack.size());
// console.log(this.stack.isEmpty());
// console.log(this.stack.pop());
// console.log(this.stack.pop());
// console.log(this.stack.isEmpty());