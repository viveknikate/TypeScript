type Person = Record<string, {name: string, role: string}>;

const person: Person = {};
person['000'] = {name:'john', role:'admin'}
person['111'] = {name:'jane', role:'owner'}

type PageInfo = {
    id: string,
    name: string,
}

type Page = {
    Home: PageInfo,
    About: PageInfo,
    Contact: PageInfo
};

// instead of above code
type page = Record<'home' | 'about' | 'contact', PageInfo>;
