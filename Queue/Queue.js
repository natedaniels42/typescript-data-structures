"use strict";
exports.__esModule = true;
var LinkedList_1 = require("../LinkedList/LinkedList");
var Queue = /** @class */ (function () {
    function Queue(maxSize) {
        if (maxSize === void 0) { maxSize = Infinity; }
        this.queue = new LinkedList_1["default"]();
        this.size = 0;
        this.maxSize = maxSize;
    }
    Queue.prototype.hasRoom = function () {
        return this.size < this.maxSize;
    };
    Queue.prototype.isEmpty = function () {
        return this.size === 0;
    };
    Queue.prototype.enqueue = function (data) {
        if (!this.hasRoom()) {
            throw ('Queue is full');
        }
        else {
            this.queue.addToTail(data);
            this.size++;
        }
    };
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            throw ('Queue is empty');
        }
        else {
            var removedHead = this.queue.removeHead();
            this.size--;
            return removedHead;
        }
    };
    return Queue;
}());
exports["default"] = Queue;
