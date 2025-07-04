"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPerson = createPerson;
function createPerson(first, last) {
    return {
        name: first,
        surname: last,
        fullname: "".concat(first, " ").concat(last),
    };
}
;
function logDetails(obj) {
    console.log(obj.name, obj.surname, obj.fullname);
}
logDetails(createPerson('Vivek', 'Nikate'));
