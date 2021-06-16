"use strict";
exports.__esModule = true;
var Node_1 = require("../Node/Node");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.addToHead = function (data) {
        var newHead = new Node_1["default"](data);
        var currentHead = this.head;
        if (currentHead) {
            newHead.setNextNode(currentHead);
        }
        this.head = newHead;
    };
    LinkedList.prototype.removeHead = function () {
        var removedHead = this.head;
        if (!removedHead) {
            return null;
        }
        if (!removedHead.getNextNode()) {
            this.head = null;
        }
        else {
            this.head = removedHead.getNextNode();
            removedHead.setNextNode(null);
        }
        return removedHead;
    };
    LinkedList.prototype.addToTail = function (data) {
        var newTail = new Node_1["default"](data);
        var current = this.head;
        if (!current) {
            this.head = newTail;
        }
        else {
            while (current.getNextNode()) {
                current = current.getNextNode();
            }
            current.setNextNode(newTail);
        }
    };
    LinkedList.prototype.print = function () {
        var str = '<head> ';
        var current = this.head;
        while (current) {
            str += current.data + " ";
            current = current.getNextNode();
        }
        str += '<tail>';
        return str;
    };
    return LinkedList;
}());
var list = new LinkedList();
list.addToHead(1);
list.addToHead(2);
list.addToHead(3);
console.log(list.print());
list.addToTail(4);
console.log(list.print());
list.addToTail(5);
console.log(list.print());
list.addToTail(6);
console.log(list.print());
