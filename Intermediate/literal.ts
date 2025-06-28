let direction: "up" | "down" | "left" | "right";
// direction = "one";   // not allowed
direction = "down";   // only above mentioned values are allowed

// or
type CardinalDirection = "up" | "down" | "left" | "right";
let direction1: CardinalDirection = 'up'
console.log(direction1);

type DiceValues = 1 | 2 | 3 | 4 | 5 | 6;
let diceValue: DiceValues = 6;
console.log(Math.floor(Math.random() * 6) + 1 as DiceValues);
