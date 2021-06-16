import LinkedList from "../LinkedList/LinkedList";;

class HashMap {
    hashMap: LinkedList[];

    constructor(size: number) {
        this.hashMap = Array.apply(null, new Array(size)).map(() => new LinkedList());
    }

    hash(key: string): number {
        return key.split('').map(char => char.charCodeAt(0)).reduce((a,c) => a + c) % this.hashMap.length;
    } 
}

