var str = {
    hello: 'world',
};
console.log(str.hello);
console.log(str['hello']);
var user1 = {
    Vivek: {
        name: 'Vivek',
        age: 30,
        email: 'vivek@me.com',
    }
};
user1['Mahesh'] = {
    name: 'Mahesh',
    email: 'mahesh@me.com',
    age: 25,
};
console.log(user1);
console.log(user1.Vivek);
console.log(user1['Vivek']);
console.log(user1['Mahesh']);
console.log(user1.tt); // if not defined before it comes as undefined so use ?
console.log(user1.tt ? user1.tt : 'not defined');
