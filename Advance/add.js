var add = function (a, b) { return a + b; };
add.debugName = 'Addition with 2 values';
console.log(add(1, 2));
console.log(add.debugName);
var add2 = function (a, b, c) { return a + b + (c != null ? c : 0); };
add2.debugName = 'With 3';
console.log(add2(1, 2, 3));
console.log(add2.debugName);
