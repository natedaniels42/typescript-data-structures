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
}