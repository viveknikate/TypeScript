var isSquare = function (shape) { return 'size' in shape; }; // if its one line code, then no need to use return
// function isSquare (s1: Shape): s1 is Square {
//     return 'size' in s1;
// }
var isRectangle = function (shape) { return 'width' in shape; };
function getArea(shape) {
    if (isSquare(shape))
        return shape.size * shape.size;
    if (isRectangle(shape))
        return shape.height * shape.width;
    return 0;
}
console.log(getArea({ size: 10 }));
console.log(getArea({ width: 10, height: 20 }));
