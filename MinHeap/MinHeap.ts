class MinHeap {
    heap: number[];
    size: number;

    constructor() {
        this.heap = [null];
        this.size = 0;
    }

    add(value: number): void {
        this.heap.push(value);
        this.size++;
        this.bubbleUp();
    }

    bubbleUp(): void {
        let current: number = this.size;

        while (current > 1 && this.heap[current] < this.heap[this.getParent(current)]) {
            this.swap(current, this.getParent(current));
            current = this.getParent(current);
        }
    }

    canSwap(current:number, left: number, right: number): boolean {
        return (this.exists(left) && this.heap[left] < this.heap[current]) || (this.exists(right) && this.heap[right] < this.heap[current]);
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


