var p;
function initializePoint() {
    p = { x: 1, y: 2 };
}
initializePoint();
// if we are sure that the value must present then we can use ! non-null assertion
console.log(p.x); // here its undefined but actually we defined, so we can use ! non-null assertion
console.log(p.y); // here its undefined but actually we defined, so we can use ! non-null assertion
var p1 = { name: 'v', email: 'v@v.com' };
var p2 = { name: 'G' };
function ensureContactable(p) {
    if (p.email == undefined)
        throw new Error("Person ".concat(p1.name, " is not contactable"));
}
function SendOutMail(p) {
    ensureContactable(p);
    console.log("Sending mail to ".concat(p.email));
}
SendOutMail(p1);
SendOutMail(p2); // Person v is not contactable
