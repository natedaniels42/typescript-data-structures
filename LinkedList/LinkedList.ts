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

const list: LinkedList = new LinkedList();
list.addToHead(1);
list.addToHead(2);
list.addToHead(3);


console.log(list.print());