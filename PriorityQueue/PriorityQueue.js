"use strict";
exports.__esModule = true;
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.heap = [null];
        this.size = 0;
    }
    PriorityQueue.prototype.canSwap = function (current, left, right) {
        return (this.exists(left) && this.heap[left].priority < this.heap[current].priority) || (this.exists(right) && this.heap[right].priority < this.heap[current].priority);
    };
    PriorityQueue.prototype.swap = function (a, b) {
        var _a;
        _a = [this.heap[b], this.heap[a]], this.heap[a] = _a[0], this.heap[b] = _a[1];
    };
    PriorityQueue.prototype.isEmpty = function () {
        return this.size === 0;
    };
    PriorityQueue.prototype.exists = function (current) {
        return current <= this.size;
    };
    PriorityQueue.prototype.getParent = function (current) {
        return Math.floor(current / 2);
    };
    PriorityQueue.prototype.getLeft = function (current) {
        return current * 2;
    };
    PriorityQueue.prototype.getRight = function (current) {
        return current * 2 + 1;
    };
    return PriorityQueue;
}());
