let notDefine: undefined = undefined;
let notPresent: null = null;

class Point{
    x:number;
    y:number;
}

let p: Point = new Point();
p.x = 1;
// p.y = 2;
console.log(p.y);       // undefined

function f(x: number) {
    if(x < 10) return x;
    return null;
}

console.log(f(11));

console.log(null == null);      // true
console.log(undefined == undefined);    // true

console.log(undefined == null);     // true

console.log(false == null);    // false
console.log(false == undefined);    // false
console.log(0 == null);         // false
console.log('' == null);        // false


function decorate(value: string | null | undefined): string {
    if(value == null) return 'NULL';
    return `--------${value.trim()}--------`;
}

console.log("Passing NULL: ", decorate(null));
console.log("Passing UNDEFINED: ", decorate(undefined));
console.log("Passing String: ", decorate("           Hlleo           "));




