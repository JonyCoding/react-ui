// class定义了一切事物的抽象
// Object是类的实例
// 面向对象三大特征 封装 继承 多态
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        return this.name + " is running";
    };
    return Animal;
}());
var snake = new Animal('snake');
console.log(snake.run());
