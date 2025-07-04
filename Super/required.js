var circle = /** @class */ (function () {
    function circle(config) {
        var _a, _b;
        this.config = {
            color: (_a = config.color) !== null && _a !== void 0 ? _a : 'Black',
            radius: (_b = config.radius) !== null && _b !== void 0 ? _b : 100,
        };
    }
    circle.prototype.draw = function () {
        console.log("My Color is: ".concat(this.config.color, " and radius is: ").concat(this.config.radius));
    };
    return circle;
}());
var c1 = new circle({ color: 'Red' });
var c2 = new circle({ radius: 56 });
console.log("C1: ", c1);
console.log("C2: ", c2);
