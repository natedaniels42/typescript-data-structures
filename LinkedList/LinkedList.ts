import Node from "../Node/Node";

class LinkedList {
    head: Node | null;

    constructor() {
        this.head = null;
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

