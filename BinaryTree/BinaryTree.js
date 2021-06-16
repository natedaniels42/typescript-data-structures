"use strict";
exports.__esModule = true;
var Queue_1 = require("../Queue/Queue");
var BinaryTree = /** @class */ (function () {
    function BinaryTree(value, depth) {
        if (depth === void 0) { depth = 1; }
        this.value = value;
        this.depth = depth;
        this.left = null;
        this.right = null;
    }
    BinaryTree.prototype.add = function (value) {
        if (value < this.value) {
            if (this.left) {
                this.left.add(value);
            }
            else {
                this.left = new BinaryTree(value, this.depth + 1);
            }
        }
        else {
            if (this.right) {
                this.right.add(value);
            }
            else {
                this.right = new BinaryTree(value, this.depth + 1);
            }
        }
    };
    BinaryTree.prototype.getNodeByValue = function (value) {
        if (value === this.value) {
            return this;
        }
        else if (value < this.value && this.left) {
            return this.left.getNodeByValue(value);
        }
        else if (value > this.value && this.right) {
            return this.right.getNodeByValue(value);
        }
        else {
            return null;
        }
    };
    BinaryTree.prototype.depthFirstTraversal = function () {
        if (this.left) {
            this.left.depthFirstTraversal();
        }
        console.log(this.value);
        if (this.right) {
            this.right.depthFirstTraversal();
        }
    };
    BinaryTree.prototype.breadthFirstTraversal = function () {
        var queue = new Queue_1["default"]();
        queue.enqueue(this);
        while (!queue.isEmpty()) {
            var current = queue.dequeue().data;
            console.log(current.value);
            if (current.left) {
                queue.enqueue(current.left);
            }
            if (current.right) {
                queue.enqueue(current.right);
            }
        }
    };
    return BinaryTree;
}());
exports["default"] = BinaryTree;
