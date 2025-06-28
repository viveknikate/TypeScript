class Person {
    private _age: number
    constructor (age: number){
        this._age = age;
    }
    growOld(){
        this._age++;
    }
    age(){
        return this._age;
    }
}
const person = new Person (0);
person.growOld();
const grow = person.growOld;
grow();         // this word will be undefined here
console. log("age: ", person.age());

