class Cat {
    meow(){
        console. log ('meow');
    }
}
class Dog{
    bark(){
        console. log ("woof");
    }
}
type Animal = Cat | Dog;

// confirming the object's type. using instanceof operator
function speak(animal: Animal) {
    if (animal instanceof Cat){
        animal.meow();
    }
    if (animal instanceof Dog){
        animal.bark();
    }
}

type Square = {
    size: number;
};

type Rectangle = {
    width: number;
    height: number;
};

type Shape = Square | Rectangle;

// here we are using the 2 different types, they are not class so we can't use instanceof operator
// instead of we can use in operator
function getArea(shape: Shape): number {
    if ("size" in shape) {
        return shape.size * shape.size;
    }
    if('width' in shape && 'height' in shape){
        return shape.width * shape.height;
    }
    return 0;
}

const c = new Cat();
const d = new Dog();

console.log("Square area is: ", getArea({size: 10}));
console.log("Rectangle area is: ", getArea({width: 10, height: 20}));
console.log("Dog: ");
speak(d)
console.log("Cat ");
speak(c);

