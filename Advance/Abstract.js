var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CommandLine = /** @class */ (function () {
    function CommandLine() {
    }
    CommandLine.prototype.execute = function () {
        console.log('executing command', this.command());
    };
    return CommandLine;
}());
// we can't create the object of abstract class as it only contains the declaration of function not their actually value
//  we can create the object of class which is extending the abstract class. like below
var git1 = /** @class */ (function (_super) {
    __extends(git1, _super);
    function git1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    git1.prototype.command = function () {
        return 'git1';
    };
    return git1;
}(CommandLine));
var git2 = /** @class */ (function (_super) {
    __extends(git2, _super);
    function git2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    git2.prototype.command = function () {
        return "git2";
    };
    return git2;
}(CommandLine));
new git1().execute();
new git2().execute();
// can't 
// new CommandLine().execute();
