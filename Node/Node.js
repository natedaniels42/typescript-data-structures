"use strict";
exports.__esModule = true;
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    Node.prototype.getNextNode = function () {
        return this.next;
    };
    Node.prototype.setNextNode = function (node) {
        this.next = node;
    };
    return Node;
}());
exports["default"] = Node;
