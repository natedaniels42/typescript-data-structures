"use strict";
exports.__esModule = true;
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.heap = [null];
        this.size = 0;
    }
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
