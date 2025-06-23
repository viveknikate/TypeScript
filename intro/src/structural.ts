type User = { id: string};
type Product = { id: string};

let user: User = {id: '1'};
let product: Product = {id: '2'};

// this is ok, both have same structure
console.log(product);
product = user
console.log(product);

type Point2D = {x: number, y: number};
type Point3D = {x: number, y: number, z: number};
let a: Point2D = {x:1, y:2};
let b: Point3D = {x:3, y:22, z:33};
console.log(a);
a = b;
console.log(a);         // extra info is ignored

// b = a;              // wrong: require z parameter which doesn't exist in Point2D
