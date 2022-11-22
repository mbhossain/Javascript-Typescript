// program to implement stack data structure
class Stack {
    constructor() {
        this.items = [];
    }

    // add element to the stack
    add(element) {
        return this.items.push(element);
    }

    // remove element from the stack
    remove() {
        if (this.items.length > 0) {
            return this.items.pop();
        }
    }

    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }

    // check if the stack is empty
    isEmpty() {
        return this.items.length == 0;
    }

    // the size of the stack
    size() {
        return this.items.length;
    }

    // empty the stack
    clear() {
        this.items = [];
    }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(8);
console.log('daat1:', stack.items);

stack.remove();
console.log('daat2:', stack.items);

console.log('daat3:', stack.peek());

console.log('daat4:', stack.isEmpty());

console.log('daat5:', stack.size());

stack.clear();
console.log('daat6:', stack.items);