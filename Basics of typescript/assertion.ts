const load = (): unknown =>{
    return 1;
}
let hello = load();
console.log(hello);

if(typeof hello === 'string'){
    console.log((hello).trim());
}

// instead of doing above
console.log((hello as string).trim());              // this will work in tsx file 
// or same as above
console.log((<string>hello).trim());                // this will NOT work in tsx file 
// TypeScript will not throw an error, because you're saying:
// Trust me, this is a string.
// But at runtime, hello is a number (1), and calling .trim() on a number causes: