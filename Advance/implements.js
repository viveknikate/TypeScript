var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.voice = function () {
        console.log('Meow');
    };
    return Cat;
}());
var Duck = /** @class */ (function () {
    function Duck(name) {
        this.name = name;
    }
    Duck.prototype.voice = function () {
        console.log('quack');
    };
    return Duck;
}());
var c = new Cat('Cat');
var d = new Duck('Duck');
console.log(c.name);
console.log(d.name);
d.voice();
c.voice();
