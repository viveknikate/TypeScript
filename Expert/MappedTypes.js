var center = {
    x: 10,
    y: 20,
    z: 30,
};
// here I am able to change the values of center property
center.x = 100; // but this should not happen to avoid this
var center2 = {
    x: 10,
    y: 20,
    z: 30,
};
var center3 = {
    x: 10,
    y: 20,
    z: 30,
};
// center3.x = 100;        // not allowed
var center4 = {
    x: 10,
    y: 20,
    z: 30,
};
console.log(center4.x);
// center4.z = 12;     // not allowed
