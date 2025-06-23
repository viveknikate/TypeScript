function add(a, b) {
    return a + b;
}
function log(message) {
    console.log(message);
}
function sum() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return values.reduce(function (a, b) {
        return a + b;
    });
}
console.log(add(1, 2));
log("hello");
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 23));
var add1 = function (a, b) {
    return a + b;
};
var add2 = function (a, b) {
    return a + b;
};
console.log(add1(10, 22));
console.log(add2(1, 2));
