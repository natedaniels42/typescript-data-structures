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

    pop(): Node {
        if (this.isEmpty()) {
            throw('Stack is empty');
        } else {
            const removedHead: Node = this.stack.removeHead();
            this.size--;
            return removedHead;
        }
    }

    peek(): unknown {
        if (this.isEmpty()) {
            throw('Stack is empty');
        } else {
            return this.stack.head.data;
        }
    }
}

export default Stack;