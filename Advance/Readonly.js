function reverseSorted(input) {
    // return input.sort().reverse();  // this will change the original array
    return input.slice().sort().reverse(); // slice is to create the copy of original array
}
var numbers = [1, 2, 3, 4, 5];
var res = reverseSorted(numbers);
console.log(res);
console.log(numbers);
var p1 = [0, 0];
function move(p, x, y) {
    return [p[0] + x, p[1] + y]; // this will not mutate the original tuple
    // p[0] += x;
    // p[1] += y;
    // return p;
}
var p2 = move(p1, 10, 10);
console.log(p1); // it shouldn't be changing so make the point readonly
console.log(p2);
