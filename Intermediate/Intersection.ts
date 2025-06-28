type Point2D ={
    x:number;
    y:number;
}

// type Point3D ={
//     x: number;
//     y: number;
//     z: number;
// }

type Point3D = Point2D & {
    z: number                // intersection of Point2D and Point3D
}

type Person = {
    name: string;
}
type Email = {
    email: string;
}

type Phone = {
    phone: string;
}

// function contact(details: any) {
function contact(details: Person & Email & Phone) {                 // calling with specific type
    console.log(details.name, "\t", details.email, "\t", details.phone);
}

contact({ name: "Vivek", email: "vivek@me.com", phone: "1234567890" });

// also we can do this
type ContactDetails = Person & Phone & Email;
// just for code-redability
type ContactDetails2 = 
    & Person 
    & Phone
    & Email;
