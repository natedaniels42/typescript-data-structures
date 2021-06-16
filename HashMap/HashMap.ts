import LinkedList from "../LinkedList/LinkedList";;
import Node from "../Node/Node";

class HashMap {
    hashMap: LinkedList[];

    constructor(size: number) {
        this.hashMap = Array.apply(null, new Array(size)).map(() => new LinkedList());
    }

    hash(key: string): number {
        return key.split('').map(char => char.charCodeAt(0)).reduce((a,c) => a + c) % this.hashMap.length;
    } 

    assign(key: string, value: unknown): void {
        const arrayIndex: number = this.hash(key);
        const list: LinkedList = this.hashMap[arrayIndex];
        let current: Node | null = list.head;
        let previous: Node | null = null;
        if (!current) {
            list.head = new Node({key, value});
        } else {
            while (current) {
                if (current.data.key === key) {
                    current.data.value = value;
                    return;
                }
                previous = current;
                current = current.getNextNode();
            }
            previous.setNextNode(new Node({key, value}));
        }
    }
}


