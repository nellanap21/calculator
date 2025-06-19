export class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size).fill('EMPTY');

    }

    hash(key) {
        return key[0].charCodeAt(0) % this.size;
    }

    insert(key) {
        let index = this.hash(key);
        console.log(index);
        // let originalIndex = index;
        // while(this.table[index] != null) {
        //     if(this.table)
        // }
        this.table[index] = key;
    }

    search(key) {
        let index = this.hash(key);
        console.log(index);
        return this.table[index];
    }

    delete() {

    }


    print() {
        let str = "";
        for (let i = 0; i < this.table.length; i++) {
            str += "[" + i + ": " + this.table[i] + "] ";
        }
        console.log(str);
    }
}