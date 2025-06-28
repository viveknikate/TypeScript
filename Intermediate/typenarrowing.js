var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () {
        console.log('meow');
    };
    return Cat;
}());
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
        console.log("woof");
    };
    return Dog;
}());
// confirming the object's type. using instanceof operator
function speak(animal) {
    if (animal instanceof Cat) {
        animal.meow();
    }
    if (animal instanceof Dog) {
        animal.bark();
    }
}
// here we are using the 2 different types, they are not class so we can't use instanceof operator
// instead of we can use in operator
function getArea(shape) {
    if ("size" in shape) {
        return shape.size * shape.size;
    }
    if ('width' in shape && 'height' in shape) {
        return shape.width * shape.height;
    }
    return 0;
}
var c = new Cat();
var d = new Dog();
console.log("Square area is: ", getArea({ size: 10 }));
console.log("Rectangle area is: ", getArea({ width: 10, height: 20 }));
console.log("Dog: ");
speak(d);
console.log("Cat ");
speak(c);
