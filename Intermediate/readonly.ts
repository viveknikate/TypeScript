type Point2D = {
    x: number;
    y: number
};
const p1: Point2D = {x: 1, y: 2};

// variable assignment
// p1 = {x: 3, y: 22};         // not allowed

// property assignment
p1.x = 3;
p1.y = 22;          // although it should not work, but it works

// for that use this readonly modifire
type Point3D = {
    readonly x: number;
    readonly y: number;
    readonly z: number;
}

const p2: Point3D = {x: 3, y: 22, z: 33};

// now variable assignment is not allowed
// p2 = {x: 3, y: 22, z: 33};      // not allowed

// along with property assigment also not allowed
// p2.x = 37;                       // not allowed
// p2.y = 13;                       // not allowed
// p2.z = 30;                       // not allowed

// but you can read them but not re-assign
console.log(`p1: ${p1}`);           // p1: [object Object]
console.log(`p2: ${p2}`);

console.log(`p2: ${p2.x}`);
console.log(`p1: ${p1.x}`);

// to print whole data use json.stringify
console.log(`p1: ${JSON.stringify(p1)}`);       // p1: {"x":3,"y":22}
console.log(`p2: ${JSON.stringify(p2)}`);       // p2: {"x":3,"y":22,"z":33}

class Animal{
    name: string;
    constructor(name: string){
        this.name = name;
    }
}

const sheep = new Animal('Sheep');
console.log(sheep.name);        // allowed
sheep.name = 'Modified';        // shouldn't be happening but value changed to avoid this use readonly modifire for name
console.log(sheep.name);

class Person{
    readonly name: string;
    constructor(name: string){
        this.name = name;
    }
}

const per1 = new Person('Vivek');
console.log(per1.name);
// per1.name = 'new one';          // not allowed  