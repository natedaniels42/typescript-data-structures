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
    return Stack;
}());
var s = new Stack(4);
for (var i = 0; i < 5; i++) {
    s.push(i);
    console.log(s.stack.print());
}
