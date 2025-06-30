function reverseSorted(input: readonly number[]): number[] {
    // return input.sort().reverse();  // this will change the original array
    return input.slice().sort().reverse();  // slice is to create the copy of original array
}
const numbers = [1, 2, 3, 4, 5];
const res = reverseSorted(numbers);
console.log(res);
console.log(numbers);

type Neat = readonly number[];
type Long = ReadonlyArray<number>;

type Point = readonly [x: number, y: number];

const p1: Point = [0, 0]
function move(p: Point, x: number, y: number) {
    return [p[0] + x, p[1] + y];                // this will not mutate the original tuple
    // p[0] += x;
    // p[1] += y;
    // return p;
}
const p2 = move(p1, 10, 10);
console.log(p1);                // it shouldn't be changing so make the point readonly
console.log(p2);


