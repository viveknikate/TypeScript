// we can create a our own custom types also

export type TypeName<T> = 
    T extends number ? 'number' :
    T extends string ? 'string' :
    T extends undefined ? 'undefined' :
    T extends boolean ? 'boolean' :
    T extends symbol ? 'symbol' :
    T extends bigint ? 'bigint' :
    T extends Function ? 'Function' :
    T extends null ? 'null' :
    'object';


function typeName<T>(t: T): TypeName<T> {
    if(t === null) return 'null' as TypeName<T>;            // to avoid null as object, now null considered as null
    return typeof t as TypeName<T>;
}

console.log(typeName(1));
console.log(typeName('1'));
console.log(typeName(true));
console.log(typeName(undefined));
console.log(typeName(null));                // null is cosidered as object
console.log(typeName({}));