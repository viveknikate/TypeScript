var p1 = {
    name: 'vivek',
    mail: 'vivek@gmail.com',
    phone: '123',
};
var p2 = {
    name: 'Nikate',
    mail: 'Nikate@gmail.com',
    phone: undefined
};
console.log(p1, p2);
console.log("p1.name: ", p1.name);
console.log("p1.mail: ", p1.mail);
console.log("p1.phone: ", p1.phone); // if present then prints its value, else undefined
console.log("p2.name: ", p2.name);
console.log("p2.mail: ", p2.mail);
console.log("p2.phone: ", p2.phone); // if present then prints its value, else undefined
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var p = new Point();
p.x = 1;
console.log(p);
