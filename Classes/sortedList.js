class List {
    constructor() {
        this.result = [];
        this.size = this.result.length;
    }

    add(element){
        this.result.push(element);
        this.size += 1;
        this.result.sort((a, b) => a - b);
    }

    remove(index) {
        if (index < 0 || index > this.size - 1) {
            throw new Error('Index is outside the array.')
        } else {
            // remove 1 element starting from position index
            this.result.splice(index, 1);
            this.size -= 1;
        }
    }

    get(index){
        if (index < 0 || index > this.size - 1) {
            throw new Error('Index is outside the array.')
        } else {
            return this.result[index];
        }
    }
}

let list = new List();
console.log(list.add(5));
console.log(list.add(9));
console.log(list.add(7));
console.log(list.remove(1));
console.table(list);
console.log(list.get(0));


// console.log(list.get(1));