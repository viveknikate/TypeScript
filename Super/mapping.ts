
type Point = {
    x: number;
    y: number;
    z: number;
    name: string;
    FavColor: 'Red' | 'Green' | 'Blue';
}

let p1: Point;                  // all mandatory property    

type Partials<T> = {
    [K in keyof T]?: T[K];
}

type Optional = Partials<Point>;            // all optional property
let p2: Optional;