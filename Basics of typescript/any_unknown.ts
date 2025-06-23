let exampleAny: any;
let exampleUnknown: unknown;

exampleAny = 10;
console.log(exampleAny);
exampleAny = "world";
console.log(exampleAny);

exampleUnknown = 23;
console.log(exampleUnknown);
exampleUnknown = "Hello";
console.log(exampleUnknown);

// any
exampleAny.allows.anything.you.can.imagine();
let anyBool: boolean = exampleAny;          // allows you to assign this value to any type of variable

// you can do this unless the type is known
// exampleUnknown.trim();
// let anyBool2: boolean = exampleUnknown;

// to do trim() first check is it string
if(typeof exampleUnknown === 'string'){
    exampleUnknown = exampleUnknown.trim();
}

if(typeof exampleUnknown === 'boolean'){
    let unknownSetBool: boolean = exampleUnknown;
}