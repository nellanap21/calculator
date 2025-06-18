import { Stack } from './stack.js'
import { Queue } from './queue.js'

export class Calculator {
    constructor() {
        this.stack = new Stack();
        this.queue = new Queue();
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

// This tests queue functionality
// this.queue.enqueue(1);
// this.queue.enqueue(2);
// console.log(this.queue.front());
// this.queue.print();
// this.queue.dequeue();
// this.queue.print();
// console.log(this.queue.isEmpty());
// console.log(this.queue.size());
// this.queue.dequeue();
// console.log(this.queue.isEmpty());