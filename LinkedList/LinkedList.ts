import Node from "../Node/Node";

class LinkedList {
    head: Node | null;

    constructor() {
        this.head = null;
    }

    addToHead(data: any): void {
        const newHead: Node = new Node(data);
        const currentHead: Node | null = this.head;

        if (currentHead) {
            newHead.setNextNode(currentHead);
        }

        this.head = newHead;
    }

    removeHead(): Node | null {
        const removedHead = this.head;

        if (!removedHead) {
            return null;
        }

        if (!removedHead.getNextNode()) {
            this.head = null;
        } else {
            this.head = removedHead.getNextNode();
            removedHead.setNextNode(null);
        }
        return removedHead;
    }

    addToTail(data: any): void {
        const newTail: Node = new Node(data);
        let current: Node | null = this.head;

        if (!current) {
            this.head = newTail;
        } else {
            while(current.getNextNode()) {
                current = current.getNextNode();
            }
            current.setNextNode(newTail);
        }

    }

    print(): string {
        let str: string = '<head> ';
        let current: Node | null = this.head;

        while (current) {
            str += `${current.data} `;
            current = current.getNextNode();
        }

        str += '<tail>';
        return str;
    }
}
