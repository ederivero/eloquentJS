class Group {
    constructor() {
        this.items = [];
    }
    add(value) {
        !this.has(value) && this.items.push(value)
    }
    delete(value) {
        this.items = this.items.filter(item => item !== value)
    }
    has(value) {
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
        return this.items.includes(value);
    }
    static from(array) {
        let group = new Group();
        for (let i = 0; i < array.length; i++) {
            group.add(array[i]);
        }
        return group;
    }
    // Another exercise
    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}
class GroupIterator {
    constructor(group) {
        this.group = group;
        this.position = 0;
    }
    next() {
        if (this.position >= this.group.items.length) {
            return { done: true };
        } else {
            let result = {
                value: this.group.items[this.position],
                done: false
            };
            this.position++;
            return result;
        }
    }
}

// for (let value of Group.from(["a", "b", "c"])) {
//     console.log(value);
// }

/*
let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
*/