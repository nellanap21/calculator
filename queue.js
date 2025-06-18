
export class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element);
    }

    dequeue(element) {
        this.queue.shift(element);
    }

    front() {
        return this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    size() {
        return this.queue.length;
    }

    print() {
        let str = "";
        for (let i = 0; i < queue.length; i++) {
            str += this.queue[i] + " ";
        }
        console.log(str);
    }
}