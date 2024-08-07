class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(data) {
        this.queue.push(data);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is Empty";
        }
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return "Queue is Empty";
        }
        return this.queue[0];
    }

    size() {
        return this.queue.length;
    }

    clear() {
        this.queue = [];
    }

    printQueue() {
        let str = "";
        for (let i = 0; i < this.queue.length; i++) {
            const element = this.queue[i];
            str += element + "[" + [i] + "]" + "\n";
        }

        return str;
    }
}

// Usage Example

let myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(14);
myQueue.enqueue(45);
myQueue.enqueue(75);
console.log(myQueue.printQueue());

myQueue.dequeue();
console.log(myQueue.peek());
console.log(myQueue.printQueue());
