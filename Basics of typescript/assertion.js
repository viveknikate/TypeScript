var load = function () {
    return 1;
};
var hello = load();
console.log(hello);
if (typeof hello === 'string') {
    console.log((hello).trim());
}
// instead of doing above
// console.log((hello as string).trim());
