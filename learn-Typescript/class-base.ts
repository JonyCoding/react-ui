// class定义了一切事物的抽象
// Object是类的实例
// 面向对象三大特征 封装 继承 多态
class Animal {
    name: string;
    static categoies:string[] = ['mammal','bird']
    constructor(name: string) {
        this.name = name
    }
    run() {
        return `${this.name} is running`
    }
}

let snake = new Animal(
    'snake'
)
console.log(snake.run());
class Dog extends Animal {
    bark(){
        return `${this.name} is bark`
    }
}

class Cat extends Animal{
    constructor(name){
        // 必须使用super调用父类方法
        super(name)
    }
    run(){
        return 'Meow,' + super.run()
    }
}

// public 可以被随意访问到，默认都是public
console.log(snake.name); 
snake.name = 'duck'
// private 私有成员，只能在类内部访问


//静态属性,直接可以访问
Animal.categoies

// 一种定义或者契约，接口 抽象 类的属性和方法
interface Redio {
    switchRedio(trigger:boolean):void;
}
interface Battery { 
    checkBatteryStatus()
}
class Car implements Redio{
    switchRedio(){

    }
}

class CellPhone implements Redio,Battery {
    switchRedio(){

    }
    checkBatteryStatus(){

    }
}