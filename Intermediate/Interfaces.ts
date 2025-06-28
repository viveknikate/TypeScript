type Point2D = {
    x:number;
    y:number;
}

type Point3D = Point2D & {
    z: number                // intersection of Point2D and Point3D
}

export const p1: Point3D = {
    x:1,
    y:2,
    z:3
}

// in same way as type we can use interfaces, difference is '=' operator & extends keyword
interface Point2D1 {
    x: number;
    y: number;
}

interface Point3D1 extends Point2D1 {
    z: number;
}

export const p2: Point3D1 = {
    x:1,
    y:2,
    z:3
}