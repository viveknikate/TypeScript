export function createPerson(first: string, last: string){
    return {
        name: first,
        surname: last,
        fullname: `${first} ${last}`,
    }
};

type returnType<T> = T extends (...args: any) => infer R
        ? R
        : never;

type Perons = returnType<typeof createPerson> 

function logDetails(obj: ReturnType<typeof createPerson>){
    console.log(obj.name, obj.surname, obj.fullname);
}

logDetails(createPerson('Vivek', 'Nikate'));
