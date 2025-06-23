let leet;           // default type is any
leet = '1337'
let num = leet as number

console.log("num === 1337", num === 1337);
console.log(num);
console.log("num type: ",typeof num);

// converting it to number
// this is called type coersion
let num2 = +leet;           // use + sign before variable name
console.log("num2 === 1337", num2 === 1337);
console.log(num2);
console.log("num2 type: ",typeof num2);

