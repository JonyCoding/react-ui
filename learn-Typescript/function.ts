// 函数声明
function add(x: number, y: number, z?: number): number {
    return x + y
}
let resulr = add(1, 3)

let a: (x, y, z) => number = add