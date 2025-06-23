var user = { id: '1' };
var product = { id: '2' };
// this is ok, both have same structure
console.log(product);
product = user;
console.log(product);
var a = { x: 1, y: 2 };
var b = { x: 3, y: 22, z: 33 };
console.log(a);
a = b;
console.log(a); // extra info is ignored
