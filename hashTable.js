export class HashTable {
    constructor(size) {
        this.table = new Array(size).fill(null);

    }

    hash(key) {
        return key.charCodeAt(0) % 26;
    }

    insert(key, value) {
        let index = this.hash(key);
        this.table[index] = value;
    }

    search(index) {
        return this.table[index];
    }

    delete() {

    }


    print() {
        let str = "";
        for (let i = 0; i < this.table.length; i++) {
            str += i + ": " + this.table[i] + ", ";
        }
        console.log(str);
    }
}