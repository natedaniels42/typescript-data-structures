import Vertex from "../Graph/Vertex/Vertex";

class PriorityQueue {
    heap: {vertex: Vertex, priority: number}[];
    size: number;

    constructor() {
        this.heap = [null];
        this.size = 0;
    }

    add(vertex: Vertex, priority: number): void {
        this.heap.push({vertex: vertex, priority: priority});
        this.size++;
        this.bubbleUp();
    }

    bubbleUp(): void {
        let current = this.size;

        while (current > 1 && this.heap[current].priority < this.heap[this.getParent(current)].priority) {
            this.swap(current, this.getParent(current));
            current = this.getParent(current);
        }
    }

    popMin(): {vertex:Vertex, priority: number} {
        this.swap(1, this.size);
        const min = this.heap.pop();
        this.size--;
        this.heapify();
        return min;
    }

    heapify(): void {
        let current: number = 1;
        let left: number = this.getLeft(current);
        let right: number = this.getRight(current);

        while(this.canSwap(current, left, right)) {
            if (this.exists(left) && this.exists(right)) {
                if (this.heap[left].priority < this.heap[right].priority) {
                    this.swap(current, left);
                    current = left;
                } else {
                    this.swap(current, right);
                    current = right;
                }
            } else {
                this.swap(current, left);
                current = left;
            }
            left = this.getLeft(current);
            right = this.getRight(current);
        }
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

export default PriorityQueue;