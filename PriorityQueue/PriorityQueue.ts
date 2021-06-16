import Vertex from "../Graph/Vertex/Vertex";

class PriorityQueue {
    heap: {vertex: Vertex, priority: number}[];
    size: number;

    constructor() {
        this.heap = [null];
        this.size = 0;
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