type circleConfig = {
    color?: string;
    radius?: number;
}

class circle {
    private config: Required<circleConfig>;         // here we are making the config as required
    constructor(config: circleConfig) {
        this.config = {
            color: config.color ?? 'Black',
            radius: config.radius ?? 100,
        };
    }
    draw(){
        console.log(`My Color is: ${this.config.color} and radius is: ${this.config.radius}`);
    }
}

const c1 = new circle({color: 'Red'});
const c2 = new circle({radius:56});

console.log("C1: ", c1);
console.log("C2: ", c2);
