

/***************
 *  
 * Crear estructura de datos Stack iterable
 * 
 ***************/

class Stack {
    constructor() {
        this.node = [];
    }

    size() {
        return this.node.length;
    }

    push(e) {
        return this.node.push(e);
    }

    pop() {
        return this.node.pop();
    }

    [Symbol.iterator]() {
        const data = [...this.node];
        return {
            next() {
                return {
                    done: data.length === 0,
                    value: data.pop()
                }
            }
        }
    }
}


/***************
 *  
 * Crear estructura de datos Queue iterable
 * 
 ***************/

class Queue {
    constructor() {
        this.node = [];
    }

    size() {
        return this.node.length;
    }

    push(e) {
        return this.node.push(e);
    }

    pop() {
        return this.node.shift();
    }

    [Symbol.iterator]() {
        const data = [...this.node];
        return {
            next() {
                return {
                    done: data.length === 0,
                    value: data.shift()
                }
            }
        }
    }
}