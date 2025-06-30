type Point2D = {
    x: number;
    y: number;
};

type Point3D = {
    x: number;
    y: number;
    z: number;
}

let p1: Point2D = {x: 1, y: 2};
let p2: Point3D = {x: 1, y: 2, z: 3};

// so we can, coz all things are present there in p2 required for p1
p1 = p2;

// but p2 != p1, doesn't contains last value z in p1 required for p2
// p2 = p1; // getting error

// we can say trust me its safe
p2 = p1 as Point3D

type person = {
    name: string;
    email: string;
}

let a1: person = {name: 'v', email: 'v@v.com'}

// here 
// a1 = p1 as person   // single assertion is not working coz there is no common property between a1 and p1
a1 = p1 as unknown as person;       // double assertion, error gone
// we can assign any variable type to unknown & unknown can be asserted to anything, use with Caution 
