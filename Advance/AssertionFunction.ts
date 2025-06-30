type Person = {
    name: string;
    DOB?: Date;
};

function loadPerson(): Person | null{
    // return {name:'sdf', DOB: new Date()};
    return null;
}

const mayBePerson = loadPerson();

function checkAssert(isPossible: unknown, message: string): asserts isPossible{
    if(!isPossible) throw new Error(message);
}

checkAssert(mayBePerson != null, "unable to fetch data")
// here before accessing name we need to check for null
console.log("Name is: ", mayBePerson.name);

function CheckDate(dateValue: unknown, message: string): asserts dateValue is Date{
    if(!(dateValue instanceof Date)) throw new TypeError(message);
}

CheckDate(mayBePerson.DOB, 'not Date');
console.log("DOB is: ", mayBePerson.DOB.toISOString());
