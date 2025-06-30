type Square ={
    size: number;
};

type Rectangle = {
    width: number;
    height: number;
};
type Shape = Square | Rectangle;

const isSquare = (shape: Shape): shape is Square => 'size' in shape         // if its one line code, then no need to use return

// function isSquare (s1: Shape): s1 is Square {
//     return 'size' in s1;
// }

const isRectangle = (shape: Shape): shape is Rectangle => 'width' in shape;

function getArea(shape: Shape) : number {
    if(isSquare(shape)) return shape.size * shape.size;
    if(isRectangle(shape)) return shape.height * shape.width;
    return 0;
}

console.log(getArea({size: 10}));
console.log(getArea({width: 10, height: 20}));
