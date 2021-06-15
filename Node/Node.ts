class Node {
    data: any;
    next: Node | null;

    constructor(data: any) {
        this.data = data;
        this.next = null;
    }

    getNextNode(): Node | null {
        return this.next;
    }

    setNextNode(node: Node | null) {
        this.next = node;
    } 
}

export default Node;
