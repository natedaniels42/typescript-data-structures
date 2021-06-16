import Vertex from "../Graph/Vertex/Vertex";

class PriorityQueue {
    heap: {vertex: Vertex, priority: number}[];
    size: number;

    constructor() {
        this.heap = [null];
        this.size = 0;
    }

    canSwap(current: number, left: number, right: number): boolean {
        return (this.exists(left) && this.heap[left].priority < this.heap[current].priority) || (this.exists(right) && this.heap[right].priority < this.heap[current].priority);
    }

    swap(a: number, b: number): void {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    exists(current: number): boolean {
        return current <= this.size;
    }

    getParent(current: number): number {
        return Math.floor(current / 2);
    }

    getLeft(current: number): number {
        return current * 2;
    }

    getRight(current: number): number {
        return current * 2 + 1;
    }
}