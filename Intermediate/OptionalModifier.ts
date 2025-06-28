type Person = {
    name: string;
    mail: string;
    phone?: string;             // optional modifier
}

const p1: Person = {
    name: 'vivek',
    mail: 'vivek@gmail.com',
    phone: '123',
}

const p2: Person = {
    name: 'Nikate',
    mail: 'Nikate@gmail.com',
    phone: undefined
}

console.log(p1, p2);
console.log("p1.name: ", p1.name);
console.log("p1.mail: ", p1.mail);
console.log("p1.phone: ", p1.phone);            // if present then prints its value, else undefined

console.log("p2.name: ", p2.name);
console.log("p2.mail: ", p2.mail);
console.log("p2.phone: ", p2.phone);            // if present then prints its value, else undefined

class Point{
    x?: number;
    y?:number;
    z?: number | null;
}

const p = new Point();
p.x = 1;
p.y = 0;
p.y = undefined;
// p.x = null;         // null is not supported

// to support the null we need to explicitly mention the type.
p.z = null;
console.log(p);


