import { Stack } from './stack.js'
import { Queue } from './queue.js'

export class Calculator {
    constructor() {
        // this.queue = new Queue();
    }

    calculate(input) {
        let queue = this.tokenize(input);
        queue.print();

        return 1;
    }

    tokenize(input) {
        let queue = new Queue();
        let tokens  = input.split(" ");
        for (let i = 0; i < tokens.length; i++) {
            queue.enqueue(tokens[i]);
        }
        return queue;
    }

    operation(a, b, operator) {
        if (operator = '+')
            return a + b
        else if (operator = '-')
            return b - a
        else if (operator = '*')
            return a * b
        else if (operator = '/')
            return b / a
    }

    evaluate(input) {

        let stack = new Stack();
        // while (input is not empty)
        //     token <- dequeue(input)
        //     if token is a number
        //         push(token, stack)
        //     else
        //         a <- pop(stack)
        //         b <- pop(stack)
        //         c <- operation(a, b, token)
        //         push(c, stack)
        // return pop(stack)
    }


}
