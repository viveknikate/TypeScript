type Point = {
    readonly x: number;
    y?: number;
}

type Mapped<T> = {
    // readonly [K in keyof T]: T[K];          
    // -readonly [K in keyof T]: T[K];              // - sign at start will remove readonly modifire if its there in type
    // +readonly [K in keyof T]: T[K];              // + sign at start is just for readability
    // +readonly [K in keyof T]?: T[K];              // ? sign at end to treat all variable as optional
    // +readonly [K in keyof T]-?: T[K];              // - sign before ? is to remove all optional sign from type treat as mandatory 
}

type T1 = Mapped<Point>