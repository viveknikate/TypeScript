type Point = {
    x: number;
    y: number;
    z: number;
};

const center: Point = {
    x:10,
    y:20,
    z:30,
};

// here I am able to change the values of center property
center.x = 100;         // but this should not happen to avoid this

type ReadonlyPoint = {
    readonly x: number;
    readonly y: number;
    readonly z: number;
};

// we can use above property, but code repetition.
// DRY (Don't Repeat Yourself)
type ReadonlyPointMapped = {
    readonly [K in 'x'|'y'|'z']: number;
    // readonly [K in keyof Point]: Point[K];
}

const center2: ReadonlyPointMapped = {
    x:10,
    y:20,
    z:30,
}

// center2.x = 100;         // this is not allowed now.

// creating generic type

// This Generic is already there in Typescript
type ReadonlyPointGeneric<T> = {
    readonly [K in keyof T]: T[K];
}

const center3: ReadonlyPointGeneric<Point> ={
    x:10,
    y:20,
    z:30,
}
// center3.x = 100;        // not allowed

const center4: Readonly<Point> ={
    x:10,
    y:20,
    z:30,
}

console.log(center4.x);
// center4.z = 12;     // not allowed