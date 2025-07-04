type Perons = {
    name: string;
    age: number;
    occupation: string;
}

const person = {
    name: 'vivek',
    age: 45,
    occupation: 'developer'
} satisfies Perons              // is equivalent to type Perons or not checking


const person2 = {
    name: 'vivek',
    age: 45,
} satisfies Perons          // this doesn't so giving error

// or else you can do

const per3 = {
    name: 'vivek',
    age: 45,
    occupation: 'developer'
}

const p4: Perons = per3;            // i'm able to assign per3 to p4, so per3 is type of person

