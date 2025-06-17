
export class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
    }

    pop() {
        return this.stack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }

    print() {
        let str = "";
        for (let i = this.stack.length - 1; i >= 0; i--) {
            str += this.stack[i] + " ";
        }
        console.log(str);
    }
}