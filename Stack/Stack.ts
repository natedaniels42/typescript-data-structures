import LinkedList from "../LinkedList/LinkedList";
import Node from "../Node/Node";

class Stack {
    stack: LinkedList;
    size: number;
    maxSize: number;

    constructor(maxSize = Infinity) {
        this.stack = new LinkedList();
        this.size = 0;
        this.maxSize = maxSize;
    }

    hasRoom(): boolean {
        return this.size < this.maxSize;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    push(data: unknown): void {
        if (!this.hasRoom()) {
            throw('Stack is full');
        } else {
            this.stack.addToHead(data);
            this.size++;
        }
    }
}

const s = new Stack(4);

for (let i = 0; i < 5; i++) {
    s.push(i);
    console.log(s.stack.print());
}