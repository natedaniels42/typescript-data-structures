var MinHeap = /** @class */ (function () {
    function MinHeap() {
        this.heap = [null];
        this.size = 0;
    }
    MinHeap.prototype.getParent = function (current) {
        return Math.floor(current / 2);
    };
    MinHeap.prototype.getLeft = function (current) {
        return current * 2;
    };
    MinHeap.prototype.getRight = function (current) {
        return current * 2 + 1;
    };
    return MinHeap;
}());
