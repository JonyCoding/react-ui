function echo<T>(arg: T): T {
    return arg
}

const result = echo<number>(123)

function swap<T, U>(tuple: [U, T]): [T, U] {
    return [tuple[1], tuple[0]]
}

let res2 = swap([123, '233'])

// 约束范型
function echoWithArr<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}
const arrs = echoWithArr([1, 2, 3])

// 约束范型
interface IWithLength {
    length: number
}

function echoWithLength<T extends IWithLength>(arg: T): T {
    console.log(arg.length);
    return arg
}
const str = echoWithLength('1231231')
const obj = echoWithLength({ length: 2 })
const arr = echoWithLength([1, 2, 3])

class Queue<T> {
    private data = [];
    push(item: T) {
        return this.data.push(item)
    }
    pop(): T {
        return this.data.shift()
    }
}

const queue = new Queue<number>()
queue.push(1)
queue.push(23)
console.log(queue.pop().toFixed());


interface KeyPail<T, U> {
    key: T
    value: U
}
let kp1: KeyPail<number, string> = { key: 123, value: '231' }

let aaa:Array<number> = []