type Point = {
    x: number;
    y: number;
};

const center: Readonly<Point> = {
    x: 12,
    y: 29
}

console.log(center);
// values are read-only, can't be changed
// center.x = 45;          // not allowed
