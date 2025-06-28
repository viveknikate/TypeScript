type Square1 = {
    kind:'square';
    size: number;
};

type Rectangle1 = {
    kind:'rectangle';
    width: number;
    height: number;
};

type Circle ={
    kind:'circle';
    radius: number;
}

type Shapes = Square1 | Rectangle1 | Circle;

function getArea1(shape: Shapes): number {
    if (shape.kind === 'square') {
        return shape.size * shape.size;
    }else if(shape.kind === 'rectangle'){
        return shape.width * shape.height;
    }else if(shape.kind === 'circle'){
        return Math.PI * shape.radius * shape.radius;
        // return Math.PI * shape.radius ** 2;
    }else{
        throw new Error('Invalid shape');
    }
}

console.log("Square area is: ", getArea1({kind:'square', size: 10}));
console.log("Rectangle area is: ", getArea1({kind:'rectangle', width: 10, height: 20}));
console.log("Circle area is: ", getArea1({kind:'circle', radius: 10}));

// or
type ValidationSuccess = {
    isValid: true;
    SuccessMessage: string;
}

type ValidationFailure = {
    isValid: false;
    FailureMessage: string;
}

type ValidationResult = ValidationSuccess | ValidationFailure;

const success: ValidationResult = {isValid: true, SuccessMessage: 'Success'};
const failure: ValidationResult = {isValid: false, FailureMessage: 'Failure'}

function CheckValid(input: ValidationResult){
    if(input.isValid){
        console.log(input.SuccessMessage);
    }else if(input.isValid === false){
        console.log(input.FailureMessage);
    }else{
        throw new Error('Invalid result');
    }
}
CheckValid(success);
CheckValid(failure);

