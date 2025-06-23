class Animal{
    private name: string;
    protected age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age
    }

    public move(distanceInMeters: number){
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

let animal = new Animal('Cat', 20);
animal.move(10);

// animal.name = 'Dog';         // wrong its private
animal.move(20);

class Bird extends Animal{
    fly(distanceInMeters: number){
        console.log(`I'm bird my age: ${this.age} flew ${distanceInMeters}m.`);
    }
}

let bird = new Bird('Parrot', 10);
bird.fly(10);