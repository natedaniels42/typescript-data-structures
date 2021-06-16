"use strict";
exports.__esModule = true;
var LinkedList_1 = require("../LinkedList/LinkedList");
var Stack = /** @class */ (function () {
    function Stack(maxSize) {
        if (maxSize === void 0) { maxSize = Infinity; }
        this.stack = new LinkedList_1["default"]();
        this.size = 0;
        this.maxSize = maxSize;
    }
    Stack.prototype.hasRoom = function () {
        return this.size < this.maxSize;
    };
    Stack.prototype.isEmpty = function () {
        return this.size === 0;
    };
    Stack.prototype.push = function (data) {
        if (!this.hasRoom()) {
            throw ('Stack is full');
        }
        else {
            this.stack.addToHead(data);
            this.size++;
        }
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            throw ('Stack is empty');
        }
        else {
            var removedHead = this.stack.removeHead();
            this.size--;
            return removedHead;
        }
    };
    Stack.prototype.peek = function () {
        if (this.isEmpty()) {
            throw ('Stack is empty');
        }
        else {
            return this.stack.head.data;
        }
    };
    return Stack;
}());
exports["default"] = Stack;
