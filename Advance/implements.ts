type animal = {
    name: string;
    voice(): void;
}

class Cat implements animal{
    constructor(public name: string){}
    voice(): void {
        console.log('Meow');
    }
}

class Duck implements animal{
    constructor(public name: string){}
    voice(): void{
        console.log('quack');
    }
}
const c = new Cat('Cat');
const d = new Duck('Duck');
console.log(c.name);
console.log(d.name);

d.voice();
c.voice();

