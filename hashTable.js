export class HashTable {
    constructor(size) {
        this.size = size;
        this.load = 0;
        this.table = new Array(size).fill('EMPTY');
    }

    hash(key) {
        return key[0].charCodeAt(0) % this.size;
    }

    insert(key) {
        if (this.checkLoadFactor()) {
            this.extend();
        }
        
        let originalIndex = this.hash(key);
        // use linear probe for collisions
        for (let i = 0; i < this.size; i++) {
            let index = (originalIndex + i) % this.size;
            if (this.table[index] == 'EMPTY') {
                // if empty, add key to this bucket
                this.table[index] = key;
                this.load++
                return;
            } else if (this.table[index].slice(0,1) == key.slice(0,1) ) {
                // if same variable, overwrite existing value
                this.table[index] = key;
                this.load++
                return;
            } else {
                // do nothing. try next index
            }
        }
        throw new Error (`hash table overflow`);
    }

    search(key) {
        let originalIndex = this.hash(key);
        for (let i = 0; i < this.size; i++) {
            let index = (originalIndex + i) % this.size;
            if (this.table[index].slice(0,1) == key.slice(0,1)) {
                // you have found the correct bucket
                return this.table[index];
            } else if (this.table[index] == 'EMPTY') {
                // you have probed until an empty bucket
                throw new Error (`${key} is not in hash table`);
            } else {
                // bucket is full but with wrong key
                // do nothing. try next index
            }
        }
        // you have searched every index but not found key
        throw new Error (`${key} is not in hash table`);
    }

    // Not necessary to implement delete because we can
    // extend hash table to accomodate all possible variables
    extend() {
        // make a copy of existing table
        let oldTable = [...this.table];

        // increase size by 5
        this.size = this.size + 5;

        // reset load factor
        this.load = 0;

        // create extended hash table
        this.table = new Array(this.size).fill('EMPTY');

        // copy over elements from old table
        for (let i = 0; i < oldTable.length; i++) {
            if (oldTable[i] != 'EMPTY') {
                this.insert(oldTable[i]);
            }
        }
    }

    checkLoadFactor() {
        // wait until hash table is full before extending
        return (this.load + 1) > this.size ;
    }

    print() {
        let str = "";
        for (let i = 0; i < this.table.length; i++) {
            str += "[" + i + ": " + this.table[i] + "] ";
        }
        console.log(str);
    }
}