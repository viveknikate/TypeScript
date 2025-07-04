"use strict";
// we can create a our own custom types also
Object.defineProperty(exports, "__esModule", { value: true });
function typeName(t) {
    if (t === null)
        return 'null'; // to avoid null as object, now null considered as null
    return typeof t;
}
console.log(typeName(1));
console.log(typeName('1'));
console.log(typeName(true));
console.log(typeName(undefined));
console.log(typeName(null)); // null is cosidered as object
console.log(typeName({}));
