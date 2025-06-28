function getArea1(shape) {
    if (shape.kind === 'square') {
        return shape.size * shape.size;
    }
    else if (shape.kind === 'rectangle') {
        return shape.width * shape.height;
    }
    else if (shape.kind === 'circle') {
        return Math.PI * shape.radius * shape.radius;
        // return Math.PI * shape.radius ** 2;
    }
    else {
        throw new Error('Invalid shape');
    }
}
console.log("Square area is: ", getArea1({ kind: 'square', size: 10 }));
console.log("Rectangle area is: ", getArea1({ kind: 'rectangle', width: 10, height: 20 }));
console.log("Circle area is: ", getArea1({ kind: 'circle', radius: 10 }));
var success = { isValid: true, SuccessMessage: 'Success' };
var failure = { isValid: false, FailureMessage: 'Failure' };
function CheckValid(input) {
    if (input.isValid) {
        console.log(input.SuccessMessage);
    }
    else if (input.isValid === false) {
        console.log(input.FailureMessage);
    }
}
CheckValid(success);
CheckValid(failure);
