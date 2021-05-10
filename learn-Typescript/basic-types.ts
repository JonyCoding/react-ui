
let notSure: string = ''
notSure = 'maybe is a string'

// 联合类型
let numberOrString : number|string = 2
numberOrString = ""

//数组，把同一种类型聚合到一起
let arrOfNumbers: number[] = [1,2,3,4]
arrOfNumbers.push(5)

function test(){
    console.log(arguments);
    // 类数组，没有数组的方法
    arguments.length
    arguments[1]
}

// 元祖,限定了数据类型的数组
let user: [string,number] = ['Jony',2]

