class BinaryTree {
    value: number;
    depth: number;
    left: BinaryTree | null;
    right: BinaryTree | null;

    constructor(value: number, depth = 1) {
        this.value = value;
        this.depth = depth;
        this.left = null;
        this.right = null;
    }

    add(value: number): void {
        if (value < this.value) {
            if (this.left) {
                this.left.add(value);
            } else {
                this.left = new BinaryTree(value, this.depth + 1);
            }
        } else {
            if (this.right) {
                this.right.add(value);
            } else {
                this.right = new BinaryTree(value, this.depth + 1);
            }
        }
    }
}

