let dice: number;
function rollDice(){
    dice = Math.floor(Math.random()*6)+1;
}

rollDice()
console.log("Value is: ", dice!);        // here we are getting the error so using !

// we are logging again so that we can see the value
rollDice()
console.log("Value is: ", dice!);

// again we are getting the same erorr
// to overcome above issue we can use ! when we declare the variable

// we are sure that before using that dice2 value it must be defined ( we'll for sure assign some value to it)
let dice2!: number;
function rollDice2(){
    dice = Math.floor(Math.random()*6)+1;
}

rollDice()
console.log("Value is: ", dice2);        // here we are getting the error so using !

// we are logging again so that we can see the value
rollDice()
console.log("Value is: ", dice2);

class Point{
    x!: number;
    y!: number;
    constructor(){
        this.moveRandom();
    }
    moveRandom(){
        this.x = Math.random();
        this.y = Math.random();
    }
};