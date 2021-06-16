import LinkedList from "../LinkedList/LinkedList";

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

    enqueue(data): void {
        if (!this.hasRoom()) {
            throw('Queue is full');
        } else {
            this.queue.addToTail(data);
            this.size++;
        }
    }
}