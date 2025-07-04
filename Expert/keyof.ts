type Person = {
    name: string;
    email: string;
    age: string;
    location: string;
};

function logDetails(obj: Person, key: string){
    const value = obj[key];
    console.log(`The value of ${key} is: ${value}`);
}

logDetails({ name: 'Vivek', email: 'vivek@gmail', age: '22', location: 'Delhi' }, 'one');           // undefined

function logDetails2(obj: Person, key: 'name' | 'email' | 'age' | 'location'){
    const value = obj[key];
    console.log(`The value of ${key} is: ${value}`);
}

// logDetails2({ name: 'Vivek', email: 'vivek@gmail', age: '22', location: 'Delhi' }, 'two');           // this will not allowed

// we reduce the repetitive work here using keyof operator

type PersonKeys = keyof Person;

function logDetails3(obj: any, key: PersonKeys){
    const value = obj[key];
    console.log(`The value of ${key} is: ${value}`);
}

// logDetails3({ name: 'Vivek', email: 'vivek@gmail', age: '22', location: 'Delhi' }, 'four');     // not allowed
logDetails3({ name: 'Vivek', email: 'vivek@gmail', age: '22', location: 'Delhi' }, 'name');     // not allowed

// Generic function creation:
function logGet<Obj, Key extends keyof Obj>(obj: Obj, key: Key): Obj[Key] {
    return obj[key];
} 
