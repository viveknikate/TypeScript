let regex: RegExp = new RegExp('ab+c');
let arr1: Array<number> = [1,2,3];
let arr2: number[] = [1,2,3,4,5,6,7,8,9,10];
// let set: Set<number> = new Set([1,2,3]);

console.log(regex);
console.log(arr1);
console.log(arr2);
// console.log(set);

let t: [number, number] = [1,2];
console.log(t);

t = [10, 50];
console.log(t);

// wrong
// t = [1];                // must have 2 elements
// t = [1,2,3];

// t = ['c', 2];       // must have both element of type number