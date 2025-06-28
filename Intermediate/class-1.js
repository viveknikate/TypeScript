var Person = /** @class */ (function () {
    function Person(age) {
        this._age = age;
    }
    Person.prototype.growOld = function () {
        this._age++;
    };
    Person.prototype.age = function () {
        return this._age;
    };
    return Person;
}());
var person = new Person(0);
person.growOld();
var grow = person.growOld;
grow(); // this word will be undefined here
console.log("age: ", person.age());
