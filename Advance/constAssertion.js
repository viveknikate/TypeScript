var name1 = "Vivek";
console.log(name1);
// name = "Nikate";            // not allowed
var num = 123;
console.log(num);
// num = 456;                  // not allowed
var dev = {
    name: 'Vivek',
    age: 21,
};
console.log(dev);
// dev = {                         // direct assignment not allowed, but
//     name: 'Nikate',
//     age: 22,
// }
// this is allowed, but it shouldn't.
dev.name = 'Nikate';
dev.age = 22;
// to avoid above use const assertion
var dev1 = {
    name: 'Pointer',
    age: 1001,
};
console.log(dev1);
// dev1.name = 'Nikate';           // not allowed
// dev1.age = 2002;                  // not allowed
function layout(setting) {
    console.log(setting);
}
var example = {
    align: 'left', // or use here
    padding: 20,
}; // as const
layout(example); // getting error if we remove as const assertion from example variable
layout({
    align: "center",
    padding: 10,
});
