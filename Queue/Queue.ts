import LinkedList from "../LinkedList/LinkedList";
import Node from "../Node/Node";

class Queue {
    queue: LinkedList;
    size: number;
    maxSize: number;

    constructor(maxSize = Infinity) {
        this.queue = new LinkedList();
        this.size = 0;
        this.maxSize = maxSize;
    }

    hasRoom(): boolean {
        return this.size < this.maxSize;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    enqueue(data: unknown): void {
        if (!this.hasRoom()) {
            throw('Queue is full');
        } else {
            this.queue.addToTail(data);
            this.size++;
        }
    }

    dequeue(): Node {
        if (this.isEmpty()) {
            throw('Queue is empty');
        } else {
            const removedHead: Node = this.queue.removeHead();
            this.size--;
            return removedHead;
        }
    }
}

export default Queue;