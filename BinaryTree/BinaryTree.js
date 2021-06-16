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
    return BinaryTree;
}());
var bt = new BinaryTree(50);
for (var i = 10; i <= 100; i += 10) {
    bt.add(i);
}
console.log(bt);
