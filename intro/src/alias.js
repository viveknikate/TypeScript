var p1 = { x: 1, y: 2 };
var p2 = { x: 3, y: 22 };
// const p3: Point = {xx:2, y:3};  // wrong
var p4 = { x: 2, y: 3 };
// p4 = {x:20, y:30};              // const cannot be re-assigned but
p4.x = 100;
p4.y = 200;
console.log(p1);
console.log(p2);
console.log(p4);
