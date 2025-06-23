function add(a: number, b: number): number{
    return a+b;
}

function log(message: string): void{
    console.log(message);
}

function sum(...values: number[]): number{
    return values.reduce((a,b)=> {
        return a+b
    });
}

console.log(add(1,2));
log("hello");
console.log(sum(1,2,3,4));
console.log(sum(1,23));

// first class function
type ADD = (a: number, b: number) => number;

let add1: ADD = (a,b) => {
    return a+b;
}
let add2: ADD = (a,b)=> {
    return a+b;
}
console.log(add1(10,22));
console.log(add2(1,2));