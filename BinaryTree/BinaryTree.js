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
    return BinaryTree;
}());
var bt = new BinaryTree(50);
for (var i = 10; i <= 100; i += 10) {
    bt.add(i);
}
bt.depthFirstTraversal();
