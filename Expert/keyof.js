function logDetails(obj, key) {
    var value = obj[key];
    console.log("The value of ".concat(key, " is: ").concat(value));
}
logDetails({ name: 'Vivek', email: 'vivek@gmail', age: '22', location: 'Delhi' }, 'one'); // undefined
function logDetails2(obj, key) {
    var value = obj[key];
    console.log("The value of ".concat(key, " is: ").concat(value));
}
function logDetails3(obj, key) {
    var value = obj[key];
    console.log("The value of ".concat(key, " is: ").concat(value));
}
// logDetails3({ name: 'Vivek', email: 'vivek@gmail', age: '22', location: 'Delhi' }, 'four');     // not allowed
logDetails3({ name: 'Vivek', email: 'vivek@gmail', age: '22', location: 'Delhi' }, 'name'); // not allowed
