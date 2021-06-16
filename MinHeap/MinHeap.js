var MinHeap = /** @class */ (function () {
    function MinHeap() {
        this.heap = [null];
        this.size = 0;
    }
    MinHeap.prototype.add = function (value) {
        this.heap.push(value);
        this.size++;
        this.bubbleUp();
    };
    MinHeap.prototype.bubbleUp = function () {
        var current = this.size;
        while (current > 1 && this.heap[current] < this.heap[this.getParent(current)]) {
            this.swap(current, this.getParent(current));
            current = this.getParent(current);
        }
    };
    MinHeap.prototype.canSwap = function (current, left, right) {
        return (this.exists(left) && this.heap[left] < this.heap[current]) || (this.exists(right) && this.heap[right] < this.heap[current]);
    };
    MinHeap.prototype.swap = function (a, b) {
        var _a;
        _a = [this.heap[b], this.heap[a]], this.heap[a] = _a[0], this.heap[b] = _a[1];
    };
    MinHeap.prototype.isEmpty = function () {
        return this.size === 0;
    };
    MinHeap.prototype.exists = function (current) {
        return current <= this.size;
    };
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
var mh = new MinHeap();
for (var i = 100; i >= 0; i -= 10) {
    mh.add(i);
    console.log(mh.heap);
}
