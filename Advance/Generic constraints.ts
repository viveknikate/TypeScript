type MyType = {
    name: string
};

function Custom<V extends MyType>(obj: V) : V & {name: string}{
    return {
        ...obj,
        name: 'Vivek'
    }
}

console.log(Custom({name: 'Vivek'}));
