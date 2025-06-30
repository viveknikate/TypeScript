type Add = {
    (a: number, b: number): number,
    (a: number, b: number, c: number): number,
    debugName?: string,
};

const add: Add = (a: number, b: number) => a + b;
add.debugName = 'Addition with 2 values'
console.log(add(1, 2));
console.log(add.debugName);

const add2: Add = (a: number, b: number, c?: number) => a + b + (c != null ? c : 0);
add2.debugName = 'With 3'
console.log(add2(1, 2, 3));
console.log(add2.debugName);

type PointCreator = {
    // class
    new (x:number, y:number) : {x: number, y: number}
    // class - 2
    new (x:number, y:number, z:number) : {x: number, y: number, z:number},

    // fun-1
    (x:number, y:number) : number;
    // fun-2
    (x:number, y:number, z:number) : number;
    // attribute
    debugName?: string
}