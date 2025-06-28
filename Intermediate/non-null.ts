type Point = {
    x: number;
    y: number;
};

let p: Point;
function initializePoint(){
    p = {x:1, y:2};
}

initializePoint();
// if we are sure that the value must present then we can use ! non-null assertion
console.log(p!.x);           // here its undefined but actually we defined, so we can use ! non-null assertion
console.log(p!.y);           // here its undefined but actually we defined, so we can use ! non-null assertion

type Person = {
    name: string;
    email?: string | null;
}
const p1: Person = {name:'v', email:'v@v.com'}
const p2: Person = {name:'G'};

function ensureContactable(p: Person){
    if(p.email == undefined) throw new Error(`Person ${p1.name} is not contactable`);
}

function SendOutMail(p: Person){
    ensureContactable(p);
    console.log(`Sending mail to ${p!.email}`);
    // The ! after p tells TypeScript: "I am sure that p is not null or undefined."
    console.log(`Sending mail to ${p.email!}`);
    // The ! after email tells TypeScript: "I am sure that email is not null or undefined."
}

SendOutMail(p1);
SendOutMail(p2);            // Person v is not contactable