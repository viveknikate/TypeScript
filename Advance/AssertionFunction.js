function loadPerson() {
    // return {name:'sdf', DOB: new Date()};
    return null;
}
var mayBePerson = loadPerson();
function checkAssert(isPossible, message) {
    if (!isPossible)
        throw new Error(message);
}
checkAssert(mayBePerson != null, "unable to fetch data");
// here before accessing name we need to check for null
console.log("Name is: ", mayBePerson.name);
function CheckDate(dateValue, message) {
    if (!(dateValue instanceof Date))
        throw new TypeError(message);
}
CheckDate(mayBePerson.DOB, 'not Date');
console.log("DOB is: ", mayBePerson.DOB.toISOString());
